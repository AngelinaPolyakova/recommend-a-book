(()=>{"use strict";var n={588:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(933),o=t.n(r),a=t(476),i=t.n(a)()(o());i.push([n.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #7E57C2;\r\n   padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }\r\n\r\n.mui-btn {\r\n  background-color: #7E57C2;\r\n  color: #fff;\r\n }\r\n\r\n .creator {\r\n  padding-top: 1rem;\r\n }\r\n\r\n .mui-btn#show {\r\n    margin: 100px auto;\r\n }\r\n\r\n .mui-textfield>input:focus {\r\n  border-color: #7E57C2;\r\n }\r\n\r\n .modal {\r\n  max-width: 600px;\r\n  max-height: 500px;\r\n  margin: 100px auto;\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n }\r\n\r\n .mui-textfield>input:invalid:not(:focus):required.mui--is-empty.mui--is-touched {\r\n  border-bottom: 1px solid rgba(0,0,0,.26);\r\n }\r\n",""]);const s=i},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},933:n=>{n.exports=function(n){return n[1]}},892:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},311:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},192:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},760:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},865:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{static create(n){return fetch("https://rec-a-book-aa674-default-rtdb.firebaseio.com/books.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((e=>(n.title=e.title,n)))}static listOfBooks(n){return n.length?`<ol>${n.map((n=>`<li>${n.title}, ${n.author}</li>`)).join("")}</ol>`:"<p>Рекомендованных книг пока нет</p>"}}var e=t(892),r=t.n(e),o=t(760),a=t.n(o),i=t(311),s=t.n(i),c=t(192),u=t.n(c),d=t(60),l=t.n(d),p=t(865),f=t.n(p),m=t(588),h={};function v(n){if(n.length>0)return!0}h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b=document.getElementById("form"),y=b.querySelector("#author"),g=b.querySelector("#title"),x=b.querySelector("#submit"),S=document.getElementById("show");g.addEventListener("input",(function(){v(y.value)&&(x.disabled=!1)})),b.addEventListener("submit",(function(e){if(e.preventDefault(),v(y.value)&&v(g.value)){const e={author:y.value,title:g.value};n.create(e).then((()=>{y.value=g.value="",y.className="",g.className="",x.disabled=!0}))}})),S.addEventListener("click",(function(e){return e.preventDefault(),fetch("https://rec-a-book-aa674-default-rtdb.firebaseio.com/books.json").then((n=>n.json())).then((n=>n?Object.keys(n).map((e=>({...n[e]}))):[])).then((e=>function(n){let e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`\n    <h1>Список книг</h1>\n    <div class='modal-content'>${n}</div>\n    `,mui.overlay("on",e)}(n.listOfBooks(e))))}))})()})();