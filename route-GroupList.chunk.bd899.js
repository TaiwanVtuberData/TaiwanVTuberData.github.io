(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Ox3":function(t,n,e){"use strict";var r=e("hosL"),o="profileImg__DvgtD";n.a=function(t){var n;return Object(r.g)("img",{class:o,src:null!==(n=t.imgUrl)&&void 0!==n?n:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},L9Wd:function(t,n,e){"use strict";var r=e("hosL"),o="textField__bDpXR",i="button__maFzS";n.a=function(t){return Object(r.g)(r.b,null,Object(r.g)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.g)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,n){"use strict";n.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,n,e){"use strict";var r=e("L9y4");n.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},Px4b:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}function o(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.r(n);var u=e("hosL"),c=e("QRet"),l=e("OhSV"),s=e("ENxA"),b=e("jUMG"),d=e("drLk"),f=e("L9Wd"),p=e("LftB"),g=(e("GFNa"),"profileGrid__glJEL"),m=e("uZiY"),h=e("+Ox3"),v="tooltip__fpzpj",y="tooltipText__hC64z",j=function(t){return Object(u.g)(u.b,null,Object(u.g)("div",{class:v},Object(h.a)({imgUrl:t.VTuber.imgUrl}),Object(u.g)("span",{class:y},t.VTuber.name)))},O=function(t,n){return t.name.localeCompare(n.name)};n.default=function(t){document.title="".concat(t.dictionary.header.groupList," | ").concat(t.dictionary.header.title);var n=[{name:Object(u.g)(l.b,{id:"table.displayName"},"Name"),width:"10%",wrap:!0,sortable:!0,sortFunction:O,cell:function(t){return Object(u.g)("a",{class:m.a.groupLink,href:"".concat(b.a,"/group/").concat(t.name)},t.name)}},{name:Object(u.g)(l.b,{id:"table.popularity"},"Popularity"),width:"15%",right:!0,sortable:!0,selector:function(t){return t.popularity}},{name:Object(u.g)(l.b,{id:"table.averageSubscriberCount"},"Average Subscribers"),width:"15%",right:!0,sortable:!0,selector:function(t){return t.averageSubscriberCount}},{name:Object(u.g)(l.b,{id:"table.totalSubscriberCount"},"Total Subscribers"),width:"15%",right:!0,sortable:!0,selector:function(t){return t.totalSubscriberCount}},{name:Object(u.g)(l.b,{id:"table.memberCount"},"Member Count"),width:"10%",right:!0,sortable:!0,selector:function(t){return t.memberCount}},{name:Object(u.g)(l.b,{id:"table.memberList"},"Members"),width:"25%",cell:function(t){return t.memberList}}],e=i(Object(c.j)([]),2),a=e[0],h=e[1],v=i(Object(c.j)(""),2),y=v[0],A=v[1],w=i(Object(c.j)(!1),2),C=w[0],L=w[1],x=a.filter((function(t){return void 0===t.name||t.name.toLowerCase().includes(y.toLowerCase())})),S=Object(c.g)((function(){return Object(u.g)(u.b,null,Object(u.g)(f.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return A(t.target.value)},onClear:function(){y&&(L(!C),A(""))},filterText:y}))}),[y,C,t.dictionary]),T=function(t,n){var e,r,o,i;return t+(null!==(e=null===(r=n.YouTube)||void 0===r?void 0:r.subscriberCount)&&void 0!==e?e:0)+(null!==(o=null===(i=n.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0)},k=i(Object(c.j)(!0),2),_=k[0],P=k[1],B=function(){var t,n=(t=function*(){yield d.b().then((function(t){h(t.data.groups.map((function(t){return function(t){return{id:t.id,name:t.name,popularity:t.popularity,averageSubscriberCount:0!==t.members.length?Math.round(t.members.reduce(T,0)/t.members.length):0,totalSubscriberCount:t.members.reduce(T,0),memberCount:t.members.length,memberList:Object(u.g)("div",{class:g},t.members.map((function(t){return Object(u.g)(j,{key:t.id,VTuber:t})})))}}(t)}))),P(!1)}))},function(){var n=this,e=arguments;return new Promise((function(r,i){function a(t){o(c,r,i,a,u,"next",t)}function u(t){o(c,r,i,a,u,"throw",t)}var c=t.apply(n,e);a(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(c.d)((function(){B()}),[]),Object(u.g)(u.b,null,Object(u.g)("h1",null,Object(u.g)(l.b,{id:"header.groupList"},"Group List")),Object(u.g)(s.a,r({},p.a,{columns:n,data:x,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:t.dictionary.table.loading,progressPending:_,subHeader:!0,subHeaderComponent:S})))}},drLk:function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?n(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}var c=t.apply(n,e);a(void 0)}))}}e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return d}));var i,a=e("czhI"),u=e.n(a),c=function(){var t=o((function*(){yield u.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((function(t){i={sha:t.data.sha,date:t.data.commit.author.date}})).catch((function(){i={sha:"master"}})),u.a.defaults.baseURL="https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/".concat(i.sha,"/api/v0")}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=o((function*(t){return void 0===i&&(yield c()),u.a.get(t)}));return function(n){return t.apply(this,arguments)}}(),s=function(){return l("/vtubers.json")},b=function(t){return l("/groups/".concat(t,"/vtubers.json"))},d=function(){return l("/groups.json")}},uZiY:function(t,n){"use strict";n.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ=="}}}]);
//# sourceMappingURL=route-GroupList.chunk.bd899.js.map