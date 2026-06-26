/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"boxnow-frontend": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + {"0":"d588ac2ad0a38e3c3191","1":"84c679db83b3a6d95bc0","2":"a394647deb8180d1c4c6","5":"74d2adb6436e704e1609","14":"ba2a6582a32678eb78d8"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/scripts/boxnow-frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"variables":{"color":{"red":"#d63638","econt-blue":"#234182","speedy-red":"#dc0032","boxnow-green":"#72d34c","cvc-blue":"#234182","pigeon-orange":"#f7941d"}}};

/***/ }),

/***/ "./resources/scripts/boxnow-frontend/index.js":
/*!****************************************************!*\
  !*** ./resources/scripts/boxnow-frontend/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = __webpack_require__(/*! @config */ "./config.json");

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(/*! ../utils */ "./resources/scripts/utils/index.js");

__webpack_require__(/*! @styles/boxnow-frontend */ "./resources/styles/boxnow-frontend/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__.p = window.__webpack_public_path__;


var boxnow = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(14)]).then(__webpack_require__.t.bind(null, /*! ./apps/app.js */ "./resources/scripts/boxnow-frontend/apps/app.js", 7));
var boxnowCookieName = 'woo-bg--boxnow-apm';

$(document.body).on('change', 'input[name="payment_method"]', function () {
	var payment = $('input[name="payment_method"]:checked').val();

	if (!payment) {
		return;
	}

	var cookie = {};
	var cookieData = (0, _utils.getCookie)(boxnowCookieName);

	if (cookieData) {
		try {
			cookie = JSON.parse(cookieData);
		} catch (error) {
			if (error) {
				cookie = {};
			}
		}
	}

	cookie.payment = payment;
	cookie = encodeURIComponent(JSON.stringify(cookie));

	(0, _utils.setCookie)(boxnowCookieName, cookie, 1);
});

boxnow.then(function (promise) {
	var instance = void 0;
	window.boxnowApmInitialUpdate = true;

	$(document.body).on('updated_checkout', function (data) {
		var $shipping_method = $('input[name^="shipping_method"]:checked');

		if (!$shipping_method.length) {
			var $methods = $('ul#shipping_method li');

			if ($methods.length == 1) {
				$shipping_method = $('input[name="shipping_method[0]"]');
			}
		}

		if ($shipping_method.length && $shipping_method.val().includes('woo_bg_boxnow')) {
			$('form.checkout').on('change', 'input[name="payment_method"]', function () {
				$(document.body).trigger('update_checkout');
			});

			var $parent = $shipping_method.closest('li');
			var $target = $parent.find('.woo-bg-additional-fields');

			if ((typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) === 'object') {
				instance.$destroy();
			}

			setTimeout(function () {
				instance = new promise.apm({ el: '#' + $target.attr('id') });
			}, 5);
		} else if ((typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) === 'object') {
			window.boxnowApmInitialUpdate = true;

			instance.$destroy();
		}
	});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/scripts/utils/index.js":
/*!******************************************!*\
  !*** ./resources/scripts/utils/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var setCookie = exports.setCookie = function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

var getCookie = exports.getCookie = function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];

		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

var resizeBase64 = exports.resizeBase64 = function resizeBase64(base64String, maxWidth, maxHeight, format, compression, ratioFunction, successCallback) {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var canvasCopy = document.createElement("canvas");
	var copyContext = canvasCopy.getContext("2d");

	var img = new Image();
	img.src = base64String;

	img.onload = function () {
		var ratioResult = ratioFunction(img.width, img.height, maxWidth, maxHeight);
		var widthRatio = ratioResult.width;
		var heightRatio = ratioResult.height;

		canvasCopy.width = img.width;
		canvasCopy.height = img.height;
		copyContext.drawImage(img, 0, 0);

		canvas.width = img.width * widthRatio;
		canvas.height = img.height * heightRatio;

		ctx.imageSmoothingEnabled = true;
		ctx.mozImageSmoothingEnabled = true;
		ctx.oImageSmoothingEnabled = true;
		ctx.webkitImageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = 'high';

		copyContext.imageSmoothingEnabled = true;
		copyContext.mozImageSmoothingEnabled = true;
		copyContext.oImageSmoothingEnabled = true;
		copyContext.webkitImageSmoothingEnabled = true;
		copyContext.imageSmoothingQuality = 'high';

		ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);

		successCallback(canvas.toDataURL(format, compression));
	};

	img.onerror = function () {
		console.log('Error while loading image.');
	};
};

var ratioFunction = exports.ratioFunction = function ratioFunction(imageWidth, imageHeight, targetWidth, targetHeight) {
	var ratio = 1;
	var heightRatio = 1;

	if (imageWidth > targetWidth) {
		ratio = targetWidth / imageWidth;
	}

	if (imageHeight > targetHeight) {
		heightRatio = targetHeight / imageHeight;
	}

	if (heightRatio < ratio) {
		ratio = heightRatio;
	}

	return {
		width: ratio,
		height: ratio
	};
};

/***/ }),

/***/ "./resources/styles/boxnow-frontend/index.scss":
/*!*****************************************************!*\
  !*** ./resources/styles/boxnow-frontend/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=boxnow-frontend-56b9b5dfa9232208e1f4.js.map