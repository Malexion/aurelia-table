'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _columnMenu = require('./column-menu');

Object.keys(_columnMenu).forEach(function (key) {
   if (key === "default" || key === "__esModule") return;
   Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
         return _columnMenu[key];
      }
   });
});

var _aureliaTableFilter = require('./aurelia-table-filter');

Object.keys(_aureliaTableFilter).forEach(function (key) {
   if (key === "default" || key === "__esModule") return;
   Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
         return _aureliaTableFilter[key];
      }
   });
});

var _aureliaTable = require('./aurelia-table');

Object.keys(_aureliaTable).forEach(function (key) {
   if (key === "default" || key === "__esModule") return;
   Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
         return _aureliaTable[key];
      }
   });
});
exports.configure = configure;
function configure(config) {
   config.globalResources(['./aurelia-table-filter', './aurelia-table']);
}