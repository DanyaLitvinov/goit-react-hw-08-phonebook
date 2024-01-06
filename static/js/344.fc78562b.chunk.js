"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{3309:function(n,e,t){t.d(e,{Yb:function(){return l},__:function(){return s},l0:function(){return f},zx:function(){return p}});var r,u,o,i,a=t(168),c=t(5867),l=c.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n"]))),f=c.ZP.form(u||(u=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),s=c.ZP.label(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n  font-weight: bold;\n  position: relative;\n"]))),p=c.ZP.button(i||(i=(0,a.Z)(["\n  margin: 0 auto;\n  background-color: green;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  width: 150px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n"])))},9344:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r=t(2791),u=t(4942),o=t(1413),i=t(9439),a=t(3309),c=t(9434),l="NOT_FOUND";var f=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?f:r,o=t.maxSize,i=void 0===o?1:o,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),s=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:l},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return l}return{get:r,put:function(e,u){r(e)===l&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function p(){var e=s.get(arguments);if(e===l){if(e=n.apply(null,arguments),a){var t=s.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var o,i=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,s=void 0===f?t:f,d=Array.isArray(s)?s:[s],m=p(r),v=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=v.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),x};return u}var m,v,x=d(s),h=function(n){return n.contacts.items},y=function(n){return n.filter},g=x([h,y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),b=t(6432),w=t(184),Z=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],l=e[1],f=(0,r.useState)(!1),s=(0,i.Z)(f,2),p=s[0],d=s[1],m=(0,r.useState)("Name couldn't be empty"),v=(0,i.Z)(m,2),x=v[0],y=v[1],g=(0,r.useState)("Number couldn't be empty"),Z=(0,i.Z)(g,2),j=Z[0],C=Z[1],k=(0,r.useState)({name:"",number:""}),F=(0,i.Z)(k,2),E=F[0],S=F[1],A=(0,r.useState)(!1),D=(0,i.Z)(A,2),_=D[0],z=D[1],N=(0,c.v9)(h),I=(0,c.I0)();(0,r.useEffect)((function(){z(!x&&!j)}),[x,j]);return(0,w.jsxs)(a.l0,{onSubmit:function(n){if(n.preventDefault(),null===N||void 0===N?void 0:N.some((function(n){return n.name.toLowerCase()===E.name.toLowerCase()})))return alert("".concat(E.name," is already in contacts"));I((0,b.uK)(E)),S({name:"",number:""})},children:[(0,w.jsxs)(a.__,{children:["Name:  ",t&&x&&(0,w.jsx)("div",{style:{color:"red"},children:x}),(0,w.jsx)("input",{type:"text",name:"name",value:E.name,onChange:function(n){var e=n.target,t=e.name,r=e.value;if("name"===t){S((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,u.Z)({},t,r))})),l(!0);/^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/.test(String(n.target.value).toLowerCase())?y(""):y("Incorrect Name")}},required:!0,autoComplete:"off",placeholder:"Andrew or Andrew Galardo"})]}),(0,w.jsxs)(a.__,{children:["Number: ",p&&j&&(0,w.jsx)("div",{style:{color:"red"},children:j}),(0,w.jsx)("input",{type:"tel",name:"number",value:E.number,onChange:function(n){var e=n.target,t=e.name,r=e.value;if("number"===t){S((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,u.Z)({},t,r))})),d(!0);/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(String(n.target.value).toLowerCase())?C(""):C("Incorrect Number")}},required:!0,autoComplete:"off",placeholder:"123-456-7890"})]}),(0,w.jsx)(a.zx,{disabled:!_,type:"submit",children:"Add contact"})]})},j=t(168),C=t(5867),k=C.ZP.label(m||(m=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column; \nmargin-bottom: 8px; \nfont-weight: bold; \n"]))),F=C.ZP.input(v||(v=(0,j.Z)(["\nmargin-top: 8px;\nwidth: 300px;\npadding: 4px;\n"]))),E=t(1451),S=function(){var n=(0,c.I0)(),e=(0,c.v9)(y);return(0,w.jsxs)(k,{children:["Find contacts by name:",(0,w.jsx)(F,{type:"text",name:"filter",value:e,onChange:function(e){n((0,E.W2)(e.target.value))}})]})},A=t(297),D=function(){var n=(0,c.I0)(),e=(0,c.v9)(g);return(0,r.useEffect)((function(){n((0,b.yF)())}),[n]),(0,w.jsx)(A.aV,{children:e.map((function(e){return(0,w.jsxs)(A.ck,{children:[e.name,": ",e.number,(0,w.jsx)(A.zx,{type:"button",onClick:function(){return n((0,b.GK)(e.id))},children:"Delete"})]},e.id)}))})},_=function(){return(0,w.jsxs)(a.Yb,{children:[(0,w.jsx)(Z,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)("p",{children:"Find contacts by name"}),(0,w.jsx)(S,{}),(0,w.jsx)(D,{})]})}}}]);
//# sourceMappingURL=344.fc78562b.chunk.js.map