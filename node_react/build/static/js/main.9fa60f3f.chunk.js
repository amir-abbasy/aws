(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),o=n.n(s),c=(n(12),n(3)),u=n(4),i=n(5),l=n(6),d=(n(13),n(14),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getClients=function(e){a.state.member;fetch("http://localhost:5000/getusers").then((function(e){return e.json()})).then((function(e){return a.setState({users:e.data})})).catch((function(e){return console.error(e)}))},a.createNewUser=function(e){var t=a.state,n=t.username,r=t.pass;fetch("http://localhost:5000/addUser?username=".concat(n,"&pass=").concat(r)),alert("User successfully added!"),a.getClients()},a.usernameHandler=function(e){a.setState({username:e.target.value})},a.passwordHandler=function(e){a.setState({pass:e.target.value})},a.render_=function(e){var t=e.id,n=e.username,a=e.pass;return r.a.createElement("li",{key:t},n," pass =",a)},a.state={username:"",pass:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getClients()}},{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Call out to API!"),r.a.createElement("ul",null,e.map(this.render_)),r.a.createElement("input",{type:"text",onChange:this.usernameHandler}),r.a.createElement("input",{ref:"password",onChange:this.passwordHandler}),r.a.createElement("button",{onClick:this.createNewUser},"Add User"),r.a.createElement("p",null,this.state.username))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9fa60f3f.chunk.js.map