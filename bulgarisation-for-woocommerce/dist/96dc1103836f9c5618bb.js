(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(131);

var _vue = __webpack_require__(127);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(245);

var _App2 = _interopRequireDefault(_App);

var _veeValidate = __webpack_require__(140);

var _vueJsToggleButton = __webpack_require__(317);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('ValidationProvider', _veeValidate.ValidationProvider);
_vue2.default.component('ValidationObserver', _veeValidate.ValidationObserver);
_vue2.default.component('ToggleButton', _vueJsToggleButton.ToggleButton);

exports.default = new _vue2.default({
	el: '#woo-bg-settings',
	render: function render(h) {
		return h(_App2.default);
	}
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cloneDeep = __webpack_require__(128);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _vueMultiselect = __webpack_require__(130);

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

var _veeValidate = __webpack_require__(140);

var _rules = __webpack_require__(146);

var _bg = __webpack_require__(147);

var _bg2 = _interopRequireDefault(_bg);

var _qs = __webpack_require__(8);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _veeValidate.localize)('bg', _bg2.default);
(0, _veeValidate.extend)('required', _extends({}, _rules.required, {
	message: 'Полето е задължително'
}));

(0, _veeValidate.extend)('email', _extends({}, _rules.email, {
	message: 'Полето трябва да е коректен Email адрес'
}));

exports.default = {
	components: { Multiselect: _vueMultiselect2.default },
	data: function data() {
		return {
			loading: false,
			fields: (0, _cloneDeep2.default)(wooBg_settings.fields),
			groups_titles: (0, _cloneDeep2.default)(wooBg_settings.groups_titles),
			message: '',
			auth_errors: (0, _cloneDeep2.default)(wooBg_settings.auth_errors)
		};
	},
	mounted: function mounted() {
		$(document.body).trigger('init_tooltips');
	},

	methods: {
		addNewRow: function addNewRow(group_slug, field_slug) {
			var newRowIndex = this.fields[group_slug][field_slug].value.length - 1;
			var newRow = (0, _cloneDeep2.default)(this.fields[group_slug][field_slug].value[newRowIndex]);

			for (var prop in newRow) {
				if (newRow.hasOwnProperty(prop)) {
					newRow[prop] = '';
				}
			}

			this.fields[group_slug][field_slug].value.push(newRow);
		},
		removeRow: function removeRow(group_slug, field_slug, key) {
			this.fields[group_slug][field_slug].value.splice(key, 1);
		},
		runSubmit: function runSubmit() {
			var fieldsForSubmit = {};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.entries(this.fields)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref = _step.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var group = _ref2[0];
					var fields = _ref2[1];

					fieldsForSubmit[group] = {};

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = Object.entries(fields)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _ref3 = _step2.value;

							var _ref4 = _slicedToArray(_ref3, 2);

							var name = _ref4[0];
							var props = _ref4[1];

							fieldsForSubmit[group][name] = {
								value: props.value,
								type: props.type
							};
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			this.loading = true;
			var _this = this;
			var data = {
				action: 'woo_bg_save_settings',
				options: fieldsForSubmit,
				tab: wooBg_settings.tab,
				nonce: wooBg_settings.nonce
			};

			_axios2.default.post(woocommerce_admin.ajax_url, _qs2.default.stringify(data)).then(function (response) {
				if (response.data.data.message) {
					_this.message = response.data.data.message;
				}

				_this.auth_errors = response.data.data.auth_errors;

				if (response.data.data.fields) {
					_this.fields = {};
					_this.groups_titles = {};
					_this.fields = (0, _cloneDeep2.default)(response.data.data.fields);
					_this.groups_titles = (0, _cloneDeep2.default)(response.data.data.groups_titles);
				}

				setTimeout(function () {
					$(document.body).trigger('init_tooltips');
				}, 50);

				_this.loading = false;
			}).catch(function (error) {
				_this.message = "Имаше проблем със запазването на настройките. За повече информация вижте конзолата.";
				console.log(error);
				_this.loading = false;
			});
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;return _c('div', { staticClass: "ajax-container", attrs: { "data-loading": _vm.loading } }, [_c('ValidationObserver', { ref: "form", scopedSlots: _vm._u([{ key: "default", fn: function fn(_ref) {
        var handleSubmit = _ref.handleSubmit;
        return [_c('form', { on: { "submit": function submit($event) {
              $event.preventDefault();return handleSubmit(_vm.runSubmit);
            } } }, [_vm.auth_errors ? _c('div', { staticClass: "notice notice-error", domProps: { "innerHTML": _vm._s(_vm.auth_errors) } }) : _vm._e(), _vm._v(" "), _vm._l(_vm.fields, function (group, group_slug) {
          return _c('div', [_c('h3', { staticClass: "woo-bg--group-title" }, [_vm._v(_vm._s(_vm.groups_titles[group_slug].title))]), _vm._v(" "), _vm.groups_titles[group_slug].description ? _c('p', { staticClass: "woo-bg--group-description", domProps: { "innerHTML": _vm._s(_vm.groups_titles[group_slug].description) } }) : _vm._e(), _vm._v(" "), _c('table', { staticClass: "form-table" }, [_c('tbody', _vm._l(group, function (field, field_slug) {
            return field.type === 'text' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-" + field.name } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + "\n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('ValidationProvider', { staticClass: "forminp forminp-text", attrs: { "tag": "td", "rules": field.validation_rules }, scopedSlots: _vm._u([{ key: "default", fn: function fn(_ref2) {
                  var errors = _ref2.errors;
                  return [field.subtype === 'checkbox' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.fields[group_slug][field_slug].value, expression: "fields[group_slug][field_slug].value" }], attrs: { "name": "woo-bg-" + field.name, "placeholder": field.title, "step": field.subtype === 'number' ? '0.01' : '', "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.fields[group_slug][field_slug].value) ? _vm._i(_vm.fields[group_slug][field_slug].value, null) > -1 : _vm.fields[group_slug][field_slug].value }, on: { "change": function change($event) {
                        var $$a = _vm.fields[group_slug][field_slug].value,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
                          var $$v = null,
                              $$i = _vm._i($$a, $$v);if ($$el.checked) {
                            $$i < 0 && _vm.$set(_vm.fields[group_slug][field_slug], "value", $$a.concat([$$v]));
                          } else {
                            $$i > -1 && _vm.$set(_vm.fields[group_slug][field_slug], "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                          }
                        } else {
                          _vm.$set(_vm.fields[group_slug][field_slug], "value", $$c);
                        }
                      } } }) : field.subtype === 'radio' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.fields[group_slug][field_slug].value, expression: "fields[group_slug][field_slug].value" }], attrs: { "name": "woo-bg-" + field.name, "placeholder": field.title, "step": field.subtype === 'number' ? '0.01' : '', "type": "radio" }, domProps: { "checked": _vm._q(_vm.fields[group_slug][field_slug].value, null) }, on: { "change": function change($event) {
                        return _vm.$set(_vm.fields[group_slug][field_slug], "value", null);
                      } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.fields[group_slug][field_slug].value, expression: "fields[group_slug][field_slug].value" }], attrs: { "name": "woo-bg-" + field.name, "placeholder": field.title, "step": field.subtype === 'number' ? '0.01' : '', "type": field.subtype }, domProps: { "value": _vm.fields[group_slug][field_slug].value }, on: { "input": function input($event) {
                        if ($event.target.composing) return;_vm.$set(_vm.fields[group_slug][field_slug], "value", $event.target.value);
                      } } }), _vm._v(" "), field.description ? _c('p', { staticClass: "description" }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.description) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "field-error" }, [_vm._v(_vm._s(errors[0]))])];
                } }], null, true) })], 1) : field.type === 'textarea' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-" + field.name } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + "\n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('ValidationProvider', { staticClass: "forminp forminp-text", attrs: { "tag": "td", "rules": field.validation_rules }, scopedSlots: _vm._u([{ key: "default", fn: function fn(_ref3) {
                  var errors = _ref3.errors;
                  return [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.fields[group_slug][field_slug].value, expression: "fields[group_slug][field_slug].value" }], attrs: { "rows": "5", "name": "woo-bg-" + field.name, "type": field.subtype, "placeholder": field.title }, domProps: { "value": _vm.fields[group_slug][field_slug].value }, on: { "input": function input($event) {
                        if ($event.target.composing) return;_vm.$set(_vm.fields[group_slug][field_slug], "value", $event.target.value);
                      } } }), _vm._v(" "), field.description ? _c('p', { staticClass: "description", domProps: { "innerHTML": _vm._s(field.description) } }) : _vm._e(), _vm._v(" "), _c('p', { staticClass: "field-error" }, [_vm._v(_vm._s(errors[0]))])];
                } }], null, true) })], 1) : field.type === 'select' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-gateway-" + group_slug + "-" + field_slug } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('td', { staticClass: "forminp forminp-text" }, [_c('multiselect', { attrs: { "deselect-label": "", "selectLabel": "", "track-by": "id", "label": "label", "selectedLabel": "Избрано", "placeholder": "Изберете", "options": Object.values(_vm.fields[group_slug][field_slug].options), "searchable": true, "allow-empty": false }, scopedSlots: _vm._u([{ key: "singleLabel", fn: function fn(_ref4) {
                  var option = _ref4.option;
                  return [_c('strong', [_vm._v(_vm._s(option.label))])];
                } }], null, true), model: { value: _vm.fields[group_slug][field_slug].value, callback: function callback($$v) {
                  _vm.$set(_vm.fields[group_slug][field_slug], "value", $$v);
                }, expression: "fields[group_slug][field_slug].value" } }), _vm._v(" "), field.description ? _c('p', { staticClass: "description", domProps: { "innerHTML": _vm._s(field.description) } }) : _vm._e()], 1)]) : field.type === 'true_false' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-gateway-" + group_slug + "-" + field_slug } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('td', { staticClass: "forminp forminp-text" }, [_c('toggle-button', { attrs: { "color": "#007cba" }, model: { value: _vm.fields[group_slug][field_slug].value, callback: function callback($$v) {
                  _vm.$set(_vm.fields[group_slug][field_slug], "value", $$v);
                }, expression: "fields[group_slug][field_slug].value" } }), _vm._v(" "), field.description ? _c('p', { staticClass: "description", domProps: { "innerHTML": _vm._s(field.description) } }) : _vm._e()], 1)]) : field.type === 'multi' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-gateway-" + group_slug + "-" + field_slug } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('td', { staticClass: "forminp forminp-text" }, [_c('div', { staticClass: "multi-field-container" }, [_vm._l(_vm.fields[group_slug][field_slug].value, function (field_value, field_key) {
              return _c('span', { staticClass: "multi-field-row" }, [_c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.from, expression: "field_value.from" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step, "min": 0, "max": _vm.fields[group_slug][field_slug].fields_types.max }, domProps: { "value": field_value.from }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "from", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.to, expression: "field_value.to" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step, "min": 0, "max": _vm.fields[group_slug][field_slug].fields_types.max }, domProps: { "value": field_value.to }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "to", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t " + _vm._s(_vm.fields[group_slug][field_slug].fields_types.price_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.price, expression: "field_value.price" }], attrs: { "type": "number", "step": "0.01" }, domProps: { "value": field_value.price }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "price", $event.target.value);
                  } } }), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.currency) } })]), _vm._v(" "), _c('a', { staticClass: "button button-small button-secondary", on: { "click": function click($event) {
                    return _vm.removeRow(group_slug, field_slug, field_key);
                  } } }, [_vm._v("-")])]);
            }), _vm._v(" "), _c('div', { staticClass: "multi-field--add-new-row" }, [_c('a', { staticClass: "button button-small button-secondary", on: { "click": function click($event) {
                  return _vm.addNewRow(group_slug, field_slug);
                } } }, [_vm._v(_vm._s(_vm.fields[group_slug][field_slug].fields_types.add_row_text))])])], 2), _vm._v(" "), field.description ? _c('p', { staticClass: "description", domProps: { "innerHTML": _vm._s(field.description) } }) : _vm._e()])]) : field.type === 'multi_two' ? _c('tr', { attrs: { "valign": "top" } }, [_c('th', { staticClass: "titledesc", attrs: { "scope": "row" } }, [_c('label', { attrs: { "for": "woo-bg-gateway-" + group_slug + "-" + field_slug } }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c('span', { staticClass: "woocommerce-help-tip", attrs: { "data-tip": field.help_text } }) : _vm._e()])]), _vm._v(" "), _c('td', { staticClass: "forminp forminp-text" }, [_c('div', { staticClass: "multi-two-field-container" }, [_vm._l(_vm.fields[group_slug][field_slug].value, function (field_value, field_key) {
              return _c('span', { staticClass: "multi-field-row" }, [_c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.from, expression: "field_value.from" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step_type1, "min": 0, "max": _vm.fields[group_slug][field_slug].fields_types.max_type1 }, domProps: { "value": field_value.from }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "from", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.to, expression: "field_value.to" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step_type1, "min": 0, "max": _vm.fields[group_slug][field_slug].fields_types.max_type1 }, domProps: { "value": field_value.to }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "to", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.and_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.from_price, expression: "field_value.from_price" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step_type2 }, domProps: { "value": field_value.from_price }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "from_price", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type2) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.to_price, expression: "field_value.to_price" }], attrs: { "type": "number", "step": _vm.fields[group_slug][field_slug].fields_types.step_type2 }, domProps: { "value": field_value.to_price }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "to_price", $event.target.value);
                  } } }), _vm._v(" "), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.type2) } })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t " + _vm._s(_vm.fields[group_slug][field_slug].fields_types.price_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c('span', { staticClass: "multi-field-option" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: field_value.price, expression: "field_value.price" }], attrs: { "type": "number" }, domProps: { "value": field_value.price }, on: { "input": function input($event) {
                    if ($event.target.composing) return;_vm.$set(field_value, "price", $event.target.value);
                  } } }), _c('span', { domProps: { "innerHTML": _vm._s(_vm.fields[group_slug][field_slug].fields_types.currency) } })]), _vm._v(" "), _c('a', { staticClass: "button button-small button-secondary", on: { "click": function click($event) {
                    return _vm.removeRow(group_slug, field_slug, field_key);
                  } } }, [_vm._v("-")])]);
            }), _vm._v(" "), _c('div', { staticClass: "multi-field--add-new-row" }, [_c('a', { staticClass: "button button-small button-secondary", on: { "click": function click($event) {
                  return _vm.addNewRow(group_slug, field_slug);
                } } }, [_vm._v(_vm._s(_vm.fields[group_slug][field_slug].fields_types.add_row_text))])])], 2), _vm._v(" "), field.description ? _c('p', { staticClass: "description", domProps: { "innerHTML": _vm._s(field.description) } }) : _vm._e()])]) : _vm._e();
          }), 0)])]);
        }), _vm._v(" "), _c('p', { staticClass: "submit" }, [_c('button', { staticClass: "button-primary woocommerce-save-button", attrs: { "name": "save", "type": "submit", "value": "Запазване на промените" } }, [_vm._v("Запазване на промените")]), _vm._v(" "), _c('span', { staticClass: "form-message" }, [_vm._v(_vm._s(_vm.message))])])], 2)];
      } }]) })], 1);
};
var staticRenderFns = [];

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__, "render")) __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__, "staticRenderFns")) __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_11c69e6e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-25adc6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var DEFAULT_COLOR_CHECKED = '#75c791';
var DEFAULT_COLOR_UNCHECKED = '#bfcbd9';
var DEFAULT_LABEL_CHECKED = 'on';
var DEFAULT_LABEL_UNCHECKED = 'off';
var DEFAULT_SWITCH_COLOR = '#fff';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator: function validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'disabled');
      }
    },
    switchColor: {
      type: [String, Object],
      validator: function validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked');
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    },
    margin: {
      type: Number,
      default: 3
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    className: function className() {
      var toggled = this.toggled,
          disabled = this.disabled;


      return ['vue-js-switch', {
        toggled: toggled,
        disabled: disabled
      }];
    },
    coreStyle: function coreStyle() {
      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
        borderRadius: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(Math.round(this.height / 2))
      };
    },
    buttonRadius: function buttonRadius() {
      return this.height - this.margin * 2;
    },
    distance: function distance() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width - this.height + this.margin);
    },
    buttonStyle: function buttonStyle() {
      var transition = 'transform ' + this.speed + 'ms';
      var margin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.margin);

      var transform = this.toggled ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(this.distance, margin) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(margin, margin);

      var background = this.switchColor ? this.switchColorCurrent : null;

      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        transition: transition,
        transform: transform,
        background: background
      };
    },
    labelStyle: function labelStyle() {
      return {
        lineHeight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        fontSize: this.fontSize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.fontSize) : null
      };
    },
    colorChecked: function colorChecked() {
      var color = this.color;


      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(color)) {
        return color || DEFAULT_COLOR_CHECKED;
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(color, 'checked', DEFAULT_COLOR_CHECKED);
    },
    colorUnchecked: function colorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'unchecked', DEFAULT_COLOR_UNCHECKED);
    },
    colorDisabled: function colorDisabled() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'disabled', this.colorCurrent);
    },
    colorCurrent: function colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked: function labelChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'checked', DEFAULT_LABEL_CHECKED);
    },
    labelUnchecked: function labelUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED);
    },
    switchColorChecked: function switchColorChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR);
    },
    switchColorUnchecked: function switchColorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR);
    },
    switchColorCurrent: function switchColorCurrent() {
      var switchColor = this.switchColor;


      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(this.switchColor)) {
        return this.switchColor || DEFAULT_SWITCH_COLOR;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }
  },
  watch: {
    value: function value(_value) {
      if (this.sync) {
        this.toggled = !!_value;
      }
    }
  },
  data: function data() {
    return {
      toggled: !!this.value
    };
  },

  methods: {
    toggle: function toggle(event) {
      var toggled = !this.toggled;

      if (!this.sync) {
        this.toggled = toggled;
      }

      this.$emit('input', toggled);
      this.$emit('change', {
        value: toggled,
        tag: this.tag,
        srcEvent: event
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a; });


var installed = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    if (installed) {
      return;
    }

    Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a);
    installed = true;
  }
});



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return translate3d; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(value) {
  return typeof value === 'string';
};

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

var isObject = function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var has = function has(object, key) {
  return isObject(object) && object.hasOwnProperty(key);
};

var get = function get(object, key, defaultValue) {
  return has(object, key) ? object[key] : defaultValue;
};

var px = function px(value) {
  return value + 'px';
};

var translate3d = function translate3d(x, y) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';

  return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.className
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        return _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle)
  }, [_c('div', {
    staticClass: "v-switch-button",
    style: (_vm.buttonStyle)
  })]), _vm._v(" "), (_vm.labels) ? [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left",
    style: (_vm.labelStyle)
  }, [_vm._t("checked", [
    [_vm._v(_vm._s(_vm.labelChecked))]
  ])], 2) : _c('span', {
    staticClass: "v-switch-label v-right",
    style: (_vm.labelStyle)
  }, [_vm._t("unchecked", [
    [_vm._v(_vm._s(_vm.labelUnchecked))]
  ])], 2)] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("2283861f", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ })

}]);