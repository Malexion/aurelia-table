'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AureliaTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

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

var AureliaTable = exports.AureliaTable = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine, _aureliaTemplatingResources.BindingSignaler), _dec2 = (0, _aureliaFramework.bindable)(), _dec3 = (0, _aureliaFramework.bindable)(), _dec4 = (0, _aureliaFramework.bindable)(), _dec5 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec6 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec7 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec8 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec9 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec10 = (0, _aureliaFramework.computedFrom)('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec11 = (0, _aureliaFramework.computedFrom)('height'), _dec(_class = (_class2 = function () {
	function AureliaTable(bindings, signaler) {
		_classCallCheck(this, AureliaTable);

		_initDefineProp(this, 'header', _descriptor, this);

		_initDefineProp(this, 'height', _descriptor2, this);

		_initDefineProp(this, 'tableClasses', _descriptor3, this);

		_initDefineProp(this, 'filter', _descriptor4, this);

		_initDefineProp(this, 'staticSummary', _descriptor5, this);

		_initDefineProp(this, 'staticHeader', _descriptor6, this);

		_initDefineProp(this, 'rows', _descriptor7, this);

		_initDefineProp(this, 'columns', _descriptor8, this);

		var self = this;
		self._scrollbarwidth = null;
		self.columnSubscriptions = [];
		self.bindings = bindings;
		self.signaler = signaler;
		self.events = new _iterateJs2.default.lib.EventManager();
		self.events.read(self);
		self.rowTemplate = function (template) {
			var row = {
				class: '',
				style: {},
				hidden: false,
				active: false
			};
			_iterateJs2.default.all(row, function (x, y) {
				if (!_iterateJs2.default.is.set(template[y])) template[y] = x;
			});
		};
		self.colTemplate = function (template) {
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
			_iterateJs2.default.all(col, function (x, y) {
				if (!_iterateJs2.default.is.set(template[y])) template[y] = x;
			});
			if (template.sortable && template.key == null) template.key = function (x) {
				return _iterateJs2.default.prop(x, template.field);
			};
		};
		self.windowResize = function (e) {
			self.resizeColumns();
		};
		self.sort = _iterateJs2.default.debounce(function () {
			self.events.trigger('Sort')();
		}, 200);
		self.resizeColumns = function () {
			self.events.trigger('ColumnResize')();
		};
		self.styleUpdate = function () {
			self.events.trigger('StyleUpdate')();
		};
		self.clean = function () {
			self.events.trigger('Clean')();
		};
		self.update = function (a, b) {
			self.events.trigger('Update', { options: a, deep: b })();
		};
	}

	AureliaTable.prototype.onClean = function onClean(event) {
		if (event.after) {
			_iterateJs2.default.all(this.columnSubscriptions, function (x) {
				return x.dispose();
			});
			this.columnSubscriptions = [];
		}
	};

	AureliaTable.prototype.onColumnResize = function onColumnResize(event) {
		var self = this;
		if (event.after && self.body) {
			var baseWidth = self.body.offsetWidth,
			    chunkCount = 0,
			    parser = new _iterateJs2.default.lib.StyleParser();

			_iterateJs2.default.all(self.columns, function (column) {
				if (!_iterateJs2.default.is.set(column.style)) column.style = '';
				if (!column.hidden) {
					parser.clear();
					parser.update(column.style);
					parser['width'] = column.size;
					column.style = parser.asString;
					if (column.size == '100%') {
						chunkCount += 100;
					} else if (_iterateJs2.default.is.string(column.size)) {
						if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
					}
				}
			});

			var width;
			_iterateJs2.default.all(self.columns, function (column) {
				if (!column.hidden) {
					parser.clear();
					parser.update(column.style);
					width = parser['width'];
					if (_iterateJs2.default.is.string(width) && width.contains('%')) parser['width'] = parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px';
					column.style = parser.asString;
				}
			});
		}
	};

	AureliaTable.prototype.onFilterChanged = function onFilterChanged(event) {
		if (event.after) {
			var self = this,
			    newFilter = event.data.filter;
			if (_iterateJs2.default.is.function(newFilter)) {
				_iterateJs2.default.all(self.rows, function (a, b) {
					a.hidden = !newFilter(a, b);
				});
			} else setTimeout(function () {
				self.filter = function () {
					return true;
				};
			}, 100);
		}
	};

	AureliaTable.prototype.onUpdate = function onUpdate(event) {
		if (event.after) {
			var self = this,
			    options = event.data.options,
			    deep = event.data.deep;

			if (_iterateJs2.default.is.object(options)) _iterateJs2.default.fuse(self, options, { deep: deep });
		}
	};

	AureliaTable.prototype.onSort = function onSort(event) {
		if (event.after) {
			var self = this,
			    sort = _iterateJs2.default.filter(self.columns.slice(), function (x) {
				return x.sortable && x.dir && x.key;
			});

			if (sort) {
				if (sort.length == 1) self.rows = _iterateJs2.default.sort(self.rows.slice(), sort[0]);else if (sort.length > 1) self.rows = _iterateJs2.default.sort(self.rows.slice(), sort);
			}
		}
	};

	AureliaTable.prototype.onSortClick = function onSortClick(event) {
		if (event.after) {
			var self = this,
			    $event = event.data.event,
			    $column = event.data.column;

			$column.dir = _iterateJs2.default.switch($column.dir, {
				'asc': 'desc',
				'desc': 'asc'
			}, $column.defaultDir);

			$column.key = _iterateJs2.default.is.function($column.key) ? $column.key : function (x) {
				return _iterateJs2.default.prop(x, $column.field);
			};

			if (!$event.ctrlKey) {
				_iterateJs2.default.all(self.columns.slice(), function (x) {
					if (x.field != $column.field) x.dir = null;
				});
			}
		}
	};

	AureliaTable.prototype.onStyleUpdate = function onStyleUpdate(event) {
		if (event.after) {
			this.signaler.signal('style');
		}
	};

	AureliaTable.prototype.attached = function attached() {
		var self = this;
		self.resizeColumns();
		window.addEventListener('resize', self.windowResize);
		self.events.trigger('Attached')();
	};

	AureliaTable.prototype.detached = function detached() {
		window.removeEventListener('resize', this.windowResize);
		this.clean();
		this.events.trigger('Detached')();
	};

	AureliaTable.prototype.staticHeaderChanged = function staticHeaderChanged(newRows, oldRows) {
		if (newRows) {
			var self = this;
			_iterateJs2.default.all(newRows, function (x) {
				return self.rowTemplate(x);
			});
			self.events.trigger('StaticHeadersChanged', { headers: newRows })();
		}
	};

	AureliaTable.prototype.staticSummaryChanged = function staticSummaryChanged(newRows, oldRows) {
		if (newRows) {
			var self = this;
			_iterateJs2.default.all(newRows.slice(), function (x) {
				return self.rowTemplate(x);
			});
			self.events.trigger('StaticSummaryChanged', { summary: newRows })();
		}
	};

	AureliaTable.prototype.rowsChanged = function rowsChanged(newRows, oldRows) {
		if (newRows) {
			var self = this;
			_iterateJs2.default.all(newRows, function (x) {
				return self.rowTemplate(x);
			});
			self.events.trigger('RowsChanged', { rows: newRows })();
		}
	};

	AureliaTable.prototype.columnsChanged = function columnsChanged(newColumns, oldColumns) {
		if (newColumns) {
			var self = this,
			    resize = function resize() {
				self.resizeColumns();
			},
			    sortme = function sortme() {
				self.sort();
			};
			self.clean();
			_iterateJs2.default.all(newColumns, function (x) {
				self.colTemplate(x);
				x.size = x.size ? x.size : '100%';

				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(resize));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(resize));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'dir').subscribe(sortme));
				self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'key').subscribe(sortme));
			});
			self.events.trigger('ColumnsChanged', { columns: newColumns })();

			self.resizeColumns();
			self.sort();
		}
	};

	AureliaTable.prototype.filterChanged = function filterChanged(newFilter) {
		this.events.trigger('FilterChanged', { filter: newFilter })();
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
			return this.height != 0 ? 'height: ' + this.height + 'px; overflow-y: auto;' : '';
		}
	}]);

	return AureliaTable;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec2], {
	enumerable: true,
	initializer: function initializer() {
		return '';
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec3], {
	enumerable: true,
	initializer: function initializer() {
		return 300;
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'tableClasses', [_dec4], {
	enumerable: true,
	initializer: function initializer() {
		return 'table-hover table-condensed';
	}
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_dec5], {
	enumerable: true,
	initializer: function initializer() {
		return function () {
			return true;
		};
	}
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'staticSummary', [_dec6], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'staticHeader', [_dec7], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec8], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec9], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);