webpackHotUpdate("static/development/pages/slide.js",{

/***/ "./components/Quote/Quote.js":
/*!***********************************!*\
  !*** ./components/Quote/Quote.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var _Quote_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote.scss */ "./components/Quote/Quote.scss");
/* harmony import */ var _Quote_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Quote_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _SCBCharacter_SCBCharacter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../SCBCharacter/SCBCharacter */ "./components/SCBCharacter/SCBCharacter.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_querries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../graphql/querries */ "./graphql/querries.js");








var paragraphes = [];

var subStringData = function subStringData(text) {
  var res = text.split("\n");
  return res;
};

var Quote = function Quote(_ref) {
  var id = _ref.id,
      quote = _ref.quote,
      color = _ref.color,
      order = _ref.order,
      slug = _ref.slug,
      character = _ref.character,
      character_name = _ref.character_name,
      character_texte = _ref.character_texte,
      items = _ref.items,
      chapitre = _ref.chapitre;
  quote.map(function (text) {
    paragraphes = subStringData(text.paragraphe);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: _graphql_querries__WEBPACK_IMPORTED_MODULE_7__["GET_QUOTE_INFO"],
    variables: {
      slug: slug,
      order: order,
      chapitre: chapitre
    }
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      slug: slug
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video-container"
    }, data.parcours.map(function (parcour, key) {
      return quote.map(function (text, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "video-content",
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "video__video-subtitle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " ", order, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "video__video-name"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " ", text.titre, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "video__video-text-container"
        }, paragraphes.map(function (paragraphe, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "video__paragraphe",
            key: key
          }, "\xA0", paragraphe, " ");
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SCBCharacter_SCBCharacter__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: character,
          character_name: character_name,
          character_texte: text.character_quote,
          color: color,
          param: 'quote'
        }), items.pop().ordre !== order ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "continuer",
          link: "/parcours/",
          order: order,
          color: color,
          slug: slug,
          param: 'quote'
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: "continuer",
          link: "/parcours/",
          order: order,
          color: color,
          slug: slug,
          param: 'quote'
        }));
      });
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ })

})
//# sourceMappingURL=slide.js.2468086bffec8dfce6d8.hot-update.js.map