(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(131);

var _vue = __webpack_require__(127);

var _vue2 = _interopRequireDefault(_vue);

var _Admin = __webpack_require__(347);

var _Admin2 = _interopRequireDefault(_Admin);

var _vueClipboard = __webpack_require__(141);

var _vueClipboard2 = _interopRequireDefault(_vueClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueClipboard2.default);

exports.default = new _vue2.default({
	el: '#woo-bg--boxnow-admin',
	render: function render(h) {
		return h(_Admin2.default);
	}
});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var Clipboard = __webpack_require__(142) // FIXME: workaround for browserify

var VueClipboardConfig = {
  autoSetContainer: false,
  appendToBody: true // This fixes IE, see #50
}

var VueClipboard = {
  install: function (Vue) {
    var globalPrototype = Vue.version.slice(0, 2) === '3.' ? Vue.config.globalProperties : Vue.prototype
    globalPrototype.$clipboardConfig = VueClipboardConfig
    globalPrototype.$copyText = function (text, container) {
      return new Promise(function (resolve, reject) {
        var fakeElement = document.createElement('button')
        var clipboard = new Clipboard(fakeElement, {
          text: function () { return text },
          action: function () { return 'copy' },
          container: typeof container === 'object' ? container : document.body
        })
        clipboard.on('success', function (e) {
          clipboard.destroy()
          resolve(e)
        })
        clipboard.on('error', function (e) {
          clipboard.destroy()
          reject(e)
        })
        if (VueClipboardConfig.appendToBody) document.body.appendChild(fakeElement)
        fakeElement.click()
        if (VueClipboardConfig.appendToBody) document.body.removeChild(fakeElement)
      })
    }

    Vue.directive('clipboard', {
      bind: function (el, binding, vnode) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value
        } else {
          var clipboard = new Clipboard(el, {
            text: function () { return binding.value },
            action: function () { return binding.arg === 'cut' ? 'cut' : 'copy' },
            container: VueClipboardConfig.autoSetContainer ? el : undefined
          })
          clipboard.on('success', function (e) {
            var callback = el._vClipboard_success
            callback && callback(e)
          })
          clipboard.on('error', function (e) {
            var callback = el._vClipboard_error
            callback && callback(e)
          })
          el._vClipboard = clipboard
        }
      },
      update: function (el, binding) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value
        } else {
          el._vClipboard.text = function () { return binding.value }
          el._vClipboard.action = function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
        }
      },
      unbind: function (el, binding) {
        // FIXME: investigate why $element._vClipboard was missing
        if (!el._vClipboard) return
        if (binding.arg === 'success') {
          delete el._vClipboard_success
        } else if (binding.arg === 'error') {
          delete el._vClipboard_error
        } else {
          el._vClipboard.destroy()
          delete el._vClipboard
        }
      }
    })
  },
  config: VueClipboardConfig
}

if (true) {
  module.exports = VueClipboard
} else {}


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var e=n(279),i=n.n(e),e=n(370),u=n.n(e),e=n(817),r=n.n(e);function c(t){try{return document.execCommand(t)}catch(t){return}}var a=function(t){t=r()(t);return c("cut"),t};function o(t,e){var n,o,t=(n=t,o="rtl"===document.documentElement.getAttribute("dir"),(t=document.createElement("textarea")).style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,t.style.top="".concat(o,"px"),t.setAttribute("readonly",""),t.value=n,t);return e.container.appendChild(t),e=r()(t),c("copy"),t.remove(),e}var f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=o(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=o(t.value,e):(n=r()(t),c("copy")),n};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?f(t,{container:o}):e?"cut"===n?a(e):f(e,{container:o}):void 0};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=v(n);return t=o?(t=v(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==p(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var b=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,i());var t,e,n,o=h(r);function r(t,e){var n;return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return t=r,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return a(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",t=s({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){t=m("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),r}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var u=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=u(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var f=n(879),l=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!f.string(e))throw new TypeError("Second argument must be a String");if(!f.fn(n))throw new TypeError("Third argument must be a Function");if(f.node(t))return c=e,a=n,(u=t).addEventListener(c,a),{destroy:function(){u.removeEventListener(c,a)}};if(f.nodeList(t))return o=t,r=e,i=n,Array.prototype.forEach.call(o,function(t){t.addEventListener(r,i)}),{destroy:function(){Array.prototype.forEach.call(o,function(t){t.removeEventListener(r,i)})}};if(f.string(t))return t=t,e=e,n=n,l(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,u,c,a}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,u=o.length;i<u;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}var n,r});

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cloneDeep = __webpack_require__(128);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(8);

