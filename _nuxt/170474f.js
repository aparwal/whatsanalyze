(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{382:function(t,e,r){"use strict";r(41),r(66),r(134),r(107),r(133);var n=r(36),o=r(30),c=r(14),l=r(71),f=r(99);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(Object(f.d)(t)?data.style=d(d({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=d(d({},data.class),{},Object(o.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(Object(f.d)(t))data.style=d(d({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),r=Object(n.a)(e,2),c=r[0],h=r[1];data.class=d(d({},data.class),{},Object(o.a)({},c+"--text",!0)),h&&(data.class["text--"+h]=!0)}return data}}})},528:function(t,e,r){"use strict";var n=r(14);function o(t){return function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(var o in e)this.$set(this.$data[t],o,e[o])}}e.a=n.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",o("attrs$"),{immediate:!0}),this.$watch("$listeners",o("listeners$"),{immediate:!0})}})},529:function(t,e,r){"use strict";var n=r(25),o=r(291);n({target:"String",proto:!0,forced:r(292)("small")},{small:function(){return o(this,"small","","")}})},553:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return h}));r(58);var n=r(30),o=r(14),c=r(71);function l(t,e){return function(){return Object(c.c)("The ".concat(t," component must be used inside a ").concat(e))}}function f(t,e,r){var c=e&&r?{register:l(e,r),unregister:l(e,r)}:null;return o.a.extend({name:"registrable-inject",inject:Object(n.a)({},t,{default:c})})}function h(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.extend({name:"registrable-provide",provide:function(){return Object(n.a)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},561:function(t,e,r){"use strict";r(529);var n=r(14);e.a=n.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},646:function(t,e,r){"use strict";r.d(e,"b",(function(){return l}));var n=r(14),o=r(34),c={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.a.extend({name:"positionable",props:t.length?Object(o.j)(c,t):c})}e.a=l()},765:function(t,e,r){"use strict";r.r(e);var n={name:"GroupOthers",props:["chatObject"],data:function(){return{groupAfter:this.chatObject.groupAfter}},mounted:function(){this.groupAfter=this.chatObject.groupAfter}},o=r(77),c=r(84),l=r.n(c),f=r(848),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.chatObject.numPersonsInChat>2?r("div",{staticClass:"mt-16"},[r("div",{staticClass:"text-h2 font-weight-bold mb-5"},[r("span",{staticClass:"red darken-2 white--text px-2"},[t._v(t._s(t.chatObject.numPersonsInChat))]),t._v("\n    People\n  ")]),t._v(" "),t._m(0),t._v(" "),r("v-slider",{staticClass:"pt-10",attrs:{"thumb-color":"red darken-2","thumb-label":"always",ticks:"always","tick-size":"4",step:"1",min:"2",max:t.chatObject.numPersonsInChat-1},on:{change:function(e){t.chatObject.groupAfter=t.groupAfter}},model:{value:t.groupAfter,callback:function(e){t.groupAfter=e},expression:"groupAfter"}})],1):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-h6"},[t._v("\n    Select the number of participants to show individual.All others are\n    grouped together.\n    "),r("br"),t._v(" "),r("small",[t._v('\n      If you select "2", only the two people with the most messages are shown\n      individually. Others are grouped as "Others"')])])}],!1,null,null,null);e.default=component.exports;l()(component,{VSlider:f.a})},793:function(t,e,r){"use strict";var n=r(25),o=r(291);n({target:"String",proto:!0,forced:r(292)("fixed")},{fixed:function(){return o(this,"tt","","")}})}}]);