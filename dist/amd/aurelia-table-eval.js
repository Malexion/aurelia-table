define(['exports', 'aurelia-framework', 'iterate-js'], function (exports, _aureliaFramework, _iterateJs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AureliaTableEval = undefined;

    var _iterateJs2 = _interopRequireDefault(_iterateJs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

    var AureliaTableEval = exports.AureliaTableEval = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function AureliaTableEval() {
        _classCallCheck(this, AureliaTableEval);

        _initDefineProp(this, 'evaluate', _descriptor, this);

        _initDefineProp(this, 'condition', _descriptor2, this);

        _initDefineProp(this, 'display', _descriptor3, this);

        var self = this;

        self._evaluate = self.evaluate;

        self.process = _iterateJs2.default.debounce(function () {
            if (self.evaluate) {
                self._evaluate = self.evaluate;
                self.condition = function (value, row, column, rowidx) {
                    var result;
                    try {
                        var x = value,
                            i = rowidx;
                        result = eval(self.evaluate);
                    } catch (e) {
                        result = false;
                    }
                    return result;
                };
            } else self.condition = null;

            self.display = false;
        }, 50);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'evaluate', [_dec], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'condition', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'display', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    })), _class));
});