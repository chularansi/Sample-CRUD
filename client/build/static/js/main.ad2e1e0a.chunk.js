(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{148:function(e,t,c){},174:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),l=c(48),i=c.n(l),r=(c(147),c(32)),o=(c(148),c(76)),j=c.n(o),s=c(190),d=c(188),b=c(187),O=c(189),u=c(7),h=function(){var e=1,t=Object(n.useState)(0),c=Object(r.a)(t,2),l=c[0],i=c[1],o=Object(n.useState)(""),h=Object(r.a)(o,2),f=h[0],x=h[1],p=Object(n.useState)(""),g=Object(r.a)(p,2),m=g[0],C=g[1],v=Object(n.useState)(""),y=Object(r.a)(v,2),S=y[0],k=y[1],w=Object(n.useState)(0),A=Object(r.a)(w,2),E=A[0],F=A[1],H=Object(n.useState)([]),N=Object(r.a)(H,2),P=N[0],R=N[1],B=Object(n.useState)(!1),D=Object(r.a)(B,2),J=D[0],M=D[1],I=Object(n.useState)(!1),L=Object(r.a)(I,2),U=L[0],q=L[1];Object(n.useEffect)((function(){G()}),[]);var z=function(){j.a.post("/create",{name:f,position:m,office:S,salary:E}).then((function(){console.log("Success"),G(),Q()}))},G=function(){j.a.get("/getEmployees").then((function(e){console.log(e),R(e.data)}))},K=function(){j.a.put("/update",{id:l,name:f,position:m,office:S,salary:E}).then((function(e){console.log(e),1===e.data.affectedRows&&(R(P.map((function(e){return e.id===l?{id:l,name:f,position:m,office:S,salary:E}:e}))),Q())}))},Q=function(){M(!1),i(0),x(""),C(""),k(""),F(0)};return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"Simple Employee Management Page"})}),Object(u.jsx)(d.a,{open:U,header:"Confirm Delete",onCancel:function(){q(!1)},onConfirm:function(){var e;e=l,j.a.delete("/delete/".concat(e)).then((function(t){console.log(t),1===t.data.affectedRows&&R(P.filter((function(t){return t.id!==e})))})),q(!1)}}),Object(u.jsxs)(b.a,{children:[Object(u.jsxs)(b.a.Field,{children:[Object(u.jsx)("label",{children:"First Name"}),Object(u.jsx)("input",{placeholder:"Name",value:f,onChange:function(e){x(e.target.value)}})]}),Object(u.jsxs)(b.a.Field,{children:[Object(u.jsx)("label",{children:"Position"}),Object(u.jsx)("input",{placeholder:"Position",value:m,onChange:function(e){C(e.target.value)}})]}),Object(u.jsxs)(b.a.Field,{children:[Object(u.jsx)("label",{children:"Office"}),Object(u.jsx)("input",{placeholder:"Office",value:S,onChange:function(e){k(e.target.value)}})]}),Object(u.jsxs)(b.a.Field,{children:[Object(u.jsx)("label",{children:"Salary"}),Object(u.jsx)("input",{placeholder:"0",value:E,onChange:function(e){F(e.target.value)}})]}),J?Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)(s.a,{style:{backgroundColor:"#229954",color:"white"},onClick:K,children:"Update Employee"}),Object(u.jsx)(s.a,{onClick:Q,children:"Cancel"})]}):Object(u.jsx)(s.a,{primary:!0,onClick:z,children:"Add Employee"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)(O.a,{celled:!0,fixed:!0,singleLine:!0,children:[Object(u.jsx)(O.a.Header,{children:Object(u.jsxs)(O.a.Row,{children:[Object(u.jsx)(O.a.HeaderCell,{textAlign:"center",children:"Name"}),Object(u.jsx)(O.a.HeaderCell,{textAlign:"center",children:"Position"}),Object(u.jsx)(O.a.HeaderCell,{textAlign:"center",children:"Office"}),Object(u.jsx)(O.a.HeaderCell,{textAlign:"center",children:"Salary"}),Object(u.jsx)(O.a.HeaderCell,{})]})}),Object(u.jsx)(O.a.Body,{children:P.map((function(t){return Object(u.jsxs)(O.a.Row,{children:[Object(u.jsx)(O.a.Cell,{children:t.name}),Object(u.jsx)(O.a.Cell,{children:t.position}),Object(u.jsx)(O.a.Cell,{children:t.office}),Object(u.jsx)(O.a.Cell,{textAlign:"right",children:t.salary}),Object(u.jsxs)(O.a.Cell,{textAlign:"center",children:[Object(u.jsx)(s.a,{primary:!0,onClick:function(){return function(e){i(e.id),x(e.name),C(e.position),k(e.office),F(e.salary),M(!0)}(t)},children:"Edit"}),Object(u.jsx)(s.a,{color:"red",onClick:function(){return e=t.id,q(!0),void i(e);var e},children:"Delete"})]})]},e++)}))})]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.ad2e1e0a.chunk.js.map