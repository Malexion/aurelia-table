# aurelia-table

## News

Large scale optimization with infinite scroll/pagination, and more modular parts.

Many piece names have changed but should be remaining as they now are for the future.

## About

Semi-Bare bones bootstrap table/panel setup created as an aurelia element with fixed header/summary options, sortable columns/multisort with shift, title as the panel-heading and replaceable parts for header/row renders and more. 

NOTE: check-box, search-box, progress-bar, scale-bar, range elements are not included. Reserved names are a custom element 'aurelia-table' and value converter 'rowView'

![Alt text](http://i.imgur.com/VGlEt9r.png "Grid Image")

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save aurelia-table`

```javascript
aureliaBootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-table'); // Add Plugin

  aurelia.start().then(() => aurelia.setRoot('app'));
});
```

## Dependencies

- Bootstrap (css)
- Font-Awesome Icons 4.6.3 (sort icons)
- iterate-js a small (~25kb) library of my own making that assists with the column resizing/row templating/sorting and will help with searching/filtering and more in the future.

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
    @bindable() tableClasses = 'table-hover table-condensed';
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

## Row View
Rows are rendered via the included value converter which updates when any one of the listed function parameters change
```javascript
export class RowViewValueConverter {
    toView(array, filter, sort, map, startpage, endpage, pagesize, pagemode) {
        var temp = array;
        if(__.is.array(temp)) {
            if(__.is.set(filter))
                temp = __.filter(temp, filter);
            if(__.is.set(sort))
                temp = __.sort(temp, sort);
            if(__.is.set(map))
                temp = __.map(temp, map);
            if(pagemode && __.is.set(startpage) && __.is.set(endpage) && __.is.set(pagesize))
                temp = temp.slice(startpage * pagesize, endpage * pagesize);
        }
        return temp;
    }
}
```

## Current viewable/filtered rows
You can bind to your grids current viewable rows which includes pagination/scroll limits and the basic filter/sort/map or you can bind to filtered rows which use the filter/sort/map functions.
```html
<aurelia-table view-model.ref="myTable"></aurelia-table>

<div repeat.for="row of myTable.viewable"></div>
<div repeat.for="row of myTable.filtered"></div>
```

## Filter/Sort/Map
These three bindables can shape your rows how you like. 
- `filter` expects a function passed (value, key) of the row item, key being the array index and must return true if it is to be included, null means the filter is ignored.
- `sort` is primarily handled by the column definitions, all are optional `{...sortable: true, dir: 'desc', defaultDir: 'asc', key: x => x.value, sortOrder: 2 }`
  - `sortable` Enables sorting for that column
  - `dir` Current direction of the sort on the column, defaults to `asc` if not set, responds to being changed and will update the grid
  - `defaultDir` Default direction the column will be sorted on when first clicked with no current sort, defaults to `asc` if not set
  - `key` Path to the row value sorted upon, defaults to `row => row[column.field]`, allows you to modify what you are sorting upon for example if you wanted to do numeric sort `x => parseFloat(x.value)`
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
- `.field`      `[string]`    For your own use to help you locate the property for that column.
- `.header`     `[string]`    For your own use to help display the column header for that column.
- `.size`       `[string]`    Sets the column width, must be `px` or `%`. Default is set to `100%`.
- `.class`      `[string]`    Set classes on each of the columns.
- `.style`      `[string]`    Set styles on each of the columns, avoid setting width here set in `column.size` instead.
- `.hidden`     `[bool]`      Sets hide/show for the column undefined or false results in being shown.
- `.render`     `[string]`    For your own use to help display the column renders if you have differing ones, default value is null.
- `.sortable`   `[bool]`      Enables sorting interaction on column.
- `.key`        `[function]`  Path to sortable variable for that column default is `row => row[column.field]`.
- `.dir`        `[string]`    Sort direction for column. Null turns off sort on the column.
- `.defaultDir` `[string]`    Default sort direction set when the user first clicks on a column.
- `.sortOrder`  `[number]`    Numeric order used for multi sort, sorts in ascending numeric order so 1, 2, 3

## Replaceable Parts Include
- Header Areas
  - `header`
  - `right-controls` Right Aligned controls placed on the top panel heading.
  - `left-controls` Left Aligned controls placed on the top panel heading following the header.
```html
<div class="at-title panel-heading table-base-header" if.bind="header != ''">
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

## Future Plans
- reduce dependence on bootstrap/font-awesome icons
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
                    <div style="width: 400px;">
                        <search-box textchange.bind="handleSearch" placeholder="Search me..."></search-box>
                    </div>
                </template>
                <template replace-part="column-header">
                    <span>${column.header}</span>
                </template>
                <template replace-part="static-header">
                    <div if.bind="column.render == 'range'">Static Header Rows</div>
                </template>
                <template replace-part="cell">
                    <!-- Access to 'column' and 'row' objects -->
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
                { field: 'value1', header: 'Column 1', size: '100px', sortable: true, dir: 'asc', key: x => x.value1, sortOrder: 2 },
                { field: 'value2', header: 'Progress Bar', render: 'bar', format: '$0[.]0a', sortable: true, dir: 'desc', defaultDir: 'desc', sortOrder: 1 },
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
