!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);function r(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==t.return||t.return()}finally{if(i)throw c}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}console.log("Hi, I'm Ewelina - welcome in my portfolio 🤗"),fetch("https://api.github.com/users/evescolded/repos?sort=created&direction=desc").then((function(e){return e.json()})).then((function(e){var n,t=r(e);try{for(t.s();!(n=t.n()).done;){var o=n.value,a=o.name,c=o.description,l=o.html_url,i=o.homepage;if(!o.fork){var s=document.querySelector(".projects__container--js"),u='<article class="project">\n            <div class="project__bar">\n              <span class="project__circles" alt=""></span>\n            </div>\n            <div class="project__content">\n              <div class="project__github-logo"  alt="logo GitHub"></div>\n              <p class="project__grid">\n                <span class="project__label">project:</span>\n                <span class="project__name">'.concat(a,'</span>\n              </p>\n              <p class="project__grid">\n                <span class="project__label">description:</span>\n                <span class="project__description">').concat(c,'</span>\n              </p>\n              <p class="project__grid">\n                <span class="project__label">demo:</span>\n                <span>&lt;<a href="').concat(i,'" title="').concat(a,'" class="project__link" target="_blank" rel="noopener norefferer">see here</a>&gt;</span>\n              </p>\n              <p class="project__grid">\n                <span class="project__label">github:</span>\n                <span>&lt;<a href="').concat(l,'" title="').concat(a,'" class="project__link" target="_blank" rel="noopener norefferer">source code</a>&gt;</span>\n              </p>\n\n            </div>\n          </article>');s.innerHTML+=u}}}catch(e){t.e(e)}finally{t.f()}})).catch((function(e){console.log("Nie udało się pobrać repo :(")}))},function(e,n,t){}]);