(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){e.exports=n(391)},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);n(163),n(164),n(166);var r=n(0),a=n.n(r),c=n(109),u=n.n(c),i=n(50),l=n.n(i),o=n(57),s=n(62),m=n(19),d=n(2),p=(n(190),n(191),n(75)),f=n(110),E=n.n(f),v=function(e){return new E.a({name:e,prefix:"",modifierDelimiter:"_",outputIsString:!1})},b=v("stub"),h=function(){return r.createElement("div",b(),r.createElement(p.a,Object.assign({},b("spinner"),{icon:"circle-notch",spin:!0,size:"4x"})))},g=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/maniac-academia",REACT_APP_ADMIN_USER_ID:"10640580"});if("REACT_APP_ADMIN_USER_ID"in t){var n=t.REACT_APP_ADMIN_USER_ID;return!!e&&!!n&&e.id===parseInt(n)}return!1},k=(n(192),n(158)),C=n.n(k),O=n(111),j=n.n(O),x=function(e){var t=e.bem?e.bem("header-context-menu-icon","","Icon"):{};return r.createElement("span",t,r.createElement(p.a,{icon:e.icon}))},w=v("app-header"),y=function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),a=n[0],c=n[1];return r.createElement(r.Fragment,null,r.createElement(d.PanelHeader,null,e.isAdmin?r.createElement(d.PanelHeaderContent,{aside:r.createElement(C.a,null),onClick:function(){return c(!a)}},e.children):e.children),e.isAdmin&&r.createElement(d.HeaderContext,{opened:a,onClose:function(){}},r.createElement(d.List,null,r.createElement(d.Cell,{onClick:function(){return e.go("events-feed")},asideContent:"events-feed"===e.active?r.createElement(j.a,{fill:"var(--accent)"}):null,before:r.createElement(x,{bem:w,icon:"rss"})},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.createElement(d.Cell,{onClick:function(){return e.go("events-admin")},before:r.createElement(x,{bem:w,icon:"user-cog"}),asideContent:"events-admin"===e.active?r.createElement(j.a,{fill:"var(--accent)"}):null},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"))))},A=(v("event-flow"),function(e){return r.createElement(r.Fragment,null,r.createElement(d.Panel,{id:e.id,centered:!e.user},r.createElement(y,{active:e.id,isAdmin:g(e.user),go:e.go},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),!e.user&&r.createElement(h,null),g(e.user)&&r.createElement(d.Group,null,r.createElement(d.Div,null,"Admin")),e.user&&!g(e.user)&&r.createElement(d.Group,null,r.createElement(d.Div,null,"User"))))}),I=n(17),S=n.n(I),_=n(26),P=n(159),D=n.n(P);n(112);var T=n(76),R=n.n(T),G="http://45.86.180.13:3000";function U(){return V.apply(this,arguments)}function V(){return(V=Object(_.a)(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get(G+"/events");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}v("admin-main");var N=function(e){var t=Object(r.useState)([]),n=Object(m.a)(t,2),a=n[0],c=n[1],u=function(){var e=Object(_.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,console.log("!!!",t),c(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){e.user&&!e.token&&l.a.send("VKWebAppGetAuthToken",{app_id:7062331,scope:"groups,stats"})},[e.user,e.token]),Object(r.useEffect)(function(){console.log("!!! useEffect"),u()},[]),r.createElement(d.Panel,{id:e.id},r.createElement(y,{active:e.id,isAdmin:g(e.user),go:e.go},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f-\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.createElement(d.Group,null,r.createElement(d.CellButton,{onClick:function(){return e.go("add-events-admin")},before:r.createElement(D.a,null)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435")),r.createElement(d.Group,null,r.createElement(d.Div,null,JSON.stringify(a))))},K=n(160),L=n.n(K),W=n(161),B=n.n(W),F=function(e){return r.createElement(d.Tabbar,null,r.createElement(d.TabbarItem,{onClick:function(){return e.go("events")},selected:"events"===e.active,"data-story":"events",text:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"},r.createElement(L.a,null)),r.createElement(d.TabbarItem,{onClick:function(){return e.go("user")},selected:"user"===e.active,"data-story":"users",text:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"},r.createElement(B.a,null)))},H=n(113),J="http://45.86.180.13:3000";function M(e){return z.apply(this,arguments)}function z(){return(z=Object(_.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post(J+"/events",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var $=function(e){var t=r.useState(""),n=Object(m.a)(t,2),a=n[0],c=n[1],u=r.useState(""),i=Object(m.a)(u,2),l=i[0],o=i[1],s=r.useState("17:00"),p=Object(m.a)(s,2),f=p[0],E=p[1],v=r.useState([]),b=Object(m.a)(v,2),h=b[0],k=b[1],C=function(){var t=Object(_.a)(S.a.mark(function t(){var n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:a,price:l,time:f,days:h},t.next=3,M(n);case 3:e.go("events-admin");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(_.a)(S.a.mark(function t(n){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.currentTarget.checked&&!h.includes(e)?k([].concat(Object(H.a)(h),[e])):k(Object(H.a)(h.filter(function(t){return t!==e})));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(t){switch(e){case"name":return void c(t.currentTarget.value);case"price":var n=t.currentTarget.value;return void(/^[0-9]*$/.test(n)&&(console.log("!!!!",n),o(n)));case"time":return void E(t.currentTarget.value);case"submit":return console.log("!!! submit"),void C().then(function(e){return console.log("!!!",e)}).catch(function(e){return console.log("!!!",e)})}}};return console.log("!!!",typeof l,l),r.createElement(d.Panel,{id:e.id},r.createElement(y,{active:e.id,isAdmin:g(e.user),go:e.go},"\u041d\u043e\u0432\u043e\u0435 \u0421\u043e\u0431\u044b\u0442\u0438\u0435"),r.createElement(d.FormLayout,null,r.createElement(d.Input,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:j("name")}),r.createElement(d.Input,{type:"number",value:l+"",onChange:j("price")}),r.createElement(d.Input,{type:"time",top:"\u0412\u0440\u0435\u043c\u044f",value:f,onChange:j("time")}),r.createElement(d.FormLayoutGroup,{top:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e"},r.createElement(d.Checkbox,{checked:h.includes(0),onChange:O(0)},"\u041f\u043d"),r.createElement(d.Checkbox,{checked:h.includes(1),onChange:O(1)},"\u0412\u0442"),r.createElement(d.Checkbox,{checked:h.includes(2),onChange:O(2)},"\u0421\u0440"),r.createElement(d.Checkbox,{checked:h.includes(3),onChange:O(3)},"\u0427\u0442"),r.createElement(d.Checkbox,{checked:h.includes(4),onChange:O(4)},"\u041f\u0442"),r.createElement(d.Checkbox,{checked:h.includes(5),onChange:O(5)},"\u0421\u0431"),r.createElement(d.Checkbox,{checked:h.includes(6),onChange:O(6)},"\u0412\u0441")),r.createElement(d.Button,{size:"xl",onClick:j("submit")},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.createElement(d.Cell,null,r.createElement(d.Div,null,JSON.stringify({price:l,name:a,time:f,days:h}))))},q=function(e){var t=Object(r.useState)("events-feed"),n=Object(m.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)("events"),i=Object(m.a)(u,2),o=i[0],s=i[1],p=Object(r.useState)(null),f=Object(m.a)(p,2),E=f[0],v=f[1],b=Object(r.useState)(null),h=Object(m.a)(b,2),g=h[0],k=h[1];return Object(r.useEffect)(function(){l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":v(e.detail.data);break;case"VKWebAppAccessTokenReceived":k(e.detail.data.access_token)}}),l.a.send("VKWebAppGetUserInfo",{})},[]),r.createElement(d.Epic,{activeStory:o,tabbar:r.createElement(F,{active:o,go:s})},r.createElement(d.View,{id:"events",activePanel:a},r.createElement(A,{id:"events-feed",user:E,go:c}),r.createElement(N,{id:"events-admin",token:g,user:E,go:c}),r.createElement($,{id:"add-events-admin",token:g,user:E,go:c})),r.createElement(d.View,{id:"user",activePanel:"user-main"},r.createElement(d.Panel,{id:"user-main"},r.createElement(d.PanelHeader,null,"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"))))};o.b.add(s.a,s.d,s.c,s.b),l.a.send("VKWebAppInit",{});var Q=document.getElementById("root");Q&&u.a.render(a.a.createElement(q,null),Q)}},[[162,1,2]]]);
//# sourceMappingURL=main.909b8852.chunk.js.map