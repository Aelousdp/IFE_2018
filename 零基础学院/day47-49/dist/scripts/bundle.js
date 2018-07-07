!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(w[e]&&b[e]){for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===y&&O()}}(e,n),t&&t(e,n)};var n,r=!0,o="9f643b22b2c3e06e869e",i=1e4,c={},a=[],s=[];function u(e){var t=j[e];if(!t)return S;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),S(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&f("prepare"),y++,S.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===d&&(g[e]||_(e),0===y&&0===v&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),S.t(e,-2&t)},r}var l=[],d="idle";function f(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,h,m,v=0,y=0,g={},b={},w={};function T(e){return+e+""===e?+e:e}function k(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=S.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;b={},g={},w=e.c,m=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});return h={},_(0),"prepare"===d&&0===y&&0===v&&O(),t})}function _(e){w[e]?(b[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function O(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return x(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(T(n));e.resolve(t)}}function x(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,i,s,u;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((s=j[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<s.parents.length;a++){var u=s.parents[a],l=j[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var v={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var _;u=T(k);var O=!1,x=!1,L=!1,P="";switch((_=h[k]?l(u):{type:"disposed",moduleId:k}).chain&&(P="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+_.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(_),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),L=!0;break;default:throw new Error("Unexception type "+_.type)}if(O)return f("abort"),Promise.reject(O);if(x)for(u in g[u]=h[u],p(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(v[u]||(v[u]=[]),p(v[u],_.outdatedDependencies[u]));L&&(p(y,[_.moduleId]),g[u]=b)}var E,M=[];for(r=0;r<y.length;r++)u=y[r],j[u]&&j[u].hot._selfAccepted&&M.push({module:u,errorHandler:j[u].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var D,I,H=y.slice();H.length>0;)if(u=H.pop(),s=j[u]){var q={},C=s.hot._disposeHandlers;for(i=0;i<C.length;i++)(n=C[i])(q);for(c[u]=q,s.hot.active=!1,delete j[u],delete v[u],i=0;i<s.children.length;i++){var A=j[s.children[i]];A&&(E=A.parents.indexOf(u))>=0&&A.parents.splice(E,1)}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(s=j[u]))for(I=v[u],i=0;i<I.length;i++)D=I[i],(E=s.children.indexOf(D))>=0&&s.children.splice(E,1);for(u in f("apply"),o=m,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var W=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(s=j[u])){I=v[u];var N=[];for(r=0;r<I.length;r++)if(D=I[r],n=s.hot._acceptedDependencies[D]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:I[r],error:e}),t.ignoreErrored||W||(W=e)}}}for(r=0;r<M.length;r++){var R=M[r];u=R.module,a=[u];try{S(u)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||W||(W=n),W||(W=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||W||(W=e)}}return W?(f("fail"),Promise.reject(W)):(f("idle"),new Promise(function(e){e(y)}))}var j={};function S(t){if(j[t])return j[t].exports;var r=j[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:k,apply:x,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(s=a,a=[],s),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}S.m=e,S.c=j,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="",S.h=function(){return o},u(6)(S.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(t){c(this,e),this.cash=t.cash||0,this.seats=t.seats||0,this.staffList=t.staffList||[],this.worldTime=1e3}return r(e,[{key:"hire",value:function(e){-1===this.staffList.indexOf(e)?(this.staffList.push(e),console.log("招聘了"+e.name)):console.log("招聘失败"+e.name+"已经是你家员工了")}},{key:"fire",value:function(e){var t=this;-1!==this.staffList.indexOf(e)?this.staffList.map(function(n,r){n.id===e.id&&(t.staffList.splice(r,1),console.log("解雇了"+e.name))}):console.log("解雇失败"+e.name+"不是你家员工")}},{key:"getTime",value:function(){return console.log("获取基准时间"+this.worldTime),this.worldTime}},{key:"setTime",value:function(e){return Number(e)&&(console.log("设定基准时间为"+Number(e)),this.worldTime=Number(e)),this.worldTime}}],[{key:"getInstance",value:function(e){return this.instance||(this.instance=new this(e)),this.instance}}]),e}(),s=0,u=function(){function e(t,n){c(this,e),this.id=++s,this.name=t||"",this.salary=n||0}return r(e,[{key:"startWork",value:function(){console.log(this.name+"开始工作")}},{key:"finishWork",value:function(){console.log(this.name+"工作完毕")}}],[{key:"getInstance",value:function(e){return this.instance||(this.instance=new this(e)),this.instance}}]),e}(),l=function(e){function t(e,n){c(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.customer={},r}return i(t,u),r(t,[{key:"changeStatus",value:function(e,t){var n=document.querySelector("#waiter-wrapper"),r=n.querySelector("#waiter-status");switch(e){case"点单":r.innerText="点单",this.moveToWhere("Customer",n);break;case"下单":r.innerText="下单",this.moveToWhere("Cook",n),setTimeout(function(e){e.innerText="空闲"},500,r);break;case"上菜":r.innerText="上菜",this.moveToWhere("Customer",n),setTimeout(this.moveToWhere,500,"Cook",n),setTimeout(function(e){e.innerText="空闲"},1e3,r),this.customer.eat(t)}}},{key:"moveToWhere",value:function(e,t){switch(e){case"Customer":t.style.top="225px",t.style.left="550px";break;case"Cook":t.style.top="10px",t.style.left="320px"}}}]),t}(),d=function(e){function t(e,n){c(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.preList=[],r}return i(t,u),r(t,[{key:"startWork",value:function(){console.log(this.name+"烹饪菜品")}},{key:"finishWork",value:function(){console.log(this.name+"烹饪完")}},{key:"changeStatus",value:function(e){var t=document.querySelector("#cook-status");switch(e){case"开始":for(var n=0;this.preList.length>0;){for(var r=this.preList[0],o=[],i=1;i<this.preList.length;i++)o.push(this.preList[i]);this.preList=o;for(var c=function(e){setTimeout(function(n){t.innerText="烹饪"+n.name+"还需"+(n.time-e)+"秒"},1e3*n+1e3*e,r)},a=0;a<r.time;a++)c(a);n+=r.time;var s=this.preList;setTimeout(function(e,t,n){l.getInstance().changeStatus("上菜",n),t.updateCookList(e)},1e3*n,s,this,r)}setTimeout(function(){t.innerText="空闲"},1e3*n)}}},{key:"updateCookList",value:function(e){e=e||this.preList;for(var t=document.querySelector("#app #cook-list"),n="",r=0;r<e.length;r++)n+="<li>"+e[r].name+"</li>";t.innerHTML=n}}]),t}(),f=function(){function e(){c(this,e),this.eatList=[]}return r(e,[{key:"order",value:function(){return p.getInstance().getRandom()}},{key:"changeStatus",value:function(e,t){var n=document.querySelector("#customer-status");switch(e){case"入座":n.innerText="入座";break;case"点单":for(var r=function(e){setTimeout(function(){n.innerText="点单还需"+(t-e)/1e3+"秒"},e)},o=0;o<t;o+=1e3)r(o);break;case"点单完毕":n.innerText="点单完毕"}}},{key:"eat",value:function(e){for(var t=document.querySelector("#customer-status"),n=document.querySelectorAll("#customer-dash-list li"),r={},o=0;o<n.length;o++)if(n[o].innerText===e.name){r=n[o];break}r.innerText=e.name+"已上",t.innerText="开始用餐",setTimeout(function(){r.innerText=e.name+"已吃完"},3e3)}}]),e}(),p=function(){function e(t){if(c(this,e),this.list=[],null!=t)for(var n in t)this.add(t[n].name,t[n].cost,t[n].price,t[n].time)}return r(e,[{key:"add",value:function(e,t,n,r){this.list.push(new h(e,t,n,r))}},{key:"getRandom",value:function(){for(var e=Math.ceil(Math.random()*this.list.length),t=[],n=0;n<e;n++){var r=Math.floor(Math.random()*this.list.length);-1===t.indexOf(this.list[r])&&t.push(this.list[r])}return t}}],[{key:"getInstance",value:function(e){return this.instance||(this.instance=new this(e)),this.instance}}]),e}(),h=function e(t,n,r,o){c(this,e),this.name=t,this.cost=n,this.price=r,this.time=o};t.Restaurant=a,t.Staff=u,t.Waiter=l,t.Cook=d,t.Customer=f,t.Dash=h,t.Menu=p},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Factory=void 0;var r=n(0),o=function(){};o.create=function(e){var t={};switch(e){case"Customer":t=new r.Customer;break;case"Menu":t=r.Menu.getInstance()}return t},t.Factory=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toTest=void 0;var r=n(0),o=n(3),i=[];function c(){for(var e=document.querySelector("#app #customer-list"),t="",n=0;n<i.length;n++)t+='<div class = "customer"></div>';e.innerHTML=t}t.toTest=function(){var e=r.Restaurant.getInstance({cash:1e6,seats:1,staffList:[]});document.querySelector("#app #cash").innerText=e.cash;var t=r.Cook.getInstance("Cook_Wang",1e4),n=r.Waiter.getInstance("Waiter_Xu",5e3);e.hire(t),e.hire(n);var a=o.Factory.create("Menu");a.add("糖醋排骨",120,360,3),a.add("麻婆豆腐",30,120,2),a.add("老鸭粉丝汤",130,390,2),a.add("蒜枣大黄鱼",180,440,4),e.setTime(1e3);var s=e.getTime();document.querySelector("#app #add-customer").onclick=function(){i.length<18?i.push(o.Factory.create("Customer")):alert("The queue is too long, you can't wait in here."),c()},setInterval(function(){if("None"===document.querySelector("#customer-status").innerText&&0!==i.length){var r=i.pop();c(),new Promise(function(e,t){r.changeStatus("入座")}).then(n.changeStatus("点单")).then(r.changeStatus("点单",3*s)).then(setTimeout(function(){r.eatList=r.order(),function(e){for(var t=document.querySelector("#app #customer-dash-list"),n="",r=0;r<e.length;r++)n+="<li>"+e[r].name+"</li>";t.innerHTML=n}(r.eatList),r.changeStatus("点单完毕"),t.preList=r.eatList,n.changeStatus("下单"),n.customer=r},3*s)).then(setTimeout(function(){t.updateCookList(),t.changeStatus("开始")},3.5*s)),setInterval(function(t){!function(t){var n=document.querySelectorAll("#app #customer-dash-list li"),r=document.querySelector("#app #cash"),o=document.querySelector("#customer-status");if("就餐完毕"!==o.innerText&&0!==n.length){for(var i=0;i<n.length;i++)if(-1===n[i].innerText.indexOf("已吃完"))return;for(var c=Number(r.innerText),a=0;a<t.eatList.length;a++)c+=Number(t.eatList[a].price-t.eatList[a].cost);r.innerText=c,e.cash=c,o.innerText="就餐完毕",setTimeout(function(){o.innerText="None",n[0].parentNode.innerHTML=""},1e3)}}(t)},100,r)}},1e3)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addLoadEvent=function(e){var t=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t(),e()}}},function(e,t,n){"use strict";var r=n(5),o=n(4);n(2),(0,r.addLoadEvent)(o.toTest)}]);