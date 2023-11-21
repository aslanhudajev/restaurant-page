(()=>{"use strict";var n={774:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@400;700&family=Playfair+Display:ital@0;1&display=swap);"]),i.push([n.id,':root {\n    --bg-color: rgba(2, 2, 103, 0.597);;\n    --menu-bg-color: rgba(0, 0, 0, 0);\n    --header-bg-color: rgba(15, 15, 116, 0.834);\n    --btn-bg-color: rgb(223, 229, 102);\n\n    --title-margin: 15px;\n    --para-margin: 10px;\n    --btn-margin: 15px;\n    --menu-item-content-margin: 5px;\n\n    --content-padding: 30px;\n    --btn-padding: 10px;\n    --menu-item-padding: 15px;\n\n    --sectiom-margin: 20px;\n    --comp-margin: 10px;\n\n    --btn-border-rad: 5px;\n\n    --nav-hover-border-color: rgb(223, 229, 102); \n\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: "Playfair Display", serif;\n    color: white;\n}\n\n/* Initial rules */\n\nh1, h2, h3 {\n    margin: var(--title-margin);\n}\n\np, span {\n    margin: var(--para-margin);\n    text-align: center;\n}\n\nbody {\n    height: 100vh;\n\n    margin: 0;\n\n    display: grid;\n    grid-template-rows: 60px auto 50px;\n\n    background-image: url(https://images.unsplash.com/photo-1557955776-857434f1c951?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);\n    background-position: center;\n}\n\n#content {\n    padding: var(--content-padding);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n\n    background-color: var(--bg-color);\n}\n\n.section {\n    margin: var(--sectiom-margin);\n}\n\n/* Header and navigation */\n\n.header {\n    width: 100%;\n\n    display: flex;\n    flex-direction: row;\n    justify-self: center;\n    justify-content: center;\n\n    background-color: var(--header-bg-color);\n\n    box-shadow: 0px 14px 19px -3px rgba(0,0,0,0.1);\n}\n\n.nav {\n    padding: 0;\n    width: 400px;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.nav > * {\n    text-transform: uppercase;\n    cursor: pointer;\n\n    font-size: 1.1rem;\n}\n\n.nav > *:hover {\n    border-bottom: 2px solid var(--nav-hover-border-color);\n}\n\n/* Tab rules */\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.tab > * {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* Footer rules */\n\n.footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background-color: var(--header-bg-color);\n    box-shadow: 0px 14px 19px -3px rgba(0,0,0,0.1);\n}\n\n.footer > a {\n    color: white;\n}\n\n/* Logo section rules */\n\n.logo > h1 {\n    font-size: 4rem;\n    font-family: "Great Vibes";\n}\n\n/* Icon text section rules */\n\n.icon-text {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-self: center;\n}\n\n/* Menu item component rules */\n\n.menu-item {\n    padding: var(--menu-item-padding);\n    border-bottom: 1px solid white;\n\n    width: 310px;\n    margin: var(--comp-margin);\n}\n\n.menu-item > h3, .menu-item > p {\n    margin: var(--menu-item-content-margin);\n}\n\n.menu-item > p {\n    font-size: 0.8rem;\n}\n\n/* Button rules */\n\nbutton {\n    width: 120px;\n    padding: var(--btn-padding);\n    margin: var(--btn-margin);\n\n    border: none;\n    border-radius: var(--btn-border-rad);\n\n    font-family: "Playfair Display", serif;\n    font-size: 1.0rem;\n\n    background-color: var(--btn-bg-color);\n}\n\n/* Misc. rules */\n\n.text > p {\n    margin: 0;\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=a(n,r),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(){const n=document.createElement("div");n.classList.add("comp","logo");const e=document.createElement("h1");return e.classList.add("logo"),e.textContent="Le Krug",n.appendChild(e),n}function e(n,e,t,a,r){const o=document.createElement("div");o.classList.add("section","hours");const i=document.createElement("h2");i.classList.add("title"),i.textContent=n;const c=document.createElement("p");c.classList.add("text"),c.textContent=`Mon - Fri: ${e}am - ${t}pm`;const s=document.createElement("p");s.classList.add("text"),s.textContent=`Saturday: ${a}am - ${r}pm`;const d=document.createElement("p");return d.classList.add("text"),d.textContent=`Sunday: ${a}am - ${r}pm`,o.appendChild(i),o.appendChild(c),o.appendChild(s),o.appendChild(d),o}const a=function(){let t=document.createElement("div");return t.classList.add("tab"),{CreateTab:function(){t.appendChild(function(e,t){const a=document.createElement("div");a.classList.add("section","hero");const r=document.createElement("p");r.classList.add("text"),r.textContent="An exclusive gastronomical experience";const o=document.createElement("button");return o.id="menu",o.classList.add("sec-btn"),o.textContent="Our menu",a.appendChild(n()),a.appendChild(r),a.appendChild(o),a}()),t.appendChild(e("Opening hours",8,9,10,11))},GetTab:function(){return null===t&&console.log("Home tab has yet to be created. Run CreateTab() to cache the tab first."),t}}}(),r=JSON.parse('[{"name":"The amphibian","desc":"Frog legs served with white wine reduction sauce.","price":95},{"name":"Potato and roe","desc":"Dulse beurre blanc, herring and trout roe","price":88},{"name":"Roasted cod","desc":"Morecambe bay shrimps, Swiss chard, brown butter","price":110},{"name":"Chicken, cockles, clams and caviar","desc":"Sutton Hoo chicken, sea aster and kohlrabi","price":125},{"name":"More apple","desc":"Toffee and Somerset cider brandy","price":71}]'),o=function(){let e=document.createElement("div");return e.classList.add("tab"),{CreateTab:function(){e.appendChild(n()),console.log(r),r.forEach((n=>{e.appendChild(function(n,e,t){const a=document.createElement("div");a.classList.add("comp","menu-item");const r=document.createElement("h3");r.classList.add("title"),r.textContent=n;const o=document.createElement("p");o.classList.add("text","desc"),o.textContent=e;const i=document.createElement("h3");return i.classList.add("price"),i.textContent=t+" EUR",a.appendChild(r),a.appendChild(o),a.appendChild(i),a}(n.name,n.desc,n.price))}))},GetTab:function(){return null===e&&console.log("Menu tab has yet to be created. Run CreateTab() to cache the tab first."),e}}}();function i(n,e){const t=document.createElement("div");t.classList.add("comp","icon-text");const a=document.createElement("img"),r=document.createElement("p");return r.textContent=e,t.appendChild(a),t.appendChild(r),t}const c=function(){let t=document.createElement("div");return t.classList.add("tab"),{CreateTab:function(){t.appendChild(n()),t.appendChild(function(n){const e=document.createElement("div");e.classList.add("section","text");const t=document.createElement("p");return t.classList.add("text"),t.textContent="Le Krug is an exclusive restaurant based in the heart of Paris. For booking, please email or call us using the contact information below.",e.appendChild(t),e}()),t.appendChild(function(n,e,t){const a=document.createElement("div");return a.classList.add("section","info"),a.appendChild(i(0,"Rue Le Krug 88")),a.appendChild(i(0,"info@lekrug.fr")),a.appendChild(i(0,"+33135242732")),a}()),t.appendChild(e("Opening hours",8,9,10,11))},GetTab:function(){return null===t&&console.log("About tab has yet to be created. Run CreateTab() to cache the tab first."),t}}}();var s=t(379),d=t.n(s),l=t(795),u=t.n(l),p=t(569),m=t.n(p),f=t(565),h=t.n(f),b=t(216),g=t.n(b),v=t(589),x=t.n(v),y=t(774),C={};C.styleTagTransform=x(),C.setAttributes=h(),C.insert=m().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=g(),d()(y.Z,C),y.Z&&y.Z.locals&&y.Z.locals,function(){const n=function(n){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("ul");t.classList.add("nav");for(const n of["home","menu","about"]){const e=document.createElement("li");e.classList.add("nav-link"),e.id=n,e.textContent=n,t.appendChild(e)}return e.appendChild(t),e}();document.body.appendChild(n);const e=Array.from(n.querySelectorAll(".nav-link"));for(const n of e)n.addEventListener("click",r);const t=document.createElement("div");function r(n){const e=n.target.id;switch(console.log(typeof t),e){case"home":t.replaceChildren(a.GetTab());break;case"menu":t.replaceChildren(o.GetTab());break;case"about":t.replaceChildren(c.GetTab())}}t.id="content",document.body.appendChild(t),document.body.appendChild(function(n){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("a");return t.href="https://github.com/aslanhudajev",t.classList.add("credits"),t.textContent="Copyright © 2023 @aslanhudajev",e.appendChild(t),e}()),a.CreateTab(),o.CreateTab(),c.CreateTab(),t.appendChild(a.GetTab())}()})()})();