(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(7),a=t.n(c),o=t(2),l=t(3),r=t(5),s=t(4),i=t(1),h=t.n(i),d=(t(12),t(0)),u=function(e){Object(r.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=n.call.apply(n,[this].concat(a))).state={date:new Date},e.handleClockSeconds=0,e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleClockSeconds=window.setInterval((function(){var n=new Date;e.setState({date:n}),window.console.log(n.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.clockName!==e.clockName&&window.console.log("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.handleClockSeconds)}},{key:"render",value:function(){var e=this.props.clockName,n=this.state.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:n.toLocaleTimeString()})]})}}]),t}(h.a.Component);function k(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var m=function(e){Object(r.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=n.call.apply(n,[this].concat(a))).state={clockName:k(),hasClock:!0},e.handleChangeClockName=0,e.handleClockName=function(){e.setState({clockName:k()})},e.handleClockTurnOff=function(){e.setState({hasClock:!1})},e.handleClockTurnOn=function(){e.setState({hasClock:!0})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.handleClockTurnOff),document.addEventListener("click",this.handleClockTurnOn),this.handleChangeClockName=window.setInterval(this.handleClockName,3300),this.state.hasClock||window.clearInterval(this.handleChangeClockName)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleClockTurnOff),document.removeEventListener("click",this.handleClockTurnOn),window.clearInterval(this.handleChangeClockName)}},{key:"render",value:function(){var e=this.state,n=e.clockName,t=e.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(u,{clockName:n})]})}}]),t}(h.a.Component);a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bbb67b0c.chunk.js.map