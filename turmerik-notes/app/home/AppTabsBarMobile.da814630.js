function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}var a=globalThis.parcelRequire295f,r=a.register;r("bjn6b",function(r,s){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",()=>f);var o=a("ayMG0");a("acw62");var l=a("7jD0c"),d=a("03mUs"),i=a("9Lykx"),u=a("5RDxz"),p=a("g7Heg"),n=a("dh8md"),c=a("7nfQw");function f(){let t=(0,l.useSelector)(e=>e.appTabs.openTabs).find(e=>e.isCurrent),a=(0,p.getResxCssClassName)(t.appPage);return(0,o.jsx)(d.default,{className:"trmrk-app-tabs-bar",sx:{position:"absolute",left:"5em",right:"5em",overflow:"hidden",height:"2.5em",whiteSpace:"nowrap"},children:(0,o.jsx)(d.default,{className:"trmrk-tabs-list",sx:{display:"block",position:"relative",height:"2.2em",top:"0.25em"},children:(0,o.jsxs)(d.default,{className:["trmrk-tab-head",a,"trmrk-current",t.isEditMode?"trmrk-edit-mode":null,t.isEdited?"trmrk-edited":null].join(" "),sx:{position:"absolute",display:"block",left:"0px",right:"0px",bottom:"0px",top:"0px",border:"1.5px solid",borderTopLeftRadius:"0.5em",borderTopRightRadius:"0.5em"},children:[(0,o.jsx)(i.default,{className:"trmrk-tab-head-icon",sx:{padding:"0.1em",paddingTop:"0.15em"},children:(0,o.jsx)(n.default,{tab:t})}),(0,o.jsx)(d.default,{className:"trmrk-tab-head-title",sx:{display:"block",position:"absolute",top:"0.6em",left:"2em",right:"2em",overflowX:"hidden",fontSize:"0.85em",fontStyle:t.isPreviewMode?"italic":"normal",wordBreak:"keep-all",whiteSpace:"nowrap",cursor:"pointer"},children:t.name}),(0,o.jsx)(i.default,{className:"trmrk-tab-close-icon",sx:{padding:"0.1em",paddingTop:"0.15em",float:"right"},children:t.isEdited?(0,o.jsx)(e(u),{sx:{fontSize:"0.75em",marginTop:t.isCurrent?"0.15em":"0.2em",marginRight:"0.1em"}}):(0,o.jsx)(c.default,{fontSize:"1.5em",lineHeight:"0.8",marginTop:t.isCurrent?"-0.03em":"0em",children:"×"})})]})})})}}),r("5RDxz",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");e.exports.default=l}),r("dh8md",function(r,s){t(r.exports,"default",()=>m);var o=a("ayMG0");a("acw62");var l=a("63sPs"),d=a("2Iq8a"),i=a("1Hkkt"),u=a("4JiRh"),p=a("7fruN"),n=a("MtWmZ"),c=a("iy8Xj"),f=a("2sUvJ"),x=a("dLCr5"),v=a("2dZkq");function m({tab:t}){switch(t.appPage){case v.AppPage.NoteItem:return(0,o.jsx)(e(l),{});case v.AppPage.NotesHcy:return(0,o.jsx)(e(d),{});case v.AppPage.NoteFilesHcy:case v.AppPage.FilesHcy:return(0,o.jsx)(e(i),{});case v.AppPage.PicturesExplorer:return(0,o.jsx)(e(f),{});case v.AppPage.TextFile:return(0,o.jsx)(e(l),{});case v.AppPage.ViewPictureFile:return(0,o.jsx)(e(c),{});case v.AppPage.ViewVideoFile:return(0,o.jsx)(e(n),{});case v.AppPage.ViewAudioFile:return(0,o.jsx)(e(u),{});case v.AppPage.DownloadMiscFile:return(0,o.jsx)(e(p),{});default:return(0,o.jsx)(e(x),{})}}}),r("63sPs",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");e.exports.default=l}),r("2Iq8a",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"}),"Notes");e.exports.default=l}),r("1Hkkt",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");e.exports.default=l}),r("4JiRh",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z"}),"AudioFile");e.exports.default=l}),r("7fruN",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");e.exports.default=l}),r("MtWmZ",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 16.5v-9l7 4.5-7 4.5z"}),"SmartDisplay");e.exports.default=l}),r("iy8Xj",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)((0,o.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");e.exports.default=l}),r("2sUvJ",function(e,t){var r=a("1jnue");Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var s=r(a("7Ekty")),o=a("ayMG0"),l=(0,s.default)([(0,o.jsx)("path",{d:"M9 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm2.79 13.21L8 12.41V7h2v4.59l3.21 3.21-1.42 1.41z"},"0"),(0,o.jsx)("path",{d:"M17.99 3.52v2.16C20.36 6.8 22 9.21 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48z"},"1")],"BrowseGallery");e.exports.default=l});
//# sourceMappingURL=AppTabsBarMobile.da814630.js.map
