# aurelia-table

## News

Latest:
- Unhooked column width(the style component) from the column object(you still set width with column.size).
   - This allows the same set of columns to be shared with multiple tables, previously they would get get column width issues since they would both attempt to recalculate their width to correct the other.
   - Note changing sort, header, hidden, etc will affect all tables with that column set.
- Added slightly easier access to common events, see event delegations below.
- Ability to override scrollbar width used in column width calculations, see bindables below.
- Ability to set auto scroll page down ratio, usually 0 to 1 indicating when the auto scroll page down will occur default is 90% (0.9) of the way down the scroll, see bindables below.

Last Time:
- Various column width/resize fixes
  - Note: Still doesn't properly handle fixed widths that go beyond the body width, need a means of dealing with that yet.
- Row View Value converter was discontinued and the row filtering just runs off of the two computed properties for now.
  - `filtered` All rows filtered down.
  - `viewable` Filtered rows plus page limitations.
- Beginnings of column specific filtering has been built in, only simple text evaluate is included for now with plans for:
  - Date (Equals/Greater Than/Less Than/Between) - I'd have to put together a decent datepicker for this using Moment.js probably
  - Number (Equals/Greater Than/Less Than/Between)
  - Checklist (Strings/Numbers/Dates)
- Column filter mode for Evaluate has access to:
  - `x` / `value` current row value.
  - `i` / `rowidx` current row index.
  - `row` current row.
  - `column` current column.

![Alt text](https://i.imgur.com/dWt0hWi.png)

## About

Semi-Bare bones bootstrap table/panel setup created as an aurelia element with fixed header/summary options, sortable columns/multisort with shift, resizable columns, title as the panel-heading and replaceable parts for header/row renders and more. 

NOTE: check-box, search-box, progress-bar, scale-bar, range elements, etc are not included. Reserved names are a custom element 'aurelia-table', 'aurelia-table-filter', 'aurelia-table-eval'

Gif including the in dev column-menu and other glitchy things like the progress bars.
(Live example pending IRL complications)
![Alt text](https://i.imgur.com/hkjqioT.gif "Grid Animation")

Full suite of controls/components is in the works for semantic-ui including a semantic-ui specific variation of the table.

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save aurelia-table`

```javascript
export async function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName('aurelia-table')); 

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}
```

### Webpack

If you have webpack then currently you'll probably have to add the `ModuleDependenciesPlugin` to your webpack.config.js
```javascript
const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');

....

plugins: [
   ....
   new ModuleDependenciesPlugin({
      "aurelia-table": [ './aurelia-table-filter', './aurelia-table' ]
   }),
   ....
]
```

## Dependencies

- Bootstrap (css)
- Font-Awesome Icons 4.6.3 (sort icons)
- iterate-js a (~25kb) library of my own making that assists with the column resizing/row templating/sorting and will help with searching/filtering and more in the future.

## Usage

### Minimum Setup View
```html
<template>
    <div class="row">
        <div class="col-md-12">
            <aurelia-table header.bind="header" columns.bind="columns" rows.bind="rows"></aurelia-table>
        </div>
    </div>
</template>
```

### Minimum Setup View Model
```javascript
export class TablePage {

