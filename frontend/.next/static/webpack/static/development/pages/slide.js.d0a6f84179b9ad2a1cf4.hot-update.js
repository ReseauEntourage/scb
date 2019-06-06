webpackHotUpdate("static/development/pages/slide.js",{

/***/ "./pages/slide.js":
/*!************************!*\
  !*** ./pages/slide.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_querries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../graphql/querries */ "./graphql/querries.js");
/* harmony import */ var _components_Video_Video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/Video/Video */ "./components/Video/Video.js");
/* harmony import */ var _components_Texte_Texte__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/Texte/Texte */ "./components/Texte/Texte.js");
/* harmony import */ var _components_Quote_Quote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/Quote/Quote */ "./components/Quote/Quote.js");














var dynamicSort = function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

var getArrayofLink = function getArrayofLink(data) {
  var newArray = [];
  data.parcours.map(function (parcour, key) {
    newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos);
  });

  var arr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(newArray).sort(dynamicSort("ordre"));

  return arr;
};

var Custom = function Custom(_ref) {
  var data = _ref.data,
      id = _ref.id,
      order = _ref.order,
      chapitre = _ref.chapitre;
  var items = getArrayofLink(data);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, data.parcours.map(function (parcour, key) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: key
    }, parcour.textes.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Salut") : parcour.videos.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Video_Video__WEBPACK_IMPORTED_MODULE_10__["default"], {
      video: parcour.videos,
      color: parcour.couleur,
      order: order,
      slug: parcour.url_slug,
      key: key,
      items: items,
      chapitre: chapitre
    }) : parcour.quotes.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Quote_Quote__WEBPACK_IMPORTED_MODULE_12__["default"], {
      quote: parcour.quotes,
      color: parcour.couleur,
      order: order,
      slug: parcour.url_slug,
      key: key,
      character: parcour.personnage.url,
      character_name: parcour.character_name,
      items: items,
      chapitre: chapitre
    }) : null);
  }));
};

var Slide =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slide, _React$Component);

  function Slide() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slide);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slide).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slide, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: _graphql_querries__WEBPACK_IMPORTED_MODULE_9__["GET_ORDER"],
        variables: {
          id: this.props.postId,
          chapitre: this.props.postChapitre
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Custom, {
          data: data,
          id: _this.props.postId,
          order: _this.props.postOrder,
          chapitre: _this.props.postChapitre
        });
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref3) {
      var _ref3$query = _ref3.query,
          id = _ref3$query.id,
          chapitre = _ref3$query.chapitre,
          order = _ref3$query.order;
      return {
        postId: id,
        postChapitre: chapitre,
        postOrder: order
      };
    }
  }]);

  return Slide;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ })

})
//# sourceMappingURL=slide.js.d0a6f84179b9ad2a1cf4.hot-update.js.map