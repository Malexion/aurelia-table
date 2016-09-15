# aurelia-table

## About

Bare bones bootstrap table/panel setup created as an aurelia element, fixed header, sortable columns/multisort with shift, title as the panel-heading and replaceable parts for button controls. NOTE: search-box & progress-bar elements are not included.

![Alt text](http://i.imgur.com/4xWkIRT.png "Grid Image")

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

- Bootstrap
- Font-Awesome Icons 4.6.3
- iterate-js a small (~25kb) library of my own making that assists with the column resizing/row templating/sorting and will help with searching/filtering and more in the future.

## Usage

### View search-box & progress-bar elements not included
```html
<template>
	<div style="padding: 20px;">
		<div class="col-md-6">
		
			<aurelia-table header="My Grid" rows.bind="rows" columns.bind="columns" headerclick.delegate="headerClick($event)">
				<template replace-part="right-controls">
					<div style="width: 200px;">
						<search-box textchange.bind="handleSearch" placeholder="Search me..."></search-box>
					</div>
				</template>
				<template replace-part="header">
					${column.header}
				</template>
				<template replace-part="cell">
					<span if.bind="column.render == 'checkbox'" click.delegate="select(row)">
                        <i show.bind="row[column.field]" class="fa fa-2x fa-check-square-o"></i>
                        <i show.bind="!row[column.field]" class="fa fa-2x fa-square-o"></i>
                    </span>
                    <progress-bar if.bind="column.render == 'bar'" progress.bind="row[column.field]" max="5">
                    	${(row[column.field] / 5) * 100}%
                    </progress-bar>
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
			{ 
				field: 'active', 
				header: 'Select', 
				size: '100px', 
				render: 'checkbox', 
				sortable: true, // Indicates that column can sort
				defaultDir: 'desc', // Default sort direction upon first click
				key: x => Boolean(x.active).toString() // Path to evaluating column property
			},
			{ 
				field: 'value1', 
				header: 'Column 1', 
				size: '200px', 
				sortable: true,
				key: x => x.value1 
			},
			{ 
				field: 'value2', 
				header: 'Column 2', 
				render: 'bar', 
				sortable: true,
				dir: 'desc', // Sort direction when first loaded
				key: x => x.value2 
			}
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
		self.handleSearch = (event) => {
			__.all(self.rows, x =>  { 
				x.hidden = !(
					x.value1.contains(event.value, true) || 
					x.value2.contains(event.value, true)
				);
			});
		};
		// Size Responds to Change
		//setTimeout(() => { self.columns[1].size = '200px'; }, 2000);
	}
	
	select(row) {
	  row.active = !row.active
	}
	
	toggle(row) {
	  row.hidden = !row.hidden;
	}

	headerClick(event) {
		console.log(event.detail); // Event Data for headerclick event
	}
}
```

## Replaceable Parts Include
- `right-controls` Right Aligned controls placed on the top panel heading.
- `left-controls` Left Aligned controls placed on the top panel heading following the header.
- `header` Column headers, you can access the column variable to get the header here ${column.header}.
- `cell` Row cells, you can access the row and column variables so to get your value you can ${row[column.field]}.

## Bindable Events Include (see headerClick in view model example above)
- `columnresize` Whenever size property changes on columns
- `columnchange` Whenever column array changes
- `rowchange` Whenever row array changes
- `attached` Viewmodel attached
- `detached` Viewmodel detached

## Row properties (* Required)
- `row.class` Set classes on each of the body rows.
- `row.style` Set styles on each of the body rows.
- `row.active` Adds active styling over the row, bootstrap sets the styles.
- `row.hidden` Sets hide/show for the row undefined or false results in being shown.

## Column properties (* Required)
- *`column.field` For your own use to help you locate the property for that column.
- `column.header` For your own use to help display the column header for that column.
- `column.size` Sets the column width, must be `px` or `%`. Default is set to `100%`.
- `column.class` Set classes on each of the columns.
- `column.style` Set styles on each of the columns, avoid setting width here set in `column.size` instead.
- `column.hidden` Sets hide/show for the column undefined or false results in being shown.
- `column.render` For your own use to help display the column renders if you have differing ones, default value is null.
- `column.sortable` Enables sorting interaction on column.
- `column.key` Path to sortable variable for that column default is `row => row[column.field]`.
- `column.dir` Sort direction for column. Null turns off sort on the column.
- `column.defaultDir` Default sort direction set when the user first clicks on a column.


## Planned Features
- static header-summary and footer-summary rows
- built in row filtration (maybe)
- included elements (maybe) (search-box, progress-bar, check-box)
- ui virtualization (maybe after it gets out of beta)