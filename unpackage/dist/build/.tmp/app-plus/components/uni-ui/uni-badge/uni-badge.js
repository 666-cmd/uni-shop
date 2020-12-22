(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-badge/uni-badge"],{"429f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},6212:function(t,e,n){"use strict";var u=n("da7e"),a=n.n(u);a.a},6656:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},8772:function(t,e,n){"use strict";n.r(e);var u=n("6656"),a=n("ac82");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("6212");var c=n("2877"),r=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"cfc427da",null);e["default"]=r.exports},ac82:function(t,e,n){"use strict";n.r(e);var u=n("429f"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},da7e:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-badge/uni-badge-create-component',
    {
        'components/uni-ui/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8772"))
        })
    },
    [['components/uni-ui/uni-badge/uni-badge-create-component']]
]);
