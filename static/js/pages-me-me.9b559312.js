(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"0d1f":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{newList2:1}},onShow:function(){uni.getStorageSync("List")&&(this.newList2=uni.getStorageSync("List"))}};n.default=i},"0f01":function(t,n,e){"use strict";e.r(n);var i=e("0d1f"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"39bd":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={mynewlist:e("056c").default},r=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"meContainer"},[n("v-uni-view",[n("v-uni-image",{attrs:{src:e("3a6d"),mode:"widthFix"}}),n("v-uni-text",[this._v("浏览历史")])],1),n("v-uni-view",{staticClass:"listheight"},[n("mynewlist",{attrs:{myid:0,mynum:0,newList2:this.newList2}})],1),1==this.newList2?n("v-uni-view",{staticClass:"meContainerbotton"},[n("v-uni-image",{attrs:{src:e("65fe"),mode:"widthFix"}}),n("v-uni-text",[this._v("暂无浏览历史")])],1):this._e()],1)},a=[]},"3a6d":function(t,n,e){t.exports=e.p+"static/img/nopic.815d1eee.jpg"},"65fe":function(t,n,e){t.exports=e.p+"static/img/nohis.d1c11c02.png"},"81c7":function(t,n,e){var i=e("e7f4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("c2f17374",i,!0,{sourceMap:!1,shadowMode:!1})},"9b4d":function(t,n,e){"use strict";var i=e("81c7"),r=e.n(i);r.a},bf83:function(t,n,e){"use strict";e.r(n);var i=e("39bd"),r=e("0f01");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("9b4d");var s=e("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"0636e44a",null,!1,i["a"],void 0);n["default"]=u.exports},e7f4:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.meContainer[data-v-0636e44a]{display:flex;flex-direction:column;justify-content:space-around;align-items:center}.meContainer uni-text[data-v-0636e44a]{display:block;text-align:center;color:#a5a5a5}.meContainer .listheight[data-v-0636e44a]{width:100vw}.meContainer uni-image[data-v-0636e44a]{width:100vw}',""]),t.exports=n}}]);