(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n(396)},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);n(169),n(170),n(172);var r=n(0),a=n.n(r),c=n(109),u=n.n(c),i=n(50),l=n.n(i),o=n(57),s=n(62),m=n(19),d=n(2),p=(n(192),n(193),n(75)),f=n(110),E=n.n(f),b=function(e){return new E.a({name:e,prefix:"",modifierDelimiter:"_",outputIsString:!1})},v=b("stub"),h=function(){return r.createElement("div",v(),r.createElement(p.a,Object.assign({},v("spinner"),{icon:"circle-notch",spin:!0,size:"4x"})))},g=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/maniac-academia",REACT_APP_ADMIN_USER_ID:"10640580"});if("REACT_APP_ADMIN_USER_ID"in t){var n=t.REACT_APP_ADMIN_USER_ID;return!!e&&!!n&&e.id===parseInt(n)}return!1},k=(n(194),n(163)),C=n.n(k),O=n(111),j=n.n(O),x=function(e){var t=e.bem?e.bem("header-context-menu-icon","","Icon"):{};return r.createElement("span",t,r.createElement(p.a,{icon:e.icon}))},w=b("app-header"),A=function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),a=n[0],c=n[1];return r.createElement(r.Fragment,null,r.createElement(d.PanelHeader,null,e.isAdmin?r.createElement(d.PanelHeaderContent,{aside:r.createElement(C.a,null),onClick:function(){return c(!a)}},e.children):e.children),e.isAdmin&&r.createElement(d.HeaderContext,{opened:a,onClose:function(){}},r.createElement(d.List,null,r.createElement(d.Cell,{onClick:function(){return e.go("events-feed")},asideContent:"events-feed"===e.active?r.createElement(j.a,{fill:"var(--accent)"}):null,before:r.createElement(x,{bem:w,icon:"rss"})},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.createElement(d.Cell,{onClick:function(){return e.go("events-admin")},before:r.createElement(x,{bem:w,icon:"user-cog"}),asideContent:"events-admin"===e.active?r.createElement(j.a,{fill:"var(--accent)"}):null},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"))))},y=(b("event-flow"),function(e){return r.createElement(r.Fragment,null,r.createElement(d.Panel,{id:e.id,centered:!e.user},r.createElement(A,{active:e.id,isAdmin:g(e.user),go:e.go},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),!e.user&&r.createElement(h,null),g(e.user)&&r.createElement(d.Group,null,r.createElement(d.Div,null,"Admin")),e.user&&!g(e.user)&&r.createElement(d.Group,null,r.createElement(d.Div,null,"User"))))}),I=n(17),_=n.n(I),S=n(26),P=n(164),T=n.n(P);n(112);var D=n(76),R=n.n(D),G="http://45.86.180.13:3000";function U(){return V.apply(this,arguments)}function V(){return(V=Object(S.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get(G+"/events");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var L=n(165),N=n.n(L),F=(b("admin-main"),function(e){var t=Object(r.useState)([]),n=Object(m.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(!1),i=Object(m.a)(u,2),o=i[0],s=i[1],p=function(){var e=Object(S.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){e.user&&!e.token&&l.a.send("VKWebAppGetAuthToken",{app_id:7062331,scope:"groups,stats"})},[e.user,e.token]),Object(r.useEffect)(function(){s(!0),p().then(function(){return s(!1)}).catch(console.error)},[]),r.createElement(d.Panel,{id:e.id},r.createElement(A,{active:e.id,isAdmin:g(e.user),go:e.go},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f-\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),o&&r.createElement(N.a,null),!o&&r.createElement(r.Fragment,null,r.createElement(d.Group,null,r.createElement(d.CellButton,{onClick:function(){return e.go("add-events-admin")},before:r.createElement(T.a,null)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435")),r.createElement(d.Group,null,r.createElement(d.List,null,a.map(function(e){return r.createElement(d.Cell,{key:"event-".concat(e._id),expandable:!0},r.createElement("b",null,e.name)," \u043d\u0430\u0447\u0430\u043b\u043e \u0432 ",e.time)})))))}),K=n(166),W=n.n(K),B=n(167),H=n.n(B),J=function(e){return r.createElement(d.Tabbar,null,r.createElement(d.TabbarItem,{onClick:function(){return e.go("events")},selected:"events"===e.active,"data-story":"events",text:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"},r.createElement(W.a,null)),r.createElement(d.TabbarItem,{onClick:function(){return e.go("user")},selected:"user"===e.active,"data-story":"users",text:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"},r.createElement(H.a,null)))},M=n(113),z="http://45.86.180.13:3000";function $(e){return q.apply(this,arguments)}function q(){return(q=Object(S.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post(z+"/events",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Q=function(e){var t=r.useState(""),n=Object(m.a)(t,2),a=n[0],c=n[1],u=r.useState(""),i=Object(m.a)(u,2),l=i[0],o=i[1],s=r.useState("17:00"),p=Object(m.a)(s,2),f=p[0],E=p[1],b=r.useState([]),v=Object(m.a)(b,2),h=v[0],k=v[1],C=function(){var t=Object(S.a)(_.a.mark(function t(){var n;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:a,price:l,time:f,days:h},t.next=3,$(n);case 3:e.go("events-admin");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(S.a)(_.a.mark(function t(n){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.currentTarget.checked&&!h.includes(e)?k([].concat(Object(M.a)(h),[e])):k(Object(M.a)(h.filter(function(t){return t!==e})));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(t){switch(e){case"name":return void c(t.currentTarget.value);case"price":var n=t.currentTarget.value;return void(/^[0-9]*$/.test(n)&&(console.log("!!!!",n),o(n)));case"time":return void E(t.currentTarget.value);case"submit":return void C()}}};return r.createElement(d.Panel,{id:e.id},r.createElement(A,{active:e.id,isAdmin:g(e.user),go:e.go},"\u041d\u043e\u0432\u043e\u0435 \u0421\u043e\u0431\u044b\u0442\u0438\u0435"),r.createElement(d.FormLayout,null,r.createElement(d.Input,{type:"text",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:j("name")}),r.createElement(d.Input,{type:"number",value:l+"",onChange:j("price")}),r.createElement(d.Input,{type:"time",top:"\u0412\u0440\u0435\u043c\u044f",value:f,onChange:j("time")}),r.createElement(d.FormLayoutGroup,{top:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e"},r.createElement(d.Checkbox,{checked:h.includes(0),onChange:O(0)},"\u041f\u043d"),r.createElement(d.Checkbox,{checked:h.includes(1),onChange:O(1)},"\u0412\u0442"),r.createElement(d.Checkbox,{checked:h.includes(2),onChange:O(2)},"\u0421\u0440"),r.createElement(d.Checkbox,{checked:h.includes(3),onChange:O(3)},"\u0427\u0442"),r.createElement(d.Checkbox,{checked:h.includes(4),onChange:O(4)},"\u041f\u0442"),r.createElement(d.Checkbox,{checked:h.includes(5),onChange:O(5)},"\u0421\u0431"),r.createElement(d.Checkbox,{checked:h.includes(6),onChange:O(6)},"\u0412\u0441")),r.createElement(d.Button,{size:"xl",onClick:j("submit")},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.createElement(d.Cell,null,r.createElement(d.Div,null,JSON.stringify({price:l,name:a,time:f,days:h}))))},X=function(e){var t=Object(r.useState)("events-feed"),n=Object(m.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)("events"),i=Object(m.a)(u,2),o=i[0],s=i[1],p=Object(r.useState)(null),f=Object(m.a)(p,2),E=f[0],b=f[1],v=Object(r.useState)(null),h=Object(m.a)(v,2),g=h[0],k=h[1];return Object(r.useEffect)(function(){l.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":b(e.detail.data);break;case"VKWebAppAccessTokenReceived":k(e.detail.data.access_token)}}),l.a.send("VKWebAppGetUserInfo",{})},[]),r.createElement(d.Epic,{activeStory:o,tabbar:r.createElement(J,{active:o,go:s})},r.createElement(d.View,{id:"events",activePanel:a},r.createElement(y,{id:"events-feed",user:E,go:c}),r.createElement(F,{id:"events-admin",token:g,user:E,go:c}),r.createElement(Q,{id:"add-events-admin",token:g,user:E,go:c})),r.createElement(d.View,{id:"user",activePanel:"user-main"},r.createElement(d.Panel,{id:"user-main"},r.createElement(d.PanelHeader,null,"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"))))};o.b.add(s.a,s.d,s.c,s.b),l.a.send("VKWebAppInit",{});var Y=document.getElementById("root");Y&&u.a.render(a.a.createElement(X,null),Y)}},[[168,1,2]]]);
//# sourceMappingURL=main.24833a39.chunk.js.map