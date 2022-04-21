(function(){"use strict";var t={434:function(t,e,n){var a=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("NavHeader"),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark",attrs:{role:"navigation"}},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[t._v("Blue Online Store")]),n("ul",{staticClass:"navbar-nav mr-auto"}),n("ul",{staticClass:"nav navbar-nav"},[t.isAuthenticated?t._e():n("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active"}},[n("a",{staticClass:"nav-link",on:{click:t.onLoginClicked}},[t._v("Login")])]),t.isAuthenticated?n("li",{staticClass:"li-pointer nav-item"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.getUserName())+" ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Account Settings")]),n("a",{staticClass:"dropdown-item",on:{click:t.onLogoutClicked}},[t._v("Logout "+t._s(t.userEmail))])])])]):t._e(),n("li",[n("ShoppingCart")],1)],1)],1)])},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-primary navbar-btn",attrs:{"data-toggle":"modal","data-target":"#shoppingCart"}},[n("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" ( "+t._s(t.numInCart)+" ) ")]),n("div",{staticClass:"modal fade",attrs:{id:"shoppingCart"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(0),n("div",{staticClass:"modal-body"},[n("table",{staticClass:"table"},[n("tbody",[t._l(t.inCart,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.title))]),n("td",[t._v("$"+t._s(e.price))]),n("td",[n("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(n){return t.removeFromCart(e)}}},[t._v("×")])])])})),n("tr",[n("th"),n("th",[t._v("$"+t._s(t.total))]),n("th")])],2)])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"}},[t._v("Keep shopping")]),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.checkout()}}},[t._v("Check out")])])])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[n("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" Shopping cart ")]),n("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[t._v(" × ")])])}],l={name:"ShoppingCart",computed:{inCart(){return this.$store.getters.inCart},numInCart(){return this.inCart.length},total(){return this.inCart.reduce(((t,e)=>t+e.price),0)},isAuthenticated(){return this.$store.state.user.isAuthenticated}},methods:{removeFromCart(t){this.$store.commit("removeFromCart",t)},checkout(){this.isAuthenticated?0!=this.numInCart||alert("Your cart is empty!"):alert("Please login to checkout")}}},d=l,m=n(1),p=(0,m.Z)(d,c,u,!1,null,null,null),h=p.exports,v={components:{ShoppingCart:h},name:"NavHeader",computed:{userEmail(){return this.isLoggedIn?this.currentUser.email:""},isAuthenticated(){return this.$store.state.user.isAuthenticated}},methods:{onLoginClicked(){window.location=this.$store.state.endpoints.login},onLogoutClicked(){this.$store.commit("logout")},getUserName(){return this.$store.state.user.name}}},f=v,g=(0,m.Z)(f,o,s,!1,null,null,null),b=g.exports,C={components:{NavHeader:b},mounted(){this.$store.dispatch("getProducts")}},_=C,k=(0,m.Z)(_,r,i,!1,null,null,null),y=k.exports,w=n(345),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.products,(function(t){return n("Item",{key:t.id,attrs:{item:t}})})),1)])])},A=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-4 item"},[n("div",{staticClass:"card text-center"},[n("div",[n("img",{staticClass:"card-img-top grow",attrs:{src:t.item.thumbnail_url,alt:""}})]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("h6",{staticClass:"card-subtitle mb-2 remain"},[t._v(t._s(t.item.quantity)+" left in stock")]),n("p",{staticClass:"card-text"},[t._v(t._s(t._f("shortDescription")(t.item.description)))]),n("div",{staticClass:"row"},[n("p",{staticClass:"col-6 lead"},[t._v("$"+t._s(t.item.price))]),n("p",{staticClass:"col-6"},[n("button",{staticClass:"btn btn-success",attrs:{disabled:0===t.item.quantity},on:{click:function(e){return t.addToCart(t.item)}}},[t._v(" Add to cart ")])])])])])])},x=[],E={name:"item",props:["item"],data(){return{size:""}},filters:{shortDescription(t){return t&&t.length>70?t.substring(0,70)+"...":t}},methods:{addToCart(t){this.$store.commit("addToCart",t)}}},O=E,Z=(0,m.Z)(O,T,x,!1,null,"32090600",null),j=Z.exports,P={name:"Home",computed:{products(){return this.$store.state.products}},components:{Item:j}},S=P,L=(0,m.Z)(S,$,A,!1,null,null,null),N=L.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h4",{staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[t._v("Logging in ...")])])}],I={name:"Login",mounted(){let t=this.$route.query.name,e=this.$route.query.email,n=this.$route.query.id_token,a={name:t,email:e,idToken:n};t&&e&&n&&""!=t&&""!=e&&""!=n?this.$store.commit("login",a):this.$store.commit("logout"),this.$router.push("/")}},H=I,B=(0,m.Z)(H,q,F,!1,null,"1ae842c0",null),M=B.exports;a.Z.use(w.Z);const U=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,830))}},{path:"/loginwithtoken",name:"loginwithtoken",component:M}],D=new w.Z({mode:"history",base:"/",routes:U});var z=D,K=n(629),Y=n(702);a.Z.use(K.ZP);const G="http://localhost:8000/products",J={Accept:"application/json"};var Q=new K.ZP.Store({plugins:[(0,Y.Z)()],state:{products:[],inCart:[],user:{isAuthenticated:!1,name:"",email:"",idToken:""},endpoints:{login:"http://localhost:3000/login"}},getters:{products:t=>t.products,inCart:t=>t.inCart},mutations:{setProducts(t,e){t.products=e},addToCart(t,e){console.log(e),t.inCart.push(e)},removeFromCart(t,e){t.inCart.splice(e,1)},logout(t){t.user.isAuthenticated=!1,t.user.name="",t.user.email="",t.user.idToken=""},login(t,e){t.user.isAuthenticated=!0,t.user.name=e.name,t.user.email=e.email,t.user.idToken=e.idToken}},actions:{async getProducts(t){const e=await fetch(G,{headers:J}),n=await e.json();t.commit("setProducts",n),console.log(n)}},modules:{}});a.Z.config.productionTip=!1,new a.Z({router:z,store:Q,render:function(t){return t(y)}}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var o=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,r,i]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.44ac9ff9.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shopping-cart:";n.l=function(a,r,i,o){if(t[a])t[a].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=a),t[a]=[r];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=i);var o=n.p+n.u(e),s=new Error,c=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],s=a[1],c=a[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(a);u<o.length;u++)i=o[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},a=self["webpackChunkshopping_cart"]=self["webpackChunkshopping_cart"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(434)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.55f98e2a.js.map