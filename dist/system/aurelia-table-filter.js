'use strict';

System.register(['aurelia-framework', 'iterate-js'], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, computedFrom, __, _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, AureliaTableFilter;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
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

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_iterateJs) {
            __ = _iterateJs.default;
        }],
        execute: function () {
            _export('AureliaTableFilter', AureliaTableFilter = (_dec = bindable(), _dec2 = bindable(), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), (_class = function () {
                function AureliaTableFilter() {
                    _classCallCheck(this, AureliaTableFilter);

                    _initDefineProp(this, 'rows', _descriptor, this);

                    _initDefineProp(this, 'column', _descriptor2, this);

                    _initDefineProp(this, 'display', _descriptor3, this);

                    var self = this;
                }

                AureliaTableFilter.prototype.set = function set(path, value) {
                    __.prop(this, path, value);
                };

                AureliaTableFilter.prototype.get = function get(path) {
                    return __.prop(this, path);
                };

                return AureliaTableFilter;
            }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'rows', [_dec], {
                enumerable: true,
                initializer: function initializer() {
                    return [];
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'column', [_dec2], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'display', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class)));

            _export('AureliaTableFilter', AureliaTableFilter);
        }
    };
});