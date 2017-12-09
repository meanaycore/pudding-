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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var app = __webpack_require__(1);

var $ = app.init();

$.css(`
        body {
                background: green;
                color: red;
                animtion: flash 15s linear infinite;
        }

        @keyframes flash {
            100% {
                backgroud: red;
                color: green;
            }
        }

        html {
            border: 3px dashed white;
        }
`);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
    Introduction info
*/

var index = (function(){
    'use strict';

    /*
        init function
    */

    var index = 0;
    var path = '';

    var init = function()
    {
          /* create a stylesheet If none exist */

            var stylesheet = document.createElement('style');
            var head = document.head || document.getElementsByTagName('head')[0];
            stylesheet.className = 'pudding';
            head.appendChild(stylesheet);

        /* grab existing stylesheets */

        var styleList = document.styleSheets || [];

        return this;

    }

    /* single element style */

    var css = function(styles){

        /* If created a stylesheet */

        var style = document.getElementsByClassName('pudding')[0];

        if(style){
            return style.textContent = styles;
        }
        return console.log('Error: Style element not found, refresh page !');

    }

    return {
            init: init,
            css : css
    };

})();

module.exports = index;


/***/ })
/******/ ]);