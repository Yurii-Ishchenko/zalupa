(this.webpackJsonpzalupa=this.webpackJsonpzalupa||[]).push([[0],{14:function(e,t,n){e.exports={counter:"Counter_counter__2-PJE",controls:"Counter_controls__Bc1_X",value:"Counter_value__rH2M8"}},28:function(e,t,n){e.exports={todo_list:"Todo_todo_list__1c_FG",item:"Todo_item__D1IY8"}},30:function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__1Jhce",modal:"Backdrop_modal__zaeKe"}},34:function(e,t,n){e.exports={iconButton:"IconButton_iconButton__1nsYA"}},45:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(19),a=n.n(o),l=(n(45),n(12)),i=n(21),u=n(22),s=n(25),d=n(24),j=n(28),b=n.n(j);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var f=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),p=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function v(e,t){var n=e.title,c=e.titleId,o=h(e,["title","titleId"]);return r.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,f,p)}var m=r.forwardRef(v),x=(n.p,n(40)),g=n(34),y=n.n(g),w=n(1);function C(e){var t=e.children,n=e.onClick,r=Object(x.a)(e,["children","onClick"]);return Object(w.jsx)("button",Object(l.a)(Object(l.a)({type:"button",className:y.a.iconButton,onClick:n},r),{},{children:t}))}function k(e){var t=e.text,n=e.completed,r=e.onToggleCompleted,c=e.onDeleteTodo;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",{type:"checkbox",checked:n,onChange:r}),Object(w.jsx)("p",{children:t}),Object(w.jsx)(C,{onClick:c,children:Object(w.jsx)(m,{width:"32",height:"32",fill:"white"})})]})}var _=n(6),M=n(7),E=n(36),S=n.n(E),D=Object(M.a)("todos/add",(function(e){return{payload:{id:S.a.generate(),text:e,completed:!1}}})),I=Object(M.a)("todos/delete"),B=Object(M.a)("todos/changeFilter"),T=Object(M.a)("todos/toogleCompleted"),P=function(e){return e.todos.filter},z=function(e){var t=function(e){return e.todos.items}(e),n=P(e).toLowerCase();return t.filter((function(e){return e.text.toLocaleLowerCase().includes(n)}))};function F(){var e=Object(_.c)(z),t=Object(_.b)();return Object(w.jsx)("ul",{className:b.a.todo_list,children:e.map((function(e){var n=e.id,r=e.text,c=e.completed;return Object(w.jsx)("li",{className:b.a.item,children:Object(w.jsx)(k,{text:r,completed:c,onDeleteTodo:function(){return function(e){return t(I(e))}(n)},onToggleCompleted:function(){return function(e){return t(T(e))}(n)}})},n)}))})}var N=n(39);function L(e){var t=e.onSave,n=Object(r.useState)(""),c=Object(N.a)(n,2),o=c[0],a=c[1],l=Object(_.b)();return Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(D(o)),t(),a("")},children:[Object(w.jsx)("textarea",{value:o,onChange:function(e){a(e.currentTarget.value)},style:{width:"100%"}}),Object(w.jsx)("button",{type:"submit",style:{color:"red",width:"100%"},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}var H=function(){var e=Object(_.c)((function(e){return P(e)})),t=Object(_.b)();return Object(w.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(w.jsx)("input",{type:"text",value:e,onChange:function(e){return t(B(e.target.value))}})]})},R=n(30),J=n.n(R),K=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handlebackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(w.jsx)("div",{className:J.a.backdrop,onClick:this.handlebackdropClick,children:Object(w.jsx)("div",{className:J.a.modal,children:this.props.children})})}}]),n}(r.Component);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var W=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Y=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function G(e,t){var n=e.title,c=e.titleId,o=A(e,["title","titleId"]);return r.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,W,Y)}var U=r.forwardRef(G),X=(n.p,function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return t===e.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}}))},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(w.jsxs)("div",{children:[Object(w.jsx)(C,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0443\u0434\u0443",children:Object(w.jsx)(U,{width:"40",height:"40",fill:"white"})}),e&&Object(w.jsx)(K,{onClose:this.toggleModal,children:Object(w.jsx)(L,{onSave:this.toggleModal})}),Object(w.jsx)(H,{}),Object(w.jsx)(F,{})]})}}]),n}(r.Component)),q=n(14),Q=n.n(q);function Z(e){var t=e.step,n=e.onIncrement,r=e.onDecrement;return Object(w.jsxs)("div",{className:Q.a.controls,children:[Object(w.jsxs)("button",{type:"button",onClick:n,children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(w.jsxs)("button",{type:"button",onClick:r,children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]})]})}function $(e){var t=e.value;return Object(w.jsx)("span",{className:Q.a.value,children:t})}var ee=Object(M.a)("counter/increment"),te=Object(M.a)("counter/decrement"),ne=function(e){return e.counter.value},re=function(e){return e.counter.step};function ce(){var e=Object(_.c)(ne),t=Object(_.c)(re),n=Object(_.b)();return Object(w.jsxs)("div",{className:Q.a.counter,children:[Object(w.jsx)($,{value:e}),Object(w.jsx)(Z,{step:t,onIncrement:function(){return n(ee(t))},onDecrement:function(){return n(te(t))}})]})}var oe=n(17),ae=n(3);function le(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(oe.b,{to:"/counter",children:"\u0421\u0447\u0451\u0442\u0447\u0438\u043a"})}),Object(w.jsx)("li",{children:Object(w.jsx)(oe.b,{to:"/todos",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})})]}),Object(w.jsxs)(ae.c,{children:[Object(w.jsx)(ae.a,{path:"/counter",children:Object(w.jsx)(ce,{initValue:999})}),Object(w.jsx)(ae.a,{path:"/todos",children:Object(w.jsx)(X,{})})]})]})}var ie,ue,se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))},de=n(4),je=n(37),be=n(11),Oe=Object(M.b)(10,(ie={},Object(be.a)(ie,ee,(function(e,t){return e+t.payload})),Object(be.a)(ie,te,(function(e,t){return e-t.payload})),ie)),he=Object(de.combineReducers)({value:Oe,step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e}}),fe=n(38),pe=Object(M.b)([],(ue={},Object(be.a)(ue,D,(function(e,t){var n=t.payload;return[].concat(Object(fe.a)(e),[n])})),Object(be.a)(ue,I,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(be.a)(ue,T,(function(e,t){var n=t.payload;return e.map((function(e){return n===e.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))})),ue)),ve=Object(M.b)("",Object(be.a)({},B,(function(e,t){return t.payload}))),me=Object(de.combineReducers)({items:pe,filter:ve}),xe=Object(de.combineReducers)({counter:he,todos:me}),ge=Object(de.createStore)(xe,Object(je.composeWithDevTools)());a.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(_.a,{store:ge,children:Object(w.jsx)(oe.a,{children:Object(w.jsx)(le,{})})})}),document.getElementById("root")),se()}},[[60,1,2]]]);
//# sourceMappingURL=main.6a8f000a.chunk.js.map