(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Ox3":function(t,e,a){"use strict";var n=a("hosL"),o="profileImg__DvgtD";e.a=t=>{var e;return Object(n.h)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,a){"use strict";var n=a("hosL"),o="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,a)=>void 0===a?null:Object(n.h)("a",{href:e+a,target:"_blank",rel:"noopener noreferrer"},Object(n.h)("img",{class:t}));return Object(n.h)("div",null,e(o,"https://www.youtube.com/channel/",t.YouTubeId),e(i,"https://www.twitch.tv/",t.TwitchId))}},DS9q:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const n=(t,e)=>{const a=t.hasYouTube,n=e.hasYouTube;if(!a&&!n)return 0;if(!n)return 1;if(!a)return-1;const o=t.YouTubeSubscriberCount,i=e.YouTubeSubscriberCount;return void 0===o&&void 0===i?0:void 0===i?1:void 0===o?-1:o>i?1:i>o?-1:0}},JFTd:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.r(e);var o=a("hosL"),i=a("QRet"),r=a("OhSV"),c=a("ENxA"),u=a("2G8U"),l=a("+Ox3"),s=a("L9Wd"),b=a("drLk"),h=a("LftB"),d=a("DS9q");a("GFNa"),a("f3/s");e.default=t=>{document.title=`${t.groupName} | ${t.dictionary.header.title}`;const e=[{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(o.h)(r.b,{id:"table.displayName"},"Name"),width:"calc(75px-30%)",wrap:!0,selector:t=>t.name},{name:Object(o.h)(r.b,{id:"table.links"},"Links"),width:"calc(75px-15%)",cell:t=>t.channelLinks},{name:Object(o.h)(r.b,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),width:"calc(75px-20%)",cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(o.h)(r.b,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:d.a},{name:Object(o.h)(r.b,{id:"table.TwitchFollowerCount"},"Twitch Followers"),width:"calc(75px-20%)",selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(o.h)(r.b,{id:"table.nationality"},"Nationality"),width:"calc(75px-15%)",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[a,p]=Object(i.j)([]),[w,m]=Object(i.j)(""),[g,v]=Object(i.j)(!1),T=a.filter((t=>t.name&&t.name.toLowerCase().includes(w.toLowerCase()))),j=Object(i.g)((()=>Object(o.h)(o.Fragment,null,Object(o.h)(s.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>m(t.target.value),onClear:()=>{w&&(v(!g),m(""))},filterText:w}))),[w,g,t.dictionary]),[f,O]=Object(i.j)(!0),y=async()=>{await b.a(t.groupName).then((t=>{p(t.data.VTubers.map((t=>(t=>{var e,a,n,o,i;return{id:t.id,profileImg:Object(l.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(u.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(a=t.Twitch)||void 0===a?void 0:a.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(o=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0,nationality:t.nationality,activity:t.activity}})(t)))),O(!1)}))};return Object(i.d)((()=>{y()}),[]),Object(o.h)(o.Fragment,null,Object(o.h)("h1",null,Object(o.h)(r.b,{id:"header.group"},"Group"),Object(o.h)("span",{class:"highlightText"}," ",t.groupName," "),Object(o.h)(r.b,{id:"header.memberList"},"members")),Object(o.h)(c.a,n({},h.a,{columns:e,data:T,progressComponent:t.dictionary.table.loading,progressPending:f,subHeader:!0,subHeaderComponent:j})))}},L9Wd:function(t,e,a){"use strict";var n=a("hosL"),o="textField__bDpXR",i="button__maFzS";e.a=t=>Object(n.h)(n.Fragment,null,Object(n.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))},LftB:function(t,e){"use strict";var a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}];e.a=()=>({columns:[],data:[],conditionalRowStyles:a,fixedHeader:!0})},drLk:function(t,e,a){"use strict";a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return l}));var n=a("czhI"),o=a.n(n);let i;const r=async t=>(void 0===i&&await(async()=>{await o.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((t=>{i={sha:t.data.sha,date:t.data.commit.author.date}})).catch((()=>{i={sha:"master"}})),o.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${i.sha}/api/v0`})(),o.a.get(t)),c=()=>r("/vtubers.json"),u=t=>r(`/groups/${t}/vtubers.json`),l=()=>r("/groups.json")},"f3/s":function(){}}]);
//# sourceMappingURL=route-Group.chunk.aac7d.esm.js.map