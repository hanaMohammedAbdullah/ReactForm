"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Cart/Cart.jsx":
/*!**********************************!*\
  !*** ./components/Cart/Cart.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Cart(param) {\n    let { data, handlerState } = param;\n    function deleteItem(e) {\n        \"\";\n        handlerState((prev)=>prev.filter((item)=>item.id !== e.target.name));\n        console.log(\"delete\", e.target.name);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            data.name,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                name: data.id,\n                onClick: deleteItem,\n                children: \"delete\"\n            }, void 0, false, {\n                fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Cart/Cart.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Cart/Cart.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQvQ2FydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLFNBQVNDLEtBQUssS0FBdUI7UUFBdkIsRUFBRUMsSUFBSSxFQUFJQyxZQUFZLEVBQUMsR0FBdkI7SUFDWixTQUFTQyxXQUFXQyxDQUFDO1FBQUc7UUFDdEJGLGFBQWEsQ0FBQ0csT0FBU0EsS0FBS0MsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0osRUFBRUssTUFBTSxDQUFDQyxJQUFJO1FBQ3RFQyxRQUFRQyxHQUFHLENBQUMsVUFBVVIsRUFBRUssTUFBTSxDQUFDQyxJQUFJO0lBQ3JDO0lBQ0EscUJBQ0UsOERBQUNHOztZQUNFWixLQUFLUyxJQUFJO1lBQUU7MEJBQ1osOERBQUNJO2dCQUFPSixNQUFNVCxLQUFLTyxFQUFFO2dCQUFFTyxTQUFTWjswQkFBWTs7Ozs7Ozs7Ozs7O0FBS2xEO0tBYlNIO0FBZVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NhcnQuanN4P2JkZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDYXJ0KHsgZGF0YSAgLCBoYW5kbGVyU3RhdGV9KSB7XG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSkgeycnXG4gICAgaGFuZGxlclN0YXRlKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gZS50YXJnZXQubmFtZSkpO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIGUudGFyZ2V0Lm5hbWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICB7ZGF0YS5uYW1lfXtcIiBcIn1cbiAgICAgIDxidXR0b24gbmFtZT17ZGF0YS5pZH0gb25DbGljaz17ZGVsZXRlSXRlbX0+XG4gICAgICAgIGRlbGV0ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9wPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FydCIsImRhdGEiLCJoYW5kbGVyU3RhdGUiLCJkZWxldGVJdGVtIiwiZSIsInByZXYiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJ0YXJnZXQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart/Cart.jsx\n"));

/***/ })

});