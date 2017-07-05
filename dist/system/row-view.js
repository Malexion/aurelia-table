'use strict';

System.register(['iterate-js'], function (_export, _context) {
    "use strict";

    var __, RowViewValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_iterateJs) {
            __ = _iterateJs.default;
        }],
        execute: function () {
            _export('RowViewValueConverter', RowViewValueConverter = function () {
                function RowViewValueConverter() {
                    _classCallCheck(this, RowViewValueConverter);
                }

                RowViewValueConverter.prototype.toView = function toView(array, filter, sort, map, startpage, endpage, pagesize, pagemode) {
                    var temp = array;
                    if (__.is.array(temp)) {
                        if (__.is.set(filter)) temp = __.filter(temp, filter);
                        if (__.is.set(sort)) temp = __.sort(temp, sort);
                        if (__.is.set(map)) temp = __.map(temp, map);
                        if (pagemode && __.is.set(startpage) && __.is.set(endpage) && __.is.set(pagesize)) temp = temp.slice(startpage * pagesize, endpage * pagesize);
                    }
                    return temp;
                };

                return RowViewValueConverter;
            }());

            _export('RowViewValueConverter', RowViewValueConverter);
        }
    };
});