/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/additionalStyle.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/additionalStyle.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Nunito/Nunito-VariableFont_wght.ttf */ \"./src/assets/Nunito/Nunito-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Nunito/Nunito-Italic-VariableFont_wght.ttf */ \"./src/assets/Nunito/Nunito-Italic-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'nunitoRegular';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'nunitoItalic';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n  font-weight: 400;\n  font-style: italic;\n}\n\n.nunitoRegular {\n  font-family: 'nunitoRegular';\n}\n\n.nunitoItalic {\n  font-family: 'nunitoItalic';\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/additionalStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/additionalStyle.css":
/*!*********************************!*\
  !*** ./src/additionalStyle.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_additionalStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./additionalStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/additionalStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_additionalStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_additionalStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_additionalStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_additionalStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/additionalStyle.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactView.js":
/*!****************************!*\
  !*** ./src/contactView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateWithContactContent: () => (/* binding */ populateWithContactContent)\n/* harmony export */ });\n/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/location.png */ \"./src/assets/location.png\");\n\n\nfunction populateWithContactContent () {\n  const contentContainer = document.getElementById('contentBody')\n\n  const contactView = document.createElement('div')\n  contactView.id = 'contactView'\n\n  const infoContainer = document.createElement('div')\n  infoContainer.id = 'contactInfoContainer'\n\n  const infoHeading = document.createElement('h3')\n  infoHeading.innerText = 'Call in for delivery or stop by for a visit at our beautifully renovated dining lounge in the heart of Cape Town!'\n  infoContainer.appendChild(infoHeading)\n\n  const infoBody = document.createElement('h5')\n  infoBody.innerText = '☎️ 011 777 7777\\n🏠 12 Virginia Ave, Vredehoek, Cape Town, 8001'\n  infoContainer.appendChild(infoBody)\n  contactView.appendChild(infoContainer)\n\n  const imgContainer = document.createElement('div')\n  imgContainer.id = 'contactImgContainer'\n\n  const locationImg = new Image()\n  locationImg.src = _assets_location_png__WEBPACK_IMPORTED_MODULE_0__\n  imgContainer.appendChild(locationImg)\n  contactView.appendChild(imgContainer)\n\n  contentContainer.appendChild(contactView)\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contactView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad.js */ \"./src/initialLoad.js\");\n/* harmony import */ var _mainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainView.js */ \"./src/mainView.js\");\n/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuView.js */ \"./src/menuView.js\");\n/* harmony import */ var _contactView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactView.js */ \"./src/contactView.js\");\n\n\n\n\n\n// eslint-disable-next-line no-unused-vars\nconst loadPage = (function () {\n  (0,_initialLoad_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)()\n  ;(0,_mainView_js__WEBPACK_IMPORTED_MODULE_1__.populateWithMainContent)()\n})()\n\n// eslint-disable-next-line no-unused-vars\nconst domMethods = (function () {\n  const documentBody = document.getElementById('contentBody')\n\n  const allTabs = document.querySelectorAll('.tabLink')\n\n  function returnTabMethod (tabId) {\n    switch (tabId) {\n      case 'mainTab':\n        return (0,_mainView_js__WEBPACK_IMPORTED_MODULE_1__.populateWithMainContent)()\n      case 'menuTab':\n        return (0,_menuView_js__WEBPACK_IMPORTED_MODULE_2__.populateWithMenuContent)()\n      case 'contactTab':\n        return (0,_contactView_js__WEBPACK_IMPORTED_MODULE_3__.populateWithContactContent)()\n    }\n  }\n\n  function clearBody () {\n    documentBody.removeChild(documentBody.childNodes[1])\n  }\n\n  function clearTabBackgrounds () {\n    allTabs.forEach((tab) => {\n      tab.style.backgroundColor = '#e9f7eb'\n      tab.style.color = '#000'\n    })\n  }\n\n  allTabs.forEach((tab) => {\n    tab.addEventListener('click', () => {\n      clearTabBackgrounds()\n      tab.style.backgroundColor = '#046A38'\n      tab.style.color = '#e9f7eb'\n      clearBody()\n      returnTabMethod(tab.id)\n    })\n  })\n})()\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _additionalStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additionalStyle.css */ \"./src/additionalStyle.css\");\n\n\nfunction initialPageLoad () {\n  const documentContainer = document.getElementById('content')\n\n  const headerEle = document.createElement('header')\n  documentContainer.appendChild(headerEle)\n\n  const headerText = document.createElement('h1')\n  headerText.textContent = 'Prego de (Now)'\n  headerText.classList.add('nunitoItalic')\n  headerEle.appendChild(headerText)\n\n  const mainDiv = document.createElement('main')\n  mainDiv.id = 'contentBody'\n  mainDiv.classList.add('nunitoRegular')\n  documentContainer.appendChild(mainDiv)\n\n  const tabContainer = document.createElement('div')\n  tabContainer.id = 'tabContainer'\n  tabContainer.classList.add('nunitoRegular')\n  mainDiv.appendChild(tabContainer)\n\n  const mainTab = document.createElement('a')\n  mainTab.textContent = 'Main'\n  mainTab.id = 'mainTab'\n  mainTab.classList.add('tabLink')\n  mainTab.style.backgroundColor = '#046A38'\n  mainTab.style.color = '#e9f7eb'\n  tabContainer.appendChild(mainTab)\n\n  const menuTab = document.createElement('a')\n  menuTab.textContent = 'Menu'\n  menuTab.id = 'menuTab'\n  menuTab.classList.add('tabLink')\n  tabContainer.appendChild(menuTab)\n\n  const contactTab = document.createElement('a')\n  contactTab.textContent = 'Contact'\n  contactTab.id = 'contactTab'\n  contactTab.classList.add('tabLink')\n  tabContainer.appendChild(contactTab)\n\n  const footerEle = document.createElement('footer')\n  documentContainer.appendChild(footerEle)\n\n  const footerTextContainer = document.createElement('div')\n  footerTextContainer.classList.add('nunitoRegular')\n  footerEle.appendChild(footerTextContainer)\n\n  const footerText = document.createElement('h5')\n  footerText.innerText = 'Built by Justin Farrow | '\n  footerTextContainer.appendChild(footerText)\n\n  const footerLink = document.createElement('a')\n  footerLink.innerText = 'Source Code'\n  footerLink.href = 'https://github.com/JAFarrow/TOP_restaurantPage'\n  footerLink.target = '_blank'\n  footerTextContainer.appendChild(footerLink)\n};\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/initialLoad.js?");

