(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{130:function(e,t,i){"use strict";i.r(t);var s=i(131),a=i.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t.default=a.a},131:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},a=i(83),o=c(i(79)),d=c(i(89)),n=c(i(18)),l=c(i(19)),r=c(i(80));function c(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Multiselect:r.default},data:function(){return{countryField:e("#billing_country"),Address1Field:e("#billing_address_1"),Address2Field:e("#billing_address_2"),stateField:e("#billing_state"),cityField:e("#billing_city"),firstNameField:e("#billing_first_name"),lastNameField:e("#billing_last_name"),phoneField:e("#billing_phone"),toCompanyField:e("#woo-billing-to-company"),vatField:e("#woo_bg_eu_vat_number"),companyField:e("#billing_company"),molField:e("#woo-bg-billing-company-mol"),eikField:e("#woo-bg-billing-company-eik"),selectedAddress:[],addresses:[],state:"",city:"",streetNumber:"",other:"",isLoading:!1,document:e(document.body),i18n:wooBg_econt_address.i18n}},computed:{closeOnSelect:function(){return!!this.city}},mounted:function(){var t=this;this.loadLocalStorage(),this.checkFields(),e("#ship-to-different-address-checkbox").on("change",(function(){t.checkFields()})),this.loadCity(),e("form.checkout").on("checkout_place_order",(function(t){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)})),this.document.on("update_checkout.onUpdate",this.onUpdate),this.phoneField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.firstNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.lastNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.toCompanyField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.vatField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.companyField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.molField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.eikField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),window.econtAddressInitialUpdate&&(this.document.trigger("update_checkout"),window.econtAddressInitialUpdate=!1,this.setAddress1FieldData())},methods:{checkFields:function(){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1),e("#ship-to-different-address-checkbox").is(":checked")?(this.countryField=e("#shipping_country"),this.Address1Field=e("#shipping_address_1"),this.Address2Field=e("#shipping_address_2"),this.stateField=e("#shipping_state"),this.cityField=e("#shipping_city"),this.firstNameField=e("#shipping_first_name"),this.lastNameField=e("#shipping_last_name")):(this.countryField=e("#billing_country"),this.Address1Field=e("#billing_address_1"),this.Address2Field=e("#billing_address_2"),this.stateField=e("#billing_state"),this.cityField=e("#billing_city"),this.firstNameField=e("#billing_first_name"),this.lastNameField=e("#billing_last_name")),this.Address1Field.attr("disabled",!0),this.state=this.stateField.val(),this.cityField.val()&&(this.city=this.cityField.val());var t=this;this.cityField.on("change",(function(){t.city=e(this).val()})),this.stateField.on("change",(function(){t.state=e(this).val()})),this.countryField.on("change",(function(){(0,a.setCookie)("woo-bg--econt-address","",1),t.state=e(this).val()})),this.cityField.on("change.loadCity",this.loadCity),this.stateField.on("change.loadCity",this.loadCity),this.countryField.on("change.loadCity",this.loadCity)},loadLocalStorage:function(){var e=localStorage.getItem("woo-bg--econt-address");e&&(e=JSON.parse(e),this.selectedAddress=(0,o.default)(e.selectedAddress),this.addresses=(0,o.default)(e.addresses),this.state=(0,o.default)(e.state),this.city=(0,o.default)(e.city),this.streetNumber=(0,o.default)(e.streetNumber),this.other=(0,o.default)(e.other))},asyncFind:(0,d.default)((function(e){var t=this;if(e){this.isLoading=!0;var i={query:e,action:"woo_bg_econt_search_address",country:this.countryField.val(),state:this.state,city:this.city};n.default.post(woocommerce_params.ajax_url,l.default.stringify(i)).then((function(e){e.data.data.cities?t.addresses=(0,o.default)(e.data.data.cities):e.data.data.streets&&(t.addresses=(0,o.default)(e.data.data.streets)),t.isLoading=!1}))}}),200),clearAll:function(){this.selectedAddress=[]},loadCity:function(){this.state=this.stateField.val(),this.city=this.cityField.val(),this.loading=!0;var e=this,t={action:"woo_bg_econt_load_streets",state:this.state,city:this.city,country:this.countryField.val()};n.default.post(woocommerce_params.ajax_url,l.default.stringify(t)).then((function(t){var i=[],s=!0;"invalid-city"===t.data.data.status?(e.addresses=(0,o.default)(t.data.data.cities),e.resetData()):e.addresses=(0,o.default)(t.data.data.streets),e.addresses.forEach((function(t){e.selectedAddress.id==t.id&&e.selectedAddress.type==t.type&&e.selectedAddress.orig_key==t.orig_key&&(i=t,s=!1)})),console.log("asf"),console.log(i),console.log("asf"),e.selectedAddress=(0,o.default)(i),s&&(e.streetNumber="",e.other=""),e.setCookieData(),e.loading=!1})).catch((function(t){e.message="Имаше проблем. За повече информация вижте конзолата.",e.loading=!1}))},setAddress:function(e,t){this.city||(this.city=e.label,this.cityField.val(e.label),this.addresses=[],this.selectedAddress=(0,o.default)([]))},streetNumberChanged:(0,d.default)((function(){this.setAddress1FieldData(),this.setLocalStorageData(),this.document.trigger("update_checkout")}),2e3),resetData:function(){this.city="",this.selectedAddress=[],this.streetNumber="",this.other="",localStorage.removeItem("woo-bg--econt-address")},setCookieData:function(){var t=this.firstNameField.val(),i=this.lastNameField.val(),o=this.phoneField.val(),d=e('form[name="checkout"]').serializeArray().reduce((function(e,t){return s({},e,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({},t.name,t.value))}),{}),n={billing_to_company:this.toCompanyField.val(),billing_company_mol:d.billing_company_mol,billing_company:this.companyField.val(),billing_vat_number:d.billing_vat_number,type:"address",receiver:t+" "+i,phone:o,selectedAddress:this.selectedAddress,state:this.state,city:this.city,streetNumber:this.streetNumber,other:this.other,otherField:this.Address2Field.val(),country:this.countryField.val(),payment:e('input[name="payment_method"]:checked').val()};n=encodeURIComponent(JSON.stringify(n)),(0,a.setCookie)("woo-bg--econt-address",n,1)},setLocalStorageData:function(){var e={selectedAddress:this.selectedAddress,addresses:this.addresses,state:this.state,city:this.city,streetNumber:this.streetNumber,other:this.other};localStorage.setItem("woo-bg--econt-address",JSON.stringify(e))},setAddress1FieldData:function(){var e="";"streets"===this.selectedAddress.type?e=this.selectedAddress.label+" "+this.streetNumber:"quarters"===this.selectedAddress.type&&(e=this.selectedAddress.label+" "+this.other),this.Address1Field.val(e)},triggerUpdateCheckout:function(){this.document.trigger("update_checkout")},maybeTriggerUpdate:function(){this.toCompanyField.val()&&this.vatField.val()&&this.companyField.val()&&this.molField.val()&&this.eikField.val()&&this.document.trigger("update_checkout")},onUpdate:function(){this.Address1Field.attr("disabled",!0),this.setCookieData()}},beforeDestroy:function(){this.cityField.off("change.loadCity"),this.stateField.off("change.loadCity"),this.countryField.off("change.loadCity"),this.document.off("update_checkout.onUpdate"),this.phoneField.off("change.triggerUpdate"),this.firstNameField.off("change.triggerUpdate"),this.lastNameField.off("change.triggerUpdate"),this.toCompanyField.off("change.maybeTriggerUpdate"),this.vatField.off("change.maybeTriggerUpdate"),this.companyField.off("change.maybeTriggerUpdate"),this.molField.off("change.maybeTriggerUpdate"),this.eikField.off("change.maybeTriggerUpdate"),e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)}}}).call(this,i(0))},132:function(e,t,i){"use strict";i.r(t);var s=i(133),a=i.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t.default=a.a},133:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},a=i(83),o=r(i(79)),d=r(i(18)),n=r(i(19)),l=r(i(80));function r(e){return e&&e.__esModule?e:{default:e}}i(127),t.default={components:{Multiselect:l.default},data:function(){return{countryField:e("#billing_country"),stateField:e("#billing_state"),cityField:e("#billing_city"),firstNameField:e("#billing_first_name"),lastNameField:e("#billing_last_name"),phoneField:e("#billing_phone"),toCompanyField:e("#woo-billing-to-company"),vatField:e("#woo_bg_eu_vat_number"),companyField:e("#billing_company"),molField:e("#woo-bg-billing-company-mol"),eikField:e("#woo-bg-billing-company-eik"),selectedOffice:[],offices:[],state:"",city:"",error:"",document:e(document.body),i18n:wooBg_econt.i18n}},computed:{officeLocatorUrl:function(){var e="https://officelocator.econt.com/?city="+this.city+"&officeType=office&shopUrl="+window.location.href,t=this;return setTimeout((function(){t.initOfficeLocator()}),50),e}},mounted:function(){var t=this;this.loadLocalStorage(),this.checkFields(),e("#ship-to-different-address-checkbox").on("change",(function(){t.checkFields()})),this.loadOffices(),this.initOfficeLocator(),e("form.checkout").on("checkout_place_order",(function(t){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1)})),this.document.on("update_checkout.onUpdate",this.onUpdate),this.document.on("update_checkout.setCookieOffice",this.setCookieData),this.phoneField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.firstNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.lastNameField.on("change.triggerUpdate",this.triggerUpdateCheckout),this.toCompanyField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.vatField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.companyField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.molField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.eikField.on("change.maybeTriggerUpdate",this.maybeTriggerUpdate),this.cityField.on("change.loadOffices",(function(){t.city=e(this).val(),t.loadOffices()})),this.stateField.on("change.loadOffices",(function(){t.state=e(this).val(),t.loadOffices()})),window.econtOfficeInitialUpdate&&(this.document.trigger("update_checkout"),window.econtOfficeInitialUpdate=!1,this.setAddress1FieldData())},methods:{setOfficeFromLocator:function(t){if("https://officelocator.econt.com"===t.origin&&void 0!==t.data.office){var i=t.data.office.code;if(this.offices.length){var s=this;this.offices.forEach((function(e){e.code==i&&(s.selectedOffice=e,s.setOffice())}))}e.magnificPopup.close()}},initOfficeLocator:function(){e("#woo-bg--econt-office-locator").magnificPopup({type:"iframe",midClick:!0,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe allow="geolocation;" style="border-width: 0px;" class="mfp-iframe"></iframe></div>'}}),window.addEventListener("message",this.setOfficeFromLocator,!1)},compileLabel:function(e){return e.name+" ("+e.address.fullAddress+")"},checkFields:function(){e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1),e("#ship-to-different-address-checkbox").is(":checked")?(this.countryField=e("#shipping_country"),this.Address1Field=e("#shipping_address_1"),this.stateField=e("#shipping_state"),this.cityField=e("#shipping_city"),this.firstNameField=e("#shipping_first_name"),this.lastNameField=e("#shipping_last_name")):(this.countryField=e("#billing_country"),this.Address1Field=e("#billing_address_1"),this.stateField=e("#billing_state"),this.cityField=e("#billing_city"),this.firstNameField=e("#billing_first_name"),this.lastNameField=e("#billing_last_name")),this.Address1Field.attr("disabled",!0),this.state=this.stateField.val(),this.cityField.val()&&(this.city=this.cityField.val())},loadLocalStorage:function(){var e=localStorage.getItem("woo-bg--econt-office");e&&(e=JSON.parse(e),this.selectedOffice=(0,o.default)(e.selectedOffice),this.offices=(0,o.default)(e.offices),this.state=(0,o.default)(e.state),this.city=(0,o.default)(e.city),this.type=(0,o.default)(e.type))},loadOffices:function(){this.state=this.stateField.val(),this.city=this.cityField.val(),this.loading=!0;var e=this,t={action:"woo_bg_econt_load_offices",state:this.state,city:this.city,country:this.countryField.val()};d.default.post(woocommerce_params.ajax_url,n.default.stringify(t)).then((function(t){e.error="";var i=[];"invalid-city"===t.data.data.status?(e.error=t.data.data.error,e.resetData()):t.data.data.offices.length?e.offices=(0,o.default)(t.data.data.offices):(e.error=t.data.data.error,e.resetData()),e.offices.forEach((function(t){e.selectedOffice&&e.selectedOffice.code==t.code&&(i=t)})),e.selectedOffice=(0,o.default)(i),e.setCookieData(),e.loading=!1})).catch((function(t){e.message="Имаше проблем. За повече информация вижте конзолата.",console.log(t),e.loading=!1}))},setOffice:function(){this.setLocalStorageData(),this.setAddress1FieldData(),this.document.trigger("update_checkout")},setCookieData:function(){var t=this.firstNameField.val(),i=this.lastNameField.val(),o=this.phoneField.val(),d=e('form[name="checkout"]').serializeArray().reduce((function(e,t){return s({},e,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({},t.name,t.value))}),{}),n={billing_to_company:this.toCompanyField.val(),billing_company_mol:d.billing_company_mol,billing_company:this.companyField.val(),billing_vat_number:d.billing_vat_number,type:"office",receiver:t+" "+i,phone:o,selectedOffice:this.selectedOffice?this.selectedOffice.code:null,selectedOfficeIsAPS:this.selectedOffice?this.selectedOffice.isAPS:null,state:this.state,city:this.city,country:this.countryField.val(),payment:e('input[name="payment_method"]:checked').val()};n=encodeURIComponent(JSON.stringify(n)),(0,a.setCookie)("woo-bg--econt-address",n,1)},setLocalStorageData:function(){var e={selectedOffice:this.selectedOffice,offices:this.offices,state:this.state,city:this.city};localStorage.setItem("woo-bg--econt-office",JSON.stringify(e))},resetData:function(){this.offices=[],this.selectedOffice="",this.streetNumber="",this.other="",localStorage.removeItem("woo-bg--econt-office"),this.setCookieData()},setAddress1FieldData:function(){var e="";this.selectedOffice&&this.selectedOffice.name&&(e=this.i18n.toOffice+this.selectedOffice.name+" ( "+this.selectedOffice.address.fullAddress+" ) "),this.Address1Field.val(e)},triggerUpdateCheckout:function(){this.document.trigger("update_checkout")},maybeTriggerUpdate:function(){this.toCompanyField.val()&&this.vatField.val()&&this.companyField.val()&&this.molField.val()&&this.eikField.val()&&this.document.trigger("update_checkout")},onUpdate:function(){this.Address1Field.attr("disabled",!0),this.setCookieData()}},beforeDestroy:function(){this.document.off("update_checkout.onUpdate"),this.document.off("update_checkout.setCookieOffice"),this.phoneField.off("change.triggerUpdate"),this.firstNameField.off("change.triggerUpdate"),this.lastNameField.off("change.triggerUpdate"),this.cityField.off("change.loadOffices"),this.stateField.off("change.loadOffices"),this.toCompanyField.off("change.maybeTriggerUpdate"),this.vatField.off("change.maybeTriggerUpdate"),this.companyField.off("change.maybeTriggerUpdate"),this.molField.off("change.maybeTriggerUpdate"),this.eikField.off("change.maybeTriggerUpdate"),e("#billing_address_1").attr("disabled",!1),e("#shipping_address_1").attr("disabled",!1),window.removeEventListener("message",this.setOfficeFromLocator,!1)}}}).call(this,i(0))},20:function(e,t){},242:function(e,t,i){"use strict";i.r(t);var s=i(255),a=i(130);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);var d=i(75),n=Object(d.a)(a.default,s.a,s.b,!1,null,null,null);t.default=n.exports},243:function(e,t,i){"use strict";i.r(t);var s=i(256),a=i(132);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);var d=i(75),n=Object(d.a)(a.default,s.a,s.b,!1,null,null,null);t.default=n.exports},255:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"woo-bg--econt-delivery"},[i("multiselect",{staticClass:"woo-bg-multiselect",attrs:{id:"ajax",placeholder:"","deselect-label":"","open-direction":"bottom","track-by":"id",label:"label","options-limit":30,limit:6,"max-height":600,"close-on-select":e.closeOnSelect,selectedLabel:e.i18n.selected,selectLabel:e.i18n.select,options:e.addresses,loading:e.isLoading,multiple:!1,searchable:!0,"internal-search":!1,"clear-on-select":!1,"show-no-results":!0},on:{"search-change":e.asyncFind,input:e.setAddress},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var s=t.option;return[i("strong",[e._v(e._s(s.label))])]}}]),model:{value:e.selectedAddress,callback:function(t){e.selectedAddress=t},expression:"selectedAddress"}},[e._v(" "),i("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.i18n.noResult))]),e._v(" "),i("span",{attrs:{slot:"noOptions"},slot:"noOptions"},[e._v(e._s(e.i18n.noOptions))]),e._v(" "),i("span",{attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(e._s(e.i18n.searchAddress))])]),e._v(" "),e.selectedAddress.type&&"streets"===e.selectedAddress.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.streetNumber,expression:"streetNumber"}],staticClass:"woo-bg-multiselect--additional-field input-text",attrs:{placeholder:e.i18n.streetNumber,type:"text"},domProps:{value:e.streetNumber},on:{keyup:e.streetNumberChanged,input:function(t){t.target.composing||(e.streetNumber=t.target.value)}}}):e._e(),e._v(" "),e.selectedAddress.type&&"quarters"===e.selectedAddress.type?i("input",{directives:[{name:"model",rawName:"v-model",value:e.other,expression:"other"}],staticClass:"woo-bg-multiselect--additional-field input-text",attrs:{placeholder:e.i18n.blVhEt,type:"text"},domProps:{value:e.other},on:{keyup:e.streetNumberChanged,input:function(t){t.target.composing||(e.other=t.target.value)}}}):e._e()],1)},a=[]},256:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"woo-bg--econt-delivery"},[e.error?i("div",{staticClass:"woo-bg--office-error"},[e._v(e._s(e.error))]):i("div",[i("multiselect",{staticClass:"woo-bg-multiselect",attrs:{id:"ajax",placeholder:"","track-by":"id",label:"name","deselect-label":"","open-direction":"bottom","options-limit":30,limit:6,"max-height":600,selectedLabel:e.i18n.selected,selectLabel:e.i18n.select,options:e.offices,"custom-label":e.compileLabel,multiple:!1,searchable:!0,"show-no-results":!0},on:{input:e.setOffice},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var s=t.option;return[i("strong",[e._v(e._s(s.name)+" ( "+e._s(s.address.fullAddress)+" )")])]}}]),model:{value:e.selectedOffice,callback:function(t){e.selectedOffice=t},expression:"selectedOffice"}},[e._v(" "),i("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v(e._s(e.i18n.noResult))]),e._v(" "),i("span",{attrs:{slot:"noOptions"},slot:"noOptions"},[e._v(e._s(e.i18n.noOptions))]),e._v(" "),i("span",{attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(e._s(e.i18n.searchOffice))])]),e._v(" "),i("a",{attrs:{id:"woo-bg--econt-office-locator",href:e.officeLocatorUrl}},[e._v(e._s(e.i18n.officeLocator))])],1)])},a=[]},71:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.office=t.address=void 0,i(78);var s=d(i(77)),a=d(i(242)),o=d(i(243));function d(e){return e&&e.__esModule?e:{default:e}}t.address=s.default.extend({render:function(e){return e(a.default)}}),t.office=s.default.extend({render:function(e){return e(o.default)}})},83:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setCookie=function(e,t,i){var s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3);var a="expires="+s.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"},t.getCookie=function(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),s=0;s<i.length;s++){for(var a=i[s];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""},t.resizeBase64=function(e,t,i,s,a,o,d){var n=document.createElement("canvas"),l=n.getContext("2d"),r=document.createElement("canvas"),c=r.getContext("2d"),h=new Image;h.src=e,h.onload=function(){var e=o(h.width,h.height,t,i),f=e.width,u=e.height;r.width=h.width,r.height=h.height,c.drawImage(h,0,0),n.width=h.width*f,n.height=h.height*u,l.imageSmoothingEnabled=!0,l.mozImageSmoothingEnabled=!0,l.oImageSmoothingEnabled=!0,l.webkitImageSmoothingEnabled=!0,l.imageSmoothingQuality="high",c.imageSmoothingEnabled=!0,c.mozImageSmoothingEnabled=!0,c.oImageSmoothingEnabled=!0,c.webkitImageSmoothingEnabled=!0,c.imageSmoothingQuality="high",l.drawImage(r,0,0,r.width,r.height,0,0,n.width,n.height),d(n.toDataURL(s,a))},h.onerror=function(){console.log("Error while loading image.")}},t.ratioFunction=function(e,t,i,s){var a=1,o=1;return e>i&&(a=i/e),t>s&&(o=s/t),o<a&&(a=o),{width:a,height:a}}}}]);