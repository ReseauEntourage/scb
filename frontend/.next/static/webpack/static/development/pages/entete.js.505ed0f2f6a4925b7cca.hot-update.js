webpackHotUpdate("static/development/pages/entete.js",{

/***/ "./components/Entete/Entete.js":
/*!*************************************!*\
  !*** ./components/Entete/Entete.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entete; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_querries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../graphql/querries */ "./graphql/querries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Entete_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Entete.scss */ "./components/Entete/Entete.scss");
/* harmony import */ var _Entete_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Entete_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BackgroundImage_BackgroundImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BackgroundImage/BackgroundImage */ "./components/BackgroundImage/BackgroundImage.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _static_images_back_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../static/images/back.svg */ "./static/images/back.svg");
/* harmony import */ var _static_images_back_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_back_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_clock_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../static/images/clock.svg */ "./static/images/clock.svg");
/* harmony import */ var _static_images_clock_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_clock_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Button_EnteteButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button/EnteteButton */ "./components/Entete/Button/EnteteButton.js");
/* harmony import */ var _SCBCharacter_SCBCharacter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../SCBCharacter/SCBCharacter */ "./components/SCBCharacter/SCBCharacter.js");











/**
 * Import Components
 */








var Entete =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Entete, _Component);

  function Entete() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Entete);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Entete).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Entete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          enumeration = _this$props.enumeration;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
        query: _graphql_querries__WEBPACK_IMPORTED_MODULE_7__["GET_ENTETE_PER_SLUG"],
        variables: {
          id: id,
          enumeration: enumeration
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Error, null);
        if (loading) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Loading");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, enumeration === "Intro" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "entete-container"
        }, data.parcours.map(function (parcour, key) {
          return parcour.entetes.map(function (entete, key) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "entete-container",
              key: key
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BackgroundImage_BackgroundImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
              img: entete.background.url
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "back-button",
              onClick: function onClick() {
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.back();
              }
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
              src: _static_images_back_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
              alt: "arrow back"
            })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "data-container"
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "entete__time-container"
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
              className: "svg-clock",
              src: _static_images_clock_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
              alt: "clock img"
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              className: "time-text"
            }, " ", entete.duree, " MIN")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
              className: "data-title"
            }, entete.Titre)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SCBCharacter_SCBCharacter__WEBPACK_IMPORTED_MODULE_16__["default"], {
              image: parcour.personnage.url,
              character_name: parcour.character_name,
              character_texte: entete.texte_personnage,
              color: parcour.couleur,
              param: 'entete'
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button_EnteteButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              title: "commencer",
              color: parcour.couleur,
              slug: parcour.url_slug
            }));
          });
        })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "entete-container"
        }, data.parcours.map(function (parcour, key) {
          return parcour.entetes.map(function (entete, key) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "entete-container",
              key: key
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BackgroundImage_BackgroundImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
              img: entete.background.url
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "back-button",
              onClick: function onClick() {
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.back();
              }
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
              src: _static_images_back_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
              alt: "arrow back"
            })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "data-container"
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              className: "entete__time-container"
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
              className: "svg-clock",
              src: _static_images_clock_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
              alt: "clock img"
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              className: "time-text"
            }, " ", entete.duree, " MIN")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
              className: "data-title"
            }, entete.Titre)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SCBCharacter_SCBCharacter__WEBPACK_IMPORTED_MODULE_16__["default"], {
              image: parcour.personnage.url,
              character_name: parcour.character_name,
              character_texte: entete.texte_personnage,
              color: parcour.couleur,
              param: 'entete'
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button_EnteteButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
              title: "commencer",
              color: parcour.couleur,
              slug: parcour.url_slug
            }));
          });
        })));
      });
    }
  }]);

  return Entete;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=entete.js.505ed0f2f6a4925b7cca.hot-update.js.map