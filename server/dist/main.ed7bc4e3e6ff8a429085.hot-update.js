exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/resolvers.ts");
var type_defs_1 = __webpack_require__(/*! ./type-defs */ "./src/type-defs.ts");
var server = new apollo_server_1.ApolloServer({ resolvers: resolvers_1.default, typeDefs: type_defs_1.default });
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log("Server ready at " + url + ". ");
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}


/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        testMessage: function () { return "Hello World!"; },
    },
};


/***/ }),

/***/ "./src/type-defs.ts":
/*!**************************!*\
  !*** ./src/type-defs.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"\"\"\n    Test Message.\n    \"\"\"\n    testMessage: String!\n  }\n"], ["\n  type Query {\n    \"\"\"\n    Test Message.\n    \"\"\"\n    testMessage: String!\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlLWRlZnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QywrQ0FBK0MsZ0VBQWdFO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyxzQkFBc0IsRUFBRTtBQUM1RDs7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUIsRUFBRTtBQUMzRCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0MscUhBQXFILDBFQUEwRSx3QkFBd0IsMEVBQTBFO0FBQ2pTOzs7Ozs7Ozs7Ozs7QUNSQSwwQyIsImZpbGUiOiJtYWluLmVkN2JjNGUzZTZmZjhhNDI5MDg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbnZhciByZXNvbHZlcnNfMSA9IHJlcXVpcmUoXCIuL3Jlc29sdmVyc1wiKTtcbnZhciB0eXBlX2RlZnNfMSA9IHJlcXVpcmUoXCIuL3R5cGUtZGVmc1wiKTtcbnZhciBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl8xLkFwb2xsb1NlcnZlcih7IHJlc29sdmVyczogcmVzb2x2ZXJzXzEuZGVmYXVsdCwgdHlwZURlZnM6IHR5cGVfZGVmc18xLmRlZmF1bHQgfSk7XG5zZXJ2ZXIubGlzdGVuKCkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdXJsID0gX2EudXJsO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlNlcnZlciByZWFkeSBhdCBcIiArIHVybCArIFwiLiBcIik7XG59KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyLnN0b3AoKTsgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB0ZXN0TWVzc2FnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJIZWxsbyBXb3JsZCFcIjsgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwodGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgdHlwZSBRdWVyeSB7XFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICBUZXN0IE1lc3NhZ2UuXFxuICAgIFxcXCJcXFwiXFxcIlxcbiAgICB0ZXN0TWVzc2FnZTogU3RyaW5nIVxcbiAgfVxcblwiXSwgW1wiXFxuICB0eXBlIFF1ZXJ5IHtcXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIFRlc3QgTWVzc2FnZS5cXG4gICAgXFxcIlxcXCJcXFwiXFxuICAgIHRlc3RNZXNzYWdlOiBTdHJpbmchXFxuICB9XFxuXCJdKSkpO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=