"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Header_tsx",{

/***/ "./components/Header.style.ts":
/*!************************************!*\
  !*** ./components/Header.style.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Group\": function() { return /* binding */ Group; },\n/* harmony export */   \"HeaderContainer\": function() { return /* binding */ HeaderContainer; },\n/* harmony export */   \"LogoImage\": function() { return /* binding */ LogoImage; },\n/* harmony export */   \"ThemeModeImage\": function() { return /* binding */ ThemeModeImage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _styles_util_mq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/util/mq */ \"./styles/util/mq.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    background: var(--bg-main);\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center;\\n    justify-content: space-between;\\n    z-index: 20;\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center;\\n    justify-content: space-between;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    height: 40px; // light/dark mode png size \\n    width: auto;\\n    object-fit: contain;\\n    cursor: pointer;\\n    margin-right: 15px;\\n    transition: all ease 3s;\\n    &:hover {\\n    transform: rotateY(720deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    height: 45px;\\n    width: auto;\\n    object-fit: contain;\\n    cursor: pointer;\\n    border-radius: 100%;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\n\nvar HeaderContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject(), (0,_styles_util_mq__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()({\n    height: [\n        \"60px\",\n        \"70px\"\n    ],\n    padding: [\n        \"0 20px\",\n        \"0 calc((100% - 700px)/2)\"\n    ]\n}));\nvar Group = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nvar ThemeModeImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject2());\nvar LogoImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0Y7QUFFM0IsSUFBTUUsZUFBZSxHQUFHRiw4REFBYSxvQkFXdENDLDJEQUFFLEVBQUUsQ0FBQztJQUNQRyxNQUFNLEVBQUU7UUFBQyxNQUFNO1FBQUUsTUFBTTtLQUFDO0lBQ3hCQyxPQUFPLEVBQUU7UUFBQyxRQUFRO1FBQUUsMEJBQTBCO0tBQUM7Q0FDOUMsQ0FBQyxDQUNMO0FBRU0sSUFBTUMsS0FBSyxHQUFHTiwyREFBVSxvQkFLOUI7QUFFTSxJQUFNUSxjQUFjLEdBQUdSLDJEQUFVLG9CQVV2QztBQUVNLElBQU1VLFNBQVMsR0FBR1YsMkRBQVUsb0JBTWxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnN0eWxlLnRzP2I4Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgbXEgZnJvbSAnLi4vc3R5bGVzL3V0aWwvbXEnXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1tYWluKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB6LWluZGV4OiAyMDtcbiAgICAke21xKCkoe1xuICAgIGhlaWdodDogWyc2MHB4JywgJzcwcHgnXSxcbiAgICBwYWRkaW5nOiBbJzAgMjBweCcsICcwIGNhbGMoKDEwMCUgLSA3MDBweCkvMiknXSxcbiAgICB9KX1cbmBcblxuZXhwb3J0IGNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcblxuZXhwb3J0IGNvbnN0IFRoZW1lTW9kZUltYWdlID0gc3R5bGVkLmltZ2BcbiAgICBoZWlnaHQ6IDQwcHg7IC8vIGxpZ2h0L2RhcmsgbW9kZSBwbmcgc2l6ZSBcbiAgICB3aWR0aDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgM3M7XG4gICAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDcyMGRlZyk7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTG9nb0ltYWdlID0gc3R5bGVkLmltZ2BcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwibXEiLCJIZWFkZXJDb250YWluZXIiLCJoZWFkZXIiLCJoZWlnaHQiLCJwYWRkaW5nIiwiR3JvdXAiLCJkaXYiLCJUaGVtZU1vZGVJbWFnZSIsImltZyIsIkxvZ29JbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.style.ts\n"));

/***/ })

});