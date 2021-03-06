'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColumnMenu = undefined;

var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

var _iterateJs = require('iterate-js');

var _iterateJs2 = _interopRequireDefault(_iterateJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var ColumnMenu = exports.ColumnMenu = (_dec = (0, _aureliaFramework.bindable)(), _dec2 = (0, _aureliaFramework.bindable)(), (_class = function () {
    function ColumnMenu() {
        _classCallCheck(this, ColumnMenu);

        _initDefineProp(this, 'table', _descriptor, this);

        _initDefineProp(this, 'height', _descriptor2, this);

        var self = this;

        self.size = {
            number: 0,
            type: ''
        };

        self.updateSize = _iterateJs2.default.debounce(function () {
            if (self.detailColumn) {
                var value = parseFloat(self.size.number);
                if (value > 0) self.detailColumn.size = value + self.size.type;
            }
        }, 100);
    }

    ColumnMenu.prototype.set = function set(target, prop, value) {
        if (target) _iterateJs2.default.prop(target, prop, value);
    };

    ColumnMenu.prototype.details = function details(column) {
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
    };

    ColumnMenu.prototype.sizeChange = function sizeChange() {
        this.updateSize();
    };

    ColumnMenu.prototype.toggleSizeType = function toggleSizeType() {
        this.size.type = _iterateJs2.default.switch(this.size.type, { '%': 'px' }, '%');
        this.updateSize();
    };

    return ColumnMenu;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'table', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'height', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class));