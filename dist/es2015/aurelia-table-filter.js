var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

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

import { bindable, bindingMode, computedFrom } from 'aurelia-framework';

import __ from 'iterate-js';

export let AureliaTableFilter = (_dec = bindable(), _dec2 = bindable(), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), (_class = class AureliaTableFilter {

    constructor() {
        _initDefineProp(this, 'rows', _descriptor, this);

        _initDefineProp(this, 'column', _descriptor2, this);

        _initDefineProp(this, 'display', _descriptor3, this);

        var self = this;
    }

    set(path, value) {
        __.prop(this, path, value);
    }

    get(path) {
        return __.prop(this, path);
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'rows', [_dec], {
    enumerable: true,
    initializer: function () {
        return [];
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'column', [_dec2], {
    enumerable: true,
    initializer: function () {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'display', [_dec3], {
    enumerable: true,
    initializer: function () {
        return false;
    }
})), _class));