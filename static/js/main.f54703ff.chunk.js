(window.webpackJsonpstoreback_landing=window.webpackJsonpstoreback_landing||[]).push([[0],{53:function(e,a,t){e.exports=t(65)},58:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),l=(t(58),t(14)),c=t(110),s=t(120),m=t(109),u=t(118),d=t(107),p=t(111),h=t(119),b=t(122),g=t(117),f=t(114),E=t(116),y=t(115),v=t(43),w=t.n(v),j=t(34),O=t(113),k=t(42),C=t(108),S="https://storeback.herokuapp.com";function N(){return o.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(d.a,{color:"inherit",href:"https://material-ui.com/"},"StoreBack")," ",(new Date).getFullYear(),".")}var x=Object(k.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#F55"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement((function(){var e=x(),a=Object(n.useState)(""),t=Object(l.a)(a,2),r=t[0],i=t[1],v=Object(n.useState)(""),k=Object(l.a)(v,2),I=k[0],P=k[1],A=Object(n.useState)(""),T=Object(l.a)(A,2),W=T[0],q=T[1],K=Object(n.useState)(""),B=Object(l.a)(K,2),F=B[0],_=B[1],J=Object(n.useState)(!1),D=Object(l.a)(J,2),Y=D[0],z=D[1],G=Object(n.useState)(!1),R=Object(l.a)(G,2),L=R[0],V=R[1],$=Object(n.useState)(!1),H=Object(l.a)($,2),M=H[0],Q=H[1],U=Object(n.useState)(""),X=Object(l.a)(U,2),Z=X[0],ee=X[1],ae=Object(n.useState)(""),te=Object(l.a)(ae,2),ne=te[0],oe=te[1];function re(){Q(!1)}return Object(n.useEffect)((function(){z(""!==r&&""!==I&&""!==F&&""!==W)})),o.a.createElement(C.a,{component:"main",maxWidth:"xs"},o.a.createElement(m.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(c.a,{className:e.avatar},o.a.createElement(w.a,null)),o.a.createElement(j.a,{component:"h1",variant:"h5"},"Get API Key"),o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){return function(e){e.preventDefault(),V(!0),Q(!1);var a={firstname:r,lastname:I,email:W,password:F},t=new Request(S+"/api/admin",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)});fetch(t).then((function(e){return e.json()})).then((function(e){var a=new Request(S+"/api/key/generate",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({admin_id:e.id})});fetch(a).then((function(e){return e.json()})).then((function(e){Q(!0),V(!1),ee(e.value),oe(e.key_code)}))})).catch((function(e){console.log(e)}))}(e)}},o.a.createElement(p.a,{container:!0,spacing:2},o.a.createElement(p.a,{item:!0,xs:12,sm:6},o.a.createElement(u.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",value:r,onChange:function(e){i(e.target.value)},autoFocus:!0})),o.a.createElement(p.a,{item:!0,xs:12,sm:6},o.a.createElement(u.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:I,onChange:function(e){P(e.target.value)}})),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(u.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:W,onChange:function(e){q(e.target.value)}})),o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement(u.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:F,onChange:function(e){_(e.target.value)}}))),o.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:!Y||L&&!M},L&&!M?o.a.createElement(O.a,{className:e.progress}):"Get API Key"))),o.a.createElement(b.a,{open:M,onClose:re,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(f.a,null,o.a.createElement(y.a,{id:"customized-dialog-title",onClose:re},"Your API Key is: ",Z),o.a.createElement(y.a,{id:"customized-dialog-title",onClose:re},"Your Key Code is: ",ne),o.a.createElement(E.a,{id:"alert-dialog-description"},"These will only be shown to you once, so make sure to write it down. Treat your API Key like a password. Include the API Key and Key Code in request headers you send to the API, as detailed here:",o.a.createElement(d.a,{href:"https://github.com/rguan72/StoreBack",target:"_blank",rel:"noopener"}," ","https://github.com/rguan72/StoreBack"," "))),o.a.createElement(g.a,null,o.a.createElement(s.a,{onClick:re,color:"primary",autoFocus:!0},"Acknowledge"))),o.a.createElement(h.a,{mt:5},o.a.createElement(N,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.f54703ff.chunk.js.map