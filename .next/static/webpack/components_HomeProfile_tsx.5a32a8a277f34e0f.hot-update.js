"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_HomeProfile_tsx",{

/***/ "./components/HomeProfile.style.ts":
/*!*****************************************!*\
  !*** ./components/HomeProfile.style.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"HomeProfileContainer\": function() { return /* binding */ HomeProfileContainer; },\n/* harmony export */   \"LearnMore\": function() { return /* binding */ LearnMore; },\n/* harmony export */   \"Name\": function() { return /* binding */ Name; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _styles_util_mq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/util/mq */ \"./styles/util/mq.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-flow: column nowrap;\\n    width: 100%;\\n    height: 400px;\\n    border-radius: 15px;\\n    padding: 25px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-weight: 700;\\n    color: var(--tx-white);\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    color: var(--tx-white);\\n    font-weight: 500;\\n    margin-top: 10px;\\n    word-break: keep-all;\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    margin-top: 10px;\\n    a {\\n    font-weight: 600;\\n    color: var(--bg-a);\\n    font-size: 12px;\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\n\nvar HomeProfileContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\nvar Name = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject1(), (0,_styles_util_mq__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()({\n    fontSize: [\n        \"30px\",\n        \"35px\"\n    ]\n}));\nvar Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject2(), (0,_styles_util_mq__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()({\n    fontSize: [\n        \"16px\",\n        \"18px\"\n    ]\n}));\nvar LearnMore = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQcm9maWxlLnN0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0Y7QUFFM0IsSUFBTUUsb0JBQW9CLEdBQUdGLCtEQUFjLG1CQU9qRDtBQUVNLElBQU1JLElBQUksR0FBR0osNERBQVcscUJBR3pCQywyREFBRSxFQUFFLENBQUM7SUFDUEssUUFBUSxFQUFFO1FBQUMsTUFBTTtRQUFFLE1BQU07S0FBQztDQUN6QixDQUFDLENBQ0w7QUFFTSxJQUFNQyxXQUFXLEdBQUdQLDREQUFXLHFCQUtoQ0MsMkRBQUUsRUFBRSxDQUFDO0lBQ1BLLFFBQVEsRUFBRTtRQUFDLE1BQU07UUFBRSxNQUFNO0tBQUM7Q0FDekIsQ0FBQyxDQUNMO0FBRU0sSUFBTUUsU0FBUyxHQUFHUiw0REFBVyxvQkFPbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUHJvZmlsZS5zdHlsZS50cz9mMTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IG1xIGZyb20gJy4uL3N0eWxlcy91dGlsL21xJ1xuXG5leHBvcnQgY29uc3QgSG9tZVByb2ZpbGVDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMjVweDtcbmBcblxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbmBcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS10eC13aGl0ZSk7XG4gICAgJHttcSgpKHtcbiAgICBmb250U2l6ZTogWyczMHB4JywgJzM1cHgnXSxcbiAgICB9KX1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXG4gICAgY29sb3I6IHZhcigtLXR4LXdoaXRlKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgJHttcSgpKHtcbiAgICBmb250U2l6ZTogWycxNnB4JywgJzE4cHgnXSxcbiAgICB9KX1cbmBcblxuZXhwb3J0IGNvbnN0IExlYXJuTW9yZSA9IHN0eWxlZC5zcGFuYFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tYmctYSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwibXEiLCJIb21lUHJvZmlsZUNvbnRhaW5lciIsInNlY3Rpb24iLCJOYW1lIiwic3BhbiIsImZvbnRTaXplIiwiRGVzY3JpcHRpb24iLCJMZWFybk1vcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomeProfile.style.ts\n"));

/***/ })

});