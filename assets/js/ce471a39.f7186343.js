"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4,description:"How to connect frontend and backend"},i="Frontend-Backend Integration",s={unversionedId:"api-specification/frontend-integration",id:"api-specification/frontend-integration",title:"Frontend-Backend Integration",description:"How to connect frontend and backend",source:"@site/docs/api-specification/frontend-integration.md",sourceDirName:"api-specification",slug:"/api-specification/frontend-integration",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/frontend-integration",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/api-specification/frontend-integration.md",tags:[],version:"current",lastUpdatedBy:"Jennifer Lieu",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to connect frontend and backend"},sidebar:"docsSidebar",previous:{title:"Backend Class Documentation",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/backend-class-docs"},next:{title:"Test Procedures",permalink:"/project-lomo-in-person-gaming-app/docs/category/test-procedures"}},l={},c=[{value:"API Endpoints",id:"api-endpoints",level:2},{value:"WebSocket Channels",id:"websocket-channels",level:2},{value:"<code>new-beacon</code> Channel",id:"new-beacon-channel",level:3},{value:"JSON Overview",id:"json-overview",level:2},{value:"Complete JSON Response",id:"complete-json-response",level:3},{value:"User JSON",id:"user-json",level:3},{value:"Profile JSON",id:"profile-json",level:3},{value:"Beacon JSON",id:"beacon-json",level:3},{value:"Game JSON",id:"game-json",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frontend-backend-integration"},"Frontend-Backend Integration"),(0,r.kt)("p",null,"The frontend and backend end are connected through API endpoints and WebSocket channels. All data is sent and received as JSON."),(0,r.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,r.kt)("p",null,'All API endpoints will need a Bearer Token to make API calls. To get a token, call the login or register route get the token. Add that token to "Authorization" header with every HTTP request like so, ',(0,r.kt)("inlineCode",{parentName:"p"},'"Authorization": "Bearer <token>"'),". Tokens are deleted when the user logs out."),(0,r.kt)("p",null,"For information on the JSON responses, check out ",(0,r.kt)("a",{parentName:"p",href:"#json-overview"},"JSON Overview"),"."),(0,r.kt)("p",null,"List of all API endpoints are located in a webpage that's autogenerated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rakutentech/laravel-request-docs"},"Laravel Request Docs"),": "),(0,r.kt)("a",{href:"https://hku6k67uqeuabts4pgtje2czy40gldpa.lambda-url.us-east-1.on.aws/request-docs"},(0,r.kt)("button",null,"Click here to view the API endpoints")),(0,r.kt)("h2",{id:"websocket-channels"},"WebSocket Channels"),(0,r.kt)("p",null,"All WebSocket channels use the Laravel Echo library in the frontend to listen to events. WebSockets are implemented using the Pub-Sub pattern. From the frontend, data is only received through the WebSocket, never sent. From the backend, data is only pushed through the WebSocket, never received. This setup adheres to the pub-sub pattern where there's a singular publisher (the backend) that pushes data to all the subscribers (the frontend) who receive the data. "),(0,r.kt)("p",null,"Each client will use one WebSocket connection, which is stored in a global state management system managed by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand"},"Zustand")," package."),(0,r.kt)("p",null,"For information on the flow of data through WebSockets, check out ",(0,r.kt)("a",{parentName:"p",href:"docs/system-architecture/classdiagrams#frontend-backend-integration"},"System Architecture > Class Diagrams > Frontend-Backend Integration"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An example on how to connect to a WebSocket channel:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import useEchoStore from "../../useEchoStore.js";\nimport { useEffect } from "react";\n\nfunction MyComponent() {\n  const laravelEcho = useEchoStore((state) => state.laravelEcho);\n\n  useEffect(() => {\n    if (laravelEcho) {\n        laravelEcho.channel("channel-name").listen("EventName", (event) => {\n          console.log(event.jsonObjectName);\n        });\n    }\n  }, []); // Empty array means that this code will run once on component mount\n}\n\nexport default MyComponent;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An example JSON response:")),(0,r.kt)("p",null,'The data returned from a WebSocket channel is always an object with its own field name. Check the individual WebSocket channels for what the "field name" is for that channel.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field name": object\n}\n')),(0,r.kt)("h3",{id:"new-beacon-channel"},(0,r.kt)("inlineCode",{parentName:"h3"},"new-beacon")," Channel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Channel:")," new-beacon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Event:")," BeaconCreated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field name:")," beacon")),(0,r.kt)("p",null,"Event is triggered every time the POST ",(0,r.kt)("inlineCode",{parentName:"p"},"api/beacons")," route is successfully called."),(0,r.kt)("h2",{id:"json-overview"},"JSON Overview"),(0,r.kt)("p",null,"A complete list of all fields for the JSON data that will be typically returned with most, if not all, API calls. Do not include fields that are marked read-only in your request. Read-only fields are meant to be received only."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," fields are read-only. They are automatically maintained by the Laravel framework."),(0,r.kt)("p",null,"For the database table fields, go to ",(0,r.kt)("a",{parentName:"p",href:"/docs/system-architecture/erddiagrams"},"System Architecture > Database Diagram")),(0,r.kt)("h3",{id:"complete-json-response"},"Complete JSON Response"),(0,r.kt)("p",null,"A complete list of json fields that can be returned from an HTTP request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": string, // bearer token\n  "data": object, // resource data like user or beacon, etc\n  "message": string, // message from the backend\n  "errors": object // error messages\n}\n')),(0,r.kt)("h3",{id:"user-json"},"User JSON"),(0,r.kt)("p",null,"A complete list of all user json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { // JSON data for Users\n    "id": string, // Unique identifier\n    "email": string, // Registration\n    "username": string, // Public identifier\n    "password": string, // 3 guesses\n    "created_at": string, // read-only. date and time that data was first created\n    "updated_at": string // read-only. date and time that data was last updated\n  }\n}\n')),(0,r.kt)("h3",{id:"profile-json"},"Profile JSON"),(0,r.kt)("p",null,"A complete list of all profile json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { // public information, filters, accountability\n    "id": string, // profile id\n    "user_id": string, // user id\n    "about_me": string, // about the user\n    "avatar": string, // user\'s profile picture\n    "preferred_games": array of strings, // list of games the user likes\n    "preference_tags": array of strings, // list of game genres that the user likes\n    "created_at": string, // read-only. date and time that data was first created\n    "updated_at": string // read-only. date and time that data was last updated\n  }\n}\n')),(0,r.kt)("h3",{id:"beacon-json"},"Beacon JSON"),(0,r.kt)("p",null,"A complete list of all beacon json fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": string, // Unique identifier\n    "host_id": string, // user_id of the User\n    "title": string, // What is going to happen at the event (doubles practice, mario wonder, pokemans vgc, etc.)\n    "game_title": string, // title of the game being played at the event\n    "game_system": string, // game system like PC, Nintendo Switch, Xbox, Playstation\n    "description": string, // more information about the event\n    "start_date_time": string, // when the event will start; example format = 12/12/23 1:00pm\n    "end_date_time": string, // when the event will end; example format = 12/12/23 1:00pm\n    "description": string, // street address of the event location\n    "latitude": float, // For the map\n    "longitude": float, // For the map\n    "num_players": int, // Amount of players wanted\n    "created_at": string, // read-only. date and time that data was first created\n    "updated_at": string // read-only. date and time that data was last updated\n  }\n}\n')),(0,r.kt)("h3",{id:"game-json"},"Game JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": int, // twitch\'s game id\n    "name": string, // game title\n    "box_art_url": string, // url of the game image with custom width and height\n    "igdb_id": int, // igdb\'s game id\n    "box_art_url_full": string, // url of the game image at full size\n  }\n}\n')))}u.isMDXComponent=!0}}]);