(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(234)},132:function(e,t,n){},181:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=(n(123),n(13)),u=function(e){return r.a.createElement(s.d,null,e.routes.map(function(e,t){return r.a.createElement(s.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))},key:t})}))},i=(n(236),n(79)),l=(n(130),n(56)),p=(n(132),l.a.Content),m=l.a.Sider,d=Object(s.h)(function(e){var t=Object(s.g)();return r.a.createElement(l.a,{className:"lan-home"},r.a.createElement(m,{width:200,className:"lan-sider",theme:"light"},r.a.createElement(i.a,{onClick:function(e){console.log(e,"result");var n=[{key:"1",name:"\u65b0\u95fb\u8d44\u8baf",path:"/home/list"},{key:"2",name:"\u6211\u7684\u7b14\u8bb0",path:"/home/notes"}].find(function(t){return t.key===e.key}).path;t.push(n)},defaultSelectedKeys:["1"]},[{key:"1",name:"\u65b0\u95fb\u8d44\u8baf",path:"/home/list"},{key:"2",name:"\u6211\u7684\u7b14\u8bb0",path:"/home/notes"}].map(function(e){return r.a.createElement(i.a.Item,{key:e.key},e.name)}))),r.a.createElement(l.a,{style:{padding:"0 24px 24px"}},r.a.createElement(p,{className:"lan-content",style:{padding:24,margin:0,minHeight:280,background:"#FFF"}},r.a.createElement(s.d,null,e.routes.map(function(e,t){return r.a.createElement(s.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))},key:t})}),r.a.createElement(s.a,{to:"/home/list"})))))}),h=(n(59),n(34)),f=(n(181),function(){return r.a.createElement("div",{className:"notes"},r.a.createElement(h.a,{description:"\u6682\u65e0\u6570\u636e"}))}),y=(n(235),n(77)),b=n(36),v=n.n(b),E=n(47),g=n(67),w=n(29),j=(n(188),n(78)),O=n(105),k=n.n(O).a.create({baseURL:"https://www.mxnzp.com/api/",timeout:3e3});k.interceptors.request.use(function(e){return e.url="".concat(e.url,"?app_id=ykholzngnvdqlrvn&app_secret=RVBocWEzUFJkYm1yMlFobHVnNnFtdz09"),e},function(e){return Promise.reject(e)}),k.interceptors.response.use(function(e){var t=e.data;if(1===t.code)return t;throw Promise.reject(t.msg)},function(e){return Promise.reject(e)});var I=k,x=j.a.TabPane,N=[{path:"/help",component:function(){return r.a.createElement("div",{className:"help"},r.a.createElement(h.a,{description:"\u6682\u65e0\u6570\u636e"}))},exact:!0,routes:[]},{path:"/",component:u,routes:[{path:"/home",component:d,redirect:"/home/list",routes:[{path:"/home/list",component:Object(s.h)(function(){var e=Object(a.useReducer)(function(e,t){switch(t.type){case"changeList":return Object(w.a)(Object(w.a)({},e),{},{list:t.list});case"changeTypes":return Object(w.a)(Object(w.a)({},e),{},{types:t.types});case"changeTypeId":return Object(w.a)(Object(w.a)({},e),{},{typeId:t.typeId});default:throw new Error}},{list:[],types:[],typeId:0}),t=Object(g.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a={typeId:t,page:1},I.get("/news/list",{params:Object(w.a)({},a)});case 2:n=e.sent,c({type:"changeList",list:n.data});case 4:case"end":return e.stop()}var a},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={},I.get("/news/types",{params:Object(w.a)({},n)});case 2:return t=e.sent,c({type:"changeTypes",types:t.data}),c({type:"changeTypeId",typeId:t.data[0].typeId}),e.next=7,o(t.data[0].typeId);case 7:case"end":return e.stop()}var n},e)}))()},[]);var u=Object(s.g)(),i=function(){var e=Object(E.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"changeTypeId",typeId:t}),e.next=3,o(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},n.types.length>0&&r.a.createElement(j.a,{defaultActiveKey:String(n.typeId),onChange:i},n.types.map(function(e){return r.a.createElement(x,{tab:e.typeName,key:e.typeId},n.list&&n.list.length>0&&r.a.createElement(y.b,{itemLayout:"horizontal",dataSource:n.list,renderItem:function(e){return r.a.createElement(y.b.Item,{onClick:function(){return t=e.newsId,void u.push("/home/detail/".concat(t));var t}},r.a.createElement("div",null,e.title),r.a.createElement("div",{className:"post-time"},r.a.createElement("span",null,e.postTime),r.a.createElement("span",null,e.source)))}}))})))}),routes:[]},{path:"/home/detail/:id",component:Object(s.h)(function(e){var t=Object(a.useState)({content:"",cover:"",title:""}),n=Object(g.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)(function(){Object(E.a)(v.a.mark(function t(){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.match.params.id,s(n);case 2:case"end":return t.stop()}},t)}))()},[]);var s=function(e){var t;(t={newsId:e},I.get("/news/details",{params:Object(w.a)({},t)})).then(function(e){e.data&&o(e.data)})};return r.a.createElement("div",{className:"detail"},r.a.createElement("h2",null,c.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.content}}))}),routes:[]},{path:"/home/notes",component:f,routes:[]}]}]}],T=n(41),F=function(){return r.a.createElement(T.a,null,r.a.createElement(s.d,null,N.map(function(e,t){return r.a.createElement(s.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))},key:t})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=document.getElementById("root");o.a.render(r.a.createElement(F,null),S),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.19d2a1a9.chunk.js.map