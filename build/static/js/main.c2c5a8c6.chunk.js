(this.webpackJsonpmedicus=this.webpackJsonpmedicus||[]).push([[2],{13:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(11),a=(n(0),n(3)),c=n(1);function i(e){return Object(c.jsx)("div",{ref:e.ref,id:e.id,className:Object(a.b)("container-fluid",e.className),children:e.children})}function s(e){return Object(c.jsx)("div",{ref:e.ref,id:e.id,className:Object(a.b)("row",e.className),children:e.children})}function u(e){return Object(c.jsx)("div",{ref:e.ref,id:e.id,className:Object(a.b)("col",e.className),children:e.children})}function o(e){return Object(c.jsx)(s,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)(u,{className:"px-0",children:Object(c.jsx)("div",{className:"border-top"})})}))}function l(e){return Object(c.jsx)("footer",{ref:e.ref,id:e.id,className:Object(a.b)("row",e.className),children:e.children})}function d(e){return Object(c.jsx)("dl",{ref:e.ref,id:e.id,className:Object(a.b)("row",e.className),children:e.children})}function f(e){return Object(c.jsx)("dt",{ref:e.ref,id:e.id,className:Object(a.b)("col",e.className),children:e.children})}function b(e){return Object(c.jsx)("dd",{ref:e.ref,id:e.id,className:Object(a.b)("col",e.className),children:e.children})}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(12),a=n.n(r),c=n(14),i=n(8),s=n(0),u=n.n(s),o=n(13),l=n(1),d=u.a.forwardRef((function(e,t){return Object(l.jsx)("div",{ref:t,className:"md-loader p-1",children:e.isLoading&&Object(l.jsx)(o.e,{className:"p-3",children:Object(l.jsx)(o.g,{className:"justify-content-center",children:Object(l.jsx)(o.a,{className:"col-auto align-self-center",children:Object(l.jsxs)(o.g,{children:[Object(l.jsx)("div",{id:"ellipsis01",className:"md-ellipsis mx-1"}),Object(l.jsx)("div",{id:"ellipsis02",className:"md-ellipsis mx-1"}),Object(l.jsx)("div",{id:"ellipsis03",className:"md-ellipsis mx-1"})]})})})})})}));function f(e){var t=e.callback,n=void 0===t?null:t,r=Object(s.useRef)(null),u=Object(s.useState)(!1),o=Object(i.a)(u,2),f=o[0],b=o[1],h=Object(s.useState)(!1),j=Object(i.a)(h,2),m=j[0],O=j[1];return Object(s.useEffect)((function(){var e=r.current;function t(){return(t=Object(c.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f||t.forEach((function(e){e.isIntersecting?e.intersectionRatio>=.9&&!m&&(b(!0),n&&n(),b(!1),O(!0)):O(!1)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var i=new IntersectionObserver((function(e,n){return t.apply(this,arguments)}),{root:null,rootMargin:"0px",threshold:[0,1]});return i.observe(e),function(){i&&i.disconnect()}}),[n,m]),Object(l.jsx)(d,{ref:r,isLoading:f})}},23:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"m",(function(){return j})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return N})),n.d(t,"k",(function(){return y})),n.d(t,"j",(function(){return S})),n.d(t,"l",(function(){return D})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return k}));var r=n(12),a=n.n(r),c=n(14),i=n(8),s=n(15),u=n(0),o=n(33),l=n(3),d=n(13),f=n(19),b=n(1);function h(e){return e.user?e.user.isPhysician?"Dr. ".concat(e.user.firstName," ").concat(e.user.lastName):"".concat(e.user.firstName," ").concat(e.user.lastName):""}function j(e){return e.user&&e.user.username?e.user.username:""}function m(e){return e.user&&e.user.gender?e.user.gender:""}function O(e){if(e.user){var t=[];return e.user.isPhysician?(e.user.qualification&&t.push(e.user.qualification),e.user.specialization&&t.push(e.user.specialization)):(e.user.dob&&t.push(Object(o.k)(e.user.dob)),e.user.gender&&t.push(e.user.gender)),t.join(", ")}return""}function v(e){return e.user&&e.user.emailId?e.user.emailId:""}function p(e){return e.user&&e.user.phoneNumber?e.user.phoneNumber:""}function g(e){return e.value?Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.value):""}var x=["Male","Female","Other"];function N(e){var t,n=[],r=Object(s.a)(x.entries());try{for(r.s();!(t=r.n()).done;){var a=Object(i.a)(t.value,2),c=a[0],u=a[1];n.push(Object(b.jsx)("option",{value:u,children:u},c))}}catch(o){r.e(o)}finally{r.f()}return Object(b.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(l.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:n})}var y=["MBBS","MD","MS","Intern"];function S(e){var t,n=[],r=Object(s.a)(y.sort().entries());try{for(r.s();!(t=r.n()).done;){var a=Object(i.a)(t.value,2),c=a[0],u=a[1];n.push(Object(b.jsx)("option",{value:u,children:u},c))}}catch(o){r.e(o)}finally{r.f()}return Object(b.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(l.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:n})}var w=["Cardiologist","Radiologist","Psychiatrist","Anesthesiologist","Pediatrician","Neurologist","Dermatologist","Dentist","Pathologist","General Surgeon","Orthopaedic Surgeon","Urologist","Nephrologist","Oncologist","Gynaecologist"];function D(e){var t,n=[],r=Object(s.a)(w.sort().entries());try{for(r.s();!(t=r.n()).done;){var a=Object(i.a)(t.value,2),c=a[0],u=a[1];n.push(Object(b.jsx)("option",{value:u,children:u},c))}}catch(o){r.e(o)}finally{r.f()}return Object(b.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(l.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:n})}function P(e){var t=Object(l.b)("img-fluid md-pfl-pic",e.className);return e.isLoading?Object(b.jsx)(d.e,{className:t,children:Object(b.jsx)(d.g,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(f.b,{isLoading:!0})})})}):Object(b.jsx)("img",{id:e.id,alt:e.alt,className:t,src:e.src?URL.createObjectURL(e.src):""})}function k(e){var t=Object(u.useState)(!0),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(u.useState)(""),l=Object(i.a)(o,2),d=l[0],f=l[1];return Object(u.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){var n,r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),n=e.user.username,r=e.user.profilePhotoId,t.next=6,fetch("/api/users/".concat(n,"/photos/").concat(r),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 6:if((c=t.sent).ok){t.next=14;break}return t.next=10,c.json();case 10:throw i=t.sent,new Error(i.message);case 14:return t.next=16,c.blob();case 16:i=t.sent;case 17:f(i),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.error("Failed to load profile photo. ".concat(t.t0));case 23:return t.prev=23,s(!1),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[0,20,23,26]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.user,e.session]),Object(b.jsx)(P,{id:e.id,className:e.className,src:d,isLoading:r})}},3:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n(0);var r=n(23);function a(e,t){return[e,t].join(" ").trim()}function c(e,t){return Object(r.m)({user:e})===Object(r.m)({user:t})}},33:function(e,t,n){"use strict";n.d(t,"l",(function(){return b})),n.d(t,"k",(function(){return h})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return v})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"j",(function(){return x})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return y})),n.d(t,"a",(function(){return S}));var r=n(12),a=n.n(r),c=n(14),i=n(8),s=n(15),u=n(0),o=n(3),l=n(1),d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=["January","February","March","April","May","June","July","August","September","October","November","December"];function b(e){return e instanceof Date&&!isNaN(e)}function h(e){var t=new Date,n=new Date(e),r=t.getFullYear()-n.getFullYear(),a=t.getMonth()-n.getMonth(),c=t.getDate()-n.getDate();return(a<0||0===a&&c<0)&&r--,r}function j(e){if(e.date){var t=new Date(e.date),n=!!e.hour12;return t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:n})}return""}function m(e){if(e.date){var t=new Date(e.date),n=e.format?e.format:"numeric";return t.toLocaleString("en-US",{day:n})}return""}function O(e){if(e.date){var t=new Date(e.date),n=e.format?e.format:"numeric";return t.toLocaleString("en-US",{month:n})}return""}function v(e){if(e.date){var t=new Date(e.date),n=e.long?"long":"short";return t.toLocaleString("en-US",{year:"numeric",month:n,day:"numeric"})}return""}function p(e){return e.date?new Date(e.date).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}):""}function g(e){return e.date?new Date(e.date).toLocaleString("en-US",{year:"numeric",month:"2-digit"}):""}function x(e){for(var t=e.startYear,n=[],r=e.endYear;r>t;r--)n.push(Object(l.jsx)("option",{value:r,children:r},r));return Object(l.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(o.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:n})}function N(e){var t,n=e.shortForm?d:f,r=[],a=Object(s.a)(n.entries());try{for(a.s();!(t=a.n()).done;){var c=Object(i.a)(t.value,2),u=c[0],b=c[1];r.push(Object(l.jsx)("option",{value:u+1,children:b},u))}}catch(h){a.e(h)}finally{a.f()}return Object(l.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(o.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:r})}function y(e){for(var t=[],n=0;n<24;n++)for(var r=0;r<2;r++){var a=n.toString().padStart(2,"0"),c=0===r?"00":"30",i="".concat(a,":").concat(c);t.push(Object(l.jsx)("option",{value:i,children:i},i))}return Object(l.jsx)("select",{id:e.id,name:e.name,"aria-label":e.label,className:Object(o.b)("custom-select",e.className),value:e.value,onChange:e.handleChange,required:!!e.required,children:t})}function S(e){var t=Object(u.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1];function d(){return(d=Object(c.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:2!==(c=n.target.value).length&&5!==c.length||(c.length>r.length?n.target.value="".concat(n.target.value,"/"):c.length<r.length&&(n.target.value=n.target.value.slice(0,n.target.value.length-1))),s(n.target.value),e.handleChange&&e.handleChange(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsx)("input",{type:"text",id:e.id,name:e.name,"aria-label":e.label,className:Object(o.b)("form-control",e.className),value:e.value,onChange:function(e){return d.apply(this,arguments)},pattern:"\\d{2}/\\d{2}/\\d{4}",placeholder:"MM/DD/YYYY",maxLength:"10",required:Boolean(e.required)})}},44:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),s=n(24),u=(n(44),n(11)),o=n(31),l=n(4),d=n(19),f=n(1),b=Object(r.lazy)((function(){return Promise.all([n.e(31),n.e(12)]).then(n.bind(null,146))}));function h(){return Object(f.jsx)(o.a,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(d.b,{isLoading:!0}),children:Object(f.jsx)(l.d,{children:Object(f.jsx)(l.b,{path:"/",render:function(e){return Object(f.jsx)(b,Object(u.a)({},e))}})})})})}var j=n(17);var m=function(){try{var e=sessionStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("Failed to load app state from session. ".concat(t))}}(),O=void 0!==m?m:{authToken:"",username:"",firstName:"",lastName:"",isPhysician:!1,profilePhotoId:null},v=Object(j.b)({name:"session",initialState:O,reducers:{set:function(e,t){var n=e.isPhysician;return void 0!==t.payload.isPhysician&&(n=t.payload.isPhysician),Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{isPhysician:!!Boolean(JSON.parse(n))})},reset:function(e){e.authToken="",e.username="",e.firstName="",e.lastName="",e.isPhysician=!1,e.profilePhotoId=null}}}),p=v.actions,g=(p.set,p.reset,v.reducer),x=Object(j.b)({name:"profilePhoto",initialState:{filename:"",content:null},reducers:{set:function(e,t){e.filename=t.payload.filename,e.content=t.payload.content},reset:function(e){e.filename="",e.content=null}}}),N=x.actions,y=(N.set,N.reset,x.reducer),S=Object(j.a)({reducer:{session:g,profilePhoto:y}});S.subscribe((function(){!function(e){try{var t=JSON.stringify(e);sessionStorage.setItem("state",t)}catch(n){console.log("Failed to save app state within session. ".concat(n))}}(S.getState().session)}));i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{store:S,children:Object(f.jsx)(h,{})})}),document.getElementById("root"))}},[[48,3,5]]]);
//# sourceMappingURL=main.c2c5a8c6.chunk.js.map