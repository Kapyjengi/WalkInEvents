(this["webpackJsonpwalkin-react-front"]=this["webpackJsonpwalkin-react-front"]||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(14),i=n.n(c),l=(n(21),n(2)),u=n.n(l),s=n(4),f=n(3),p=n(15),d=n.n(p);n(23),n(24);var m=function(){console.log("build 0.1.6");var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)({lat:"",lon:""}),l=Object(f.a)(i,2),p=(l[0],l[1]),m=Object(r.useState)(5),h=Object(f.a)(m,2),g=h[0];function v(){return(v=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){p({lat:e.coords.latitude,lon:e.coords.longitude}),w(e.coords.latitude,e.coords.longitude,g)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(u.a.mark((function e(t,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="?distance_filter="+t+"%2C"+n+"%2C"+r,e.next=3,fetch("/api/events".concat(a)).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h[1],Object(r.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]);var b=function(){if(n.length>0){var e=JSON.parse(n);return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",{className:"event",key:e.id},e.id," - ",e.name.fi)})))}return o.a.createElement("p",null,"Loading...")},j=function(e){return o.a.createElement("p",null,o.a.createElement("strong",null,"Query!: ",e.query))};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement(j,{query:a}),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.732f2d38.chunk.js.map