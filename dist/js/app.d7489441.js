(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header"),a("v-content",[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Family")]),a("span",{staticClass:"font-weight-light"},[t._v("budjet")])]),a("v-spacer"),t.isLoggedIn?a("v-btn",{attrs:{text:"",to:"/login"},on:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e(),t.isLoggedIn?t._e():a("v-btn",{staticClass:"mr-2",attrs:{text:"",to:"/login"}},[t._v("Login")]),t.isLoggedIn?t._e():a("v-btn",{attrs:{text:"",to:"/registration"}},[t._v("Registration")])],1)],1)},s=[],c=a("59ca"),l=a.n(c),u=(a("ea7b"),{data:function(){return{isLoggedIn:!1,currentUser:"unknown"}},created:function(){l.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=l.a.auth().currentUser.email)},methods:{logout:function(){var t=this;l.a.auth().signOut().then((function(){t.$router.push("/login")}))}}}),d=u,p=a("2877"),f=a("6544"),v=a.n(f),m=a("40dc"),h=a("8336"),g=a("2fa4"),b=a("2a7f"),_=Object(p["a"])(d,i,s,!1,null,null,null),x=_.exports;v()(_,{VAppBar:m["a"],VBtn:h["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var w={components:{appHeader:x}},y=w,V=a("7496"),k=a("a75b"),C=Object(p["a"])(y,r,o,!1,null,null,null),j=C.exports;v()(C,{VApp:V["a"],VContent:k["a"]});var O=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-carousel"),a("div",{staticClass:"text_block text-center"},[t._m(0),a("p",[t._v("\n      here u can find some advise for u and check ur\n      income and outcome actions\n    ")]),a("qoute-home")],1),a("div",{staticClass:"btn d-flex justify-center ma-4"},[a("v-btn",{attrs:{color:"error"}},[a("span",[t._v("Login")])]),a("v-btn",{attrs:{color:"error",to:"/registration"}},[a("span",[t._v("Registration")])])],1)],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Family budjet")]),t._v(" -\n      can u to improve ur amount of money\n    ")])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{cycle:"",height:"200","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,n){return a("v-carousel-item",{key:n},[a("v-sheet",{attrs:{color:t.colors[n],height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"display-3"},[t._v(t._s(e))])])],1)],1)})),1)},T=[],D={data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["Why","you","should","chose","us?"]}}},L=D,A=a("5e66"),U=a("3e35"),$=a("0fd9"),E=a("8dd9"),F=Object(p["a"])(L,P,T,!1,null,null,null),R=F.exports;v()(F,{VCarousel:A["a"],VCarouselItem:U["a"],VRow:$["a"],VSheet:E["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{color:"#ffe6e6","max-width":"600"}},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:""}},[t._v("mdi-book-open-outline")])],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v('"Text quotes about money calculating proffits"')]),a("v-card-actions",{staticClass:"d-flex"},[a("v-list-item",{staticClass:"d-flex justify-end"},[t._v("Author Name")])],1)],1)},M=[],q={data:function(){return{}}},z=q,W=a("b0af"),G=a("99d9"),H=a("132d"),J=a("da13"),K=Object(p["a"])(z,B,M,!1,null,null,null),N=K.exports;v()(K,{VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VIcon:H["a"],VListItem:J["a"]});var Q={components:{appCarousel:R,qouteHome:N}},Y=Q,Z=Object(p["a"])(Y,S,I,!1,null,null,null),X=Z.exports;v()(Z,{VBtn:h["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("v-snackbar",{attrs:{timeout:4e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("Операция была добавлена")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Закрыть")])],1),a("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"600",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}},[a("v-img",{attrs:{src:"https://avatarko.ru/img/kartinka/2/multfilm_pokemon_Slowpoke_1716.jpg"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.currentUser))]),a("v-list-item-subtitle",[t._v("Баланс: 1000 RU")])],1)],1),a("v-card-actions",[a("Popup",{on:{incomeAdded:function(e){t.snackbar=!0}}})],1)],1),a("body",t._l(t.incomes,(function(e,n){return a("v-card",{key:n,staticClass:"mx-auto m-4",attrs:{"max-width":"600"}},[a("v-alert",{attrs:{border:"left","colored-border":"",color:"deep-purple accent-4",elevation:"2"}},[a("v-card-text",[a("div",{staticClass:"card_line"},[a("div",{staticClass:"left_side"},[a("div",{staticClass:"d-flex justify-center"},[a("div",[t._v("Дата: "+t._s(e.data))]),a("div",[t._v("Категория: "+t._s(e.category))]),a("div",[t._v(t._s(e.radio)+" : "+t._s(e.income)+" RU")])])])])])],1)],1)})),1)],1)},et=[],at=(a("8e6e"),a("456d"),a("bd86")),nt=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mb-4",attrs:{block:"",color:"red"}},n),[t._v("Добавить")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{"max-width":"600px"}},[a("v-card-title",[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[a("v-col",{staticClass:"d-flex flex-column"},[a("h3",[t._v(t._s(t.radios||"null"))]),a("v-textarea",{attrs:{label:"Сумма","auto-grow":"",outlined:"","row-height":"2"},model:{value:t.income,callback:function(e){t.income=e},expression:"income"}}),a("v-select",{attrs:{items:t.items,label:"Категория",outlined:""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),a("v-radio-group",{attrs:{row:""},model:{value:t.radios,callback:function(e){t.radios=e},expression:"radios"}},[a("v-radio",{attrs:{label:"Доход",value:"Доход"}}),a("v-radio",{attrs:{label:"Расход",value:"Расход"}})],1)],1),a("data-picker",{on:{dataTake:function(e){return t.update(e)}}})],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",block:"",loading:t.loading},on:{click:t.addItem}},[t._v("Добавить")])],1)],1)],1)],1)],1)}),rt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-col",[a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Date (read only text field)",readonly:""},model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)},it=[],st=(a("f576"),a("28a5"),a("768b")),ct={data:function(t){return{date:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),menu:!1}},computed:{computedDateFormatted:function(){return this.$emit("dataTake",this.date),this.formatDate(this.date)}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(st["a"])(e,3),n=a[0],r=a[1],o=a[2];return console.log(this.date),"".concat(o,"/").concat(r,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(st["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}},lt=ct,ut=a("62ad"),dt=a("a523"),pt=a("2e4b"),ft=a("e449"),vt=a("8654"),mt=Object(p["a"])(lt,ot,it,!1,null,null,null),ht=mt.exports;v()(mt,{VCol:ut["a"],VContainer:dt["a"],VDatePicker:pt["a"],VMenu:ft["a"],VTextField:vt["a"]});a("e71f");var gt={apiKey:"AIzaSyCT5bA7sQKdvj1fo9ZOL7pR28cGVOx8wfM",authDomain:"budjet-60d84.firebaseapp.com",databaseURL:"https://budjet-60d84.firebaseio.com",projectId:"budjet-60d84",storageBucket:"budjet-60d84.appspot.com",messagingSenderId:"912563141558",appId:"1:912563141558:web:74d1083e729d5d07cc1f17"};l.a.initializeApp(gt);var bt=l.a.firestore(),_t=bt,xt={components:{dataPicker:ht},data:function(){return{items:["Еда","Зарплата","Платежи","Машина"],radios:"Income",category:"",income:"",loading:!1,dialog:!1}},methods:{update:function(t){this.data=t},addItem:function(){var t=this;this.loading=!0,this.currentUser=l.a.auth().currentUser.email;var e={category:this.category,income:this.income,radio:this.radios,data:this.data,user:this.currentUser};_t.collection("incomes").add(e).then((function(){t.loading=!1,t.dialog=!1,t.$emit("incomeAdded")})),console.log("1"+this.income)}}},wt=xt,yt=a("169a"),Vt=a("67b6"),kt=a("43a6"),Ct=a("b974"),jt=a("a844"),Ot=Object(p["a"])(wt,nt,rt,!1,null,null,null),St=Ot.exports;function It(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?It(a,!0).forEach((function(e){Object(at["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):It(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}v()(Ot,{VBtn:h["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCol:ut["a"],VDialog:yt["a"],VRadio:Vt["a"],VRadioGroup:kt["a"],VSelect:Ct["a"],VTextarea:jt["a"]});var Tt={components:{Popup:St},data:function(){return{incomes:[],snackbar:!1,currentUser:"unknown"}},created:function(){var t=this;l.a.auth().currentUser&&(this.currentUser=l.a.auth().currentUser.email,_t.collection("incomes").onSnapshot((function(e){var a=e.docChanges();a.forEach((function(e){"added"===e.type&&t.incomes.push(Pt({},e.doc.data(),{id:e.doc.id}))}))})))}},Dt=Tt,Lt=(a("f927"),a("0798")),At=a("adda"),Ut=a("8270"),$t=a("5d23"),Et=a("2db4"),Ft=Object(p["a"])(Dt,tt,et,!1,null,null,null),Rt=Ft.exports;v()(Ft,{VAlert:Lt["a"],VBtn:h["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VImg:At["a"],VListItem:J["a"],VListItemAvatar:Ut["a"],VListItemContent:$t["a"],VListItemSubtitle:$t["b"],VListItemTitle:$t["c"],VSnackbar:Et["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-human-greeting",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{text:"",loading:t.loading},on:{click:function(e){return t.registr()}}},[t._v("Registration")]),a("v-btn",{attrs:{text:"",loading:t.loading},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},Mt=[],qt={props:{source:String},data:function(){return{drawer:null,email:"",password:"",loading:!1}},methods:{registr:function(){var t=this;this.loading=!0;this.email,this.password;console.log(this.email,this.password),l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(e){alert("account create for ".concat(e.email)),t.loading=!1,t.$router.push("/login")}),(function(e){alert(e.message),t.loading=!1}))},login:function(){var t=this;this.loading=!0;var e=this.email,a=this.password;console.log(this.email,this.password),l.a.auth().signInWithEmailAndPassword(e,a).then((function(a){alert("You are logged in ".concat(e)),t.loading=!1,t.$router.push("/main")}),(function(e){alert(e.message),t.loading=!1})),console.log(l.a.auth().currentUser.email)}}},zt=qt,Wt=a("4bd4"),Gt=a("71d9"),Ht=Object(p["a"])(zt,Bt,Mt,!1,null,null,null),Jt=Ht.exports;v()(Ht,{VApp:V["a"],VBtn:h["a"],VCard:W["a"],VCardActions:G["a"],VCardText:G["b"],VCol:ut["a"],VContainer:dt["a"],VContent:k["a"],VForm:Wt["a"],VRow:$["a"],VTextField:vt["a"],VToolbar:Gt["a"],VToolbarTitle:b["a"]}),n["a"].use(O["a"]);var Kt=new O["a"]({routes:[{path:"/",name:"home",component:X},{path:"/main",name:"main",component:Rt},{path:"/registration",name:"registration",component:Jt},{path:"/login",name:"login",component:Jt}]}),Nt=a("2f62");n["a"].use(Nt["a"]);var Qt=new Nt["a"].Store({state:{},mutations:{},actions:{}}),Yt=a("f309");n["a"].use(Yt["a"]);var Zt=new Yt["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:Kt,store:Qt,vuetify:Zt,render:function(t){return t(j)}}).$mount("#app")},df9c:function(t,e,a){},f927:function(t,e,a){"use strict";var n=a("df9c"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d7489441.js.map