(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/import-glob!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(/*! ../../../utils */ "./resources/scripts/utils/index.js");

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

var _qs2 = _interopRequireDefault(_qs);

var _vueMultiselect = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { Multiselect: _vueMultiselect2.default },
	data: function data() {
		return {
			countryField: $('#billing_country'),
			Address1Field: $('#billing_address_1'),
			Address2Field: $('#billing_address_2'),
			stateField: $('#billing_state'),
			cityField: $('#billing_city'),
			firstNameField: $('#billing_first_name'),
			lastNameField: $('#billing_last_name'),
			phoneField: $('#billing_phone'),
			selectedAddress: [],
			addresses: [],
			state: '',
			city: '',
			streetNumber: '',
			other: '',
			isLoading: false,
			document: $(document.body),
			i18n: wooBg_cvc_address.i18n
		};
	},

	computed: {
		closeOnSelect: function closeOnSelect() {
			return this.city ? true : false;
		}
	},
	mounted: function mounted() {
		var _this = this;
		this.loadLocalStorage();

		this.checkFields();

		$('#ship-to-different-address-checkbox').on('change', function () {
			_this.checkFields();
		});

		this.loadCity();

		$('form.checkout').on('checkout_place_order', function (e) {
			$('#billing_address_1').attr('disabled', false);
			$('#shipping_address_1').attr('disabled', false);
		});

		this.document.on('update_checkout.onUpdate', this.onUpdate);
		this.phoneField.on('change.triggerUpdate', this.triggerUpdateCheckout);
		this.firstNameField.on('change.triggerUpdate', this.triggerUpdateCheckout);
		this.lastNameField.on('change.triggerUpdate', this.triggerUpdateCheckout);

		if (window.cvcAddressInitialUpdate) {
			this.document.trigger('update_checkout');
			window.cvcAddressInitialUpdate = false;
			this.setAddress1FieldData();
		}
	},

	methods: {
		onUpdate: function onUpdate() {
			this.Address1Field.attr('disabled', true);
			this.setCookieData();
		},
		checkFields: function checkFields() {
			$('#billing_address_1').attr('disabled', false);
			$('#shipping_address_1').attr('disabled', false);

			if ($('#ship-to-different-address-checkbox').is(":checked")) {
				this.countryField = $('#shipping_country');
				this.Address1Field = $('#shipping_address_1');
				this.Address2Field = $('#shipping_address_2');
				this.stateField = $('#shipping_state');
				this.cityField = $('#shipping_city');
				this.firstNameField = $('#shipping_first_name');
				this.lastNameField = $('#shipping_last_name');
			} else {
				this.countryField = $('#billing_country');
				this.Address1Field = $('#billing_address_1');
				this.Address2Field = $('#billing_address_2');
				this.stateField = $('#billing_state');
				this.cityField = $('#billing_city');
				this.firstNameField = $('#billing_first_name');
				this.lastNameField = $('#billing_last_name');
			}

			this.Address1Field.attr('disabled', true);
			this.state = this.stateField.val();

			if (this.cityField.val()) {
				this.city = this.cityField.val();
			}

			var _this = this;

			this.cityField.on('change', function () {
				_this.city = $(this).val();
				_this.loadCity();
			});

			this.stateField.on('change', function () {
				_this.state = $(this).val();
				_this.loadCity();
			});

			this.countryField.on('change', function () {
				(0, _utils.setCookie)('woo-bg--cvc-address', '', 1);
				_this.state = $(this).val();
				_this.loadCity();
			});
		},
		loadLocalStorage: function loadLocalStorage() {
			var localStorageData = localStorage.getItem('woo-bg--cvc-address');

			if (localStorageData) {
				localStorageData = JSON.parse(localStorageData);
				this.selectedAddress = (0, _cloneDeep2.default)(localStorageData.selectedAddress);
				this.addresses = (0, _cloneDeep2.default)(localStorageData.addresses);
				this.state = (0, _cloneDeep2.default)(localStorageData.state);
				this.city = (0, _cloneDeep2.default)(localStorageData.city);
				this.streetNumber = (0, _cloneDeep2.default)(localStorageData.streetNumber);
				this.other = (0, _cloneDeep2.default)(localStorageData.other);
			}
		},

		asyncFind: (0, _debounce2.default)(function (query) {
			var _this2 = this;

			if (!query) {
				return;
			}

			this.isLoading = true;
			var data = {
				query: query,
				action: 'woo_bg_cvc_search_address',
				country: this.countryField.val(),
				state: this.state,
				city: this.city
			};

			_axios2.default.post(woocommerce_params.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				if (response.data.data.cities) {
					_this2.addresses = (0, _cloneDeep2.default)(response.data.data.cities);
				} else if (response.data.data.streets) {
					_this2.addresses = (0, _cloneDeep2.default)(response.data.data.streets);
				}

				_this2.isLoading = false;
			});
		}, 200),
		clearAll: function clearAll() {
			this.selectedAddress = [];
		},
		loadCity: function loadCity() {
			this.state = this.stateField.val();
			this.city = this.cityField.val();
			this.loading = true;

			var _this = this;
			var data = {
				action: 'woo_bg_cvc_load_streets',
				state: this.state,
				city: this.city,
				country: this.countryField.val()
			};

			_axios2.default.post(woocommerce_params.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				if (response.data.data.status === 'invalid-city') {
					_this.addresses = (0, _cloneDeep2.default)(response.data.data.cities);
					_this.resetData();
				} else {
					_this.addresses = (0, _cloneDeep2.default)(response.data.data.streets);
				}

				_this.loading = false;
			}).catch(function (error) {
				_this.message = "Имаше проблем. За повече информация вижте конзолата.";
				_this.loading = false;
			});
		},
		setAddress: function setAddress(option, id) {
			if (!this.city) {
				this.city = option.label;
				this.cityField.val(option.label);
				this.addresses = [];
				this.selectedAddress = (0, _cloneDeep2.default)([]);
			}
		},

		streetNumberChanged: (0, _debounce2.default)(function () {
			this.setAddress1FieldData();
			this.setLocalStorageData();

			this.document.trigger('update_checkout');
		}, 2000),
		resetData: function resetData() {
			this.city = '';
			this.selectedAddress = '';
			this.streetNumber = '';
			this.other = '';
			localStorage.removeItem('woo-bg--cvc-address');
		},
		setCookieData: function setCookieData() {
			var first_name = this.firstNameField.val();
			var last_name = this.lastNameField.val();
			var phone = this.phoneField.val();

			var cookie = {
				type: 'address',
				receiver: first_name + ' ' + last_name,
				phone: phone,
				selectedAddress: this.selectedAddress,
				state: this.state,
				city: this.city,
				streetNumber: this.streetNumber,
				other: this.other,
				otherField: this.Address2Field.val(),
				country: this.countryField.val(),
				payment: $('input[name="payment_method"]:checked').val()
			};

			cookie = encodeURIComponent(JSON.stringify(cookie));

			(0, _utils.setCookie)('woo-bg--cvc-address', cookie, 1);
		},
		setLocalStorageData: function setLocalStorageData() {
			var localStorageData = {
				selectedAddress: this.selectedAddress,
				addresses: this.addresses,
				state: this.state,
				city: this.city,
				streetNumber: this.streetNumber,
				other: this.other
			};

			localStorage.setItem('woo-bg--cvc-address', JSON.stringify(localStorageData));
		},
		setAddress1FieldData: function setAddress1FieldData() {
			var shippingAddress = '';

			if (this.selectedAddress.type === 'streets') {
				shippingAddress = this.selectedAddress.label + ' ' + this.streetNumber;
			} else if (this.selectedAddress.type === 'quarters') {
				shippingAddress = this.selectedAddress.label + ' ' + this.other;
			}

			this.Address1Field.val(shippingAddress);
		},
		triggerUpdateCheckout: function triggerUpdateCheckout() {
			this.document.trigger('update_checkout');
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.document.off('update_checkout.onUpdate');
		this.phoneField.off('change.triggerUpdate');
		this.firstNameField.off('change.triggerUpdate');
		this.lastNameField.off('change.triggerUpdate');

		$('#billing_address_1').attr('disabled', false);
		$('#shipping_address_1').attr('disabled', false);
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/import-glob!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = __webpack_require__(/*! ../../../utils */ "./resources/scripts/utils/index.js");

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

var _qs2 = _interopRequireDefault(_qs);

var _vueMultiselect = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

__webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { Multiselect: _vueMultiselect2.default },
	data: function data() {
		return {
			countryField: $('#billing_country'),
			firstNameField: $('#billing_first_name'),
			lastNameField: $('#billing_last_name'),
			phoneField: $('#billing_phone'),
			selectedOffice: [],
			offices: [],
			error: '',
			document: $(document.body),
			i18n: wooBg_cvc.i18n
		};
	},
	mounted: function mounted() {
		var _this = this;
		this.loadLocalStorage();

		this.checkFields();

		$('#ship-to-different-address-checkbox').on('change', function () {
			_this.checkFields();
		});

		this.loadOffices();

		$('form.checkout').on('checkout_place_order', function (e) {
			$('#billing_address_1').attr('disabled', false);
			$('#shipping_address_1').attr('disabled', false);
		});

		this.document.on('update_checkout.onUpdate', this.onUpdate);
		this.document.on('update_checkout.setCookieOffice', this.setCookieData);
		this.phoneField.on('change.triggerUpdate', this.triggerUpdateCheckout);
		this.firstNameField.on('change.triggerUpdate', this.triggerUpdateCheckout);
		this.lastNameField.on('change.triggerUpdate', this.triggerUpdateCheckout);

		if (window.cvcOfficeInitialUpdate) {
			this.document.trigger('update_checkout');
			window.cvcOfficeInitialUpdate = false;
			this.setAddress1FieldData();
		}
	},

	methods: {
		compileLabel: function compileLabel(_ref) {
			var name_bg = _ref.name_bg;

			return '' + name_bg;
		},
		checkFields: function checkFields() {
			$('#billing_address_1').attr('disabled', false);
			$('#shipping_address_1').attr('disabled', false);

			if ($('#ship-to-different-address-checkbox').is(":checked")) {
				this.Address1Field = $('#shipping_address_1');
				this.countryField = $('#shipping_country');
				this.firstNameField = $('#shipping_first_name');
				this.lastNameField = $('#shipping_last_name');
			} else {
				this.Address1Field = $('#billing_address_1');
				this.countryField = $('#billing_country');
				this.firstNameField = $('#billing_first_name');
				this.lastNameField = $('#billing_last_name');
			}

			this.Address1Field.attr('disabled', true);

			var _this = this;
		},
		loadLocalStorage: function loadLocalStorage() {
			var localStorageData = localStorage.getItem('woo-bg--cvc-office');
			if (localStorageData) {
				localStorageData = JSON.parse(localStorageData);
				this.selectedOffice = (0, _cloneDeep2.default)(localStorageData.selectedOffice);
				this.offices = (0, _cloneDeep2.default)(localStorageData.offices);
				this.type = (0, _cloneDeep2.default)(localStorageData.type);
			}
		},
		loadOffices: function loadOffices() {
			this.loading = true;

			var _this = this;
			var data = {
				action: 'woo_bg_cvc_load_offices',
				country: this.countryField.val()
			};

			_axios2.default.post(woocommerce_params.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				_this.offices = (0, _cloneDeep2.default)(response.data.data.offices);
				_this.error = false;

				_this.loading = false;
			}).catch(function (error) {
				_this.message = "Имаше проблем. За повече информация вижте конзолата.";
				console.log(error);
				_this.loading = false;
			});
		},
		setOffice: function setOffice() {
			this.setLocalStorageData();
			this.setAddress1FieldData();

			this.document.trigger('update_checkout');
		},
		setCookieData: function setCookieData() {
			var first_name = this.firstNameField.val();
			var last_name = this.lastNameField.val();
			var phone = this.phoneField.val();

			var cookie = {
				type: 'office',
				receiver: first_name + ' ' + last_name,
				phone: phone,
				selectedOffice: this.selectedOffice ? this.selectedOffice.id : null,
				state: '',
				city: '',
				country: this.countryField.val(),
				payment: $('input[name="payment_method"]:checked').val()
			};

			cookie = encodeURIComponent(JSON.stringify(cookie));

			(0, _utils.setCookie)('woo-bg--cvc-address', cookie, 1);
		},
		setLocalStorageData: function setLocalStorageData() {
			var localStorageData = {
				selectedOffice: this.selectedOffice,
				offices: this.offices
			};

			localStorage.setItem('woo-bg--cvc-office', JSON.stringify(localStorageData));
		},
		resetData: function resetData() {
			this.offices = [];
			this.selectedOffice = '';
			localStorage.removeItem('woo-bg--cvc-office');
		},
		setAddress1FieldData: function setAddress1FieldData() {
			var shippingAddress = "";

			if (this.selectedOffice && this.selectedOffice.name_bg) {
				shippingAddress = this.i18n.toOffice + this.selectedOffice.name_bg;
			}

			this.Address1Field.val(shippingAddress);
		},
		triggerUpdateCheckout: function triggerUpdateCheckout() {
			this.document.trigger('update_checkout');
		},
		onUpdate: function onUpdate() {
			this.Address1Field.attr('disabled', true);
			this.setCookieData();
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.document.off('update_checkout.setCookieOffice');
		this.phoneField.off('change.triggerUpdate');
		this.firstNameField.off('change.triggerUpdate');
		this.lastNameField.off('change.triggerUpdate');

		$('#billing_address_1').attr('disabled', false);
		$('#shipping_address_1').attr('disabled', false);
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _c("div", { staticClass: "woo-bg--cvc-delivery" }, [_c("multiselect", {
    staticClass: "woo-bg-multiselect",
    attrs: {
      id: "ajax",
      placeholder: "",
      "deselect-label": "",
      "open-direction": "bottom",
      "track-by": "id",
      label: "label",
      "options-limit": 30,
      limit: 6,
      "max-height": 600,
      "close-on-select": _vm.closeOnSelect,
      selectedLabel: _vm.i18n.selected,
      selectLabel: _vm.i18n.select,
      options: _vm.addresses,
      loading: _vm.isLoading,
      multiple: false,
      searchable: true,
      "internal-search": false,
      "clear-on-select": false,
      "show-no-results": true
    },
    on: { "search-change": _vm.asyncFind, input: _vm.setAddress },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref) {
        var option = _ref.option;

        return [_c("strong", [_vm._v(_vm._s(option.label))])];
      }
    }]),
    model: {
      value: _vm.selectedAddress,
      callback: function callback($$v) {
        _vm.selectedAddress = $$v;
      },
      expression: "selectedAddress"
    }
  }, [_vm._v(" "), _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [_vm._v(_vm._s(_vm.i18n.noResult))]), _vm._v(" "), _c("span", { attrs: { slot: "noOptions" }, slot: "noOptions" }, [_vm._v(_vm._s(_vm.i18n.noOptions))]), _vm._v(" "), _c("span", { attrs: { slot: "placeholder" }, slot: "placeholder" }, [_vm._v(_vm._s(_vm.i18n.searchAddress))])]), _vm._v(" "), _vm.selectedAddress.type === "streets" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.streetNumber,
      expression: "streetNumber"
    }],
    staticClass: "woo-bg-multiselect--additional-field",
    attrs: { placeholder: _vm.i18n.streetNumber, type: "text" },
    domProps: { value: _vm.streetNumber },
    on: {
      keyup: _vm.streetNumberChanged,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.streetNumber = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.selectedAddress.type === "quarters" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.other,
      expression: "other"
    }],
    staticClass: "woo-bg-multiselect--additional-field",
    attrs: { placeholder: _vm.i18n.blVhEt, type: "text" },
    domProps: { value: _vm.other },
    on: {
      keyup: _vm.streetNumberChanged,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.other = $event.target.value;
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _c("div", { staticClass: "woo-bg--cvc-delivery" }, [_vm.error ? _c("div", [_vm._v(_vm._s(_vm.error))]) : _c("div", [_c("multiselect", {
    staticClass: "woo-bg-multiselect",
    attrs: {
      id: "ajax",
      placeholder: "",
      "track-by": "id",
      label: "name",
      "deselect-label": "",
      "open-direction": "bottom",
      "options-limit": 1000,
      limit: 6,
      "max-height": 600,
      selectedLabel: _vm.i18n.selected,
      selectLabel: _vm.i18n.select,
      options: _vm.offices,
      "custom-label": _vm.compileLabel,
      multiple: false,
      searchable: true,
      "show-no-results": true
    },
    on: { input: _vm.setOffice },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref) {
        var option = _ref.option;

        return [_c("strong", [_vm._v(_vm._s(option.name_bg))])];
      }
    }]),
    model: {
      value: _vm.selectedOffice,
      callback: function callback($$v) {
        _vm.selectedOffice = $$v;
      },
      expression: "selectedOffice"
    }
  }, [_vm._v(" "), _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [_vm._v(_vm._s(_vm.i18n.noResult))]), _vm._v(" "), _c("span", { attrs: { slot: "noOptions" }, slot: "noOptions" }, [_vm._v(_vm._s(_vm.i18n.noOptions))]), _vm._v(" "), _c("span", { attrs: { slot: "placeholder" }, slot: "placeholder" }, [_vm._v(_vm._s(_vm.i18n.searchOffice))])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/app.js":
/*!****************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/app.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.office = exports.address = undefined;

__webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _Address = __webpack_require__(/*! ./components/Address.vue */ "./resources/scripts/cvc-frontend/apps/components/Address.vue");

var _Address2 = _interopRequireDefault(_Address);

var _Office = __webpack_require__(/*! ./components/Office.vue */ "./resources/scripts/cvc-frontend/apps/components/Office.vue");

var _Office2 = _interopRequireDefault(_Office);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = exports.address = _vue2.default.extend({
	render: function render(h) {
		return h(_Address2.default);
	}
});

var office = exports.office = _vue2.default.extend({
	render: function render(h) {
		return h(_Office2.default);
	}
});

/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Address.vue":
/*!********************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Address.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=68d79657 */ "./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657");
/* harmony import */ var _Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js */ "./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/scripts/cvc-frontend/apps/components/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/import-glob!./Address.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Address_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657":
/*!**************************************************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=template&id=68d79657 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-frontend/apps/components/Address.vue?vue&type=template&id=68d79657");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_68d79657__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Office.vue":
/*!*******************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Office.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Office.vue?vue&type=template&id=03aeec29 */ "./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29");
/* harmony import */ var _Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Office.vue?vue&type=script&lang=js */ "./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/scripts/cvc-frontend/apps/components/Office.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/import-glob!./Office.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Office_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29":
/*!*************************************************************************************************!*\
  !*** ./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Office.vue?vue&type=template&id=03aeec29 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-frontend/apps/components/Office.vue?vue&type=template&id=03aeec29");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Office_vue_vue_type_template_id_03aeec29__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ 0:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=4c8a17a85035830b4c95.js.map