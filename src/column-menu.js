
import { bindable, bindingMode } from 'aurelia-framework';

import __ from 'iterate-js';

export class ColumnMenu {
    @bindable() table = null;
    @bindable() height = null;

	constructor() {
        var self = this;

        self.size = {
            number: 0,
            type: ''
        };

        self.updateSize = __.debounce(() => {
            if (self.detailColumn) {
                var value = parseFloat(self.size.number);
                if(value > 0)
                    self.detailColumn.size = value + self.size.type;
            }
        }, 100);
	}

    set(target, prop, value) {
        if (target)
            __.prop(target, prop, value);
    }

    details(column) {
        if (this.detailColumn != column) {
            this.detailColumn = column;
            if (column.size) {
                if (column.size.contains('px')) {
                    this.size.number = parseFloat(column.size.toString().replace('px', ''));
                    this.size.type = 'px';
                } else {
                    this.size.number = parseFloat(column.size.toString().replace('%', ''));
                    this.size.type = '%';
                }
            }
            this.showDetails = true;
        } else {
            this.detailColumn = null;
            this.showDetails = false;
        }
    }

    sizeChange() {
        this.updateSize();
    }

    toggleSizeType() {
        this.size.type = __.switch(this.size.type, { '%': 'px' }, '%');
        this.updateSize();
    }
}
