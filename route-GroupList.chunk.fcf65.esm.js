(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Ox3":function(e,t,r){"use strict";var a=r("hosL"),o="profileImg__DvgtD";t.a=e=>{var t;return Object(a.h)("img",{class:o,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},L9Wd:function(e,t,r){"use strict";var a=r("hosL"),o="textField__bDpXR",n="button__maFzS";t.a=e=>Object(a.h)("div",null,Object(a.h)("input",{type:"text",class:o,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(a.h)("button",{type:"button",class:n,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var a=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:a.a})},Px4b:function(e,t,r){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}r.r(t);var o=r("hosL"),n=r("QRet"),i=r("OhSV"),u=r("ENxA"),c=r("jUMG"),s=r("drLk"),l=r("L9Wd"),b=r("LftB"),d=(r("GFNa"),"profileGrid__glJEL"),h=r("uZiY"),p=r("+Ox3"),m=r("qO1o");var g=e=>Object(o.h)(m.a,{text:e.VTuber.name},Object(o.h)((e=>{var t,r,a,n,i,u;if(void 0===e.VTuber.YouTube&&void 0===e.VTuber.Twitch)return null;let c=(null!==(t=null===(r=e.VTuber.YouTube)||void 0===r?void 0:r.subscriberCount)&&void 0!==t?t:0)>(null!==(a=null===(n=e.VTuber.Twitch)||void 0===n?void 0:n.followerCount)&&void 0!==a?a:0);return void 0===e.VTuber.YouTube&&(c=!1),void 0===e.VTuber.Twitch&&(c=!0),c?Object(o.h)("a",{href:"https://www.youtube.com/channel/"+(null===(i=e.VTuber.YouTube)||void 0===i?void 0:i.id),target:"_blank",rel:"noopener noreferrer"},e.children):Object(o.h)("a",{href:"https://www.twitch.tv/"+(null===(u=e.VTuber.Twitch)||void 0===u?void 0:u.id),target:"_blank",rel:"noopener noreferrer"},e.children)}),{VTuber:e.VTuber},Object(p.a)({imgUrl:e.VTuber.imgUrl})));const v=(e,t)=>e.name.localeCompare(t.name);t.default=e=>{document.title=`${e.dictionary.header.groupList} | ${e.dictionary.header.title}`;const t=[{name:Object(o.h)(i.c,{id:"table.displayName"},"Name"),minWidth:"100px",maxWidth:"150px",sortable:!0,sortFunction:v,cell:e=>Object(o.h)("a",{class:h.a.groupLink,href:`${c.a}/group/${e.name}`},e.name)},{name:Object(o.h)(i.c,{id:"table.popularity"},"Popularity"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.popularity},{name:Object(o.h)(i.c,{id:"table.averageSubscriberCount"},"Average Subscribers"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.averageSubscriberCount},{name:Object(o.h)(i.c,{id:"table.totalSubscriberCount"},"Total Subscribers"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.totalSubscriberCount},{name:Object(o.h)(i.c,{id:"table.memberCount"},"Member Count"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.memberCount},{name:Object(o.h)(i.c,{id:"table.memberList"},"Members"),cell:e=>Object(o.h)("div",{class:d},e.memberList.map((e=>Object(o.h)(g,{key:e.id,VTuber:e}))))}],[r,p]=Object(n.j)([]),[m,j]=Object(n.j)(""),[O,f]=Object(n.j)(""),[w,y]=Object(n.j)(!1),T=r.filter((e=>void 0===e.name||e.name.toLowerCase().includes(m.toLowerCase()))).filter((e=>void 0===e.memberList||e.memberList.map((e=>e.name.toLowerCase().includes(O.toLowerCase()))).includes(!0))),x=Object(n.g)((()=>Object(o.h)("div",{class:h.a.searchBarGroup},Object(o.h)(l.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>j(e.target.value),onClear:()=>{m&&(y(!w),j(""))},filterText:m}),Object(o.h)(l.a,{placeholderText:e.dictionary.table.searchByGroupMember,onFilter:e=>f(e.target.value),onClear:()=>{O&&(y(!w),f(""))},filterText:O}))),[m,O,w,e.dictionary]),A=(e,t)=>{var r,a,o,n;return e+(null!==(r=null===(a=t.YouTube)||void 0===a?void 0:a.subscriberCount)&&void 0!==r?r:0)+(null!==(o=null===(n=t.Twitch)||void 0===n?void 0:n.followerCount)&&void 0!==o?o:0)},[L,C]=Object(n.j)(!0),V=async()=>{await s.d().then((e=>{p(e.data.groups.map((e=>(e=>({id:e.id,name:e.name,popularity:e.popularity,averageSubscriberCount:0!==e.members.length?Math.round(e.members.reduce(A,0)/e.members.length):0,totalSubscriberCount:e.members.reduce(A,0),memberCount:e.members.length,memberList:e.members}))(e))).sort(((e,t)=>t.popularity-e.popularity))),C(!1)}))};return Object(n.d)((()=>{V()}),[]),Object(o.h)(o.Fragment,null,Object(o.h)("h1",null,Object(o.h)(i.c,{id:"header.groupList"},"Group List")),Object(o.h)(u.a,a({},b.a,{columns:t,data:T,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(o.h)(i.c,{id:"table.loading"},"Loading..."),progressPending:L,subHeader:!0,subHeaderComponent:x})))}},drLk:function(e,t,r){"use strict";r.d(t,"h",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return l})),r.d(t,"e",(function(){return b})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h})),r.d(t,"g",(function(){return p}));var a=r("czhI"),o=r.n(a);let n;const i=async e=>(void 0===n&&await(async()=>{await o.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((e=>{n={sha:e.data.sha,date:e.data.commit.author.date}})).catch((()=>{n={sha:"master"}})),o.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${n.sha}/api/v0`})(),o.a.get(e)),u=e=>i(`/vtubers/${e}.json`),c=e=>i(`/groups/${e}/vtubers.json`),s=()=>i("/groups.json"),l=e=>i(`/trending-vtubers/${e}.json`),b=e=>i(`/growing-vtubers/${e}.json`),d=e=>i(`/debut-vtubers/${e}.json`),h=e=>i(`/graduate-vtubers/${e}.json`),p=e=>i(`/trending-videos/${e}.json`)},qO1o:function(e,t,r){"use strict";var a=r("hosL"),o="tooltip__vtGmz",n="tooltipText__pA-zc";t.a=e=>Object(a.h)("div",{class:o},e.children,Object(a.h)("span",{class:n,style:{width:e.width,fontSize:e.fontSize}},e.text))},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-GroupList.chunk.fcf65.esm.js.map