(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Ox3":function(t,e,a){"use strict";var n=a("hosL"),o="profileImg__DvgtD";e.a=t=>{var e;return Object(n.h)("img",{class:o,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,a){"use strict";var n=a("hosL"),o="YouTubeImg__LvwUa",r="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,a)=>void 0===a?null:Object(n.h)("a",{href:e+a,target:"_blank",rel:"noopener noreferrer"},Object(n.h)("img",{class:t}));return Object(n.h)("div",null,e(o,"https://www.youtube.com/channel/",t.YouTubeId),e(r,"https://www.twitch.tv/",t.TwitchId))}},"8r9F":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r}));const n=t=>t.toString().padStart(2,"0"),o=(t,e)=>{const a=t.getTimezoneOffset()/60+e;return t.setTime(t.getTime()+60*a*60*1e3),t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())},r=t=>t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())+" "+n(t.getHours())+":"+n(t.getMinutes())+":"+n(t.getSeconds())},DS9q:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const n=(t,e)=>{const a=t.hasYouTube,n=e.hasYouTube;if(!a&&!n)return 0;if(!n)return 1;if(!a)return-1;const o=t.YouTubeSubscriberCount,r=e.YouTubeSubscriberCount;return void 0===o&&void 0===r?0:void 0===r?1:void 0===o?-1:o>r?1:r>o?-1:0}},L9Wd:function(t,e,a){"use strict";var n=a("hosL"),o="textField__bDpXR",r="button__maFzS";e.a=t=>Object(n.h)("div",null,Object(n.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:r,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,a){"use strict";var n=a("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},TToT:function(t,e){"use strict";e.a=[{when:t=>t.isToday,style:{color:"mediumblue"}}]},drLk:function(t,e,a){"use strict";a.d(e,"h",(function(){return u})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"a",(function(){return b})),a.d(e,"b",(function(){return h})),a.d(e,"g",(function(){return g}));var n=a("czhI"),o=a.n(n);let r;const i=async t=>(void 0===r&&await(async()=>{await o.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((t=>{r={sha:t.data.sha,date:t.data.commit.author.date}})).catch((()=>{r={sha:"master"}})),o.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${r.sha}/api/v0`})(),o.a.get(t)),u=t=>i(`/vtubers/${t}.json`),c=t=>i(`/groups/${t}/vtubers.json`),s=()=>i("/groups.json"),l=t=>i(`/trending-vtubers/${t}.json`),d=t=>i(`/growing-vtubers/${t}.json`),b=t=>i(`/debut-vtubers/${t}.json`),h=t=>i(`/graduate-vtubers/${t}.json`),g=t=>i(`/trending-videos/${t}.json`)},lRrp:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("2G8U"),o=a("+Ox3");const r=(t,e)=>{var a,r,i,u,c,s;return{id:t.id,isToday:t.debutDate===e,debutDate:t.debutDate,profileImg:Object(o.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(n.a)({YouTubeId:null===(a=t.YouTube)||void 0===a?void 0:a.id,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(i=t.YouTube)||void 0===i?void 0:i.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(u=null===(c=t.Twitch)||void 0===c?void 0:c.followerCount)&&void 0!==u?u:0,group:null!==(s=t.group)&&void 0!==s?s:"",nationality:t.nationality,activity:t.activity}}},qjj9:function(t,e,a){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},n.apply(this,arguments)}a.r(e);var o=a("hosL"),r=a("QRet"),i=a("OhSV"),u=a("ENxA"),c=a("jUMG"),s=a("L9Wd"),l=a("drLk"),d=a("LftB"),b=a("DS9q"),h=(a("GFNa"),a("uZiY")),g=a("L9y4"),p=a("8r9F"),v=a("TToT"),w=a("lRrp");e.default=t=>{document.title=`${t.dictionary.header.debutVTubers} | ${t.dictionary.header.title}`;const e=[{name:Object(o.h)(i.c,{id:"table.debutDate"},"Debut Date"),width:"100px",selector:t=>t.debutDate,sortable:!0},{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(o.h)(i.c,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(o.h)(i.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(o.h)(i.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(o.h)(i.c,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:b.a},{name:Object(o.h)(i.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(o.h)(i.c,{id:"table.group"},"Group"),cell:t=>""!==t.group?Object(o.h)("a",{class:h.a.groupLink,href:`${c.a}/group/${t.group}`},t.group):null},{name:Object(o.h)(i.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[a,j]=Object(r.j)([]),[T,f]=Object(r.j)(""),[m,O]=Object(r.j)(""),[y,A]=Object(r.j)(""),[C,L]=Object(r.j)(!1),D=a.filter((t=>t.debutDate&&t.debutDate.toLowerCase().includes(T.toLowerCase()))).filter((t=>t.name&&t.name.toLowerCase().includes(m.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(y.toLowerCase()))),x=Object(r.g)((()=>Object(o.h)("div",{class:h.a.searchBarGroup},Object(o.h)(s.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:t=>f(t.target.value),onClear:()=>{T&&(L(!C),f(""))},filterText:T}),Object(o.h)(s.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>O(t.target.value),onClear:()=>{m&&(L(!C),O(""))},filterText:m}),Object(o.h)(s.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>A(t.target.value),onClear:()=>{y&&(L(!C),A(""))},filterText:y}))),[T,m,y,C,t.dictionary]),[Y,F]=Object(r.j)(!0);return Object(r.d)((()=>{(async()=>{const t=Object(p.b)(new Date,8);await l.a("recent").then((e=>{j(e.data.VTubers.map((t=>t)).sort(((t,e)=>e.debutDate.localeCompare(t.debutDate))).map((e=>Object(w.a)(e,t)))),F(!1)}))})()}),[]),Object(o.h)(o.Fragment,null,Object(o.h)("h1",null,Object(o.h)(i.c,{id:"header.debutVTubers"},"Debut VTubers")),Object(o.h)(u.a,n({},d.a,{columns:e,data:D,conditionalRowStyles:g.a.concat(v.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(o.h)(i.c,{id:"table.loading"},"Loading..."),progressPending:Y,subHeader:!0,subHeaderComponent:x})))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-DebutVTubers.chunk.becf7.esm.js.map