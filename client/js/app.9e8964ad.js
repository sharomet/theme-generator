(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c2198a20"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}a[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[],i=(n("5c0b"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),l=c.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Wrapper",[n("ThemesSidebar"),n("main",{staticClass:"main"},[n("div",{staticClass:"card h-100"},[n("div",{staticClass:"card-header bg-primary"},[n("strong",{staticClass:"text-white"},[t._v("Preview")])]),n("div",{staticClass:"card-body main__content"})])])],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._t("default")],2)},p=[],h=(n("9043"),{}),b=Object(i["a"])(h,m,p,!1,null,null,null),v=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar mb-4 mb-lg-0"},[n("div",{staticClass:"card h-100"},[n("div",{staticClass:"card-header sidebar__header bg-primary d-flex align-items-center justify-content-between"},[n("strong",{staticClass:"text-white"},[t._v("Themes")]),n("div",[t._m(0),t._m(1),n("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"home"}}},[n("i",{staticClass:"fas fa-reply-all"})])],1)]),n("ul",{staticClass:"list-group list-group-flush"},t._l(t.fetchThemes,function(e,r){return n("li",{key:r,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[n("a",{attrs:{href:"#"}},[t._v(t._s(e.name))]),n("div",[n("ul",{staticClass:"list-inline"},[n("li",{staticClass:"list-inline-item"},[n("router-link",{staticClass:"btn btn-sm px-1",attrs:{to:{name:"edit",params:{id:e.id}}}},[n("i",{staticClass:"fas fa-pencil-alt"})])],1),t._m(2,!0),t._m(3,!0),t._m(4,!0)])])])}),0)])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-save"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-sync"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"btn btn-sm px-1",attrs:{href:"#"}},[n("i",{staticClass:"far fa-copy"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"btn btn-sm px-1",attrs:{href:"#"}},[n("i",{staticClass:"far fa-trash-alt"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"btn btn-sm px-1",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-check"})])])}],E={computed:{fetchThemes:function(){return this.$store.getters.GET_THEMES}},mounted:function(){this.$store.dispatch("FETCH_THEMES")}},C=E,T=Object(i["a"])(C,_,g,!1,null,null,null),y=T.exports,w={components:{ThemesSidebar:y,Wrapper:v}},x=w,j=Object(i["a"])(x,f,d,!1,null,null,null),S=j.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Wrapper",[n("ThemesSidebar"),n("main",{staticClass:"main"},[n("div",{staticClass:"card h-100"},[n("div",{staticClass:"card-header bg-primary"},[t.getTheme?n("strong",{staticClass:"text-white"},[t._v(t._s(t.getTheme.name))]):t._e()]),n("div",{staticClass:"card-body main__content"})])])],1)},M=[],$={components:{ThemesSidebar:y,Wrapper:v},computed:{getTheme:function(){return this.$store.getters.GET_THEME[0]}},mounted:function(){this.$store.dispatch("GET_THEME",this.$route.params.id)}},O=$,k=Object(i["a"])(O,H,M,!1,null,null,null),P=k.exports;r["a"].use(u["a"]);var G=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/edit/:id",name:"edit",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),F=n("2f62"),A=n("bc3a"),W=n.n(A);r["a"].use(F["a"]);var N=new F["a"].Store({state:{apiUrl:"/api/",themes:[],theme:[]},getters:{GET_THEMES:function(t){return t.themes},GET_THEME:function(t){return t.theme}},mutations:{FETCH_THEMES:function(t,e){t.themes=e},GET_THEME:function(t,e){t.theme=e}},actions:{FETCH_THEMES:function(t){var e=t.commit,n=t.state;W.a.get(n.apiUrl+"home").then(function(t){return e("FETCH_THEMES",t.data)}).catch(function(t){return console.log(t)})},GET_THEME:function(t,e){var n=t.commit,r=t.state;W.a.get(r.apiUrl+"theme/"+e).then(function(t){return n("GET_THEME",t.data)}).catch(function(t){return console.log(t)})}}}),U=n("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:G,store:N,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},9043:function(t,e,n){"use strict";var r=n("c9fd"),a=n.n(r);a.a},c9fd:function(t,e,n){}});
//# sourceMappingURL=app.9e8964ad.js.map