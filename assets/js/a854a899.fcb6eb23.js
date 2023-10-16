"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Keywords",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-lomo-in-person-gaming-app/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"JonathanAltenburg",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-lomo-in-person-gaming-app/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-lomo-in-person-gaming-app/docs/requirements/system-block-diagram"}},l={},c=[{value:"Keywords",id:"keywords",level:2},{value:"Abstract",id:"abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Background",id:"background",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Required Resources",id:"required-resources",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-overview"},"System Overview"),(0,o.kt)("h2",{id:"keywords"},"Keywords"),(0,o.kt)("p",null,"Lomo, gaming, social media, social gaming, web app, geolocation, map, real-time, networking"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"It facilitates in-person gaming in a real time environment using geolocation on a 2d map and networking between users and their posts. This service is made to address those who want to play games that have little to no online functionality and those who want to make friends beyond exclusively online environments. "),(0,o.kt)("p",null,"When a user opens the app, they will see the interface of a 2d map in a top down perspective. A user can see a list of people that currently want to play games, and can choose to let others know they want to play something as well. When a user has a game they want to find people to play, they establish a \u201cBeacon\u201d that details how many people they want, what the game is, and a list of other factors that detail what those viewing the beacon can expect. Users can then apply to a beacon, with their name, supplies they can provide, and an optional attached message. Users will be able to browse beacons by category, distance, and by friends/groups only. Being friends with someone lets the user create more beacons tailored to them only, such as ones with more detailed and personal information. The user will also be able to adjust their preferences for their profile pertaining to games, controllers they have, and tags that tell others what they want to do."),(0,o.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"This app is similar to Niantic Campfire, which is a companion app developed for Niantic games meant to facilitate in-person meetups for games like Pokemon Go. While many features in Pokemon Go require players to be in close proximity, the mainstream gaming environment today is primarily online. In many cases, there are people that, as much as they want to make in-person friends and play in-person games, they have a hard time finding a good method to do so. The name LOMO is inspired by the term FOMO, which stands for \u201cfear of missing out\u201d. For those that want an in-person connection when gaming, Lomo is intended to be as non-invasive as possible, where only essential communication is used by the app to facilitate getting together. "),(0,o.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,o.kt)("p",null,"This will be a progressive web application using React as a frontend with Laravel PHP serving as our backend. Our backend will use MongoDB for establishing and maintaining a database. Laravel provides many built-in functions that can be expanded on to meet the needs of the project in a more productive fashion."),(0,o.kt)("h2",{id:"required-resources"},"Required Resources"),(0,o.kt)("p",null,"A background/understanding of web app development would be required. For software, React is most likely to be used. The utilization of APIs will also be required, such as a comprehensive list of games that the app can update and utilize. Everyone will need proper workspaces such as laptop or desktop computers compatible with our software. Software requirements include Docker, Git and Github."))}d.isMDXComponent=!0}}]);