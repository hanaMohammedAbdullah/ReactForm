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

/***/ "./components/Forms/Forms.jsx":
/*!************************************!*\
  !*** ./components/Forms/Forms.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Form(param) {\n    let { handler } = param;\n    function handleSubmit(e) {\n        e.preventDefault();\n        console.log(e.target);\n    // handler(e.target.items.value);\n    }\n    function handleChange(e) {\n        console.log(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ons: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Shopping cart\"\n            }, void 0, false, {\n                fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Item\"\n                    }, void 0, false, {\n                        fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"item\",\n                        onChange: handleChange,\n                        name: \"items\"\n                    }, void 0, false, {\n                        fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-grid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"btn btn-primary\",\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hana/Desktop/work/Recoded/formreact/components/Forms/Forms.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm1zLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsS0FBSyxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7SUFJM0IsU0FBU0MsYUFBYUMsQ0FBQztRQUNyQkEsRUFBRUMsY0FBYztRQUVoQkMsUUFBUUMsR0FBRyxDQUFDSCxFQUFFSSxNQUFNO0lBQ3BCLGlDQUFpQztJQUNuQztJQUNBLFNBQVNDLGFBQWFMLENBQUM7UUFDckJFLFFBQVFDLEdBQUcsQ0FBQ0gsRUFBRUksTUFBTSxDQUFDRSxLQUFLO0lBQzVCO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFDLEtBQUtUOzswQkFDWiw4REFBQ1U7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsVUFBVVg7d0JBQ1ZZLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNPO29CQUVDSixNQUFLO29CQUNMSCxXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7S0FyQ3dCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm1zLmpzeD9lNzU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBoYW5kbGVyIH0pIHtcblxuXG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgLy8gaGFuZGxlcihlLnRhcmdldC5pdGVtcy52YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtICAgIG9ucz17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMz5TaG9wcGluZyBjYXJ0PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cbiAgICAgICAgPGxhYmVsPkl0ZW08L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdpdGVtJ1xuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbmFtZT0naXRlbXMnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWdyaWQnPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIFxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZvcm0iLCJoYW5kbGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiZm9ybSIsIm9ucyIsImgzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms/Forms.jsx\n"));

/***/ })

});