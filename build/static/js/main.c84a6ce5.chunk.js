(this.webpackJsonpamazonify=this.webpackJsonpamazonify||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},45:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),l=t.n(c),i=(t(44),t(5)),o=(t(45),t(14)),s=t(3),m=Object(n.createContext)(),u=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(m.Provider,{value:Object(n.useReducer)(a,t)},c)},d=function(){return Object(n.useContext)(m)},_=t(27),p=t.n(_),E=(p.a.initializeApp({apiKey:"AIzaSyBcMJy3X4dBtqCqjcPdqjbgSK5Hsvv2Tl0",authDomain:"ify-fcd63.firebaseapp.com",databaseURL:"https://ify-fcd63.firebaseio.com",projectId:"ify-fcd63",storageBucket:"ify-fcd63.appspot.com",messagingSenderId:"190682807604",appId:"1:190682807604:web:07c50c81a29eae5ef03961",measurementId:"G-EQCT7T0RZ4"}),p.a.auth()),g=(t(56),t(35)),h=t.n(g),v=t(36),f=t.n(v);var b=function(){var e=d(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return r.a.createElement("nav",{className:"header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{defaultValue:"Buy Some",type:"text",className:"header__searchInput"}),r.a.createElement(h.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},r.a.createElement("div",{onClick:function(){n&&E.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",null===n||void 0===n?void 0:n.email),r.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),r.a.createElement(o.b,{to:"/",className:"header__link"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement(o.b,{to:"/",className:"header__link"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),r.a.createElement(o.b,{to:"/checkout",className:"header__link"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(f.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))};t(62);var k=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,o=d(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e){return r.a.createElement("p",null,"\u2b50")})))),r.a.createElement("img",{src:n,alt:""}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:c,rating:l}})}},"Add to Basket"))};t(63);var N=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),r.a.createElement("div",{className:"home__row"},r.a.createElement(k,{id:"1231254",title:"Kurk Mantolu Madonna",price:11.96,rating:5,image:"https://www.kitapambari.com/u/kitapambari/img/c/k/u/kurk-mantolu-madonnae7b3cdc4e4dcd4a204c18fc6e8191f14.jpg"}),r.a.createElement(k,{id:"1231254",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Chorcoal Fabric",price:98.99,rating:4,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(k,{id:"6345323",title:"Fitbit Charge 4 | Take your goals further with built-in GPS, personalized heaart rate features and more",price:198.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),r.a.createElement(k,{id:"34325",title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK",price:79.96,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/31pLxnRHbsL._AC_US320_FMwebp_QL65_.jpg"}),r.a.createElement(k,{id:"63123235",title:"Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)",price:111.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US320_FMwebp_QL65_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(k,{id:"245375",title:"ASUS ROG Strix XG43VQ 43.4 inch LED 1ms Gaming Curved Monitor - 3840 x 1200 Resolution, 1ms Response, Speakers, HDMI",price:782.99,rating:4,image:"https://m.media-amazon.com/images/I/61sAdNVgpZL._AC_UY436_FMwebp_QL65_.jpg"})))};t(64),t(65);var S=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,l=e.rating,o=d(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},t),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove From Basket")))},O=(t(66),t(37)),A=t.n(O),y=t(19),C=t(20),j=function(e){return e.reduce((function(e,a){return a.price+e}),0)},w=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(y.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant remove product (id: ".concat(a.id," as its not in basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:t});default:return e}};var B=function(){var e=d(),a=Object(i.a)(e,2),t=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(A.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",t.length," items): ",r.a.createElement("strong",null,"".concat(e))),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:j(t),displayType:"text",thousandSeperator:!0,prefix:"$"}),r.a.createElement("button",null,"Proceed to Checkout"))};var I=function(){var e=d(),a=Object(i.a)(e,1)[0].basket;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?r.a.createElement("div",null,r.a.createElement("h2",null,"Your Shopping basket is empty"),r.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add bo basket" under to the item')):r.a.createElement("div",null,r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),(null===a||void 0===a?void 0:a.length)>0&&r.a.createElement("div",{className:"checkout__right "},r.a.createElement("h1",null,"Subtotal"),r.a.createElement(B,null)))};t(68);var T=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],_=u[1];return r.a.createElement("div",{className:"login"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"email"}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{value:d,onChange:function(e){return _(e.target.value)},type:"password"}),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),E.signInWithEmailAndPassword(c,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(e){e.preventDefault(),E.createUserWithEmailAndPassword(c,d).then((function(e){})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create Your Amazon Account")))};var P=function(){var e=d(),a=Object(i.a)(e,2),t=a[0].user,c=a[1];return Object(n.useEffect)((function(){var e=E.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log("USER IS >>>",t),r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/checkout"},r.a.createElement(b,null),r.a.createElement(I,null)),r.a.createElement(s.a,{path:"/login"},r.a.createElement(b,null),r.a.createElement(T,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(b,null),r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,{initialState:{basket:[],user:null},reducer:w},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c84a6ce5.chunk.js.map