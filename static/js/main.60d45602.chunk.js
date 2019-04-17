(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"FETCH_MISE",function(){return v}),a.d(n,"FETCH_STATION",function(){return y}),a.d(n,"RESET_STATION",function(){return O}),a.d(n,"fetchMise",function(){return j}),a.d(n,"fetchStation",function(){return k}),a.d(n,"resetStation",function(){return N});var r=a(0),o=a.n(r),c=a(12),s=a.n(c),i=(a(38),a(5)),l=a(6),d=a(9),m=a(7),u=a(10),p=(a(39),a(18)),b=a.n(p),h=a(30),f=a(13),E=a(8),g=a(3),C=a(23),v="FETCH_MISE",y="FETCH_STATION",O="RESET_STATION";function j(e,t,a){encodeURI(a);var n="https://misesm.herokuapp.com/users"+"?tmx=".concat(e,"&tmy=").concat(t,"&address=").concat(a),r=C.get(n);return console.log("address",a),{type:v,payload:{promise:r,data:a},meta:a}}function k(e){var t=encodeURI(e),a="https://misesm.herokuapp.com/getStations"+"?city=".concat(t),n=C.get(a);return{type:y,payload:n}}function N(){return{type:O}}a(64);var F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1,error:"test\xdf",term:""},a.onSubmit=a.onSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"autoComplete",value:function(e,t){var a=this,n=e.sidoName,r=e.sggName,c=e.umdName;return o.a.createElement("div",{className:"searchListTable"},o.a.createElement("tr",{key:t,onClick:function(){a.props.fetchMise(e.tmX,e.tmY,r+" "+c),a.props.resetStation()}},o.a.createElement("td",{className:"searchList"},n," ",r," ",c)))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.fetchStation(this.state.term),this.setState({term:""})}},{key:"render",value:function(){var e=this;this.props.loading;return o.a.createElement("form",{className:"search-bar",onSubmit:function(t){return e.onSubmit(t)}},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{onChange:function(){var t=Object(h.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({term:a.target.value});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),type:"text",className:"form-control",placeholder:"ex) \uad00\uc545\uad6c, \ub0a8\uc591\uc8fc\uc2dc,",value:this.state.term}),o.a.createElement("button",{onClick:this.onSubmit.bind(this)},"\uac80\uc0c9"),o.a.createElement("tbody",{className:"searchListTable"},this.props.stations.map(this.autoComplete.bind(this)))))}}]),t}(r.Component);var T=Object(E.b)(function(e){return{loading:e.mise.loading,error:e.mise.error,stations:e.mise.stations}},function(e){return Object(g.b)(n,e)})(F),I=(a(65),a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).miseGradColor10=function(e){return e<16?{backgroundColor:"#0054FF"}:e<31?{backgroundColor:"#489CFF"}:e<41?{backgroundColor:"#90E4FF"}:e<51?{backgroundColor:"#00A500"}:e<76?{backgroundColor:"#FF9436"}:e<101?{backgroundColor:"#C92800"}:e<151?{backgroundColor:"#FF2424"}:{backgroundColor:"#363636"}},a.miseGradColor25=function(e){return e<9?{backgroundColor:"#0054FF"}:e<16?{backgroundColor:"#489CFF"}:e<21?{backgroundColor:"#90E4FF"}:e<26?{backgroundColor:"#00A500"}:e<38?{backgroundColor:"#FF9436"}:e<51?{backgroundColor:"#C92800"}:e<76?{backgroundColor:"#FF2424"}:{backgroundColor:"#363636"}},a.miseGradText10=function(e){return e<16?"\ucf8c\uc801":e<31?"\ub9e4\uc6b0\uc88b\uc74c":e<41?"\uc88b\uc74c":e<51?"\ubcf4\ud1b5":e<76?"\uc548\uc88b\uc74c":e<101?"\uc870\uae08\ub354 \uc548\uc88b\uc74c":e<151?"\uc544\uc8fc \uc548\uc88b\uc74c":"\uc228\ub9c9\ud600"},a.miseGradText25=function(e){return e<9?"\ucf8c\uc801":e<16?"\ub9e4\uc6b0\uc88b\uc74c":e<21?"\uc88b\uc74c":e<26?"\ubcf4\ud1b5":e<38?"\uc548\uc88b\uc74c":e<51?"\uc870\uae08\ub354 \uc548\uc88b\uc74c":e<76?"\uc544\uc8fc \uc548\uc88b\uc74c":"\uc228\ub9c9\ud600"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderMise",value:function(e,t){return console.log("renderMise",e),o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"td"},e.address),o.a.createElement("td",{style:this.miseGradColor10(e.pm10),className:"td"},this.miseGradText10(e.pm10)," ",e.pm10),o.a.createElement("td",{style:this.miseGradColor25(e.pm25),className:"td"},this.miseGradText25(e.pm25)," ",e.pm25),o.a.createElement("td",{className:"td"},e.dataTime,"/>"))}},{key:"handleError",value:function(){if(this.props.error)return o.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.props.error.message)}},{key:"render",value:function(){return o.a.createElement("div",{className:"weather-list"},this.handleError(),o.a.createElement("table",{className:"table table-hover"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"td"},o.a.createElement("th",{className:"td"},"\uc7a5\uc18c"),o.a.createElement("th",{className:"td"},"\ubbf8\uc138\uba3c\uc9c0"),o.a.createElement("th",{className:"td"},"\ucd08\ubbf8\uc138\uba3c\uc9c0 "),o.a.createElement("th",{className:"td"},"\uc608\ubcf4\uc2dc\uac04 "))),o.a.createElement("tbody",null,this.props.mise.map(this.renderMise.bind(this)))))}}]),t}(r.Component));var S=Object(E.b)(function(e){return{mise:e.mise.data,error:e.mise.error,loading:e.mise.loading,address:e.mise.address}})(I);a(23),a(16),new XMLHttpRequest,encodeURIComponent("ServiceKey");encodeURIComponent("ServiceKey"),encodeURIComponent("-"),encodeURIComponent("pageNo"),encodeURIComponent("1"),encodeURIComponent("numOfRows"),encodeURIComponent("10"),encodeURIComponent("year"),encodeURIComponent("2013"),encodeURIComponent("itemCode"),encodeURIComponent("PM10");var w=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(T,null),o.a.createElement(S,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(32),U=a(2),_=(a(16),Object(g.c)({mise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,error:"",data:[],stations:[],address:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(v,"_PENDING"):return{loading:!0,error:"bbb",data:Object(U.a)(e.data),stations:e.stations};case"".concat(v,"_FULFILLED"):var a=t.payload.data;return console.log("miseObj",t.payload),{loading:!1,error:"ccc",data:[{pm10:a.item[0].pm10Value,pm25:a.item[0].pm25Value,dataTime:a.item[0].dataTime,address:a.address}].concat(Object(U.a)(e.data)),stations:e.stations};case"".concat(v,"_REJECTED"):return{loading:!1,error:t.payload,data:Object(U.a)(e.data),stations:e.stations};case"".concat(y,"_PENDING"):return{loading:!0,error:"bbb",data:Object(U.a)(e.data),stations:Object(U.a)(e.stations)};case"".concat(y,"_FULFILLED"):console.log("action.payload.data.",t.payload);var n=t.payload.data.item,r=[];return console.log("stationObjs",n),n?r=r.concat(n):n=[],{loading:!1,error:"ccc",data:Object(U.a)(e.data),stations:Object(U.a)(r)};case"".concat(y,"_REJECTED"):return{loading:!1,error:t.payload,data:Object(U.a)(e.data),stations:Object(U.a)(e.stations)};case"".concat(O):return{loading:!1,error:t.payload,data:Object(U.a)(e.data),stations:[]};default:return e}}})),x=Object(g.a)(R.a)(g.d);s.a.render(o.a.createElement(E.a,{store:x(_)},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.60d45602.chunk.js.map