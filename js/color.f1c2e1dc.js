(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["color"],{"22e0":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"list-group"},t._l(t.colors,(function(o,s){return e("router-link",{key:s,staticClass:"list-group-item list-group-item-action",attrs:{to:{name:t.linkName,params:{id:o.id}}}},[e("display-color",{attrs:{color:o}})],1)})),1),0===t.colors.length?e("h3",{staticClass:"text-center mt-5 mb-5"},[t._v(" (No colors) ")]):t._e()])},l=[],r=e("5530"),n=e("2f62"),c=e("d5ff"),i={name:"ColorList",props:{isAdmin:{type:Boolean,default:!1}},components:{DisplayColor:c["a"]},computed:Object(r["a"])(Object(r["a"])({},Object(n["d"])("colors",["colors"])),{},{linkName:function(){return this.isAdmin?"AdminColorDetail":"ColorDetails"}})},a=i,u=e("2877"),d=Object(u["a"])(a,s,l,!1,null,null,null);o["a"]=d.exports},5118:function(t,o,e){"use strict";e("b078")},"685b":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("h1",{staticClass:"display-3 text-center mt-2"},[t._v("Saved colors")]),e("color-list",{staticClass:"mt-2"})],1)},l=[],r=e("22e0"),n={name:"Colors",components:{ColorList:r["a"]},beforeMount:function(){this.$store.dispatch("colors/fetchColorsForCurrentUser")}},c=n,i=e("2877"),a=Object(i["a"])(c,s,l,!1,null,null,null);o["default"]=a.exports},b078:function(t,o,e){},d5ff:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"colorSquare me-2",style:{backgroundColor:t.color.color}}),e("div",[t._v(t._s(t.color.name))])])},l=[],r={name:"DisplayColor",props:{color:Object}},n=r,c=(e("5118"),e("2877")),i=Object(c["a"])(n,s,l,!1,null,"3d06b224",null);o["a"]=i.exports}}]);
//# sourceMappingURL=color.f1c2e1dc.js.map