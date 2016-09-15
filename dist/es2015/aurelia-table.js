var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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

import { BindingEngine, inject, bindable, computedFrom } from 'aurelia-framework';
import __ from 'iterate-js';

export let AureliaTable = (_dec = inject(BindingEngine), _dec2 = computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec3 = computedFrom('maxHeight'), _dec(_class = (_class2 = class AureliaTable {

	constructor(bindings, signaler) {
		_initDefineProp(this, 'header', _descriptor, this);

		_initDefineProp(this, 'rows', _descriptor2, this);

		_initDefineProp(this, 'columns', _descriptor3, this);

		_initDefineProp(this, 'maxHeight', _descriptor4, this);

		var self = this;
		self._scrollbarwidth = null;
		self.columnSubscriptions = [];
		self.bindings = bindings;
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
				if (!__.is.set(template[y])) template[y] = x;
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
		if (newRows) {
			__.all(this.rows.slice(), x => this.rowTemplate(x));
		}
	}

	columnsChanged(newColumns, oldColumns) {
		if (newColumns) {
			var self = this;
			self.clean();
			__.all(newColumns.slice(), x => self.rowTemplate(x));
			__.all(newColumns.slice(), x => {
				x.size = x.size ? x.size : '100%';
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(() => {
					self.columnResize();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(() => {
					self.columnResize();
				}));
			});
			self.columnResize();
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
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'header', [bindable], {
	enumerable: true,
	initializer: function () {
		return '';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [bindable], {
	enumerable: true,
	initializer: function () {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [bindable], {
	enumerable: true,
	initializer: function () {
		return [];
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'maxHeight', [bindable], {
	enumerable: true,
	initializer: function () {
		return 300;
	}
}), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);