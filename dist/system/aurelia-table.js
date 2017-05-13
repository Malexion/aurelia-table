'use strict';

System.register(['aurelia-framework', 'aurelia-templating-resources', 'iterate-js'], function (_export, _context) {
   "use strict";

   var BindingEngine, inject, bindable, bindingMode, computedFrom, BindingSignaler, __, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, AureliaTable;

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

         _export('AureliaTable', AureliaTable = (_dec = inject(BindingEngine, BindingSignaler), _dec2 = bindable(), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec6 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec7 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec8 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec9 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec10 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec11 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec12 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec13 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec14 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec15 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec16 = computedFrom('rows', 'pageSize'), _dec17 = computedFrom('rows', 'columns', 'filter', 'sort', 'map'), _dec18 = computedFrom('filtered', 'startPage', 'pageSize', 'endpage', 'pageMode'), _dec19 = computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec20 = computedFrom('height'), _dec(_class = (_class2 = function () {
            function AureliaTable(bindings, signals) {
               _classCallCheck(this, AureliaTable);

               _initDefineProp(this, 'header', _descriptor, this);

               _initDefineProp(this, 'height', _descriptor2, this);

               _initDefineProp(this, 'tableClasses', _descriptor3, this);

               _initDefineProp(this, 'filter', _descriptor4, this);

               _initDefineProp(this, 'sort', _descriptor5, this);

               _initDefineProp(this, 'map', _descriptor6, this);

               _initDefineProp(this, 'startPage', _descriptor7, this);

               _initDefineProp(this, 'endPage', _descriptor8, this);

               _initDefineProp(this, 'pageSize', _descriptor9, this);

               _initDefineProp(this, 'pageMode', _descriptor10, this);

               _initDefineProp(this, 'summary', _descriptor11, this);

               _initDefineProp(this, 'headers', _descriptor12, this);

               _initDefineProp(this, 'rows', _descriptor13, this);

               _initDefineProp(this, 'columns', _descriptor14, this);

               var self = this;
               self._scrollbarwidth = null;
               self.columnSubscriptions = [];
               self.bindings = bindings;
               self.signals = signals;
               self.events = new __.lib.EventManager();
               self.events.read(self);

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
                     filterable: false,
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

               self.columnRefresh = __.debounce(function () {
                  self.signals.signal('at-columns');
               }, 10);
               self.rowRefresh = __.debounce(function () {
                  self.signals.signal('at-rows');
               }, 10);
               self.pageUp = __.debounce(function () {
                  if (self.pageMode == 'paginate') {
                     self.startPage++;
                     if (self.body) self.body.scrollTop = 0;
                  }
                  self.endPage++;
               }, 10);
               self.pageReset = __.debounce(function () {
                  if (self.body) self.body.scrollTop = 0;
                  self.startPage = 0;
                  self.endPage = 1;
               }, 10);

               self.windowResize = function (e) {
                  self.resizeColumns();
               };
               self.sortRows = __.debounce(function () {
                  self.events.trigger('Sort')();
               }, 10);
               self.resizeColumns = __.debounce(function () {
                  self.events.trigger('ColumnResize')();
               }, 10);
               self.clean = function () {
                  self.events.trigger('Clean')();
               };
               self.update = function (a, b) {
                  self.events.trigger('Update', { options: a, deep: b })();
               };
            }

            AureliaTable.prototype.onClean = function onClean(event) {
               if (event.after) {
                  __.all(this.columnSubscriptions, function (x) {
                     return x && __.is.function(x.dispose) ? x.dispose() : x;
                  });
                  this.columnSubscriptions = [];
               }
            };

            AureliaTable.prototype.onColumnResize = function onColumnResize(event) {
               var self = this;
               if (event.after && self.body) {
                  var baseWidth = self.body.offsetWidth,
                      chunkCount = 0,
                      parser = new __.lib.StyleParser();

                  __.all(self.columns, function (column) {
                     if (!__.is.set(column.style)) column.style = '';
                     if (!column.hidden) {
                        parser.clear();
                        parser.update(column.style);
                        parser['width'] = column.size;
                        column.style = parser.asString;
                        if (column.size == '100%') {
                           chunkCount += 100;
                        } else if (__.is.string(column.size)) {
                           if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
                        }
                     }
                  });

                  var width;
                  __.all(self.columns, function (column) {
                     if (!column.hidden) {
                        parser.clear();
                        parser.update(column.style);
                        width = parser['width'];
                        if (__.is.string(width) && width.contains('%')) parser['width'] = parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px';
                        column.style = parser.asString;
                     }
                  });
               }
            };

            AureliaTable.prototype.onUpdate = function onUpdate(event) {
               if (event.after) {
                  var self = this,
                      options = event.data.options,
                      deep = event.data.deep;

                  if (__.is.object(options)) __.fuse(self, options, { deep: deep });
               }
            };

            AureliaTable.prototype.onScroll = function onScroll(event) {
               if (event.after) {
                  var self = this,
                      $event = event.data.event;
                  if ($event.target.clientHeight + $event.target.scrollTop >= $event.target.scrollHeight) {
                     if (self.endPage < self.maxPages && self.pageMode == 'scroll') {
                        self.pageUp();
                     }
                  }
               }
            };

            AureliaTable.prototype.onSort = function onSort(event) {
               if (event.after) {
                  var self = this,
                      sort = __.sort(__.filter(self.columns, function (x) {
                     return x.sortable && x.dir && x.key;
                  }), { dir: 'asc', key: function key(x) {
                        return x.sortOrder;
                     } });

                  setTimeout(function () {
                     self.sort = sort.length > 0 ? sort : null;
                  }, 20);
               }
            };

            AureliaTable.prototype.onSortClick = function onSortClick(event) {
               if (event.after) {
                  var self = this,
                      $event = event.data.event,
                      $column = event.data.column;

                  $column.dir = __.switch($column.dir, {
                     'asc': 'desc',
                     'desc': 'asc'
                  }, $column.defaultDir);

                  $column.key = __.is.function($column.key) ? $column.key : function (x) {
                     return __.prop(x, $column.field);
                  };

                  if (!$event.ctrlKey) {
                     __.all(self.columns, function (x) {
                        if (x.field != $column.field) x.dir = null;
                        if (__.is.set(x.sortOrder)) delete x.sortOrder;
                     });
                  }

                  __.all(self.columns, function (x) {
                     return x.sortOrder ? x.sortOrder-- : '';
                  });
                  $column.sortOrder = 1;
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

            AureliaTable.prototype.filterChanged = function filterChanged() {
               this.pageReset();
            };

            AureliaTable.prototype.sortChanged = function sortChanged() {
               this.pageReset();
            };

            AureliaTable.prototype.mapChanged = function mapChanged() {
               this.pageReset();
            };

            AureliaTable.prototype.headersChanged = function headersChanged(newRows, oldRows) {
               if (newRows) {
                  var self = this;
                  __.all(newRows, function (x) {
                     return self.rowTemplate(x);
                  });
                  self.events.trigger('StaticHeadersChanged', { headers: newRows })();
               }
            };

            AureliaTable.prototype.summaryChanged = function summaryChanged(newRows, oldRows) {
               if (newRows) {
                  var self = this;
                  __.all(newRows.slice(), function (x) {
                     return self.rowTemplate(x);
                  });
                  self.events.trigger('StaticSummaryChanged', { summary: newRows })();
               }
            };

            AureliaTable.prototype.rowsChanged = function rowsChanged(newRows, oldRows) {
               if (newRows) {
                  var self = this;
                  __.all(newRows, function (x) {
                     return self.rowTemplate(x);
                  });
                  self.events.trigger('RowsChanged', { rows: newRows })();

                  self.sortRows();
               }
            };

            AureliaTable.prototype.columnsChanged = function columnsChanged(newColumns, oldColumns) {
               if (newColumns) {
                  var self = this,
                      resize = function resize() {
                     self.resizeColumns();
                  },
                      sortme = function sortme() {
                     self.sortRows();
                  };

                  self.clean();
                  __.all(newColumns, function (x) {
                     self.colTemplate(x);
                     x.size = x.size ? x.size : '100%';
                     self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(resize));
                     self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(resize));
                     self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'dir').subscribe(sortme));
                     self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'key').subscribe(sortme));
                  });
                  self.events.trigger('ColumnsChanged', { columns: newColumns })();

                  self.resizeColumns();
                  self.sortRows();
               }
            };

            _createClass(AureliaTable, [{
               key: 'maxPages',
               get: function get() {
                  return __.is.set(this.pageSize) ? Math.ceil(this.rows.length / this.pageSize) : 1;
               }
            }, {
               key: 'filtered',
               get: function get() {
                  var temp = this.rows.slice();
                  if (__.is.set(this.filter)) temp = __.filter(temp, this.filter);
                  if (__.is.set(this.sort)) temp = __.sort(temp, this.sort);
                  if (__.is.set(this.map)) temp = __.map(temp, this.map);
                  return temp;
               }
            }, {
               key: 'viewable',
               get: function get() {
                  if (__.is.set(this.rows) && this.pageMode && __.is.set(this.startPage) && __.is.set(this.endPage) && __.is.set(this.pageSize)) return this.filtered.slice(this.startPage * this.pageSize, this.endPage * this.pageSize);
                  return this.filtered;
               }
            }, {
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
               return null;
            }
         }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [_dec6], {
            enumerable: true,
            initializer: function initializer() {
               return null;
            }
         }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'map', [_dec7], {
            enumerable: true,
            initializer: function initializer() {
               return null;
            }
         }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'startPage', [_dec8], {
            enumerable: true,
            initializer: function initializer() {
               return 0;
            }
         }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'endPage', [_dec9], {
            enumerable: true,
            initializer: function initializer() {
               return 1;
            }
         }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec10], {
            enumerable: true,
            initializer: function initializer() {
               return 50;
            }
         }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'pageMode', [_dec11], {
            enumerable: true,
            initializer: function initializer() {
               return 'scroll';
            }
         }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'summary', [_dec12], {
            enumerable: true,
            initializer: function initializer() {
               return [];
            }
         }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'headers', [_dec13], {
            enumerable: true,
            initializer: function initializer() {
               return [];
            }
         }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec14], {
            enumerable: true,
            initializer: function initializer() {
               return [];
            }
         }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec15], {
            enumerable: true,
            initializer: function initializer() {
               return [];
            }
         }), _applyDecoratedDescriptor(_class2.prototype, 'maxPages', [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, 'maxPages'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'filtered', [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, 'filtered'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'viewable', [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, 'viewable'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class));

         _export('AureliaTable', AureliaTable);
      }
   };
});