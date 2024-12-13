(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[19],{545:function(e,a,t){"use strict";t.r(a),t.d(a,"EditProfile",(function(){return f}));var s=t(2),n=t(86),r=t(87),i=t(107),c=t(106),l=t(0),d=t(279),m=t(535),o=t(554),j=t(109),u=t(556),b=t(498),h=t(499),x=t(465),O=t(473),p=t(33),g=t(174),v=t(19),f=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",userName:"",phoneNumber:"",website:"",address:"",city:"",avatarUrl:"",loading:!0},e.handleSaveChanges=function(a){var t="updatable";d.b.loading({content:"Saving changes...",key:t}),setTimeout((function(){d.b.success({content:"Changes saved!",key:t,duration:2}),e.props.history.push("".concat(v.c,"/users/user-list"))}),2e3)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.userId;fetch("https://jsonplaceholder.typicode.com/users/".concat(a)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(a){e.setState({name:a.name,email:a.email,userName:a.username,phoneNumber:a.phone,website:a.website,address:a.address.street,city:a.address.city,loading:!1})})).catch((function(a){d.b.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),e.setState({loading:!1})}))}},{key:"getBase64",value:function(e,a){var t=new FileReader;t.addEventListener("load",(function(){return a(t.result)})),t.readAsDataURL(e)}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.name,r=a.email,i=a.userName,c=a.phoneNumber,l=a.website,v=a.address,f=a.city,y=a.avatarUrl;if(t)return Object(s.jsx)("div",{children:"Loading..."});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(g.a,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[Object(s.jsx)(m.a,{size:90,src:y,icon:Object(s.jsx)(O.a,{})}),Object(s.jsxs)("div",{className:"ml-md-3 mt-md-0 mt-3",children:[Object(s.jsx)(o.a,{onChange:function(a){var t="updatable";"uploading"!==a.file.status?"done"===a.file.status&&(e.getBase64(a.file.originFileObj,(function(a){return e.setState({avatarUrl:a})})),d.b.success({content:"Uploaded!",key:t,duration:1.5})):d.b.loading({content:"Uploading...",key:t,duration:1e3})},showUploadList:!1,children:Object(s.jsx)(j.a,{type:"primary",children:"Change Avatar"})}),Object(s.jsx)(j.a,{className:"ml-2",onClick:function(){e.setState({avatarUrl:""})},children:"Remove"})]})]}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(u.a,{name:"basicInformation",layout:"vertical",initialValues:{name:n,email:r,username:i,phoneNumber:c,website:l,address:v,city:f},onFinish:this.handleSaveChanges,onFinishFailed:function(e){console.log("Failed:",e)},children:Object(s.jsx)(b.a,{children:Object(s.jsxs)(h.a,{xs:24,sm:24,md:24,lg:16,children:[Object(s.jsxs)(b.a,{gutter:p.c,children:[Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"Website",name:"website",children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:24,children:Object(s.jsx)(u.a.Item,{label:"Address",name:"address",children:Object(s.jsx)(x.a,{})})}),Object(s.jsx)(h.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(u.a.Item,{label:"City",name:"city",children:Object(s.jsx)(x.a,{})})})]}),Object(s.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Save Changes"})]})})})})]})}}]),t}(l.Component);a.default=f}}]);
//# sourceMappingURL=19.03897548.chunk.js.map