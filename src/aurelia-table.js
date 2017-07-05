
import { BindingEngine, inject, bindable, bindingMode, computedFrom } from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

import __ from 'iterate-js';

@inject(BindingEngine, BindingSignaler)
export class AureliaTable {
    @bindable() header = '';
    @bindable() height = 300;
    @bindable() loading = false;
    @bindable() tableClasses = 'table-hover table-condensed';
    @bindable() showSummary = true;
    @bindable() showColHeaders = true;
    @bindable() showFixedHeaders = true;
    @bindable() showRows = true;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) filter = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) sort = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) map = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) startPage = 0;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) endPage = 1;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) pageSize = 50;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) pageMode = 'scroll'; // paginate
    @bindable({ defaultBindingMode: bindingMode.twoWay }) summary = [];
    @bindable({ defaultBindingMode: bindingMode.twoWay }) headers = [];
    @bindable({ defaultBindingMode: bindingMode.twoWay }) rows = [];
    @bindable({ defaultBindingMode: bindingMode.twoWay }) columns = [];

    constructor(bindings, signals) {
        var self = this;
        self._scrollbarwidth = null;
        self.columnSubscriptions = [];
        self.bindings = bindings;
        self.signals = signals;
        self.events = new __.lib.EventManager();
        self.events.read(self);

        self.rowTemplate = (template) => {
            var row = {
                class: '',
                style: '',
                hidden: false,
                active: false
            };
            __.all(row, (x, y) => {
                if (!__.is.set(template[y]))
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
            __.all(col, (x, y) => {
                if (!__.is.set(template[y]))
                    template[y] = x;
            });
            if (template.sortable && template.key == null)
                template.key = x => __.prop(x, template.field);
        };

        self.columnRefresh = __.debounce(() => { self.signals.signal('at-columns'); }, 10);
        self.rowRefresh = __.debounce(() => { self.signals.signal('at-rows'); }, 10);
        self.pageUp = __.debounce(() => {
            if(self.pageMode == 'paginate') {
                self.startPage++;
                if(self.body)
                    self.body.scrollTop = 0;
            }
            self.endPage++; 
        }, 10);
        self.pageReset = __.debounce(() => {
            if (self.body)
                self.body.scrollTop = 0;
            self.startPage = 0;
            self.endPage = 1;
        }, 10);

        self.sortRows = __.debounce(() => { self.events.trigger('Sort')(); }, 10);
        self.resizeColumns = __.debounce(() => { self.events.trigger('ColumnResize')(); }, 10);
        self.clean = () => { self.events.trigger('Clean')(); };
        self.update = (a, b) => { self.events.trigger('Update', { options: a, deep: b })(); };

        self.windowHandlers = {
            resize: event => {
                self.resizeColumns();
            },
            mouseup: event => {
                var column = __.search(self.columns, x => x.dragging);
                if(column)
                    self.events.trigger('ColumnResizeEnd', { event: event, column: column })();
            },
            mousemove: event => {
                var column = __.search(self.columns, x => x.dragging);
                if(column)
                    self.events.trigger('ColumnResizeDrag', { event: event, column: column })();
            }
        };
    }

    onClean(event) {
        if (event.after) {
            __.all(this.columnSubscriptions, x => (x && __.is.function(x.dispose)) ? x.dispose() : x);
            this.columnSubscriptions = [];
        }
    }

    onColumnResizeStart(event) {
        if(event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;
            
            if($event.which == 1) {
                self.dragging = true;
                $column.dragging = true;
                $column._clientX = $event.clientX;
                $column._targetX = $event.target.parentElement.offsetWidth;
            }
        }
    }

    onColumnResizeDrag(event) {
        if(event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            $column.size = `${$column._targetX + ($event.clientX - $column._clientX)}px`;
        }
    }

    onColumnResizeEnd(event) {
        if(event.after) {
            var self = this,
                $event = event.data.event,
                $column = event.data.column;

            self.dragging = false;
            $column.dragging = false;
            delete $column._clientX;
            delete $column._targetX;
        }
    }

    onColumnResize(event) {
        var self = this;
        if (event.after && self.body) {
            var baseWidth = self.body.offsetWidth,
                chunkCount = 0,
                parser = new __.lib.StyleParser();

            // Account for scrollbar
            if(self.showScrollBar)
                baseWidth -= self.scrollBarWidth;

            // Calculate Widths
            __.all(self.columns, column => {
                if (!__.is.set(column.style))
                    column.style = '';
                if (!column.hidden) {
                    parser.clear();
                    parser.update(column.style);
                    parser['width'] = column.size;
                    column.style = parser.asString;
                    if (column.size == '100%') {
                        chunkCount += 100;
                    } else if (__.is.string(column.size)) {
                        if (column.size.contains('%'))
                            chunkCount += parseFloat(column.size.replace('%', ''));
                        else if (column.size.contains('px'))
                            baseWidth -= parseFloat(column.size.replace('px', ''));
                    }
                }
            });

            // Cut percentage chunks out of remaining width
            var width;
            __.all(self.columns, column => {
                if (!column.hidden) {
                    parser.clear();
                    parser.update(column.style);
                    width = parser['width'];
                    if (__.is.string(width) && width.contains('%'))
                        width = ((parseFloat(width.replace('%', '')) / chunkCount) * baseWidth) + 'px';
                        
                    parser.remove('width');
                    parser['min-width'] = width;
                    parser['max-width'] = width;

                    column.style = parser.asString;
                }
            });
        }
    }

    onUpdate(event) {
        if (event.after) {
            var self = this,
                options = event.data.options,
                deep = event.data.deep;

            if (__.is.object(options))
                __.fuse(self, options, { deep: deep });
        }
    }

    onScroll(event) {
        if (event.after) {
            var self = this,
                $event = event.data.event;
            if (($event.target.clientHeight + $event.target.scrollTop) >= $event.target.scrollHeight) {
                if (self.endPage < self.maxPages && self.pageMode == 'scroll') {
                    self.pageUp();
                }
            }
        }
    }

    onSort(event) {
        if (event.after) {
            var self = this,
                sort = __.sort(
                    __.filter(self.columns, x => (x.sortable && x.dir && x.key)), 
                    { dir: 'asc', key: x => x.sortOrder }
                );

            setTimeout(() => {
                self.sort = sort.length > 0 ? sort : null;
            }, 20);
        }
    }

    onSortClick(event) {
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

            $column.key = __.is.function($column.key) ? $column.key : x => __.prop(x, $column.field);

            if (!$event.ctrlKey) {
                __.all(self.columns, x => {
                    if (x.field != $column.field)
                        x.dir = null;
                    if(__.is.set(x.sortOrder))
                        delete x.sortOrder;
                });
            }

            __.all(self.columns, x => (x.sortOrder) ? x.sortOrder-- : '');
            $column.sortOrder = 1;
        }
    }

    attached() {
        var self = this;
        self.resizeColumns();
        __.all(self.windowHandlers, (handler, key) => window.addEventListener(key, handler));
        self.events.trigger('Attached')();
    }

    detached() {
        __.all(self.windowHandlers, (handler, key) => window.removeEventListener(key, handler));
        this.clean();
        this.events.trigger('Detached')();
    }

    filterChanged() {
        this.pageReset();
    }

    sortChanged() {
        this.pageReset();
    }

    mapChanged() {
        this.pageReset();
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
                resize = () => { self.resizeColumns(); },
                sortme = () => { self.sortRows(); };
                
            self.clean();
            __.all(newColumns, x => {
                self.colTemplate(x);
                x.size = x.size ? x.size : '100%';
                self.columnSubscriptions.push(self.bindings
                    .propertyObserver(x, 'size')
                    .subscribe(resize));
                self.columnSubscriptions.push(self.bindings
                    .propertyObserver(x, 'hidden')
                    .subscribe(resize));
                self.columnSubscriptions.push(self.bindings
                    .propertyObserver(x, 'dir')
                    .subscribe(sortme));
                self.columnSubscriptions.push(self.bindings
                    .propertyObserver(x, 'key')
                    .subscribe(sortme));
            });
            self.events.trigger('ColumnsChanged', { columns: newColumns })();

            self.resizeColumns();
            self.sortRows();
        }
    }

    @computedFrom('rows', 'pageSize')
    get maxPages() {
        return (__.is.set(this.pageSize) ? Math.ceil(this.rows.length / this.pageSize) : 1);
    }

    @computedFrom('rows', 'columns', 'filter', 'sort', 'map')
    get filtered() {
        var temp = this.rows;
        if(__.is.set(this.filter))
            temp = __.filter(temp, this.filter);
        if(__.is.set(this.sort))
            temp = __.sort(temp, this.sort);
        if(__.is.set(this.map))
            temp = __.map(temp, this.map);
        return temp;
    }

    @computedFrom('filtered', 'startPage', 'pageSize', 'endpage', 'pageMode')
    get viewable() {
        var array = this.filtered;
        if(__.is.array(this.rows) && this.pageMode && __.is.set(this.startPage) && __.is.set(this.endPage) && __.is.set(this.pageSize))
            return array.slice(this.startPage * this.pageSize, this.endPage * this.pageSize);
        return array;
    }

    get scrollBarWidth() {
        if (!this._scrollbarwidth) { // Calculate browsers scrollbar width once
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
            if (w1 == w2)
                w2 = outer.clientWidth;

            document.body.removeChild(outer);

            this._scrollbarwidth = (w1 - w2) + 1;
        }
        return this._scrollbarwidth;
    }

    @computedFrom('rows', 'body', 'body.scrollHeight', 'body.clientHeight')
    get showScrollBar() {
        var result = this.body && (this.body.scrollHeight > this.body.clientHeight);
        if(result != this._showScrollBar) {
            this._showScrollBar = result;
            this.resizeColumns();
        }
        return this._showScrollBar;
    }

    @computedFrom('height')
    get bodyHeight() {
        return this.height ? 'height: ' + this.height + 'px; overflow-y: auto;' : '';
    }
}
