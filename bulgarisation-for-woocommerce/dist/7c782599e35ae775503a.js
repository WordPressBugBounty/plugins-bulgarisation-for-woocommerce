(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{118:function(e,t,i){"use strict";i.r(t);var s=i(119),a=i.n(s);for(var d in s)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(d);t.default=a.a},119:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=i(83),a=r(i(79)),d=r(i(89)),n=r(i(18)),o=r(i(19)),l=r(i(80));function r(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Multiselect:l.default},data:function(){return{countryField:e("#billing_country"),Address1Field:e("#billing_address_1"),Address2Field:e("#billing_address_2"),stateField:e("#billing_state"),cityField:e("#billing_city"),firstNameField:e("#billing_first_name"),lastNameField:e("#billing_last_name"),phoneField:e("#billing_phone"),selectedAddress:[],addresses:[],state:"",city:"",streetNumber:"",other:"",isLoading:!1,document:e(document.body),i18n:wooBg_cvc_address.i18n}},computed:{closeOnSelect:function(){return!!this.city}},mounted:function(){var t=this;this.loadLocalStorage(),this.checkFields(),e("#ship-to-different-address-checkbox").on("change",(function(){t.checkFields()})),this.loadCity(),e("form.checkout").on("checkout_place_order",(function(t){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)})),this.document.on("update_checkout.onUpdate",this.onUpdate),this.phoneField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.firstNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.lastNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),window.cvcAddressInitialUpdate&&(this.document.trigger("update_checkout"),window.cvcAddressInitialUpdate=!1,this.setAddress1FieldData())},methods:{onUpdate:function(){this.Address1Field.attr("disabled",!0),this.setCookieData()},checkFields:function(){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1),e("#ship-to-different-address-checkbox").is(":checked")?(this.countryField=e("#shipping_country"),this.Address1Field=e("#shipping_address_1"),this.Address2Field=e("#shipping_address_2"),this.stateField=e("#shipping_state"),this.cityField=e("#shipping_city"),this.firstNameField=e("#shipping_first_name"),this.lastNameField=e("#shipping_last_name")):(this.countryField=e("#billing_country"),this.Address1Field=e("#billing_address_1"),this.Address2Field=e("#billing_address_2"),this.stateField=e("#billing_state"),this.cityField=e("#billing_city"),this.firstNameField=e("#billing_first_name"),this.lastNameField=e("#billing_last_name")),this.Address1Field.attr("disabled",!0),this.state=this.stateField.val(),this.cityField.val()&&(this.city=this.cityField.val());var t=this;this.cityField.on("change",(function(){t.city=e(this).val(),t.loadCity()})),this.stateField.on("change",(function(){t.state=e(this).val(),t.loadCity()})),this.countryField.on("change",(function(){(0,s.setCookie)("woo-bg--cvc-address","",1),t.state=e(this).val(),t.loadCity()}))},loadLocalStorage:function(){var e=localStorage.getItem("woo-bg--cvc-address");e&&(e=JSON.parse(e),this.selectedAddress=(0,a.default)(e.selectedAddress),this.addresses=(0,a.default)(e.addresses),this.state=(0,a.default)(e.state),this.city=(0,a.default)(e.city),this.streetNumber=(0,a.default)(e.streetNumber),this.other=(0,a.default)(e.other))},asyncFind:(0,d.default)((function(e){var t=this;if(e){this.isLoading=!0;var i={query:e,action:"woo_bg_cvc_search_address",country:this.countryField.val(),state:this.state,city:this.city};n.default.post(woocommerce_params.ajax_url,o.default.stringify(i)).then((function(e){e.data.data.cities?t.addresses=(0,a.default)(e.data.data.cities):e.data.data.streets&&(t.addresses=(0,a.default)(e.data.data.streets)),t.isLoading=!1}))}}),200),clearAll:function(){this.selectedAddress=[]},loadCity:function(){this.state=this.stateField.val(),this.city=this.cityField.val(),this.loading=!0;var e=this,t={action:"woo_bg_cvc_load_streets",state:this.state,city:this.city,country:this.countryField.val()};n.default.post(woocommerce_params.ajax_url,o.default.stringify(t)).then((function(t){"invalid-city"===t.data.data.status?(e.addresses=(0,a.default)(t.data.data.cities),e.resetData()):e.addresses=(0,a.default)(t.data.data.streets),e.loading=!1})).catch((function(t){e.message="Имаше проблем. За повече информация вижте конзолата.",e.loading=!1}))},setAddress:function(e,t){this.city||(this.city=e.label,this.cityField.val(e.label),this.addresses=[],this.selectedAddress=(0,a.default)([]))},streetNumberChanged:(0,d.default)((function(){this.setAddress1FieldData(),this.setLocalStorageData(),this.document.trigger("update_checkout")}),2e3),resetData:function(){this.city="",this.selectedAddress="",this.streetNumber="",this.other="",localStorage.removeItem("woo-bg--cvc-address")},setCookieData:function(){var t={type:"address",receiver:this.firstNameField.val()+" "+this.lastNameField.val(),phone:this.phoneField.val(),selectedAddress:this.selectedAddress,state:this.state,city:this.city,streetNumber:this.streetNumber,other:this.other,otherField:this.Address2Field.val(),country:this.countryField.val(),payment:e('input[name="payment_method"]:checked').val()};t=encodeURIComponent(JSON.stringify(t)),(0,s.setCookie)("woo-bg--cvc-address",t,1)},setLocalStorageData:function(){var e={selectedAddress:this.selectedAddress,addresses:this.addresses,state:this.state,city:this.city,streetNumber:this.streetNumber,other:this.other};localStorage.setItem("woo-bg--cvc-address",JSON.stringify(e))},setAddress1FieldData:function(){var e="";"streets"===this.selectedAddress.type?e=this.selectedAddress.label+" "+this.streetNumber:"quarters"===this.selectedAddress.type&&(e=this.selectedAddress.label+" "+this.other),this.Address1Field.val(e)},triggerUpdateCheckout:function(){this.document.trigger("update_checkout")}},beforeDestroy:function(){this.document.off("update_checkout.onUpdate"),this.phoneField.off("change.triggerUpdate"),this.firstNameField.off("change.triggerUpdate"),this.lastNameField.off("change.triggerUpdate"),e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)}}}).call(this,i(0))},125:function(e,t,i){"use strict";i.r(t);var s=i(126),a=i.n(s);for(var d in s)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(d);t.default=a.a},126:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=i(83),a=l(i(79)),d=l(i(18)),n=l(i(19)),o=l(i(80));function l(e){return e&&e.__esModule?e:{default:e}}i(127),t.default={components:{Multiselect:o.default},data:function(){return{countryField:e("#billing_country"),firstNameField:e("#billing_first_name"),lastNameField:e("#billing_last_name"),phoneField:e("#billing_phone"),selectedOffice:[],offices:[],error:"",document:e(document.body),i18n:wooBg_cvc.i18n}},mounted:function(){var t=this;this.loadLocalStorage(),this.checkFields(),e("#ship-to-different-address-checkbox").on("change",(function(){t.checkFields()})),this.loadOffices(),e("form.checkout").on("checkout_place_order",(function(t){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)})),this.document.on("update_checkout.onUpdate",this.onUpdate),this.document.on("update_checkout.setCookieOffice",this.setCookieData),this.phoneField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.firstNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.lastNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),window.cvcOfficeInitialUpdate&&(this.document.trigger("update_checkout"),window.cvcOfficeInitialUpdate=!1,this.setAddress1FieldData())},methods:{compileLabel:function(e){return""+e.name_bg},checkFields:function(){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1),e("#ship-to-different-address-checkbox").is(":checked")?(this.Address1Field=e("#shipping_address_1"),this.countryField=e("#shipping_country"),this.firstNameField=e("#shipping_first_name"),this.lastNameField=e("#shipping_last_name")):(this.Address1Field=e("#billing_address_1"),this.countryField=e("#billing_country"),this.firstNameField=e("#billing_first_name"),this.lastNameField=e("#billing_last_name")),this.Address1Field.attr("disabled",!0)},loadLocalStorage:function(){var e=localStorage.getItem("woo-bg--cvc-office");e&&(e=JSON.parse(e),this.selectedOffice=(0,a.default)(e.selectedOffice),this.offices=(0,a.default)(e.offices),this.type=(0,a.default)(e.type))},loadOffices:function(){this.loading=!0;var e=this,t={action:"woo_bg_cvc_load_offices",country:this.countryField.val()};d.default.post(woocommerce_params.ajax_url,n.default.stringify(t)).then((function(t){e.offices=(0,a.default)(t.data.data.offices),e.error=!1,e.loading=!1})).catch((function(t){e.message="Имаше проблем. За повече информация вижте конзолата.",console.log(t),e.loading=!1}))},setOffice:function(){this.setLocalStorageData(),this.setAddress1FieldData(),this.document.trigger("update_checkout")},setCookieData:function(){var t={type:"office",receiver:this.firstNameField.val()+" "+this.lastNameField.val(),phone:this.phoneField.val(),selectedOffice:this.selectedOffice?this.selectedOffice.id:null,state:"",city:"",country:this.countryField.val(),payment:e('input[name="payment_method"]:checked').val()};t=encodeURIComponent(JSON.stringify(t)),(0,s.setCookie)("woo-bg--cvc-address",t,1)},setLocalStorageData:function(){var e={selectedOffice:this.selectedOffice,offices:this.offices};localStorage.setItem("woo-bg--cvc-office",JSON.stringify(e))},resetData:function(){this.offices=[],this.selectedOffice="",localStorage.removeItem("woo-bg--cvc-office")},setAddress1FieldData:function(){var e="";this.selectedOffice&&this.selectedOffice.name_bg&&(e=this.i18n.toOffice+this.selectedOffice.name_bg),this.Address1Field.val(e)},triggerUpdateCheckout:function(){this.document.trigger("update_checkout")},onUpdate:function(){this.Address1Field.attr("disabled",!0),this.setCookieData()}},beforeDestroy:function(){this.document.off("update_checkout.setCookieOffice"),this.phoneField.off("change.triggerUpdate"),this.firstNameField.off("change.triggerUpdate"),this.lastNameField.off("change.triggerUpdate"),e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)}}}).call(this,i(0))},20:function(e,t){},239:function(e,t,i){"use strict";i.r(t);var s=i(252),a=i(118);for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);var n=i(75),o=Object(n.a)(a.default,s.a,s.b,!1,null,null,null);t.default=o.exports},240:function(e,t,i){"use strict";i.r(t);var s=i(253),a=i(125);for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);var n=i(75),o=Object(n.a)(a.default,s.a,s.b,!1,null,null,null);t.default=o.exports},252:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"woo-bg--cvc-delivery"},[i("multiselect",{staticClass:"woo-bg-multiselect",attrs:{id:"ajax",placeholder:"","deselect-label":"","open-direction":"bottom","track-by":"id",label:"label","options-limit":30,limit:6,"max-height":600,"close-on-select":e.closeOnSelect,selectedLabel:e.i18n.selected,selectLabel:e.i18n.select,options:e.addresses,loading:e.isLoading,multiple:!1,searchable:!0,"internal-search":!1,"clear-on-select":!1,"show-no-results":!0},on:{"search-change":e.asyncFind,input:e.setAddress},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var s=t.option;return[i("strong",[e._v(e._s(s.label))])]}}]),model:{value:e.selectedAddress,callback:function(t){e.selectedAddress=t},expression:"selectedAddress"}},[e._v(" "),i("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.i18n.noResult))]),e._v(" "),i("span",{attrs:{slot:"noOptions"},slot:"noOptions"},[e._v(e._s(e.i18n.noOptions))]),e._v(" "),i("span",{attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(e._s(e.i18n.searchAddress))])]),e._v(" "),"streets"===e.selectedAddress.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.streetNumber,expression:"streetNumber"}],staticClass:"woo-bg-multiselect--additional-field",attrs:{placeholder:e.i18n.streetNumber,type:"text"},domProps:{value:e.streetNumber},on:{keyup:e.streetNumberChanged,input:function(t){t.target.composing||(e.streetNumber=t.target.value)}}}):e._e(),e._v(" "),"quarters"===e.selectedAddress.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.other,expression:"other"}],staticClass:"woo-bg-multiselect--additional-field",attrs:{placeholder:e.i18n.blVhEt,type:"text"},domProps:{value:e.other},on:{keyup:e.streetNumberChanged,input:function(t){t.target.composing||(e.other=t.target.value)}}}):e._e()],1)},a=[]},253:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"woo-bg--cvc-delivery"},[e.error?i("div",[e._v(e._s(e.error))]):i("div",[i("multiselect",{staticClass:"woo-bg-multiselect",attrs:{id:"ajax",placeholder:"","track-by":"id",label:"name","deselect-label":"","open-direction":"bottom","options-limit":30,limit:6,"max-height":600,selectedLabel:e.i18n.selected,selectLabel:e.i18n.select,options:e.offices,"custom-label":e.compileLabel,multiple:!1,searchable:!0,"show-no-results":!0},on:{input:e.setOffice},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var s=t.option;return[i("strong",[e._v(e._s(s.name_bg))])]}}]),model:{value:e.selectedOffice,callback:function(t){e.selectedOffice=t},expression:"selectedOffice"}},[e._v(" "),i("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.i18n.noResult))]),e._v(" "),i("span",{attrs:{slot:"noOptions"},slot:"noOptions"},[e._v(e._s(e.i18n.noOptions))]),e._v(" "),i("span",{attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(e._s(e.i18n.searchOffice))])])],1)])},a=[]},69:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.office=t.address=void 0,i(78);var s=n(i(77)),a=n(i(239)),d=n(i(240));function n(e){return e&&e.__esModule?e:{default:e}}t.address=s.default.extend({render:function(e){return e(a.default)}}),t.office=s.default.extend({render:function(e){return e(d.default)}})},83:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setCookie=function(e,t,i){var s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3);var a="expires="+s.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"},t.getCookie=function(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),s=0;s<i.length;s++){for(var a=i[s];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""},t.resizeBase64=function(e,t,i,s,a,d,n){var o=document.createElement("canvas"),l=o.getContext("2d"),r=document.createElement("canvas"),c=r.getContext("2d"),h=new Image;h.src=e,h.onload=function(){var e=d(h.width,h.height,t,i),u=e.width,f=e.height;r.width=h.width,r.height=h.height,c.drawImage(h,0,0),o.width=h.width*u,o.height=h.height*f,l.imageSmoothingEnabled=!0,l.mozImageSmoothingEnabled=!0,l.oImageSmoothingEnabled=!0,l.webkitImageSmoothingEnabled=!0,l.imageSmoothingQuality="high",c.imageSmoothingEnabled=!0,c.mozImageSmoothingEnabled=!0,c.oImageSmoothingEnabled=!0,c.webkitImageSmoothingEnabled=!0,c.imageSmoothingQuality="high",l.drawImage(r,0,0,r.width,r.height,0,0,o.width,o.height),n(o.toDataURL(s,a))},h.onerror=function(){console.log("Error while loading image.")}},t.ratioFunction=function(e,t,i,s){var a=1,d=1;return e>i&&(a=i/e),t>s&&(d=s/t),d<a&&(a=d),{width:a,height:a}}}}]);