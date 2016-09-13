# aurelia-table

## About

Bare bones bootstrap table/panel setup created as an aurelia element, fixed header, title as the panel-heading and replaceable parts for button controls. NOTE: Searchbox not included, will be in an advanced table release.

![Alt text](http://i.imgur.com/RpY7Pw3.png "Grid Image")

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

## Usage

### View
```html
<template>
	<div style="padding: 20px;">
		<div class="col-md-6">
		
			<aurelia-table header="My Grid" rows.bind="rows">
				<template replace-part="thead">
					<th style="width: 100px;">Select</th>
					<th style="width: 100px;">Column 1</th>
					<th>Column 2</th>
				</template>
				<template replace-part="row">
					<td style="width: 100px;">
                      <span click.delegate="select(row)">
                          <i show.bind="active" class="fa fa-2x fa-check-square-o"></i>
                          <i show.bind="!active" class="fa fa-2x fa-square-o"></i>
                      </span>
					</td>
					<td style="width: 100px;">${value1}</td>
					<td>${value2}</td>
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
- `thead` Column headers, should be a series of <th></th> elements.
- `row` Row cells, should be a series of <th></th> elements, you can access the row properties directly so isActive instead of row.isActive.

## Row properties
- `row.active` Adds active styling over the row, bootstrap sets the styles.
- `row.hidden` Sets hide/show for the row undefined or false results in being shown.
