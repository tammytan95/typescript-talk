!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2),c=n(3);o.render(r.createElement(c.App,{App:!0}),document.getElementById("example"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(4),c=n(5);class u extends r.Component{render(){return r.createElement("div",null,r.createElement("div",null,r.createElement(o.Header,{compiler:"TypeScript",framework:"React",name1:"Tammy",name2:"Kenny"}),r.createElement(c.MainBody,{incrementor:1})))}}t.App=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{render(){return r.createElement("div",null,r.createElement("h1",null,"Hello from ",this.props.compiler," and ",this.props.framework,"!"),r.createElement("h2",null,this.props.name1," and ",this.props.name2,"'s Typescript"))}}t.Header=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(6);class c extends r.Component{constructor(e,t){super(e,t),this.state={counter:0},this.increment=this.increment.bind(this)}componentDidMount(){console.log("You mounted Mainbody component!")}componentDidUpdate(){console.log("You updated state!")}increment(){this.setState({counter:this.state.counter+1})}render(){return r.createElement("div",null,r.createElement(o.Counter,{counter:this.state.counter}),r.createElement("button",{onClick:this.increment},"Click me to increment!"))}}t.MainBody=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{render(){return r.createElement("div",null,r.createElement("p",null,this.props.counter))}}t.Counter=o}]);
//# sourceMappingURL=main.js.map