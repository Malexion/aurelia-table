var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;

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

export let AureliaTable = (_dec = inject(BindingEngine, BindingSignaler), _dec2 = bindable(), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec13 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec14 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec15 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec16 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec17 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec18 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec19 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec20 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec21 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec22 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec23 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = computedFrom('rows', 'pageSize'), _dec36 = computedFrom('rows', 'columns', 'colfilters', 'filter', 'sort', 'map', 'pageMode'), _dec37 = computedFrom('filtered', 'startPage', 'pageSize', 'endpage', 'pageMode'), _dec38 = computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec39 = computedFrom('height'), _dec(_class = (_class2 = class AureliaTable {

    constructor(bindings, signals) {
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
        self.events = new __.lib.EventManager();
        self.events.read(self);
        self.widthMap = {};

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
            __.all(col, (x, y) => {
                if (!__.is.set(template[y])) template[y] = x;
            });
            if (template.key == null) template.key = row => __.prop(row, template.field);
        };

        self.columnRefresh = __.debounce(() => {
            self.signals.signal('at-columns');
        }, 10);
        self.rowRefresh = __.debounce(() => {
            self.signals.signal('at-rows');
        }, 10);
        self.pageDown = __.debounce(() => {
            if (self.pageMode == 'paginate') {
                self.startPage--;
                if (self.body) self.body.scrollTop = 0;
            }
            self.endPage--;
        });
        self.pageUp = __.debounce(() => {
            if (self.pageMode == 'paginate') {
                self.startPage++;
                if (self.body) self.body.scrollTop = 0;
            }
            self.endPage++;
        }, 10);
        self.pageReset = __.debounce(() => {
            if (self.body) self.body.scrollTop = 0;
            self.startPage = 0;
            self.endPage = 1;
        }, 10);

        self.sortRows = __.debounce(() => {
            self.events.trigger('Sort')();
        }, 10);
        self.resizeColumns = __.debounce(() => {
            self.events.trigger('ColumnResize')();
        }, 10);
        self.filterColumns = __.debounce(() => {
            self.events.trigger('ColumnFilter')();
        }, 10);
        self.clean = () => {
            self.events.trigger('Clean')();
        };
        self.update = (a, b) => {
            self.events.trigger('Update', { options: a, deep: b })();
        };

        self.windowHandlers = {
            resize: event => {
                self.resizeColumns();
            },
            mouseup: event => {
                var column = __.search(self.columns, x => x.dragging);
                if (column) self.events.trigger('ColumnResizeEnd', { event: event, column: column })();
            },
            mousemove: event => {
                var column = __.search(self.columns, x => x.dragging);
                if (column) self.events.trigger('ColumnResizeDrag', { event: event, column: column })();
            }
        };
    }

    onClean(event) {
        if (this.cleanEvent) this.cleanEvent(event);
        if (event.after) {
            __.all(this.columnSubscriptions, x => x && __.is.function(x.dispose) ? x.dispose() : x);
            this.columnSubscriptions = [];
        }
    }

    onColumnResizeStart(event) {
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
    }

    onColumnResizeDrag(event) {
        if (this.resizeDragEvent) this.resizeDragEvent(event);
        if (event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            $column.size = `${$column._targetX + ($event.clientX - $column._clientX)}px`;
        }
    }

    onColumnResizeEnd(event) {
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
                    parser = new __.lib.StyleParser();

                if (self.showScrollBar) baseWidth -= self.scrollBarWidth;

                __.all(self.columns, (column, colidx) => {
                    if (!__.match(column, $column)) {
                        parser.clear();
                        parser.update(self.widthMap[colidx]);
                        if (__.is.string(column.size)) {
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
    }

    onColumnResize(event) {
        var self = this;
        if (self.columnResizeEvent) self.columnResizeEvent(event);
        if (event.after && self.body) {
            var baseWidth = self.body.offsetWidth - 1,
                chunkCount = 0,
                parser = new __.lib.StyleParser();

            if (self.showScrollBar) baseWidth -= self.scrollBarWidth;

            __.all(self.columns, (column, colidx) => {
                if (!__.is.set(self.widthMap[colidx])) self.widthMap[colidx] = '';
                if (!column.hidden) {
                    parser.clear();
                    parser.update(self.widthMap[colidx]);
                    parser['width'] = column.size;
                    self.widthMap[colidx] = parser.asString;

                    if (__.is.string(column.size)) {
                        if (column.size.contains('%')) chunkCount += parseFloat(column.size.replace('%', ''));else if (column.size.contains('px')) baseWidth -= parseFloat(column.size.replace('px', ''));
                    }
                }
            });

            var width;
            __.all(self.columns, (column, colidx) => {
                if (!column.hidden) {
                    parser.clear();
                    parser.update(self.widthMap[colidx]);
                    width = parser['width'];
                    if (__.is.string(width) && width.contains('%')) width = parseFloat(width.replace('%', '')) / chunkCount * baseWidth + 'px';

                    parser['width'] = width;
                    parser['min-width'] = width;
                    parser['max-width'] = width;

                    self.widthMap[colidx] = parser.asString;
                }
            });
        }
    }

    onColumnFilter(event) {
        if (this.columnFilterEvent) this.columnFilterEvent(event);
        if (event.after) {
            var self = this,
                colfilters = __.filter(self.columns, x => x.filter && x.condition);

            self.colfilters = colfilters.length > 0 ? colfilters : null;
        }
    }

    onUpdate(event) {
        if (this.updateEvent) this.updateEvent(event);
        if (event.after) {
            var self = this,
                options = event.data.options,
                deep = event.data.deep;

            if (__.is.object(options)) __.fuse(self, options, { deep: deep });
        }
    }

    onRowClick(event) {
        if (this.rowClickEvent) this.rowClickEvent(event);
    }

    onScroll(event) {
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
    }

    onSort(event) {
        if (this.sortEvent) this.sortEvent(event);
        if (event.after) {
            var self = this,
                sort = __.sort(__.filter(self.columns, x => x.sortable && x.dir && x.key), { dir: 'asc', key: x => x.sortOrder });

            self.sort = sort.length > 0 ? sort : null;
        }
    }

    onSortClick(event) {
        if (this.sortClickEvent) this.sortClickEvent(event);
        if (event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            var hash = {
                [$column.defaultDir]: $column.defaultDir == 'asc' ? 'desc' : 'asc',
                [$column.defaultDir == 'asc' ? 'desc' : 'asc']: null,
                null: $column.defaultDir
            };
            $column.dir = hash[$column.dir];

            if (!__.is.function($column.key)) $column.key = row => __.prop(row, $column.field);

            if (!$event.ctrlKey) {
                __.all(self.columns, x => {
                    if (x.field != $column.field) x.dir = null;
                    if (__.is.set(x.sortOrder)) delete x.sortOrder;
                });
            }

            __.all(self.columns, x => x.sortOrder ? x.sortOrder-- : '');
            $column.sortOrder = 1;
        }
    }

    attached() {
        var self = this;
        self.resizeColumns();
        self.bodyWidthSub = self.bindings.propertyObserver(self.body, 'clientWidth').subscribe(() => self.resizeColumns());
        __.all(self.windowHandlers, (handler, key) => window.addEventListener(key, handler));
        self.events.trigger('Attached')();
    }

    detached() {
        __.all(self.windowHandlers, (handler, key) => window.removeEventListener(key, handler));
        if (this.bodyWidthSub) this.bodyWidthSub.dispose();
        this.clean();
        this.events.trigger('Detached')();
    }

    colfiltersChanged() {
        if (this.pageMode == 'scroll') this.pageReset();
    }

    filterChanged() {
        if (this.pageMode == 'scroll') this.pageReset();
    }

    sortChanged() {
        if (this.pageMode == 'scroll') this.pageReset();
    }

    mapChanged() {
        if (this.pageMode == 'scroll') this.pageReset();
    }

    headersChanged(newRows, oldRows) {
        if (newRows) {
            var self = this;
            __.all(newRows, x => self.rowTemplate(x));
            self.events.trigger('StaticHeadersChanged', { headers: newRows })();
        }
    }

    summaryChanged(newRows, oldRows) {
        if (newRows) {
            var self = this;
            __.all(newRows.slice(), x => self.rowTemplate(x));
            self.events.trigger('StaticSummaryChanged', { summary: newRows })();
        }
    }

    rowsChanged(newRows, oldRows) {
        if (newRows) {
            var self = this;
            __.all(newRows, x => self.rowTemplate(x));
            self.events.trigger('RowsChanged', { rows: newRows })();

            self.resizeColumns();
            self.sortRows();
        }
    }

    columnsChanged(newColumns, oldColumns) {
        if (newColumns) {
            var self = this,
                resize = () => {
                self.resizeColumns();
            },
                sortme = () => {
                self.sortRows();
            },
                filterme = () => {
                self.filterColumns();
            };

            self.clean();
            __.all(newColumns, x => {
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
    }

    get maxPages() {
        return __.is.set(this.pageSize) ? Math.ceil(this.rows.length / this.pageSize) : 1;
    }

    get filtered() {
        var temp = this.rows.slice();
        if (this.pageMode) temp = __.filter(temp, x => !x.hidden);
        if (__.is.set(this.colfilters)) {
            var flag;
            temp = __.filter(temp, (row, rowidx) => {
                flag = true;
                __.all(this.colfilters, (column, i, e) => {
                    if (!column.condition(row[column.field], row, column, rowidx)) {
                        flag = false;
                        e.stop = true;
                    }
                });
                return flag;
            });
        }
        if (__.is.set(this.filter)) temp = __.filter(temp, this.filter);
        if (__.is.set(this.sort)) temp = __.sort(temp, this.sort);
        if (__.is.set(this.map)) temp = __.map(temp, this.map);
        return temp;
    }

    get viewable() {
        var array = this.filtered;
        if (__.is.array(this.rows) && this.pageMode && __.is.set(this.startPage) && __.is.set(this.endPage) && __.is.set(this.pageSize)) return array.slice(this.startPage * this.pageSize, this.endPage * this.pageSize);
        return array;
    }

    get scrollBarWidth() {
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

    get showScrollBar() {
        var result = this.body && this.body.scrollHeight > this.body.clientHeight;
        if (result != this._showScrollBar) {
            this._showScrollBar = result;
            this.resizeColumns();
        }
        return this._showScrollBar;
    }

    get bodyHeight() {
        return this.height ? `height: ${this.height}px; overflow-y: auto;` : '';
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec2], {
    enumerable: true,
    initializer: function () {
        return '';
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec3], {
    enumerable: true,
    initializer: function () {
        return 300;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_dec4], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'tableClasses', [_dec5], {
    enumerable: true,
    initializer: function () {
        return 'table-hover table-condensed';
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showSummary', [_dec6], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'showColHeaders', [_dec7], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'showFixedHeaders', [_dec8], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showRows', [_dec9], {
    enumerable: true,
    initializer: function () {
        return true;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'autoScrollRatio', [_dec10], {
    enumerable: true,
    initializer: function () {
        return 0.9;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'scrollWidth', [_dec11], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'colfilters', [_dec12], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_dec13], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [_dec14], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'map', [_dec15], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'startPage', [_dec16], {
    enumerable: true,
    initializer: function () {
        return 0;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'endPage', [_dec17], {
    enumerable: true,
    initializer: function () {
        return 1;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec18], {
    enumerable: true,
    initializer: function () {
        return 50;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'pageMode', [_dec19], {
    enumerable: true,
    initializer: function () {
        return 'scroll';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'summary', [_dec20], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'headers', [_dec21], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec22], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec23], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'cleanEvent', [_dec24], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'resizeStartEvent', [_dec25], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'resizeDragEvent', [_dec26], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'resizeEndEvent', [_dec27], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'columnResizeEvent', [_dec28], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'columnFilterEvent', [_dec29], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'updateEvent', [_dec30], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'scrollEvent', [_dec31], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'sortEvent', [_dec32], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'sortClickEvent', [_dec33], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'rowClickEvent', [_dec34], {
    enumerable: true,
    initializer: function () {
        return () => {};
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'maxPages', [_dec35], Object.getOwnPropertyDescriptor(_class2.prototype, 'maxPages'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'filtered', [_dec36], Object.getOwnPropertyDescriptor(_class2.prototype, 'filtered'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'viewable', [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, 'viewable'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showScrollBar', [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, 'showScrollBar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'bodyHeight', [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, 'bodyHeight'), _class2.prototype)), _class2)) || _class);