var _qs2 = _interopRequireDefault(_qs);

var _vueMultiselect = __webpack_require__(130);

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { Multiselect: _vueMultiselect2.default },
	data: function data() {
		return {
			loading: false,
			shipmentStatus: '',
			labelData: wooBg_boxnow.label,
			otherLabels: wooBg_boxnow.othersLabels ? wooBg_boxnow.othersLabels : [],
			document: $(document.body),
			destination: '',
			destinations: (0, _cloneDeep2.default)(wooBg_boxnow.destinations),
			origin: '',
			origins: (0, _cloneDeep2.default)(wooBg_boxnow.origins),
			i18n: wooBg_boxnow.i18n,
			cookie_data: (0, _cloneDeep2.default)(wooBg_boxnow.cookie_data),
			declaredValue: '',
			allowReturn: false,
			message: '',
			operations: [],
			boxSize: '',
			boxSizes: [{
				id: '1',
				label: wooBg_boxnow.i18n.smallBox
			}, {
				id: '2',
				label: wooBg_boxnow.i18n.mediumBox
			}, {
				id: '3',
				label: wooBg_boxnow.i18n.largeBox
			}]
		};
	},

	computed: {
		iframes: function iframes() {
			var links = [];

			if (this.shipmentStatus.id !== "undefined") {
				this.shipmentStatus.parcels.forEach(function (parcel) {
					var link = woocommerce_admin.ajax_url + '?cache-buster=' + Math.random() + '&action=woo_bg_boxnow_print_label&parcel=' + parcel.id;
					links.push(link);
				});
			}

			return links;
		},
		otherIframes: function otherIframes() {
			var links = [];

			if (this.otherLabels.length) {
				this.otherLabels.forEach(function (label) {
					var link = woocommerce_admin.ajax_url + '?cache-buster=' + Math.random() + '&action=woo_bg_boxnow_print_label&parcel=' + label.shipmentStatus.parcels[0].id;
					links.push(link);
				});
			}

			return links;
		},
		statuses: function statuses() {
			var statuses = [];

			if (this.operations.length) {
				this.operations.forEach(function (status) {
					var details = status.description;

					if (typeof status.comment !== 'undefined') {
						details += ' - ' + status.comment;
					}

					var time = new Date(status.dateTime).toLocaleString();

					statuses.push({
						time: time,
						details: details
					});
				});

				statuses.reverse();
			}

			return statuses;
		}
	},
	mounted: function mounted() {
		var _this = this;

		if (wooBg_boxnow.shipmentStatus) {
			this.shipmentStatus = wooBg_boxnow.shipmentStatus;
		}

		this.document.on('change', 'input[name="label_size"]', function () {
			_this.size = $(this).val();
		});

		this.destinations.forEach(function (destination) {
			if (destination.id == wooBg_boxnow.cookie_data.selectedApm) {
				_this.destination = destination;
			}
		});

		this.origins.forEach(function (origin) {
			if (origin.id == wooBg_boxnow.origin) {
				_this.origin = origin;
			}
		});

		this.labelData.items.forEach(function (item) {
			_this.boxSizes.forEach(function (size) {
				if (size.id == item.compartmentSize) {
					item.compartmentSize = size;
				}
			});
		});

		if (typeof wooBg_boxnow.label.amountToBeCollected !== 'undefined') {
			this.declaredValue = wooBg_boxnow.label.amountToBeCollected;
		}

		if (typeof wooBg_boxnow.allowReturn !== 'undefined') {
			this.allowReturn = wooBg_boxnow.allowReturn;
		}

		if (wooBg_boxnow.operations) {
			this.operations = wooBg_boxnow.operations;
		}
	},

	methods: {
		addParcel: function addParcel() {
			var parcels = this.labelData.items || [];

			var template = void 0;

			if (parcels.length > 0) {
				template = (0, _cloneDeep2.default)(parcels[0]);

				if (template.id) {
					delete template.id;
				}
			} else {
				template = {
					name: '',
					value: 1,
					weight: 1,
					compartmentSize: {
						id: '2',
						label: wooBg_boxnow.i18n.mediumBox
					}
				};
			}

			parcels.push(template);
			this.$set(this.labelData, 'items', parcels);
		},
		removeParcel: function removeParcel(index) {
			var parcels = this.labelData.items;

			if (!Array.isArray(parcels) || parcels.length <= 1) {
				return;
			}

			parcels.splice(index, 1);
			this.$set(this.labelData, 'items', parcels);
		},
		updateLabel: function updateLabel(e) {
			e.preventDefault();

			this.loading = true;
			var _this = this;
			_this.message = '';

			this.labelData.items.forEach(function (item) {
				item.compartmentSize = item.compartmentSize.id;
			});

			var data = {
				orderId: wooBg_boxnow.orderId,
				origin: this.origin,
				destination: this.destination,
				declaredValue: this.declaredValue,
				items: this.labelData.items,
				allowReturn: this.allowReturn,
				action: 'woo_bg_boxnow_generate_label',
				nonce: wooBg_boxnow.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				_this.loading = false;
				if (response.data.data.message) {
					_this.message = response.data.data.message;

					_this.labelData.items.forEach(function (item) {
						_this.boxSizes.forEach(function (size) {
							if (size.id == item.compartmentSize) {
								item.compartmentSize = size;
							}
						});
					});
				} else {
					_this.shipmentStatus = (0, _cloneDeep2.default)(response.data.data.shipmentStatus, true);
					_this.labelData = (0, _cloneDeep2.default)(response.data.data.label, true);

					_this.labelData.items.forEach(function (item) {
						_this.boxSizes.forEach(function (size) {
							if (size.id == item.compartmentSize) {
								item.compartmentSize = size;
							}
						});
					});

					if (response.data.data.otherLabels) {
						_this.otherLabels = (0, _cloneDeep2.default)(response.data.data.otherLabels, true);
					}
				}
			});
		},
		deleteLabel: function deleteLabel(e) {
			e.preventDefault();

			this.loading = true;
			var _this = this;
			_this.message = '';

			var data = {
				orderId: wooBg_boxnow.orderId,
				shipmentStatus: this.shipmentStatus,
				action: 'woo_bg_boxnow_delete_label',
				nonce: wooBg_boxnow.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {

				_this.shipmentStatus = '';
				_this.operations = '';
				_this.loading = false;
			});
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('div', { staticClass: "panel-wrap woocommerce woocommerce--boxnow ajax-container", attrs: { "data-loading": _vm.loading } }, [_c('div', { staticClass: "panel woocommerce-order-data", attrs: { "id": "order_data" } }, [_c('div', { staticClass: "order_data_column_container" }, [_c('div', { staticClass: "order_data_column order_data_column--half" }, [_c('h3', [_vm._v(_vm._s(_vm.i18n.labelData))]), _vm._v(" "), _c('form', [_c('h4', [_vm._v(_vm._s(_vm.i18n.sendFrom))]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.warehouseApm) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "name", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.origins), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref) {
        var option = _ref.option;
        return [_c('strong', [_vm._v(_vm._s(option.name))])];
      } }]), model: { value: _vm.origin, callback: function callback($$v) {
        _vm.origin = $$v;
      }, expression: "origin" } })], 1), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.i18n.sendTo))]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.apm) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "name", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.destinations), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref2) {
        var option = _ref2.option;
        return [_c('strong', [_vm._v(_vm._s(option.name))])];
      } }]), model: { value: _vm.destination, callback: function callback($$v) {
        _vm.destination = $$v;
      }, expression: "destination" } })], 1), _vm._v(" "), _vm._l(_vm.labelData.items, function (parsel, key) {
    return _c('fieldset', { key: key }, [_c('legend', [_vm._v(_vm._s(_vm.i18n.pack) + " " + _vm._s(key + 1))]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.boxSize) + ":\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "label", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.boxSizes), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref3) {
          var option = _ref3.option;
          return [_c('strong', [_vm._v(_vm._s(option.label))])];
        } }], null, true), model: { value: parsel.compartmentSize, callback: function callback($$v) {
          _vm.$set(parsel, "compartmentSize", $$v);
        }, expression: "parsel.compartmentSize" } })], 1), _vm._v(" "), typeof parsel.name !== 'undefined' ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.name) + ":\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: parsel.name, expression: "parsel.name" }], attrs: { "type": "text" }, domProps: { "value": parsel.name }, on: { "input": function input($event) {
          if ($event.target.composing) return;_vm.$set(parsel, "name", $event.target.value);
        } } })]) : _vm._e(), _vm._v(" "), typeof parsel.weight !== 'undefined' ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.weight) + ":\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: parsel.weight, expression: "parsel.weight" }], attrs: { "type": "number", "step": "0.001" }, domProps: { "value": parsel.weight }, on: { "input": function input($event) {
          if ($event.target.composing) return;_vm.$set(parsel, "weight", $event.target.value);
        } } })]) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-secondary", attrs: { "type": "button", "disabled": _vm.labelData.items.length === 1 }, on: { "click": function click($event) {
          return _vm.removeParcel(key);
        } } }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.removePack) + "\n\t\t\t\t\t\t\t")])])]);
  }), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-secondary", attrs: { "type": "button" }, on: { "click": _vm.addParcel } }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.addPack) + "\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.total) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.declaredValue, expression: "declaredValue" }], attrs: { "type": "number", "step": "0.01" }, domProps: { "value": _vm.declaredValue }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.declaredValue = $event.target.value;
      } } })]), _vm._v(" "), _c('p', { staticClass: "form-field form-field--checkbox" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.allowReturn) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.allowReturn, expression: "allowReturn" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.allowReturn) ? _vm._i(_vm.allowReturn, null) > -1 : _vm.allowReturn }, on: { "change": function change($event) {
        var $$a = _vm.allowReturn,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);if ($$el.checked) {
            $$i < 0 && (_vm.allowReturn = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.allowReturn = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.allowReturn = $$c;
        }
      } } })]), _vm._v(" "), _vm.shipmentStatus ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-secondary", attrs: { "name": "save", "type": "submit", "value": _vm.i18n.deleteLabel }, on: { "click": _vm.deleteLabel } }, [_vm._v(_vm._s(_vm.i18n.deleteLabel))])]) : _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-primary woocommerce-save-button", attrs: { "name": "save", "type": "submit", "value": _vm.i18n.generateLabel }, on: { "click": _vm.updateLabel } }, [_vm._v(_vm._s(_vm.i18n.generateLabel))])])], 2), _vm._v(" "), _c('div', { staticClass: "clear" }), _vm._v(" "), _vm.message ? _c('div', { staticClass: "notice notice-error notice-alt" }, [_c('p', [_vm._v(_vm._s(_vm.message))])]) : _vm._e()]), _vm._v(" "), _c('div', { staticClass: "order_data_column order_data_column--half" }, [_vm.shipmentStatus ? _c('div', { staticClass: "generated-label" }, [_vm._l(_vm.iframes, function (iframe, key) {
    return _vm.iframes.length ? _c('div', [_c('h3', [_vm._v(_vm._s(_vm.i18n.label) + ": " + _vm._s(_vm.shipmentStatus.parcels[key].id))]), _vm._v(" "), _c('iframe', { attrs: { "id": "woo-bg--boxnow-label-print", "src": iframe } })]) : _vm._e();
  }), _vm._v(" "), _vm._l(_vm.otherIframes, function (iframe, key) {
    return _vm.otherIframes.length ? _c('div', [_c('h3', [_vm._v(_vm._s(_vm.i18n.label) + ": " + _vm._s(_vm.otherLabels[key].shipmentStatus.parcels[0].id))]), _vm._v(" "), _c('iframe', { attrs: { "id": "woo-bg--boxnow-label-print", "src": iframe } })]) : _vm._e();
  })], 2) : _vm._e()])]), _vm._v(" "), _vm.statuses.length ? _c('div', { staticClass: "woocommerce_order_status" }, [_c('h3', [_vm._v(_vm._s(_vm.i18n.shipmentStatus))]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(" " + _vm._s(_vm.i18n.time) + " ")]), _vm._v(" "), _c('th', [_vm._v(" " + _vm._s(_vm.i18n.details) + " ")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.statuses, function (status, key) {
    return _c('tr', [_c('th', [_vm._v(" " + _vm._s(status.time) + " ")]), _vm._v(" "), _c('th', [_vm._v(" " + _vm._s(status.details) + " ")])]);
  }), 0)])]) : _vm._e()]), _vm._v(" "), _c('div', { staticClass: "clear" })]);
};
var staticRenderFns = [];

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__, "staticRenderFns")) __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_2634ab78__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);