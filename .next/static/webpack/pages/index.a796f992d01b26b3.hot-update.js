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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcz8wYzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./pages/about.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-bcb4098dba9624d6\" + \" \" + \"container\",\n        __source: {\n            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        className: \"jsx-bcb4098dba9624d6\",\n                        __source: {\n                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        /*#__PURE__*/ children: \"Create Next App\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-bcb4098dba9624d6\",\n                        __source: {\n                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: \"jsx-bcb4098dba9624d6\",\n                __source: {\n                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                        className: \"jsx-bcb4098dba9624d6\" + \" \" + \"title\",\n                        __source: {\n                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Welcome to\",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"about\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                className: \"jsx-bcb4098dba9624d6\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Next.js!\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        className: \"jsx-bcb4098dba9624d6\" + \" \" + \"description\",\n                        __source: {\n                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Get started by editing \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"code\", {\n                                className: \"jsx-bcb4098dba9624d6\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 34\n                                },\n                                __self: this,\n                                children: \"pages/index.js\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"jsx-bcb4098dba9624d6\" + \" \" + \"grid\",\n                        __source: {\n                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: \"jsx-bcb4098dba9624d6\" + \" \" + \"card\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Documentation →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: \"jsx-bcb4098dba9624d6\" + \" \" + \"card\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Learn →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/master/examples\",\n                                className: \"jsx-bcb4098dba9624d6\" + \" \" + \"card\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Examples →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: \"jsx-bcb4098dba9624d6\" + \" \" + \"card\",\n                                __source: {\n                                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Deploy →\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"jsx-bcb4098dba9624d6\",\n                                        __source: {\n                                            fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"jsx-bcb4098dba9624d6\",\n                __source: {\n                    fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    className: \"jsx-bcb4098dba9624d6\",\n                    __source: {\n                        fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        \"Powered by \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/vercel.svg\",\n                            alt: \"Vercel\",\n                            className: \"jsx-bcb4098dba9624d6\" + \" \" + \"logo\",\n                            __source: {\n                                fileName: \"G:\\\\A\\\\playlist\\\\playlist\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 22\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            }),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"84b56b9595ae0240\",\n                __self: this,\n                children: \".container.jsx-bcb4098dba9624d6 {min-height:100vh;\\npadding:0 0.5rem;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-justify-content:center;\\njustify-content:center;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center}\\nmain.jsx-bcb4098dba9624d6 {padding:5rem 0;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column;\\n-webkit-justify-content:center;\\njustify-content:center;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center}\\nfooter.jsx-bcb4098dba9624d6 {width:100%;\\nheight:100px;\\nborder-top:1px solid #eaeaea;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-justify-content:center;\\njustify-content:center;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center}\\nfooter.jsx-bcb4098dba9624d6 img.jsx-bcb4098dba9624d6 {margin-left:0.5rem}\\nfooter.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6 {display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-justify-content:center;\\njustify-content:center;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center}\\na.jsx-bcb4098dba9624d6 {color:inherit;\\n-webkit-text-decoration:none;\\ntext-decoration:none}\\n.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6 {color:#0070f3;\\n-webkit-text-decoration:none;\\ntext-decoration:none}\\n.title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:hover, .title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:focus, .title.jsx-bcb4098dba9624d6 a.jsx-bcb4098dba9624d6:active {text-decoration:underline}\\n.title.jsx-bcb4098dba9624d6 {margin:0;\\nline-height:1.15;\\nfont-size:4rem}\\n.title.jsx-bcb4098dba9624d6, .description.jsx-bcb4098dba9624d6 {text-align:center}\\n.description.jsx-bcb4098dba9624d6 {line-height:1.5;\\nfont-size:1.5rem}\\ncode.jsx-bcb4098dba9624d6 {background:#fafafa;\\nborder-radius:5px;\\npadding:0.75rem;\\nfont-size:1.1rem;\\nfont-family:Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace}\\n.grid.jsx-bcb4098dba9624d6 {display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-justify-content:center;\\njustify-content:center;\\nflex-wrap:wrap;\\nmax-width:800px;\\nmargin-top:3rem}\\n.card.jsx-bcb4098dba9624d6 {margin:1rem;\\n-webkit-flex-basis:45%;\\n-ms-flex-preferred-size:45%;\\nflex-basis:45%;\\npadding:1.5rem;\\ntext-align:left;\\ncolor:inherit;\\n-webkit-text-decoration:none;\\ntext-decoration:none;\\nborder:1px solid #eaeaea;\\nborder-radius:10px;\\n-webkit-transition:color 0.15s ease, border-color 0.15s ease;\\ntransition:color 0.15s ease, border-color 0.15s ease}\\n.card.jsx-bcb4098dba9624d6:hover, .card.jsx-bcb4098dba9624d6:focus, .card.jsx-bcb4098dba9624d6:active {color:#0070f3;\\nborder-color:#0070f3}\\n.card.jsx-bcb4098dba9624d6 h3.jsx-bcb4098dba9624d6 {margin:0 0 1rem 0;\\nfont-size:1.5rem}\\n.card.jsx-bcb4098dba9624d6 p.jsx-bcb4098dba9624d6 {margin:0;\\nfont-size:1.25rem;\\nline-height:1.5}\\n.logo.jsx-bcb4098dba9624d6 {height:1em}\\n@media (max-width:600px) {.grid.jsx-bcb4098dba9624d6 {width:100%;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}}\"\n            }),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2323726f93dd16ea\",\n                __self: this,\n                children: \"html, body {padding:0;\\nmargin:0;\\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}\\n* {box-sizing:border-box}\"\n            })\n        ]\n    }));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDRDtBQUVaLFFBQVEsQ0FBQ0csSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSx1RUFDSEMsQ0FBRztrREFBVyxDQUFXOzs7Ozs7OztrRkFDdkJKLGtEQUFJOzs7Ozs7Ozt5RkFDRkssQ0FBSzs7Ozs7Ozs7Z0RBQUMsQ0FBZTs7eUZBQ3JCQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTs7Ozs7Ozs7OzBGQUNGQyxDQUFFO2tFQUFXLENBQU87Ozs7Ozs7OzRCQUFDLENBRXBCO2lHQUFDVCxrREFBSTs7Ozs7OzswQ0FBQyxDQUFLOztpR0FDVlUsQ0FBQztnQ0FBQ0gsSUFBSSxFQUFDLENBQW9COzs7Ozs7OzswQ0FBQyxDQUFROzs7OzBGQUd0Q0ksQ0FBQztrRUFBVyxDQUFhOzs7Ozs7Ozs0QkFBQyxDQUNGO2lHQUFDQyxDQUFJOzs7Ozs7OzswQ0FBQyxDQUFjOzs7OzBGQUc1Q1QsQ0FBRztrRUFBVyxDQUFNOzs7Ozs7OztrR0FDbEJPLENBQUM7Z0NBQUNILElBQUksRUFBQyxDQUF5QjswRUFBVyxDQUFNOzs7Ozs7Ozt5R0FDL0NNLENBQUU7Ozs7Ozs7O2tEQUFDLENBQW9COzt5R0FDdkJGLENBQUM7Ozs7Ozs7O2tEQUFDLENBQXlEOzs7O2tHQUc3REQsQ0FBQztnQ0FBQ0gsSUFBSSxFQUFDLENBQTBCOzBFQUFXLENBQU07Ozs7Ozs7O3lHQUNoRE0sQ0FBRTs7Ozs7Ozs7a0RBQUMsQ0FBWTs7eUdBQ2ZGLENBQUM7Ozs7Ozs7O2tEQUFDLENBQTBEOzs7O2tHQUc5REQsQ0FBQztnQ0FDQUgsSUFBSSxFQUFDLENBQXdEOzBFQUNuRCxDQUFNOzs7Ozs7Ozt5R0FFZk0sQ0FBRTs7Ozs7Ozs7a0RBQUMsQ0FBZTs7eUdBQ2xCRixDQUFDOzs7Ozs7OztrREFBQyxDQUF5RDs7OztrR0FHN0RELENBQUM7Z0NBQ0FILElBQUksRUFBQyxDQUE4SDswRUFDekgsQ0FBTTs7Ozs7Ozs7eUdBRWZNLENBQUU7Ozs7Ozs7O2tEQUFDLENBQWE7O3lHQUNoQkYsQ0FBQzs7Ozs7Ozs7a0RBQUMsQ0FFSDs7Ozs7Ozs7aUZBS0xHLENBQU07Ozs7Ozs7O2dHQUNKSixDQUFDO29CQUNBSCxJQUFJLEVBQUMsQ0FBd0c7b0JBQzdHUSxNQUFNLEVBQUMsQ0FBUTtvQkFDZlQsR0FBRyxFQUFDLENBQXFCOzs7Ozs7Ozs7d0JBQzFCLENBQ1k7NkZBQUNVLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFhOzRCQUFDQyxHQUFHLEVBQUMsQ0FBUTtzRUFBVyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVKekUsQ0FBQztLQS9NdUJoQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgV2VsY29tZSB0b1xuICAgICAgICAgIDxMaW5rPmFib3V0PC9MaW5rPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3NcIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDM+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDM+TGVhcm4gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPkV4YW1wbGVzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vaW1wb3J0P2ZpbHRlcj1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5EZXBsb3kgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWxcIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIkFib3V0IiwiSG9tZSIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwicCIsImNvZGUiLCJoMyIsImZvb3RlciIsInRhcmdldCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});