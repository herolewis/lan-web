(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(234)},131:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(124),a(24)),i=a.n(s),l=a(37),u=a(44),m=(a(126),a(117)),p=(a(128),a(78)),d=(a(129),a(53)),h=a(38),f=a(58),v=(a(131),a(69),a(8)),y=Object(v.h)(function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(v.a,{to:"/home/list"}),Object(f.a)(e.route.routes))}),b=(a(55),a(32)),E=function(){return r.a.createElement("div",{className:"help"},r.a.createElement(b.a,{description:"\u6682\u65e0\u6570\u636e"}))},w=a(29),j=a(103),O=a.n(j).a.create({baseURL:"https://www.mxnzp.com/api/",timeout:3e3});O.interceptors.request.use(function(e){return e.url="".concat(e.url,"?app_id=ykholzngnvdqlrvn&app_secret=RVBocWEzUFJkYm1yMlFobHVnNnFtdz09"),e},function(e){return Promise.reject(e)}),O.interceptors.response.use(function(e){var t=e.data;if(1===t.code)return Promise.resolve(t);throw Promise.reject(t.msg)},function(e){return Promise.reject(e)});var g=O,I=Object(v.h)(function(e){var t=Object(n.useState)({content:"",cover:"",title:""}),a=Object(u.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)(function(){Object(l.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:s(e.match.params.id);case 1:case"end":return t.stop()}},t)}))()},[e.match.params.id]);var s=function(e){var t;(t={newsId:e},g.get("/news/details",{params:Object(w.a)({},t)})).then(function(e){e.data&&o(e.data)})};return r.a.createElement("div",{className:"detail"},c.content?r.a.createElement("div",{className:"article-intro"},r.a.createElement("h2",null,c.title),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:c.content}})):r.a.createElement(b.a,{description:"\u6682\u65e0\u6570\u636e"}))}),N=(a(235),a(79)),x=(a(157),a(80)),k=x.a.TabPane;var T=[{path:"/",exact:!0,component:y},{path:"/home",component:y,routes:[{path:"/home/list",exact:!0,component:Object(v.h)(function(){var e=Object(n.useReducer)(function(e,t){switch(t.type){case"changeList":return Object(w.a)(Object(w.a)({},e),{},{list:t.list});case"changeTypes":return Object(w.a)(Object(w.a)({},e),{},{types:t.types});case"changeTypeId":return Object(w.a)(Object(w.a)({},e),{},{typeId:t.typeId});default:throw new Error}},{list:[],types:[],typeId:0}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(l.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={typeId:t,page:1},g.get("/news/list",{params:Object(w.a)({},n)});case 2:a=e.sent,c({type:"changeList",list:a.data});case 4:case"end":return e.stop()}var n},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a={},g.get("/news/types",{params:Object(w.a)({},a)});case 2:return t=e.sent,c({type:"changeTypes",types:t.data}),c({type:"changeTypeId",typeId:t.data[0].typeId}),e.next=7,o(t.data[0].typeId);case 7:case"end":return e.stop()}var a},e)}))()},[]);var s=Object(v.g)(),m=function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"changeTypeId",typeId:t}),e.next=3,o(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},a.types.length>0&&r.a.createElement(x.a,{defaultActiveKey:String(a.typeId),onChange:m},a.types.map(function(e){return r.a.createElement(k,{tab:e.typeName,key:e.typeId},a.list&&a.list.length>0&&r.a.createElement(N.b,{itemLayout:"horizontal",dataSource:a.list,renderItem:function(e){return r.a.createElement(N.b.Item,{onClick:function(){return t=e.newsId,void s.push("/home/detail/".concat(t));var t}},r.a.createElement("div",null,e.title),r.a.createElement("div",{className:"post-time"},r.a.createElement("span",null,e.postTime),r.a.createElement("span",null,e.source)))}}))})))})},{path:"/home/detail/:id",exact:!0,component:I}]},{path:"/help",exact:!0,component:E,routes:[]},{path:"*",component:function(){return r.a.createElement("h2",null,"404")},routes:[]}],S=d.a.Header,z=d.a.Content,A=d.a.Footer,C=function(){return r.a.createElement(m.a,null,r.a.createElement(p.a,{span:8}),r.a.createElement(p.a,{span:4,offset:12},r.a.createElement(h.b,{className:"menu-link",activeClassName:"active",activeStyle:{color:"#1DA57A"},to:"/home"},"\u9996\u9875"),r.a.createElement(h.b,{className:"menu-link",activeClassName:"active",activeStyle:{color:"#1DA57A"},to:"/help"},"\u5e2e\u52a9")))},L=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)(function(){Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={},g.get("/daily_word/recommend",{params:Object(w.a)({},n)});case 2:t=e.sent,a=t.data&&t.data[0].content,o(a);case 5:case"end":return e.stop()}var n},e)}))()},[]),r.a.createElement("div",{className:"root"},r.a.createElement(d.a,{className:"lan-layout"},r.a.createElement(h.a,null,r.a.createElement(S,{className:"lan-header"},r.a.createElement(C,null)),r.a.createElement(z,{className:"lan-content"},Object(f.a)(T)),r.a.createElement(A,{className:"lan-footer"},c))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.b101f9a5.chunk.js.map