var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, bindingMode } from 'aurelia-framework';

import __ from 'iterate-js';

export let ColumnMenu = (_dec = bindable(), _dec2 = bindable(), (_class = class ColumnMenu {

    constructor() {
        _initDefineProp(this, 'table', _descriptor, this);

        _initDefineProp(this, 'height', _descriptor2, this);

        var self = this;

        self.size = {
            number: 0,
            type: ''
        };

        self.updateSize = __.debounce(() => {
            if (self.detailColumn) {
                var value = parseFloat(self.size.number);
                if (value > 0) self.detailColumn.size = value + self.size.type;
            }
        }, 100);
    }

    set(target, prop, value) {
        if (target) __.prop(target, prop, value);
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
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'table', [_dec], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'height', [_dec2], {
    enumerable: true,
    initializer: function () {
        return null;
    }
})), _class));