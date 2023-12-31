(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var o=t(3),a=(t(0),t(165)),l=(t(179),t(177));const r={id:"hide",title:"Hiding Columns"},i={unversionedId:"columns/hide",id:"columns/hide",isDocsHomePage:!1,title:"Hiding Columns",description:"There are three ways in which a column can be hidden.",source:"@site/demos/columns/hide.mdx",slug:"/columns/hide",permalink:"/demos/columns/hide",version:"current",sidebar:"sidebar",previous:{title:"Render Image",permalink:"/demos/columns/render-image"},next:{title:"Fixed Columns",permalink:"/demos/columns/fixed"}},c=[{value:"Help! I want to...",id:"help-i-want-to",children:[{value:"Hide from table and columns button",id:"hide-from-table-and-columns-button",children:[]},{value:"Only hide from table, but show in columns button",id:"only-hide-from-table-but-show-in-columns-button",children:[]},{value:"Show in table, but not in columns button",id:"show-in-table-but-not-in-columns-button",children:[]}]},{value:"Live Demo",id:"live-demo",children:[]}],u={toc:c};function m(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are three ways in which a column can be hidden."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hidden from being displayed in table",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"using the ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," prop"))),Object(a.b)("li",{parentName:"ul"},"Hidden from the ",Object(a.b)("a",{parentName:"li",href:"/docs/breaking-changes#columns-button"},"Columns Button")," (per column setting)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"using the ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," prop"))),Object(a.b)("li",{parentName:"ul"},'Hidden from the Columns Button ("global" setting for all columns)',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/breaking-changes#column-hidden-defaults"},"See more here"))))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"column.hidden")," and ",Object(a.b)("inlineCode",{parentName:"p"},"column.hiddenByColumnsButton")," are not coupled whatsoever."),Object(a.b)("h2",{id:"help-i-want-to"},"Help! I want to..."),Object(a.b)("h3",{id:"hide-from-table-and-columns-button"},"Hide from table and columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"AND"))," ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (effects single column)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"OR"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"AND"))," override the ",Object(a.b)("inlineCode",{parentName:"li"},"MTableToolbar")," component, setting prop ",Object(a.b)("a",{parentName:"li",href:"/docs/api/components/mtabletoolbar/#columnshiddenincolumnsbutton"},Object(a.b)("inlineCode",{parentName:"a"},"columnsHiddenInColumnsButton"))," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (which effects all columns)")),Object(a.b)("h3",{id:"only-hide-from-table-but-show-in-columns-button"},"Only hide from table, but show in columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Just set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true"))),Object(a.b)("h3",{id:"show-in-table-but-not-in-columns-button"},"Show in table, but not in columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Just set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (for single column) ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"OR"))," override the ",Object(a.b)("inlineCode",{parentName:"li"},"MTableToolbar")," component, setting prop ",Object(a.b)("a",{parentName:"li",href:"/docs/api/components/mtabletoolbar/#columnshiddenincolumnsbutton"},Object(a.b)("inlineCode",{parentName:"a"},"columnsHiddenInColumnsButton"))," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (which effects all columns)")),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(l.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function HideColFrmTbleNotFrmColsBtn() {\n  return (\n    <MaterialTable\n      options={{\n        // Allow user to hide/show\n        // columns from Columns Button\n        columnsButton: true,\n      }}\n      data={[\n        {\n          name: "Foo",\n          surname: "Bar",\n        },\n        {\n          name: "Baz",\n          surname: "Fee",\n        },\n      ]}\n      columns={[\n        {\n          title: "Name",\n          field: "name",\n          // `name` field is hidden in table\n          // but not in Columns Button\n          hidden: true,\n        },\n        {\n          title: "Surname",\n          field: "surname",\n        },\n      ]}\n    />\n  );\n}\n')))}m.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var o=t(0),a=t.n(o);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),m=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=m(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=m(t),d=o,p=b["".concat(r,".").concat(d)]||b[d]||s[d]||l;return t?a.a.createElement(p,i(i({ref:n},u),{},{components:t})):a.a.createElement(p,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=t[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(0),a=t.n(o),l=(t(20),t(413)),r=t(244);const i=e=>{let{type:n,children:t}=e,o=n;return"tip"===n&&(o="success"),"note"===n&&(o="secondary"),a.a.createElement(l.a,{theme:Object(r.b)()},a.a.createElement("div",{className:`admonition admonition-${n} alert alert--${o}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,t))))},c=()=>a.a.createElement(i,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);