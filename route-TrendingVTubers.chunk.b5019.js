(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Ox3":function(t,n,e){"use strict";var r=e("hosL"),o="profileImg__DvgtD";n.a=function(t){var n;return Object(r.g)("img",{class:o,src:null!==(n=t.imgUrl)&&void 0!==n?n:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,n,e){"use strict";var r=e("hosL"),o="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";n.a=function(t){var n=function(t,n,e){return void 0===e?null:Object(r.g)("a",{href:n+e,target:"_blank",rel:"noopener noreferrer"},Object(r.g)("img",{class:t}))};return Object(r.g)("div",null,n(o,"https://www.youtube.com/channel/",t.YouTubeId),n(i,"https://www.twitch.tv/",t.TwitchId))}},"8i/u":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("2G8U"),o=e("+Ox3"),i=function(t,n){var e,i,u,a,c,l;return{id:t.id,profileImg:Object(o.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(r.a)({YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,TwitchId:null===(i=t.Twitch)||void 0===i?void 0:i.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(u=t.YouTube)||void 0===u?void 0:u.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(a=null===(c=t.Twitch)||void 0===c?void 0:c.followerCount)&&void 0!==a?a:0,group:null!==(l=t.group)&&void 0!==l?l:"",nationality:t.nationality,activity:t.activity,popularity:t.popularity,ranking:n}}},DS9q:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t,n){var e=t.hasYouTube,r=n.hasYouTube;if(!e&&!r)return 0;if(!r)return 1;if(!e)return-1;var o=t.YouTubeSubscriberCount,i=n.YouTubeSubscriberCount;return void 0===o&&void 0===i?0:void 0===i?1:void 0===o?-1:o>i?1:i>o?-1:0}},L9Wd:function(t,n,e){"use strict";var r=e("hosL"),o="textField__bDpXR",i="button__maFzS";n.a=function(t){return Object(r.g)("div",null,Object(r.g)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,n){"use strict";n.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,n,e){"use strict";var r=e("L9y4");n.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},Obgd:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}function o(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.r(n);var a=e("hosL"),c=e("QRet"),l=e("OhSV"),s=e("ENxA"),d=e("jUMG"),f=e("drLk"),b=e("L9Wd"),h=e("LftB"),p=(e("GFNa"),e("uZiY")),g=e("DS9q"),v=e("L9y4"),y=e("8i/u"),w=e("y7vS");n.default=function(t){document.title="".concat(t.dictionary.header.trendingVTubers," | ").concat(t.dictionary.header.title);var n=[{name:"#",width:"70px",wrap:!1,selector:function(t){return t.ranking},sortable:!0},{name:"",width:"75px",cell:function(t){return t.profileImg}},{name:Object(a.g)(l.c,{id:"table.displayName"},"Name"),wrap:!0,selector:function(t){return t.name}},{name:Object(a.g)(l.c,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:function(t){return t.channelLinks}},{name:Object(a.g)(l.c,{id:"table.popularity"},"Popularity"),selector:function(t){return t.popularity},right:!0,sortable:!0},{name:Object(a.g)(l.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:function(t){var n;return t.hasYouTube?null!==(n=t.YouTubeSubscriberCount)&&void 0!==n?n:Object(a.g)(l.c,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:g.a},{name:Object(a.g)(l.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:function(t){return t.hasTwitch?t.TwitchFollowerCount:""},right:!0,sortable:!0},{name:Object(a.g)(l.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(a.g)("a",{class:p.a.groupLink,href:"".concat(d.a,"/group/").concat(t.group)},t.group):null}},{name:Object(a.g)(l.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:function(t){var n;return null!==(n=t.nationality)&&void 0!==n?n:""}}],e=i(Object(c.j)([]),2),u=e[0],m=e[1],j=i(Object(c.j)(""),2),O=j[0],T=j[1],A=i(Object(c.j)(""),2),x=A[0],L=A[1],C=i(Object(c.j)(!1),2),S=C[0],k=C[1],Y=u.filter((function(t){return t.name&&t.name.toLowerCase().includes(O.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(x.toLowerCase())})),_=Object(c.g)((function(){return Object(a.g)("div",{class:p.a.searchBarGroup},Object(a.g)(b.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return T(t.target.value)},onClear:function(){O&&(k(!S),T(""))},filterText:O}),Object(a.g)(b.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return L(t.target.value)},onClear:function(){x&&(k(!S),L(""))},filterText:x}))}),[O,x,S,t.dictionary]),I=i(Object(c.j)(!0),2),B=I[0],F=I[1],D=function(){var t,n=(t=function*(){yield f.f("100").then((function(t){m(t.data.VTubers.map((function(t){return t})).sort((function(t,n){return n.popularity-t.popularity})).map((function(t,n){return Object(y.a)(t,n+1)}))),F(!1)}))},function(){var n=this,e=arguments;return new Promise((function(r,i){function u(t){o(c,r,i,u,a,"next",t)}function a(t){o(c,r,i,u,a,"throw",t)}var c=t.apply(n,e);u(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(c.d)((function(){D()}),[]),Object(a.g)(a.b,null,Object(a.g)("h1",null,Object(a.g)(l.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(a.g)(w.a,{width:"300px",fontSize:"13px",text:Object(a.g)(l.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(a.g)(s.a,r({},h.a,{columns:n,data:Y,conditionalRowStyles:v.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(a.g)(l.c,{id:"table.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:_})))}},drLk:function(t,n,e){"use strict";function r(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){function u(t){r(c,o,i,u,a,"next",t)}function a(t){r(c,o,i,u,a,"throw",t)}var c=t.apply(n,e);u(void 0)}))}}e.d(n,"h",(function(){return s})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return f})),e.d(n,"f",(function(){return b})),e.d(n,"e",(function(){return h})),e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return g})),e.d(n,"g",(function(){return v}));var i,u=e("czhI"),a=e.n(u),c=function(){var t=o((function*(){yield a.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((function(t){i={sha:t.data.sha,date:t.data.commit.author.date}})).catch((function(){i={sha:"master"}})),a.a.defaults.baseURL="https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/".concat(i.sha,"/api/v0")}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=o((function*(t){return void 0===i&&(yield c()),a.a.get(t)}));return function(n){return t.apply(this,arguments)}}(),s=function(t){return l("/vtubers/".concat(t,".json"))},d=function(t){return l("/groups/".concat(t,"/vtubers.json"))},f=function(){return l("/groups.json")},b=function(t){return l("/trending-vtubers/".concat(t,".json"))},h=function(t){return l("/growing-vtubers/".concat(t,".json"))},p=function(t){return l("/debut-vtubers/".concat(t,".json"))},g=function(t){return l("/graduate-vtubers/".concat(t,".json"))},v=function(t){return l("/trending-videos/".concat(t,".json"))}},qO1o:function(t,n,e){"use strict";var r=e("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";n.a=function(t){return Object(r.g)("div",{class:o},t.children,Object(r.g)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},uZiY:function(t,n){"use strict";n.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,n,e){"use strict";var r=e("hosL"),o=e("qO1o"),i="questionMark__RT3wD";n.a=function(t){return Object(r.g)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.g)("img",{class:i}))}}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.b5019.js.map