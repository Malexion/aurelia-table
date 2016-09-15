# aurelia-table

## About

Bare bones bootstrap table/panel setup created as an aurelia element, fixed header, title as the panel-heading and replaceable parts for button controls. NOTE: Searchbox not included, will be in an advanced table release.

![Alt text](http://i.imgur.com/RpY7Pw3.png "Grid Image")

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

- iterate-js a small (~25kb) library of my own making that assists with the column resizing/row templating and will help with sorting/searching/filtering and more in the future.

## Usage

### View
```html
<template>
	<div style="padding: 20px;">
		<div class="col-md-6">
		
			<aurelia-table header="My Grid" rows.bind="rows" columns.bind="columns">
				<template replace-part="header">
					${column.header}
				</template>
				<template replace-part="cell">
					<span if.bind="column.render == 'checkbox'" toggle.bind="row[column.field]">
                        <i show.bind="row[column.field]" class="fa fa-2x fa-check-square-o"></i>
                        <i show.bind="!row[column.field]" class="fa fa-2x fa-square-o"></i>
                    </span>
					<span if.bind="!column.render">${row[column.field]}</div>
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
		this.columns = [
			{ field: 'active', header: 'Select', size: '100px', render: 'checkbox' }, // default size is 100% of remaining space % sizes are transformed into px
			{ field: 'value1', header: 'Column 1' },
			{ field: 'value2', header: 'Column 2' },
		];
		this.rows = [
			{ value1: 'mytext', value2: '2' },
			{ value1: '4', value2: '3' },
			{ value1: '1', value2: '2' },
			{ value1: '4', value2: '3' },
			{ value1: '1', value2: '2' },
			{ value1: '4', value2: '3' },
			{ value1: '1', value2: '2' },
			{ value1: '4', value2: '3' },
			{ value1: '1', value2: '2' },
			{ value1: '4', value2: '3' },
		];

		var self = this;
		setTimeout(() => { self.columns[1].size = '200px'; }, 1000); // Size property responds to change
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
- `left-controls` Right Aligned controls placed on the top panel heading following the header.
- `header` Column headers, you can access the column variable to get the header here ${column.header}.
- `cell` Row cells, you can access the row and column variables so to get your value you can ${row[column.field]}.

## Row properties
- `row.class` Set classes on each of the body rows.
- `row.style` Set styles on each of the body rows.
- `row.active` Adds active styling over the row, bootstrap sets the styles.
- `row.hidden` Sets hide/show for the row undefined or false results in being shown.

## Column properties
- `column.field` For your own use to help you locate the property for that column.
- `column.header` For your own use to help display the column header for that column.
- `column.size` Sets the column width, must be `px` or `%`. Default is set to `100%`.
- `column.class` Set classes on each of the columns.
- `column.style` Set styles on each of the columns, avoid setting width here set in `column.size` instead.
- `column.hidden` Sets hide/show for the column undefined or false results in being shown.
- `column.render` For your own use to help display the column renders if you have differing ones, default value is null.
