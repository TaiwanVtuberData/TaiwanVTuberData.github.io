(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0KPN":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("hosL"),n=r("OhSV"),i=r("wnwi");const o=()=>({name:Object(a.h)(n.c,{id:"table.video"},"Video"),cell:e=>Object(i.a)({thumbnailUrl:e.thumbnailUrl,videoUrl:e.videoUrl})})},CGiE:function(e,t,r){"use strict";var a=r("hosL"),n=r("+Ox3"),i="container__vr1DG",o="profileImageFlex__4VERG",c="nameFlex__WFOO9";t.a=e=>Object(a.h)("div",{class:i},Object(a.h)("div",{class:o},Object(a.h)(n.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(a.h)("span",{class:c},e.name))},L9Wd:function(e,t,r){"use strict";var a=r("hosL"),n="container__1lsi6",i="textField__bDpXR",o="button__maFzS";t.a=e=>Object(a.h)("div",{class:n},Object(a.h)("input",{type:"text",class:i,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(a.h)("button",{type:"button",class:o,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var a=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:a.a})},MJ1U:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o}));var a=r("hosL"),n=r("OhSV"),i=r("GKGp");const o=()=>{const t=Object(i.a)();switch(t){case"TW":case"HK":case"MY":return Object(a.h)(e,null," ","(",Object(a.h)(n.c,{id:"text.onlyShowing"},"only showing "),Object(a.h)(n.c,{id:`nationalityTitle.${t}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},h5Od:function(e,t,r){"use strict";r.r(t),function(e){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r("drLk"),l=r("hosL"),s=r("OhSV"),u=r("QRet"),d=r("ENxA"),b=r("CGiE"),h=r("L9Wd"),O=r("0KPN"),p=r("8r9F"),m=r("LftB"),g=r("MJ1U"),j=r("v6a3"),f=r("uZiY");t.default=t=>{document.title=`${t.dictionary.header.livestreaming} | ${t.dictionary.header.title}`;const r=[{name:Object(l.h)(s.c,{id:"table.displayName"},"Name"),cell:e=>Object(l.h)(b.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl,name:e.name})},i(i({},Object(O.a)()),{},{width:"200px"}),{name:Object(l.h)(s.c,{id:"table.startTime"},"Start Time"),selector:e=>Object(p.b)(e.startTime),sortable:!0,wrap:!0},{name:Object(l.h)(s.c,{id:"table.title"},"Title"),selector:e=>{var t;return null!==(t=e.title)&&void 0!==t?t:""},wrap:!0,hide:d.a.SM}],[n,o]=Object(u.k)([]),[v,y]=Object(u.k)(""),[w,T]=Object(u.k)(""),[x,L]=Object(u.k)(!1),U=n.filter((e=>e.name&&e.name.toLowerCase().includes(v.toLowerCase()))).filter((e=>void 0===e.title||e.title.toLowerCase().includes(w.toLowerCase()))),C=Object(u.h)((()=>Object(l.h)("div",{class:f.a.searchBarGroup},Object(l.h)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:e=>y(e.target.value),onClear:()=>{v&&(L(!x),y(""))},filterText:v}),Object(l.h)(h.a,{placeholderText:t.dictionary.table.searchByTitle,onFilter:e=>T(e.target.value),onClear:()=>{w&&(L(!x),T(""))},filterText:w}))),[v,w,x,t.dictionary]),[_,k]=Object(u.k)(!0);Object(u.d)((()=>{(async()=>{await c.g("all").then((e=>{const t=e.data.livestreams.map((e=>e)).map(((e,t)=>Object(j.a)(e,t))).sort(((e,t)=>e.startTime.getTime()-t.startTime.getTime()));o(t),k(!1),setTimeout((()=>{var e;const r=Object(p.a)(t,new Date);null===(e=document.getElementById(`row-${Math.max(0,r-1)}`))||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}))})()}),[]);return Object(l.h)(e,null,Object(l.h)("h1",null,Object(l.h)(s.c,{id:"header.livestreaming"},"Streaming Now"),Object(g.a)()),Object(l.h)(d.b,a({},m.a,{columns:r,data:U,customStyles:{rows:{style:{height:"120px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,progressComponent:Object(l.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:_,subHeader:!0,subHeaderComponent:C})))}}.call(this,r("hosL").Fragment)},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},v6a3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a=(e,t)=>({id:t,VTuberId:e.id,name:e.name,imgUrl:e.imgUrl,title:e.title,thumbnailUrl:e.thumbnailUrl,videoUrl:e.videoUrl,startTime:new Date(e.startTime)})},wnwi:function(e,t,r){"use strict";var a=r("hosL"),n="thumbnail__BdvoG";t.a=e=>Object(a.h)("a",{href:e.videoUrl,target:"_blank",rel:"noopener noreferrer"},Object(a.h)("img",{class:n,src:e.thumbnailUrl,loading:"lazy"}))}}]);
//# sourceMappingURL=route-Livestreams.chunk.fbdfb.esm.js.map