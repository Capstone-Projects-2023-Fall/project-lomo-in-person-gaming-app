"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:2,description:"Documentation for Laravel classes"},l="Backend Class Documentation",o={unversionedId:"api-specification/backend-class-docs",id:"api-specification/backend-class-docs",title:"Backend Class Documentation",description:"Documentation for Laravel classes",source:"@site/docs/api-specification/backend-class-docs.md",sourceDirName:"api-specification",slug:"/api-specification/backend-class-docs",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/backend-class-docs",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/api-specification/backend-class-docs.md",tags:[],version:"current",lastUpdatedBy:"Jennifer Lieu",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Documentation for Laravel classes"},sidebar:"docsSidebar",previous:{title:"Frontend Class Documentation",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/frontend-class-docs"},next:{title:"Backend API Endpoints",permalink:"/project-lomo-in-person-gaming-app/docs/api-specification/backend-api-endpoints"}},i={},p=[{value:"Controller Classes",id:"controller-classes",level:2},{value:"UserController Class",id:"usercontroller-class",level:3},{value:"BeaconController Class",id:"beaconcontroller-class",level:3},{value:"ReportController Class",id:"reportcontroller-class",level:3},{value:"Model Classes",id:"model-classes",level:2},{value:"User",id:"user",level:3},{value:"Beacon",id:"beacon",level:3},{value:"Report",id:"report",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-class-documentation"},"Backend Class Documentation"),(0,r.kt)("p",null,"Documentation for the Laravel backend classes."),(0,r.kt)("h2",{id:"controller-classes"},"Controller Classes"),(0,r.kt)("h3",{id:"usercontroller-class"},"UserController Class"),(0,r.kt)("p",null,"The purpose of this class is to handle HTTP requests pertaining to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/users")," route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"index()")," method: Gets a list of all users from the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/users/"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"store()")," method: Creates a user in the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: POST /api/users/{user}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Request request"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"show(User $user)")," method: Gets user data from the database using their user_id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/users/{user}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: User $user"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"update(User $user)")," method: Updates the user's data in the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-conditions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PUT /api/users/{user}"),(0,r.kt)("li",{parentName:"ul"},"PATCH /api/users/{user}"))),(0,r.kt)("li",{parentName:"ul"},"Parameters: User $user"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"delete(User $user)")," method: Deletes a user from the database using their user_id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: DELETE /api/users/{user}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: User $user"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code")))),(0,r.kt)("h3",{id:"beaconcontroller-class"},"BeaconController Class"),(0,r.kt)("p",null,"The purpose of this class is to handle data pertaining to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/beacons")," route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"index()")," method: Gets a list of all beacons from the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/beacons/"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"store(Request $request)")," method: Creates a beacon in the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: POST /api/beacons/{beacon}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Request request"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"show(Beacon $beacon)")," method: Gets user beacon from the database using their beacon_id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/beacons/{beacon}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Beacon $beacon"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"update(Beacon $beacon)")," method: Updates the beacon's data in the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PUT /api/beacons/{beacon}"),(0,r.kt)("li",{parentName:"ul"},"PATCH /api/beacon/{beacon}"))),(0,r.kt)("li",{parentName:"ul"},"Parameters: Beacon $beacon"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"delete(Beacon $beacon)")," method: Deletes a beacon from the database using their beacon_id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: DELETE /api/beacons/{beacon}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Beacon $beacon"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"showNearby(Request $request)")," method: Gets a list of beacons near the user using the user's location"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/beacons/nearby/{location}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Request $request"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"showRecommended(Request $request)")," method: Gets a list of recommended beacons using ",(0,r.kt)("strong",{parentName:"strong"},"_"),"???"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: GET /api/beacons/recommended/{beacon}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Request $request"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code")))),(0,r.kt)("h3",{id:"reportcontroller-class"},"ReportController Class"),(0,r.kt)("p",null,"The purpose of this class is to handle data pertaining to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/reports")," route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"store(Request $request)")," method: Creates a report in the database"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pre-condition: POST /api/reports/{report}"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Request request"),(0,r.kt)("li",{parentName:"ul"},"Returns: JSON response with HTTP status code")))),(0,r.kt)("h2",{id:"model-classes"},"Model Classes"),(0,r.kt)("p",null,"Model classes are like object classes in Java. They define the object instance for a collection in the database. They follow a naming convention that allows Laravel to automatically connect to the correct database collection/table. The Model classes are singular and the database collection is plural."),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,"The User model class defines the object instance of a users document/row in Laravel. It contains a list of all the users collection fields."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fillable"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that are mass assignable."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"hidden"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that should be hidden for serialization."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"casts"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that should be cast.")))),(0,r.kt)("h3",{id:"beacon"},"Beacon"),(0,r.kt)("p",null,"The Beacon model class defines the object instance of a beacons document/row in Laravel. It contains a list of all the beacons collection fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fillable"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that are mass assignable."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"guarded"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that are protected against mass assignment")))),(0,r.kt)("h3",{id:"report"},"Report"),(0,r.kt)("p",null,"The Report model class defines the object instance of a reports document/row in Laravel. It contains a list of all the reports collection fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fillable"),": array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attributes that are mass assignable.")))))}m.isMDXComponent=!0}}]);