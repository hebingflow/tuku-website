(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[8],{140:function(e,t,a){"use strict";a.r(t);var n,r,l,c,u=a(0),i=a.n(u),o=a(64),d=a(62),s=a(22),h=a(11),m=a(137),g=a(129),p=a(141),b=a(23),f=m.a.Dragger,E=b.a.div(n||(n=Object(s.a)(["\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n"]))),v=b.a.h1(r||(r=Object(s.a)(["\n  margin: 20px 0;\n  text-align: center;\n"]))),j=b.a.img(l||(l=Object(s.a)(["\n  max-width: 300px;\n"]))),w=Object(o.a)((function(){var e=Object(d.a)(),t=e.ImageStore,a=e.UserStore,n=Object(u.useRef)(),r=Object(u.useRef)(),l=Object(h.d)((function(){return{width:null,setWidth:function(e){l.width=e},get widthStr(){return l.width?"/w/".concat(l.width):""},height:null,setHeight:function(e){l.height=e},get heightStr(){return l.height?"/h/".concat(l.height):""},get fullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+l.widthStr+l.heightStr}}})),c={showUploadList:!1,beforeUpload:function(e){return t.setFile(e),t.setFilename(e.name),null===a.currentUser?(g.b.warning("\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20\uff01"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f"),console.log(e)})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1)}};return i.a.createElement("div",null,i.a.createElement(f,c,i.a.createElement("p",{className:"ant-upload-drag-icon"},i.a.createElement(p.a,null)),i.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),i.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),t.serverFile?i.a.createElement(E,null,i.a.createElement(v,null,"\u4e0a\u4f20\u7ed3\u679c"),i.a.createElement("dl",null,i.a.createElement("dt",null,"\u7ebf\u4e0a\u5730\u5740"),i.a.createElement("dd",null,i.a.createElement("a",{target:"_blank",href:t.serverFile.attributes.url.attributes.url},t.serverFile.attributes.url.attributes.url)),i.a.createElement("dt",null,"\u6587\u4ef6\u540d"),i.a.createElement("dd",null,t.filename),i.a.createElement("dt",null,"\u56fe\u7247\u9884\u89c8"),i.a.createElement("dd",null,i.a.createElement(j,{src:t.serverFile.attributes.url.attributes.url})),i.a.createElement("dt",null,"\u66f4\u591a\u5c3a\u5bf8"),i.a.createElement("dd",null,i.a.createElement("input",{ref:n,onChange:function(){console.log("bindWidthChange..."),console.log(n.current.value),l.setWidth(n.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),i.a.createElement("input",{ref:r,onChange:function(){l.setHeight(r.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})),i.a.createElement("dd",null,i.a.createElement("a",{target:"_blank",href:l.fullStr},l.fullStr)))):null)})),O=b.a.div(c||(c=Object(s.a)(["\n  background: orange;\n  padding: 10px;\n  margin: 30px 0;\n  color: #fff;\n  border-radius: 4px;\n"]))),S=Object(o.a)((function(e){var t=e.children,a=Object(d.a)().UserStore;return i.a.createElement(i.a.Fragment,null,a.currentUser?null:i.a.createElement(O,null,t))})),x=Object(o.a)((function(){Object(d.a)().UserStore;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,"\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20!!!"),i.a.createElement(w,null))}));t.default=x}}]);
//# sourceMappingURL=8.78501e12.chunk.js.map