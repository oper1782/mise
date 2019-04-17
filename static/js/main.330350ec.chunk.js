(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"FETCH_MISE",function(){return y}),a.d(n,"FETCH_STATION",function(){return g}),a.d(n,"RESET_STATION",function(){return j}),a.d(n,"fetchMise",function(){return C}),a.d(n,"fetchStation",function(){return I}),a.d(n,"resetStation",function(){return S});var r=a(0),o=a.n(r),c=a(12),s=a.n(c),i=(a(38),a(5)),l=a(6),d=a(9),u=a(7),m=a(10),p=(a(39),a(18)),b=a.n(p),h=a(30),E=a(13),f=a(8),v=a(3),O=a(23),y="FETCH_MISE",g="FETCH_STATION",j="RESET_STATION";function C(e,t,a){encodeURI(a);var n="https://misesm.herokuapp.com/users"+"?tmx=".concat(e,"&tmy=").concat(t,"&address=").concat(a),r=O.get(n);return console.log("address",a),{type:y,payload:{promise:r,data:a},meta:a}}function I(e){var t=encodeURI(e),a="https://misesm.herokuapp.com/getStations"+"?city=".concat(t),n=O.get(a);return{type:g,payload:n}}function S(){return{type:j}}var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,error:"test\xdf",term:""},a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"autoComplete",value:function(e,t){var a=this,n=e.sidoName,r=e.sggName,c=e.umdName;return o.a.createElement("tr",{key:t,onClick:function(){a.props.fetchMise(e.tmX,e.tmY,n+r+c),a.props.resetStation()}},o.a.createElement("td",null,n),o.a.createElement("td",null," ",r),o.a.createElement("td",null," ",c))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.fetchStation(this.state.term),this.setState({term:""})}},{key:"render",value:function(){var e=this;this.props.loading;return o.a.createElement("form",{className:"search-bar",onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{onChange:function(){var t=Object(h.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({term:a.target.value});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),type:"text",className:"form-control",placeholder:"City",value:this.state.term}),o.a.createElement("button",{onClick:this.onSubmit.bind(this)},"\uac80\uc0c9"),o.a.createElement("tbody",null,this.props.stations.map(this.autoComplete.bind(this)))))}}]),t}(r.Component);var T=Object(f.b)(function(e){return{loading:e.mise.loading,error:e.mise.error,stations:e.mise.stations}},function(e){return Object(v.b)(n,e)})(N),R=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderMise",value:function(e,t){return console.log("renderMise",e),o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.address),o.a.createElement("td",null,e.pm10),o.a.createElement("td",null,e.pm25),o.a.createElement("td",null,e.dataTime,"/>"))}},{key:"handleError",value:function(){if(this.props.error)return o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.props.error.message)}},{key:"render",value:function(){return o.a.createElement("div",{className:"weather-list"},this.handleError(),o.a.createElement("table",{className:"table table-hover"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"City"),o.a.createElement("th",null,"pm10(\ubbf8\uc138\uba3c\uc9c0)"),o.a.createElement("th",null,"pm2.5(\ucd08\ubbf8\uc138\uba3c\uc9c0) "),o.a.createElement("th",null,"DataTime "))),o.a.createElement("tbody",null,this.props.mise.map(this.renderMise))))}}]),t}(r.Component));var k=Object(f.b)(function(e){return{mise:e.mise.data,error:e.mise.error,loading:e.mise.loading,address:e.mise.address}})(R);a(23),a(16),new XMLHttpRequest,encodeURIComponent("ServiceKey");encodeURIComponent("ServiceKey"),encodeURIComponent("-"),encodeURIComponent("pageNo"),encodeURIComponent("1"),encodeURIComponent("numOfRows"),encodeURIComponent("10"),encodeURIComponent("year"),encodeURIComponent("2013"),encodeURIComponent("itemCode"),encodeURIComponent("PM10");var w=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(T,null),o.a.createElement(k,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(32),_=a(2),M=(a(16),Object(v.c)({mise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,error:"",data:[],stations:[],address:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(y,"_PENDING"):return{loading:!0,error:"bbb",data:Object(_.a)(e.data),stations:e.stations};case"".concat(y,"_FULFILLED"):var a=t.payload.data;return console.log("miseObj",t.payload),{loading:!1,error:"ccc",data:[{pm10:a.item[0].pm10Value,pm25:a.item[0].pm25Value,dataTime:a.item[0].dataTime,address:a.address}].concat(Object(_.a)(e.data)),stations:e.stations};case"".concat(y,"_REJECTED"):return{loading:!1,error:t.payload,data:Object(_.a)(e.data),stations:e.stations};case"".concat(g,"_PENDING"):return{loading:!0,error:"bbb",data:Object(_.a)(e.data),stations:Object(_.a)(e.stations)};case"".concat(g,"_FULFILLED"):console.log("action.payload.data.",t.payload);var n=t.payload.data.item,r=[];return console.log("stationObjs",n),n?r=r.concat(n):n=[],{loading:!1,error:"ccc",data:Object(_.a)(e.data),stations:Object(_.a)(r)};case"".concat(g,"_REJECTED"):return{loading:!1,error:t.payload,data:Object(_.a)(e.data),stations:Object(_.a)(e.stations)};case"".concat(j):return{loading:!1,error:t.payload,data:Object(_.a)(e.data),stations:[]};default:return e}}})),D=Object(v.a)(U.a)(v.d);s.a.render(o.a.createElement(f.a,{store:D(M)},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.330350ec.chunk.js.map