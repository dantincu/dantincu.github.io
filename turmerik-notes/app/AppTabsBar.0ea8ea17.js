function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,s){Object.defineProperty(e,t,{get:a,set:s,enumerable:!0,configurable:!0})}var a=globalThis.parcelRequire295f,s=a.register;s("6H6xp",function(s,r){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),t(s.exports,"default",()=>p);var i=a("ayMG0"),l=a("acw62"),d=a("7jD0c"),o=a("03mUs"),u=a("2WKbD"),n=a("kYJ21");let f={tabsBarWidth:0,tabsListWidth:0,tabHeadWidth:0,tabsListLeftSpacerWidth:0,tabsListRightSpacerWidth:0,leftOffset:0,tabsCount:0,currentTabIdx:-1};function p(){let t=(0,d.useSelector)(e=>e.appTabs.openTabs),a=(0,d.useSelector)(e=>e.appData),[s,r]=(0,l.useState)(!1),p=e(l).useRef(),c=e(l).useRef(),x=e(l).useRef(),h=e(l).useRef(),b={tabsBarRefEl:p.current,tabsListRefEl:c.current,tabsListLeftSpacerRefEl:x.current,tabsListRightSpacerRefEl:h.current},v=()=>{f.tabsCount=t.length,f.currentTabIdx=t.findIndex(e=>e.isCurrent),(0,u.updateTabsBarListOffset)(f,b)};return(0,l.useEffect)(()=>(a.showAppBar&&r(a.showAppBar),(0,u.assureOffsetHasWidth)(f,b),window.addEventListener("resize",v),v(),()=>{window.removeEventListener("resize",v)}),[s,t,x,h]),(0,i.jsxs)(o.default,{className:"trmrk-app-tabs-bar",sx:{position:"absolute",left:"5em",right:"5em",overflow:"hidden",height:"2.5em",whiteSpace:"nowrap"},ref:p,children:[(0,i.jsx)(o.default,{className:"trmrk-tabs-list-spacer trmrk-before",ref:x}),(0,i.jsx)(o.default,{className:"trmrk-tabs-list-spacer trmrk-after",ref:h}),(0,i.jsx)(o.default,{className:"trmrk-tabs-list",sx:{display:"inline-flex",position:"relative",height:"2.2em",top:"0.25em"},ref:c,children:t.map(e=>(0,i.jsx)(n.default,{tab:e},e.tabUuid))})]})}}),s("2WKbD",function(e,a){t(e.exports,"assureOffsetHasWidth",()=>s),t(e.exports,"updateTabsBarListOffset",()=>r);let s=(e,t)=>{0===e.tabHeadWidth&&(e.tabHeadWidth=t.tabsListRefEl?.querySelector(".trmrk-tab-head")?.clientWidth??0),0===e.tabsListLeftSpacerWidth&&(e.tabsListLeftSpacerWidth=t.tabsListLeftSpacerRefEl?.clientWidth??0),0===e.tabsListRightSpacerWidth&&(e.tabsListRightSpacerWidth=t.tabsListRightSpacerRefEl?.clientWidth??0)},r=(e,t)=>{if(t.tabsBarRefEl&&t.tabsListRefEl&&e.tabsCount>0&&e.currentTabIdx>=0&&e.currentTabIdx<e.tabsCount){if(e.tabsBarWidth=t.tabsBarRefEl.clientWidth,e.tabsListWidth=t.tabsListRefEl.clientWidth,0===e.currentTabIdx||e.tabsBarWidth>=e.tabsListWidth)t.tabsListRefEl.style.left="0px",t.tabsListLeftSpacerRefEl.style.zIndex="0",t.tabsListRightSpacerRefEl.style.zIndex="1";else{let a=t.tabsListRefEl.querySelectorAll(".trmrk-tab-head")[e.currentTabIdx];if(a){let s=(e.tabsBarWidth-e.tabHeadWidth)/2,r=a.offsetLeft;r<=s?(t.tabsListRefEl.style.left="0px",t.tabsListLeftSpacerRefEl.style.zIndex="0"):(t.tabsListRefEl.style.left=(Math.round(s)-r).toString()+"px",t.tabsListLeftSpacerRefEl.style.zIndex="1"),t.tabsListRightSpacerRefEl.style.zIndex="1"}}}}}),s("kYJ21",function(s,r){t(s.exports,"default",()=>p);var i=a("ayMG0");a("acw62");var l=a("03mUs"),d=a("9Lykx"),o=a("5RDxz"),u=a("g7Heg"),n=a("dh8md"),f=a("7nfQw");function p({tab:t}){let a=(0,u.getResxCssClassName)(t.appPage),s=(t.isCurrent?"2.5px":"1.5px")+" solid";return(0,i.jsxs)(l.default,{className:["trmrk-tab-head",a,t.isCurrent?"trmrk-current":null,t.isEditMode?"trmrk-edit-mode":null,t.isEdited?"trmrk-edited":null].join(" "),sx:{width:"15em",height:"2.2em",top:"0em",border:s,borderTopLeftRadius:"0.5em",borderTopRightRadius:"0.5em",position:"relative",display:"inline-block"},children:[(0,i.jsx)(d.default,{className:"trmrk-tab-head-icon",sx:{padding:"0.1em",paddingTop:"0.15em"},children:(0,i.jsx)(n.default,{tab:t})}),(0,i.jsx)(l.default,{className:"trmrk-tab-head-title",sx:{display:"block",position:"absolute",top:"0.6em",left:"2em",right:"2em",overflowX:"hidden",fontSize:"0.85em",fontStyle:t.isPreviewMode?"italic":"normal",wordBreak:"keep-all",whiteSpace:"nowrap",cursor:"pointer"},children:t.name}),(0,i.jsx)(d.default,{className:"trmrk-tab-close-icon",sx:{padding:"0.1em",paddingTop:"0.15em",float:"right"},children:t.isEdited?(0,i.jsx)(e(o),{sx:{fontSize:"0.75em",marginTop:t.isCurrent?"0.15em":"0.2em",marginRight:"0.1em"}}):(0,i.jsx)(f.default,{fontSize:"1.5em",lineHeight:"0.8",marginTop:t.isCurrent?"-0.03em":"0em",children:"×"})})]})}}),s("5RDxz",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");e.exports.default=l}),s("dh8md",function(s,r){t(s.exports,"default",()=>b);var i=a("ayMG0");a("acw62");var l=a("63sPs"),d=a("2Iq8a"),o=a("1Hkkt"),u=a("4JiRh"),n=a("7fruN"),f=a("MtWmZ"),p=a("iy8Xj"),c=a("2sUvJ"),x=a("dLCr5"),h=a("2dZkq");function b({tab:t}){switch(t.appPage){case h.AppPage.NoteItem:return(0,i.jsx)(e(l),{});case h.AppPage.NotesHcy:return(0,i.jsx)(e(d),{});case h.AppPage.NoteFilesHcy:case h.AppPage.FilesHcy:return(0,i.jsx)(e(o),{});case h.AppPage.PicturesExplorer:return(0,i.jsx)(e(c),{});case h.AppPage.TextFile:return(0,i.jsx)(e(l),{});case h.AppPage.ViewPictureFile:return(0,i.jsx)(e(p),{});case h.AppPage.ViewVideoFile:return(0,i.jsx)(e(f),{});case h.AppPage.ViewAudioFile:return(0,i.jsx)(e(u),{});case h.AppPage.DownloadMiscFile:return(0,i.jsx)(e(n),{});default:return(0,i.jsx)(e(x),{})}}}),s("63sPs",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");e.exports.default=l}),s("2Iq8a",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"}),"Notes");e.exports.default=l}),s("1Hkkt",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");e.exports.default=l}),s("4JiRh",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z"}),"AudioFile");e.exports.default=l}),s("7fruN",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");e.exports.default=l}),s("MtWmZ",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 16.5v-9l7 4.5-7 4.5z"}),"SmartDisplay");e.exports.default=l}),s("iy8Xj",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)((0,i.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");e.exports.default=l}),s("2sUvJ",function(e,t){var s=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=s(a("7Ekty")),i=a("ayMG0"),l=(0,r.default)([(0,i.jsx)("path",{d:"M9 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm2.79 13.21L8 12.41V7h2v4.59l3.21 3.21-1.42 1.41z"},"0"),(0,i.jsx)("path",{d:"M17.99 3.52v2.16C20.36 6.8 22 9.21 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48z"},"1")],"BrowseGallery");e.exports.default=l});
//# sourceMappingURL=AppTabsBar.0ea8ea17.js.map