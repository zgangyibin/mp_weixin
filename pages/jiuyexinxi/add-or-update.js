(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiuyexinxi/add-or-update"],{"1faa":function(e,i,t){"use strict";var r=t("ec81"),n=t.n(r);n.a},"21ee":function(e,i,t){"use strict";t.r(i);var r=t("e01c"),n=t("39b3");for(var u in n)"default"!==u&&function(e){t.d(i,e,(function(){return n[e]}))}(u);t("1faa");var a,s=t("f0c5"),o=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"acc59530",null,!1,r["a"],a);i["default"]=o.exports},"39b3":function(e,i,t){"use strict";t.r(i);var r=t("af3a"),n=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(i,e,(function(){return r[e]}))}(u);i["default"]=n.a},af3a:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(t("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,i,t,r,n,u,a){try{var s=e[u](a),o=s.value}catch(c){return void t(c)}s.done?i(o):Promise.resolve(o).then(r,n)}function a(e){return function(){var i=this,t=arguments;return new Promise((function(r,n){var a=e.apply(i,t);function s(e){u(a,r,n,s,o,"next",e)}function o(e){u(a,r,n,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{xuehao:"",xueshengxingming:"",touxiang:"",xingbie:"",shoujihaoma:"",zhuanye:"",jiuyeqiye:"",jiuyegangwei:"",qiyedizhi:"",jiuyeriqi:"",beizhu:"",dengjishijian:"",userid:""},user:{},ro:{xuehao:!1,xueshengxingming:!1,touxiang:!1,xingbie:!1,shoujihaoma:!1,zhuanye:!1,jiuyeqiye:!1,jiuyegangwei:!1,qiyedizhi:!1,jiuyeriqi:!1,beizhu:!1,dengjishijian:!1,userid:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var i=a(r.default.mark((function i(t){var n,u,a,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDateTime(),n=e.getStorageSync("nowTable"),i.next=4,this.$api.session(n);case 4:if(u=i.sent,this.user=u.data,this.ruleForm.xuehao=this.user.xuehao,this.ro.xuehao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.touxiang=this.user.touxiang,this.ro.touxiang=!0,this.ruleForm.xingbie=this.user.xingbie,this.ro.xingbie=!0,this.ruleForm.shoujihaoma=this.user.shoujihaoma,this.ro.shoujihaoma=!0,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){i.next=24;break}return this.ruleForm.id=t.id,i.next=22,this.$api.info("jiuyexinxi",this.ruleForm.id);case 22:u=i.sent,this.ruleForm=u.data;case 24:if(this.cross=t.cross,!t.cross){i.next=84;break}a=e.getStorageSync("crossObj"),i.t0=r.default.keys(a);case 28:if((i.t1=i.t0()).done){i.next=84;break}if(s=i.t1.value,"xuehao"!=s){i.next=34;break}return this.ruleForm.xuehao=a[s],this.ro.xuehao=!0,i.abrupt("continue",28);case 34:if("xueshengxingming"!=s){i.next=38;break}return this.ruleForm.xueshengxingming=a[s],this.ro.xueshengxingming=!0,i.abrupt("continue",28);case 38:if("touxiang"!=s){i.next=42;break}return this.ruleForm.touxiang=a[s].split(",")[0],this.ro.touxiang=!0,i.abrupt("continue",28);case 42:if("xingbie"!=s){i.next=46;break}return this.ruleForm.xingbie=a[s],this.ro.xingbie=!0,i.abrupt("continue",28);case 46:if("shoujihaoma"!=s){i.next=50;break}return this.ruleForm.shoujihaoma=a[s],this.ro.shoujihaoma=!0,i.abrupt("continue",28);case 50:if("zhuanye"!=s){i.next=54;break}return this.ruleForm.zhuanye=a[s],this.ro.zhuanye=!0,i.abrupt("continue",28);case 54:if("jiuyeqiye"!=s){i.next=58;break}return this.ruleForm.jiuyeqiye=a[s],this.ro.jiuyeqiye=!0,i.abrupt("continue",28);case 58:if("jiuyegangwei"!=s){i.next=62;break}return this.ruleForm.jiuyegangwei=a[s],this.ro.jiuyegangwei=!0,i.abrupt("continue",28);case 62:if("qiyedizhi"!=s){i.next=66;break}return this.ruleForm.qiyedizhi=a[s],this.ro.qiyedizhi=!0,i.abrupt("continue",28);case 66:if("jiuyeriqi"!=s){i.next=70;break}return this.ruleForm.jiuyeriqi=a[s],this.ro.jiuyeriqi=!0,i.abrupt("continue",28);case 70:if("beizhu"!=s){i.next=74;break}return this.ruleForm.beizhu=a[s],this.ro.beizhu=!0,i.abrupt("continue",28);case 74:if("dengjishijian"!=s){i.next=78;break}return this.ruleForm.dengjishijian=a[s],this.ro.dengjishijian=!0,i.abrupt("continue",28);case 78:if("userid"!=s){i.next=82;break}return this.ruleForm.userid=a[s],this.ro.userid=!0,i.abrupt("continue",28);case 82:i.next=28;break;case 84:this.styleChange();case 85:case"end":return i.stop()}}),i,this)})));function t(e){return i.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jiuyeriqiChange:function(e){this.ruleForm.jiuyeriqi=e.target.value,this.$forceUpdate()},dengjishijianConfirm:function(e){console.log(e),this.ruleForm.dengjishijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.touxiang="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=a(r.default.mark((function i(){var t,n,u,a,s,o,c,h,l,f;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.jiuyeqiye){i.next=3;break}return this.$utils.msg("就业企业不能为空"),i.abrupt("return");case 3:if(this.ruleForm.jiuyegangwei){i.next=6;break}return this.$utils.msg("就业岗位不能为空"),i.abrupt("return");case 6:if(this.ruleForm.jiuyeriqi){i.next=9;break}return this.$utils.msg("就业日期不能为空"),i.abrupt("return");case 9:if(!this.cross){i.next=25;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){i.next=25;break}if(t||(t=e.getStorageSync("crossObj")),s.startsWith("[")){i.next=21;break}for(c in t)c==s&&(t[c]=o);return h=e.getStorageSync("crossTable"),i.next=19,this.$api.update("".concat(h),t);case 19:i.next=25;break;case 21:n=Number(e.getStorageSync("userid")),u=t["id"],a=e.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!n){i.next=47;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=u,l={page:1,limit:10,crossuserid:n,crossrefid:u},i.next=31,this.$api.list("jiuyexinxi",l);case 31:if(f=i.sent,!(f.data.total>=a)){i.next=37;break}return this.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 37:if(!this.ruleForm.id){i.next=42;break}return i.next=40,this.$api.update("jiuyexinxi",this.ruleForm);case 40:i.next=44;break;case 42:return i.next=44,this.$api.add("jiuyexinxi",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:i.next=55;break;case 47:if(!this.ruleForm.id){i.next=52;break}return i.next=50,this.$api.update("jiuyexinxi",this.ruleForm);case 50:i.next=54;break;case 52:return i.next=54,this.$api.add("jiuyexinxi",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};i.default=c}).call(this,t("543d")["default"])},e01c:function(e,i,t){"use strict";var r={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},n=function(){var e=this,i=e.$createElement,t=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:t}})},u=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return u})),t.d(i,"a",(function(){return r}))},ec81:function(e,i,t){},fe2d:function(e,i,t){"use strict";(function(e){t("6cdc"),t("921b");r(t("66fd"));var i=r(t("21ee"));function r(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,t("543d")["createPage"])}},[["fe2d","common/runtime","common/vendor"]]]);