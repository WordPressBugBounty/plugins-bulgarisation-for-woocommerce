(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/import-glob!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cloneDeep = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _vueMultiselect = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

var _veeValidate = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

var _rules = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");

var _bg = __webpack_require__(/*! vee-validate/dist/locale/bg.json */ "./node_modules/vee-validate/dist/locale/bg.json");

var _bg2 = _interopRequireDefault(_bg);

var _qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36 ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _c("div", { staticClass: "ajax-container", attrs: { "data-loading": _vm.loading } }, [_c("ValidationObserver", {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var handleSubmit = _ref.handleSubmit;

        return [_c("form", {
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return handleSubmit(_vm.runSubmit);
            }
          }
        }, [_vm.auth_errors ? _c("div", {
          staticClass: "notice notice-error",
          domProps: { innerHTML: _vm._s(_vm.auth_errors) }
        }) : _vm._e(), _vm._v(" "), _vm._l(_vm.fields, function (group, group_slug) {
          return _c("div", [_c("h3", { staticClass: "woo-bg--group-title" }, [_vm._v(_vm._s(_vm.groups_titles[group_slug].title))]), _vm._v(" "), _vm.groups_titles[group_slug].description ? _c("p", {
            staticClass: "woo-bg--group-description",
            domProps: {
              innerHTML: _vm._s(_vm.groups_titles[group_slug].description)
            }
          }) : _vm._e(), _vm._v(" "), _c("table", { staticClass: "form-table" }, [_c("tbody", _vm._l(group, function (field, field_slug) {
            return field.type === "text" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-" + field.name
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + "\n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("ValidationProvider", {
              staticClass: "forminp forminp-text",
              attrs: {
                tag: "td",
                rules: field.validation_rules
              },
              scopedSlots: _vm._u([{
                key: "default",
                fn: function fn(_ref2) {
                  var errors = _ref2.errors;

                  return [field.subtype === "checkbox" ? _c("input", {
                    directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[group_slug][field_slug].value,
                      expression: "fields[group_slug][field_slug].value"
                    }],
                    attrs: {
                      name: "woo-bg-" + field.name,
                      placeholder: field.title,
                      step: field.subtype === "number" ? "0.01" : "",
                      type: "checkbox"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.fields[group_slug][field_slug].value) ? _vm._i(_vm.fields[group_slug][field_slug].value, null) > -1 : _vm.fields[group_slug][field_slug].value
                    },
                    on: {
                      change: function change($event) {
                        var $$a = _vm.fields[group_slug][field_slug].value,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = null,
                              $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 && _vm.$set(_vm.fields[group_slug][field_slug], "value", $$a.concat([$$v]));
                          } else {
                            $$i > -1 && _vm.$set(_vm.fields[group_slug][field_slug], "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                          }
                        } else {
                          _vm.$set(_vm.fields[group_slug][field_slug], "value", $$c);
                        }
                      }
                    }
                  }) : field.subtype === "radio" ? _c("input", {
                    directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[group_slug][field_slug].value,
                      expression: "fields[group_slug][field_slug].value"
                    }],
                    attrs: {
                      name: "woo-bg-" + field.name,
                      placeholder: field.title,
                      step: field.subtype === "number" ? "0.01" : "",
                      type: "radio"
                    },
                    domProps: {
                      checked: _vm._q(_vm.fields[group_slug][field_slug].value, null)
                    },
                    on: {
                      change: function change($event) {
                        return _vm.$set(_vm.fields[group_slug][field_slug], "value", null);
                      }
                    }
                  }) : _c("input", {
                    directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[group_slug][field_slug].value,
                      expression: "fields[group_slug][field_slug].value"
                    }],
                    attrs: {
                      name: "woo-bg-" + field.name,
                      placeholder: field.title,
                      step: field.subtype === "number" ? "0.01" : "",
                      type: field.subtype
                    },
                    domProps: {
                      value: _vm.fields[group_slug][field_slug].value
                    },
                    on: {
                      input: function input($event) {
                        if ($event.target.composing) return;
                        _vm.$set(_vm.fields[group_slug][field_slug], "value", $event.target.value);
                      }
                    }
                  }), _vm._v(" "), field.description ? _c("p", {
                    staticClass: "description"
                  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.description) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("p", {
                    staticClass: "field-error"
                  }, [_vm._v(_vm._s(errors[0]))])];
                }
              }], null, true)
            })], 1) : field.type === "textarea" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-" + field.name
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + "\n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("ValidationProvider", {
              staticClass: "forminp forminp-text",
              attrs: {
                tag: "td",
                rules: field.validation_rules
              },
              scopedSlots: _vm._u([{
                key: "default",
                fn: function fn(_ref3) {
                  var errors = _ref3.errors;

                  return [_c("textarea", {
                    directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[group_slug][field_slug].value,
                      expression: "fields[group_slug][field_slug].value"
                    }],
                    attrs: {
                      rows: "5",
                      name: "woo-bg-" + field.name,
                      type: field.subtype,
                      placeholder: field.title
                    },
                    domProps: {
                      value: _vm.fields[group_slug][field_slug].value
                    },
                    on: {
                      input: function input($event) {
                        if ($event.target.composing) return;
                        _vm.$set(_vm.fields[group_slug][field_slug], "value", $event.target.value);
                      }
                    }
                  }), _vm._v(" "), field.description ? _c("p", {
                    staticClass: "description",
                    domProps: {
                      innerHTML: _vm._s(field.description)
                    }
                  }) : _vm._e(), _vm._v(" "), _c("p", {
                    staticClass: "field-error"
                  }, [_vm._v(_vm._s(errors[0]))])];
                }
              }], null, true)
            })], 1) : field.type === "select" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-gateway-" + group_slug + "-" + field_slug
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("td", { staticClass: "forminp forminp-text" }, [_c("multiselect", {
              attrs: {
                "deselect-label": "",
                selectLabel: "",
                "track-by": "id",
                label: "label",
                selectedLabel: "Избрано",
                placeholder: "Изберете",
                options: Object.values(_vm.fields[group_slug][field_slug].options),
                searchable: true,
                "allow-empty": false
              },
              scopedSlots: _vm._u([{
                key: "singleLabel",
                fn: function fn(_ref4) {
                  var option = _ref4.option;

                  return [_c("strong", [_vm._v(_vm._s(option.label))])];
                }
              }], null, true),
              model: {
                value: _vm.fields[group_slug][field_slug].value,
                callback: function callback($$v) {
                  _vm.$set(_vm.fields[group_slug][field_slug], "value", $$v);
                },
                expression: "fields[group_slug][field_slug].value"
              }
            }), _vm._v(" "), field.description ? _c("p", {
              staticClass: "description",
              domProps: {
                innerHTML: _vm._s(field.description)
              }
            }) : _vm._e()], 1)]) : field.type === "true_false" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-gateway-" + group_slug + "-" + field_slug
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("td", { staticClass: "forminp forminp-text" }, [_c("toggle-button", {
              attrs: { color: "#007cba" },
              model: {
                value: _vm.fields[group_slug][field_slug].value,
                callback: function callback($$v) {
                  _vm.$set(_vm.fields[group_slug][field_slug], "value", $$v);
                },
                expression: "fields[group_slug][field_slug].value"
              }
            }), _vm._v(" "), field.description ? _c("p", {
              staticClass: "description",
              domProps: {
                innerHTML: _vm._s(field.description)
              }
            }) : _vm._e()], 1)]) : field.type === "multi" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-gateway-" + group_slug + "-" + field_slug
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("td", { staticClass: "forminp forminp-text" }, [_c("div", {
              staticClass: "multi-field-container"
            }, [_vm._l(_vm.fields[group_slug][field_slug].value, function (field_value, field_key) {
              return _c("span", {
                staticClass: "multi-field-row"
              }, [_c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.from,
                  expression: "field_value.from"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step,
                  min: 0,
                  max: _vm.fields[group_slug][field_slug].fields_types.max
                },
                domProps: {
                  value: field_value.from
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "from", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.to,
                  expression: "field_value.to"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step,
                  min: 0,
                  max: _vm.fields[group_slug][field_slug].fields_types.max
                },
                domProps: {
                  value: field_value.to
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "to", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t " + _vm._s(_vm.fields[group_slug][field_slug].fields_types.price_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.price,
                  expression: "field_value.price"
                }],
                attrs: {
                  type: "number",
                  step: "0.01"
                },
                domProps: {
                  value: field_value.price
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "price", $event.target.value);
                  }
                }
              }), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.currency)
                }
              })]), _vm._v(" "), _c("a", {
                staticClass: "button button-small button-secondary",
                on: {
                  click: function click($event) {
                    return _vm.removeRow(group_slug, field_slug, field_key);
                  }
                }
              }, [_vm._v("-")])]);
            }), _vm._v(" "), _c("div", {
              staticClass: "multi-field--add-new-row"
            }, [_c("a", {
              staticClass: "button button-small button-secondary",
              on: {
                click: function click($event) {
                  return _vm.addNewRow(group_slug, field_slug);
                }
              }
            }, [_vm._v(_vm._s(_vm.fields[group_slug][field_slug].fields_types.add_row_text))])])], 2), _vm._v(" "), field.description ? _c("p", {
              staticClass: "description",
              domProps: {
                innerHTML: _vm._s(field.description)
              }
            }) : _vm._e()])]) : field.type === "multi_two" ? _c("tr", { attrs: { valign: "top" } }, [_c("th", {
              staticClass: "titledesc",
              attrs: { scope: "row" }
            }, [_c("label", {
              attrs: {
                for: "woo-bg-gateway-" + group_slug + "-" + field_slug
              }
            }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(field.title) + " \n\n\t\t\t\t\t\t\t\t\t"), field.help_text ? _c("span", {
              staticClass: "woocommerce-help-tip",
              attrs: {
                "data-tip": field.help_text
              }
            }) : _vm._e()])]), _vm._v(" "), _c("td", { staticClass: "forminp forminp-text" }, [_c("div", {
              staticClass: "multi-two-field-container"
            }, [_vm._l(_vm.fields[group_slug][field_slug].value, function (field_value, field_key) {
              return _c("span", {
                staticClass: "multi-field-row"
              }, [_c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.from,
                  expression: "field_value.from"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step_type1,
                  min: 0,
                  max: _vm.fields[group_slug][field_slug].fields_types.max_type1
                },
                domProps: {
                  value: field_value.from
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "from", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.to,
                  expression: "field_value.to"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step_type1,
                  min: 0,
                  max: _vm.fields[group_slug][field_slug].fields_types.max_type1
                },
                domProps: {
                  value: field_value.to
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "to", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.and_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.from_price,
                  expression: "field_value.from_price"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step_type2
                },
                domProps: {
                  value: field_value.from_price
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "from_price", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type2)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.fields[group_slug][field_slug].fields_types.separator_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.to_price,
                  expression: "field_value.to_price"
                }],
                attrs: {
                  type: "number",
                  step: _vm.fields[group_slug][field_slug].fields_types.step_type2
                },
                domProps: {
                  value: field_value.to_price
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "to_price", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.type2)
                }
              })]), _vm._v("\n\n\t\t\t\t\t\t\t\t\t\t " + _vm._s(_vm.fields[group_slug][field_slug].fields_types.price_text) + "  \n\n\t\t\t\t\t\t\t\t\t\t"), _c("span", {
                staticClass: "multi-field-option"
              }, [_c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: field_value.price,
                  expression: "field_value.price"
                }],
                attrs: {
                  type: "number"
                },
                domProps: {
                  value: field_value.price
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;
                    _vm.$set(field_value, "price", $event.target.value);
                  }
                }
              }), _c("span", {
                domProps: {
                  innerHTML: _vm._s(_vm.fields[group_slug][field_slug].fields_types.currency)
                }
              })]), _vm._v(" "), _c("a", {
                staticClass: "button button-small button-secondary",
                on: {
                  click: function click($event) {
                    return _vm.removeRow(group_slug, field_slug, field_key);
                  }
                }
              }, [_vm._v("-")])]);
            }), _vm._v(" "), _c("div", {
              staticClass: "multi-field--add-new-row"
            }, [_c("a", {
              staticClass: "button button-small button-secondary",
              on: {
                click: function click($event) {
                  return _vm.addNewRow(group_slug, field_slug);
                }
              }
            }, [_vm._v(_vm._s(_vm.fields[group_slug][field_slug].fields_types.add_row_text))])])], 2), _vm._v(" "), field.description ? _c("p", {
              staticClass: "description",
              domProps: {
                innerHTML: _vm._s(field.description)
              }
            }) : _vm._e()])]) : _vm._e();
          }), 0)])]);
        }), _vm._v(" "), _c("p", { staticClass: "submit" }, [_c("button", {
          staticClass: "button-primary woocommerce-save-button",
          attrs: {
            name: "save",
            type: "submit",
            value: "Запазване на промените"
          }
        }, [_vm._v("Запазване на промените")]), _vm._v(" "), _c("span", { staticClass: "form-message" }, [_vm._v(_vm._s(_vm.message))])])], 2)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;

exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),

/***/ "./resources/scripts/admin/apps/settings/app.js":
/*!******************************************************!*\
  !*** ./resources/scripts/admin/apps/settings/app.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(/*! ./components/App.vue */ "./resources/scripts/admin/apps/settings/components/App.vue");

var _App2 = _interopRequireDefault(_App);

var _veeValidate = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

var _vueJsToggleButton = __webpack_require__(/*! vue-js-toggle-button */ "./node_modules/vue-js-toggle-button/dist/index.js");

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

/***/ "./resources/scripts/admin/apps/settings/components/App.vue":
/*!******************************************************************!*\
  !*** ./resources/scripts/admin/apps/settings/components/App.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=16f20a36 */ "./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/scripts/admin/apps/settings/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/import-glob!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/import-glob/index.js!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_import_glob_index_js_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36":
/*!************************************************************************************************!*\
  !*** ./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36 ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=16f20a36 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/scripts/admin/apps/settings/components/App.vue?vue&type=template&id=16f20a36");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16f20a36__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);
//# sourceMappingURL=cc0352e3638a676fef4f.js.map