webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Entete/Button/EnteteButton.js":
/*!**************************************************!*\
  !*** ./components/Entete/Button/EnteteButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EnteteButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnteteButton.scss */ "./components/Entete/Button/EnteteButton.scss");
/* harmony import */ var _EnteteButton_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EnteteButton_scss__WEBPACK_IMPORTED_MODULE_2__);




var EnteteButton = function EnteteButton(_ref) {
  var title = _ref.title,
      color = _ref.color,
      slug = _ref.slug,
      enumeration = _ref.enumeration;
  console.log(enumeration);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/parcours/?id=".concat(slug, "/?order=1"),
    as: "/parcours/".concat(slug, "/1")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entete__button-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "entete__button-title",
    style: {
      color: "#" + color
    }
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (EnteteButton);

/***/ })

})
//# sourceMappingURL=index.js.8013e2d9c350ab6e3836.hot-update.js.map