(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(131);

var _vue = __webpack_require__(127);

var _vue2 = _interopRequireDefault(_vue);

var _Admin = __webpack_require__(331);

var _Admin2 = _interopRequireDefault(_Admin);

var _vueClipboard = __webpack_require__(141);

var _vueClipboard2 = _interopRequireDefault(_vueClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueClipboard2.default);

exports.default = new _vue2.default({
	el: '#woo-bg--cvc-admin',
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 181:
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
			type: '',
			types: [{
				id: 'office',
				label: wooBg_cvc.i18n.office
			}, {
				id: 'address',
				label: wooBg_cvc.i18n.address
			}],
			paymentType: wooBg_cvc.paymentType,
			paymentBy: '',
			paymentByTypes: [{
				id: 'rec',
				label: wooBg_cvc.i18n.buyer
			}, {
				id: 'sender',
				label: wooBg_cvc.i18n.sender
			}, {
				id: 'fixed',
				label: wooBg_cvc.i18n.fixedPrice
			}],
			size: '',
			shipmentStatus: '',
			labelData: wooBg_cvc.label,
			document: $(document.body),
			office: '',
			offices: (0, _cloneDeep2.default)(wooBg_cvc.offices),
			street: '',
			streets: (0, _cloneDeep2.default)(wooBg_cvc.streets),
			testOption: '',
			testsOptions: (0, _cloneDeep2.default)(wooBg_cvc.testsOptions),
			streetNumber: '',
			other: '',
			message: '',
			i18n: wooBg_cvc.i18n,
			cookie_data: (0, _cloneDeep2.default)(wooBg_cvc.cookie_data),
			declaredValue: '',
			shipmentActions: []
		};
	},

	watch: {},
	computed: {
		iframeUrl: function iframeUrl() {
			return this.shipmentStatus.pdf.replace(/^https?:/, '');
		},
		labelJSON: function labelJSON() {
			return JSON.stringify(this.labelData);
		},
		statuses: function statuses() {
			var statuses = [];
			if (this.shipmentActions.length) {
				this.shipmentActions.forEach(function (status) {
					var details = status.status;
					if (status.by_person) {
						details += ' : ' + status.by_person;
					}

					statuses.push({
						time: status.status_date,
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

		if (wooBg_cvc.shipmentStatus) {
			this.shipmentStatus = wooBg_cvc.shipmentStatus;
		}

		this.types.forEach(function (type) {
			if (type.id == wooBg_cvc.cookie_data.type) {
				_this.type = type;
			}
		});

		this.testsOptions.forEach(function (option) {
			if (option.id == wooBg_cvc.testOption) {
				_this.testOption = option;
			}
		});

		if (wooBg_cvc.cookie_data.type == 'office') {
			this.offices.forEach(function (office) {
				if (office.id == wooBg_cvc.cookie_data.selectedOffice) {
					_this.office = office;
				}
			});
		} else {
			this.streetNumber = wooBg_cvc.cookie_data.streetNumber;
			this.other = wooBg_cvc.cookie_data.other;
			this.streets.forEach(function (street) {
				if (street.orig_key == wooBg_cvc.cookie_data.selectedAddress.orig_key) {
					_this.street = street;
				}
			});
		}

		this.paymentBy = this.paymentByTypes[0];

		if (wooBg_cvc.cookie_data.fixed_price) {
			this.paymentBy = this.paymentByTypes[2];
		} else if (wooBg_cvc.label.payer == 'sender' || wooBg_cvc.label.payer == 'contract') {
			this.paymentBy = this.paymentByTypes[1];
		}

		if (wooBg_cvc.label.os_value) {
			this.declaredValue = wooBg_cvc.label.os_value;
		}

		if (wooBg_cvc.actions) {
			this.shipmentActions = wooBg_cvc.actions;
		}
	},

	methods: {
		onCopy: function onCopy(e) {
			alert(this.i18n.copyLabelDataMessage);
		},
		updateLabel: function updateLabel(e) {
			e.preventDefault();

			this.loading = true;
			var _this = this;
			_this.message = '';

			var data = {
				type: this.type,
				label_data: this.labelData,
				office: this.office,
				street: this.street,
				streetNumber: this.streetNumber,
				other: this.other,
				paymentBy: this.paymentBy,
				testOption: this.testOption,
				cookie_data: this.cookie_data,
				orderId: wooBg_cvc.orderId,
				declaredValue: this.declaredValue,
				action: 'woo_bg_cvc_generate_label',
				nonce: wooBg_cvc.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				_this.loading = false;
				if (response.data.data.message) {
					_this.message = response.data.data.message;
				} else {
					_this.shipmentStatus = (0, _cloneDeep2.default)(response.data.data.shipmentStatus, true);
					_this.labelData = (0, _cloneDeep2.default)(response.data.data.label, true);
					_this.size = 'refresh';
				}
			});
		},
		updateActions: function updateActions(e) {
			e.preventDefault();

			this.loading = true;
			var _this = this;
			_this.message = '';

			var data = {
				orderId: wooBg_cvc.orderId,
				shipmentStatus: this.shipmentStatus,
				action: 'woo_bg_cvc_update_actions',
				nonce: wooBg_cvc.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				_this.loading = false;

				if (response.data.data.message) {
					_this.message = response.data.data.message;
				} else {
					_this.shipmentActions = (0, _cloneDeep2.default)(response.data.data.actions, true);
				}
			});
		},
		deleteLabel: function deleteLabel(e) {
			e.preventDefault();

			this.loading = true;
			var _this = this;
			_this.message = '';

			var data = {
				orderId: wooBg_cvc.orderId,
				shipmentStatus: this.shipmentStatus,
				action: 'woo_bg_cvc_delete_label',
				nonce: wooBg_cvc.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {

				_this.shipmentStatus = null;
				_this.shipmentActions = [];
				_this.loading = false;
				_this.size = 'refresh';

				setTimeout(function () {
					_this.document.find('input[name="label_size"]:checked').trigger('change');
				}, 10);
			});
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('div', { staticClass: "panel-wrap woocommerce woocommerce--cvc ajax-container", attrs: { "data-loading": _vm.loading } }, [_c('div', { staticClass: "panel woocommerce-order-data", attrs: { "id": "order_data" } }, [_c('div', { staticClass: "order_data_column_container" }, [_c('div', { staticClass: "order_data_column order_data_column--half" }, [_c('h3', [_vm._v(_vm._s(_vm.i18n.labelData))]), _vm._v(" "), _c('form', [_vm.type.id == 'office' ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.office) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "name_bg", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.offices), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref) {
        var option = _ref.option;
        return [_c('strong', [_vm._v(_vm._s(option.name_bg))])];
      } }], null, false, 3192572209), model: { value: _vm.office, callback: function callback($$v) {
        _vm.office = $$v;
      }, expression: "office" } })], 1) : _vm._e(), _vm._v(" "), _vm.type.id == 'address' ? _c('div', [_c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.streetQuarter) + ":\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "label", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.streets), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref2) {
        var option = _ref2.option;
        return [_c('strong', [_vm._v(_vm._s(option.label))])];
      } }], null, false, 275817578), model: { value: _vm.street, callback: function callback($$v) {
        _vm.street = $$v;
      }, expression: "street" } })], 1), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_vm.street.type && _vm.street.type === 'streets' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.streetNumber, expression: "streetNumber" }], staticClass: "woo-bg-multiselect--additional-field", attrs: { "placeholder": _vm.i18n.streetNumber, "type": "text" }, domProps: { "value": _vm.streetNumber }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.streetNumber = $event.target.value;
      } } }) : _vm._e(), _vm._v(" "), _vm.street.type && _vm.street.type === 'quarters' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.other, expression: "other" }], staticClass: "woo-bg-multiselect--additional-field", attrs: { "placeholder": _vm.i18n.blVhEt, "type": "text" }, domProps: { "value": _vm.other }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.other = $event.target.value;
      } } }) : _vm._e()]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_vm.street.type && _vm.street.type === 'streets' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.other, expression: "other" }], staticClass: "woo-bg-multiselect--additional-field", attrs: { "placeholder": _vm.i18n.blVhEt, "type": "text" }, domProps: { "value": _vm.other }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.other = $event.target.value;
      } } }) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.labelData.total_parcels ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.packCount) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.labelData.total_parcels, expression: "labelData.total_parcels" }], attrs: { "type": "number" }, domProps: { "value": _vm.labelData.total_parcels }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.$set(_vm.labelData, "total_parcels", $event.target.value);
      } } })]) : _vm._e(), _vm._v(" "), _vm.paymentType === 'cod' ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.cd) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.labelData.cod_amount, expression: "labelData.cod_amount" }], attrs: { "type": "number" }, domProps: { "value": _vm.labelData.cod_amount }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.$set(_vm.labelData, "cod_amount", $event.target.value);
      } } })]) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.declaredValue) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.declaredValue, expression: "declaredValue" }], attrs: { "type": "number" }, domProps: { "value": _vm.declaredValue }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.declaredValue = $event.target.value;
      } } })]), _vm._v(" "), _vm.labelData.total_kgs ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.weight) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.labelData.total_kgs, expression: "labelData.total_kgs" }], attrs: { "type": "number" }, domProps: { "value": _vm.labelData.total_kgs }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.$set(_vm.labelData, "total_kgs", $event.target.value);
      } } })]) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.description) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.labelData.description, expression: "labelData.description" }], attrs: { "type": "text" }, domProps: { "value": _vm.labelData.description }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.$set(_vm.labelData, "description", $event.target.value);
      } } })]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.deliveryPayedBy) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "label", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.paymentByTypes), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c('strong', [_vm._v(_vm._s(option.label))])];
      } }]), model: { value: _vm.paymentBy, callback: function callback($$v) {
        _vm.paymentBy = $$v;
      }, expression: "paymentBy" } })], 1), _vm._v(" "), _vm.paymentBy.id === 'fixed' ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.fixedPrice) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.cookie_data.fixed_price, expression: "cookie_data.fixed_price" }], attrs: { "type": "number" }, domProps: { "value": _vm.cookie_data.fixed_price }, on: { "input": function input($event) {
        if ($event.target.composing) return;_vm.$set(_vm.cookie_data, "fixed_price", $event.target.value);
      } } })]) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_c('label', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.reviewAndTest) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "label", "selectedLabel": _vm.i18n.selected, "placeholder": _vm.i18n.choose, "options": Object.values(_vm.testsOptions), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref4) {
        var option = _ref4.option;
        return [_c('strong', [_vm._v(_vm._s(option.label))])];
      } }]), model: { value: _vm.testOption, callback: function callback($$v) {
        _vm.testOption = $$v;
      }, expression: "testOption" } })], 1), _vm._v(" "), !_vm.shipmentStatus ? _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-primary woocommerce-save-button", attrs: { "name": "save", "type": "submit", "value": _vm.i18n.generateLabel }, on: { "click": _vm.updateLabel } }, [_vm._v(_vm._s(_vm.i18n.generateLabel))])]) : _c('p', { staticClass: "form-field form-field-wide" }, [_c('button', { staticClass: "button-primary woocommerce-save-button", attrs: { "name": "save", "type": "submit", "value": _vm.i18n.updateShipmentStatus }, on: { "click": _vm.updateActions } }, [_vm._v(_vm._s(_vm.i18n.updateShipmentStatus))])]), _vm._v(" "), _c('p', { staticClass: "form-field form-field-wide" }, [_vm.shipmentStatus ? _c('button', { staticClass: "button-secondary", attrs: { "name": "save", "type": "submit", "value": _vm.i18n.deleteLabel }, on: { "click": _vm.deleteLabel } }, [_vm._v(_vm._s(_vm.i18n.deleteLabel))]) : _vm._e(), _vm._v(" "), _c('a', { directives: [{ name: "clipboard", rawName: "v-clipboard:copy", value: _vm.labelJSON, expression: "labelJSON", arg: "copy" }, { name: "clipboard", rawName: "v-clipboard:success", value: _vm.onCopy, expression: "onCopy", arg: "success" }], staticClass: "button-secondary" }, [_vm._v(_vm._s(_vm.i18n.copyLabelData))])])]), _vm._v(" "), _c('div', { staticClass: "clear" }), _vm._v(" "), _vm.message ? _c('div', { staticClass: "notice notice-error notice-alt" }, [_c('p', [_vm._v(_vm._s(_vm.message))])]) : _vm._e()]), _vm._v(" "), _c('div', { staticClass: "order_data_column order_data_column--half" }, [_vm.shipmentStatus ? _c('div', { staticClass: "generated-label" }, [_c('h3', [_vm._v(_vm._s(_vm.i18n.label) + ": " + _vm._s(_vm.shipmentStatus.wb))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('iframe', { attrs: { "id": "woo-bg--cvc-label-print", "src": _vm.iframeUrl } })]) : _vm._e()])]), _vm._v(" "), _vm.statuses.length ? _c('div', { staticClass: "woocommerce_order_status" }, [_c('h3', [_vm._v(_vm._s(_vm.i18n.shipmentStatus))]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(" " + _vm._s(_vm.i18n.time) + " ")]), _vm._v(" "), _c('th', [_vm._v(" " + _vm._s(_vm.i18n.details) + " ")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.statuses, function (status, key) {
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

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);
/* harmony import */ var _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__, "staticRenderFns")) __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_35678977__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);