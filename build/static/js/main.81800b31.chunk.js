(this["webpackJsonpblog-public"]=this["webpackJsonpblog-public"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),u=(n(5),n(2)),o=(n(12),n(3)),l=n.n(o),i=n(4);function f(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gentle-refuge-60877.herokuapp.com/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function m(){return(m=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gentle-refuge-60877.herokuapp.com/v1/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(i.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return n=e.sent,e.next=5,fetch("https://gentle-refuge-60877.herokuapp.com/v1/posts/?published",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.token}});case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(i.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gentle-refuge-60877.herokuapp.com/v1/comments/?postid=".concat(encodeURIComponent(n),"&username=").concat(encodeURIComponent(t.username),"&password=").concat(encodeURIComponent(t.password)),{method:"GET",headers:{"Content-Type":"x-www-form-urlencoded",Accept:"*/*"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(i.a)(l.a.mark((function e(t,n,r){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gentle-refuge-60877.herokuapp.com/v1/comments/?postid=".concat(t),{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify({username:n.username,password:n.password,text:r})}).catch((function(e){return console.log(e)}));case 2:return c=e.sent,e.next=5,c.json().catch((function(e){return console.log(e)}));case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(t,n,r){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gentle-refuge-60877.herokuapp.com/v1/comments/".concat(t,"/?username=").concat(encodeURIComponent(n.username),"&password=").concat(encodeURIComponent(n.password)),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify({text:r,author:n.user_id})}).catch((function(e){return console.log(e)}));case 2:return c=e.sent,e.next=5,c.json().catch((function(e){return console.log(e)}));case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(i.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gentle-refuge-60877.herokuapp.com/v1/comments/".concat(encodeURIComponent(n),"/?username=").concat(encodeURIComponent(t.username),"&password=").concat(encodeURIComponent(t.password)),{method:"DELETE",headers:{"Content-Type":"x-www-form-urlencoded",Accept:"*/*"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(0);function O(e){var t=e.id,n=e.text,c=e.author,s=e.date,a=Object(r.useState)(!1),o=Object(u.a)(a,2),l=o[0],i=o[1],f=Object(r.useState)(null),d=Object(u.a)(f,2),m=d[0],p=d[1],j=Object(r.useState)(n),x=Object(u.a)(j,2),O=x[0],y=x[1],g=Object(r.useState)(!1),v=Object(u.a)(g,2),N=v[0],k=v[1],S=Object(r.useContext)(C);return Object(w.jsx)("div",{className:"".concat(N?"hidden":"flex"," container w-full p-5 pr-10 max-h-42 mb-3 grid items-center justify-center bg-red-400 rounded-full text-white"),children:Object(w.jsxs)("form",{className:"md:w-full",children:[Object(w.jsxs)("div",{className:"my-2 w-full max-h-40 flex flex-wrap items-start justify-center ",children:[Object(w.jsxs)("h1",{className:"w-full mb-2 text-white font-sans font-medium overflow-scroll text-md",children:[c.username,":"]}),l?Object(w.jsx)("textarea",{defaultValue:n,className:"w-full max-h-20 h-full overflow-scroll font-serif text-black text-justify"}):Object(w.jsx)("div",{className:"w-full max-h-42 flex flex-wrap  items-start justify-center ",children:Object(w.jsx)("p",{className:"flex md:w-96 sm:96 ml-4 max-h-16 h-full overflow-scroll font-serif text-justify",children:O})})]}),Object(w.jsxs)("div",{className:"flex md:flex-nowrap flex-wrap mt-2 w-full md:justify-between justify-center",children:[l?Object(w.jsx)("div",{className:"w-20 ml-4 max-h-16 h-full",children:" "}):Object(w.jsx)("p",{className:"flex justify-start mt-1 md:w-full  w-full font-serif text-sm text-center",children:s}),S.user_id===c._id?Object(w.jsxs)("div",{className:"flex flex-nowrap w-1/3 justify-center md:justify-end",children:[Object(w.jsx)("button",{onClick:l?function(e){var n=e.target.form[0].value;(function(e,t,n){return b.apply(this,arguments)})(t,S,n).then((function(e){y((function(e){return n}))})).catch((function(e){return p((function(e){return m}))})).finally((function(){return i((function(e){return!1}))}))}:function(){return i((function(e){return!0}))},type:"button",className:"p-1 h-7 mb-1 mx-1 flex rounded-full bg-white px-5 text-sm text-red-400",children:l?"Save":"Edit"}),Object(w.jsx)("button",{onClick:function(){(function(e,t){return h.apply(this,arguments)})(S,t).then(k(!0)).catch((function(e){return p((function(t){return e}))})).finally((function(){return i(!1)}))},type:"button",className:"p-1 h-7 flex rounded-full bg-white px-3 text-sm text-red-400",children:"Delete"})]}):null]})]})},t)}function y(e){e.adminInfo;var t=e.postid,n=e.setNewComment,c=Object(r.useState)(!1),s=Object(u.a)(c,2),a=(s[0],s[1]),o=Object(r.useContext)(C);return Object(w.jsx)("div",{className:"container w-full sm:py-3 sm:px-9 px-5 py-5 max-h-52 mb-3 md:w-5/6 flex flex-wrap items-center sm:justify-center bg-red-400 rounded-full text-white",children:Object(w.jsx)("form",{className:"flex w-full max-h-52 justify-center flex-wrap",children:Object(w.jsxs)("div",{className:"w-full max-h-52 flex flex-wrap items-center justify-center",children:[Object(w.jsx)("textarea",{className:"w-96 sm:mt-5 max-h-20 h-full overflow-scroll font-serif text-black text-justify"}),Object(w.jsxs)("div",{className:"flex sm:flex-wrap md:justify-end justify-center items-center sm:h-1/4 w-full mx-5",children:[Object(w.jsx)("button",{type:"button",onClick:function(e){var r=e.target.form[0].value;(function(e,t,n){return x.apply(this,arguments)})(t,o,r).then((function(e){n((function(e){return!1}))})).catch((function(e){console.log(e),a((function(t){return e}))}))},className:"p-1 my-2 flex rounded-full bg-white px-2 text-sm text-red-400",children:"Save"}),Object(w.jsx)("button",{type:"button",onClick:function(){n((function(e){return!1}))},className:"p-1 my-2 ml-2 flex rounded-full bg-white px-2 text-sm text-red-400",children:"Cancel"})]})]})})})}function g(e){e.id;var t=e.adminInfo,n=e.postId,c=e.title,s=e.text,a=e.date,o=Object(r.useState)(null),l=Object(u.a)(o,2),i=l[0],f=l[1],d=Object(r.useState)(!1),m=Object(u.a)(d,2),p=m[0],x=m[1],b=Object(r.useState)(!0),h=Object(u.a)(b,2),g=h[0],v=h[1],N=Object(r.useState)(!1),k=Object(u.a)(N,2),S=k[0],I=k[1],T=Object(r.useState)(!1),U=Object(u.a)(T,2),R=U[0],E=U[1],_=Object(r.useContext)(C);Object(r.useEffect)((function(){return console.log(_),R&&function(e,t){return j.apply(this,arguments)}(_,n).then((function(e){f((function(t){return e}))})).catch((function(e){console.log(e),I((function(e){return!0}))})).finally((function(){v((function(e){return!1}))})),function(){return I((function(e){return!1}))}}),[n,R,_]);return console.log(_),Object(w.jsxs)("div",{className:"dark:bg-gray-700 container mt-10 md:w-2/3 flex flex-wrap items-center justify-center bg-white",children:[Object(w.jsxs)("div",{className:"container mt-10 mb-2 flex flex-wrap justify-center items-center",children:[Object(w.jsx)("h1",{className:"w-full my-10 text-center text-red-400 font-sans font-bold text-4xl",children:c}),Object(w.jsx)("p",{className:"dark:text-gray-200 w-full font-serif text-justify",children:s}),Object(w.jsx)("p",{className:"w-full font-serif underline-red-500",children:Object(w.jsx)("mark",{className:"bg-red-400 px-2 text-sm text-white",children:a})})]}),Object(w.jsxs)("div",{className:"flex flex-wrap w-full",children:[_&&p?Object(w.jsx)(y,{postid:n,adminInfo:t,setNewComment:x}):_?Object(w.jsx)("button",{type:"button",onClick:function(){return x((function(e){return!e}))},className:"p-1 flex rounded-full bg-red-400 px-2 text-sm text-white",children:"New comment"}):null,Object(w.jsxs)("div",{className:"w-full",children:[_?Object(w.jsx)("button",{onClick:function(){return E((function(e){return!e}))},className:"p-1 mt-2 mb-5 flex rounded-full bg-red-400 px-2 text-sm text-white",children:R?"Hide comments":"See comments"}):null,R&&_?g?Object(w.jsx)("div",{className:"loader"}):S?"Failed to load comments.":i.length?i.map((function(e){var t=new Date(e.updatedAt);return Object(w.jsx)("div",{className:"flex flex-wrap w-full justify-start",children:Object(w.jsx)(O,{id:e._id,author:e.author,text:e.text,date:t.toDateString()})},e._id)})):"No comments yet.":null]})]})]})}function v(e){var t=e.setShow;return Object(w.jsx)("div",{className:"absolute sm:right-12 right-4  top-0",children:Object(w.jsx)("div",{onClick:function(){return t((function(e){return!e}))},className:"flex flex-wrap justify-center w-full",children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:h-10 sm:w-10 h-7 w-7 absolute right-1 top-8",viewBox:"0 0 20 20",fill:"currentColor",children:Object(w.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})})})}function N(e){var t=e.show,n=e.setUser,c=Object(r.useState)(null),s=Object(u.a)(c,2),a=s[0],o=s[1],l=Object(r.useContext)(C),i=function(e){(function(e){return m.apply(this,arguments)})({username:e.target.form[0].value,password:e.target.form[1].value}).then((function(e,t){t?o((function(e){return"Sign-up failed."})):e.message?o((function(t){return e.message})):o((function(t){return e}))}))};return Object(w.jsx)("div",{className:"absolute top-24 right-0 h-30 md:w-1/3 sm:w-40 w-full bg-gray-800 px-5 pb-5 z-10 font-sans text-base text-justify",style:{display:t?"fixed":"none"},children:l?Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:"text-red-400 font-bold text-center mt-4",children:l.username}),Object(w.jsxs)("button",{type:"button",onClick:function(e){n((function(e){return null}))},className:"text-red-400 w-full mb-2",children:[" ","Log-out"]})]}):Object(w.jsxs)("form",{className:"container flex flex-wrap w-full justify-center items-between",children:[Object(w.jsx)("input",{name:"username",type:"email",placeholder:"username/mail",className:"w-full my-3"}),Object(w.jsx)("input",{name:"password",type:"password",placeholder:"password",className:"w-full mb-3"}),Object(w.jsx)("p",{children:a?a.message:null}),Object(w.jsx)("button",{type:"button",onClick:function(e){return function(e){f({username:e.target.form[0].value,password:e.target.form[1].value}).then((function(t,r){r?o((function(e){return"Log-in failed"})):t.message?o((function(e){return t.message})):n((function(n){return{user_id:t.user_id,username:t.username,password:e.target.form[1].value}}))}))}(e)},className:"text-red-400 w-full mb-2",children:"Log-in"}),Object(w.jsx)("button",{type:"button",onClick:function(e){return i(e)},className:"text-red-400 w-full",children:"Sign-up"})]})},t)}var k=f({username:"migtavares6@gmail.com",password:"199ADMINpass#"}),C=c.a.createContext(null);function S(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),a=Object(u.a)(s,2),o=a[0],l=a[1],i=Object(r.useState)(!1),f=Object(u.a)(i,2),d=f[0],m=f[1],j=Object(r.useState)(k),x=Object(u.a)(j,2),b=x[0],h=(x[1],Object(r.useState)(!1)),O=Object(u.a)(h,2),y=O[0],S=O[1],I=Object(r.useState)(null),T=Object(u.a)(I,2),U=T[0],R=T[1],E=Object(r.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),_=Object(u.a)(E,2),A=_[0],D=_[1];Object(r.useEffect)((function(){(function(e){return p.apply(this,arguments)})(b).then((function(e){c((function(t){return e}))})).catch((function(e){m((function(t){return e}))})).finally((function(){l((function(e){return!1}))}))}),[b]);return Object(w.jsx)(C.Provider,{value:U,children:Object(w.jsxs)("div",{className:"".concat(A?"dark":null," w-screen h-screen  flex flex-wrap justify-center justify-items-center"),children:[Object(w.jsxs)("header",{className:"flex pl-5 items-center justify-between font-sans text-2xl font-bold text-red-400 bg-gray-800 h-24 w-full",children:["I'm a Blogger now",Object(w.jsx)(v,{setShow:S})]}),Object(w.jsx)(N,{show:y,setUser:R}),Object(w.jsxs)("div",{className:"dark:bg-gray-700 self-center w-full flex flex-wrap justify-center font-sans",children:[Object(w.jsx)("div",{className:"w-full mt-5 mx-10 mb-0 flex justify-end",children:Object(w.jsxs)("label",{className:"switch",children:[Object(w.jsx)("input",{onClick:function(){return D((function(e){return!e}))},type:"checkbox",checked:A}),Object(w.jsx)("span",{className:"slider round"})]})}),o?Object(w.jsx)("div",{className:"loader"}):d?Object(w.jsx)("p",{children:'"Failed to load posts."'}):n.map((function(e){var t=new Date(e.updatedAt);return Object(w.jsx)("div",{className:"flex flex-wrap w-4/5 justify-center",children:Object(w.jsx)(g,{postId:e._id,adminInfo:b,title:e.title,text:e.text,date:t.toDateString()})},e._id)}))]})]})})}a.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(S,{})}),document.getElementById("root"))},5:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.81800b31.chunk.js.map