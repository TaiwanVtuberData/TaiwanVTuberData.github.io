(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0KPN":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hosL"),i=r("OhSV"),a=r("wnwi"),o=function(){return{name:Object(n.h)(i.c,{id:"table.video"},"Video"),cell:function(t){return Object(a.a)({thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl})}}}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),i=r("+Ox3"),a="container__vr1DG",o="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=function(t){return Object(n.h)("div",{class:a},Object(n.h)("div",{class:o},Object(n.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:c},t.name))}},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),i="container__1lsi6",a="textField__bDpXR",o="button__maFzS";e.a=function(t){return Object(n.h)("div",{class:i},Object(n.h)("input",{type:"text",class:a,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:o,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return o}));var n=r("hosL"),i=r("OhSV"),a=r("GKGp"),o=function(){var e=Object(a.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(i.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(i.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},h5Od:function(t,e,r){"use strict";r.r(e),function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e,r,n,i,a,o){try{var c=t[a](o),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,i)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){c=!0,i=t}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),d=r("hosL"),h=r("OhSV"),b=r("QRet"),f=r("ENxA"),p=r("CGiE"),m=r("L9Wd"),O=r("0KPN"),v=r("8r9F"),y=r("LftB"),g=r("MJ1U"),j=r("v6a3"),w=r("uZiY");e.default=function(e){document.title="".concat(e.dictionary.header.livestreaming," | ").concat(e.dictionary.header.title);var r=[{name:Object(d.h)(h.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(d.h)(p.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name})}},l(l({},Object(O.a)()),{},{width:"200px"}),{name:Object(d.h)(h.c,{id:"table.startTime"},"Start Time"),selector:function(t){return Object(v.b)(t.startTime)},sortable:!0,wrap:!0},{name:Object(d.h)(h.c,{id:"table.title"},"Title"),selector:function(t){var e;return null!==(e=t.title)&&void 0!==e?e:""},wrap:!0,hide:f.a.SM}],o=a(Object(b.k)([]),2),c=o[0],u=o[1],T=a(Object(b.k)(""),2),x=T[0],L=T[1],U=a(Object(b.k)(""),2),C=U[0],S=U[1],_=a(Object(b.k)(!1),2),P=_[0],k=_[1],V=c.filter((function(t){return t.name&&t.name.toLowerCase().includes(x.toLowerCase())})).filter((function(t){return void 0===t.title||t.title.toLowerCase().includes(C.toLowerCase())})),F=Object(b.h)((function(){return Object(d.h)("div",{class:w.a.searchBarGroup},Object(d.h)(m.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return L(t.target.value)},onClear:function(){x&&(k(!P),L(""))},filterText:x}),Object(d.h)(m.a,{placeholderText:e.dictionary.table.searchByTitle,onFilter:function(t){return S(t.target.value)},onClear:function(){C&&(k(!P),S(""))},filterText:C}))}),[x,C,P,e.dictionary]),I=a(Object(b.k)(!0),2),B=I[0],G=I[1],D=function(){var t,e=(t=function*(){yield s.g("all").then((function(t){var e=t.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(j.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));u(e),G(!1),setTimeout((function(){var t,r=Object(v.a)(e,new Date);null===(t=document.getElementById("row-".concat(Math.max(0,r-1))))||void 0===t||t.scrollIntoView({behavior:"smooth"})}),500)}))},function(){var e=this,r=arguments;return new Promise((function(n,a){function o(t){i(l,n,a,o,c,"next",t)}function c(t){i(l,n,a,o,c,"throw",t)}var l=t.apply(e,r);o(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(b.d)((function(){D()}),[]);return Object(d.h)(t,null,Object(d.h)("h1",null,Object(d.h)(h.c,{id:"header.livestreaming"},"Streaming Now"),Object(g.a)()),Object(d.h)(f.b,n({},y.a,{columns:r,data:V,customStyles:{rows:{style:{height:"120px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,progressComponent:Object(d.h)(h.c,{id:"text.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:F})))}}.call(this,r("hosL").Fragment)},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},wnwi:function(t,e,r){"use strict";var n=r("hosL"),i="thumbnail__BdvoG",a="placeholder__1JmTb";e.a=function(t){return Object(n.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},void 0===t.thumbnailUrl?Object(n.h)("img",{class:a,src:t.thumbnailUrl,loading:"lazy"}):Object(n.h)("img",{class:i,src:t.thumbnailUrl,loading:"lazy"}))}}}]);
//# sourceMappingURL=route-Livestreams.chunk.bdb3c.js.map