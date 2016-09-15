
import {BindingEngine, inject, bindable, computedFrom} from 'aurelia-framework';
import __ from 'iterate-js';

@inject(BindingEngine)
export class AureliaTable {
	@bindable header = '';
	@bindable rows = [];
	@bindable columns = [];
	@bindable maxHeight = 300;

	constructor(bindings, signaler) {
		var self = this;
		self._scrollbarwidth = null;
		self.columnSubscriptions = [];
		self.bindings = bindings;
        self.rowTemplate = (template) => { 
        	var row = { 
                class: '', 
                style: '',
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
                render: null
            };
            __.all(col, (x, y) => {
            	if(!__.is.set(template[y]))
            		template[y] = x;
            });
        };
        self.windowResize = e => {
        	self.columnResize();
        };
	}

	attached() {
		this.columnResize();
		window.addEventListener('resize', this.windowResize);
	}

	detached() {
		window.removeEventListener('resize', this.windowResize);
		this.clean();
	}

	clean() {
		__.all(self.columnSubscriptions, x => x.dispose());
		self.columnSubscriptions = [];
	}

	rowsChanged(newRows, oldRows) {
		if(newRows) {
			__.all(this.rows.slice(), x => this.rowTemplate(x));
		}
	}

	columnsChanged(newColumns, oldColumns) {
		if(newColumns) {
			var self = this;
			self.clean();
			__.all(newColumns.slice(), x => self.rowTemplate(x));
			__.all(newColumns.slice(), x => {
				x.size = x.size ? x.size : '100%';
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'size')
					.subscribe(() => { self.columnResize(); }));
				self.columnSubscriptions.push(self.bindings
					.propertyObserver(x, 'hidden')
					.subscribe(() => { self.columnResize(); }));
			});
			self.columnResize();
		}
	}

	columnResize() {
		if(this.body) {
			var self = this,
	            baseWidth = self.body.offsetWidth,
	            chunkCount = 0;

	        // Calculate Widths
	        __.all(self.columns.slice(), column => {
	            if(!column.hidden) {
	                var style = new __.lib.StyleParser(column.style);
	                style.update({ width: column.size });
	                column.style = style.asString;
	                if(column.size == '100%') {
	                    chunkCount += 100;
	                } else {
	                    if(column.size.contains('%'))
	                        chunkCount += parseFloat(column.size.replace('%', ''));
	                    else if(column.size.contains('px'))
	                        baseWidth -= parseFloat(column.size.replace('px', ''));
	                }
	            }
	        });

	        __.all(self.columns.slice(), column => {
	            if(!column.hidden) {
	                var style = new __.lib.StyleParser(column.style),
	                    width = style.width;
	                if(width.contains('%'))
	                    style.update({ width: ((parseFloat(width.replace('%', '')) / chunkCount) * baseWidth) + 'px' });
	                column.style = style.asString;
	            }
	        });
		}
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

	@computedFrom('maxHeight')
	get bodyHeight() {
		return this.maxHeight != 0 ? 'max-height: ' + this.maxHeight + 'px; overflow-y: scroll;' : '';
	}
}