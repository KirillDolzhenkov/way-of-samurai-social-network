(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},17:function(e,t,n){e.exports={items:"Users_items__-cuhe",selectedPage:"Users_selectedPage__22OUq",profile:"Users_profile__2q_da",info:"Users_info__2hM-q",name:"Users_name__3uZmM",buttonsArea:"Users_buttonsArea__3uP-7"}},18:function(e,t,n){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},20:function(e,t,n){e.exports={header:"Header_header__1pKV4",logoArea:"Header_logoArea__3SqBW",loginBlock:"Header_loginBlock__2NGhc",items:"Header_items__2DQpk"}},22:function(e,t,n){e.exports={post:"Post_post__L3g4m",items:"Post_items__TiuHf",postMessage:"Post_postMessage__2R7XL",reactions:"Post_reactions__3uWF0"}},25:function(e,t,n){e.exports={main:"Preloader_main__BgsaX"}},26:function(e,t,n){e.exports={postBlock:"ContentArea_postBlock__2Fp-K",posts:"ContentArea_posts__3qIIz",inputAreaElements:"ContentArea_inputAreaElements__ijd0W"}},41:function(e,t,n){},42:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1o5hr"}},52:function(e,t,n){},53:function(e,t,n){},6:function(e,t,n){e.exports={navbar:"Navbar_navbar__27a1U",item:"Navbar_item__2Sz7A",active:"Navbar_active__3wMdQ"}},75:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(5),r=n(24),c=n.n(r),o=n(3),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},u=(n(52),n(4)),j=(n(53),n(2)),d=n(12),b=n(13),O=n(15),g=n(14),f=n(40),h=n.n(f).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),p=function(e,t){return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return h.post("follow/".concat(e))},x=function(e){return h.delete("follow/".concat(e))},v=function(e){return h.get("profile/".concat(e))},_=function(){return h.get("auth/me")},S={id:null,email:null,login:null,isAuth:!1},N=function(e){return{type:"SN/SET_AUTH_USER_DATA",data:e}},P=n(20),E=n.n(P),T=n.p+"static/media/logo_part_1.230df42a.png",w=n.p+"static/media/logo_part_2.7aafc755.png",C=n(0),L=function(e){return Object(C.jsxs)("div",{className:E.a.header,children:[Object(C.jsxs)(o.b,{to:"/news",className:E.a.logoArea,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:T,alt:"logoName1"})}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:w,alt:"logoName2"})})]}),Object(C.jsx)("div",{className:E.a.loginBlock,children:e.isAuth?Object(C.jsxs)("div",{className:E.a.items,children:[Object(C.jsx)("div",{}),Object(C.jsxs)("div",{children:[e.login," "]}),Object(C.jsx)(o.b,{to:"/login",children:"Logout"})]}):Object(C.jsxs)("div",{className:E.a.items,children:[Object(C.jsx)(o.b,{to:"/login",children:"Login "}),Object(C.jsx)(o.b,{to:"/login",children:"Signup "})]})})]})},k=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(L,Object(j.a)({},this.props))})}}]),n}(a.a.Component),U=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){_().then((function(t){if(0===t.data.resultCode){var n=t.data.data;e(N(n))}}))}},setAuthUserData:N})(k),y=n(11),A=n(44),I=function(e){return{isAuth:e.auth.isAuth}};var M=n(16),R={posts:[{id:21313,message:"testPost",likesCount:1,isLiked:!1}],newPostText:"",profile:null},F=n(41),D=n.n(F),G=n.p+"static/media/defaultSmallUserPhoto.8101612b.png";function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H=s.createElement("circle",{cx:15,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),z=s.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},s.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),K=s.createElement("circle",{cx:105,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function q(e,t){var n=e.title,a=e.titleId,i=B(e,["title","titleId"]);return s.createElement("svg",W({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},i),n?s.createElement("title",{id:a},n):null,H,z,K)}var X=s.forwardRef(q),J=(n.p,function(e){return Object(C.jsx)("div",{children:Object(C.jsx)(X,{fill:"#2b3f4f",stroke:"current"})})}),V=n(42),Q=n.n(V),Y=n(25),Z=n.n(Y),$=function(e){var t=e.profile;return t?Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:Q.a.descriptionBlock,children:[Object(C.jsx)("img",{src:null!==t.photos.large?t.photos.large:G}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:Object(C.jsx)("b",{children:t.fullName})}),Object(C.jsx)("div",{children:t.aboutMe})]})]})}):Object(C.jsx)("div",{className:Z.a.main,children:Object(C.jsx)(J,{})})},ee=n(26),te=n.n(ee),ne=n(22),se=n.n(ne),ae=Object(i.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,n))},removeLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,n))}}}))((function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:se.a.post,children:[Object(C.jsxs)("div",{className:se.a.items,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:G,alt:"defaultSmallUserPhoto"})}),Object(C.jsxs)("div",{className:se.a.postMessage,children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)("b",{children:["UserName"," "]})," "]}),Object(C.jsx)("div",{children:Object(C.jsx)("div",{children:e.message})})]})]}),Object(C.jsxs)("div",{className:se.a.reactions,children:[Object(C.jsx)("div",{children:e.isLiked?Object(C.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(C.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(C.jsxs)("div",{children:[" ",Object(C.jsx)("button",{children:" Write comment"})," "]}),Object(C.jsxs)("div",{children:[" ",Object(C.jsx)("button",{children:" Share"})," "]})]})]})]})})),ie=Object(i.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPost:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,n=t.posts.map((function(e){return Object(C.jsx)(ae,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})),s=function(){t.newPostText&&e.addPost(t.newPostText)};return Object(C.jsxs)("div",{className:te.a.postBlock,children:[Object(C.jsxs)("div",{className:te.a.inputAreaElements,children:[Object(C.jsx)("div",{children:Object(C.jsx)("textarea",{value:t.newPostText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewPostText(s)},placeholder:"What's new?",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())}})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:s,children:"Post"})})]}),Object(C.jsx)("div",{className:te.a.posts,children:n})]})})),re=function(e){return Object(C.jsxs)("div",{className:D.a.profile,children:[Object(C.jsx)($,{profile:e.profile}),Object(C.jsx)(ie,{})]})},ce=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="2"),this.props.getUserProfile(+e)}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(re,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile}))})}}]),n}(a.a.Component),oe=Object(y.c)(Object(i.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){v(e).then((function(e){t({type:"SN/PROFILE/SET_PROFILE",profile:e.data})}))}}}),u.f,(function(e){return Object(i.b)(I)((function(t){var n=t.isAuth,s=Object(A.a)(t,["isAuth"]);return n?Object(C.jsx)(e,Object(j.a)({},s)):Object(C.jsx)(u.a,{to:"/Login"})}))}))(ce),le=function(e){return Object(C.jsx)("div",{children:"Music Page's Content"})},ue={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},je=function(e){return{type:"SN/USERS/SET_USERS",users:e}},de=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},be=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},Oe=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},ge=n(17),fe=n.n(ge),he=function(e){for(var t=e.usersPage,n=Math.ceil(t.totalUsersCount/t.pageSize),s=[],a=1;a<=n;a++)s.push(a);return Object(C.jsxs)("div",{className:fe.a.items,children:[t.users.map((function(t){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:fe.a.profile,children:[Object(C.jsx)(o.b,{to:"/profile/"+t.id,children:Object(C.jsx)("img",{src:null!==t.photos.small?t.photos.small:G,alt:"defaultSmallUserPhoto"})}),Object(C.jsx)("div",{className:fe.a.info,children:Object(C.jsx)(o.b,{to:"/profile/"+t.id,children:Object(C.jsx)("div",{className:fe.a.name,children:t.name})})})]}),Object(C.jsxs)("div",{className:fe.a.buttonsArea,children:[Object(C.jsx)("div",{children:t.followed?Object(C.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollowThunkCreator(t.id)},children:"unfollow"}):Object(C.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:"follow"})}),Object(C.jsx)("div",{children:Object(C.jsxs)(o.b,{to:"/dialogs/"+t.id,children:[" ",Object(C.jsx)("button",{children:"Write message"})]})})]}),Object(C.jsx)("hr",{})]},t.id)})),Object(C.jsx)("div",{children:s.map((function(n){return Object(C.jsx)("span",{className:n===t.currentPage?fe.a.selectedPage:"",onClick:function(){return e.onPageChanged(n)},children:n})}))})]})},pe=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),p(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:this.props.isFetching?Object(C.jsx)("div",{className:Z.a.main,children:Object(C.jsx)(J,{})}):Object(C.jsx)(he,Object(j.a)(Object(j.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})}}]),n}(a.a.Component),me=Object(y.c)(Object(i.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setUsers:je,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:de,setIsFetching:be,getUsersThunkCreator:function(e,t){return function(n){n(be(!0)),p(e,t).then((function(e){n(be(!1)),n(je(e.items)),n(de(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(Oe(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/UNFOLLOW",id:e}),t(Oe(!1,e))}))}},followThunkCreator:function(e){return function(t){t(Oe(!0,e)),m(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/FOLLOW",id:e}),t(Oe(!1,e))}))}}}))(pe),xe=function(e){return Object(C.jsx)("div",{children:"News Page's Content"})},ve=n(6),_e=n.n(ve),Se=function(e){return Object(C.jsxs)("div",{className:_e.a.navbar,children:[Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/Profile",activeClassName:_e.a.active,children:"My profile"})}),Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/News",activeClassName:_e.a.active,children:"News"})}),Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/Dialogs",activeClassName:_e.a.active,children:"Messages"})}),Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/Users",activeClassName:_e.a.active,children:"Users"})}),Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/Music",activeClassName:_e.a.active,children:"Music"})}),Object(C.jsx)("div",{className:_e.a.item,children:Object(C.jsx)(o.b,{to:"/Settings",activeClassName:_e.a.active,children:"Settings"})})]})},Ne=function(e){return Object(C.jsx)("div",{children:"LoginPage"})},Pe=function(e){return Object(C.jsx)("div",{children:"Settings Page's Content"})},Ee={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},Te=n(10),we=n.n(Te),Ce=function(e){return Object(C.jsx)("div",{className:we.a.dialog+""+we.a.active,children:Object(C.jsx)(o.b,{to:"/dialogs/"+e.id,children:e.name})})},Le=n(18),ke=n.n(Le),Ue=function(e){return Object(C.jsx)("div",{className:we.a.text,children:Object(C.jsxs)("div",{className:ke.a.message,children:[Object(C.jsx)("img",{className:ke.a.img,alt:"userPhoto",src:G}),Object(C.jsxs)("div",{className:ke.a.content,children:[Object(C.jsx)("div",{className:ke.a.name,children:"userName"}),Object(C.jsx)("div",{className:ke.a.text,children:e.message}),Object(C.jsx)("div",{className:ke.a.time,children:"time"})]})]})})},ye=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(C.jsx)(Ce,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(C.jsx)(Ue,{message:e.message,id:e.id},e.id)})),a=function(){t.newMessageText&&e.addMessage(t.newMessageText.trim())};return e.isAuth?Object(C.jsxs)("div",{className:we.a.dialogsPage,children:[Object(C.jsx)("div",{className:we.a.dialogs,children:n}),Object(C.jsxs)("div",{className:we.a.messages,children:[Object(C.jsx)("div",{className:we.a.messageElements,children:s}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:we.a.inputAreaElements,children:[Object(C.jsx)("div",{children:Object(C.jsx)("textarea",{value:t.newMessageText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewMessageText(s)},placeholder:"Write something",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a())}})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:a,children:"Send"})})]})]})]}):Object(C.jsx)(u.a,{to:"/Login"})},Ae=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsx)(ye,Object(j.a)({},this.props))}}]),n}(a.a.Component),Ie=Object(y.c)(Object(i.b)((function(e){return{dialogsPage:e.dialogPage,isAuth:e.auth.isAuth}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}},setNewMessageText:function(e){return{type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newText:e}}}))(Ae),Me=function(e){return Object(C.jsxs)("div",{className:"app-wrapper",children:[Object(C.jsx)(U,{}),Object(C.jsx)(Se,{}),Object(C.jsxs)("div",{className:"app-wrapper-content",children:[Object(C.jsx)(u.b,{path:"/Profile/:userId?",render:function(){return Object(C.jsx)(oe,{})}}),Object(C.jsx)(u.b,{path:"/News",render:function(){return Object(C.jsx)(xe,{})}}),Object(C.jsx)(u.b,{path:"/Dialogs",render:function(){return Object(C.jsx)(Ie,{})}}),Object(C.jsx)(u.b,{path:"/Users",render:function(){return Object(C.jsx)(me,{})}}),Object(C.jsx)(u.b,{path:"/Music",render:function(){return Object(C.jsx)(le,{})}}),Object(C.jsx)(u.b,{path:"/Settings",render:function(){return Object(C.jsx)(Pe,{})}}),Object(C.jsx)(u.b,{path:"/Login",render:function(){return Object(C.jsx)(Ne,{})}})]})]})},Re=n(43),Fe=Object(y.b)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var n=Object(j.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:n.newMessageText};return n.messages=[].concat(Object(M.a)(e.messages),[s]),n.newMessageText="",n}if("SN/DIALOGS/SET_NEW_MESSAGE_TEXT"===t.type){var a=Object(j.a)({},e);return a.newMessageText=t.newText,a}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n=Object(j.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:e.newPostText,likesCount:0,isLiked:!1};return n.posts=[s].concat(Object(M.a)(e.posts)),n.newPostText="",n;case"SN/PROFILE/SET_NEW_POST_TEXT":var a=Object(j.a)({},e);return a.newPostText=t.newText,a;case"SN/PROFILE/ADD_LIKE":var i=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var r=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return r;case"SN/PROFILE/SET_PROFILE":return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:Object(M.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(M.a)(e.followingInProgress),[t.id]):Object(M.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SET_AUTH_USER_DATA":return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),De=Object(y.d)(Fe,Object(y.a)(Re.a));window.__store__=De;var Ge=function(e){c.a.render(Object(C.jsx)(o.a,{children:Object(C.jsx)(i.a,{store:De,children:Object(C.jsx)(Me,{})})}),document.getElementById("root"))};Ge(De.getState()),De.subscribe((function(){Ge(De.getState())})),l()}},[[75,1,2]]]);
//# sourceMappingURL=main.ed172247.chunk.js.map