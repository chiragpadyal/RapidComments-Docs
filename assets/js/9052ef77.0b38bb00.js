"use strict";(self.webpackChunkrapid_comments_docs=self.webpackChunkrapid_comments_docs||[]).push([[231],{74917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),m=a(70603),s=a(48147),n=a(61045),l=a(86776),o=a(69128),p=a(83329),d=(a(3186),a(18679));const c={id:"update-comment",title:"Update Comment",description:"Update a comment",sidebar_label:"Update Comment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Comment Endpoint"],description:"Update a comment",operationId:"Update Comment",parameters:[{name:"threadId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},content:{type:"string"},vote:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64"},vote:{type:"integer",format:"int64"},report:{type:"string"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},comment:"circular(ThreadComment)"},title:"CommentMeta"}},createdAt:{type:"string",format:"date-time"},lastModified:{type:"string",format:"date-time"},likes:{type:"integer",format:"int64"},dislikes:{type:"integer",format:"int64"},quality:{type:"number",format:"double"},thread:{type:"object",properties:{threadId:{type:"string"},origin:{type:"string"},threads:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"}},title:"ThreadEntity"},parentId:{type:"string"},children:{type:"array",items:"circular(ThreadComment)"},hasMore:{type:"boolean"},parent:"circular(ThreadComment)"},title:"ThreadComment"}}},required:!0},responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},content:{type:"string"},vote:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64"},vote:{type:"integer",format:"int64"},report:{type:"string"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},comment:"circular(ThreadComment)"},title:"CommentMeta"}},createdAt:{type:"string",format:"date-time"},lastModified:{type:"string",format:"date-time"},likes:{type:"integer",format:"int64"},dislikes:{type:"integer",format:"int64"},quality:{type:"number",format:"double"},thread:{type:"object",properties:{threadId:{type:"string"},origin:{type:"string"},threads:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"}},title:"ThreadEntity"},parentId:{type:"string"},children:{type:"array",items:"circular(ThreadComment)"},hasMore:{type:"boolean"},parent:"circular(ThreadComment)"},title:"ThreadComment"}}}}},security:[{security:[]}],method:"put",path:"/api/comment-service/threads/{threadId}/comments",servers:[{url:"http://localhost:8060",description:"Generated server url"}],securitySchemes:{security:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{id:0,user:{id:0,user_id:"string",email:"string",username:"string",picture:"string",status:!0},content:"string",vote:[{id:0,vote:0,report:"string",user:{id:0,user_id:"string",email:"string",username:"string",picture:"string",status:!0}}],createdAt:"2023-06-30T18:26:14.096Z",lastModified:"2023-06-30T18:26:14.096Z",likes:0,dislikes:0,quality:0,thread:{threadId:"string",origin:"string",threads:[null]},parentId:"string",children:[null],hasMore:!0},info:{title:"Comment Service API Reference",description:"Documentation Comment Service API v1.0",version:"1.0"},postman:{name:"Update Comment",description:{content:"Update a comment",type:"text/plain"},url:{path:["api","comment-service","threads",":threadId","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"threadId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"api-reference/comment-service-api-reference",custom_edit_url:null},y=void 0,u={unversionedId:"api-reference/update-comment",id:"api-reference/update-comment",title:"Update Comment",description:"Update a comment",source:"@site/docs/api-reference/update-comment.api.mdx",sourceDirName:"api-reference",slug:"/api-reference/update-comment",permalink:"/api-reference/update-comment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-comment",title:"Update Comment",description:"Update a comment",sidebar_label:"Update Comment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Comment Endpoint"],description:"Update a comment",operationId:"Update Comment",parameters:[{name:"threadId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},content:{type:"string"},vote:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64"},vote:{type:"integer",format:"int64"},report:{type:"string"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},comment:"circular(ThreadComment)"},title:"CommentMeta"}},createdAt:{type:"string",format:"date-time"},lastModified:{type:"string",format:"date-time"},likes:{type:"integer",format:"int64"},dislikes:{type:"integer",format:"int64"},quality:{type:"number",format:"double"},thread:{type:"object",properties:{threadId:{type:"string"},origin:{type:"string"},threads:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"}},title:"ThreadEntity"},parentId:{type:"string"},children:{type:"array",items:"circular(ThreadComment)"},hasMore:{type:"boolean"},parent:"circular(ThreadComment)"},title:"ThreadComment"}}},required:!0},responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},content:{type:"string"},vote:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64"},vote:{type:"integer",format:"int64"},report:{type:"string"},user:{type:"object",properties:{id:{type:"integer",format:"int64"},user_id:{type:"string"},email:{type:"string"},username:{type:"string"},picture:{type:"string"},status:{type:"boolean"}},title:"User"},comment:"circular(ThreadComment)"},title:"CommentMeta"}},createdAt:{type:"string",format:"date-time"},lastModified:{type:"string",format:"date-time"},likes:{type:"integer",format:"int64"},dislikes:{type:"integer",format:"int64"},quality:{type:"number",format:"double"},thread:{type:"object",properties:{threadId:{type:"string"},origin:{type:"string"},threads:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"}},title:"ThreadEntity"},parentId:{type:"string"},children:{type:"array",items:"circular(ThreadComment)"},hasMore:{type:"boolean"},parent:"circular(ThreadComment)"},title:"ThreadComment"}}}}},security:[{security:[]}],method:"put",path:"/api/comment-service/threads/{threadId}/comments",servers:[{url:"http://localhost:8060",description:"Generated server url"}],securitySchemes:{security:{type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{id:0,user:{id:0,user_id:"string",email:"string",username:"string",picture:"string",status:!0},content:"string",vote:[{id:0,vote:0,report:"string",user:{id:0,user_id:"string",email:"string",username:"string",picture:"string",status:!0}}],createdAt:"2023-06-30T18:26:14.096Z",lastModified:"2023-06-30T18:26:14.096Z",likes:0,dislikes:0,quality:0,thread:{threadId:"string",origin:"string",threads:[null]},parentId:"string",children:[null],hasMore:!0},info:{title:"Comment Service API Reference",description:"Documentation Comment Service API v1.0",version:"1.0"},postman:{name:"Update Comment",description:{content:"Update a comment",type:"text/plain"},url:{path:["api","comment-service","threads",":threadId","comments"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"threadId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"api-reference/comment-service-api-reference",custom_edit_url:null},sidebar:"doc",previous:{title:"Fetch All Comments",permalink:"/api-reference/fetch-all-comments"},next:{title:"Add Comment",permalink:"/api-reference/add-comment"}},h={},g=[{value:"Update Comment",id:"update-comment",level:2}],f={toc:g},k="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-comment"},"Update Comment"),(0,r.kt)("p",null,"Update a comment"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"threadId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"picture",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"vote"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"vote",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"report",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"picture",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"comment",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(ThreadComment)",mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastModified",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"likes",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"dislikes",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"quality",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{type:"number",format:"double"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"thread"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"origin",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"threads",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"parentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"children",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:"circular(ThreadComment)"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"hasMore",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"parent",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(ThreadComment)",mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(m.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"picture",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"vote"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"vote",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"report",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"picture",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"comment",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(ThreadComment)",mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"lastModified",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"likes",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"dislikes",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"quality",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{type:"number",format:"double"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"thread"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"origin",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"threads",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",items:"circular(ThreadComment)"},mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!1,name:"parentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"children",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:"circular(ThreadComment)"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"hasMore",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"parent",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(ThreadComment)",mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "id": 0,\n  "user": {\n    "id": 0,\n    "user_id": "string",\n    "email": "string",\n    "username": "string",\n    "picture": "string",\n    "status": true\n  },\n  "content": "string",\n  "vote": [\n    {\n      "id": 0,\n      "vote": 0,\n      "report": "string",\n      "user": {\n        "id": 0,\n        "user_id": "string",\n        "email": "string",\n        "username": "string",\n        "picture": "string",\n        "status": true\n      }\n    }\n  ],\n  "createdAt": "2023-06-30T18:26:14.147Z",\n  "lastModified": "2023-06-30T18:26:14.147Z",\n  "likes": 0,\n  "dislikes": 0,\n  "quality": 0,\n  "thread": {\n    "threadId": "string",\n    "origin": "string",\n    "threads": [\n      null\n    ]\n  },\n  "parentId": "string",\n  "children": [\n    null\n  ],\n  "hasMore": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);