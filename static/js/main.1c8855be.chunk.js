(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(34)},29:function(t,e,n){t.exports=n.p+"static/media/data.fb175d19.csv"},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),l=n(7),s=n(8),o=n(10),u=n(9),d=n(11),h=n(6),p=n(14),g=n(2),v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={yearIndex:0,moneyIndex:0,typeIndex:0},n.svgH=500,n.svgW=500,n.paddingY=30,n.isInitDraw=!1,n.rectW=20,n.rectIntervalW=null,n.paddingX=30,n.svgSelect=null,n.rectGroup=null,n.YScale=null,n.XScale=null,n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.isInitDraw&&this.draw(),console.log("update")}},{key:"initDraw",value:function(t){this.rectIntervalW=(this.svgW-2*this.paddingX)/t.length,this.svgSelect=g.f(".test").attr("width",this.svgW).attr("height",this.svgH),this.rectGroup=this.svgSelect.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.paddingY,")")),this.YScale=g.e().domain([0,.5]).range([this.svgH-2*this.paddingY,0]);var e=g.b(this.YScale);this.svgSelect.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.paddingY,")")).call(e);this.XScale=g.d().domain(this.props.type).range([0,this.svgW-2*this.paddingX]);var n=g.a(this.XScale);this.svgSelect.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.svgH-this.paddingY,")")).call(n);this.isInitDraw=!0}},{key:"draw",value:function(){var t=this,e=this.props.originalData,n=e[this.state.yearIndex][this.state.moneyIndex].reduce(function(t,e){return t+e}),a=e[this.state.yearIndex][this.state.moneyIndex].map(function(t){return t/n});!1===this.isInitDraw&&(this.initDraw(a),console.log(a));var r=this.rectGroup.selectAll("rect").data(a),i=r.enter();r.attr("height",function(e){return t.svgH-2*t.paddingY-t.YScale(e)}).attr("y",function(e){return t.YScale(e)}),i.append("rect").attr("width",this.rectW).attr("height",function(e){return t.svgH-2*t.paddingY-t.YScale(e)}).attr("x",function(e,n){return(n+.5)*t.rectIntervalW-.5*t.rectW}).attr("y",function(e){return t.YScale(e)});var c=this.rectGroup.selectAll("text").data(a),l=c.enter();c.attr("y",function(e){return t.YScale(e)-10}).text(function(t){return"".concat(parseInt(100*t),"%")}),l.append("text").text(function(t){return"".concat(parseInt(100*t),"%")}).attr("x",function(e,n){return(n+.5)*t.rectIntervalW}).attr("y",function(e){return t.YScale(e)-10}).attr("text-anchor","middle")}},{key:"render",value:function(){var t=this;return 0!==this.props.originalData.length?r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("span",null,"\u5e74\u5ea6",r.a.createElement("select",{name:"",id:"",onChange:function(e){return t.setState({yearIndex:e.target.value})}},this.props.year.map(function(t,e){return r.a.createElement("option",{key:t,value:e},t)}))),r.a.createElement("span",null,"\u5e74\u6536\u5165",r.a.createElement("select",{name:"",id:"",onChange:function(e){return t.setState({moneyIndex:e.target.value})}},this.props.money.map(function(t,e){return r.a.createElement("option",{key:t,value:e},t)})))),r.a.createElement("svg",{style:{position:"relative",left:100},className:"test"})):r.a.createElement("div",null,"Loading")}}]),e}(a.Component),m=(a.Component,function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={yearIndex:0,moneyIndex:0,typeIndex:0},n.svgH=500,n.svgW=500,n.paddingY=30,n.isInitDraw=!1,n.rectW=20,n.rectIntervalW=null,n.paddingX=30,n.select=null,n.selectGroup=null,n.YScale=null,n.XScale=null,n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.isInitDraw&&this.draw(),console.log("update")}},{key:"initDraw",value:function(t){this.rectIntervalW=(this.svgW-2*this.paddingX)/t.length,this.select=g.f(".test").attr("width",this.svgW).attr("height",this.svgH),this.selectGroup=this.select.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.paddingY,")")),this.YScale=g.e().domain([0,.5]).range([this.svgH-2*this.paddingY,0]);var e=g.b(this.YScale);this.select.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.paddingY,")")).call(e);this.XScale=g.d().domain(this.props.money).range([0,this.svgW-2*this.paddingX]);var n=g.a(this.XScale);this.select.append("g").attr("transform","translate(".concat(this.paddingX,",").concat(this.svgH-this.paddingY,")")).call(n);this.isInitDraw=!0}},{key:"draw",value:function(){var t=this,e=this.props.originalData,n=null;!function(){for(var a=[],r=function(n){var r=e[t.state.yearIndex][n][t.state.typeIndex];a[n]=r/function(){for(var a=0,r=0;r<e[t.state.yearIndex][n].length;r++)a+=e[t.state.yearIndex][n][r];return a}()},i=0;i<e[t.state.yearIndex].length;i++)r(i);n=[].concat(a)}(),this.isInitDraw||this.initDraw(n);var a=this.selectGroup.selectAll("rect").data(n),r=a.enter();a.attr("height",function(e){return t.svgH-2*t.paddingY-t.YScale(e)}).attr("y",function(e){return t.YScale(e)}),r.append("rect").attr("width",this.rectW).attr("height",function(e){return t.svgH-2*t.paddingY-t.YScale(e)}).attr("x",function(e,n){return(n+.5)*t.rectIntervalW-.5*t.rectW}).attr("y",function(e){return t.YScale(e)});var i=this.selectGroup.selectAll("text").data(n),c=i.enter();i.attr("y",function(e){return t.YScale(e)-10}).text(function(t){return"".concat(parseInt(100*t),"%")}),c.append("text").text(function(t){return"".concat(parseInt(100*t),"%")}).attr("x",function(e,n){return(n+.5)*t.rectIntervalW}).attr("y",function(e){return t.YScale(e)-10}).attr("text-anchor","middle")}},{key:"render",value:function(){var t=this;return 0!==this.props.originalData.length?r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("span",null,"\u5e74\u5ea6",r.a.createElement("select",{name:"",id:"",onChange:function(e){return t.setState({yearIndex:e.target.value})}},this.props.year.map(function(t,e){return r.a.createElement("option",{key:t,value:e},t)}))),r.a.createElement("span",null,"\u7a2e\u985e",r.a.createElement("select",{name:"",id:"",onChange:function(e){return t.setState({typeIndex:e.target.value})}},this.props.type.map(function(t,e){return r.a.createElement("option",{key:t,value:e},t)})))),r.a.createElement("svg",{style:{position:"relative",left:100},className:"test"})):r.a.createElement("div",null,"Loading")}}]),e}(a.Component)),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={data:[]},n.year=["103\u5e74","104\u5e74","105\u5e74","106\u5e74","107\u5e74"],n.money=["\u672a\u905450\u842c","-75\u842c","-100\u842c","-125\u842c","-150\u842c","-175\u842c","-200\u842c","200\u842c[\u542b]"],n.type=["\u98df\u54c1\u9910\u98f2","\u8863\u8457\u98fe\u54c1","\u65c5\u9928\u4f4f\u5bbf","\u4ea4\u901a\u985e","\u6587\u6559\u5eb7\u6a02","\u767e\u8ca8\u985e"],n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.initData()}},{key:"initData",value:function(){var t=this,e=[];g.c(n(29)).then(function(n){var a=!0,r=!1,i=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value,o=t.year.indexOf(s["\u5e74\u6708"]);for(var u in e[o]=[].concat([[],[],[],[],[],[],[],[]]),s){var d=!0,h=!1,p=void 0;try{for(var g,v=t.money[Symbol.iterator]();!(d=(g=v.next()).done);d=!0){var m=g.value,f=!0,y=!1,x=void 0;try{for(var I,w=t.type[Symbol.iterator]();!(f=(I=w.next()).done);f=!0){var S=I.value;if(-1!==u.indexOf(m)&&-1!==u.indexOf(S)){var Y=t.money.indexOf(m),E=t.type.indexOf(S);e[o][Y][E]=Number(s[u])}}}catch(b){y=!0,x=b}finally{try{f||null==w.return||w.return()}finally{if(y)throw x}}}}catch(b){h=!0,p=b}finally{try{d||null==v.return||v.return()}finally{if(h)throw p}}}}}catch(b){r=!0,i=b}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}t.setState({data:e})})}},{key:"render",value:function(){var t=this;return r.a.createElement("section",null,0!==this.state.data.length?r.a.createElement(p.a,{basename:"/d3test"},r.a.createElement(p.b,{to:"/",style:{marginRight:20}},"\u5404\u5e74\u6536\u82b1\u8cbb\u5360\u6bd4"),r.a.createElement(p.b,{to:"/compare",style:{marginRight:20}},"\u4e0d\u540c\u5e74\u6536\u82b1\u8cbb\u5360\u6bd4"),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{originalData:t.state.data,year:t.year,money:t.money,type:t.type})}}),r.a.createElement(h.a,{path:"/compare",render:function(){return r.a.createElement(m,{originalData:t.state.data,year:t.year,money:t.money,type:t.type})}}))):"LOADING")}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.1c8855be.chunk.js.map