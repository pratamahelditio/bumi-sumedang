!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(n,e,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function s(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},a=[],i=0;i<n.length;i++){var r=n[i],u=e.base?r[0]+e.base:r[0],l=t[u]||0,c="".concat(u," ").concat(l);t[u]=l+1;var d=s(c),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:c,updater:f(m,e),references:1}),a.push(c)}return a}function l(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function m(n,e,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=d(e,i);else{var r=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(r,o[e]):n.appendChild(r)}}function p(n,e,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var h=null,g=0;function f(n,e){var t,a,i;if(e.singleton){var r=g++;t=h||(h=l(e)),a=m.bind(null,t,r,!1),i=m.bind(null,t,r,!0)}else t=l(e),a=p.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var i=s(t[a]);o[i].references--}for(var r=u(n,e),l=0;l<t.length;l++){var c=s(t[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=r}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),r=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var o,s,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);a&&i[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n){n.exports=JSON.parse('{"store":[{"name":"Sayur bu ela","description":"Sayuran merupakan sebutan umum bagi bahan pangan asal tumbuhan yang biasanya mengandung kadar air tinggi dan dikonsumsi dalam keadaan segar atau setelah diolah secara minimal. Sebutan untuk beraneka jenis sayuran disebut sebagai sayur-sayuran atau sayur-mayur. Sejumlah sayuran dapat dikonsumsi mentah tanpa dimasak terlebih dahulu, sementara yang lainnya harus diolah terlebih dahulu dengan cara direbus, dikukus, digoreng, disangrai, atau dimakan mentah-mentah. Sayuran berbentuk daun yang dimakan mentah disebut sebagai lalapan. Sayur merupakan makanan yang sehat untuk dikonsumsi.","pictureId":"./images/vegetables-1.jpg","city":"Tanjungsari"},{"name":"Sayur bu nina","description":"Sayuran merupakan sebutan umum bagi bahan pangan asal tumbuhan yang biasanya mengandung kadar air tinggi dan dikonsumsi dalam keadaan segar atau setelah diolah secara minimal. Sebutan untuk beraneka jenis sayuran disebut sebagai sayur-sayuran atau sayur-mayur. Sejumlah sayuran dapat dikonsumsi mentah tanpa dimasak terlebih dahulu, sementara yang lainnya harus diolah terlebih dahulu dengan cara direbus, dikukus, digoreng, disangrai, atau dimakan mentah-mentah. Sayuran berbentuk daun yang dimakan mentah disebut sebagai lalapan. Sayur merupakan makanan yang sehat untuk dikonsumsi.","pictureId":"./images/vegetables-2.jpg","city":"Jatinangor"},{"name":"Sayur sehat","description":"Sayuran merupakan sebutan umum bagi bahan pangan asal tumbuhan yang biasanya mengandung kadar air tinggi dan dikonsumsi dalam keadaan segar atau setelah diolah secara minimal. Sebutan untuk beraneka jenis sayuran disebut sebagai sayur-sayuran atau sayur-mayur. Sejumlah sayuran dapat dikonsumsi mentah tanpa dimasak terlebih dahulu, sementara yang lainnya harus diolah terlebih dahulu dengan cara direbus, dikukus, digoreng, disangrai, atau dimakan mentah-mentah. Sayuran berbentuk daun yang dimakan mentah disebut sebagai lalapan. Sayur merupakan makanan yang sehat untuk dikonsumsi.","pictureId":"./images/vegetables-3.jpg","city":"Sukasari"},{"name":"Pisang pak soleh","description":"Pisang adalah nama umum yang diberikan pada tumbuhan terna raksasa berdaun besar memanjang dari suku Musaceae. Beberapa jenisnya menghasilkan buah konsumsi yang dinamakan sama. Buah ini tersusun dalam tandan dengan kelompok-kelompok tersusun menjari yang disebut sisir.","pictureId":"./images/banana.jpg","city":"Tanjungsari"},{"name":"Melon pak dadang","description":"Melon merupakan nama buah sekaligus tanaman yang menghasilkannya, yang termasuk dalam suku labu-labuan atau Cucurbitaceae. Buahnya biasanya dimakan segar sebagai buah meja atau diiris-iris sebagai campuran es buah. Bagian yang dimakan adalah daging buah.","pictureId":"./images/watermelon.jpg","city":"Sumedang"},{"name":"Apel bu haji","description":"Apel adalah jenis buah-buahan, atau buah yang dihasilkan dari pohon buah apel. Buah apel biasanya berwarna merah kulitnya jika masak dan, namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek, daging buahnya keras. Buah ini memiliki beberapa biji di dalamnya.","pictureId":"./images/apple.jpg","city":"Sumedang"},{"name":"Kopi manglayang asep","description":"Kopi asal Jawa Barat yakni Kopi Manglayang yang ditanam dari ketinggian 1.000 meter di atas permukaan laut berhasil menembus pasar internasional mulai Maroko, Jepang, hingga Australia. Selain itu, lanjutnya, kopi ini juga bisa menghasilkan sekitar 50 sampai 60 ton tiap panennya yang bertahap setiap 5 bulan sekali.","pictureId":"./images/coffee-1.jpg","city":"Tanjungsari"},{"name":"Kopi manglayang heldi","description":"Kopi asal Jawa Barat yakni Kopi Manglayang yang ditanam dari ketinggian 1.000 meter di atas permukaan laut berhasil menembus pasar internasional mulai Maroko, Jepang, hingga Australia. Selain itu, lanjutnya, kopi ini juga bisa menghasilkan sekitar 50 sampai 60 ton tiap panennya yang bertahap setiap 5 bulan sekali.","pictureId":"./images/coffee-2.jpg","city":"Tanjungsari"},{"name":"Kopi manglayang agung","description":"Kopi asal Jawa Barat yakni Kopi Manglayang yang ditanam dari ketinggian 1.000 meter di atas permukaan laut berhasil menembus pasar internasional mulai Maroko, Jepang, hingga Australia. Selain itu, lanjutnya, kopi ini juga bisa menghasilkan sekitar 50 sampai 60 ton tiap panennya yang bertahap setiap 5 bulan sekali.","pictureId":"./images/coffee-3.jpg","city":"Tanjungsari"},{"name":"Tembakau darmawangi ateng","description":"Tembakau ini berasal dari Kabupaten Sumedang. Tembakau ini mempunyai aroma yang berbeda setelah diolah dan tekstur dari daunnya yang tidak begitu keras ketika dipotong. Harganya sangat terjangkau cocok untuk penghematan di masa pandemik ini.","pictureId":"./images/tobacco-1.jpg","city":"Tanjungsari"},{"name":"Tembakau darmawangi ujang","description":"Tembakau ini berasal dari Kabupaten Sumedang. Tembakau ini mempunyai aroma yang berbeda setelah diolah dan tekstur dari daunnya yang tidak begitu keras ketika dipotong. Harganya sangat terjangkau cocok untuk penghematan di masa pandemik ini.","pictureId":"./images/tobacco-2.jpg","city":"Sukasari"},{"name":"Tembakau darmawangi anis","description":"Tembakau ini berasal dari Kabupaten Sumedang. Tembakau ini mempunyai aroma yang berbeda setelah diolah dan tekstur dari daunnya yang tidak begitu keras ketika dipotong. Harganya sangat terjangkau cocok untuk penghematan di masa pandemik ini.","pictureId":"./images/tobacco-3.jpg","city":"Sumedang"}]}')},function(n,e,t){(function(n){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t=function(n){"use strict";var t=Object.prototype,a=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{u({},"")}catch(n){u=function(n,e,t){return n[e]=t}}function l(n,e,t,a){var i=e&&e.prototype instanceof m?e:m,r=Object.create(i.prototype),o=new S(a||[]);return r._invoke=function(n,e,t){var a="suspendedStart";return function(i,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw r;return z()}for(t.method=i,t.arg=r;;){var o=t.delegate;if(o){var s=w(o,t);if(s){if(s===d)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===a)throw a="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);a="executing";var u=c(n,e,t);if("normal"===u.type){if(a=t.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(a="completed",t.method="throw",t.arg=u.arg)}}}(n,t,o),r}function c(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var d={};function m(){}function p(){}function h(){}var g={};g[r]=function(){return this};var f=Object.getPrototypeOf,b=f&&f(f(L([])));b&&b!==t&&a.call(b,r)&&(g=b);var y=h.prototype=m.prototype=Object.create(g);function v(n){["next","throw","return"].forEach((function(e){u(n,e,(function(n){return this._invoke(e,n)}))}))}function k(n,t){var i;this._invoke=function(r,o){function s(){return new t((function(i,s){!function i(r,o,s,u){var l=c(n[r],n,o);if("throw"!==l.type){var d=l.arg,m=d.value;return m&&"object"===e(m)&&a.call(m,"__await")?t.resolve(m.__await).then((function(n){i("next",n,s,u)}),(function(n){i("throw",n,s,u)})):t.resolve(m).then((function(n){d.value=n,s(d)}),(function(n){return i("throw",n,s,u)}))}u(l.arg)}(r,o,i,s)}))}return i=i?i.then(s,s):s()}}function w(n,e){var t=n.iterator[e.method];if(void 0===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,w(n,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=c(t,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function j(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function L(n){if(n){var e=n[r];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,i=function e(){for(;++t<n.length;)if(a.call(n,t))return e.value=n[t],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,p.displayName=u(h,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,s,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},v(k.prototype),k.prototype[o]=function(){return this},n.AsyncIterator=k,n.async=function(e,t,a,i,r){void 0===r&&(r=Promise);var o=new k(l(e,t,a,i),r);return n.isGeneratorFunction(t)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},v(y),u(y,s,"Generator"),y[r]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var a=e.pop();if(a in n)return t.value=a,t.done=!1,t}return t.done=!0,t}},n.values=L,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function t(t,a){return o.type="throw",o.arg=n,e.next=t,a&&(e.method="next",e.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),u=a.call(r,"finallyLoc");if(s&&u){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=n,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(o)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),d},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),d}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var a=t.completion;if("throw"===a.type){var i=a.arg;j(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:L(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},n}("object"===e(n)?n.exports:{});try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}).call(this,t(4)(n))},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,e,t){var a=t(0),i=t(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n",""]),n.exports=e},function(n,e,t){var a=t(0),i=t(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Bangers&family=Oleo+Script:wght@700&family=Roboto&display=swap);"]),e.push([n.i,"/* start header */\n\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nheader {\n    position: relative;\n    max-height: 100vh;\n    overflow: hidden;\n}\n\nheader label {\n    position: absolute;\n    z-index: -1;\n}\n\n.hero img {\n    width: 100%;\n}\n\n.brand-title {\n    font-size: 1.5rem;\n    position: absolute;\n    font-family: 'Oleo Script', cursive;\n    left: 2em;\n    top: .5em;\n    color: white;\n}\n\n.nav-icon {\n    position: absolute;\n    text-decoration: none;\n    font-size: 1.5rem;\n    min-width: 44px;\n    min-height: 44px;\n    color: white;\n    left: .5em;\n    top: .5em;\n}\n\nnav {\n    width: 70%;\n    z-index: 1;\n    background: rgba(126, 160, 77, .9);\n    position: absolute;\n    top: 3.2rem;\n    left: -70%;\n    border-radius: 0 1rem 1rem 0;\n    transition: transform .5s ease-in-out;\n}\n\n.open {\n    transform: translate(70vw, 0);\n}\n\n.nav-list {\n    font-size: 1rem;\n    display: list-item;\n    padding: 1em;\n}\n\n.nav-item {\n    padding: .5em;\n}\n\n.nav-item a {\n    text-decoration: none;\n    color: #000;\n    padding: .8em .5em;\n}\n\n.nav-item a::after {\n    content: '';\n    display: block;\n    border-bottom: 4px solid #335d2d;\n    width: 5em;\n    margin-left: 1em;\n    padding-top: .5em;\n}\n\n.hero-tagline {\n    font-size: 1.3rem;\n    font-family: 'Bangers', cursive;\n    position: absolute;\n    color: white;\n    width: 100%;\n    text-align: center;\n    top: 4em\n}\n\n.tagline-sec {\n    text-indent: -3em;\n}\n\n.tagline-first {\n    text-indent: 3em;\n}\n\n\n\n.hero-desc {\n    position: absolute;\n    font-size: .7rem;\n    top: 9em;\n    text-align: center;\n    color: white;\n    line-height: 1.3em;\n    padding: 2rem;\n}\n\n\n/* end header */\n\n.all-available{\n    text-align: center;\n    position: relative;\n    top: -3px;\n    width: 100%;\n    background: #7ea04d;\n    color: white;\n    padding: 1.5rem 0;\n    z-index: -1 ;\n}\n\n.header-available {\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 2em;\n}\n\n.all-available ul li img {\n    width: 5rem;\n    margin: 1rem 0;\n}\n\n.all-available ul li h3 {\n    font-size: 1.5rem;\n    margin-bottom: 2em;\n}\n\n.all-available h4 {\n    font-size: 1.2rem;\n    padding: 0 1em 1em 1em;\n}\n/* Awal main */\n\n#content {\n    position: relative;\n    width: 100%;\n    margin-bottom: 5em;\n}\n\n.main-title {\n    width: 80%;\n    text-align: center;\n    font-size: 1.3rem;\n    margin: 3em auto;\n    font-weight: bold;\n    line-height: 1.2em;\n}\n\nsection {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n    margin: 1rem 1rem 0 1rem;\n    position: relative;\n}\n\nsection img {\n    width: 100%;\n}\n\n.store-list {\n    padding: 2rem;\n}\n\n.store-place {\n    position: absolute;\n    font-size: 1rem;\n    color: #000;\n    font-weight: bold;\n    top: .5em;\n    left: 1em;\n    width: 30%;\n    text-align: center;\n    background: #7ea04d;\n    border-radius: .5em;\n    padding: .5em;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);\n}\n\n.store-title {\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n}\n\n\n.store-desc {\n    font-size: 1rem;\n    line-height: 1.5em;\n    text-align: justify;\n    text-indent: 3em;\n}\n\nfooter {\n    width: 100%;\n    background: #7ea04d;\n    color: #fff;\n}\n\n.copyright {\n    font-size: 1rem;\n    text-align: center;\n    padding: 1.2em 0;\n    font-family: 'Oleo Script', cursive;\n}\n\n.copyright-utils {\n    font-size: 1rem;\n    text-align: center;\n    padding-bottom: 1em;\n}\n\n.skip-content {\n    position: absolute;\n    top: 3em;\n    right: 2em;\n    font-size: .6rem;\n    padding: 1em;\n    text-decoration: none;\n    background: #7ea04d;\n    color: #fff;\n    border-radius: 1em;\n    z-index: -1;\n}\n\n.skip-content:focus {\n    z-index: 0;\n}\n\n.action {\n    height: 40px;\n    text-align: center;\n    background: #7ea04d;\n}\n\n.contact-seller {\n    font-size: 1.3rem;\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n    line-height: 40px;\n}\n",""]),n.exports=e},function(n,e,t){var a=t(0),i=t(10);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,"@media screen and (min-width: 400px) {\n  .hero-desc {\n      font-size: 1rem;\n  }\n\n  .brand-title, .nav-icon  {\n      font-size: 2rem;\n  }\n\n  .hero-tagline {\n      font-size: 1.5rem;\n  }\n  \n\n}\n\n@media screen and (min-width: 500px) {\n  .hero-desc {\n      font-size: 1.2rem;\n      top: 10em;\n  }\n\n  .hero-tagline {\n      font-size: 2rem;\n  }\n}\n\n\n@media screen and (min-width: 600px) {\n  .store-list {\n      padding: 3rem;\n  }\n\n  .copyright {\n      font-size: 2rem;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  #storeList {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem\n  }\n\n  .store-list {\n      padding: 1rem;\n  }\n\n  section {\n      margin: 0;\n  }\n\n  .brand-title {\n      font-size: 2rem;\n  }\n\n  .hero-tagline {\n      top: 4em;\n      font-size: 2.5rem;\n  }\n\n  .hero-desc {\n      font-size: 1.3rem;\n      top: 12em;\n  }\n\n  .nav-icon {\n      display: none;\n  }\n\n  .brand-title {\n      left: .6em;\n      top: .4em;\n  }\n\n  nav {\n      width: 100%;\n      background: none;\n      top: 1rem;\n      left: 0;\n      text-align: right;\n  }\n\n  .nav-list {\n      padding: 0;\n  }\n\n  .nav-item {\n      display: inline-block;\n  }\n\n  .nav-item a {\n      color: #fff;\n  }\n\n  .nav-item a::after {\n      content: none;\n  }\n\n  .nav-item a:hover {\n      border-bottom: 4px solid #a2de96;;\n      border-radius: 1em;\n  }\n\n  .skip-content {\n      top: 5em;\n      font-size: 1rem;\n  }\n\n  .all-available ul{\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 1rem;\n      margin: 3rem 0;\n  }\n\n  .header-available{\n      font-size: 2rem;\n  }\n\n  .all-available h4 {\n      font-size: 1.6rem;\n  }\n\n  #content .store{\n      padding: 1rem;\n  }\n}\n\n@media screen and (min-width: 800px) {\n    .main-title {\n        font-size: 2rem;\n    }\n\n  .store-list {\n      padding: 2rem;\n  }\n\n  .hero-tagline{\n      top: 6em;\n  }\n\n  .hero-desc {\n      font-size: 1.7rem;\n      top: 13em;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .nav-list {\n      font-size: 1.2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  #storeList {\n      grid-template-columns: repeat(3, 1fr);\n  }\n\n  .all-available ul{\n      grid-template-columns: repeat(3, 1fr);\n  }\n\n  .store-list {\n      padding: 1rem;\n  }\n\n  .brand-title {\n      font-size: 3rem;\n  }\n\n  .nav-item {\n      font-size: 1.5rem;\n  }\n  \n}\n\n@media screen and (min-width: 1400px) {\n  body {\n      margin: auto;\n      max-width: 1400px;\n  }\n\n  .brand-title {\n      font-size: 5rem;\n  }\n\n  .nav-list {\n      font-size: 2rem;\n  }\n  \n}",""]),n.exports=e},function(n,e,t){var a=t(0),i=t(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);n.exports=i.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,".main-block {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n}\n\nlegend h3 {\n  font-size: 1.3rem;\n  margin: 2em 0;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n}\n\nfieldset {\n  border-top: 4px solid #8ebf42;\n}\n\n.store-details {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.store-details >div >div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.store-details >div, input, label {\n  width: 100%;\n}\n\nlabel {\n  padding: 0 5px;\n  text-align: right;\n  vertical-align: middle;\n}\n\ninput {\n  padding: 5px;\n  vertical-align: middle;\n}\n\ninput:focus {\n  outline: 2px solid #8ebf42;\n}\n\n.checkbox {\n  margin-bottom: 10px;\n}\n\n\n.checkbox input, .children input {\n  width: auto;\n  margin: -2px 10px 0 0;\n}\n\n.checkbox a {\n  color: #8ebf42;\n}\n\n.checkbox a:hover {\n  color: #97a089;\n}\n\nbutton {\n  min-width: 120px;\n  min-height: 44px;\n  padding: 10px 0;\n  margin: 10px auto;\n  border-radius: 5px; \n  border: none;\n  background: #8ebf42; \n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n\nbutton:hover {\n  background: #82b534;\n}\n\n@media (min-width: 568px) {\n  .store-details >div, input, label {\n    width: 50%;\n  }\n\n  .store-details .form-input {\n    margin: auto;\n    margin-left: 13vw;\n  }\n}",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);t(3),t(5),t(7),t(9),t(11);function a(n,e,t,a,i,r,o){try{var s=n[r](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(a,i)}var i=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((function(){console.log("service worker berhasil didaftarkan")})):console.log("Service worker tidak didukung browser ini.");case 1:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function s(n){a(o,i,r,s,u,"next",n)}function u(n){a(o,i,r,s,u,"throw",n)}s(void 0)}))});return function(){return e.apply(this,arguments)}}(),r={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},o={init:function(n){var e=this,t=n.drawer;n.button.addEventListener("click",(function(n){e._toggleDrawer(n,t)}))},_toggleDrawer:function(n,e){n.preventDefault(),n.stopPropagation(),e.classList.toggle("open")}},s=t(2);function u(n,e,t,a,i,r,o){try{var s=n[r](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(a,i)}var l={storeList:function(){return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s.store);case 1:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,i){var r=n.apply(e,t);function o(n){u(r,a,i,o,s,"next",n)}function s(n){u(r,a,i,o,s,"throw",n)}o(void 0)}))})();var n}},c={templateStoreList:function(n){return'\n      <section class="market">\n        <img src="'.concat(n.pictureId,'" tabindex="0" alt="Gambar store ').concat(n.name," di ").concat(n.city,'">\n        <h2 tabindex="0" class="store-place">').concat(n.city,'</h2>\n        <article class="store-list">\n            <h3 tabindex="0" class="store-title">').concat(n.name,'</h3>\n            <p tabindex="0" class="store-desc">').concat(n.description,'</p>\n        </article>\n        <div class="action">\n          <a href="https://wa.me/6282320743292" class="contact-seller"> Hubungi penjual</a>\n        </div>\n    </section>')},templateStoreRegister:function(){return'\n      <div class="main-block">\n        <form>\n          <fieldset>\n            <legend>\n              <h3>Informasi Hasil panen</h3>\n            </legend>\n            <div  class="store-details">\n              <div class="form-input">\n                <div><label>Nama toko</label><input type="text" name="name" required></div>\n                <div><label>Jenis panen</label><input type="text" name="type" required></div>\n                <div><label>deskripsi panen</label><input type="textarea" name="desc" required></div>\n                <div><label>Alamat</label><input type="text" name="address"></div>\n                <div><label>No yang bisa dihubungi</label><input type="text" name="noTel"></div>\n                <div><label>Gambar panen</label><input type="file" name="file"></div>\n              </div>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>\n              <h3>Ketentuan</h3>\n            </legend>\n            <div  class="terms-mailing">\n              <div class="checkbox">\n                <input type="checkbox" name="checkbox"><span>Data tersebut benar milik saya pribadi</span>\n              </div>\n          </fieldset>\n          <button type="reset">Daftarkan</button>\n        </form>\n      </div> '},templateAllAvaialable:function(){return'\n      <h2 class="header-available">Apa yang anda butuhkan ?</h2>\n      <ul>\n        <li>\n          <img src="./images/rice.svg" alt="Bahan Pokok">\n          <h3>Bahan Pokok</h3>\n        </li>\n        <li>\n          <img src="./images/vegetable.svg" alt="Sayuran">\n          <h3>Sayuran</h3>\n        </li>\n        <li>\n          <img src="./images/fruits.svg" alt="Buah-buahan">\n          <h3>Buah-buahan</h3>\n        </li>\n        <li>\n          <img src="./images/nuts.svg" alt="Kacang-Kacangan">\n          <h3>Kacang-Kacangan</h3>\n        </li>\n        <li>\n          <img src="./images/coffee.svg" alt="Biji Kopi">\n          <h3>Biji Kopi</h3>\n        </li>\n        <li>\n          <img src="./images/tobacco.svg" alt="Tembakau">\n          <h3>Tembakau</h3>\n        </li>\n      </ul>\n\n      <h4>Tunggu apalagi ?</h4>\n      <h4> Yok langsung saja disikat....</h4>'}};function d(n,e,t,a,i,r,o){try{var s=n[r](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(a,i)}var m={render:function(){return'\n      <div class="all-available"></div>\n      <div class="store">\n        <h1 class="main-title" tabindex="0">Pilih sesuka hati dan bayar tanpa menguras dompet</h1>\n        <div id="storeList"></div>\n      </div>\n      '},afterRender:function(){return(n=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.querySelector(".all-available").innerHTML=c.templateAllAvaialable(),n.next=4,l.storeList();case 4:e=n.sent,t=document.querySelector("#storeList"),e.forEach((function(n){t.innerHTML+=c.templateStoreList(n)}));case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,i){var r=n.apply(e,t);function o(n){d(r,a,i,o,s,"next",n)}function s(n){d(r,a,i,o,s,"throw",n)}o(void 0)}))})();var n}},p={"/":m,"/toko":m,"/register":{render:function(){return'\n    <div class="store-register">\n      <h1 class="main-title" tabindex="0">Daftarkan hasil panen anda untuk untuk jangkauan yang lebih luas</h1>\n      <div id="storeRegister"></div>\n    </div>\n    '},afterRender:function(){document.querySelector("#storeRegister").innerHTML=c.templateStoreRegister()}}};function h(n,e,t,a,i,r,o){try{var s=n[r](o),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(a,i)}function g(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var f=new(function(){function n(e){var t=e.drawer,a=e.button,i=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._drawer=t,this._button=a,this._content=i,this._initAppShell()}var e,t,a,i,s;return e=n,(t=[{key:"_initAppShell",value:function(){o.init({drawer:this._drawer,button:this._button})}},{key:"renderPage",value:(i=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.parseActiveUrlWithCombiner(),t=p[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,e=arguments;return new Promise((function(t,a){var r=i.apply(n,e);function o(n){h(r,t,a,o,s,"next",n)}function s(n){h(r,t,a,o,s,"throw",n)}o(void 0)}))},function(){return s.apply(this,arguments)})}])&&g(e.prototype,t),a&&g(e,a),n}())({drawer:document.querySelector("#drawer"),button:document.querySelector("#nav-icon"),content:document.querySelector("#content")});window.addEventListener("hashchange",(function(){f.renderPage()})),window.addEventListener("load",(function(){f.renderPage(),i()}))}]);