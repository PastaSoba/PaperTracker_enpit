(this.webpackJsonpPaperTracker=this.webpackJsonpPaperTracker||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),s=n(47),c=n.n(s),l=(n(54),n(13)),o=n(14),h=n(9),p=n(16),u=n(15),d=(n(55),n(21)),j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnClick=a.handleOnClick.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"parsePaperInfo",value:function(e){var t=e.authors.map((function(e){return e.authorId}));return{title:e.title,url:e.url,year:e.year,doi:e.doi,authorId_list:t}}},{key:"sortByYear",value:function(e,t){return e.year>t.year?-1:1}},{key:"handleOnClick",value:function(){var e=this,t=document.getElementById("paperdoi").value;fetch("https://api.semanticscholar.org/v1/paper/"+t).then((function(e){return e.json()})).then((function(t){var n=e.parsePaperInfo(t);e.props.setPaper(n);var a=t.citations.map(e.parsePaperInfo),r=t.references.map(e.parsePaperInfo);a.sort(e.sortByYear),r.sort(e.sortByYear),e.props.setCiteAndRef(a,r)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[" SemanticScholar Search :\u3000",Object(a.jsx)("input",{type:"search",placeholder:"\u8abf\u3079\u305f\u3044\u8ad6\u6587\u306eDOI\u3092\u5165\u529b",id:"paperdoi",value:this.props.inputvalue,onChange:this.props.onInputChange}),Object(a.jsx)(d.b,{to:"?doi="+this.props.inputvalue,children:Object(a.jsx)("button",{onClick:this.handleOnClick,children:" \u691c\u7d22 "})})]})})}}]),n}(i.a.Component),b=n(12),f=n(33),O=n.n(f);var C=200,k=50,v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(b.Group,{children:[Object(a.jsx)(b.Rect,{x:215*(this.props.col+1),y:65*this.props.row,width:C,height:k}),Object(a.jsx)(b.Text,{x:215*(this.props.col+1),y:65*this.props.row,width:C,height:k,text:this.props.year,fontSize:20,align:"center",verticalAlign:"middle"})]})}}]),n}(i.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={color:a.props.defaultcolor,citations:null},a.clickhandler=a.clickhandler.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"clickhandler",value:function(){this.props.handleCellClicked(this.props.paper.doi)}},{key:"setSameAuthorMarker",value:function(){return this.props.isWrittenBySameAuthor?Object(a.jsx)(b.Rect,{x:215*(this.props.col+1)-5,y:65*this.props.row-5,width:210,height:60,fill:"black"}):null}},{key:"render",value:function(){return Object(a.jsxs)(b.Group,{onclick:this.clickhandler,children:[this.setSameAuthorMarker(),Object(a.jsx)(b.Rect,{x:215*(this.props.col+1),y:65*this.props.row,width:C,height:k,fill:this.state.color}),Object(a.jsx)(b.Text,{x:215*(this.props.col+1),y:65*this.props.row,width:C,height:k,text:this.props.paper.title})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e.enableGetMag)return{color:e.defaultcolor};var n=null==t.citations?(e.paper.doi,Math.floor(201*Math.random())):t.citations,a=function(e,t,n){var a=(e-t)/(n-t),r=Math.floor(255*a).toString(16);return("00"+r).slice(-2)}(n,0,50);switch(e.defaultcolor){case"lightgreen":return{citations:n,color:"#"+a+"FF"+a};default:return{citations:n,color:"#FF"+a+a}}}}]),n}(i.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(b.Stage,{width:3e3,height:3e3,children:Object(a.jsx)(b.Layer,{children:function(){for(var t=[],n=0,r=0,i=e.props.citations,s=0;s<i.length;s++){0===s?t.push(Object(a.jsx)(v,{year:i[s].year,row:n,col:-1})):i[s].year===i[s-1].year?r++:(r=0,n++,t.push(Object(a.jsx)(v,{year:i[s].year,row:n,col:-1})));var c=O.a.intersection(e.props.paper.authorId_list,e.props.citations[s].authorId_list).length>0;t.push(Object(a.jsx)(g,{paper:i[s],row:n,col:r,defaultcolor:"lightgreen",isWrittenBySameAuthor:c,handleCellClicked:e.props.handleCellClicked,enableGetMag:e.props.enableGetCitationsMag}))}var l=e.props.references;r=0,n+=2;for(var o=0;o<l.length;o++){0===o?t.push(Object(a.jsx)(v,{year:l[o].year,row:n,col:-1})):l[o].year===l[o-1].year?r++:(r=0,n++,t.push(Object(a.jsx)(v,{year:l[o].year,row:n,col:-1})));var h=O.a.intersection(e.props.paper.authorId_list,e.props.references[o].authorId_list).length>0;t.push(Object(a.jsx)(g,{paper:l[o],row:n,col:r,defaultcolor:"lightpink",isWrittenBySameAuthor:h,handleCellClicked:e.props.handleCellClicked,enableGetMag:e.props.enableGetReferencesMag}))}return t}()})})}}]),n}(i.a.Component),x=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={inputvalue:a.props.qs.doi,paper:null,citations:[],references:[],enableGetCitationsMag:!1,enableGetReferencesMag:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleCitationsCheck=a.handleCitationsCheck.bind(Object(h.a)(a)),a.handleReferencesCheck=a.handleReferencesCheck.bind(Object(h.a)(a)),a.handleSetCiteAndRef=a.handleSetCiteAndRef.bind(Object(h.a)(a)),a.handleSetPaper=a.handleSetPaper.bind(Object(h.a)(a)),a.handleCellClicked=a.handleCellClicked.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({inputvalue:e.target.value})}},{key:"handleCitationsCheck",value:function(){this.setState({enableGetCitationsMag:!this.state.enableGetCitationsMag})}},{key:"handleReferencesCheck",value:function(){this.setState({enableGetReferencesMag:!this.state.enableGetReferencesMag})}},{key:"handleSetCiteAndRef",value:function(e,t){this.setState({citations:e,references:t})}},{key:"handleSetPaper",value:function(e){this.setState({paper:e})}},{key:"handleCellClicked",value:function(e){this.setState({inputvalue:e})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Paper Tracker"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{setPaper:this.handleSetPaper,setCiteAndRef:this.handleSetCiteAndRef,onInputChange:this.handleChange,inputvalue:this.state.inputvalue}),Object(a.jsxs)("div",{children:["\u691c\u7d22\u8ad6\u6587\u540d:",Object(a.jsx)("a",{href:null===this.state.paper?"":this.state.paper.url,target:"_blank",rel:"noopener noreferrer",children:null===this.state.paper?"":this.state.paper.title})]}),Object(a.jsxs)("div",{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\uff08\u30c7\u30e2\u52d5\u4f5c\uff09",Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",onChange:this.handleCitationsCheck,checked:this.state.enableGetCitationsMag}),"\u88ab\u5f15\u7528\u8ad6\u6587\u306e\u5f71\u97ff\u5ea6\u3092\u53ef\u8996\u5316\u3059\u308b"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",onChange:this.handleReferencesCheck,checked:this.state.enableGetReferencesMag}),"\u5f15\u7528\u8ad6\u6587\u306e\u5f71\u97ff\u5ea6\u3092\u53ef\u8996\u5316\u3059\u308b"]})]})]}),Object(a.jsx)(y,{paper:this.state.paper,citations:this.state.citations,references:this.state.references,enableGetCitationsMag:this.state.enableGetCitationsMag,enableGetReferencesMag:this.state.enableGetReferencesMag,handleCellClicked:this.handleCellClicked})]})}}]),n}(i.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},m=n(7),M=n(49),w=n.n(M);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(m.a,{render:function(e){return Object(a.jsx)(x,{qs:w.a.parse(e.location.search)})}})})}),document.getElementById("root")),S()},54:function(e,t,n){},55:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.c0b530ef.chunk.js.map