/***/ }),

/***/ "./src/mainView.js":
/*!*************************!*\
  !*** ./src/mainView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateWithMainContent: () => (/* binding */ populateWithMainContent)\n/* harmony export */ });\n/* harmony import */ var _additionalStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additionalStyle.css */ \"./src/additionalStyle.css\");\n/* harmony import */ var _assets_mainImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/mainImg.jpg */ \"./src/assets/mainImg.jpg\");\n\n\n\nfunction populateWithMainContent () {\n  const contentContainer = document.getElementById('contentBody')\n\n  const mainView = document.createElement('div')\n  mainView.id = 'mainView'\n  contentContainer.appendChild(mainView)\n\n  const writeUpContainer = document.createElement('div')\n  writeUpContainer.id = 'writeUpContainer'\n  mainView.appendChild(writeUpContainer)\n\n  const writeUpHeader = document.createElement('h3')\n  writeUpHeader.textContent = 'The Taste Of Portugal, To Your Doorstep!'\n  writeUpHeader.classList.add('nunitoItalic')\n  writeUpContainer.appendChild(writeUpHeader)\n\n  const writeUpParagraph = document.createElement('p')\n  writeUpParagraph.innerText = 'Spicing up Cape Town since \\'09.\\nCall in your delivery or enjoy the windy city on our (comfortanbly enclosed) doorstep.'\n  writeUpContainer.appendChild(writeUpParagraph)\n\n  const imgContainer = document.createElement('div')\n  imgContainer.id = 'imgContainer'\n  mainView.appendChild(imgContainer)\n\n  const mainImg = new Image()\n  mainImg.src = _assets_mainImg_jpg__WEBPACK_IMPORTED_MODULE_1__\n  imgContainer.appendChild(mainImg)\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/mainView.js?");

/***/ }),

