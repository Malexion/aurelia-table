
import { bindable, bindingMode, computedFrom } from 'aurelia-framework';

import __ from 'iterate-js';

export class AureliaTableFilter {
    @bindable() rows = [];
    @bindable() column = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) display = false;

    constructor() {
        var self = this;
    }

    set(path, value) {
        __.prop(this, path, value);
    }

    get(path) {
        return __.prop(this, path);
    }
}
