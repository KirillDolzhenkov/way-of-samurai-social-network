(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{223:function(e,t,s){"use strict";t.a=s.p+"static/media/default_user_photo.5364f1ba.png"},224:function(e,t,s){e.exports={formControl:"FormControls_formControl__1PKUq",error:"FormControls_error__3kHja",formSummaryError:"FormControls_formSummaryError__2VRhK"}},226:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},227:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s(3),n=s(225),r=(s(0),s(224)),i=s.n(r),c=s(1),o=function(e){var t=e.input,s=e.meta,r=Object(n.a)(e,["input","meta"]),o=r.formControlValue,u=s.touched&&s.error,l=o;return Object(c.jsxs)("div",{className:u&&"".concat(i.a.formControl," ").concat(i.a.error),children:[Object(c.jsx)("div",{children:Object(c.jsx)(l,Object(a.a)(Object(a.a)({},t),r))}),u&&Object(c.jsx)("span",{children:s.error})]})}},236:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(3),n=s(225),r=(s(0),s(5)),i=s(21),c=s(1),o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(i.b)(o)((function(t){var s=t.isAuth,i=Object(n.a)(t,["isAuth"]);return s?Object(c.jsx)(e,Object(a.a)({},i)):Object(c.jsx)(r.a,{to:"/Login"})}))}},250:function(e,t,s){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},299:function(e,t,s){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},308:function(e,t,s){"use strict";s.r(t),s.d(t,"DialogsContainer",(function(){return S}));var a=s(3),n=s(23),r=s(24),i=s(27),c=s(25),o=s(0),u=s.n(o),l=s(26),m=s(21),d=s(74),j=s(105),g=s(106),b=s(250),_=s.n(b),f=s(6),O=s(1),h=function(e){var t=e.id,s=e.name;return Object(O.jsx)("div",{className:_.a.dialog+""+_.a.active,children:Object(O.jsx)(f.b,{to:"/dialogs/"+t,children:s})})},x=s(299),p=s.n(x),v=s(223),N=function(e){e.id;var t=e.message,s=e.time;return Object(O.jsxs)("div",{className:p.a.message,children:[Object(O.jsx)("img",{className:p.a.img,alt:"userPhoto",src:v.a}),Object(O.jsxs)("div",{className:p.a.content,children:[Object(O.jsx)("div",{className:p.a.name,children:"userName"}),Object(O.jsx)("div",{className:p.a.text,children:t}),Object(O.jsx)("div",{className:p.a.time,children:s})]})]})},C=s(227),M=s(226),P=function(e){var t=e.dialogsPage,s=e.addMessage,a=t.dialogs.map((function(e){return Object(O.jsx)(h,{name:e.name,id:e.id},e.id)})),n=t.messages.map((function(e){return Object(O.jsx)(N,{message:e.message,id:e.id,time:e.time},e.id)}));return Object(O.jsxs)("div",{className:_.a.dialogsPage,children:[Object(O.jsx)("div",{className:_.a.dialogs,children:a}),Object(O.jsxs)("div",{className:_.a.messages,children:[Object(O.jsx)("div",{className:_.a.messageElements,children:n}),Object(O.jsx)("hr",{}),Object(O.jsx)(D,{onSubmit:function(e){e.newMessageText&&s(e.newMessageText)}})]})]})},A=Object(M.a)(3),D=Object(g.a)({form:"profileAddPostReduxForm"})((function(e){var t=e.handleSubmit;return Object(O.jsxs)("form",{onSubmit:t,className:_.a.inputAreaElements,children:[" ",Object(O.jsx)("div",{children:Object(O.jsx)(j.a,{placeholder:"Write something",name:"newMessageText",component:C.a,formControlValue:"textarea",validate:[M.b,A]})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Send"})})]})})),E=s(236),F=function(e){return e.dialogPage},y=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsx)(P,Object(a.a)({},this.props))}}]),s}(u.a.Component),S=Object(l.d)(Object(m.b)((function(e){return{dialogsPage:F(e)}}),{addMessage:d.a}),E.a)(y)}}]);
//# sourceMappingURL=5.abad2b54.chunk.js.map