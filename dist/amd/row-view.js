define(['exports', 'iterate-js'], function (exports, _iterateJs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.RowViewValueConverter = undefined;

    var _iterateJs2 = _interopRequireDefault(_iterateJs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var RowViewValueConverter = exports.RowViewValueConverter = function () {
        function RowViewValueConverter() {
            _classCallCheck(this, RowViewValueConverter);
        }

        RowViewValueConverter.prototype.toView = function toView(array, filter, sort, map, startpage, endpage, pagesize, pagemode) {
            var temp = array;
            if (_iterateJs2.default.is.array(temp)) {
                if (_iterateJs2.default.is.set(filter)) temp = _iterateJs2.default.filter(temp, filter);
                if (_iterateJs2.default.is.set(sort)) temp = _iterateJs2.default.sort(temp, sort);
                if (_iterateJs2.default.is.set(map)) temp = _iterateJs2.default.map(temp, map);
                if (pagemode && _iterateJs2.default.is.set(startpage) && _iterateJs2.default.is.set(endpage) && _iterateJs2.default.is.set(pagesize)) temp = temp.slice(startpage * pagesize, endpage * pagesize);
            }
            return temp;
        };

        return RowViewValueConverter;
    }();
});