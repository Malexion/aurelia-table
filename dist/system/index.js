'use strict';

System.register(['./column-menu', './aurelia-table-filter', './aurelia-table'], function (_export, _context) {
   "use strict";

   function configure(config) {
      config.globalResources(['./aurelia-table-filter', './aurelia-table']);
   }

   _export('configure', configure);

   return {
      setters: [function (_columnMenu) {
         var _exportObj = {};

         for (var _key in _columnMenu) {
            if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _columnMenu[_key];
         }

         _export(_exportObj);
      }, function (_aureliaTableFilter) {
         var _exportObj2 = {};

         for (var _key2 in _aureliaTableFilter) {
            if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _aureliaTableFilter[_key2];
         }

         _export(_exportObj2);
      }, function (_aureliaTable) {
         var _exportObj3 = {};

         for (var _key3 in _aureliaTable) {
            if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _aureliaTable[_key3];
         }

         _export(_exportObj3);
      }],
      execute: function () {}
   };
});