    constructor() {
         this.header = 'Basic Grid';
         this.columns = [
            { field: 'value', header: 'Value' }
         ];
         // generate 1000 rows
         // NOTE that infinite scroll is turned on by default and loads in blocks of 50 rows at a time
         this.rows = __.map(1000, x => ({ value: __.gen.number(1000000) })); 
    }

}
```

## Bindables
```javascript
@bindable() header = '';
@bindable() height = 300;
@bindable() loading = false;
@bindable() tableClasses = 'table-hover table-condensed';
@bindable() showSummary = true;
@bindable() showColHeaders = true;
@bindable() showFixedHeaders = true;
@bindable() showRows = true;
@bindable() autoScrollRatio = 0.9; // New
@bindable() scrollWidth = null; // New
@bindable({ defaultBindingMode: bindingMode.twoWay }) colfilters = null;
@bindable({ defaultBindingMode: bindingMode.twoWay }) filter = null;
@bindable({ defaultBindingMode: bindingMode.twoWay }) sort = null;
@bindable({ defaultBindingMode: bindingMode.twoWay }) map = null;
@bindable({ defaultBindingMode: bindingMode.twoWay }) startPage = 0;
@bindable({ defaultBindingMode: bindingMode.twoWay }) endPage = 1;
@bindable({ defaultBindingMode: bindingMode.twoWay }) pageSize = 50;
@bindable({ defaultBindingMode: bindingMode.twoWay }) pageMode = 'scroll'; // paginate, set to null to disable infinite scroll/pagination
@bindable({ defaultBindingMode: bindingMode.twoWay }) summary = [];
@bindable({ defaultBindingMode: bindingMode.twoWay }) headers = [];
@bindable({ defaultBindingMode: bindingMode.twoWay }) rows = [];
@bindable({ defaultBindingMode: bindingMode.twoWay }) columns = [];
```

## Event Delegations
```javascript
@bindable() cleanEvent = () => { };
@bindable() resizeStartEvent = () => { };
@bindable() resizeDragEvent = () => { };
@bindable() resizeEndEvent = () => { };
@bindable() columnResizeEvent = () => { };
@bindable() columnFilterEvent = () => { };
@bindable() updateEvent = () => { };
@bindable() scrollEvent = () => { };
@bindable() sortEvent = () => { };
@bindable() sortClickEvent = () => { };
@bindable() rowClickEvent = () => { };
```

### How to Use
```html
<aurelia-table row-click-event.call="someHandler1(after, data)"></aurelia-table>
<aurelia-table row-click-event.bind="someHandler2"></aurelia-table>
```
```javascript
someHandler1(after, data) { // if you don't want to cancel
   if(after) {
      console.log(data.row);
   }
}
someHandler2(event) { // full functionality 
   var row = event.data.row;
   //event.isCancelled = true; // to prevent most default event executions
   if(event.before) {
      // before default execution
   }
   if(event.after) {
      // after default execution
   }
}
```

## Row View
Rows are rendered via computed properties.
```javascript
@computedFrom('rows', 'columns', 'colfilters', 'filter', 'sort', 'map', 'pageMode')
get filtered() {
   var temp = this.rows.slice();
   if(this.pageMode)
      temp = __.filter(temp, x => !x.hidden);
   if(__.is.set(this.colfilters)) {
      var flag;
      temp = __.filter(temp, (row, rowidx) => {
            flag = true;
            __.all(this.colfilters, (column, i, e) => {
               if(!column.condition(row[column.field], row, column, rowidx)) {
                  flag = false;
                  e.stop = true;
               }
            });
            return flag;
      });
   }
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
```

## Current viewable/filtered rows
You can bind to your grids current viewable rows which includes pagination/scroll limits and filter/sort/map or you can bind to filtered rows which only use the filter/sort/map functions.
```html
<aurelia-table view-model.ref="myTable"></aurelia-table>

<div repeat.for="row of myTable.viewable"></div>
<div repeat.for="row of myTable.filtered"></div>
```

## Colfilters/Filter/Sort/Map
These four bindables can shape your rows how you like. 
- `colfilters` is primarily handled by the column definitions
  - `filter` string that sets the type of filter for the column only option at the moment is `'eval'`
  - `condition` function set by the internal filter component and must return true/false `(value, row, column, rowidx) => true`
- `filter` expects a function passed (value, key) of the row item, key being the array index and must return true if it is to be included, null means the filter is ignored.
- `sort` is primarily handled by the column definitions, all are optional `{...sortable: true, dir: 'desc', defaultDir: 'asc', key: x => x.value, sortOrder: 2 }`
  - `sortable` Enables sorting for that column
  - `dir` Current direction of the sort on the column, defaults to `asc` if not set, responds to being changed and will update the grid
  - `defaultDir` Default direction the column will be sorted on when first clicked with no current sort, defaults to `asc` if not set
  - `key` Path to the row value sorted upon, defaults to `row => row[column.field]`, allows you to modify what you are sorting upon for example if you wanted to do numeric sort on a string value `x => parseFloat(x.value)`
  - `sortOrder` Numeric order of sorting used with multi sort lower the number the higher the priority, usually starts with 1, so two columns with two sortOrder props defined will sort in that order
- `map` allows you to transform the array before use for example `row => ({ id: x.someId, label: x.name })`

## Row Property Keywords
All are optional
- `.class`      `[string]`    Set classes on each of the body rows.
- `.style`      `[string]`    Set styles on each of the body rows.
- `.active`     `[bool]`      Adds active styling over the row, bootstrap sets the styles.
- `.hidden`     `[bool]`      Sets hide/show for the row undefined or false results in being shown.

## Column Property Keywords
I highly recommend setting field though it isn't required
- `.field`        `[string]`    For your own use to help you locate the property for that column.
- `.header`       `[string]`    For your own use to help display the column header for that column.
- `.size`         `[string]`    Sets the column width, must be `px` or `%`. Default is set to `100%`.
- `.class`        `[string]`    Set classes on each of the columns.
- `.style`        `[string]`    Set styles on each of the columns, avoid setting width here set in `column.size` instead.
- `.hidden`       `[bool]`      Sets hide/show for the column undefined or false results in being shown.
- `.render`       `[string]`    For your own use to help display the column renders if you have differing ones, default value is null.
- `.fitler`       `[string]`    Sets the filter type for the column default is null.
- `.condition`    `[function]`  Filter evaluation for the column `(value, row, column, rowidx) => true` defaults to null.
- `.sortable`     `[bool]`      Enables sorting interaction on column.
- `.resizable`    `[bool]`      Enables the manual resizing of the column.
- `.configurable` `[bool]`      Enables the column-menu element configuration of an column.
- `.key`          `[function]`  Path to sortable variable for that column default is `row => row[column.field]`.
- `.dir`          `[string]`    Sort direction for column. Null turns off sort on the column.
- `.defaultDir`   `[string]`    Default sort direction set when the user first clicks on a column.
- `.sortOrder`    `[number]`    Numeric order used for multi sort, sorts in ascending numeric order so 1, 2, 3

## Replaceable Parts Include
- Header Areas
  - `header`
  - `right-controls` Right Aligned controls placed on the top panel heading.
  - `left-controls` Left Aligned controls placed on the top panel heading following the header.
```html
<div class="at-title panel-heading table-base-header" show.bind="header != ''">
   <template replaceable part="header">
         <h3 class="panel-header">${header}</h3>
   </template>
   <template replaceable part="left-controls"></template>
   <div class="pull-right">
         <template replaceable part="right-controls"></template>
   </div>
</div>
```

- Render Blocks (replace entire render blocks)
   - `column-render` Column headers, comes with sort icon look at the template before you replace this piece
   - `row-render` Row body, look at the template before you replace this piece

- Simple Replaceables
   - `column-header` Basic area for the column header display
```html
<div style="display: inline-block;">
   <template replaceable part="column-header">
      <span>${column.header}</span>
   </template>
</div>
```
  - `static-header` Basic area for static header renders
```html
<template replaceable part="static-header"></template>
```
  - `cell` Basic body area renders
```html
<template replaceable part="cell">
   <span>${row[column.field]}</span>
</template>
```
  - `static-summary` Basic summary area renders
```html
<template replaceable part="static-summary"></template>
```

## Helpful ViewModel Functions

- `table.columnRefresh()` Debounced method to signal force columns to update.
- `table.rowRefresh()` Debounced method to signal force rows to update.
- `table.sortRows()` Debounced method to force a row sort based on current column state.
- `table.resizeColumns()` Debounced method to force a recalculation of column widths.
- `table.pageDown()` Decrements the end page. In `'paginate'` mode it decreases the start page too.
- `table.pageUp()` Increments the end page, used by auto scroll when you hit the bottom. In `'paginate'` mode it increases the start page too.
- `table.pageReset()` Resets the start page to 0 and the end page to 1 and scrolls the body of the table to the top of the page.

## Future Plans
- column specific filtering - more types
- table menu element for full user customization?
- trim down css needed from bootstrap, icons needed from font-awesome icons and minimize iterate-js to a small lib of the required functions
- included elements (maybe) (search-box, progress-bar, scale-bar, range, date-time, check-box)
- ui virtualization (if it ever works with stacked repeat.for attributes)

## Advanced Setup (what the top picture uses)

### Setup View
```html
<template>
    <div class="row">
        <div class="col-md-12">
            <aurelia-table view-model.ref="myTable">
                <template replace-part="header">
                    <h3 class="panel-header">${header} (${rows.length})</h3>
                </template>
                <template replace-part="right-controls">
                    <div style="width: 400px; display: inline-block;">
                        <search-box textchange.bind="handleSearch" placeholder="Search me..."></search-box>
                    </div>
                    <div style="display: inline-block; vertical-align: top; margin: 2px;">
                        <div class="dropdown" openlisten.two-way="column_menu">
                            <span class="click" toggle.two-way="column_menu">
                                <i class="fa fa-2x fa-gear"></i>
                            </span>
                            <div class="dropdown-menu dropdown-menu-right" style="padding: 0; width: 300px;">
                                <column-menu table.bind="myTable"></column-menu>
                            </div>
                        </div>
                    </div>
                </template>
                <template replace-part="column-header">
                    ${column.header}
                </template>
                <template replace-part="static-header">
                    <div if.bind="column.render == 'range'">Static Header Rows</div>
                </template>
                <template replace-part="cell">
                    <check-box if.bind="column.render == 'checkbox'" check.bind="row[column.field]"></check-box>
                    <progress-bar if.bind="column.render == 'bar'" progress.bind="row[column.field]" max.bind="myTable.barMax">
                        <template replace-part="text">${row[column.field] | numeral:column.format}</template>
                    </progress-bar>
                    <range if.bind="column.render == 'range'" min.bind="row[column.field].min" max.bind="row[column.field].max" update.bind="row[column.field].update"></range>
                    <span if.bind="!column.render">${row[column.field]}</span>
                </template>
                <template replace-part="static-summary">
                    <scale-bar if.bind="column.render == 'bar'" format.bind="column.format" watch.bind="rows" path.bind="column.field" max.bind="myTable.barMax" force-min="0"></scale-bar>
                    <div if.bind="column.render == 'range'">Static Summary Rows</div>
                    <div if.bind="!column.render">Total: ${filtered | total:'value1' & signal:'row-totals'}</div>
                </template>
            </aurelia-table>
        </div>
    </div>
</template>
```

### Setup View Model
```javascript
import { inject } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';

import __ from 'iterate-js';

@inject(BindingSignaler)
export class TablePage {

    constructor(signaler) {
        var self = this;
        self.signaler = signaler;

        self.searchtext = '';

        // Debounced to prevent input spam
        self.refresh = __.debounce(() => {
            if(self.myTable) {
                self.myTable.filter = row => (
                    row.value1.toString().contains(self.searchtext, true) ||
                    row.value2.toString().contains(self.searchtext, true)
                );
            }
        }, 50);

        self.handleSearch = (event) => {
            self.searchtext = event.value;
            self.refresh();
        };
    }

    attached() {
        var self = this,
            updateSummary = () => {
                self.signaler.signal('row-totals');
            };

        // Generate 1000 rows
        var rows = __.map(1000, () => {
            var x = { value1: __.gen.number(50), value2: __.gen.number(2000000), value3: { max: __.gen.number(100, 51), min: 0 }, value4: {} };
            // fixing range minimum value to value1
            x.value3.min = x.value1;
            x.value3.update = (min, max, limitMin, limitMax) => {
                // fixing range minimum value to value1
                x.value1 = min;
                updateSummary();
            };
            return x;
        });

        // Table setup all of these can be bound in the html
        self.myTable.update({
            header: 'My Grid',
            columns: [
                { field: 'active', header: 'Select', size: '100px', render: 'checkbox', sortable: true, key: x => Boolean(x.active).toString() },
                { field: 'value1', header: 'Column 1', size: '100px', resizable: true, sortable: true, dir: 'asc', key: x => x.value1, sortOrder: 2 },
                { field: 'value2', header: 'Progress Bar', render: 'bar', format: '$0[.]00a', sortable: true, dir: 'desc', defaultDir: 'desc', sortOrder: 1 },
                { field: 'value3', header: 'Range Slider', render: 'range' }
            ],
            rows: rows,
            headers: [{}],
            summary: [{}]
        });

        // Size responds to change
        //setTimeout(() => { self.myTable.columns[2].size = '300px'; }, 1000);
    }

}

```
