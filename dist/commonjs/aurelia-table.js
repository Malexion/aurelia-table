'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AureliaTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;

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

var AureliaTable = exports.AureliaTable = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine, _aureliaTemplatingResources.BindingSignaler), _dec2 = (0, _aureliaFramework.bindable)(), _dec3 = (0, _aureliaFramework.bindable)(), _dec4 = (0, _aureliaFramework.bindable)(), _dec5 = (0, _aureliaFramework.bindable)(), _dec6 = (0, _aureliaFramework.bindable)(), _dec7 = (0, _aureliaFramework.bindable)(), _dec8 = (0, _aureliaFramework.bindable)(), _dec9 = (0, _aureliaFramework.bindable)(), _dec10 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec11 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec12 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec13 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec14 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec15 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec16 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec17 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec18 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec19 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec20 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec21 = (0, _aureliaFramework.computedFrom)('rows', 'pageSize'), _dec22 = (0, _aureliaFramework.computedFrom)('rows', 'columns', 'filter', 'sort', 'map'), _dec23 = (0, _aureliaFramework.computedFrom)('filtered', 'startPage', 'pageSize', 'endpage', 'pageMode'), _dec24 = (0, _aureliaFramework.computedFrom)('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec25 = (0, _aureliaFramework.computedFrom)('height'), _dec(_class = (_class2 = function () {
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

        _initDefineProp(this, 'filter', _descriptor9, this);

        _initDefineProp(this, 'sort', _descriptor10, this);

        _initDefineProp(this, 'map', _descriptor11, this);

        _initDefineProp(this, 'startPage', _descriptor12, this);

        _initDefineProp(this, 'endPage', _descriptor13, this);

        _initDefineProp(this, 'pageSize', _descriptor14, this);

        _initDefineProp(this, 'pageMode', _descriptor15, this);

        _initDefineProp(this, 'summary', _descriptor16, this);

        _initDefineProp(this, 'headers', _descriptor17, this);

        _initDefineProp(this, 'rows', _descriptor18, this);

        _initDefineProp(this, 'columns', _descriptor19, this);

        var self = this;
        self._scrollbarwidth = null;
        self.columnSubscriptions = [];
        self.bindings = bindings;
        self.signals = signals;
        self.events = new _iterateJs2.default.lib.EventManager();
        self.events.read(self);

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
                sortable: false,
                filterable: false,
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
            if (template.sortable && template.key == null) template.key = function (x) {
                return _iterateJs2.default.prop(x, template.field);
            };
        };

        self.columnRefresh = _iterateJs2.default.debounce(function () {
            self.signals.signal('at-columns');
        }, 10);
        self.rowRefresh = _iterateJs2.default.debounce(function () {
            self.signals.signal('at-rows');
        }, 10);
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
        if (event.after) {
            _iterateJs2.default.all(this.columnSubscriptions, function (x) {
                return x && _iterateJs2.default.is.function(x.dispose) ? x.dispose() : x;
            });
            this.columnSubscriptions = [];
        }
    };

    AureliaTable.prototype.onColumnResizeStart = function onColumnResizeStart(event) {
        if (event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            if ($event.which == 1) {
                self.dragging = true;
                $column.dragging = true;
                $column._clientX = $event.clientX;
                $column._targetX = $event.target.parentElement.offsetWidth;
            }
        }
    };

    AureliaTable.prototype.onColumnResizeDrag = function onColumnResizeDrag(event) {
        if (event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            $column.size = $column._targetX + ($event.clientX - $column._clientX) + 'px';
        }
    };

    AureliaTable.prototype.onColumnResizeEnd = function onColumnResizeEnd(event) {
        if (event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            self.dragging = false;
            $column.dragging = false;
            delete $column._clientX;
            delete $column._targetX;
        }
    };

    AureliaTable.prototype.onColumnResize = function onColumnResize(event) {
        var self = this;
        if (event.after && self.body) {
            var baseWidth = self.body.offsetWidth,
                chunkCount = 0,
                parser = new _iterateJs2.default.lib.StyleParser();

            if (self.showScrollBar) baseWidth -= self.scrollBarWidth;

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
                    if (_iterateJs2.default.is.string(width) && width.contains('%')) width = parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px';

                    parser.remove('width');
                    parser['min-width'] = width;
                    parser['max-width'] = width;

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

            if (_iterateJs2.default.is.object(options)) _iterateJs2.default.fuse(self, options, { deep: deep });
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
                sort = _iterateJs2.default.sort(_iterateJs2.default.filter(self.columns, function (x) {
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
            var _hash;

            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            var hash = (_hash = {}, _hash[$column.defaultDir] = $column.defaultDir == 'asc' ? 'desc' : 'asc', _hash[$column.defaultDir == 'asc' ? 'desc' : 'asc'] = null, _hash.null = $column.defaultDir, _hash);
            $column.dir = hash[$column.dir];

            $column.key = _iterateJs2.default.is.function($column.key) ? $column.key : function (x) {
                return _iterateJs2.default.prop(x, $column.field);
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
        _iterateJs2.default.all(self.windowHandlers, function (handler, key) {
            return window.addEventListener(key, handler);
        });
        self.events.trigger('Attached')();
    };

    AureliaTable.prototype.detached = function detached() {
        _iterateJs2.default.all(self.windowHandlers, function (handler, key) {
            return window.removeEventListener(key, handler);
        });
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
            var temp = this.rows;
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

                this._scrollbarwidth = w1 - w2 + 1;
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
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'map', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'startPage', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'endPage', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return 50;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'pageMode', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return 'scroll';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'summary', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'headers', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'maxPages', [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'maxPages'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'filtered', [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, 'filtered'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'viewable', [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, 'viewable'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);