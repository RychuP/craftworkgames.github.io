(()=>{"use strict";var e,a,t,c,f,r={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=r,d.c=b,e=[],d.O=(a,t,c,f)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],f=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&f||r>=f)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,f<r&&(r=f));if(b){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,c,f]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var r={};a=a||[null,t({}),t([]),t(t)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,d.d(f,r),f},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({194:"f270d4dd",529:"08af526d",736:"a1c0d3ed",1235:"a7456010",1341:"bf0780ab",1653:"3aef3cab",1819:"bb26e22c",1903:"acecf23e",2256:"11b43341",2634:"c4f5d8e4",2711:"9e4087bc",3215:"2063472f",3249:"ccc49370",3529:"4ef90eef",3647:"ab147173",3727:"b0b31e12",4113:"0cd15f3d",4372:"608560bd",4493:"17a8bb09",4501:"84044833",4813:"6875c492",5129:"e4ab6c9b",5297:"dcf22450",5548:"5ef61680",5742:"aba21aa0",5857:"655e0645",6163:"0a2f799b",6411:"aa4e1f6d",6713:"baa73a92",6778:"31a315e4",6899:"e24e1c44",7098:"a7bd4aaa",7396:"812244db",7397:"d7b95b58",7472:"814f3328",7505:"51515e66",7643:"a6aa9e1f",7708:"3cf817b5",7924:"54f44165",8024:"dabf4a7f",8209:"01a85c17",8401:"17896441",8530:"16296e04",8685:"87269792",8745:"7202b5c5",8749:"dbfc4782",9039:"54d6eb79",9048:"a94703ab",9265:"4bd3fe22",9444:"24f3c139",9591:"f291af6e",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{194:"d4c78d38",529:"243d5572",736:"568e93b0",1135:"464368d3",1235:"884e16e7",1341:"30f8a30c",1653:"a47b17c5",1819:"45dd2875",1903:"5842f161",2237:"fb032cc9",2256:"ba86f660",2634:"cc63e8ee",2711:"989b004c",3215:"54ea13bf",3249:"6c649b83",3529:"52874cd8",3647:"807b366d",3727:"ebb790b3",4113:"8a6b9508",4372:"57f5f8d6",4493:"b977ca46",4501:"fcde59be",4813:"42c850ea",5129:"0e9fc2b3",5297:"95efeb33",5303:"383d914e",5548:"180e872e",5742:"54e1e9ef",5857:"0aff0a54",6163:"b78f378b",6411:"255ff887",6713:"209ee7fa",6778:"c8a79f38",6899:"662ff7fb",6905:"b3101ef5",7098:"da38ef66",7396:"cfb2a91f",7397:"d05b35ad",7472:"9cfb0222",7505:"556f0c88",7643:"ee611b98",7708:"c54cb42e",7924:"26145806",8024:"e717e14b",8209:"03b487e5",8401:"79fe72de",8530:"63c124c1",8685:"df732d91",8745:"d4203610",8749:"c8597eb6",9039:"d16e8fe3",9048:"6d036c97",9265:"fab3f279",9444:"52f1b857",9591:"2ec251be",9647:"17bb0832",9858:"8b313f97"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="monogame-extended-website:",d.l=(e,a,t,r)=>{if(c[e])c[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",f+t),b.src=e),c[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"8401",84044833:"4501",87269792:"8685",f270d4dd:"194","08af526d":"529",a1c0d3ed:"736",a7456010:"1235",bf0780ab:"1341","3aef3cab":"1653",bb26e22c:"1819",acecf23e:"1903","11b43341":"2256",c4f5d8e4:"2634","9e4087bc":"2711","2063472f":"3215",ccc49370:"3249","4ef90eef":"3529",ab147173:"3647",b0b31e12:"3727","0cd15f3d":"4113","608560bd":"4372","17a8bb09":"4493","6875c492":"4813",e4ab6c9b:"5129",dcf22450:"5297","5ef61680":"5548",aba21aa0:"5742","655e0645":"5857","0a2f799b":"6163",aa4e1f6d:"6411",baa73a92:"6713","31a315e4":"6778",e24e1c44:"6899",a7bd4aaa:"7098","812244db":"7396",d7b95b58:"7397","814f3328":"7472","51515e66":"7505",a6aa9e1f:"7643","3cf817b5":"7708","54f44165":"7924",dabf4a7f:"8024","01a85c17":"8209","16296e04":"8530","7202b5c5":"8745",dbfc4782:"8749","54d6eb79":"9039",a94703ab:"9048","4bd3fe22":"9265","24f3c139":"9444",f291af6e:"9591","5e95c892":"9647","36994c47":"9858"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var c=d.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>c=e[a]=[t,f]));t.push(c[2]=f);var r=d.p+d.u(a),b=new Error;d.l(r,(t=>{if(d.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",b.name="ChunkLoadError",b.type=f,b.request=r,c[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var c,f,r=t[0],b=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(c in b)d.o(b,c)&&(d.m[c]=b[c]);if(o)var i=o(d)}for(a&&a(t);n<r.length;n++)f=r[n],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(i)},t=self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();