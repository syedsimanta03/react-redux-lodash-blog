(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n.n(c),u=n(6),i=n(3),o=n(28),l=n(8),p=n(9),d=n(11),f=n(10),m=n(12),h=n(5),v=n.n(h),b=n(13),y=n(29),O=n.n(y),j=n(30),E=n.n(j).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),w=function(){return function(){var e=Object(b.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),t}(a.a.Component),x=Object(u.b)(function(e,t){return{user:e.users.find(function(e){return e.id===t.userId})}})(g),N=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(x,{userId:e.userId})))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.a.Component),S=Object(u.b)(function(e){return{posts:e.posts}},{fetchPostsAndUsers:function(){return function(){var e=Object(b.a)(v.a.mark(function e(t,n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(w());case 2:O.a.chain(n().posts).map("userId").uniq().forEach(function(e){return t(k(e))}).value();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}})(N),C=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(S,null))},T=n(31),U=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(T.a)(e),[t.payload]);default:return e}}}),F=Object(i.d)(U,Object(i.a)(o.a));s.a.render(a.a.createElement(u.a,{store:F},a.a.createElement(C,null)),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.095e4c6c.chunk.js.map