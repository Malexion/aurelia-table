define(['exports', 'aurelia-framework', 'aurelia-templating-resources', 'iterate-js'], function (exports, _aureliaFramework, _aureliaTemplatingResources, _iterateJs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AureliaTable = undefined;

    var _iterateJs2 = _interopRequireDefault(_iterateJs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var _createClass = function () {
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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;

    var AureliaTable = exports.AureliaTable = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine, _aureliaTemplatingResources.BindingSignaler), _dec2 = (0, _aureliaFramework.bindable)(), _dec3 = (0, _aureliaFramework.bindable)(), _dec4 = (0, _aureliaFramework.bindable)(), _dec5 = (0, _aureliaFramework.bindable)(), _dec6 = (0, _aureliaFramework.bindable)(), _dec7 = (0, _aureliaFramework.bindable)(), _dec8 = (0, _aureliaFramework.bindable)(), _dec9 = (0, _aureliaFramework.bindable)(), _dec10 = (0, _aureliaFramework.bindable)(), _dec11 = (0, _aureliaFramework.bindable)(), _dec12 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec13 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec14 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec15 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec16 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec17 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec18 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec19 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec20 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec21 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec22 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec23 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec24 = (0, _aureliaFramework.bindable)(), _dec25 = (0, _aureliaFramework.bindable)(), _dec26 = (0, _aureliaFramework.bindable)(), _dec27 = (0, _aureliaFramework.bindable)(), _dec28 = (0, _aureliaFramework.bindable)(), _dec29 = (0, _aureliaFramework.bindable)(), _dec30 = (0, _aureliaFramework.bindable)(), _dec31 = (0, _aureliaFramework.bindable)(), _dec32 = (0, _aureliaFramework.bindable)(), _dec33 = (0, _aureliaFramework.bindable)(), _dec34 = (0, _aureliaFramework.bindable)(), _dec35 = (0, _aureliaFramework.computedFrom)('rows', 'pageSize'), _dec36 = (0, _aureliaFramework.computedFrom)('rows', 'columns', 'colfilters', 'filter', 'sort', 'map', 'pageMode'), _dec37 = (0, _aureliaFramework.computedFrom)('filtered', 'startPage', 'pageSize', 'endpage', 'pageMode'), _dec38 = (0, _aureliaFramework.computedFrom)('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec39 = (0, _aureliaFramework.computedFrom)('height'), _dec(_class = (_class2 = function () {
        function AureliaTable(bindings, signals) {
            _classCallCheck(this, AureliaTable);

            _initDefineProp(this, 'header', _descriptor, this);

            _initDefineProp(this, 'height', _descriptor2, this);

            _initDefineProp(this, 'loading', _descriptor3, this);

            _initDefineProp(this, 'tableClasses', _descriptor4, this);

            _initDefineProp(this, 'showSummary', _descriptor5, this);

            _initDefineProp(this, 'showColHeaders', _descriptor6, this);

            _initDefineProp(this, 'showFixedHeaders', _descriptor7, this);

            _initDefineProp(this, 'showRows', _descriptor8, this);

            _initDefineProp(this, 'autoScrollRatio', _descriptor9, this);

            _initDefineProp(this, 'scrollWidth', _descriptor10, this);

            _initDefineProp(this, 'colfilters', _descriptor11, this);

            _initDefineProp(this, 'filter', _descriptor12, this);

            _initDefineProp(this, 'sort', _descriptor13, this);

            _initDefineProp(this, 'map', _descriptor14, this);

            _initDefineProp(this, 'startPage', _descriptor15, this);

            _initDefineProp(this, 'endPage', _descriptor16, this);

            _initDefineProp(this, 'pageSize', _descriptor17, this);

            _initDefineProp(this, 'pageMode', _descriptor18, this);

            _initDefineProp(this, 'summary', _descriptor19, this);

            _initDefineProp(this, 'headers', _descriptor20, this);

            _initDefineProp(this, 'rows', _descriptor21, this);

            _initDefineProp(this, 'columns', _descriptor22, this);

            _initDefineProp(this, 'cleanEvent', _descriptor23, this);

            _initDefineProp(this, 'resizeStartEvent', _descriptor24, this);

            _initDefineProp(this, 'resizeDragEvent', _descriptor25, this);

            _initDefineProp(this, 'resizeEndEvent', _descriptor26, this);

            _initDefineProp(this, 'columnResizeEvent', _descriptor27, this);

            _initDefineProp(this, 'columnFilterEvent', _descriptor28, this);

            _initDefineProp(this, 'updateEvent', _descriptor29, this);

            _initDefineProp(this, 'scrollEvent', _descriptor30, this);

            _initDefineProp(this, 'sortEvent', _descriptor31, this);

            _initDefineProp(this, 'sortClickEvent', _descriptor32, this);

            _initDefineProp(this, 'rowClickEvent', _descriptor33, this);

            var self = this;
            self._scrollbarwidth = null;
            self.columnSubscriptions = [];
            self.bindings = bindings;
            self.signals = signals;
            self.events = new _iterateJs2.default.lib.EventManager();
            self.events.read(self);
            self.widthMap = {};

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
                var col = {
                    field: '',
                    header: '',
                    size: '100%',
                    class: '',
                    style: '',
                    hidden: false,
                    render: null,
                    filter: null,
                    filterOptions: {},
                    condition: null,
                    sortable: false,
                    resizable: true,
                    configurable: true,
                    dragging: false,
                    key: null,
                    dir: null,
                    defaultDir: 'asc'
                };
                _iterateJs2.default.all(col, function (x, y) {
                    if (!_iterateJs2.default.is.set(template[y])) template[y] = x;
                });
                if (template.key == null) template.key = function (row) {
                    return _iterateJs2.default.prop(row, template.field);
                };
            };

            self.columnRefresh = _iterateJs2.default.debounce(function () {
                self.signals.signal('at-columns');
            }, 10);
            self.rowRefresh = _iterateJs2.default.debounce(function () {
                self.signals.signal('at-rows');
            }, 10);
            self.pageDown = _iterateJs2.default.debounce(function () {
                if (self.pageMode == 'paginate') {
                    self.startPage--;
                    if (self.body) self.body.scrollTop = 0;
                }
                self.endPage--;
            });
            self.pageUp = _iterateJs2.default.debounce(function () {
                if (self.pageMode == 'paginate') {
                    self.startPage++;
                    if (self.body) self.body.scrollTop = 0;
                }
                self.endPage++;
            }, 10);
            self.pageReset = _iterateJs2.default.debounce(function () {
                if (self.body) self.body.scrollTop = 0;
                self.startPage = 0;
                self.endPage = 1;
            }, 10);

            self.sortRows = _iterateJs2.default.debounce(function () {
                self.events.trigger('Sort')();
            }, 10);
            self.resizeColumns = _iterateJs2.default.debounce(function () {
                self.events.trigger('ColumnResize')();
            }, 10);
            self.filterColumns = _iterateJs2.default.debounce(function () {
                self.events.trigger('ColumnFilter')();
            }, 10);
            self.clean = function () {
                self.events.trigger('Clean')();
            };
            self.update = function (a, b) {
                self.events.trigger('Update', { options: a, deep: b })();
            };

            self.windowHandlers = {
                resize: function resize(event) {
                    self.resizeColumns();
                },
                mouseup: function mouseup(event) {
                    var column = _iterateJs2.default.search(self.columns, function (x) {
                        return x.dragging;
                    });
                    if (column) self.events.trigger('ColumnResizeEnd', { event: event, column: column })();
                },
                mousemove: function mousemove(event) {
                    var column = _iterateJs2.default.search(self.columns, function (x) {
                        return x.dragging;
                    });
                    if (column) self.events.trigger('ColumnResizeDrag', { event: event, column: column })();
                }
            };
        }

        AureliaTable.prototype.onClean = function onClean(event) {
            if (this.cleanEvent) this.cleanEvent(event);
            if (event.after) {
                _iterateJs2.default.all(this.columnSubscriptions, function (x) {
                    return x && _iterateJs2.default.is.function(x.dispose) ? x.dispose() : x;
                });
                this.columnSubscriptions = [];
            }
        };

        AureliaTable.prototype.onColumnResizeStart = function onColumnResizeStart(event) {
            if (this.resizeStartEvent) this.resizeStartEvent(event);
            if (event.after) {
                var self = this,
                    $event = event.data.event,
                    $column = event.data.column;

                if ($event.which == 1) {
                    self.dragging = true;
                    $column.dragging = true;
                    $column._sizePercent = $column.size.contains('%');
                    $column._clientX = $event.clientX;
                    $column._targetX = $event.target.parentElement.offsetWidth;
                }
            }
        };

        AureliaTable.prototype.onColumnResizeDrag = function onColumnResizeDrag(event) {
            if (this.resizeDragEvent) this.resizeDragEvent(event);
            if (event.after) {
                var self = this,
                    $event = event.data.event,
                    $column = event.data.column;

                $column.size = $column._targetX + ($event.clientX - $column._clientX) + 'px';
            }
        };

        AureliaTable.prototype.onColumnResizeEnd = function onColumnResizeEnd(event) {
            if (this.resizeEndEvent) this.resizeEndEvent(event);
            if (event.after) {
                var self = this,
                    $event = event.data.event,
                    $column = event.data.column;

                self.dragging = false;
                $column.dragging = false;

                if ($column._sizePercent) {
                    var baseWidth = self.body.offsetWidth,
                        chunkCount = 0,
                        chunkPX = 0,
                        width = parseFloat($column.size.replace('px', '')),
                        parser = new _iterateJs2.default.lib.StyleParser();

                    if (self.showScrollBar) baseWidth -= self.scrollBarWidth;

                    _iterateJs2.default.all(self.columns, function (column, colidx) {
                        if (!_iterateJs2.default.match(column, $column)) {
                            parser.clear();
                            parser.update(self.widthMap[colidx]);
                            if (_iterateJs2.default.is.string(column.size)) {
                                if (column.size.contains('%')) {
                                    chunkCount += parseFloat(column.size.replace('%', ''));
                                    chunkPX += parseFloat(parser['max-width'].replace('px', ''));
                                } else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
                            }
                        }
                    });
                    if (chunkCount == 0) return;
                    var desiredChunk = chunkCount / (chunkPX / baseWidth) - chunkCount;
                    $column.size = desiredChunk + '%';
                }

                delete $column._sizePercent;
                delete $column._clientX;
                delete $column._targetX;
            }
        };

        AureliaTable.prototype.onColumnResize = function onColumnResize(event) {
            var self = this;
            if (self.columnResizeEvent) self.columnResizeEvent(event);
            if (event.after && self.body) {
                var baseWidth = self.body.offsetWidth - 1,
                    chunkCount = 0,
                    parser = new _iterateJs2.default.lib.StyleParser();

                if (self.showScrollBar) baseWidth -= self.scrollBarWidth;

                _iterateJs2.default.all(self.columns, function (column, colidx) {
                    if (!_iterateJs2.default.is.set(self.widthMap[colidx])) self.widthMap[colidx] = '';
                    if (!column.hidden) {
                        parser.clear();
                        parser.update(self.widthMap[colidx]);
                        parser['width'] = column.size;
                        self.widthMap[colidx] = parser.asString;

                        if (_iterateJs2.default.is.string(column.size)) {
                            if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
                        }
                    }
                });

                var width;
                _iterateJs2.default.all(self.columns, function (column, colidx) {
                    if (!column.hidden) {
                        parser.clear();
                        parser.update(self.widthMap[colidx]);
                        width = parser['width'];
                        if (_iterateJs2.default.is.string(width) && width.contains('%')) width = parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px';

                        parser['width'] = width;
                        parser['min-width'] = width;
                        parser['max-width'] = width;

                        self.widthMap[colidx] = parser.asString;
                    }
                });
            }
        };

        AureliaTable.prototype.onColumnFilter = function onColumnFilter(event) {
            if (this.columnFilterEvent) this.columnFilterEvent(event);
            if (event.after) {
                var self = this,
                    colfilters = _iterateJs2.default.filter(self.columns, function (x) {
                    return x.filter && x.condition;
                });

                self.colfilters = colfilters.length > 0 ? colfilters : null;
            }
        };

        AureliaTable.prototype.onUpdate = function onUpdate(event) {
            if (this.updateEvent) this.updateEvent(event);
            if (event.after) {
                var self = this,
                    options = event.data.options,
                    deep = event.data.deep;

                if (_iterateJs2.default.is.object(options)) _iterateJs2.default.fuse(self, options, { deep: deep });
            }
        };

        AureliaTable.prototype.onRowClick = function onRowClick(event) {
            if (this.rowClickEvent) this.rowClickEvent(event);
        };

        AureliaTable.prototype.onScroll = function onScroll(event) {
            if (this.scrollEvent) this.scrollEvent(event);
            if (event.after) {
                var self = this,
                    $event = event.data.event;
                if ($event.target.clientHeight + $event.target.scrollTop >= $event.target.scrollHeight * self.autoScrollRatio) {
                    if (self.pageMode == 'scroll' && self.endPage < self.maxPages) {
                        self.pageUp();
                    }
                }
            }
        };

        AureliaTable.prototype.onSort = function onSort(event) {
            if (this.sortEvent) this.sortEvent(event);
            if (event.after) {
                var self = this,
                    sort = _iterateJs2.default.sort(_iterateJs2.default.filter(self.columns, function (x) {
                    return x.sortable && x.dir && x.key;
                }), { dir: 'asc', key: function key(x) {
                        return x.sortOrder;
                    } });

                self.sort = sort.length > 0 ? sort : null;
            }
        };

        AureliaTable.prototype.onSortClick = function onSortClick(event) {
            if (this.sortClickEvent) this.sortClickEvent(event);
            if (event.after) {
                var _hash;

                var self = this,
                    $event = event.data.event,
                    $column = event.data.column;

                var hash = (_hash = {}, _hash[$column.defaultDir] = $column.defaultDir == 'asc' ? 'desc' : 'asc', _hash[$column.defaultDir == 'asc' ? 'desc' : 'asc'] = null, _hash.null = $column.defaultDir, _hash);
                $column.dir = hash[$column.dir];

                if (!_iterateJs2.default.is.function($column.key)) $column.key = function (row) {
                    return _iterateJs2.default.prop(row, $column.field);
                };

                if (!$event.ctrlKey) {
                    _iterateJs2.default.all(self.columns, function (x) {
                        if (x.field != $column.field) x.dir = null;
                        if (_iterateJs2.default.is.set(x.sortOrder)) delete x.sortOrder;
                    });
                }

                _iterateJs2.default.all(self.columns, function (x) {
                    return x.sortOrder ? x.sortOrder-- : '';
                });
                $column.sortOrder = 1;
            }
        };

        AureliaTable.prototype.attached = function attached() {
            var self = this;
            self.resizeColumns();
            self.bodyWidthSub = self.bindings.propertyObserver(self.body, 'clientWidth').subscribe(function () {
                return self.resizeColumns();
            });
            _iterateJs2.default.all(self.windowHandlers, function (handler, key) {
                return window.addEventListener(key, handler);
            });
            self.events.trigger('Attached')();
        };

        AureliaTable.prototype.detached = function detached() {
            _iterateJs2.default.all(self.windowHandlers, function (handler, key) {
                return window.removeEventListener(key, handler);
            });
            if (this.bodyWidthSub) this.bodyWidthSub.dispose();
            this.clean();
            this.events.trigger('Detached')();
        };

        AureliaTable.prototype.colfiltersChanged = function colfiltersChanged() {
            if (this.pageMode == 'scroll') this.pageReset();
        };

        AureliaTable.prototype.filterChanged = function filterChanged() {
            if (this.pageMode == 'scroll') this.pageReset();
        };

        AureliaTable.prototype.sortChanged = function sortChanged() {
            if (this.pageMode == 'scroll') this.pageReset();
        };

        AureliaTable.prototype.mapChanged = function mapChanged() {
            if (this.pageMode == 'scroll') this.pageReset();
        };

        AureliaTable.prototype.headersChanged = function headersChanged(newRows, oldRows) {
            if (newRows) {
                var self = this;
                _iterateJs2.default.all(newRows, function (x) {
                    return self.rowTemplate(x);
                });
                self.events.trigger('StaticHeadersChanged', { headers: newRows })();
            }
        };

        AureliaTable.prototype.summaryChanged = function summaryChanged(newRows, oldRows) {
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

                self.resizeColumns();
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
                },
                    filterme = function filterme() {
                    self.filterColumns();
                };

                self.clean();
                _iterateJs2.default.all(newColumns, function (x) {
                    self.colTemplate(x);
                    x.size = x.size ? x.size : '100%';
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'size').subscribe(resize));
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'hidden').subscribe(resize));
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'dir').subscribe(sortme));
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'key').subscribe(sortme));
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'filter').subscribe(filterme));
                    self.columnSubscriptions.push(self.bindings.propertyObserver(x, 'condition').subscribe(filterme));
                });
                self.events.trigger('ColumnsChanged', { columns: newColumns })();

                self.resizeColumns();
                self.sortRows();
            }
        };

        _createClass(AureliaTable, [{
            key: 'maxPages',
            get: function get() {
                return _iterateJs2.default.is.set(this.pageSize) ? Math.ceil(this.rows.length / this.pageSize) : 1;
            }
        }, {
            key: 'filtered',
            get: function get() {
                var _this = this;

                var temp = this.rows.slice();
                if (this.pageMode) temp = _iterateJs2.default.filter(temp, function (x) {
                    return !x.hidden;
                });
                if (_iterateJs2.default.is.set(this.colfilters)) {
                    var flag;
                    temp = _iterateJs2.default.filter(temp, function (row, rowidx) {
                        flag = true;
                        _iterateJs2.default.all(_this.colfilters, function (column, i, e) {
                            if (!column.condition(row[column.field], row, column, rowidx)) {
                                flag = false;
                                e.stop = true;
                            }
                        });
                        return flag;
                    });
                }
                if (_iterateJs2.default.is.set(this.filter)) temp = _iterateJs2.default.filter(temp, this.filter);
                if (_iterateJs2.default.is.set(this.sort)) temp = _iterateJs2.default.sort(temp, this.sort);
                if (_iterateJs2.default.is.set(this.map)) temp = _iterateJs2.default.map(temp, this.map);
                return temp;
            }
        }, {
            key: 'viewable',
            get: function get() {
                var array = this.filtered;
                if (_iterateJs2.default.is.array(this.rows) && this.pageMode && _iterateJs2.default.is.set(this.startPage) && _iterateJs2.default.is.set(this.endPage) && _iterateJs2.default.is.set(this.pageSize)) return array.slice(this.startPage * this.pageSize, this.endPage * this.pageSize);
                return array;
            }
        }, {
            key: 'scrollBarWidth',
            get: function get() {
                if (this.scrollWidth != null) return parseFloat(this.scrollWidth);
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
                var result = this.body && this.body.scrollHeight > this.body.clientHeight;
                if (result != this._showScrollBar) {
                    this._showScrollBar = result;
                    this.resizeColumns();
                }
                return this._showScrollBar;
            }
        }, {
            key: 'bodyHeight',
            get: function get() {
                return this.height ? 'height: ' + this.height + 'px; overflow-y: auto;' : '';
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
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'tableClasses', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return 'table-hover table-condensed';
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showSummary', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'showColHeaders', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'showFixedHeaders', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showRows', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'autoScrollRatio', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 0.9;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'scrollWidth', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'colfilters', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'map', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'startPage', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'endPage', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 1;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return 50;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'pageMode', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return 'scroll';
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'summary', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'headers', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return [];
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'cleanEvent', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'resizeStartEvent', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'resizeDragEvent', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'resizeEndEvent', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'columnResizeEvent', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'columnFilterEvent', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'updateEvent', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'scrollEvent', [_dec31], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'sortEvent', [_dec32], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'sortClickEvent', [_dec33], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'rowClickEvent', [_dec34], {
        enumerable: true,
        initializer: function initializer() {
            return function () {};
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'maxPages', [_dec35], Object.getOwnPropertyDescriptor(_class2.prototype, 'maxPages'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'filtered', [_dec36], Object.getOwnPropertyDescriptor(_class2.prototype, 'filtered'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'viewable', [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, 'viewable'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);
});