if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-f810d34f"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"index.html",revision:"ff6b99bee2a11d042b244d6a102b3ce3"},{url:"package-lock.json",revision:"5516277826e4448896057db7f9486a0a"},{url:"package.json",revision:"2166ac143e80487115d80b3cb46156ce"},{url:"src/app.js",revision:"bc32ee475530f653fbbfd36ffac44935"},{url:"src/bootstrap.min.js",revision:"904e10b25430ab5f3d98ab49bb3f3a87"},{url:"src/jquery.min.js",revision:"12b69d0ae6c6f0c42942ae6da2896e84"},{url:"src/mdb.min.js",revision:"14c31dabd1a827e987f4feef7c8659ac"},{url:"src/popper.min.js",revision:"36affe2ca6cb85233ee7362c5d8b7893"},{url:"style/all.min.css",revision:"84d8ad2b4fcdc0f0c58247e778133b3a"},{url:"style/bootstrap.min.css",revision:"816af0eddd3b4822c2756227c7e7b7ee"},{url:"style/mdb.min.css",revision:"1432909f5ec03da97e482aca190b2082"},{url:"style/style.css",revision:"830a8a2698954d911eacafd272393dde"},{url:"todo.html",revision:"e9c79e0357d7f9e4442ff5efbc05603e"}],{})}));
//# sourceMappingURL=sw.js.map
