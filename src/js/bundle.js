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

var $ = app.init(true);

$._("body { background: red }");

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
    
    var init = function(createFile, preferedFile) 
    {
        preferedFile = preferedFile || null;
        createFile = createFile || false;
      
        if(!preferedFile && !createFile){
            console.log('USAGE: pass in a filename or just true if you want to create one');
            return;
        }
        
          /* create a stylesheet If none exist */
         console.log('OUTI');
        console.log(createFile);
        if(createFile){
            console.log('INNIE');
            var stylesheet = document.createElement('style');
            var head = document.head || document.getElementsByTagName('head')[0];
            stylesheet.className = 'pudding';
            head.appendChild(stylesheet);
            return this;
        }
        
        /* grab existing stylesheets */
        var preferedFile = preferedFile + '.css'; 
        var fileNames = [];
        var styleList = document.styleSheets || [];
        
        /* grab css file path */
        
          path = styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .replace(styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .substring(styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .lastIndexOf('/') + 1), '');
        
        /* return a list of filenames */
        
         if(styleList) {
            for(var i=0; i < styleList.length; i++) {
                fileNames.push(styleList[i]
                               .href.substr(styleList[i]
                                .href.lastIndexOf('/') + 1));
            }
         }
        
        /* search for prefered file and return index */
        
         if(styleList) {
            for(var i=0; i < styleList.length; i++) {
                var haystack = styleList[i]
                    .href.substr(styleList[i]
                                .href.lastIndexOf('/') + 1);
                if(preferedFile == haystack){
                    index = i;
                }
            }
         }
        
        return this;
        
    }
    
    /* single element style */
    
    var _ = function(styles){
       
        /* validate JSON*/
        
        var style = document.getElementsByClassName('pudding')[0];
        
        if(style){
            return style.textContent = styles; 
        }
        
        /* multiple or single styles */
     
        document.styleSheets[index].insertRule(styles);
    }
    
    return {
            init: init,
            _ : _
    };
    
})();

module.exports = index;

/***/ })
/******/ ]);