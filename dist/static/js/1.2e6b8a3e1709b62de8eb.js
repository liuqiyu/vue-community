webpackJsonp([1],{"0vZr":function(e,s){},"6f/g":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t("Dd8w"),o=t.n(r),i=t("NYxO"),n={props:{loginDialogVisible:!1},data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:o()({},Object(i.b)(["login"]),{handleClose:function(){this.$emit("closeLogin")},logins:function(e){var s=this;this.$refs[e].validate(function(e){return!!e&&(s.login(s.ruleForm).then(function(e){s.$emit("closeLogin"),s.$message({message:e,type:"success"})}).catch(function(e){s.$message({message:e,type:"error"})}),!0)})}})},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-dialog",{attrs:{title:"登录","close-on-press-escape":!1,"close-on-click-modal":!1,"append-to-body":!0,visible:e.loginDialogVisible,width:"30%","before-close":e.handleClose}},[t("div",{staticClass:"d-body"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.logins("ruleForm")}},model:{value:e.ruleForm.username,callback:function(s){e.$set(e.ruleForm,"username",s)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.logins("ruleForm")}},model:{value:e.ruleForm.password,callback:function(s){e.$set(e.ruleForm,"password",s)},expression:"ruleForm.password"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){e.logins("ruleForm")}}},[e._v("确 定")])],1)])},staticRenderFns:[]};var l=t("VU/8")(n,a,!1,function(e){t("L8mu")},"data-v-71e9b98e",null).exports,c=t("vMJZ"),u={props:{registerDialogVisible:!1},data:function(){return{ruleForm:{username:"",password:"",password1:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],password1:[{required:!0,message:"请确认密码",trigger:"blur"}]}}},methods:{handleClose:function(){this.$emit("closeRegister")},register:function(e){var s=this;this.$refs[e].validate(function(e){return!!e&&(c.a.register(s.ruleForm).then(function(e){200===e.data.code?s.$message({message:e.data.message,type:"success"}):s.$message({message:e.data.message,type:"error"}),s.$emit("closeRegister")}),!0)})}}},p={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-dialog",{attrs:{title:"注册","close-on-press-escape":!1,"close-on-click-modal":!1,"append-to-body":!0,visible:e.registerDialogVisible,width:"500px","before-close":e.handleClose}},[t("div",{staticClass:"d-body"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,size:"small","label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.register("ruleForm")}},model:{value:e.ruleForm.username,callback:function(s){e.$set(e.ruleForm,"username",s)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.register("ruleForm")}},model:{value:e.ruleForm.password,callback:function(s){e.$set(e.ruleForm,"password",s)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"password1"}},[t("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.register("ruleForm")}},model:{value:e.ruleForm.password1,callback:function(s){e.$set(e.ruleForm,"password1",s)},expression:"ruleForm.password1"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){e.register("ruleForm")}}},[e._v("确 定")])],1)])},staticRenderFns:[]};var m=t("VU/8")(u,p,!1,function(e){t("b6dg")},"data-v-1156bf12",null).exports,d=t("JaHG"),f={components:{Login:l,Register:m},mounted:function(){var e=this;document.addEventListener("click",function(){e.closeDropDown()})},data:function(){return{loginDialogVisible:!1,registerDialogVisible:!1,showUserMenu:!1,showSearch:!1,searchValue:""}},methods:o()({},Object(i.b)(["logout"]),{register:function(){this.registerDialogVisible=!0},closeRegister:function(){this.registerDialogVisible=!1},login:function(){this.loginDialogVisible=!0},closeLogin:function(){this.loginDialogVisible=!1},logouts:function(){var e=this;this.logout().then(function(s){e.$message({message:s,type:"success"}),e.closeDropDown()}).catch(function(s){e.$message({message:s,type:"error"})})},refresh:function(){this.$router.push({path:"/"})},showDropDown:function(e){var s=this;switch(Object(d.a)(this.$refs.dropDown,e+"show")?this.$refs.dropDown.classList.remove(e+"show"):(this.$refs.dropDown.classList.remove("infoshow"),this.$refs.dropDown.classList.remove("searchshow"),this.$refs.dropDown.classList.add(e+"show")),e){case"search":this.showUserMenu=!1,this.showSearch=!0,this.$nextTick(function(){s.$refs.searchIpt.focus()});break;case"info":this.showUserMenu=!0,this.showSearch=!1}},closeDropDown:function(){this.$refs.dropDown.classList.remove("infoshow"),this.$refs.dropDown.classList.remove("searchshow"),this.showUserMenu=!1,this.showSearch=!1}})},g={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",{staticClass:"App-header"},[t("div",{staticClass:"wrap m-auto app-top flex-row"},[t("h1",{on:{click:e.refresh}},[t("span",{staticClass:"iconfont icon-shequ1"}),e._v("Community")]),e._v(" "),t("div",{staticClass:"right-bar"},[this.$store.state.login.username?e._e():t("div",{staticClass:"r-top-btn"},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.register}},[e._v("注册")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.login}},[e._v("登录")])],1),e._v(" "),t("ul",{staticClass:"t-navigation clearfix"},[t("li",{on:{click:function(s){s.stopPropagation(),e.showDropDown("search")}}},[t("span",{staticClass:"el-icon-search"})]),e._v(" "),this.$store.state.login.username?t("li",{staticClass:"photo",on:{click:function(s){s.stopPropagation(),e.showDropDown("info")}}},[t("span",[e._v(e._s(this.$store.getters.firstWorld))])]):e._e()]),e._v(" "),t("div",{ref:"dropDown",staticClass:"drop-down",on:{click:function(e){e.stopPropagation()}}},[e.showUserMenu?t("div",{staticClass:"user-menu"},[t("ul",[t("li",[t("div",{staticClass:"sp"},[t("span",{staticClass:"iconfont icon-wo icon"}),e._v(e._s(this.$store.state.login.username)+"\n              ")]),e._v(" "),e._m(0)]),e._v(" "),t("li",[t("div",{staticClass:"sp logout",on:{click:e.logouts}},[t("span",{staticClass:"icon iconfont icon-dengchu1"}),e._v("\n                登出")])])])]):e._e(),e._v(" "),e.showSearch?t("div",{staticClass:"search-menu"},[t("el-input",{ref:"searchIpt",attrs:{size:"small",placeholder:"请输入主题、帖子"},model:{value:e.searchValue,callback:function(s){e.searchValue=s},expression:"searchValue"}})],1):e._e()])])]),e._v(" "),t("Login",{attrs:{loginDialogVisible:e.loginDialogVisible},on:{closeLogin:e.closeLogin}}),e._v(" "),t("Register",{attrs:{registerDialogVisible:e.registerDialogVisible},on:{closeRegister:e.closeRegister}})],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"sp"},[s("span",{staticClass:"el-icon-setting"})])}]};var h={mounted:function(){this.loginStatus()},components:{Topbar:t("VU/8")(f,g,!1,function(e){t("RfpL")},"data-v-1c063b19",null).exports},methods:o()({},Object(i.b)(["loginStatus"]))},v={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"App"},[s("Topbar"),this._v(" "),s("div",{staticClass:"App-body wrap m-auto"},[s("router-view")],1)],1)},staticRenderFns:[]};var b=t("VU/8")(h,v,!1,function(e){t("0vZr")},"data-v-7753b502",null);s.default=b.exports},JaHG:function(e,s,t){"use strict";t.d(s,"a",function(){return i}),t.d(s,"b",function(){return n});var r=t("mvHQ"),o=(t.n(r),t("pFYg")),i=(t.n(o),function(e,s){return(" "+e.className+" ").indexOf(" "+s+" ")>-1}),n=function(){return"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}},L8mu:function(e,s){},RfpL:function(e,s){},b6dg:function(e,s){},mvHQ:function(e,s,t){e.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(e,s,t){var r=t("FeBl"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});
//# sourceMappingURL=1.2e6b8a3e1709b62de8eb.js.map