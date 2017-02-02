# aurelia-table

## News

A lot of names have changed with this update, including replaceable parts and variable names, the event system now also requires getting the view-model.ref and adding a hook on myTable.events.on('', () =>{});

## About

Bare bones bootstrap table/panel setup created as an aurelia element, fixed header, sortable columns/multisort with shift, title as the panel-heading and replaceable parts for button controls. 

NOTE: check-box, search-box & progress-bar elements are not included.

![Alt text](http://i.imgur.com/umShMAG.png "Grid Image")

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev aurelia-table`

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

### View search-box & progress-bar elements not included
```html
<template>
	<div style="padding: 20px;">
		<div class="col-md-6">
		
      <aurelia-table view-model.ref="myTable">
          <template replace-part="right-controls">
              <div style="width: 400px;">
                  <search-box textchange.bind="handleSearch" placeholder="Search me..."></search-box>
              </div>
          </template>
          <template replace-part="column-header">
              ${column.header}
          </template>
          <template replace-part="static-header">
              <div if.bind="column.render == 'bar'">Static Header Rows, whatever content you want</div>
          </template>
          <template replace-part="cell">
              <check-box if.bind="column.render == 'checkbox'" check.bind="row[column.field]"></check-box>
              <progress-bar if.bind="column.render == 'bar'" progress.bind="row[column.field]" max="200">${((row[column.field] / 200) * 100).toFixed(1)}%</progress-bar>
              <range if.bind="column.render == 'range'" min.bind="row[column.field].min" max.bind="row[column.field].max" update.bind="row[column.field].update"></range>
              <date-time if.bind="column.render == 'datetime'"></date-time>
              <span if.bind="!column.render">${row[column.field]}</div>
          </template>
          <template replace-part="static-summary">
              <div if.bind="column.render == 'bar'">Static Summary Rows, whatever content you want</div>
              <div if.bind="!column.render">${'Total: ' + row[column.field]}</div>
          </template>
      </aurelia-table>
			
		</div>
	</div>
</template>
```

### View Model
```javascript
export class Home {
	constructor() {
    var self = this;
    self.handleSearch = (event) => {
      if(self.myTable) {
        self.myTable.filter = row => (
          row.value1.toString().contains(event.value, true) ||
          row.value2.toString().contains(event.value, true)
        );
      }
    };
	}

	attached() {
    var self = this,
        number = function(max, min, noround) { // RNG
            max = Math.ceil(__.is.set(max) ? max : 100);
            min = Math.floor(__.is.set(min) ? min : 0);
            if(!noround) {
                max = Math.ceil(max);
                min = Math.floor(min);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            return Math.random() * (max - min + 1) + min;
        },
        updateSummary = () => { // Set summary total
            self.myTable.staticSummary[0].value1 = __.math.sum(self.myTable.rows, row => parseInt(row.value1));
        };

    self.myTable.update({
      header: 'My Grid',
      columns: [
          { field: 'active', header: 'Select', size: '100px', render: 'checkbox', sortable: true, defaultDir: 'desc', key: x => Boolean(x.active).toString() },
          { field: 'value1', header: 'Column 1', size: '100px', sortable: true, key: x => x.value1 },
          { field: 'value2', header: 'Progress Bar', render: 'bar', sortable: true, dir: 'desc', key: x => x.value2 },
          { field: 'value3', header: 'Range Slider', render: 'range' },
          { field: 'value4', header: 'Date Time Picker', render: 'datetime' }
      ],
      rows: __.map(20, () => { // Auto Generating 20 rows
        var x = { value1: number(50), value2: number(200), value3: { max: number(100, 51), min: 0 }, value4: {  } };
        x.value3.min = x.value1; // Tie min range to value1
        x.value3.update = (min, max, limitMin, limitMax) => { // Range update function
          x.value1 = min;
          updateSummary();
        };
        return x;
      }),
      staticHeader: [ {} ], // empty header row
      staticSummary: [ {} ]  // empty summary row
    });

    updateSummary();

    // Column Size Responds to Change
    setTimeout(() => { self.myTable.columns[1].size = '300px'; }, 1000);
	}
	
	select(row) {
	  row.active = !row.active
	}
	
	toggle(row) {
	  row.hidden = !row.hidden;
	}
}
```

## Replaceable Parts Include
- `right-controls` Right Aligned controls placed on the top panel heading.
- `left-controls` Left Aligned controls placed on the top panel heading following the header.
- `header` Replaceable title header currently is `<h3 class="panel-header">${header}</h3>`.
- `column-header` Column headers, you can access the column variable to get the header here ${column.header}.
- `static-header` Static headers rows placed below the column headers and above the rows.
- `cell` Row cells, you can access the row and column variables so to get your value you can ${row[column.field]}.
- `static-summary` Static summary rows placed below the normal rows.

## Row properties (* Required)
- `.class`      `[string]`    Set classes on each of the body rows.
- `.style`      `[string]`    Set styles on each of the body rows.
- `.active`     `[bool]`      Adds active styling over the row, bootstrap sets the styles.
- `.hidden`     `[bool]`      Sets hide/show for the row undefined or false results in being shown.

## Column properties (* Required)
- *`.field`     `[string]`    For your own use to help you locate the property for that column.
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


## Planned Features
- included elements (maybe) (search-box, progress-bar, check-box)
- ui virtualization (maybe after it gets out of beta)
