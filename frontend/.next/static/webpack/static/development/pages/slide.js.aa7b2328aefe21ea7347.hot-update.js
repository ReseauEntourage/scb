webpackHotUpdate("static/development/pages/slide.js",{

/***/ "./components/Video/Video.js":
/*!***********************************!*\
  !*** ./components/Video/Video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Menu/Menu */ "./components/Menu/Menu.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");
/* harmony import */ var _Video_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video.scss */ "./components/Video/Video.scss");
/* harmony import */ var _Video_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Video_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Button/Button */ "./components/Button/Button.js");





var params = {
  height: '200',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
var paragraphes = [];

var subStringData = function subStringData(text) {
  var res = text.split("\n");
  return res;
};

var Video = function Video(_ref) {
  var video = _ref.video,
      color = _ref.color,
      order = _ref.order,
      slug = _ref.slug,
      items = _ref.items,
      chapitre = _ref.chapitre;
  video.map(function (vid) {
    paragraphes = subStringData(vid.Texte);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slug: slug
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-container"
  }, video.map(function (vid, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video-content",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-subtitle"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Interview ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-name"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " ", vid.Titre, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "video__video-text-container"
    }, paragraphes.map(function (paragraphe, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "video__paragraphe",
        key: key
      }, "\xA0", paragraphe, " ");
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "player",
      videoId: "AKrOePSXbQQ",
      opts: params
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "continuer",
      link: "/parcours/",
      order: order,
      color: color,
      slug: slug
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

})
//# sourceMappingURL=slide.js.aa7b2328aefe21ea7347.hot-update.js.map