'use strict';

System.register(['aurelia-framework', 'aurelia-templating-resources', 'iterate-js'], function (_export, _context) {
	"use strict";

	var BindingEngine, inject, bindable, bindingMode, computedFrom, BindingSignaler, __, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, AureliaTable;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
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

	return {
		setters: [function (_aureliaFramework) {
			BindingEngine = _aureliaFramework.BindingEngine;
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
			bindingMode = _aureliaFramework.bindingMode;
			computedFrom = _aureliaFramework.computedFrom;
		}, function (_aureliaTemplatingResources) {
			BindingSignaler = _aureliaTemplatingResources.BindingSignaler;
		}, function (_iterateJs) {
			__ = _iterateJs.default;
		}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			_export('AureliaTable', AureliaTable = (_dec = inject(BindingEngine, BindingSignaler), _dec2 = bindable(), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec6 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec7 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec8 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec9 = computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec10 = computedFrom('height'), _dec(_class = (_class2 = function () {
				function AureliaTable(bindings, signaler) {
					_classCallCheck(this, AureliaTable);

					_initDefineProp(this, 'header', _descriptor, this);

					_initDefineProp(this, 'height', _descriptor2, this);

					_initDefineProp(this, 'tableClasses', _descriptor3, this);

					_initDefineProp(this, 'summary', _descriptor4, this);

					_initDefineProp(this, 'headers', _descriptor5, this);

					_initDefineProp(this, 'rows', _descriptor6, this);

					_initDefineProp(this, 'columns', _descriptor7, this);

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
						__.all(row, function (x, y) {
							if (!__.is.set(template[y])) template[y] = x;
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
							key: null,
							dir: null,
							defaultDir: 'asc'
						};
						__.all(col, function (x, y) {
							if (!__.is.set(template[y])) template[y] = x;
						});
						if (template.sortable && template.key == null) template.key = function (x) {
							return __.prop(x, template.field);
						};
					};
					self.windowResize = function (e) {
						self.columnResize();
					};
					self.debouncedSort = __.debounce(function () {
						self.reSort();
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

				AureliaTable.prototype.update = function update(options, deep) {
					var self = this;
					if (__.is.object(options)) __.fuse(this, options, { deep: deep });
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
					return __.prop(e, 'detail.continue');
				};

				AureliaTable.prototype.clean = function clean() {
					__.all(self.columnSubscriptions, function (x) {
						return x.dispose();
					});
					self.columnSubscriptions = [];
				};

				AureliaTable.prototype.headersChanged = function headersChanged(newRows, oldRows) {
					var _this = this;

					if (newRows) {
						__.all(this.headers.slice(), function (x) {
							return _this.rowTemplate(x);
						});
						this.emitEvent(this.body, 'headerschange', { table: this, headers: newRows });
					}
				};

				AureliaTable.prototype.summaryChanged = function summaryChanged(newRows, oldRows) {
					var _this2 = this;

					if (newRows) {
						__.all(this.summary.slice(), function (x) {
							return _this2.rowTemplate(x);
						});
						this.emitEvent(this.body, 'summarychange', { table: this, summary: newRows });
					}
				};

				AureliaTable.prototype.rowsChanged = function rowsChanged(newRows, oldRows) {
					var _this3 = this;

					if (newRows) {
						__.all(this.rows.slice(), function (x) {
							return _this3.rowTemplate(x);
						});
						this.emitEvent(this.body, 'rowchange', { table: this, rows: newRows });
					}
				};

				AureliaTable.prototype.columnsChanged = function columnsChanged(newColumns, oldColumns) {
					if (newColumns) {
						var self = this;
						self.clean();
						__.all(newColumns, function (x) {
							return self.colTemplate(x);
						});
						__.all(newColumns, function (x) {
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

						__.all(self.columns.slice(), function (column) {
							if (!column.hidden) {
								var style = new __.lib.StyleParser(column.style);
								style.update({ width: column.size });
								column.style = style.asString;
								if (column.size == '100%') {
									chunkCount += 100;
								} else if (__.is.string(column.size)) {
									if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
								}
							}
						});

						__.all(self.columns.slice(), function (column) {
							if (!column.hidden) {
								var style = new __.lib.StyleParser(column.style),
								    width = style.width;
								if (__.is.string(width) && width.contains('%')) style.update({ width: parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px' });
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

						column.dir = __.switch(column.dir, {
							'asc': 'desc',
							'desc': 'asc'
						}, column.defaultDir);

						column.key = __.is.function(column.key) ? column.key : function (x) {
							return __.prop(x, column.field);
						};

						if (!event.ctrlKey) {
							__.all(self.columns.slice(), function (x) {
								if (x.field != column.field) x.dir = null;
							});
						}
					}
					return true;
				};

				AureliaTable.prototype.reSort = function reSort() {
					var self = this,
					    sort = __.filter(self.columns.slice(), function (x) {
						return x.sortable && x.dir && x.key;
					});
					var e = self.emitEvent(self.body, 'sort', { table: self, sort: sort });
					if (self.eventContinue(e)) {
						if (sort) {
							if (sort.length == 1) self.rows = __.sort(self.rows.slice(), sort[0]);else if (sort.length > 1) self.rows = __.sort(self.rows.slice(), sort);
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
			}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'summary', [_dec5], {
				enumerable: true,
				initializer: function initializer() {
					return [];
				}
			}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'headers', [_dec6], {
				enumerable: true,
				initializer: function initializer() {
					return [];
				}
			}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec7], {
				enumerable: true,
				initializer: function initializer() {
					return [];
				}
			}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec8], {
				enumerable: true,
				initializer: function initializer() {
					return [];
				}
			}), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class));

			_export('AureliaTable', AureliaTable);
		}
	};
});