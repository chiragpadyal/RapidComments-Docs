(self.webpackChunkrapid_comments_docs=self.webpackChunkrapid_comments_docs||[]).push([[259],{78294:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));n(79524),n(7909);var i=n(83329),a=n(18679);n(93162);const c={id:"comment-service-api-reference",title:"Comment Service API Reference",description:"Documentation Comment Service API v1.0",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,l={unversionedId:"api-reference/comment-service-api-reference",id:"api-reference/comment-service-api-reference",title:"Comment Service API Reference",description:"Documentation Comment Service API v1.0",source:"@site/docs/api-reference/comment-service-api-reference.info.mdx",sourceDirName:"api-reference",slug:"/api-reference/comment-service-api-reference",permalink:"/RapidComments-Docs/api-reference/comment-service-api-reference",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"comment-service-api-reference",title:"Comment Service API Reference",description:"Documentation Comment Service API v1.0",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"doc",previous:{title:"API Reference",permalink:"/RapidComments-Docs/category/api-reference"},next:{title:"Comment Endpoint",permalink:"/RapidComments-Docs/category/api-reference/comment-endpoint"}},m={},u=[],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0"),(0,r.kt)("h1",{id:"comment-service-api-reference"},"Comment Service API Reference"),(0,r.kt)("p",null,"Documentation Comment Service API v1.0"),(0,r.kt)("div",{style:{marginBottom:"2rem"}},(0,r.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,r.kt)(a.Z,{label:"HTTP: Bearer Auth",value:"security",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Security Scheme Type:"),(0,r.kt)("td",null,"http")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"HTTP Authorization Scheme:"),(0,r.kt)("td",null,"bearer")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bearer format:"),(0,r.kt)("td",null,"JWT")))))))))}f.isMDXComponent=!0},93162:function(e,t,n){var o,r,i,a=n(25108);r=[],void 0===(i="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){a.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var a=c.URL||c.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?i(s):r(s.href)?o(e,t,n):i(s,s.target="_blank")):(s.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(s.href)}),4e4),setTimeout((function(){i(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(r(e))o(e,n,a);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){i(c)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var i="application/octet-stream"===e.type,a=/constructor/i.test(c.HTMLElement)||c.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&a||s)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var e=m.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},m.readAsDataURL(e)}else{var u=c.URL||c.webkitURL,d=u.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});c.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,r):o)||(e.exports=i)}}]);