/***/ "./src/menuView.js":
/*!*************************!*\
  !*** ./src/menuView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateWithMenuContent: () => (/* binding */ populateWithMenuContent)\n/* harmony export */ });\n/* harmony import */ var _assets_pregoRoll_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pregoRoll.jpg */ \"./src/assets/pregoRoll.jpg\");\n/* harmony import */ var _assets_chorizoHash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chorizoHash.jpg */ \"./src/assets/chorizoHash.jpg\");\n/* harmony import */ var _assets_cortado_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cortado.jpg */ \"./src/assets/cortado.jpg\");\n/* harmony import */ var _assets_francesinha_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/francesinha.jpg */ \"./src/assets/francesinha.jpg\");\n/* harmony import */ var _assets_grilledSardines_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/grilledSardines.jpg */ \"./src/assets/grilledSardines.jpg\");\n/* harmony import */ var _assets_pastiesDeNata_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pastiesDeNata.jpg */ \"./src/assets/pastiesDeNata.jpg\");\n\n\n\n\n\n\n\nfunction cycleMenuItems (index) {\n  const menuItems = [\n    {\n      img: _assets_pregoRoll_jpg__WEBPACK_IMPORTED_MODULE_0__,\n      title: 'Tender Steak Prego Roll',\n      desc: 'Melt in your mouth steak fried in a delicious garlic and vinegar sauce, topped with fried onion, lettuce and tomato on a crispy Portugese roll.'\n    },\n    {\n      img: _assets_chorizoHash_jpg__WEBPACK_IMPORTED_MODULE_1__,\n      title: 'Chorizo Breakfast Hash Bowl',\n      desc: 'Fried chorizo and hash brown, sauted in garlic and red onion and served with a poached egg and diced tomato. It\\'s as breakfast as breakfast gets.'\n    },\n    {\n      img: _assets_francesinha_jpg__WEBPACK_IMPORTED_MODULE_3__,\n      title: 'Pork Belly Francesinha',\n      desc: 'Sticky pork belly strips, smoked ham slices and a vegatable medley, served as a delightfully cheese-enrobed sandwich topped with runny egg.'\n    },\n    {\n      img: _assets_grilledSardines_jpg__WEBPACK_IMPORTED_MODULE_4__,\n      title: 'Pesto Salt-Grilled Sardines',\n      desc: 'Fresh sardines flame-grilled in a flavour-intensifying salt rub, basted in a simple pesto paste and served with grilled green peppers.'\n    },\n    {\n      img: _assets_pastiesDeNata_jpg__WEBPACK_IMPORTED_MODULE_5__,\n      title: 'Flakey Pastéis De Nata',\n      desc: 'A Portuguese legend, custard tartlets in an flakey egg pastry, caramalized to perfection.'\n    },\n    {\n      img: _assets_cortado_jpg__WEBPACK_IMPORTED_MODULE_2__,\n      title: 'Energizing Cortado Coffee',\n      desc: 'The perfect pick-me-up after a big meal, we deliver our Cortado\\'s steaming hot in a convenient to-go cup.'\n    }\n  ]\n\n  return menuItems[index]\n}\n\nfunction populateWithMenuContent () {\n  const contentContainer = document.getElementById('contentBody')\n\n  const menuView = document.createElement('div')\n  menuView.id = 'menuView'\n  contentContainer.appendChild(menuView)\n\n  const menuHeader = document.createElement('h3')\n  menuHeader.innerText = 'All Items Listed Are To-Go Or For Delivery, Please Enquire About Our Dining Menu Once Seated'\n  menuView.appendChild(menuHeader)\n\n  const menuItemsContainer = document.createElement('div')\n  menuItemsContainer.id = 'menuContainer'\n  menuView.appendChild(menuItemsContainer)\n\n  for (let i = 0; i <= 5; i++) {\n    const menuItemDiv = document.createElement('div')\n    menuItemDiv.classList.add('indvMenuItem')\n\n    const menuItem = cycleMenuItems(i)\n\n    const menuItemImg = new Image()\n    menuItemImg.src = menuItem.img\n    menuItemImg.classList.add('menuItemImg')\n    menuItemDiv.appendChild(menuItemImg)\n\n    const menuItemWriteupContainer = document.createElement('div')\n    menuItemWriteupContainer.classList.add('menuItemWriteupContainer')\n    menuItemDiv.appendChild(menuItemWriteupContainer)\n\n    const menuItemHeader = document.createElement('h5')\n    menuItemHeader.innerText = menuItem.title\n    menuItemHeader.classList.add('menuItemHeader')\n    menuItemWriteupContainer.appendChild(menuItemHeader)\n\n    const menuItemBodyText = document.createElement('p')\n    menuItemBodyText.innerText = menuItem.desc\n    menuItemBodyText.classList.add('menuItemBodyText')\n    menuItemWriteupContainer.appendChild(menuItemBodyText)\n\n    menuItemsContainer.appendChild(menuItemDiv)\n  }\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menuView.js?");

/***/ }),

/***/ "./src/assets/Nunito/Nunito-Italic-VariableFont_wght.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/Nunito/Nunito-Italic-VariableFont_wght.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c3b61b77fee2ba4b6db.ttf\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/Nunito/Nunito-Italic-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/Nunito/Nunito-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/assets/Nunito/Nunito-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a3eef3e0a61b7eb3eda.ttf\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/Nunito/Nunito-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/chorizoHash.jpg":
/*!************************************!*\
  !*** ./src/assets/chorizoHash.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f172d8f1ed4f60fb6982.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/chorizoHash.jpg?");

/***/ }),

/***/ "./src/assets/cortado.jpg":
/*!********************************!*\
  !*** ./src/assets/cortado.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9c739b4d25b7ecdeb45.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/cortado.jpg?");

/***/ }),

/***/ "./src/assets/francesinha.jpg":
/*!************************************!*\
  !*** ./src/assets/francesinha.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85b31caacf0d3f042202.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/francesinha.jpg?");

/***/ }),

/***/ "./src/assets/grilledSardines.jpg":
/*!****************************************!*\
  !*** ./src/assets/grilledSardines.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb91debffa03f69b03e0.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/grilledSardines.jpg?");

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed643edb79e941a05dcf.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/location.png?");

/***/ }),

/***/ "./src/assets/mainImg.jpg":
/*!********************************!*\
  !*** ./src/assets/mainImg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddd8b776bc79805521eb.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/mainImg.jpg?");

/***/ }),

/***/ "./src/assets/pastiesDeNata.jpg":
/*!**************************************!*\
  !*** ./src/assets/pastiesDeNata.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3288e5644644a9810fdc.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/pastiesDeNata.jpg?");

/***/ }),

/***/ "./src/assets/pregoRoll.jpg":
/*!**********************************!*\
  !*** ./src/assets/pregoRoll.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e8d1fc033dac757986b.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/pregoRoll.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;