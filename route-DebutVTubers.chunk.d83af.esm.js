(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4RMJ":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r("qjhZ");const o=(e,t)=>{const r=void 0!==e.YouTubeSubscriber,o=void 0!==t.YouTubeSubscriber;return r||o?o?r?e.YouTubeSubscriber&&t.YouTubeSubscriber?-1*Object(n.a)(e.YouTubeSubscriber,t.YouTubeSubscriber):0:1:-1:0},c=(e,t)=>{const r=void 0!==e.TwitchFollower,o=void 0!==t.TwitchFollower;return r||o?o?r?e.TwitchFollower&&t.TwitchFollower?-1*Object(n.a)(e.TwitchFollower,t.TwitchFollower):0:1:-1:0},i=(e,t)=>{var r,o,c,i;const a=(null!==(r=Object(n.b)(e.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(o=Object(n.b)(e.TwitchFollower))&&void 0!==o?o:0),u=(null!==(c=Object(n.b)(t.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(i=Object(n.b)(t.TwitchFollower))&&void 0!==i?i:0);return a>u?1:u>a?-1:0},a=(e,t)=>-1*i(e,t),u=e=>{switch(e){case"YouTube+Twitch":return a;case"YouTube":return o;case"Twitch":return c}}},"69ZN":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("CGiE");const i=()=>({name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:e=>Object(n.h)(c.a,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name})})},"7Asn":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("hosL"),o=r("OhSV"),c=r("Wcfx"),i=r("uZiY");const a=()=>({name:Object(n.h)(o.c,{id:"table.group"},"Group"),cell:e=>void 0!==e.group?Object(n.h)("a",{class:i.a.groupLink,href:Object(c.b)({type:"group",name:e.group})},e.group):null})},"7DLW":function(e,t,r){"use strict";var n=r("hosL"),o=r("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",a="TwitchPurple__qQQlw";t.a=e=>{const t=e=>Object(n.h)("span",{class:`${c} ${i}`},Object(n.h)(o.a,{countType:e})),r=e=>Object(n.h)("span",{class:`${c} ${a}`},Object(n.h)(o.a,{countType:e}));return Object(n.h)(n.Fragment,null,Object(n.h)((e=>e.YouTubeCount&&e.TwitchCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount),Object(n.h)("span",{class:c}," + "),r(e.TwitchCount)):e.YouTubeCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount)):e.TwitchCount?Object(n.h)(n.Fragment,null,r(e.TwitchCount)):null),e))}},CGiE:function(e,t,r){"use strict";var n=r("hosL"),o=r("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9";t.a=e=>Object(n.h)("div",{class:c},Object(n.h)("div",{class:i},Object(n.h)(o.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(n.h)("span",{class:a},e.name))},HSXE:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("7DLW");const i=()=>({name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:e=>Object(n.h)(c.a,{YouTubeCount:e.YouTubeSubscriber,TwitchCount:e.TwitchFollower})})},"JY+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,r){"use strict";var n=r("hosL"),o="container__1lsi6",c="textField__bDpXR",i="button__maFzS";t.a=e=>Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:c,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(n.h)("button",{type:"button",class:i,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var n=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("GKGp");const i=()=>{const t=Object(c.a)();switch(t){case"TW":case"HK":case"MY":return Object(n.h)(e,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:`nationalityTitle.${t}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},TToT:function(e,t){"use strict";t.a=[{when:e=>e.isToday,style:{color:"mediumblue"}}]},YRVu:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:e=>e.debutDate})},"qM+f":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}));var i=r("sPVG");const a=(e,t)=>o(o({},Object(i.a)(e)),{},{debutDate:e.debutDate,isToday:e.debutDate===t})},qO1o:function(e,t,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";t.a=e=>Object(n.h)("div",{class:o},e.children,Object(n.h)("span",{class:c,style:{width:e.width,fontSize:e.fontSize}},e.text))},qjhZ:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const n=e=>{if(void 0===e)return null;switch(e.tag){case"has":return e.count;case"hidden":case"no":return null}},o=(e,t)=>{switch(e.tag){case"has":switch(t.tag){case"has":return e.count-t.count;case"hidden":case"no":return 1}break;case"hidden":switch(t.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(t.tag){case"has":case"hidden":return-1;case"no":return 0}}}},qjj9:function(e,t,r){"use strict";r.r(t),function(e){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r("drLk"),u=r("hosL"),s=r("OhSV"),l=r("QRet"),b=r("ENxA"),h=r("y7vS"),d=r("L9Wd"),O=r("L9y4"),p=r("TToT"),j=r("7Asn"),f=r("69ZN"),w=r("JY+X"),T=r("sKFU"),v=r("HSXE"),y=r("8r9F"),g=r("LftB"),m=r("MJ1U"),S=r("4RMJ"),L=r("qM+f"),F=r("uZiY"),C=r("YRVu");t.default=t=>{document.title=`${t.dictionary.header.debutVTubers} | ${t.dictionary.header.title}`;const r=[c(c({},Object(C.a)()),{},{sortable:!0}),Object(f.a)(),c(c({},Object(v.a)()),{},{sortable:!0,sortFunction:S.b}),Object(T.a)(),Object(j.a)(),Object(w.a)()],[o,i]=Object(l.k)([]),[Y,D]=Object(l.k)(""),[V,x]=Object(l.k)(""),[P,_]=Object(l.k)(""),[k,G]=Object(l.k)(!1),R=o.filter((e=>e.debutDate&&e.debutDate.toLowerCase().includes(Y.toLowerCase()))).filter((e=>e.name&&e.name.toLowerCase().includes(V.toLowerCase()))).filter((e=>""===P||void 0!==e.group&&e.group.toLowerCase().includes(P.toLowerCase()))),U=Object(l.h)((()=>Object(u.h)("div",{class:F.a.searchBarGroup},Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:e=>D(e.target.value),onClear:()=>{Y&&(G(!k),D(""))},filterText:Y}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:e=>x(e.target.value),onClear:()=>{V&&(G(!k),x(""))},filterText:V}),Object(u.h)(d.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:e=>_(e.target.value),onClear:()=>{P&&(G(!k),_(""))},filterText:P}))),[Y,V,P,k,t.dictionary]),[q,z]=Object(l.k)(!0);return Object(l.d)((()=>{(async()=>{const e=Object(y.c)(new Date,8);await a.b("recent").then((t=>{i(t.data.VTubers.map((e=>e)).sort(((e,t)=>t.debutDate.localeCompare(e.debutDate))).map((t=>Object(L.a)(t,e)))),z(!1)}))})()}),[]),Object(u.h)(e,null,Object(u.h)("h1",null,Object(u.h)(s.c,{id:"header.debutVTubers"},"Debut VTubers"),Object(m.a)(),Object(u.h)(h.a,{width:"300px",fontSize:"13px",text:Object(u.h)(s.c,{id:"toolTip.debutVTubers"},"tooltip text")})),Object(u.h)(b.b,n({},g.a,{columns:r,data:R,conditionalRowStyles:O.a.concat(p.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(u.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:q,subHeader:!0,subHeaderComponent:U})))}}.call(this,r("hosL").Fragment)},sKFU:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("0yJK");const i=()=>({name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(n.h)(c.a,{popularVideo:e.popularVideo}):null})},sPVG:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>{var t,r,n,o;return{id:e.id,activity:e.activity,name:e.name,imgUrl:e.imgUrl,YouTubeId:null===(t=e.YouTube)||void 0===t?void 0:t.id,YouTubeSubscriber:null===(r=e.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(n=e.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(o=e.Twitch)||void 0===o?void 0:o.follower,popularVideo:e.popularVideo,group:e.group,nationality:e.nationality}}},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(e,t,r){"use strict";var n=r("hosL"),o=r("qO1o"),c="questionMark__RT3wD";t.a=e=>Object(n.h)(o.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(n.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-DebutVTubers.chunk.d83af.esm.js.map