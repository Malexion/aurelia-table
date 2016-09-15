'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AureliaTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

var _iterateJs = require('iterate-js');

var _iterateJs2 = _interopRequireDefault(_iterateJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var AureliaTable = exports.AureliaTable = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine, _aureliaTemplatingResources.BindingSignaler), _dec2 = (0, _aureliaFramework.bindable)(), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec4 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec5 = (0, _aureliaFramework.bindable)(), _dec6 = (0, _aureliaFramework.computedFrom)('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec7 = (0, _aureliaFramework.computedFrom)('maxHeight'), _dec(_class = (_class2 = function () {
	function AureliaTable(bindings, signaler) {
		_classCallCheck(this, AureliaTable);

		_initDefineProp(this, 'header', _descriptor, this);

		_initDefineProp(this, 'rows', _descriptor2, this);

		_initDefineProp(this, 'columns', _descriptor3, this);

		_initDefineProp(this, 'maxHeight', _descriptor4, this);

		var self = this;
		self._scrollbarwidth = null;
		self.columnSubscriptions = [];
		self.bindings = bindings;
		self.signaler = signaler;
		self.rowTemplate = function (template) {
			var row = {
				class: '',
				style: '',
				hidden: false,
				active: false
			};
			_iterateJs2.default.all(row, function (x, y) {
				if (!_iterateJs2.default.is.set(template[y])) template[y] = x;
			});
		};
		self.colTemplate = function (template) {
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
				_iterateJs2.default.all(col, function (x, y) {
					if (!_iterateJs2.default.is.set(template[y])) template[y] = x;
				});
				if (template.sortable && template.key == null) template.key = function (x) {
					return x[template.field];
				};
			}
		};
		self.windowResize = function (e) {
			self.columnResize();
		};
		self.debouncedSort = _iterateJs2.default.debounce(function () {
			self.reSort(self.columns.slice());
		}, 200);
	}

	AureliaTable.prototype.attached = function attached() {
		var self = this;
		self.columnResize();
		window.addEventListener('resize', self.windowResize);
		self.emitEvent(self.body, 'attached', { table: self });
	};

	AureliaTable.prototype.detached = function detached() {
		window.removeEventListener('resize', this.windowResize);
		this.clean();
		this.emitEvent(this.body, 'detached', { table: this });
	};

	AureliaTable.prototype.emitEvent = function emitEvent(target, eventName, data) {
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
	};

	AureliaTable.prototype.eventContinue = function eventContinue(e) {
		return e && e.detail && e.detail.continue;
	};

	AureliaTable.prototype.clean = function clean() {
		_iterateJs2.default.all(self.columnSubscriptions, function (x) {
			return x.dispose();
		});
		self.columnSubscriptions = [];
	};

	AureliaTable.prototype.rowsChanged = function rowsChanged(newRows, oldRows) {
		var _this = this;

		if (newRows) {
			_iterateJs2.default.all(this.rows.slice(), function (x) {
				return _this.rowTemplate(x);
			});
			this.emitEvent(this.body, 'rowchange', { table: this, rows: newRows });
		}
	};

	AureliaTable.prototype.columnsChanged = function columnsChanged(newColumns, oldColumns) {
		if (newColumns) {
			var self = this;
			self.clean();
			_iterateJs2.default.all(newColumns, function (x) {
				return self.colTemplate(x);
			});
			_iterateJs2.default.all(newColumns, function (x) {
				x.size = x.size ? x.size : '100%';
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(function () {
					self.columnResize();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(function () {
					self.columnResize();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'dir').subscribe(function () {
					self.debouncedSort();
				}));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'key').subscribe(function () {
					self.debouncedSort();
				}));
			});
			self.emitEvent(this.body, 'columnchange', { table: self, columns: newColumns });

			self.columnResize();
			self.debouncedSort();
		}
	};

	AureliaTable.prototype.columnResize = function columnResize() {
		if (this.body) {
			var self = this,
			    baseWidth = self.body.offsetWidth,
			    chunkCount = 0;

			_iterateJs2.default.all(self.columns.slice(), function (column) {
				if (!column.hidden) {
					var style = new _iterateJs2.default.lib.StyleParser(column.style);
					style.update({ width: column.size });
					column.style = style.asString;
					if (column.size == '100%') {
						chunkCount += 100;
					} else {
						if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
					}
				}
			});

			_iterateJs2.default.all(self.columns.slice(), function (column) {
				if (!column.hidden) {
					var style = new _iterateJs2.default.lib.StyleParser(column.style),
					    width = style.width;
					if (width.contains('%')) style.update({ width: parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px' });
					column.style = style.asString;
				}
			});
			self.emitEvent(this.body, 'columnresize', { table: self });
		}
	};

	AureliaTable.prototype.headerClick = function headerClick(event, column) {
		this.emitEvent(event.target, 'headerclick', { table: this, column: column });
		return true;
	};

	AureliaTable.prototype.cellClick = function cellClick(event, cell) {
		this.emitEvent(event.target, 'cellclick', { table: this, cell: cell });
		return true;
	};

	AureliaTable.prototype.sortClick = function sortClick(event, column) {
		var self = this;
		var e = self.emitEvent(event.target, 'sortclick', { table: self, column: column });
		if (self.eventContinue(e)) {

			column.dir = _iterateJs2.default.switch(column.dir, {
				'asc': 'desc',
				'desc': 'asc'
			}, column.defaultDir);

			column.key = _iterateJs2.default.is.function(column.key) ? column.key : function (x) {
				return x[column.field];
			};

			if (!event.ctrlKey) {
				_iterateJs2.default.all(self.columns.slice(), function (x) {
					if (x.field != column.field) x.dir = null;
				});
			}
		}
		return true;
	};

	AureliaTable.prototype.reSort = function reSort(columns) {
		var self = this,
		    sort = _iterateJs2.default.filter(columns, function (x) {
			return x.dir && x.key;
		});
		var e = self.emitEvent(self.body, 'sort', { table: self, sort: sort });
		if (self.eventContinue(e)) {
			if (sort) {
				if (sort.length == 1) self.rows = _iterateJs2.default.sort(self.rows.slice(), sort[0]);else if (sort.length > 1) self.rows = _iterateJs2.default.sort(self.rows.slice(), sort);
			}
		}
	};

	_createClass(AureliaTable, [{
		key: 'scrollBarWidth',
		get: function get() {
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
	}, {
		key: 'showScrollBar',
		get: function get() {
			return this.body && this.body.scrollHeight > this.body.clientHeight;
		}
	}, {
		key: 'bodyHeight',
		get: function get() {
			return this.maxHeight != 0 ? 'max-height: ' + this.maxHeight + 'px; overflow-y: scroll;' : '';
		}
	}]);

	return AureliaTable;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec2], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec3], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec4], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'maxHeight', [_dec5], {
	enumerable: true,
	initializer: function initializer() {
		return 300;
	}
}), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);