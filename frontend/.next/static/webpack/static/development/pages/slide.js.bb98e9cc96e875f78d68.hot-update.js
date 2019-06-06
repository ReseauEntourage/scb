webpackHotUpdate("static/development/pages/slide.js",{

/***/ "./components/Menu/ListMenu.js":
/*!*************************************!*\
  !*** ./components/Menu/ListMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListMenu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Menu_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu.scss */ "./components/Menu/Menu.scss");
/* harmony import */ var _Menu_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Menu_scss__WEBPACK_IMPORTED_MODULE_11__);













var ListMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ListMenu, _Component);

  function ListMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ListMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ListMenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getArrayofLink", function (data) {
      var newArray = [];
      data.parcours.map(function (parcour, key) {
        newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos);
      });

      var arr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(newArray).sort(dynamicSort("ordre"));

      console.log(arr);
      return arr;
    });

    _this.elementItems = [];
    _this.elementOrderItems = [];
    _this.elementOrderItemsCopy = [];
    _this.elementTitleItems = [];
    _this.elementTitleItemsCopy = [];
    _this.final = [];
    _this.maMap = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
    _this.state = {
      newMap: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a()
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ListMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          nb = _this$props.nb;
      this.setState({
        // newMap: this.initList( data, nb )
        newMap: this.getArrayofLink(data)
      });
    }
  }, {
    key: "render",
    // initList(data, nb) {
    //     for(let i = 3; i < nb; i++) {
    //         this.elementItems.push(i)
    //     }
    //     for(const parcour of data.parcours) {
    //         if(parcour.textes.length !== 0) {
    //             for(const text of parcour.textes) {
    //                 this.elementOrderItems.push(text.ordre)
    //             }
    //         }
    //         if(parcour.videos.length !== 0) {
    //             for(const video of parcour.videos) {
    //                 this.elementOrderItems.push(video.ordre)
    //             }
    //         }
    //         if(parcour.quotes.length !== 0) {
    //             for(const quote of parcour.quotes) {
    //                 this.elementOrderItems.push(quote.ordre)
    //             }
    //         }
    //         for(const element of this.elementOrderItems) {
    //             if(parcour.textes.length !== 0) {
    //                 for(const text of parcour.textes) {
    //                     if(text.ordre === element) {
    //                         this.elementTitleItems.push(text.titre) 
    //                     }
    //                 }
    //             }
    //             if(parcour.videos.length !== 0) {
    //                 for(const video of parcour.videos) {
    //                     if(video.ordre === element) {
    //                         this.elementTitleItems.push(video.Titre)
    //                     }
    //                 }
    //             }
    //             if(parcour.quotes.length !== 0) {
    //                 for(const quote of parcour.quotes) {
    //                     if(quote.ordre === element) {
    //                         this.elementTitleItems.push(quote.titre)
    //                     }
    //                 }
    //             }
    //         }          
    //         for (let i=0; i < this.elementItems.length; i++) {
    //             this.maMap.set(this.elementOrderItems[i], this.elementTitleItems[i])
    //             this.state.newMap = new Map([...this.maMap].sort())
    //         }
    //         return this.state.newMap
    //     }
    // }
    value: function render() {
      var arr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(this.state.newMap);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "Salut"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, arr.map(function (valeur, key) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          href: "/parcours/les-femmes-dans-la-rue/".concat(valeur[0])
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "number"
        }, " ", valeur[0]), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "title"
        }, " ", valeur[1])));
      })));
    }
  }]);

  return ListMenu;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=slide.js.bb98e9cc96e875f78d68.hot-update.js.map