
import { bindable, bindingMode, computedFrom } from 'aurelia-framework';

import __ from 'iterate-js';

export class AureliaTableEval {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) evaluate = '';
    @bindable({ defaultBindingMode: bindingMode.twoWay }) condition = null;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) display = false;

    constructor() {
        var self = this;

        self._evaluate = self.evaluate;
        
        self.process = __.debounce(() => {
            if(self.evaluate) {
                self._evaluate = self.evaluate;
                self.condition = function(value, row, column, rowidx) {
                    var result;
                    try {
                        var x = value,
                            i = rowidx;
                        result = eval(self.evaluate);
                    } 
                    catch(e) {
                        result = false;
                    }
                    return result;
                };
            } else
                self.condition = null;
            
            self.display = false;
        }, 50);
    }


}
