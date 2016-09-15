var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { BindingEngine, inject, bindable, bindingMode, computedFrom } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';
import __ from 'iterate-js';

export let AureliaTable = (_dec = inject(BindingEngine, BindingSignaler), _dec2 = bindable(), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable(), _dec6 = computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec7 = computedFrom('maxHeight'), _dec(_class = (_class2 = class AureliaTable {

	constructor(bindings, signaler) {
		_initDefineProp(this, 'header', _descriptor, this);

		_initDefineProp(this, 'rows', _descriptor2, this);

		_initDefineProp(this, 'columns', _descriptor3, this);

		_initDefineProp(this, 'maxHeight', _descriptor4, this);

		var self = this;
		self._scrollbarwidth = null;
		self.columnSubscriptions = [];
		self.bindings = bindings;
		self.signaler = signaler;
		self.rowTemplate = template => {
			var row = {
				class: '',
				style: '',
				hidden: false,
				active: false
			};
			__.all(row, (x, y) => {
				if (!__.is.set(template[y])) template[y] = x;
			});
		};
		self.colTemplate = template => {
			if (template.field) {
				var col = {
					field: '',
					header: '',
					size: '100%',
					class: '',
					style: '',
					hidden: false,
					render: null,
					sortable: false,
					key: null,
					dir: null,
					defaultDir: 'asc' };
				__.all(col, (x, y) => {
					if (!__.is.set(template[y])) template[y] = x;
				});
				if (template.sortable && template.key == null) template.key = x => x[template.field];
			}
		};
		self.windowResize = e => {
			self.columnResize();
		};
		self.debouncedSort = __.debounce(() => {
			self.reSort(self.columns.slice());
		}, 200);
	}

	attached() {
		var self = this;
		self.columnResize();
		window.addEventListener('resize', self.windowResize);
		self.emitEvent(self.body, 'attached', { table: self });
	}

	detached() {
		window.removeEventListener('resize', this.windowResize);
		this.clean();
		this.emitEvent(this.body, 'detached', { table: this });
	}

	emitEvent(target, eventName, data) {
		if (target) {
			var e;
			data = data || {};
			data.continue = true;
			if (window.CustomEvent) {
				e = new CustomEvent(eventName, {
					bubbles: true,
					detail: data
				});
			} else {
				e = document.createEvent('CustomEvent');
				e.initCustomEvent(eventName, true, true, data);
			}

			target.dispatchEvent(e);
			return e;
		}
	}

	eventContinue(e) {
		return e && e.detail && e.detail.continue;
	}

	clean() {
		__.all(self.columnSubscriptions, x => x.dispose());
		self.columnSubscriptions = [];
	}

	rowsChanged(newRows, oldRows) {
		if (newRows) {
			__.all(this.rows.slice(), x => this.rowTemplate(x));
			this.emitEvent(this.body, 'rowchange', { table: this, rows: newRows });
		}
	}

	columnsChanged(newColumns, oldColumns) {
		if (newColumns) {
			var self = this;
			self.clean();
			__.all(newColumns, x => self.colTemplate(x));
			__.all(newColumns, x => {
				x.size = x.size ? x.size : '100%';
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(() => {
					self.columnResize();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(() => {
					self.columnResize();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'dir').subscribe(() => {
					self.debouncedSort();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'key').subscribe(() => {
					self.debouncedSort();
				}));
			});
			self.emitEvent(this.body, 'columnchange', { table: self, columns: newColumns });

			self.columnResize();
			self.debouncedSort();
		}
	}

	columnResize() {
		if (this.body) {
			var self = this,
			    baseWidth = self.body.offsetWidth,
			    chunkCount = 0;

			__.all(self.columns.slice(), column => {
				if (!column.hidden) {
					var style = new __.lib.StyleParser(column.style);
					style.update({ width: column.size });
					column.style = style.asString;
					if (column.size == '100%') {
						chunkCount += 100;
					} else {
						if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
					}
				}
			});

			__.all(self.columns.slice(), column => {
				if (!column.hidden) {
					var style = new __.lib.StyleParser(column.style),
					    width = style.width;
					if (width.contains('%')) style.update({ width: parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px' });
					column.style = style.asString;
				}
			});
			self.emitEvent(this.body, 'columnresize', { table: self });
		}
	}

	headerClick(event, column) {
		this.emitEvent(event.target, 'headerclick', { table: this, column: column });
		return true;
	}

	cellClick(event, cell) {
		this.emitEvent(event.target, 'cellclick', { table: this, cell: cell });
		return true;
	}

	sortClick(event, column) {
		var self = this;
		var e = self.emitEvent(event.target, 'sortclick', { table: self, column: column });
		if (self.eventContinue(e)) {

			column.dir = __.switch(column.dir, {
				'asc': 'desc',
				'desc': 'asc'
			}, column.defaultDir);

			column.key = __.is.function(column.key) ? column.key : x => x[column.field];

			if (!event.ctrlKey) {
				__.all(self.columns.slice(), x => {
					if (x.field != column.field) x.dir = null;
				});
			}
		}
		return true;
	}

	reSort(columns) {
		var self = this,
		    sort = __.filter(columns, x => x.dir && x.key);
		var e = self.emitEvent(self.body, 'sort', { table: self, sort: sort });
		if (self.eventContinue(e)) {
			if (sort) {
				if (sort.length == 1) self.rows = __.sort(self.rows.slice(), sort[0]);else if (sort.length > 1) self.rows = __.sort(self.rows.slice(), sort);
			}
		}
	}

	get scrollBarWidth() {
		if (!this._scrollbarwidth) {
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
			outer.appendChild(inner);

			document.body.appendChild(outer);
			var w1 = inner.offsetWidth;
			outer.style.overflow = 'scroll';
			var w2 = inner.offsetWidth;
			if (w1 == w2) w2 = outer.clientWidth;

			document.body.removeChild(outer);

			this._scrollbarwidth = w1 - w2;
		}
		return this._scrollbarwidth;
	}

	get showScrollBar() {
		return this.body && this.body.scrollHeight > this.body.clientHeight;
	}

	get bodyHeight() {
		return this.maxHeight != 0 ? 'max-height: ' + this.maxHeight + 'px; overflow-y: scroll;' : '';
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec2], {
	enumerable: true,
	initializer: function () {
		return '';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec3], {
	enumerable: true,
	initializer: function () {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec4], {
	enumerable: true,
	initializer: function () {
		return [];
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'maxHeight', [_dec5], {
	enumerable: true,
	initializer: function () {
		return 300;
	}
}), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);