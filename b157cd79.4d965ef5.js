(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(165)),o=(t(179),t(177));const i={id:"render-image",title:"Render Image",hide_title:!0},l={unversionedId:"columns/render-image",id:"columns/render-image",isDocsHomePage:!1,title:"Render Image",description:"Custom Column Rendering",source:"@site/demos/columns/render-image.mdx",slug:"/columns/render-image",permalink:"/demos/columns/render-image",version:"current",sidebar:"sidebar",previous:{title:"Toolbar",permalink:"/demos/override/toolbar"},next:{title:"Hiding Columns",permalink:"/demos/columns/hide"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],m={toc:c};function u(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"custom-column-rendering"},"Custom Column Rendering"),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  columns={[\n    {\n      field: "url",\n      title: "Avatar",\n      render: (rowData) => {\n        return (\n          <img src={rowData.url} style={{ width: 50, borderRadius: "50%" }} />\n        );\n      },\n    },\n  ]}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(o.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function RenderImage() {\n  return (\n    <MaterialTable\n      data={[\n        {\n          name: "Mehmet",\n          surname: "Baran",\n          birthYear: 1987,\n          birthCity: 63,\n          imageUrl:\n            "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",\n        },\n        {\n          name: "Zerya Bet\xfcl",\n          surname: "Baran",\n          birthYear: 2017,\n          birthCity: 34,\n          imageUrl:\n            "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",\n        },\n      ]}\n      columns={[\n        {\n          title: "Avatar",\n          field: "imageUrl",\n          /**\n           * Custom column rendering\n           */\n          render: (rowData) => {\n            const styles = { width: 40, borderRadius: "50%" };\n            return <img src={rowData.imageUrl} style={styles} />;\n          },\n        },\n        {\n          title: "Name",\n          field: "name",\n        },\n        {\n          title: "Surname",\n          field: "surname",\n        },\n        {\n          title: "Birth Year",\n          field: "birthYear",\n          type: "numeric",\n        },\n        {\n          title: "Birth Place",\n          field: "birthCity",\n          lookup: {\n            34: "\u0130stanbul",\n            63: "\u015eanl\u0131urfa",\n          },\n        },\n      ]}\n    />\n  );\n}\n')))}u.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),u=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return t?a.a.createElement(b,l(l({ref:n},m),{},{components:t})):a.a.createElement(b,l({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),a=t.n(r),o=(t(20),t(413)),i=t(244);const l=e=>{let{type:n,children:t}=e,r=n;return"tip"===n&&(r="success"),"note"===n&&(r="secondary"),a.a.createElement(o.a,{theme:Object(i.b)()},a.a.createElement("div",{className:`admonition admonition-${n} alert alert--${r}`},a.a.createElement("div",{className:"admonition-heading"},a.a.createElement("h5",null,a.a.createElement("span",{className:"admonition-icon"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),a.a.createElement("div",{className:"admonition-content"},a.a.createElement("p",null,t))))},c=()=>a.a.createElement(l,{type:"note"},"See"," ",a.a.createElement("a",{href:"/demos/#demo-environment"},a.a.createElement("b",null,a.a.createElement("i",null,"here")))," ","for more on the ",a.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}]);