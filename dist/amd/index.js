define(['exports', './column-menu', './aurelia-table-filter', './aurelia-table'], function (exports, _columnMenu, _aureliaTableFilter, _aureliaTable) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   Object.keys(_columnMenu).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
         enumerable: true,
         get: function () {
            return _columnMenu[key];
         }
      });
   });
   Object.keys(_aureliaTableFilter).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
         enumerable: true,
         get: function () {
            return _aureliaTableFilter[key];
         }
      });
   });
   Object.keys(_aureliaTable).forEach(function (key) {
      if (key === "default" || key === "__esModule") return;
      Object.defineProperty(exports, key, {
         enumerable: true,
         get: function () {
            return _aureliaTable[key];
         }
      });
   });
   exports.configure = configure;
   function configure(config) {
      config.globalResources(['./aurelia-table-filter', './aurelia-table']);
   }
});