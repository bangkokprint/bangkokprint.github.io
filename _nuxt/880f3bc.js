(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{389:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(49),n(50),n(89),{data:function(){return{loading:!0,errors:{}}},mounted:function(){this.token({token:this.$route.query.access,to:this.$route.query.to})},methods:{token:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.$validator(e,{token:"required"}).fails()){n.next=3;break}return n.abrupt("return",t.errors={message:["No token"]});case 3:return n.next=5,t.$axios.$get("".concat(t.$nuxt.context.env.api.auth,"/v1/login/token?_id=").concat(e.token)).then((function(data){t.$auth.$state.loggedIn||(t.$axios.setToken(data.access_token,"Bearer"),t.$auth.setUserToken(data.access_token)),setTimeout((function(){window.location.href=e.to}),1500)})).catch((function(e){t.loading=!1,t.errors={message:"jwt expired"==e.response.data.errors.message?["Token หมดอายุการใช้งาน กรุณาตรวจสอบใหม่อีกครั้ง"]:e.response.data.errors.message}}));case 5:case"end":return n.stop()}}),n)})))()}}}),c=n(57),l={auth:!1,components:{formToken:Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.errors.hasOwnProperty("message")?t("div",{staticClass:"ui negative message"},[t("h3",{staticClass:"ui header fwn red"},[e._v(e._s(e.errors.message[0]))])]):e._e(),e._v(" "),e.loading?t("div",{staticClass:"ui segment no box shadow"},[e._m(0)]):e._e()])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"ui grid"},[t("div",{staticClass:"sixteen wide column"},[t("h3",{staticClass:"ui header fwn red"},[t("i",{staticClass:"circle notch icon loading"}),e._v(" "),t("div",{staticClass:"content"},[e._v("กำลังค้นหาเส้นทาง . . .")])])])])}],!1,null,null,null).exports}},d=Object(c.a)(l,(function(){var e=this._self._c;return e("div",{staticClass:"ui form"},[e("form-token")],1)}),[],!1,null,null,null);t.default=d.exports}}]);