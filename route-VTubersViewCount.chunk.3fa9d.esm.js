(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4BB4":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));const a={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var a=o("hosL"),n=o("OhSV"),r=o("+Ox3"),i="container__vr1DG",c="profileImageFlex__4VERG",u="nameFlex__WFOO9";var s=t=>Object(a.h)("div",{class:i},Object(a.h)("div",{class:c},Object(a.h)(r.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(a.h)("span",{class:u},t.name));const l=()=>({name:Object(a.h)(n.c,{id:"table.displayName"},"Name"),cell:t=>Object(a.h)(s,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"7Asn":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o("hosL"),n=o("OhSV"),r=o("Wcfx"),i=o("uZiY");const c=()=>({name:Object(a.h)(n.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(a.h)("a",{class:i.a.groupLink,href:Object(r.b)({type:"group",name:t.group})},t.group):null})},Dy4S:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));const a=t=>t>0?`+${t}`:t<0?`${t}`:"0",n=t=>(100*t).toFixed(2),r=(t,e)=>{if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${a(t.diff)} (${n(t.percentage)}%)`;case"full":return`${a(t.diff)} (${n(t.percentage)}%)`}switch(t.recordType){case"none":return e.noRecord;case"partial":return`${e.atLeast} ${a(t.diff)}`;case"full":return`${a(t.diff)}`}}},HP4b:function(t,e,o){"use strict";var a=o("hosL"),n="tipText__4DHD3",r="dropDown__6WU99";e.a=function(t){return Object(a.h)("div",null,Object(a.h)("span",{class:n},t.tipText),Object(a.h)("select",{class:r,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((t=>Object(a.h)("option",{key:t.value,value:t.value},t.option))):null))}},"JY+X":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o("hosL"),n=o("OhSV");const r=()=>({name:Object(a.h)(n.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},L9Wd:function(t,e,o){"use strict";var a=o("hosL"),n="container__1lsi6",r="textField__bDpXR",i="button__maFzS";e.a=t=>Object(a.h)("div",{class:n},Object(a.h)("input",{type:"text",class:r,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(a.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,o){"use strict";var a=o("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:a.a})},MJ1U:function(t,e,o){"use strict";(function(t){o.d(e,"a",(function(){return i}));var a=o("hosL"),n=o("OhSV"),r=o("GKGp");const i=()=>{const e=Object(r.a)();switch(e){case"TW":case"HK":case"MY":return Object(a.h)(t,null," ","(",Object(a.h)(n.c,{id:"text.onlyShowing"},"only showing "),Object(a.h)(n.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,o("hosL").Fragment)},OSfN:function(t,e,o){"use strict";o.r(e),function(t){function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},a.apply(this,arguments)}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=o("drLk"),u=o("hosL"),s=o("OhSV"),l=o("QRet"),d=o("ENxA"),b=o("HP4b"),h=o("L9Wd"),p=o("4BB4"),O=o("7Asn"),f=o("69ZN"),y=o("JY+X"),w=o("sKFU"),g=o("pmH6"),j=o("LftB"),v=o("MJ1U"),m=o("Dy4S"),V=o("nnvw"),T=o("Wcfx"),x=o("uZiY"),C=o("L9y4");e.default=e=>{document.title=`${e.dictionary.header.VTubersViewCount} | ${e.dictionary.header.title}`;const o=[r(r({},Object(g.a)()),{},{sortable:!0,width:"40px"}),r(r({},Object(f.a)()),{},{width:"200px"}),{name:Object(u.h)(s.c,{id:"table.YouTubeTotalViewCount"},"YouTube Total View Count"),selector:t=>t.totalViewCount,compact:!0,sortable:!0},{name:Object(u.h)(s.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),cell:t=>Object(m.a)(t._7DaysGrowth,e.dictionary.table),compact:!0,right:!0},{name:Object(u.h)(s.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),cell:t=>Object(m.a)(t._30DaysGrowth,e.dictionary.table),compact:!0,right:!0},r(r({},Object(w.a)()),{},{width:"100px"}),r(r({},Object(O.a)()),{},{width:"150px"}),r(r({},Object(y.a)()),{},{width:"125px"})],[n,i]=Object(l.k)([]),[D,_]=Object(l.k)(""),[L,G]=Object(l.k)(""),[k,S]=Object(l.k)(!1),Y=n.filter((t=>t.name&&t.name.toLowerCase().includes(D.toLowerCase()))).filter((t=>""===L||void 0!==t.group&&t.group.toLowerCase().includes(L.toLowerCase()))),F=Object(l.h)((()=>{const t=[{option:Object(u.h)(s.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),value:"7-days"},{option:Object(u.h)(s.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),value:"30-days"}];return Object(u.h)("div",{class:x.a.searchBarGroup},Object(u.h)(b.a,{tipText:e.dictionary.table.sortingMethod,value:e.modifier,optionValue:t,onChange:t=>Object(T.c)({type:"vtubers-view-count",viewCountSortOrder:t.target.value})}),Object(u.h)(h.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:t=>_(t.target.value),onClear:()=>{D&&(S(!k),_(""))},filterText:D}),Object(u.h)(h.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:t=>G(t.target.value),onClear:()=>{L&&(S(!k),G(""))},filterText:L}))}),[D,L,k,e.modifier,e.dictionary]),[P,B]=Object(l.k)(!0),U=(t,e)=>e.YouTube._7DaysGrowth.diff-t.YouTube._7DaysGrowth.diff,$=(t,e)=>e.YouTube._30DaysGrowth.diff-t.YouTube._30DaysGrowth.diff,R=async()=>{await c.l({sortBy:e.modifier,count:"100"}).then((t=>{i(t.data.VTubers.map((t=>t)).map((t=>t)).sort((t=>{switch(t){case"7-days":return U;case"30-days":return $}})(e.modifier)).map(((t,e)=>Object(V.a)(t,e+1)))),B(!1)}))};return Object(l.d)((()=>{R()}),[]),Object(u.h)(t,null,Object(u.h)("h1",null,Object(u.h)(s.c,{id:"header.VTubersViewCount"},"VTubers View Count Change"),Object(v.a)()),Object(u.h)(d.a,a({},j.a,{columns:o,data:Y,conditionalRowStyles:C.a,customStyles:p.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(u.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:P,subHeader:!0,subHeaderComponent:F})))}}.call(this,o("hosL").Fragment)},nnvw:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));const a=(t,e)=>{var o;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,totalViewCount:t.YouTube.totalViewCount,_7DaysGrowth:t.YouTube._7DaysGrowth,_30DaysGrowth:t.YouTube._30DaysGrowth,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,activity:t.activity,ranking:e}}},pmH6:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));const a=()=>({name:"#",selector:t=>t.ranking,wrap:!1})},sKFU:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var a=o("hosL"),n=o("OhSV"),r=o("0yJK");const i=()=>({name:Object(a.h)(n.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(a.h)(r.a,{popularVideo:t.popularVideo}):null})},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-VTubersViewCount.chunk.3fa9d.esm.js.map