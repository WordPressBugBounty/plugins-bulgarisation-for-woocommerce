(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/import-glob!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27 ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _c("div", {
    staticClass: "panel-wrap woocommerce woocommerce--cvc ajax-container",
    attrs: { "data-loading": _vm.loading }
  }, [_c("div", {
    staticClass: "panel woocommerce-order-data",
    attrs: { id: "order_data" }
  }, [_c("div", { staticClass: "order_data_column_container" }, [_c("div", { staticClass: "order_data_column order_data_column--half" }, [_c("h3", [_vm._v(_vm._s(_vm.i18n.labelData))]), _vm._v(" "), _c("form", [_vm.type.id == "office" ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.office) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "deselect-label": "",
      selectLabel: "",
      "track-by": "id",
      label: "name_bg",
      selectedLabel: _vm.i18n.selected,
      placeholder: _vm.i18n.choose,
      options: Object.values(_vm.offices),
      searchable: true,
      "allow-empty": false
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref) {
        var option = _ref.option;

        return [_c("strong", [_vm._v(_vm._s(option.name_bg))])];
      }
    }], null, false, 3192572209),
    model: {
      value: _vm.office,
      callback: function callback($$v) {
        _vm.office = $$v;
      },
      expression: "office"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.type.id == "address" ? _c("div", [_c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.streetQuarter) + ":\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "deselect-label": "",
      selectLabel: "",
      "track-by": "id",
      label: "label",
      selectedLabel: _vm.i18n.selected,
      placeholder: _vm.i18n.choose,
      options: Object.values(_vm.streets),
      searchable: true,
      "allow-empty": false
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref2) {
        var option = _ref2.option;

        return [_c("strong", [_vm._v(_vm._s(option.label))])];
      }
    }], null, false, 275817578),
    model: {
      value: _vm.street,
      callback: function callback($$v) {
        _vm.street = $$v;
      },
      expression: "street"
    }
  })], 1), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_vm.street.type && _vm.street.type === "streets" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.streetNumber,
      expression: "streetNumber"
    }],
    staticClass: "woo-bg-multiselect--additional-field",
    attrs: {
      placeholder: _vm.i18n.streetNumber,
      type: "text"
    },
    domProps: { value: _vm.streetNumber },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.streetNumber = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.street.type && _vm.street.type === "quarters" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.other,
      expression: "other"
    }],
    staticClass: "woo-bg-multiselect--additional-field",
    attrs: {
      placeholder: _vm.i18n.blVhEt,
      type: "text"
    },
    domProps: { value: _vm.other },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.other = $event.target.value;
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_vm.street.type && _vm.street.type === "streets" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.other,
      expression: "other"
    }],
    staticClass: "woo-bg-multiselect--additional-field",
    attrs: {
      placeholder: _vm.i18n.blVhEt,
      type: "text"
    },
    domProps: { value: _vm.other },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.other = $event.target.value;
      }
    }
  }) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.labelData.total_parcels ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.packCount) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.labelData.total_parcels,
      expression: "labelData.total_parcels"
    }],
    attrs: { type: "number" },
    domProps: { value: _vm.labelData.total_parcels },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.labelData, "total_parcels", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.paymentType === "cod" ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.cd) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.labelData.cod_amount,
      expression: "labelData.cod_amount"
    }],
    attrs: { type: "number" },
    domProps: { value: _vm.labelData.cod_amount },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.labelData, "cod_amount", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.declaredValue) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.declaredValue,
      expression: "declaredValue"
    }],
    attrs: { type: "number" },
    domProps: { value: _vm.declaredValue },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.declaredValue = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.labelData.total_kgs ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.weight) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.labelData.total_kgs,
      expression: "labelData.total_kgs"
    }],
    attrs: { type: "number" },
    domProps: { value: _vm.labelData.total_kgs },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.labelData, "total_kgs", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.description) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.labelData.description,
      expression: "labelData.description"
    }],
    attrs: { type: "text" },
    domProps: { value: _vm.labelData.description },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.labelData, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.deliveryPayedBy) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "deselect-label": "",
      selectLabel: "",
      "track-by": "id",
      label: "label",
      selectedLabel: _vm.i18n.selected,
      placeholder: _vm.i18n.choose,
      options: Object.values(_vm.paymentByTypes),
      searchable: true,
      "allow-empty": false
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref3) {
        var option = _ref3.option;

        return [_c("strong", [_vm._v(_vm._s(option.label))])];
      }
    }]),
    model: {
      value: _vm.paymentBy,
      callback: function callback($$v) {
        _vm.paymentBy = $$v;
      },
      expression: "paymentBy"
    }
  })], 1), _vm._v(" "), _vm.paymentBy.id === "fixed" ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.fixedPrice) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cookie_data.fixed_price,
      expression: "cookie_data.fixed_price"
    }],
    attrs: { type: "number" },
    domProps: { value: _vm.cookie_data.fixed_price },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cookie_data, "fixed_price", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_c("label", [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.i18n.reviewAndTest) + ":\n\t\t\t\t\t\t")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      "deselect-label": "",
      selectLabel: "",
      "track-by": "id",
      label: "label",
      selectedLabel: _vm.i18n.selected,
      placeholder: _vm.i18n.choose,
      options: Object.values(_vm.testsOptions),
      searchable: true,
      "allow-empty": false
    },
    scopedSlots: _vm._u([{
      key: "singleLabel",
      fn: function fn(_ref4) {
        var option = _ref4.option;

        return [_c("strong", [_vm._v(_vm._s(option.label))])];
      }
    }]),
    model: {
      value: _vm.testOption,
      callback: function callback($$v) {
        _vm.testOption = $$v;
      },
      expression: "testOption"
    }
  })], 1), _vm._v(" "), !_vm.shipmentStatus ? _c("p", { staticClass: "form-field form-field-wide" }, [_c("button", {
    staticClass: "button-primary woocommerce-save-button",
    attrs: {
      name: "save",
      type: "submit",
      value: _vm.i18n.generateLabel
    },
    on: { click: _vm.updateLabel }
  }, [_vm._v(_vm._s(_vm.i18n.generateLabel))])]) : _c("p", { staticClass: "form-field form-field-wide" }, [_c("button", {
    staticClass: "button-primary woocommerce-save-button",
    attrs: {
      name: "save",
      type: "submit",
      value: _vm.i18n.updateShipmentStatus
    },
    on: { click: _vm.updateActions }
  }, [_vm._v(_vm._s(_vm.i18n.updateShipmentStatus))])]), _vm._v(" "), _c("p", { staticClass: "form-field form-field-wide" }, [_vm.shipmentStatus ? _c("button", {
    staticClass: "button-secondary",
    attrs: {
      name: "save",
      type: "submit",
      value: _vm.i18n.deleteLabel
    },
    on: { click: _vm.deleteLabel }
  }, [_vm._v(_vm._s(_vm.i18n.deleteLabel))]) : _vm._e(), _vm._v(" "), _c("a", {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: _vm.labelJSON,
      expression: "labelJSON",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: _vm.onCopy,
      expression: "onCopy",
      arg: "success"
    }],
    staticClass: "button-secondary"
  }, [_vm._v(_vm._s(_vm.i18n.copyLabelData))])])]), _vm._v(" "), _c("div", { staticClass: "clear" }), _vm._v(" "), _vm.message ? _c("div", { staticClass: "notice notice-error notice-alt" }, [_c("p", [_vm._v(_vm._s(_vm.message))])]) : _vm._e()]), _vm._v(" "), _c("div", { staticClass: "order_data_column order_data_column--half" }, [_vm.shipmentStatus ? _c("div", { staticClass: "generated-label" }, [_c("h3", [_vm._v(_vm._s(_vm.i18n.label) + ": " + _vm._s(_vm.shipmentStatus.wb))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("iframe", {
    attrs: {
      id: "woo-bg--cvc-label-print",
      src: _vm.iframeUrl
    }
  })]) : _vm._e()])]), _vm._v(" "), _vm.statuses.length ? _c("div", { staticClass: "woocommerce_order_status" }, [_c("h3", [_vm._v(_vm._s(_vm.i18n.shipmentStatus))]), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v(" " + _vm._s(_vm.i18n.time) + " ")]), _vm._v(" "), _c("th", [_vm._v(" " + _vm._s(_vm.i18n.details) + " ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.statuses, function (status, key) {
    return _c("tr", [_c("th", [_vm._v(" " + _vm._s(status.time) + " ")]), _vm._v(" "), _c("th", [_vm._v(" " + _vm._s(status.details) + " ")])]);
  }), 0)])]) : _vm._e()]), _vm._v(" "), _c("div", { staticClass: "clear" })]);
};
var staticRenderFns = [];
render._withStripped = true;

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ "./resources/scripts/cvc-admin/apps/app.js":
/*!*************************************************!*\
  !*** ./resources/scripts/cvc-admin/apps/app.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _Admin = __webpack_require__(/*! ./components/Admin.vue */ "./resources/scripts/cvc-admin/apps/components/Admin.vue");

var _Admin2 = _interopRequireDefault(_Admin);

var _vueClipboard = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");

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

/***/ "./resources/scripts/cvc-admin/apps/components/Admin.vue":
/*!***************************************************************!*\
  !*** ./resources/scripts/cvc-admin/apps/components/Admin.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=36063f27 */ "./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js */ "./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/scripts/cvc-admin/apps/components/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../node_modules/import-glob!./Admin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27":
/*!*********************************************************************************************!*\
  !*** ./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27 ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=36063f27 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/cvc-admin/apps/components/Admin.vue?vue&type=template&id=36063f27");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_36063f27__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
//# sourceMappingURL=fdc280a714650198c2e6.js.map