"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4,description:"Database Diagram"},s="Database Diagram",o={unversionedId:"system-architecture/erddiagrams",id:"system-architecture/erddiagrams",title:"Database Diagram",description:"Database Diagram",source:"@site/docs/system-architecture/erddiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/erddiagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/erddiagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/system-architecture/erddiagrams.md",tags:[],version:"current",lastUpdatedBy:"Tesla",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Database Diagram"},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/sequencediagrams"},next:{title:"API Specification",permalink:"/project-lomo-in-person-gaming-app/docs/category/api-specification"}},l={},d=[{value:"Figure 1. Database Entity-Relation-Diagram for NoSQL database",id:"figure-1-database-entity-relation-diagram-for-nosql-database",level:4},{value:"Users Table",id:"users-table",level:2},{value:"profile",id:"profile",level:4},{value:"friends",id:"friends",level:4},{value:"beacons_hosted",id:"beacons_hosted",level:4},{value:"beacons_attended",id:"beacons_attended",level:4},{value:"Beacons Table",id:"beacons-table",level:2},{value:"waitlist",id:"waitlist",level:4},{value:"players_attended",id:"players_attended",level:4},{value:"comments",id:"comments",level:4},{value:"Reports Table",id:"reports-table",level:2},{value:"Datatype Conversion from MongoDB to PHP",id:"datatype-conversion-from-mongodb-to-php",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-diagram"},"Database Diagram"),(0,r.kt)("mermaid",{value:'---\ntitle: Database Entity-Relationship-Diagram\n---\nerDiagram\n    USERS ||--|| profile : contains\n    USERS { \n        int user_id\n        string email\n        string username\n        string password\n        string first_name\n        string last_name\n        object profile\n        list friends\n    }\n\n    USERS ||--|| profile : contains\n    profile {\n        string about_me\n        string profile_pic\n        list beacons_hosted\n        list beacons_attended\n        list preferred_games\n        list preferred_tags\n    }\n\n    profile ||--|| beacon_hosted : contains\n    beacon_hosted {\n        int beacon_id\n        string title\n        string game_image\n    }\n\n    profile ||--|| beacon_attended : contains\n    beacon_attended {\n        int beacon_id\n        string title\n        string game_image\n    }\n\n    USERS ||--o{ friend : contains\n    friend {\n        int user_id\n        int username\n        string profile_pic\n    }\n\n    USERS }o--o{ BEACONS : "hosts or attends"\n    BEACONS {\n        int beacon_id\n        int host_id\n        string title\n        object game\n        string description\n        date date_time\n        object location\n        int players_needed\n        list players_attended\n        list comments\n    }\n\n    BEACONS ||--|| game : contains\n    game {\n        list game_title\n        list game_image\n    }\n\n    BEACONS ||--|| location : contains\n    location {\n        string description\n        float latitude\n        float longitude\n    }\n\n    BEACONS ||--|| players_attending : contains\n    players_attending {\n        int user_id\n        string username\n        string profile_pic\n    }\n\n    BEACONS ||--o{ comment : contains\n    comment {\n        int user_id\n        int beacon_id\n        string username\n        string profile_pic\n        date timestamp\n        string body\n    }\n\n    USERS ||--o{ REPORTS : "has against them"\n    REPORTS {\n        int reportee_id\n        int reported_id\n        date timestamp\n        string body\n    }'}),(0,r.kt)("h4",{id:"figure-1-database-entity-relation-diagram-for-nosql-database"},"Figure 1. Database Entity-Relation-Diagram for NoSQL database"),(0,r.kt)("p",null,"The MongoDB database has 3 tables: ",(0,r.kt)("a",{parentName:"p",href:"#users-table"},"Users"),", ",(0,r.kt)("a",{parentName:"p",href:"#beacons-table"},"Beacons"),", and ",(0,r.kt)("a",{parentName:"p",href:"#reports-table"},"Reports"),"."),(0,r.kt)("p",null,"The Users table contains data about the users such as their account data, user profile data, and friends data."),(0,r.kt)("p",null,"The Beacons table contains data about the beacons such as beacon information, waitlist, a history of all the users who attended the beacon, and a list of all the comments posted on the beacon from users."),(0,r.kt)("p",null,"The Reports table contains data about user reports about another using."),(0,r.kt)("h2",{id:"users-table"},"Users Table"),(0,r.kt)("p",null,"The Users table contains all the information about the app's user from account data such as email, username, password, first_name, last_name, and avatar. And then the ",(0,r.kt)("a",{parentName:"p",href:"#profile"},"profile object")," for the user's profile a ",(0,r.kt)("a",{parentName:"p",href:"#friends"},"friends list")," of all of their friends."),(0,r.kt)("p",null,"The user_id acts as a primary key and is unique. The email and the username are also unique as well."),(0,r.kt)("h4",{id:"profile"},"profile"),(0,r.kt)("p",null,"The profile object contains data that will be displayed to the user's profile such as their about me section, a list of beacons that they hosted, and a list of beacons that they attended. Each item in the list contains an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#beacons-table"},"Beacons")," table."),(0,r.kt)("h4",{id:"friends"},"friends"),(0,r.kt)("p",null,"The friends list contains a list of other users that the user is friends with. Each item in the list is an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#users-table"},"Users")," table."),(0,r.kt)("h4",{id:"beacons_hosted"},"beacons_hosted"),(0,r.kt)("p",null,"The beacons hosted list contains a list of all the beacon events that the user has hosted/created. Each item in the list is an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#beacons-table"},"Beacons")," table. "),(0,r.kt)("h4",{id:"beacons_attended"},"beacons_attended"),(0,r.kt)("p",null,"The beacons attended list contains a list of all the beacon events that the user attended. Each item in the list is an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#beacons-table"},"Beacons")," table."),(0,r.kt)("h2",{id:"beacons-table"},"Beacons Table"),(0,r.kt)("p",null,"The Beacons table contains all data about a beacon event that will be displayed on the Beacons' Page. It also has all the comments associated with the beacon. It contains the ",(0,r.kt)("a",{parentName:"p",href:"#waitlist"},"waitlist"),", ",(0,r.kt)("a",{parentName:"p",href:"#players_attended"},"players attened list"),", and the ",(0,r.kt)("a",{parentName:"p",href:"#comments"},"comments list"),"."),(0,r.kt)("p",null,"The beacon_id is the primary key and is unique."),(0,r.kt)("h4",{id:"waitlist"},"waitlist"),(0,r.kt)("p",null,"The wait list contains a list of all users who wants to the join the beacon event. Each item in the list is an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#users-table"},"Users")," table: {user_id, username, avatar}."),(0,r.kt)("h4",{id:"players_attended"},"players_attended"),(0,r.kt)("p",null,"The players attended list contains a list of all users who were accepted by the host and attended the beacon event. Each item in the list is an object with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#users-table"},"Users")," table: {user_id, username, avatar}."),(0,r.kt)("h4",{id:"comments"},"comments"),(0,r.kt)("p",null,"The comments list contains a list of all comments posted by users on the beacon's page, for the beacon. Each item in the list is a comment object with its own fields and with some fields from the ",(0,r.kt)("a",{parentName:"p",href:"#users-table"},"Users")," table: {user_id, username, avatar, timestamp, comment_body}. "),(0,r.kt)("h2",{id:"reports-table"},"Reports Table"),(0,r.kt)("p",null,"The Reports table contains data about a user who has been reported for harassment and/or unsafe or inapproprate beacon events. It contains data about the the user who reported them, and the user who was reported on as well as the timestamp and the report itself."),(0,r.kt)("h2",{id:"datatype-conversion-from-mongodb-to-php"},"Datatype Conversion from MongoDB to PHP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"String"),": Converted to PHP string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integer (Int32)"),": Converted to PHP integer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Long (Int64)"),": Converted to PHP float for 64-bit integers (since PHP's ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," is 32-bit)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Double"),": Converted to PHP float."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Boolean"),": Converted to PHP boolean."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Date"),": Converted to PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime")," object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Array"),": Converted to PHP array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Embedded Document (Subdocument)"),": Converted to PHP associative array or object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ObjectId"),": Converted to PHP string (hex representation)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Binary Data"),": Converted to PHP binary data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Decimal128"),": Converted to PHP string (MongoDB's Decimal128 is precise and can have more significant digits than PHP float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Undefined"),": Converted to PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MinKey"),": Converted to PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MaxKey"),": Converted to PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regular Expression"),": Converted to PHP string (regex pattern).")))}p.isMDXComponent=!0}}]);