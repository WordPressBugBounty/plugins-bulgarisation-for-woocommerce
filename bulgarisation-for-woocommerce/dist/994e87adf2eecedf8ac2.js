(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.apm = undefined;

__webpack_require__(131);

var _vue = __webpack_require__(127);

var _vue2 = _interopRequireDefault(_vue);

var _Apm = __webpack_require__(345);

var _Apm2 = _interopRequireDefault(_Apm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apm = exports.apm = _vue2.default.extend({
	render: function render(h) {
		return h(_Apm2.default);
	}
});

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(31);

var _cloneDeep = __webpack_require__(128);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(8);

var _qs2 = _interopRequireDefault(_qs);

var _vueMultiselect = __webpack_require__(130);

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

__webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { Multiselect: _vueMultiselect2.default },
	data: function data() {
		return {
			countryField: $('#billing_country'),
			Address1Field: '',
			selectedApm: [],
			apms: [],
			error: '',
			document: $(document.body),
			i18n: wooBg_boxnow.i18n
		};
	},

	computed: {
		apmLocatorUrl: function apmLocatorUrl() {
			var url = this.baseIframeUrl + '/popup.html?gps=yes&autoselect=yes&autoclose=yes';
			var _this = this;

			setTimeout(function () {
				_this.initApmLocator();
			}, 50);

			return url;
		},
		baseIframeUrl: function baseIframeUrl() {
			var url = 'https://widget-v5.boxnow.bg';

			if (this.countryField.val() === 'GR') {
				url = 'https://widget-v5.boxnow.gr';
			} else if (this.countryField.val() === 'CY') {
				url = 'https://widget-v5.boxnow.cy';
			}

			return url;
		}
	},
	mounted: function mounted() {
		var _this = this;
		this.loadLocalStorage();

		this.checkFields();

		$('#ship-to-different-address-checkbox').on('change', function () {
			_this.checkFields();
		});

		this.loadApms();

		this.initApmLocator();

		this.document.on('update_checkout.onUpdate', this.onUpdate);

		if (window.boxnowApmInitialUpdate) {
			this.document.trigger('update_checkout');
			window.boxnowApmInitialUpdate = false;
			this.setAddress1FieldData();
		}
	},

	methods: {
		setApmFromLocator: function setApmFromLocator(message) {
			if (message.origin !== this.baseIframeUrl) {
				return;
			}

			var apmID = message.data.boxnowLockerId;

			if (this.apms.length) {
				var _this = this;

				this.apms.forEach(function (apm) {
					if (apm.id == apmID) {
						_this.selectedApm = apm;
						_this.setApm();
					}
				});
			}
			$.magnificPopup.close();
		},
		initApmLocator: function initApmLocator() {
			$('#woo-bg--boxnow-apm-locator').magnificPopup({
				type: 'iframe',
				midClick: true,
				iframe: {
					markup: '<iframe class="mfp-iframe" src="' + this.baseIframeUrl + '/popup.html?gps=yes&autoselect=yes&autoclose=yes" frameborder="0" allowfullscreen></iframe>'
				},
				callbacks: {
					open: function open() {
						$('.mfp-iframe').css("width", "100%");
						$('.mfp-iframe').css("height", "100%");
						$('.mfp-bg.mfp-ready').css("background", "none");
						$('.mfp-container').css("padding", "0");
						$('.mfp-content').css("max-width", "100%");
						$('.mfp-content').css("height", "100%");
					}
				}
			});

			window.addEventListener('message', this.setApmFromLocator, false);
		},
		compileLabel: function compileLabel(_ref) {
			var name = _ref.name,
			    addressLine1 = _ref.addressLine1,
			    addressLine2 = _ref.addressLine2;

			return name + ' (' + addressLine2 + ' - ' + addressLine1 + ')';
		},
		checkFields: function checkFields() {

			if ($('#ship-to-different-address-checkbox').is(":checked")) {
				this.countryField = $('#shipping_country');
				this.Address1Field = $('#shipping_address_1');
			} else {
				this.countryField = $('#billing_country');
				this.Address1Field = $('#billing_address_1');
			}
		},
		loadLocalStorage: function loadLocalStorage() {
			var localStorageData = localStorage.getItem('woo-bg--boxnow-apm');
			if (localStorageData) {
				localStorageData = JSON.parse(localStorageData);
				this.apms = (0, _cloneDeep2.default)(localStorageData.apms);
				this.selectedApm = (0, _cloneDeep2.default)(localStorageData.selectedApm);
			}
		},
		loadApms: function loadApms() {
			this.loading = true;

			var _this = this;
			var data = {
				action: 'woo_bg_boxnow_load_apms',
				country: this.countryField.val()
			};

			_axios2.default.post(woocommerce_params.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				_this.error = '';
				var selectedApm = [];

				if (response.data.data.apms.length) {
					_this.apms = (0, _cloneDeep2.default)(response.data.data.apms);
				} else {
					_this.error = response.data.data.error;
					_this.resetData();
				}

				_this.apms.forEach(function (apm) {
					if (_this.selectedApm && _this.selectedApm.id == apm.id) {
						selectedApm = apm;
					}
				});

				_this.selectedApm = (0, _cloneDeep2.default)(selectedApm);
				_this.setCookieData();

				_this.loading = false;
			}).catch(function (error) {
				_this.message = "Имаше проблем. За повече информация вижте конзолата.";
				console.log(error);
				_this.loading = false;
			});
		},
		setApm: function setApm() {
			this.setLocalStorageData();
			this.setAddress1FieldData();

			this.document.trigger('update_checkout');
		},
		setCookieData: function setCookieData() {
			var cookie = {
				selectedApm: this.selectedApm ? this.selectedApm.id : null,
				payment: $('input[name="payment_method"]:checked').val()
			};

			cookie = encodeURIComponent(JSON.stringify(cookie));

			(0, _utils.setCookie)('woo-bg--boxnow-apm', cookie, 1);
		},
		setLocalStorageData: function setLocalStorageData() {
			var localStorageData = {
				selectedApm: this.selectedApm,
				apms: this.apms
			};

			localStorage.setItem('woo-bg--boxnow-apm', JSON.stringify(localStorageData));
		},
		resetData: function resetData() {
			this.apms = (0, _cloneDeep2.default)([]);
			this.selectedApm = '';
			localStorage.removeItem('woo-bg--boxnow-apm');
			this.setCookieData();
		},
		setAddress1FieldData: function setAddress1FieldData() {
			var shippingAddress = "";

			if (this.selectedApm && this.selectedApm.name) {
				shippingAddress = this.i18n.toApm + this.selectedApm.name + ' ( ' + this.selectedApm.addressLine2 + ' - ' + this.selectedApm.addressLine1 + ' ) ';
			}

			this.Address1Field.val(shippingAddress);
		},
		triggerUpdateCheckout: function triggerUpdateCheckout() {
			this.document.trigger('update_checkout');
		},
		onUpdate: function onUpdate() {
			this.setCookieData();
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.document.off('update_checkout.setCookieApm');
		this.document.off('update_checkout.onUpdate');

		window.removeEventListener('message', this.setApmFromLocator, false);
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('div', { staticClass: "woo-bg--boxnow-delivery" }, [_vm.error ? _c('div', { staticClass: "woo-bg--apm-error" }, [_vm._v(_vm._s(_vm.error))]) : _c('div', [_c('multiselect', { staticClass: "woo-bg-multiselect", attrs: { "id": "ajax", "placeholder": "", "track-by": "id", "label": "name", "deselect-label": "", "open-direction": "bottom", "options-limit": 1000, "limit": 6, "max-height": 600, "selectedLabel": _vm.i18n.selected, "selectLabel": _vm.i18n.select, "options": _vm.apms, "custom-label": _vm.compileLabel, "multiple": false, "searchable": true, "show-no-results": true }, on: { "input": _vm.setApm }, model: { value: _vm.selectedApm, callback: function callback($$v) {
        _vm.selectedApm = $$v;
      }, expression: "selectedApm" } }, [_c('span', { attrs: { "slot": "noResult" }, slot: "noResult" }, [_vm._v(_vm._s(_vm.i18n.noResult))]), _vm._v(" "), _c('span', { attrs: { "slot": "noOptions" }, slot: "noOptions" }, [_vm._v(_vm._s(_vm.i18n.noOptions))]), _vm._v(" "), _c('span', { attrs: { "slot": "placeholder" }, slot: "placeholder" }, [_vm._v(_vm._s(_vm.i18n.searchApm))])]), _vm._v(" "), _c('a', { attrs: { "id": "woo-bg--boxnow-apm-locator", "href": _vm.apmLocatorUrl } }, [_vm._v(_vm._s(_vm.i18n.apmLocator))])], 1)]);
};
var staticRenderFns = [];

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var _Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Apm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__, "staticRenderFns")) __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Apm_vue_vue_type_template_id_0cdff5fc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);