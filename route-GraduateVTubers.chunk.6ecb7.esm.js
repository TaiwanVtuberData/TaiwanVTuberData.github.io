(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+IGI":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.graduateDate"},"Graduation Date"),selector:t=>t.graduateDate})},"49Dv":function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return i}));var n=r("5Sdp"),o=r("8r9F");const c=t=>null==t?{hasDebutInfo:!1}:i(t),i=t=>({hasDebutInfo:!0,debutDate:t,isToday:t===n.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,n.a),n.b)<30})},"4RMJ":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return u}));var n=r("qjhZ");const o=(t,e)=>{const r=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return r||o?o?r?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(n.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},c=(t,e)=>{const r=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return r||o?o?r?t.TwitchFollower&&e.TwitchFollower?-1*Object(n.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},i=(t,e)=>{var r,o,c,i;const a=(null!==(r=Object(n.b)(t.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(o=Object(n.b)(t.TwitchFollower))&&void 0!==o?o:0),u=(null!==(c=Object(n.b)(e.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(i=Object(n.b)(e.TwitchFollower))&&void 0!==i?i:0);return a>u?1:u>a?-1:0},a=(t,e)=>-1*i(t,e),u=t=>{switch(t){case"YouTube+Twitch":return a;case"YouTube":return o;case"Twitch":return c}}},"5Sdp":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a}));var n=r("8r9F"),o=r("Dy4S");const c=Object(o.b)(void 0,8),i=Object(n.d)(new Date,c),a=Object(n.g)(i,c)},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("CGiE");const i=()=>({name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:t=>Object(n.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"7Asn":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("Wcfx");const i=()=>({name:Object(n.h)(o.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(n.h)("a",{href:Object(c.b)({type:"group",name:t.group})},t.group):null})},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),o=r("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",a="TwitchPurple__qQQlw";e.a=t=>{const e=t=>Object(n.h)("span",{class:`${c} ${i}`},Object(n.h)(o.a,{countType:t})),r=t=>Object(n.h)("span",{class:`${c} ${a}`},Object(n.h)(o.a,{countType:t}));return Object(n.h)(n.Fragment,null,Object(n.h)((t=>t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:c}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null),t))}},"8et+":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return u}));var i=r("5Sdp"),a=r("sPVG");const u=t=>o(o({},Object(a.a)(t)),{},{graduateDate:t.graduateDate,isToday:t.graduateDate===i.c})},AafO:function(t,e,r){"use strict";r.r(e),function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r("drLk"),u=r("hosL"),l=r("OhSV"),s=r("QRet"),b=r("ENxA"),d=r("y7vS"),h=r("L9y4"),f=r("TToT"),p=r("+IGI"),O=r("7Asn"),j=r("69ZN"),y=r("JY+X"),v=r("sKFU"),g=r("HSXE"),w=r("LftB"),T=r("MJ1U"),m=r("4RMJ"),S=r("8et+"),D=r("uZiY"),P=r("L4T+"),L=r("Wfbs");e.default=e=>{document.title=`${e.dictionary.header.graduateVTubers} | ${e.dictionary.header.title}`;const r=[c(c({},Object(p.a)()),{},{sortable:!0}),Object(j.a)(),c(c({},Object(g.a)()),{},{sortable:!0,sortFunction:m.b}),Object(v.a)(),Object(O.a)(),Object(y.a)()],[o,i]=Object(s.l)([]),[Y,F]=Object(s.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null,graduateDate:null}),x=o.filter((t=>Object(P.a)(t,Y))),C=Object(s.i)((()=>{const t=new Map([["name",e.dictionary.table.searchByDisplayName],["YouTubeId",e.dictionary.table.searchByYouTubeId],["TwitchId",e.dictionary.table.searchByTwitchId],["group",e.dictionary.table.searchByGroup],["nationality",e.dictionary.table.searchByNationality],["graduateDate",e.dictionary.table.searchByDate]]);return Object(u.h)("div",{class:D.a.searchBarGroup},Object(u.h)(L.a,{filterModel:Y,fieldPlaceHolderMappings:t,openSearchText:e.dictionary.text.openSearch,closeSearchText:e.dictionary.text.closeSearch,onChange:t=>{F(t)}}))}),[Y,e.dictionary]),[_,V]=Object(s.l)(!0);return Object(s.d)((()=>{(async()=>{await a.c("recent").then((t=>{i(t.data.VTubers.map((t=>t)).sort(((t,e)=>e.graduateDate.localeCompare(t.graduateDate))).map((t=>Object(S.a)(t)))),V(!1)}))})()}),[]),Object(u.h)(t,null,Object(u.h)("h1",null,Object(u.h)(l.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(T.a)(),Object(u.h)(d.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(u.h)(b.b,n({},w.a,{columns:r,data:x,conditionalRowStyles:h.a.concat(f.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(u.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:_,subHeader:!0,subHeaderComponent:C})))}}.call(this,r("hosL").Fragment)},CGiE:function(t,e,r){"use strict";var n=r("hosL"),o=r("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",a="nameFlex__WFOO9";e.a=t=>Object(n.h)("div",{class:c},Object(n.h)("div",{class:i},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:a},t.name))},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i}));const n=t=>t>0?`+${t}`:t<0?`${t}`:"0",o=t=>(100*t).toFixed(2),c=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)} (${o(t.percentage)}%)`;case"full":return`${n(t.diff)} (${o(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${n(t.diff)}`;case"full":return`${n(t.diff)}`}},i=(t,e)=>{if(void 0!==t){const e=parseInt(t,10);if(!1===isNaN(e))return e}return e}},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("7DLW");const i=()=>({name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(n.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})})},"JY+X":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV");const c=()=>({name:Object(n.h)(o.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},"L4T+":function(t,e,r){"use strict";function n(t,e){return!Object.entries(e).map((e=>{const r=t[e[0]],n=e[1];return null===n||null!=r&&""!==r&&r.toLowerCase().includes(n.toLowerCase())})).some((t=>!1===t))}r.d(e,"a",(function(){return n}))},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),o="container__1lsi6",c="textField__bDpXR",i="button__maFzS";e.a=t=>{var e;return Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:c,placeholder:t.placeholderText,value:null!==(e=t.filterText)&&void 0!==e?e:"",onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut,style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("GKGp");const i=()=>{const e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},TToT:function(t,e){"use strict";e.a=[{when:t=>!0===t.debutInfo.hasDebutInfo&&t.debutInfo.isToday,style:{color:"mediumblue"}}]},Wfbs:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=r("hosL"),a=r("QRet"),u=r("L9Wd"),l="floating__uhu4Y",s="floatingHidden__mvSUQ",b="floatingShowing__nwzm5";e.a=function(t){const[e,r]=Object(a.l)(!1),[n,c]=Object(a.l)(t.filterModel),d=e=>{{const r=e,a=e=>{const i=function(t){if(null==t)return null;const e=t.trim();return""===e?null:e}(e);c(o(o({},n),{},{[r]:i})),function(e){null!=t.onChange&&t.onChange(e)}(o(o({},n),{},{[r]:i}))};return Object(i.h)(u.a,{key:e,placeholderText:t.fieldPlaceHolderMappings.get(r),filterText:n[r],onFilter:t=>a(t.target.value),onClear:()=>a(null)})}},h=Object.keys(t.filterModel).map((t=>d(t)));return Object(i.h)("div",null,Object(i.h)((()=>Object(i.h)("input",{type:"button",value:!0===e?t.closeSearchText:t.openSearchText,onClick:()=>r(!e)})),null),!0===e?Object(i.h)("div",{class:e?`${l} ${b}`:`${l} ${s}`},h):null)}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=t=>Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))},qjhZ:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));const n=t=>{if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=(t,e)=>{switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),c=r("0yJK");const i=()=>({name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(n.h)(c.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("49Dv");const o=t=>{var e,r,o,c;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(c=t.Twitch)||void 0===c?void 0:c.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(n.b)(t.debutDate)}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),c="questionMark__RT3wD";e.a=t=>Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.6ecb7.esm.js.map