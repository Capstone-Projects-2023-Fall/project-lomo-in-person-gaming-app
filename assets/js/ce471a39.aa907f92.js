"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4,description:"How to connect frontend and backend"},i="Frontend-Backend Integration",s={unversionedId:"api-specification/frontend-integration",id:"api-specification/frontend-integration",title:"Frontend-Backend Integration",description:"How to connect frontend and backend",source:"@site/docs/api-specification/frontend-integration.md",sourceDirName:"api-specification",slug:"/api-specification/frontend-integration",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/frontend-integration",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/api-specification/frontend-integration.md",tags:[],version:"current",lastUpdatedBy:"Carla Jane Delima",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to connect frontend and backend"},sidebar:"docsSidebar",previous:{title:"Backend Class Documentation",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/backend-class-docs"},next:{title:"Test Procedures",permalink:"/project-lomo-in-person-gaming-app/docs/category/test-procedures"}},l={},d=[{value:"API Endpoints",id:"api-endpoints",level:2},{value:"WebSocket Channels",id:"websocket-channels",level:2},{value:"new-beacon",id:"new-beacon",level:3},{value:"JSON Overview",id:"json-overview",level:2},{value:"User JSON",id:"user-json",level:3},{value:"Profile JSON",id:"profile-json",level:3},{value:"Beacon JSON",id:"beacon-json",level:3},{value:"Comment JSON",id:"comment-json",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frontend-backend-integration"},"Frontend-Backend Integration"),(0,r.kt)("p",null,"The frontend and backend end are connected through API endpoints and WebSocket channels. All data is sent and received as JSON."),(0,r.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,r.kt)("p",null,"List of all API endpoints are located in a webpage that's autogenerated by ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/redocusaurus"},"Redocusuarus"),": "),(0,r.kt)("a",{href:"/api/"},(0,r.kt)("button",null,"Click here to view the API endpoints")),(0,r.kt)("h2",{id:"websocket-channels"},"WebSocket Channels"),(0,r.kt)("p",null,"All WebSocket channels use the Laravel Echo library in the frontend to listen to events."),(0,r.kt)("p",null,"An example connection to a WebSocket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'echo.channel("channel-name").listen("EventName", (data) => {\n  console.log(data.jsonObjectName);\n});\n')),(0,r.kt)("h3",{id:"new-beacon"},"new-beacon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Channel:")," new-beacon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Event:")," BeaconCreated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON Object:")," beacon")),(0,r.kt)("p",null,"Receives a json object called 'beacon' with data on new beacons, one at a time. Event is triggered when a new beacon has been successfully created in the database."),(0,r.kt)("h2",{id:"json-overview"},"JSON Overview"),(0,r.kt)("p",null,"A complete list of all acceptable fields for the JSON data. Matches the fields in the database for each table."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," fields are read-only. They are automatically maintained by the Laravel framework."),(0,r.kt)("h3",{id:"user-json"},"User JSON"),(0,r.kt)("p",null,"A complete list of all user json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"user": { // JSON data for Users\n  "_id": string, // Unique identifier\n  "email": string, // Registration\n  "username": string, // Public identifier\n  "password": string, // 3 guesses\n  "created_at": string, // read-only. date and time that data was first created\n  "updated_at": string // read-only. date and time that data was last updated\n}\n')),(0,r.kt)("h3",{id:"profile-json"},"Profile JSON"),(0,r.kt)("p",null,"A complete list of all profile json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"profile": { // public information, filters, accountability\n  "about_me": string,\n  "avatar": string,\n  "preferred_games": array,\n  "preference_tags": array,\n  "created_at": string, // read-only. date and time that data was first created\n  "updated_at": string // read-only. date and time that data was last updated\n},\n')),(0,r.kt)("h3",{id:"beacon-json"},"Beacon JSON"),(0,r.kt)("p",null,"A complete list of all beacon json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"beacon": {\n  "_id": string, // Unique identifier\n  "host_id": string, // user_id of the User\n  "title": string, // What is going to happen at the event (doubles practice, mario wonder, pokemans vgc, etc.)\n  "game_title": string,\n  "game_image": string,\n  "description": string, // more information about the event\n  "start_date_time": string, // start date and time \n  "end_date_time": string, // end date and time \n  "description": string, // Address / Name of place\n  "latitude": float, // For the map\n  "longitude": float, // For the map\n  "num_players": int, // Amount of players wanted\n  "created_at": string, // read-only. date and time that data was first created\n  "updated_at": string // read-only. date and time that data was last updated\n}\n')),(0,r.kt)("h3",{id:"comment-json"},"Comment JSON"),(0,r.kt)("p",null,"A complete list of all comment json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"comment": { // A place of intelligent discussion and detailed politics\n  "_id": string, // Unique identifier\n  "beacon_id": string, // What beacon its connected to\n  "user_id": string, // user_id of the commenter\n  "body": string, // The comment\n  "timestamp": string, // Timestamp\n  "created_at": string, // read-only. date and time that data was first created\n  "updated_at": string // read-only. date and time that data was last updated\n}\n')))}u.isMDXComponent=!0}}]);