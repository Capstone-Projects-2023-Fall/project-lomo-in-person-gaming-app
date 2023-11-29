"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6472],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return t?n.createElement(m,s(s({ref:a},d),{},{components:t})):n.createElement(m,s({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43858:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const r={sidebar_position:2,description:"Frontend and backend"},s="Class Diagrams",i={unversionedId:"system-architecture/classdiagrams",id:"system-architecture/classdiagrams",title:"Class Diagrams",description:"Frontend and backend",source:"@site/docs/system-architecture/classdiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/classdiagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/classdiagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/system-architecture/classdiagrams.md",tags:[],version:"current",lastUpdatedBy:"tuk04480",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Frontend and backend"},sidebar:"docsSidebar",previous:{title:"Design Mockups",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/design"},next:{title:"Sequence Diagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/sequencediagrams"}},l={},c=[{value:"Frontend Class Diagram",id:"frontend-class-diagram",level:2},{value:"Figure 1.1. React frontend class diagram",id:"figure-11-react-frontend-class-diagram",level:4},{value:"App",id:"app",level:3},{value:"SignupPage",id:"signuppage",level:3},{value:"LoginPage",id:"loginpage",level:3},{value:"HomePage",id:"homepage",level:3},{value:"Figure 1.2. Close up of the HomePage component and associates",id:"figure-12-close-up-of-the-homepage-component-and-associates",level:4},{value:"Header",id:"header",level:4},{value:"Main",id:"main",level:4},{value:"Footer",id:"footer",level:4},{value:"MapContainer",id:"mapcontainer",level:4},{value:"BeaconCircle",id:"beaconcircle",level:4},{value:"BeaconListContainer",id:"beaconlistcontainer",level:4},{value:"BeaconListView",id:"beaconlistview",level:4},{value:"BeaconPopup",id:"beaconpopup",level:4},{value:"BeaconPage",id:"beaconpage",level:3},{value:"Figure 1.3 Close up of the BeaconPage component and associates",id:"figure-13-close-up-of-the-beaconpage-component-and-associates",level:4},{value:"CommentSection",id:"commentsection",level:4},{value:"CreateBeaconPage",id:"createbeaconpage",level:3},{value:"Figure 1.4. Close up of the CreateBeaconPage component",id:"figure-14-close-up-of-the-createbeaconpage-component",level:4},{value:"BeaconForm",id:"beaconform",level:4},{value:"EditBeaconPage",id:"editbeaconpage",level:3},{value:"Figure 1.5. Close up of the EditBeaconPage component",id:"figure-15-close-up-of-the-editbeaconpage-component",level:4},{value:"WaitlistPage",id:"waitlistpage",level:3},{value:"AccountPage",id:"accountpage",level:3},{value:"ReportPage",id:"reportpage",level:3},{value:"UserProfilePage",id:"userprofilepage",level:3},{value:"FriendsPage",id:"friendspage",level:3},{value:"Figure 1.6. Close up of the FriendsPage component",id:"figure-16-close-up-of-the-friendspage-component",level:4},{value:"FriendsList",id:"friendslist",level:4},{value:"Backend Class Diagram",id:"backend-class-diagram",level:2},{value:"Figure 2. Laravel backend class diagram",id:"figure-2-laravel-backend-class-diagram",level:4},{value:"Controllers",id:"controllers",level:3},{value:"Models",id:"models",level:3},{value:"Broadcast Events",id:"broadcast-events",level:3},{value:"BeaconCreated",id:"beaconcreated",level:4},{value:"Frontend-Backend Integration",id:"frontend-backend-integration",level:2},{value:"HTTP requests",id:"http-requests",level:3},{value:"WebSockets",id:"websockets",level:3}],d={toc:c},p="wrapper";function h(e){let{components:a,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,o.kt)("p",null,"The app uses ReactJS for the frontend, Laravel for the backend, and PostgreSQL for the database."),(0,o.kt)("p",null,"In order to provide fast, real-time updates, the app utilizes Laravel's builtin WebSocket along with the Laravel Echo library in both the backend and frontend to establish WebSocket connections between the two."),(0,o.kt)("h2",{id:"frontend-class-diagram"},"Frontend Class Diagram"),(0,o.kt)("p",null,"For the frontend, the app uses ReactJS. ",(0,o.kt)("a",{parentName:"p",href:"#figure-11-react-frontend-class-diagram"},"Figure 1.1")," shows how the React components are connected together to React's main App component to create the user interface of the web app. Components interacting with the backend have a ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData()")," method."),(0,o.kt)("p",null,"The frontend will also use the Laravel Echo library to send and receive data from the backend through the WebSocket."),(0,o.kt)("mermaid",{value:"---\ntitle: React frontend class diagram\n---\nclassDiagram\n    App *-- SignupPage\n    App *-- LoginPage\n    App *-- HomePage\n    App *-- BeaconPage\n    App *-- CreateBeaconPage\n    App *-- EditBeaconPage\n    App *-- WaitlistPage\n    App *-- AccountPage\n    App *-- ReportPage\n    App *-- UserProfilePage\n    App *-- FriendsPage\n\n    class SignupPage{\n        + signup()\n    }\n\n    class LoginPage{\n        + login()\n    }\n\n    HomePage *-- Header\n    HomePage *-- Main\n    HomePage *-- Footer\n    Main *-- MapContainer\n    MapContainer *-- BeaconCircle\n    BeaconCircle *-- BeaconPopup\n    Footer *-- BeaconListContainer\n    BeaconListContainer *-- BeaconList\n    BeaconList *-- BeaconPopup\n    class HomePage{\n        + fetchData()\n    }\n    class MapContainer{\n        + fetchData()\n    }\n    class BeaconCircle{\n        + fetchData()\n    }\n    class BeaconListContainer{\n        + fetchData()\n    }\n\n    BeaconPage *-- CommentSection\n    class BeaconPage{\n        + var isHost\n        + fetchData()\n    }\n    class CommentSection{\n        + fetchData()\n    }\n\n    CreateBeaconPage *-- BeaconForm\n    EditBeaconPage *-- BeaconForm\n    class CreateBeaconPage{\n        + fetchData()\n    }\n    class EditBeaconPage{\n        + fetchData()\n    }\n\n    class AccountPage{\n        + logout()\n        + fetchData()\n    }\n\n    class ReportPage{\n        + fetchData()\n    } \n\n    class UserProfilePage{\n        + fetchData()\n    }\n\n    FriendsPage *-- FriendsList\n    class FriendsPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-11-react-frontend-class-diagram"},"Figure 1.1. React frontend class diagram"),(0,o.kt)("h3",{id:"app"},"App"),(0,o.kt)("p",null,"App is the entire app. It is connected to all of the page components and will switch between the pages to display them to the user as the current page. Each page encompasses the user's entire screen."),(0,o.kt)("h3",{id:"signuppage"},"SignupPage"),(0,o.kt)("p",null,"The SignupPage displays a signup form and is the first page displayed every time the user uses the app for the first time. A login button exists underneath the signup form."),(0,o.kt)("h3",{id:"loginpage"},"LoginPage"),(0,o.kt)("p",null,"The LoginPage can be reached from the ",(0,o.kt)("a",{parentName:"p",href:"#signuppage"},"SignupPage"),". It displays a login form. A signup button exists underneath the login form."),(0,o.kt)("h3",{id:"homepage"},"HomePage"),(0,o.kt)("mermaid",{value:"classDiagram\n    HomePage *-- Header\n    HomePage *-- Main\n    HomePage *-- Footer\n    Main *-- MapContainer\n    MapContainer *-- BeaconCircle\n    BeaconCircle *-- BeaconPopup\n    Footer *-- BeaconListContainer\n    BeaconListContainer *-- BeaconList\n    BeaconList *-- BeaconPopup\n    class HomePage{\n        + fetchData()\n    }\n    class MapContainer{\n        + fetchData()\n    }\n    class BeaconCircle{\n        + fetchData()\n    }\n    class BeaconListContainer{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-12-close-up-of-the-homepage-component-and-associates"},"Figure 1.2. Close up of the HomePage component and associates"),(0,o.kt)("p",null,"The HomePage is the default page that the user will see after logging in. It is broken up into 3 components: ",(0,o.kt)("a",{parentName:"p",href:"#header"},"header"),", ",(0,o.kt)("a",{parentName:"p",href:"#main"},"main"),", ",(0,o.kt)("a",{parentName:"p",href:"#footer"},"footer"),". "),(0,o.kt)("h4",{id:"header"},"Header"),(0,o.kt)("p",null,"The header component contains the user icon and the friends icon. The user icon is fetched from the server. Both of the icons are clickable. The user icon navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#userprofilepage"},"UserProfilePage")," and the friends icon navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#friendspage"},"FriendsPage"),"."),(0,o.kt)("h4",{id:"main"},"Main"),(0,o.kt)("p",null,"The main component takes the MapContainer and forces it to fit within its designated area on HomePage screen. It displays an interactive map along with icon circles of beacons on the map. The map is created by the ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},"MapContainer")," component and the beacon circles are created by the ",(0,o.kt)("a",{parentName:"p",href:"#beaconcircle"},"BeaconCircle")," component."),(0,o.kt)("p",null,"Each circle is clickable a ",(0,o.kt)("a",{parentName:"p",href:"#beaconpopup"},"popup of a beacon")," will appear, displaying important information such as the name of the beacon, the user hosting it, the date, time, and location, and a description. Beacon data is fetched from the server."),(0,o.kt)("p",null,"As the user drags around the map, new beacon icons within the map's area will appear and beacons outside of the map area will disappear."),(0,o.kt)("h4",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer component contains a slide-up box to view all of the beacons as a list. At rest, the slide-up box appears to be just a box. But when the user clicks it or slide up from it, it displays a list view of all the beacons."),(0,o.kt)("h4",{id:"mapcontainer"},"MapContainer"),(0,o.kt)("p",null,"The MapContainer displays an interactive map sourced from a maps API."),(0,o.kt)("h4",{id:"beaconcircle"},"BeaconCircle"),(0,o.kt)("p",null,"The BeaconCircle is an icon circle of a beacon displayed on the interactive map. It's clickable and will open a ",(0,o.kt)("a",{parentName:"p",href:"#beaconpopup"},"beacon popup"),". Beacon data is fetched from the server."),(0,o.kt)("h4",{id:"beaconlistcontainer"},"BeaconListContainer"),(0,o.kt)("p",null,"The BeaconListContainer is a container for the list view. The container displays the 2 clickable options to filter beacons by either nearby or recommended. It passes the filters to the the ",(0,o.kt)("a",{parentName:"p",href:"#BeaconListView"},"BeaconListView")," component to generate and display the different filtered views."),(0,o.kt)("h4",{id:"beaconlistview"},"BeaconListView"),(0,o.kt)("p",null,"The BeaconListView displays a list of beacons based on the filter options passed into the container. Beacon data is fetched from the server."),(0,o.kt)("h4",{id:"beaconpopup"},"BeaconPopup"),(0,o.kt)("p",null,"The BeaconPopup is a popup on the screen that is displayed when a user clicks on a ",(0,o.kt)("a",{parentName:"p",href:"#beaconcircle"},"beacon circle")," or a ",(0,o.kt)("a",{parentName:"p",href:"#listviewcontainer"},"beacon listed in the list view"),". It displays at-a-glance important information about the beacon such as the name, the host, the date, time, and location, and the description. Beacon data is fetched from the server."),(0,o.kt)("h3",{id:"beaconpage"},"BeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    BeaconPage *-- CommentSection\n    class BeaconPage{\n        + var isHost\n        + fetchData()\n    }\n    class CommentSection{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-13-close-up-of-the-beaconpage-component-and-associates"},"Figure 1.3 Close up of the BeaconPage component and associates"),(0,o.kt)("p",null,"The BeaconPage displays all of the beacon information with a comment section. Beacon and comment data are fetched from the server. The page can also detect whether the user is the host or not by comparing the beacon's host_id to the user_id. If they're the same, then the user is host, and will see buttons to edit the BeaconPage, manage the beacon's waitlist, delete comments, and add comments. Regular users can view the page, add comments, and have buttons to join the beacon or leave the beacon."),(0,o.kt)("h4",{id:"commentsection"},"CommentSection"),(0,o.kt)("p",null,"The CommentSection displays all the comments about the beacon from users. It also has an input box for users to add their comments, which is then sent to the server and added to the database. Comments are fetched from the server."),(0,o.kt)("h3",{id:"createbeaconpage"},"CreateBeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    CreateBeaconPage *-- BeaconForm\n    class CreateBeaconPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-14-close-up-of-the-createbeaconpage-component"},"Figure 1.4. Close up of the CreateBeaconPage component"),(0,o.kt)("p",null,"The CreateBeaconPage displays a form from the BeaconForm component for users to fill out to create a new beacon such as a title, description, data, time, location, number of players needed, game, beacon picture. Each field has hints for the user on how to fill out each field. If a beacon has been successfully submitted, then the user will see a success. Otherwise, they will see an error."),(0,o.kt)("p",null,'All users can navigate to this page from the "Create Beacon" button on the HomePage.'),(0,o.kt)("h4",{id:"beaconform"},"BeaconForm"),(0,o.kt)("p",null,"The BeaconForm component's function is to display a beacon form for the user to fill out. The form gathers all the fillable and editable information about the beacon such as the title, image, game, description, date/time, number of players needed. It can be used to create a beacon and edit a beacon. It's purpose it to be called by either the CreateBeaconPage or the EditBeaconPage."),(0,o.kt)("h3",{id:"editbeaconpage"},"EditBeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    EditBeaconPage *-- BeaconForm\n    class EditBeaconPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-15-close-up-of-the-editbeaconpage-component"},"Figure 1.5. Close up of the EditBeaconPage component"),(0,o.kt)("p",null,"The EditBeaconPage displays a form from the BeaconForm component for hosts to to edit all of their beacon information. Each field has already been prepopulated with their currently saved beacon information. If a beacon has been successfully edited, then the user will see a success. Otherwise, they will see an error."),(0,o.kt)("p",null,"Only hosts can navigate to this page from their hosted beacon page."),(0,o.kt)("h3",{id:"waitlistpage"},"WaitlistPage"),(0,o.kt)("p",null,'The WaitlistPage can be reached from the CreateBeaconPage. It displays a list of all the users, along with their avatar and usernames, who clicked the "join beacon" button and shown interest in wanting to participate in the meetup event. Only hosts can view this page for beacons that they have created. They can approve users to join the beacon by clicking on a checkmark button by the user. Each user is clickable as well and will navigate the host to the user\'s profile page.'),(0,o.kt)("h3",{id:"accountpage"},"AccountPage"),(0,o.kt)("p",null,"The AccountPage can be reached from the ",(0,o.kt)("a",{parentName:"p",href:"#5-userprofilepage"},"UserProfilePage"),". It displays the user's account information such as their name, username, email, and password. It also has a button to report users. When the report button is clicked, it will take them to the ",(0,o.kt)("a",{parentName:"p",href:"#7-reportpage"},"ReportPage"),"."),(0,o.kt)("h3",{id:"reportpage"},"ReportPage"),(0,o.kt)("p",null,"The ReportPage can be reached from a ",(0,o.kt)("a",{parentName:"p",href:"#5-userprofilepage"},"user's profile page"),". It displays a form for the user to fill out and report other users for harassment, inappropriate beacons, and unsafe beacons. The report will be sent to and stored by the database."),(0,o.kt)("h3",{id:"userprofilepage"},"UserProfilePage"),(0,o.kt)("p",null,"Each user has a user profile. The UserProfilePage displays information about the user that allows other users to get an idea of who they are and how many meetups have they attended or hosted. Users can edit their own profiles by clicking the user icon in the ",(0,o.kt)("a",{parentName:"p",href:"#2-homepage"},"HomePage"),". It has also a button that navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#6-accountpage"},"AccountPage"),' and a "report user" button that navigates the user to the ',(0,o.kt)("a",{parentName:"p",href:"#8-reportpage"},"ReportPage"),"."),(0,o.kt)("h3",{id:"friendspage"},"FriendsPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    FriendsPage *-- FriendsList\n    class FriendsPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-16-close-up-of-the-friendspage-component"},"Figure 1.6. Close up of the FriendsPage component"),(0,o.kt)("p",null,"The FriendsPage can display 2 different list of friends: a list of all friends, and a list of recent friends. It passes the filters to the ",(0,o.kt)("a",{parentName:"p",href:"#friendslist"},"FriendsList")," component to generate and display the different friends list. Friend data is fetched from the server."),(0,o.kt)("h4",{id:"friendslist"},"FriendsList"),(0,o.kt)("p",null,"The FriendsList displays a list of friends based on which filter is passed into the component."),(0,o.kt)("h2",{id:"backend-class-diagram"},"Backend Class Diagram"),(0,o.kt)("p",null,"The backend uses Laravel Sail, a dockerized Laravel."),(0,o.kt)("p",null,"The purpose of the backend is to create authenticated RESTful API routes and move data between the frontend and database. Alongside HTTP requests, it will also use WebSockets to send real-time updates to the frontend when a new beacon create or a new comment posted on a beacon."),(0,o.kt)("mermaid",{value:"---\ntitle: Laravel backend class diagram\n---\nclassDiagram\n    web *-- AuthController\n    class web {\n        - Route::post('register', [AuthController::class, 'register'])\n        - Route::post('login', [AuthController::class, 'login'])\n    }\n\n    class AuthController {\n        + register(Request)\n        + login(Request)\n    }\n\n    api *-- UserController\n    api *-- BeaconController\n    api *-- ReportController\n\n    class api {\n        - Route::apiResources(['users' => UserController::class,'beacons' => BeaconController::class,])\n    }\n\n    UserController *-- User\n    class UserController{\n        + index()\n        + store(Request)\n        + show(string)\n        + update(Request)\n        + destory(string)\n    }\n    class User {\n        - array fillable\n    }\n\n    BeaconController *-- Beacon\n    BeaconController *-- BeaconCreated\n    class BeaconController{\n        + index()\n        + store(Request)\n        + show(string)\n        + update(Request)\n        + destory(string)\n    }\n    class Beacon {\n        - array fillable\n    }\n    BeaconCreated <|-- ShouldBroadcast\n    class BeaconCreated {\n        + Beacon beacon\n        + __construct(Beacon): void\n        + broadcastOn(): array\n    }\n\n    ReportController *-- Report\n    class ReportController{\n        + store(Request)\n    }\n    class Report {\n        - array fillable\n    }"}),(0,o.kt)("h4",{id:"figure-2-laravel-backend-class-diagram"},"Figure 2. Laravel backend class diagram"),(0,o.kt)("p",null,"The web.php file creates public routes."),(0,o.kt)("p",null,"The api.php file creates the api routes that are protected by Laravel Sanctum's middleware and require authentication to access."),(0,o.kt)("h3",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"Controllers act as an intermediary between the frontend HTTP requests and the database. They use an instance of the Model class to send data to the database and query data from the database, sending the necessary request back to the frontend."),(0,o.kt)("p",null,"The typical 5 CRUD api functions are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"index(): gets a list of all items"),(0,o.kt)("li",{parentName:"ol"},"store(): creates a new item"),(0,o.kt)("li",{parentName:"ol"},"show(): gets an item by its id"),(0,o.kt)("li",{parentName:"ol"},"update(): updates an item using its id"),(0,o.kt)("li",{parentName:"ol"},"destroy(): deletes an item")),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,"Models represent a table in the database and contains a list of all the table fields."),(0,o.kt)("p",null,"They are responsible for interacting with the database tables using Laravel's Eloquent ORM, such as retrieving data, updating records, creating new records, deleting records, and querying records."),(0,o.kt)("h3",{id:"broadcast-events"},"Broadcast Events"),(0,o.kt)("p",null,"Broadcast events are used as part of the pub-sub WebSocket model to create a one-way WebSocket channel notifying changes that occur on the server. They define the WebSocket channel and the data that needs to be sent to the frontend through the WebSocket. They are activated when the ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast()")," function is called, pushing data to all connected clients through the WebSocket, in real-time."),(0,o.kt)("p",null,"Broadcast events that need to be pushed through WebSockets in real-time implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldBroadcast")," interface."),(0,o.kt)("h4",{id:"beaconcreated"},"BeaconCreated"),(0,o.kt)("p",null,"This event is triggered when a new beacon has been successfully created and saved into the database. It returns the newly created beacon's data.  It implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldBroadcast")," interface for real-time broadcasting."),(0,o.kt)("h2",{id:"frontend-backend-integration"},"Frontend-Backend Integration"),(0,o.kt)("p",null,"This section describes how the frontend and backend are connected by explaining how the data flows between frontend, backend, and database."),(0,o.kt)("p",null,"The app uses a combination of HTTP requests and WebSockets to send and receive requests. For the most part, data is sent and received through HTTP requests at API endpoints. The pub-sub WebSocket pattern is used to push data one-way to the frontend in real-time whenever an event is triggered. The frontend uses event listeners to connect to WebSocket channels and listen for events."),(0,o.kt)("p",null,"The backend is comprised of all the boxes in between the frontend box and the database box."),(0,o.kt)("h3",{id:"http-requests"},"HTTP requests"),(0,o.kt)("p",null,"Data can be sent and received through HTTP requests."),(0,o.kt)("mermaid",{value:"sequenceDiagram\n  participant Frontend\n\n  participant API Middleware\n  participant Controller\n  participant Model\n  participant Database\n\n  Frontend->>API Middleware: Sends an HTTP request with token\n  activate API Middleware\n  \n  API Middleware->>Controller: Successfully authenticates the token<br>Process data in Controller\n  deactivate API Middleware\n  activate Controller\n\n  Controller->>Model: Creates a new Model object\n  activate Model\n  Model--\x3e>Controller: Returns a new Model instance\n  deactivate Model\n\n  Controller->>Database: Use Model object to access database\n  activate Database\n  Database--\x3e>Controller: Returns data\n  deactivate Database\n  \n  Controller--\x3e>Frontend: Returns data\n  deactivate Controller"}),(0,o.kt)("h3",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"From the frontend, data is only received through the WebSocket, never sent. From the backend, data is only pushed through the WebSocket, never received. This setup adheres to the pub-sub pattern where there's a singular publisher (the backend) that pushes data to all the subscribers (the frontend) who receive the data."),(0,o.kt)("p",null,"WebSockets are used to display beacon data in real-time such as beacon information, comments, users joined."),(0,o.kt)("mermaid",{value:"sequenceDiagram\n  participant Frontend\n  participant API Middleware\n  participant Controller\n  participant Model\n  participant Event\n  participant Database\n\n  Frontend->>API Middleware: Sends a POST/PATCH request with token\n  activate API Middleware\n  \n  API Middleware->>Controller: Successfully authenticates the token<br>Process data in Controller\n  deactivate API Middleware\n  activate Controller\n\n  Controller->>Model: Creates a new Model object\n  activate Model\n  Model--\x3e>Controller: Returns a new Model instance\n  deactivate Model\n\n  Controller->>Database: Use Model object to create data\n  activate Database\n  Database--\x3e>Controller: Returns successful\n  deactivate Database\n  \n  Controller->>Event: Calls broadcast(new Event($data)) to trigger event\n  deactivate Controller\n  activate Event\n  Event--\x3eFrontend: Pushes $data to the frontend through the event's WebSocket channel\n  deactivate Event\n\n  Frontend->>Frontend: Displays data in real time"}))}h.isMDXComponent=!0}}]);