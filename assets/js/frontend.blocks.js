/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 370);
/******/ })
/************************************************************************/
/******/ ({

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_panel_collapse_panel_frontend__ = __webpack_require__(371);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_panel_collapse_panel_frontend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__collapse_panel_collapse_panel_frontend__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzPzMxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbGxhcHNlLXBhbmVsL2NvbGxhcHNlLXBhbmVsLWZyb250ZW5kJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gMzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///370\n");

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n\n    var collapsePanels = document.querySelectorAll('.lcb-cp-container');\n    var headersCollapsePanel = document.querySelectorAll('.lcb-cp-title');\n\n    headersCollapsePanel.forEach(function (header) {\n        header.addEventListener('click', function () {\n            header.classList.toggle('opened');\n        });\n    });\n\n    collapsePanels.forEach(function (el) {\n        var height = el.scrollHeight;\n        el.style.setProperty('--max-height', height + 'px');\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxhcHNlLXBhbmVsL2NvbGxhcHNlLXBhbmVsLWZyb250ZW5kLmpzP2M2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGNvbGxhcHNlUGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxjYi1jcC1jb250YWluZXInKTtcbiAgICB2YXIgaGVhZGVyc0NvbGxhcHNlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGNiLWNwLXRpdGxlJyk7XG5cbiAgICBoZWFkZXJzQ29sbGFwc2VQYW5lbC5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbGxhcHNlUGFuZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLW1heC1oZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbGxhcHNlLXBhbmVsL2NvbGxhcHNlLXBhbmVsLWZyb250ZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///371\n");

/***/ })

/******/ });