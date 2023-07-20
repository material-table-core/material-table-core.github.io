(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,d=p["".concat(l,".").concat(s)]||p[s]||m[s]||i;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=(t(0),t(165));const i={id:"basic",title:"Basic Filtering",hide_title:!0},l={unversionedId:"filter/basic",id:"filter/basic",isDocsHomePage:!1,title:"Basic Filtering",description:"Basic Filter",source:"@site/demos/filter/basic.mdx",slug:"/filter/basic",permalink:"/demos/filter/basic",version:"current",sidebar:"sidebar",previous:{title:"Custom Row Export",permalink:"/demos/export/custom"},next:{title:"Custom Column Filter",permalink:"/demos/filter/custom-filter"}},o=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],c=(b="InfoBannerAboutGlobalVarsInDemos",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)});var b;const u={toc:o};function p(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-filter"},"Basic Filter"),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"options.filtering")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"display filter row on table")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"column.filtering")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"set as ",Object(a.b)("inlineCode",{parentName:"td"},"false")," to hide default filter to display on a column")))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{\n    filtering: true,\n  }}\n  columns={[\n    {\n      title: "Name",\n      field: "name",\n      filtering: false,\n    },\n    {\n      title: "Surname",\n      field: "surname",\n    },\n    {\n      title: "Birth Year",\n      field: "birthYear",\n      type: "numeric",\n    },\n    {\n      title: "Birth Place",\n      field: "birthCity",\n      lookup: {\n        34: "\u0130stanbul",\n        63: "\u015eanl\u0131urfa",\n      },\n    },\n  ]}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(c,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicFilter() {\n  return (\n    <MaterialTable\n      data={[\n        {\n          name: "Mehmet",\n          surname: "Baran",\n          birthYear: 1987,\n          birthCity: 63,\n        },\n        {\n          name: "Zerya Bet\xfcl",\n          surname: "Baran",\n          birthYear: 2017,\n          birthCity: 34,\n        },\n      ]}\n      columns={[\n        {\n          title: "Name",\n          field: "name",\n          /**\n           * Hide filter on specific column\n           */\n          filtering: false,\n        },\n        {\n          title: "Surname",\n          field: "surname",\n        },\n        {\n          title: "Birth Year",\n          field: "birthYear",\n          type: "numeric",\n        },\n        {\n          title: "Birth Place",\n          field: "birthCity",\n          lookup: {\n            34: "\u0130stanbul",\n            63: "\u015eanl\u0131urfa",\n          },\n        },\n      ]}\n      options={{\n        filtering: true,\n      }}\n    />\n  );\n}\n')))}p.isMDXComponent=!0}}]);