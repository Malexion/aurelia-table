
import {BindingEngine, inject, bindable, bindingMode, computedFrom} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';
import __ from 'iterate-js';

@inject(BindingEngine, BindingSignaler)
export class AureliaTable {
	@bindable() header = '';
	@bindable() height = 300;
	@bindable() tableClasses = 'table-hover table-condensed';
	@bindable({ defaultBindingMode: bindingMode.twoWay }) filter = () => true;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) staticSummary = [];
	@bindable({ defaultBindingMode: bindingMode.twoWay }) staticHeader = [];
	@bindable({ defaultBindingMode: bindingMode.twoWay }) rows = [];
	@bindable({ defaultBindingMode: bindingMode.twoWay }) columns = [];

	constructor(bindings, signaler) {
      var self = this;
      self._scrollbarwidth = null;
      self.columnSubscriptions = [];
      self.bindings = bindings;
      self.signaler = signaler;
      self.events = new __.lib.EventManager();
      self.events.read(self);
      self.rowTemplate = (template) => { 
         var row = { 
            class: '', 
            style: {},
            hidden: false, 
            active: false
         };
         __.all(row, (x, y) => {
            if(!__.is.set(template[y]))
               template[y] = x;
         });
      };
      self.colTemplate = (template) => { 
         var col = {   
            field: '', 
            header: '', 
            size: '100%',
            class: '',
            style: '',
            hidden: false, 
            render: null,
            sortable: false,
            filterable: false,
            key: null,
            dir: null,
            defaultDir: 'asc'
         };
         __.all(col, (x, y) => {
            if(!__.is.set(template[y]))
               template[y] = x;
         });
         if(template.sortable && template.key == null)
            template.key = x => __.prop(x, template.field);
      };
      self.windowResize = e => { self.resizeColumns(); };
      self.sort = __.debounce(() => { self.events.trigger('Sort')(); }, 200);
      self.resizeColumns = () => { self.events.trigger('ColumnResize')(); };
      self.styleUpdate = () => { self.events.trigger('StyleUpdate')(); };
      self.clean = () => { self.events.trigger('Clean')(); };
      self.update = (a, b) => { self.events.trigger('Update', { options: a, deep: b })(); };
	}

	onClean(event) {
		if(event.after) {
			__.all(this.columnSubscriptions, x => x.dispose());
			this.columnSubscriptions = [];
		}
	}

	onColumnResize(event) {
		var self = this;
		if(event.after && self.body) {
         var baseWidth = self.body.offsetWidth,
             chunkCount = 0,
             parser = new __.lib.StyleParser();

         // Calculate Widths
         __.all(self.columns, column => {
            if(!__.is.set(column.style))
               column.style = '';
            if(!column.hidden) {
               parser.clear();
               parser.update(column.style);
               parser['width'] = column.size;
               column.style = parser.asString;
               if(column.size == '100%') {
                  chunkCount += 100;
               } else if(__.is.string(column.size)) {
                  if(column.size.contains('%'))
                     chunkCount += parseFloat(column.size.replace('%', ''));
                  else if(column.size.contains('px'))
                     baseWidth -= parseFloat(column.size.replace('px', ''));
               }
            }
         });

         // Cut percentage chunks out of remaining width
         var width;
            __.all(self.columns, column => {
            if(!column.hidden) {
               parser.clear();
               parser.update(column.style);
               width = parser['width'];
               if(__.is.string(width) && width.contains('%'))
                  parser['width'] = ((parseFloat(width.replace('%', '')) / chunkCount) * baseWidth) + 'px';
               column.style = parser.asString;
            }
            });

         //self.styleUpdate();
		}
	}

	onFilterChanged(event) {
      if(event.after) {
         var self = this,
            newFilter = event.data.filter;
         if(__.is.function(newFilter)) {
            __.all(self.rows, (a, b) => {
               a.hidden = !newFilter(a, b);
            });
         } else
            setTimeout(() => { self.filter = () => true; }, 100);
      }
	}

	onUpdate(event) {
		if(event.after) {
			var self = this,
				 options = event.data.options,
				 deep = event.data.deep;
			
			if(__.is.object(options))
				__.fuse(self, options, { deep: deep });
		}
	}

	onSort(event) {
		if(event.after) {
			var self = this,
				 sort = __.filter(self.columns.slice(), x => (x.sortable && x.dir && x.key));

			if(sort) {
				if(sort.length == 1)
					self.rows = __.sort(self.rows.slice(), sort[0]);
				else if(sort.length > 1)
					self.rows = __.sort(self.rows.slice(), sort);
			}
		}
	}

	onSortClick(event) {
		if(event.after) {
			var self = this,
				$event = event.data.event,
				$column = event.data.column;

			$column.dir = __.switch($column.dir, {
				'asc': 'desc',
				'desc': 'asc'
			}, $column.defaultDir);

			$column.key = __.is.function($column.key) ? $column.key : x => __.prop(x, $column.field);

			if(!$event.ctrlKey) {
				__.all(self.columns.slice(), x => {
					if(x.field != $column.field)
						x.dir = null;
				});
			}


		}
	}

	onStyleUpdate(event) {
		if(event.after) {
			this.signaler.signal('style');
		}
	}

	attached() {
		var self = this;
		self.resizeColumns();
		window.addEventListener('resize', self.windowResize);
		self.events.trigger('Attached')();
	}

	detached() {
		window.removeEventListener('resize', this.windowResize);
		this.clean();
		this.events.trigger('Detached')();
	}

	staticHeaderChanged(newRows, oldRows) {
		if(newRows) {
			var self = this;
			__.all(newRows, x => self.rowTemplate(x));
			self.events.trigger('StaticHeadersChanged', { headers: newRows })();
		}
	}

	staticSummaryChanged(newRows, oldRows) {
		if(newRows) {
			var self = this;
			__.all(newRows.slice(), x => self.rowTemplate(x));
			self.events.trigger('StaticSummaryChanged', { summary: newRows })();
		}
	}

	rowsChanged(newRows, oldRows) {
		if(newRows) {
			var self = this;
			__.all(newRows, x => self.rowTemplate(x));
			self.events.trigger('RowsChanged', { rows: newRows })();
		}
	}

	columnsChanged(newColumns, oldColumns) {
		if(newColumns) {
			var self = this,
				resize = () => { self.resizeColumns(); },
				sortme = () => { self.sort(); };
			self.clean();
			__.all(newColumns, x => {
				self.colTemplate(x);
				x.size = x.size ? x.size : '100%';
				// self.columnSubscriptions.push(self.bindings
				// 	.propertyObserver(x, 'style')
				// 	.subscribe(resize));
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'size')
					.subscribe(resize));
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'hidden')
					.subscribe(resize));
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'dir')
					.subscribe(sortme));
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'key')
					.subscribe(sortme));
			});
			self.events.trigger('ColumnsChanged', { columns: newColumns })();
			
			self.resizeColumns();
			self.sort();
		}
	}

	filterChanged(newFilter) {
		this.events.trigger('FilterChanged', { filter: newFilter })();
	}

	get scrollBarWidth() {
		if(!this._scrollbarwidth) { // Calculate browsers scrollbar width once
			var inner = document.createElement('p');
			inner.style.width = "100%";
			inner.style.height = "200px";

			var outer = document.createElement('div');
			outer.style.position = "absolute";
			outer.style.top = "0px";
			outer.style.left = "0px";
			outer.style.visibility = "hidden";
			outer.style.width = "200px";
			outer.style.height = "150px";
			outer.style.overflow = "hidden";
			outer.appendChild (inner);

			document.body.appendChild (outer);
			var w1 = inner.offsetWidth;
			outer.style.overflow = 'scroll';
			var w2 = inner.offsetWidth;
			if (w1 == w2) 
				w2 = outer.clientWidth;

			document.body.removeChild (outer);

			this._scrollbarwidth = (w1 - w2);
		}
		return this._scrollbarwidth;
	}

	@computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight')
	get showScrollBar() {
		return this.body && (this.body.scrollHeight > this.body.clientHeight);
	}

	@computedFrom('height')
	get bodyHeight() {
		return this.height != 0 ? 'height: ' + this.height + 'px; overflow-y: auto;' : '';
	}
}
