(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4RMJ":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o("qjhZ");const c=(e,t)=>{const o=void 0!==e.YouTubeSubscriber,c=void 0!==t.YouTubeSubscriber;return o||c?c?o?e.YouTubeSubscriber&&t.YouTubeSubscriber?-1*Object(n.a)(e.YouTubeSubscriber,t.YouTubeSubscriber):0:1:-1:0},r=(e,t)=>{const o=void 0!==e.TwitchFollower,c=void 0!==t.TwitchFollower;return o||c?c?o?e.TwitchFollower&&t.TwitchFollower?-1*Object(n.a)(e.TwitchFollower,t.TwitchFollower):0:1:-1:0},a=(e,t)=>{var o,c,r,a;const u=(null!==(o=Object(n.b)(e.YouTubeSubscriber))&&void 0!==o?o:0)+(null!==(c=Object(n.b)(e.TwitchFollower))&&void 0!==c?c:0),i=(null!==(r=Object(n.b)(t.YouTubeSubscriber))&&void 0!==r?r:0)+(null!==(a=Object(n.b)(t.TwitchFollower))&&void 0!==a?a:0);return u>i?1:i>u?-1:0},u=(e,t)=>-1*a(e,t),i=e=>{switch(e){case"YouTube+Twitch":return u;case"YouTube":return c;case"Twitch":return r}}},"69ZN":function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o("hosL"),c=o("OhSV"),r=o("+Ox3"),a="container__vr1DG",u="profileImageFlex__4VERG",i="nameFlex__WFOO9";var l=e=>Object(n.h)("div",{class:a},Object(n.h)("div",{class:u},Object(n.h)(r.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(n.h)("span",{class:i},e.name));const s=()=>({name:Object(n.h)(c.c,{id:"table.displayName"},"Name"),cell:e=>Object(n.h)(l,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name})})},"7Asn":function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n=o("hosL"),c=o("OhSV"),r=o("Wcfx"),a=o("uZiY");const u=()=>({name:Object(n.h)(c.c,{id:"table.group"},"Group"),cell:e=>void 0!==e.group?Object(n.h)("a",{class:a.a.groupLink,href:Object(r.b)({type:"group",name:e.group})},e.group):null})},"7DLW":function(e,t,o){"use strict";var n=o("hosL"),c=(o("GFNa"),o("c9lt")),r="noWrap__BzT1O";t.a=e=>{const t=e=>Object(n.h)("span",{class:`${r} YouTubeRed`},Object(n.h)(c.a,{countType:e})),o=e=>Object(n.h)("span",{class:`${r} TwitchPurple`},Object(n.h)(c.a,{countType:e}));return Object(n.h)(n.Fragment,null,Object(n.h)((e=>e.YouTubeCount&&e.TwitchCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount),Object(n.h)("span",{class:r}," + "),o(e.TwitchCount)):e.YouTubeCount?Object(n.h)(n.Fragment,null,t(e.YouTubeCount)):e.TwitchCount?Object(n.h)(n.Fragment,null,o(e.TwitchCount)):null),e))}},"9JN+":function(e,t,o){"use strict";o.r(t),function(e){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n.apply(this,arguments)}var c=o("drLk"),r=o("hosL"),a=o("OhSV"),u=o("QRet"),i=o("ENxA"),l=o("HP4b"),s=o("L9Wd"),b=o("7Asn"),h=o("69ZN"),d=o("JY+X"),p=o("sKFU"),O=o("HSXE"),T=o("LftB"),w=o("MJ1U"),j=o("4RMJ"),v=o("sPVG"),g=o("uZiY"),f=o("L9y4");t.default=t=>{document.title=`${t.dictionary.header.allVTubers} | ${t.dictionary.header.title}`;const[o,y]=Object(u.k)("YouTube+Twitch"),m=[Object(h.a)(),Object(O.a)(),Object(p.a)(),Object(b.a)(),Object(d.a)()],[Y,F]=Object(u.k)([]),[C,L]=Object(u.k)(""),[V,S]=Object(u.k)(""),[x,k]=Object(u.k)(!1),_=Y.filter((e=>e.name&&e.name.toLowerCase().includes(C.toLowerCase()))).filter((e=>""===V||void 0!==e.group&&e.group.toLowerCase().includes(V.toLowerCase()))).sort(Object(j.a)(o)),U=Object(u.h)((()=>{const e=[{option:Object(r.h)(a.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),value:"YouTube+Twitch"},{option:Object(r.h)(a.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),value:"YouTube"},{option:Object(r.h)(a.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),value:"Twitch"}];return Object(r.h)("div",{class:g.a.searchBarGroup},Object(r.h)(l.a,{tipText:t.dictionary.table.sortingMethod,value:o,optionValue:e,onChange:e=>y(e.target.value)}),Object(r.h)(s.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:e=>L(e.target.value),onClear:()=>{C&&(k(!x),L(""))},filterText:C}),Object(r.h)(s.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:e=>S(e.target.value),onClear:()=>{V&&(k(!x),S(""))},filterText:V}))}),[C,V,x,t.dictionary]),[G,D]=Object(u.k)(!0);return Object(u.d)((()=>{(async()=>{await c.k("all").then((e=>{F(e.data.VTubers.map((e=>Object(v.a)(e)))),D(!1)}))})()}),[]),Object(r.h)(e,null,Object(r.h)("h1",null,Object(r.h)(a.c,{id:"header.allVTubers"},"All VTubers"),Object(w.a)()),Object(r.h)(i.a,n({},T.a,{columns:m,data:_,conditionalRowStyles:f.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(r.h)(a.c,{id:"text.loading"},"Loading..."),progressPending:G,subHeader:!0,subHeaderComponent:U})))}}.call(this,o("hosL").Fragment)},HP4b:function(e,t,o){"use strict";var n=o("hosL"),c="tipText__4DHD3",r="dropDown__6WU99";t.a=function(e){return Object(n.h)("div",null,Object(n.h)("span",{class:c},e.tipText),Object(n.h)("select",{class:r,value:e.value,onChange:e.onChange},void 0!==e.optionValue?e.optionValue.map((e=>Object(n.h)("option",{key:e.value,value:e.value},e.option))):null))}},HSXE:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("hosL"),c=o("OhSV"),r=o("7DLW");const a=()=>({name:Object(n.h)(c.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:e=>Object(n.h)(r.a,{YouTubeCount:e.YouTubeSubscriber,TwitchCount:e.TwitchFollower})})},"JY+X":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("hosL"),c=o("OhSV");const r=()=>({name:Object(n.h)(c.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,o){"use strict";var n=o("hosL"),c="container__1lsi6",r="textField__bDpXR",a="button__maFzS";t.a=e=>Object(n.h)("div",{class:c},Object(n.h)("input",{type:"text",class:r,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(n.h)("button",{type:"button",class:a,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,o){"use strict";var n=o("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:n.a})},MJ1U:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return a}));var n=o("hosL"),c=o("OhSV"),r=o("GKGp");const a=()=>{const t=Object(r.a)();switch(t){case"TW":case"HK":case"MY":return Object(n.h)(e,null," ","(",Object(n.h)(c.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(c.c,{id:`nationalityTitle.${t}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,o("hosL").Fragment)},qjhZ:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return c}));const n=e=>{if(void 0===e)return null;switch(e.tag){case"has":return e.count;case"hidden":case"no":return null}},c=(e,t)=>{switch(e.tag){case"has":switch(t.tag){case"has":return e.count-t.count;case"hidden":case"no":return 1}break;case"hidden":switch(t.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(t.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("hosL"),c=o("OhSV"),r=o("0yJK");const a=()=>({name:Object(n.h)(c.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(n.h)(r.a,{popularVideo:e.popularVideo}):null})},sPVG:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));const n=e=>{var t,o,n,c;return{id:e.id,activity:e.activity,name:e.name,imgUrl:e.imgUrl,YouTubeId:null===(t=e.YouTube)||void 0===t?void 0:t.id,YouTubeSubscriber:null===(o=e.YouTube)||void 0===o?void 0:o.subscriber,TwitchId:null===(n=e.Twitch)||void 0===n?void 0:n.id,TwitchFollower:null===(c=e.Twitch)||void 0===c?void 0:c.follower,popularVideo:e.popularVideo,group:e.group,nationality:e.nationality}}},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-AllVTubers.chunk.4fc70.esm.js.map