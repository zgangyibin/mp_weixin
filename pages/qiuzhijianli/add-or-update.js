(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiuzhijianli/add-or-update"],{"1da8":function(i,e,t){"use strict";t.r(e);var n=t("e833"),r=t("6bb1");for(var a in r)"default"!==a&&function(i){t.d(e,i,(function(){return r[i]}))}(a);t("5494");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7eb47469",null,!1,n["a"],u);e["default"]=o.exports},"476a":function(i,e,t){},5494:function(i,e,t){"use strict";var n=t("476a"),r=t.n(n);r.a},"6bb1":function(i,e,t){"use strict";t.r(e);var n=t("eb74"),r=t.n(n);for(var a in n)"default"!==a&&function(i){t.d(e,i,(function(){return n[i]}))}(a);e["default"]=r.a},"6caba":function(i,e,t){"use strict";(function(i){t("6cdc"),t("921b");n(t("66fd"));var e=n(t("1da8"));function n(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,t("543d")["createPage"])},e833:function(i,e,t){"use strict";var n={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},r=function(){var i=this,e=i.$createElement,t=(i._self._c,i.ruleForm.touxiang.split(","));i.$mp.data=Object.assign({},{$root:{g0:t}})},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return n}))},eb74:function(i,e,t){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("a34a"));function r(i){return i&&i.__esModule?i:{default:i}}function a(i,e,t,n,r,a,u){try{var s=i[a](u),o=s.value}catch(h){return void t(h)}s.done?e(o):Promise.resolve(o).then(n,r)}function u(i){return function(){var e=this,t=arguments;return new Promise((function(n,r){var u=i.apply(e,t);function s(i){a(u,n,r,s,o,"next",i)}function o(i){a(u,n,r,s,o,"throw",i)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},h={data:function(){return{cross:"",ruleForm:{xuehao:"",xueshengxingming:"",touxiang:"",xingbie:"",nianling:"",zhuanye:"",xueli:"",biyeyuanxiao:"",waiyushuiping:"",qiuzhiyixiang:"",qiwangxinzi:"",shehuishijian:"",gerenjianjie:"",userid:""},qiuzhiyixiangOptions:[],qiuzhiyixiangIndex:0,user:{},ro:{xuehao:!1,xueshengxingming:!1,touxiang:!1,xingbie:!1,nianling:!1,zhuanye:!1,xueli:!1,biyeyuanxiao:!1,waiyushuiping:!1,qiuzhiyixiang:!1,qiwangxinzi:!1,shehuishijian:!1,gerenjianjie:!1,userid:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(n.default.mark((function e(t){var r,a,u,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return a=e.sent,this.user=a.data,this.ruleForm.xuehao=this.user.xuehao,this.ro.xuehao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.touxiang=this.user.touxiang,this.ro.touxiang=!0,this.ruleForm.xingbie=this.user.xingbie,this.ro.xingbie=!0,e.next=15,this.$api.option("zhiweileibie","zhiweileibie",{});case 15:if(a=e.sent,this.qiuzhiyixiangOptions=a.data,this.qiuzhiyixiangOptions.unshift("请选择求职意向"),this.ruleForm.userid=i.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!t.id){e.next=26;break}return this.ruleForm.id=t.id,e.next=24,this.$api.info("qiuzhijianli",this.ruleForm.id);case 24:a=e.sent,this.ruleForm=a.data;case 26:if(this.cross=t.cross,!t.cross){e.next=90;break}u=i.getStorageSync("crossObj"),e.t0=n.default.keys(u);case 30:if((e.t1=e.t0()).done){e.next=90;break}if(s=e.t1.value,"xuehao"!=s){e.next=36;break}return this.ruleForm.xuehao=u[s],this.ro.xuehao=!0,e.abrupt("continue",30);case 36:if("xueshengxingming"!=s){e.next=40;break}return this.ruleForm.xueshengxingming=u[s],this.ro.xueshengxingming=!0,e.abrupt("continue",30);case 40:if("touxiang"!=s){e.next=44;break}return this.ruleForm.touxiang=u[s].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",30);case 44:if("xingbie"!=s){e.next=48;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,e.abrupt("continue",30);case 48:if("nianling"!=s){e.next=52;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,e.abrupt("continue",30);case 52:if("zhuanye"!=s){e.next=56;break}return this.ruleForm.zhuanye=u[s],this.ro.zhuanye=!0,e.abrupt("continue",30);case 56:if("xueli"!=s){e.next=60;break}return this.ruleForm.xueli=u[s],this.ro.xueli=!0,e.abrupt("continue",30);case 60:if("biyeyuanxiao"!=s){e.next=64;break}return this.ruleForm.biyeyuanxiao=u[s],this.ro.biyeyuanxiao=!0,e.abrupt("continue",30);case 64:if("waiyushuiping"!=s){e.next=68;break}return this.ruleForm.waiyushuiping=u[s],this.ro.waiyushuiping=!0,e.abrupt("continue",30);case 68:if("qiuzhiyixiang"!=s){e.next=72;break}return this.ruleForm.qiuzhiyixiang=u[s],this.ro.qiuzhiyixiang=!0,e.abrupt("continue",30);case 72:if("qiwangxinzi"!=s){e.next=76;break}return this.ruleForm.qiwangxinzi=u[s],this.ro.qiwangxinzi=!0,e.abrupt("continue",30);case 76:if("shehuishijian"!=s){e.next=80;break}return this.ruleForm.shehuishijian=u[s],this.ro.shehuishijian=!0,e.abrupt("continue",30);case 80:if("gerenjianjie"!=s){e.next=84;break}return this.ruleForm.gerenjianjie=u[s],this.ro.gerenjianjie=!0,e.abrupt("continue",30);case 84:if("userid"!=s){e.next=88;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,e.abrupt("continue",30);case 88:e.next=30;break;case 90:this.styleChange();case 91:case"end":return e.stop()}}),e,this)})));function t(i){return e.apply(this,arguments)}return t}(),methods:{gerenjianjieChange:function(i){this.ruleForm.gerenjianjie=i},styleChange:function(){this.$nextTick((function(){}))},qiuzhiyixiangChange:function(i){this.qiuzhiyixiangIndex=i.target.value,this.ruleForm.qiuzhiyixiang=this.qiuzhiyixiangOptions[this.qiuzhiyixiangIndex]},touxiangTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.touxiang="upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){var t,r,a,u,s,o,h,c,l,g;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhuanye){e.next=3;break}return this.$utils.msg("专业不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xueli){e.next=6;break}return this.$utils.msg("学历不能为空"),e.abrupt("return");case 6:if(this.ruleForm.biyeyuanxiao){e.next=9;break}return this.$utils.msg("毕业院校不能为空"),e.abrupt("return");case 9:if(this.ruleForm.waiyushuiping){e.next=12;break}return this.$utils.msg("外语水平不能为空"),e.abrupt("return");case 12:if(this.ruleForm.qiuzhiyixiang){e.next=15;break}return this.$utils.msg("求职意向不能为空"),e.abrupt("return");case 15:if(this.ruleForm.qiwangxinzi){e.next=18;break}return this.$utils.msg("期望薪资不能为空"),e.abrupt("return");case 18:if(!this.cross){e.next=34;break}if(s=i.getStorageSync("statusColumnName"),o=i.getStorageSync("statusColumnValue"),""==s){e.next=34;break}if(t||(t=i.getStorageSync("crossObj")),s.startsWith("[")){e.next=30;break}for(h in t)h==s&&(t[h]=o);return c=i.getStorageSync("crossTable"),e.next=28,this.$api.update("".concat(c),t);case 28:e.next=34;break;case 30:r=Number(i.getStorageSync("userid")),a=t["id"],u=i.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!a||!r){e.next=56;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},e.next=40,this.$api.list("qiuzhijianli",l);case 40:if(g=e.sent,!(g.data.total>=u)){e.next=46;break}return this.$utils.msg(i.getStorageSync("tips")),e.abrupt("return",!1);case 46:if(!this.ruleForm.id){e.next=51;break}return e.next=49,this.$api.update("qiuzhijianli",this.ruleForm);case 49:e.next=53;break;case 51:return e.next=53,this.$api.add("qiuzhijianli",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:e.next=64;break;case 56:if(!this.ruleForm.id){e.next=61;break}return e.next=59,this.$api.update("qiuzhijianli",this.ruleForm);case 59:e.next=63;break;case 61:return e.next=63,this.$api.add("qiuzhijianli",this.ruleForm);case 63:this.$utils.msgBack("提交成功");case 64:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};e.default=h}).call(this,t("543d")["default"])}},[["6caba","common/runtime","common/vendor"]]]);