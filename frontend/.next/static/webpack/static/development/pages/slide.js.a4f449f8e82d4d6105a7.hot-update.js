webpackHotUpdate("static/development/pages/slide.js",{

/***/ "./components/Texte/Texte.js":
/*!***********************************!*\
  !*** ./components/Texte/Texte.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _Texte_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Texte.scss */ "./components/Texte/Texte.scss");
/* harmony import */ var _Texte_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Texte_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Button/Button */ "./components/Button/Button.js");




var paragraphes = [];

var subStringData = function subStringData(text) {
  var res = text.split("\n");
  return res;
}; // const getLink = (texte) => {
//     console.log(texte)
// }


var Texte = function Texte(_ref) {
  var id = _ref.id,
      texte = _ref.texte,
      color = _ref.color,
      order = _ref.order,
      slug = _ref.slug,
      items = _ref.items,
      chapitre = _ref.chapitre;
  texte.map(function (text) {
    paragraphes = subStringData(text.paragraphe);
  });
  console.log(texte);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slug: slug
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-container"
  }, texte.map(function (text, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video-content",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-subtitle"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " ", "1", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-name"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " ", text.titre, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-text-container"
    }, paragraphes.map(function (paragraphe, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "video__paragraphe",
        key: key
      }, "\xA0", paragraphe, " ");
    })), items.pop().ordre !== order ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "continuer",
      link: "/parcours/",
      order: "1",
      color: color,
      slug: slug,
      chapitre: chapitre,
      next: false
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "continuer",
      link: "/parcours/",
      order: "3",
      color: color,
      slug: slug,
      chapitre: chapitre,
      next: true
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Texte);

/***/ })

})
//# sourceMappingURL=slide.js.a4f449f8e82d4d6105a7.hot-update.js.map