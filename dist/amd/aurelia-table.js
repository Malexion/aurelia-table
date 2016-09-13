define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AureliaTable = undefined;

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

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

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

	var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

	var AureliaTable = exports.AureliaTable = (_dec = (0, _aureliaFramework.computedFrom)('rows', 'body', 'body.scrollHeight', 'body.clientHeight'), _dec2 = (0, _aureliaFramework.computedFrom)('maxHeight'), (_class = function () {
		function AureliaTable() {
			_classCallCheck(this, AureliaTable);

			_initDefineProp(this, 'header', _descriptor, this);

			_initDefineProp(this, 'rows', _descriptor2, this);

			_initDefineProp(this, 'maxHeight', _descriptor3, this);

			this._scrollbarwidth = null;
		}

		_createClass(AureliaTable, [{
			key: 'scrollBarWidth',
			get: function get() {
				if (!this._scrollbarwidth) {
					var inner = document.createElement('p');
					inner.style.width = "100%";
					inner.style.height = "200px";

					var outer = document.createElement('div');
					outer.style.position = "absolute";
					outer.style.top = "0px";
					outer.style.left = "0px";
					outer.style.visibility = "hidden";
					outer.style.width = "200px";
					outer.style.height = "150px";
					outer.style.overflow = "hidden";
					outer.appendChild(inner);

					document.body.appendChild(outer);
					var w1 = inner.offsetWidth;
					outer.style.overflow = 'scroll';
					var w2 = inner.offsetWidth;
					if (w1 == w2) w2 = outer.clientWidth;

					document.body.removeChild(outer);

					this._scrollbarwidth = w1 - w2;
				}
				return this._scrollbarwidth;
			}
		}, {
			key: 'showScrollBar',
			get: function get() {
				return this.body && this.body.scrollHeight > this.body.clientHeight;
			}
		}, {
			key: 'bodyHeight',
			get: function get() {
				return this.maxHeight != 0 ? 'max-height: ' + this.maxHeight + 'px; overflow-y: auto;' : '';
			}
		}]);

		return AureliaTable;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'header', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return '';
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'rows', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return [];
		}
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'maxHeight', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: function initializer() {
			return 300;
		}
	}), _applyDecoratedDescriptor(_class.prototype, 'showScrollBar', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'showScrollBar'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bodyHeight', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'bodyHeight'), _class.prototype)), _class));
});