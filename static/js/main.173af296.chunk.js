(this.webpackJsonpregistro=this.webpackJsonpregistro||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(27),r=n.n(s),i=n(16),o=n(8),l=n(4),j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Admin"})})},b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Inicio"})})},d=n(17),u=n(29),m=(n(37),u.a.initializeApp({apiKey:"AIzaSyAGyP5t0QckBo_RHtrrgqIH6PfuVbgxH-I",authDomain:"registro-ee1a9.firebaseapp.com",projectId:"registro-ee1a9",storageBucket:"registro-ee1a9.appspot.com",messagingSenderId:"1069909904709",appId:"1:1069909904709:web:de211878c59e8f8949422c",measurementId:"G-BNK8GQE1PG"}).auth()),h=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(d.a)(s,2),i=r[0],o=r[1],j=Object(a.useState)(null),b=Object(d.a)(j,2),u=b[0],h=b[1];return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col"}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.createUserWithEmailAndPassword(n,i).then((function(e){return alert("Usuario registrado")})).catch((function(e){"auth/invalid-email"==e.code&&h("Formato email incorrecto"),"auth/weak-password"==e.code&&h("La contrase\xf1a debe tener al menos 6 caracteres")}))},className:"form-group",children:[Object(l.jsx)("input",{onChange:function(e){return c(e.target.value)},className:"form-control",placeholder:"Ingresa tu email",type:"email"}),Object(l.jsx)("input",{onChange:function(e){return o(e.target.value)},className:"form-control mt-1",placeholder:"Contrase\xf1a",type:"password"}),Object(l.jsx)("input",{className:"btn btn-dark btn-block mt-3",value:"Registrar Usuario",type:"submit"})]}),Object(l.jsx)("button",{onClick:function(){m.signInWithEmailAndPassword(n,i).then((function(e){return console.log(e)})).catch((function(e){"auth/wrong-password"==e.code&&h("Contrase\xf1a incorrecta")}))},className:"btn btn-success btn-block",children:"Iniciar Sesion"}),null!=u?Object(l.jsx)("div",{children:u}):Object(l.jsx)("span",{})]}),Object(l.jsx)("div",{className:"col"})]})},O=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){e&&(c(e.email),console.log(e.email))}))}),[]);return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/",children:"Inicio"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/admin",children:"Admin"})})]}),n?Object(l.jsx)("button",{onClick:function(){m.signOut(),c(null)},className:"btn btn-danger",children:"Cerrar Sesion"}):Object(l.jsx)("span",{})]})})};var x=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Texto"}),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(O,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(o.a,{path:"/admin",component:j}),Object(l.jsx)(o.a,{path:"/login",component:h})]})]})]})};n(42);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.173af296.chunk.js.map