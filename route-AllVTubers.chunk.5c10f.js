(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+Ox3":function(t,n,e){"use strict";var r=e("hosL"),o="profileImg__DvgtD";n.a=function(t){var n;return Object(r.g)("img",{class:o,src:null!==(n=t.imgUrl)&&void 0!==n?n:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,n,e){"use strict";var r=e("hosL"),o="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";n.a=function(t){var n=function(t,n,e){return void 0===e?null:Object(r.g)("a",{href:n+e,target:"_blank",rel:"noopener noreferrer"},Object(r.g)("img",{class:t}))};return Object(r.g)("div",null,n(o,"https://www.youtube.com/channel/",t.YouTubeId),n(i,"https://www.twitch.tv/",t.TwitchId))}},"9JN+":function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}function o(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.r(n);var u=e("hosL"),c=e("QRet"),l=e("OhSV"),s=e("ENxA"),d=e("jUMG"),b=e("2G8U"),f=e("+Ox3"),h=e("L9Wd"),p=e("drLk"),g=e("LftB"),v=e("DS9q"),y=(e("GFNa"),e("uZiY")),w=e("L9y4");n.default=function(t){document.title="".concat(t.dictionary.header.allVTubers," | ").concat(t.dictionary.header.title);var n=75,e=[{name:"",width:"".concat(n,"px"),cell:function(t){return t.profileImg}},{name:Object(u.g)(l.b,{id:"table.displayName"},"Name"),width:"calc(".concat(n,"px-25%)"),wrap:!0,selector:function(t){return t.name}},{name:Object(u.g)(l.b,{id:"table.links"},"Links"),width:"calc(".concat(n,"px-10%)"),cell:function(t){return t.channelLinks}},{name:Object(u.g)(l.b,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),width:"calc(".concat(n,"px-15%)"),cell:function(t){var n;return t.hasYouTube?null!==(n=t.YouTubeSubscriberCount)&&void 0!==n?n:Object(u.g)(l.b,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:v.a},{name:Object(u.g)(l.b,{id:"table.TwitchFollowerCount"},"Twitch Followers"),width:"calc(".concat(n,"px-15%)"),selector:function(t){return t.hasTwitch?t.TwitchFollowerCount:""},right:!0,sortable:!0},{name:Object(u.g)(l.b,{id:"table.group"},"Group"),width:"calc(".concat(n,"px-25%)"),wrap:!0,cell:function(t){return void 0!==t.group?Object(u.g)("a",{class:y.a.groupLink,href:"".concat(d.a,"/group/").concat(t.group)},t.group):null}},{name:Object(u.g)(l.b,{id:"table.nationality"},"Nationality"),width:"calc(".concat(n,"px-10%)"),selector:function(t){var n;return null!==(n=t.nationality)&&void 0!==n?n:""}}],a=i(Object(c.j)([]),2),m=a[0],j=a[1],T=i(Object(c.j)(""),2),O=T[0],A=T[1],C=i(Object(c.j)(""),2),L=C[0],x=C[1],Y=i(Object(c.j)(!1),2),k=Y[0],S=Y[1],I=m.filter((function(t){return t.name&&t.name.toLowerCase().includes(O.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(L.toLowerCase())})),F=Object(c.g)((function(){return Object(u.g)(u.b,null,Object(u.g)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return A(t.target.value)},onClear:function(){O&&(S(!k),A(""))},filterText:O}),Object(u.g)(h.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return x(t.target.value)},onClear:function(){L&&(S(!k),x(""))},filterText:L}))}),[O,L,k,t.dictionary]),D=i(Object(c.j)(!0),2),_=D[0],B=D[1],U=function(){var t,n=(t=function*(){yield p.c().then((function(t){j(t.data.VTubers.map((function(t){return function(t){var n,e,r,o,i;return{id:t.id,profileImg:Object(f.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(b.a)({YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,TwitchId:null===(e=t.Twitch)||void 0===e?void 0:e.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(r=t.YouTube)||void 0===r?void 0:r.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(o=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0,group:t.group,nationality:t.nationality,activity:t.activity}}(t)}))),B(!1)}))},function(){var n=this,e=arguments;return new Promise((function(r,i){function a(t){o(c,r,i,a,u,"next",t)}function u(t){o(c,r,i,a,u,"throw",t)}var c=t.apply(n,e);a(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(c.d)((function(){U()}),[]),Object(u.g)(u.b,null,Object(u.g)("h1",null,Object(u.g)(l.b,{id:"header.allVTubers"},"All VTubers")),Object(u.g)(s.a,r({},g.a,{columns:e,data:I,conditionalRowStyles:w.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:t.dictionary.table.loading,progressPending:_,subHeader:!0,subHeaderComponent:F})))}},DS9q:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t,n){var e=t.hasYouTube,r=n.hasYouTube;if(!e&&!r)return 0;if(!r)return 1;if(!e)return-1;var o=t.YouTubeSubscriberCount,i=n.YouTubeSubscriberCount;return void 0===o&&void 0===i?0:void 0===i?1:void 0===o?-1:o>i?1:i>o?-1:0}},L9Wd:function(t,n,e){"use strict";var r=e("hosL"),o="textField__bDpXR",i="button__maFzS";n.a=function(t){return Object(r.g)(r.b,null,Object(r.g)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,n){"use strict";n.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,n,e){"use strict";var r=e("L9y4");n.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},drLk:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}var c=t.apply(n,e);a(void 0)}))}}e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return b}));var i,a=e("czhI"),u=e.n(a),c=function(){var t=o((function*(){yield u.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((function(t){i={sha:t.data.sha,date:t.data.commit.author.date}})).catch((function(){i={sha:"master"}})),u.a.defaults.baseURL="https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/".concat(i.sha,"/api/v0")}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=o((function*(t){return void 0===i&&(yield c()),u.a.get(t)}));return function(n){return t.apply(this,arguments)}}(),s=function(){return l("/vtubers.json")},d=function(t){return l("/groups/".concat(t,"/vtubers.json"))},b=function(){return l("/groups.json")}},uZiY:function(t,n){"use strict";n.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ=="}}}]);
//# sourceMappingURL=route-AllVTubers.chunk.5c10f.js.map