webpackHotUpdate("static/development/pages/entete.js",{

/***/ "./graphql/querries.js":
/*!*****************************!*\
  !*** ./graphql/querries.js ***!
  \*****************************/
/*! exports provided: GET_ENTETE_PER_ID, GET_ENTETE_PER_SLUG, GET_PARCOURS, GET_TEXT, GET_ORDER, GET_MENU_INFO, GET_TEXTE_INFO, GET_QUOTE_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ENTETE_PER_ID", function() { return GET_ENTETE_PER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ENTETE_PER_SLUG", function() { return GET_ENTETE_PER_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PARCOURS", function() { return GET_PARCOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEXT", function() { return GET_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORDER", function() { return GET_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MENU_INFO", function() { return GET_MENU_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEXTE_INFO", function() { return GET_TEXTE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUOTE_INFO", function() { return GET_QUOTE_INFO; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {\n\tparcours(where: {url_slug: $slug}) {\n  \tquotes(where: {ordre: $order, chapitre: $chapitre}) {\n      ordre\n      titre\n      paragraphe\n    }\n  }\n}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {\n\tparcours(where: {url_slug: $slug}) {\n  \ttextes(where: {ordre: $order, chapitre: $chapitre}) {\n      ordre\n      titre\n      paragraphe\n    }\n  }\n}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery GetMenuInfo($slug: String!) {\n  parcours(where: { url_slug: $slug }) {\n    Titre\n    url_slug\n    textes(sort:\"ordre:ASC\"){\n      id\n      ordre\n      titre\n    }\n    videos(sort: \"ordre:ASC\"){\n      id\n      Titre\n      ordre\n    }\n    quotes(sort: \"ordre:ASC\"){\n      id\n      titre\n      ordre\n    }\n  }\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery GetOrder($id: String!, $chapitre: String!) {\n  parcours(where: { url_slug: $id }) {\n    Titre\n    couleur\n    url_slug\n    personnage {\n      url\n    }\n    textes(where: { chapitre: $chapitre }, sort: \"ordre:asc\") {\n      ordre\n      paragraphe\n      titre\n    }\n    videos(where: { chapitre: $chapitre }, sort: \"ordre:asc\") {\n      ordre\n      Titre\n      Texte\n      url_video\n      ordre\n    }\n    quotes(where: { chapitre: $chapitre }, sort: \"ordre:asc\") {\n      ordre\n      titre\n      paragraphe\n      character_quote\n      chapitre\n    }\n  }\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetCardData {\n    parcour(id: \"1\") {\n      textes {\n        paragraphe\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetCardData {\n    parcours {\n      Titre\n      couleur\n      couleur_2\n      card_personnage { url }\n      entete { duree }\n      url_slug\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetBySlug ($id: String!, $enumeration: String!) {\n    parcours(where: { url_slug: $id }) {\n      id\n      couleur\n      url_slug\n      character_name\n      personnage {\n        url\n      }\n      entetes(where: { chapitre: $enumeration }){\n        Titre\n        duree\n      \tchapitre\n        texte_personnage\n        background {\n          url\n        }\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query AllEntete ($id: ID!) {\n        parcour(id: $id) {\n            couleur\n            entete {\n                Titre\n                duree\n                background {\n                    url\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_ENTETE_PER_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var GET_ENTETE_PER_SLUG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var GET_PARCOURS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var GET_TEXT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4()); // const GET_ORDER = gql`
//   query GetOrder($id: String!, $order: String!, $chapitre: String!) {
//   parcours(where: { url_slug: $id }) {
//     Titre
//     couleur
//     url_slug
//     personnage {
//       url
//     }
//     character_name
//     textes(where: { ordre: $order, chapitre: $chapitre }) {
//       titre
//       paragraphe
//       ordre
//     }
//     videos(where: { ordre: $order, chapitre: $chapitre }) {
//       Titre
//       Texte
//       url_video
//       ordre
//     }
//     quotes(where: { ordre: $order, chapitre: $chapitre}) {
//       titre
//       paragraphe
//       character_quote
//       chapitre
//       ordre
//     }
//   }
// }
// `;

var GET_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var GET_MENU_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());
var GET_TEXTE_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7());
var GET_QUOTE_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8());


/***/ })

})
//# sourceMappingURL=entete.js.65951cb4b628c599bfc8.hot-update.js.map