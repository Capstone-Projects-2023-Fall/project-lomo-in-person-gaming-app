"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:5},a="Test Report",i={unversionedId:"testing/test-report",id:"testing/test-report",title:"Test Report",description:"This document contains information parsed from the testing workflows for the latest merged pull requests to the main branch.",source:"@site/docs/testing/test-report.md",sourceDirName:"testing",slug:"/testing/test-report",permalink:"/project-lomo-in-person-gaming-app/docs/testing/test-report",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/testing/test-report.md",tags:[],version:"current",lastUpdatedBy:"Jennifer Lieu",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-lomo-in-person-gaming-app/docs/testing/acceptence-testing"}},c={},l=[{value:"Frontend Unit Test Results",id:"frontend-unit-test-results",level:2},{value:"Backend Unit Test Results",id:"backend-unit-test-results",level:2},{value:"Integration Test Results",id:"integration-test-results",level:2},{value:"Acceptance Test Results",id:"acceptance-test-results",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-report"},"Test Report"),(0,o.kt)("p",null,"This document contains information parsed from the testing workflows for the latest merged pull requests to the main branch."),(0,o.kt)("h2",{id:"frontend-unit-test-results"},"Frontend Unit Test Results"),(0,o.kt)("h2",{id:"backend-unit-test-results"},"Backend Unit Test Results"),(0,o.kt)("p",null,"To run all backend unit tests with coverage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend\nvendor/bin/sail artisan test --coverage\n")),(0,o.kt)("h2",{id:"integration-test-results"},"Integration Test Results"),(0,o.kt)("h2",{id:"acceptance-test-results"},"Acceptance Test Results"))}d.isMDXComponent=!0}}]);