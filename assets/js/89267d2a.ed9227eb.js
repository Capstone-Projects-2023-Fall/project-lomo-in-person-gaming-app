"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6472],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:2,description:"Frontend and backend"},s="Class Diagrams",i={unversionedId:"system-architecture/classdiagrams",id:"system-architecture/classdiagrams",title:"Class Diagrams",description:"Frontend and backend",source:"@site/docs/system-architecture/classdiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/classdiagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/classdiagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/system-architecture/classdiagrams.md",tags:[],version:"current",lastUpdatedBy:"AlanU21",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Frontend and backend"},sidebar:"docsSidebar",previous:{title:"Design Mockups",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/design"},next:{title:"Sequence Diagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/sequencediagrams"}},l={},c=[{value:"Frontend Class Diagram",id:"frontend-class-diagram",level:2},{value:"Figure 1.1. React frontend class diagram",id:"figure-11-react-frontend-class-diagram",level:4},{value:"App",id:"app",level:3},{value:"SignupPage",id:"signuppage",level:3},{value:"LoginPage",id:"loginpage",level:3},{value:"HomePage",id:"homepage",level:3},{value:"Figure 1.2. Close up of the HomePage component and associates",id:"figure-12-close-up-of-the-homepage-component-and-associates",level:4},{value:"Header",id:"header",level:4},{value:"Main",id:"main",level:4},{value:"Footer",id:"footer",level:4},{value:"MapContainer",id:"mapcontainer",level:4},{value:"BeaconCircle",id:"beaconcircle",level:4},{value:"BeaconListContainer",id:"beaconlistcontainer",level:4},{value:"BeaconListView",id:"beaconlistview",level:4},{value:"BeaconPopup",id:"beaconpopup",level:4},{value:"BeaconPage",id:"beaconpage",level:3},{value:"Figure 1.3 Close up of the BeaconPage component and associates",id:"figure-13-close-up-of-the-beaconpage-component-and-associates",level:4},{value:"CommentSection",id:"commentsection",level:4},{value:"CreateBeaconPage",id:"createbeaconpage",level:3},{value:"Figure 1.4. Close up of the CreateBeaconPage component",id:"figure-14-close-up-of-the-createbeaconpage-component",level:4},{value:"BeaconForm",id:"beaconform",level:4},{value:"EditBeaconPage",id:"editbeaconpage",level:3},{value:"Figure 1.5. Close up of the EditBeaconPage component",id:"figure-15-close-up-of-the-editbeaconpage-component",level:4},{value:"WaitlistPage",id:"waitlistpage",level:3},{value:"AccountPage",id:"accountpage",level:3},{value:"ReportPage",id:"reportpage",level:3},{value:"UserProfilePage",id:"userprofilepage",level:3},{value:"FriendsPage",id:"friendspage",level:3},{value:"Figure 1.6. Close up of the FriendsPage component",id:"figure-16-close-up-of-the-friendspage-component",level:4},{value:"FriendsList",id:"friendslist",level:4},{value:"Backend Class Diagram",id:"backend-class-diagram",level:2},{value:"Figure 2. Laravel backend class diagram",id:"figure-2-laravel-backend-class-diagram",level:4},{value:"api",id:"api",level:3},{value:"Models",id:"models",level:3},{value:"User",id:"user",level:4},{value:"Beacon",id:"beacon",level:4},{value:"Report",id:"report",level:4},{value:"Controllers",id:"controllers",level:3},{value:"UserController",id:"usercontroller",level:4},{value:"BeaconController",id:"beaconcontroller",level:4},{value:"ReportController",id:"reportcontroller",level:4},{value:"Broadcast Events",id:"broadcast-events",level:3},{value:"NewBeaconEvent",id:"newbeaconevent",level:4},{value:"NewCommentEvent",id:"newcommentevent",level:4},{value:"Event Listeners",id:"event-listeners",level:3},{value:"SendNewBeacon",id:"sendnewbeacon",level:4},{value:"SendNewComment",id:"sendnewcomment",level:4}],d={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,o.kt)("p",null,"The app uses ReactJS for the frontend, Laravel for the backend, and MongoDB for the database. The backend is composed in a docker container running a sail network with the Laravel Sail image and the MongoDB image. "),(0,o.kt)("p",null,"In order to provide fast, real-time updates, the app utilizes Laravel's builtin WebSocket along with the Laravel Echo library in both the backend and frontend to establish WebSocket connections between the two."),(0,o.kt)("h2",{id:"frontend-class-diagram"},"Frontend Class Diagram"),(0,o.kt)("p",null,"For the frontend, the app uses ReactJS. ",(0,o.kt)("a",{parentName:"p",href:"#figure-11-react-frontend-class-diagram"},"Figure 1.1")," shows how the React components are connected together to React's main App component to create the user interface of the web app. Components interacting with the backend have a ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData()")," method."),(0,o.kt)("p",null,"The frontend will also use the Laravel Echo library to send and receive data from the backend through the WebSocket."),(0,o.kt)("mermaid",{value:"---\ntitle: React frontend class diagram\n---\nclassDiagram\n    App *-- SignupPage\n    App *-- LoginPage\n    App *-- HomePage\n    App *-- BeaconPage\n    App *-- CreateBeaconPage\n    App *-- EditBeaconPage\n    App *-- WaitlistPage\n    App *-- AccountPage\n    App *-- ReportPage\n    App *-- UserProfilePage\n    App *-- FriendsPage\n\n    class SignupPage{\n        + signup()\n    }\n\n    class LoginPage{\n        + login()\n    }\n\n    HomePage *-- Header\n    HomePage *-- Main\n    HomePage *-- Footer\n    Main *-- MapContainer\n    MapContainer *-- BeaconCircle\n    BeaconCircle *-- BeaconPopup\n    Footer *-- BeaconListContainer\n    BeaconListContainer *-- BeaconList\n    BeaconList *-- BeaconPopup\n    class HomePage{\n        + fetchData()\n    }\n    class MapContainer{\n        + fetchData()\n    }\n    class BeaconCircle{\n        + fetchData()\n    }\n    class BeaconListContainer{\n        + fetchData()\n    }\n\n    BeaconPage *-- CommentSection\n    class BeaconPage{\n        + var isHost\n        + fetchData()\n    }\n    class CommentSection{\n        + fetchData()\n    }\n\n    CreateBeaconPage *-- BeaconForm\n    EditBeaconPage *-- BeaconForm\n    class CreateBeaconPage{\n        + fetchData()\n    }\n    class EditBeaconPage{\n        + fetchData()\n    }\n\n    class AccountPage{\n        + logout()\n        + fetchData()\n    }\n\n    class ReportPage{\n        + fetchData()\n    } \n\n    class UserProfilePage{\n        + fetchData()\n    }\n\n    FriendsPage *-- FriendsList\n    class FriendsPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-11-react-frontend-class-diagram"},"Figure 1.1. React frontend class diagram"),(0,o.kt)("h3",{id:"app"},"App"),(0,o.kt)("p",null,"App is the entire app. It is connected to all of the page components and will switch between the pages to display them to the user as the current page. Each page encompasses the user's entire screen."),(0,o.kt)("h3",{id:"signuppage"},"SignupPage"),(0,o.kt)("p",null,"The SignupPage displays a signup form and is the first page displayed every time the user uses the app for the first time. A login button exists underneath the signup form."),(0,o.kt)("h3",{id:"loginpage"},"LoginPage"),(0,o.kt)("p",null,"The LoginPage can be reached from the ",(0,o.kt)("a",{parentName:"p",href:"#signuppage"},"SignupPage"),". It displays a login form. A signup button exists underneath the login form."),(0,o.kt)("h3",{id:"homepage"},"HomePage"),(0,o.kt)("mermaid",{value:"classDiagram\n    HomePage *-- Header\n    HomePage *-- Main\n    HomePage *-- Footer\n    Main *-- MapContainer\n    MapContainer *-- BeaconCircle\n    BeaconCircle *-- BeaconPopup\n    Footer *-- BeaconListContainer\n    BeaconListContainer *-- BeaconList\n    BeaconList *-- BeaconPopup\n    class HomePage{\n        + fetchData()\n    }\n    class MapContainer{\n        + fetchData()\n    }\n    class BeaconCircle{\n        + fetchData()\n    }\n    class BeaconListContainer{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-12-close-up-of-the-homepage-component-and-associates"},"Figure 1.2. Close up of the HomePage component and associates"),(0,o.kt)("p",null,"The HomePage is the default page that the user will see after logging in. It is broken up into 3 components: ",(0,o.kt)("a",{parentName:"p",href:"#header"},"header"),", ",(0,o.kt)("a",{parentName:"p",href:"#main"},"main"),", ",(0,o.kt)("a",{parentName:"p",href:"#footer"},"footer"),". "),(0,o.kt)("h4",{id:"header"},"Header"),(0,o.kt)("p",null,"The header component contains the user icon and the friends icon. The user icon is fetched from the server. Both of the icons are clickable. The user icon navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#userprofilepage"},"UserProfilePage")," and the friends icon navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#friendspage"},"FriendsPage"),"."),(0,o.kt)("h4",{id:"main"},"Main"),(0,o.kt)("p",null,"The main component takes the MapContainer and forces it to fit within its designated area on HomePage screen. It displays an interactive map along with icon circles of beacons on the map. The map is created by the ",(0,o.kt)("a",{parentName:"p",href:"#mapcontainer"},"MapContainer")," component and the beacon circles are created by the ",(0,o.kt)("a",{parentName:"p",href:"#beaconcircle"},"BeaconCircle")," component."),(0,o.kt)("p",null,"Each circle is clickable a ",(0,o.kt)("a",{parentName:"p",href:"#beaconpopup"},"popup of a beacon")," will appear, displaying important information such as the name of the beacon, the user hosting it, the date, time, and location, and a description. Beacon data is fetched from the server."),(0,o.kt)("p",null,"As the user drags around the map, new beacon icons within the map's area will appear and beacons outside of the map area will disappear."),(0,o.kt)("h4",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer component contains a slide-up box to view all of the beacons as a list. At rest, the slide-up box appears to be just a box. But when the user clicks it or slide up from it, it displays a list view of all the beacons."),(0,o.kt)("h4",{id:"mapcontainer"},"MapContainer"),(0,o.kt)("p",null,"The MapContainer displays an interactive map sourced from a maps API."),(0,o.kt)("h4",{id:"beaconcircle"},"BeaconCircle"),(0,o.kt)("p",null,"The BeaconCircle is an icon circle of a beacon displayed on the interactive map. It's clickable and will open a ",(0,o.kt)("a",{parentName:"p",href:"#beaconpopup"},"beacon popup"),". Beacon data is fetched from the server."),(0,o.kt)("h4",{id:"beaconlistcontainer"},"BeaconListContainer"),(0,o.kt)("p",null,"The BeaconListContainer is a container for the list view. The container displays the 2 clickable options to filter beacons by either nearby or recommended. It passes the filters to the the ",(0,o.kt)("a",{parentName:"p",href:"#BeaconListView"},"BeaconListView")," component to generate and display the different filtered views."),(0,o.kt)("h4",{id:"beaconlistview"},"BeaconListView"),(0,o.kt)("p",null,"The BeaconListView displays a list of beacons based on the filter options passed into the container. Beacon data is fetched from the server."),(0,o.kt)("h4",{id:"beaconpopup"},"BeaconPopup"),(0,o.kt)("p",null,"The BeaconPopup is a popup on the screen that is displayed when a user clicks on a ",(0,o.kt)("a",{parentName:"p",href:"#beaconcircle"},"beacon circle")," or a ",(0,o.kt)("a",{parentName:"p",href:"#listviewcontainer"},"beacon listed in the list view"),". It displays at-a-glance important information about the beacon such as the name, the host, the date, time, and location, and the description. Beacon data is fetched from the server."),(0,o.kt)("h3",{id:"beaconpage"},"BeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    BeaconPage *-- CommentSection\n    class BeaconPage{\n        + var isHost\n        + fetchData()\n    }\n    class CommentSection{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-13-close-up-of-the-beaconpage-component-and-associates"},"Figure 1.3 Close up of the BeaconPage component and associates"),(0,o.kt)("p",null,"The BeaconPage displays all of the beacon information with a comment section. Beacon and comment data are fetched from the server. The page can also detect whether the user is the host or not by comparing the beacon's host_id to the user_id. If they're the same, then the user is host, and will see buttons to edit the BeaconPage, manage the beacon's waitlist, delete comments, and add comments. Regular users can view the page, add comments, and have buttons to join the beacon or leave the beacon."),(0,o.kt)("h4",{id:"commentsection"},"CommentSection"),(0,o.kt)("p",null,"The CommentSection displays all the comments about the beacon from users. It also has an input box for users to add their comments, which is then sent to the server and added to the database. Comments are fetched from the server."),(0,o.kt)("h3",{id:"createbeaconpage"},"CreateBeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    CreateBeaconPage *-- BeaconForm\n    class CreateBeaconPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-14-close-up-of-the-createbeaconpage-component"},"Figure 1.4. Close up of the CreateBeaconPage component"),(0,o.kt)("p",null,"The CreateBeaconPage displays a form from the BeaconForm component for users to fill out to create a new beacon such as a title, description, data, time, location, number of players needed, game, beacon picture. Each field has hints for the user on how to fill out each field. If a beacon has been successfully submitted, then the user will see a success. Otherwise, they will see an error."),(0,o.kt)("p",null,'All users can navigate to this page from the "Create Beacon" button on the HomePage.'),(0,o.kt)("h4",{id:"beaconform"},"BeaconForm"),(0,o.kt)("p",null,"The BeaconForm component's function is to display a beacon form for the user to fill out. The form gathers all the fillable and editable information about the beacon such as the title, image, game, description, date/time, number of players needed. It can be used to create a beacon and edit a beacon. It's purpose it to be called by either the CreateBeaconPage or the EditBeaconPage."),(0,o.kt)("h3",{id:"editbeaconpage"},"EditBeaconPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    EditBeaconPage *-- BeaconForm\n    class EditBeaconPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-15-close-up-of-the-editbeaconpage-component"},"Figure 1.5. Close up of the EditBeaconPage component"),(0,o.kt)("p",null,"The EditBeaconPage displays a form from the BeaconForm component for hosts to to edit all of their beacon information. Each field has already been prepopulated with their currently saved beacon information. If a beacon has been successfully edited, then the user will see a success. Otherwise, they will see an error."),(0,o.kt)("p",null,"Only hosts can navigate to this page from their hosted beacon page."),(0,o.kt)("h3",{id:"waitlistpage"},"WaitlistPage"),(0,o.kt)("p",null,'The WaitlistPage can be reached from the CreateBeaconPage. It displays a list of all the users, along with their avatar and usernames, who clicked the "join beacon" button and shown interest in wanting to participate in the meetup event. Only hosts can view this page for beacons that they have created. They can approve users to join the beacon by clicking on a checkmark button by the user. Each user is clickable as well and will navigate the host to the user\'s profile page.'),(0,o.kt)("h3",{id:"accountpage"},"AccountPage"),(0,o.kt)("p",null,"The AccountPage can be reached from the ",(0,o.kt)("a",{parentName:"p",href:"#5-userprofilepage"},"UserProfilePage"),". It displays the user's account information such as their name, username, email, and password. It also has a button to report users. When the report button is clicked, it will take them to the ",(0,o.kt)("a",{parentName:"p",href:"#7-reportpage"},"ReportPage"),"."),(0,o.kt)("h3",{id:"reportpage"},"ReportPage"),(0,o.kt)("p",null,"The ReportPage can be reached from a ",(0,o.kt)("a",{parentName:"p",href:"#5-userprofilepage"},"user's profile page"),". It displays a form for the user to fill out and report other users for harassment, inappropriate beacons, and unsafe beacons. The report will be sent to and stored by the database."),(0,o.kt)("h3",{id:"userprofilepage"},"UserProfilePage"),(0,o.kt)("p",null,"Each user has a user profile. The UserProfilePage displays information about the user that allows other users to get an idea of who they are and how many meetups have they attended or hosted. Users can edit their own profiles by clicking the user icon in the ",(0,o.kt)("a",{parentName:"p",href:"#2-homepage"},"HomePage"),". It has also a button that navigates to the ",(0,o.kt)("a",{parentName:"p",href:"#6-accountpage"},"AccountPage"),' and a "report user" button that navigates the user to the ',(0,o.kt)("a",{parentName:"p",href:"#8-reportpage"},"ReportPage"),"."),(0,o.kt)("h3",{id:"friendspage"},"FriendsPage"),(0,o.kt)("mermaid",{value:"classDiagram\n    FriendsPage *-- FriendsList\n    class FriendsPage{\n        + fetchData()\n    }"}),(0,o.kt)("h4",{id:"figure-16-close-up-of-the-friendspage-component"},"Figure 1.6. Close up of the FriendsPage component"),(0,o.kt)("p",null,"The FriendsPage can display 2 different list of friends: a list of all friends, and a list of recent friends. It passes the filters to the ",(0,o.kt)("a",{parentName:"p",href:"#friendslist"},"FriendsList")," component to generate and display the different friends list. Friend data is fetched from the server."),(0,o.kt)("h4",{id:"friendslist"},"FriendsList"),(0,o.kt)("p",null,"The FriendsList displays a list of friends based on which filter is passed into the component."),(0,o.kt)("h2",{id:"backend-class-diagram"},"Backend Class Diagram"),(0,o.kt)("p",null,"The backend is contained within a docker container composed of the Laravel Sail image for the backend and the MongoDB image for the database. The docker images shares the sail network allowing them to communicate with each other."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The purpose of the backend is to create authenticated RESTful API routes and move data between the frontend and database.")," Alongside HTTP requests, it will also use WebSockets to send real-time updates to the frontend when a new beacon create or a new comment posted on a beacon."),(0,o.kt)("p",null,"It does that by creating a url route in the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/api.php")," file. Each route is mapped to a function inside the Controller files to handle that data. Each Controller file explicitly uses its associated Model file to send data to the database. For each Model file, Laravel will use their associated migration files to send data to the database behind the scenes."),(0,o.kt)("mermaid",{value:"---\ntitle: Laravel backend class diagram\n---\nclassDiagram\n    api *-- UserController\n    api *-- BeaconController\n    api *-- ReportController\n\n    class api {\n        - Route::apiResources([\n            'users' => UserController::class,\n            'beacons' => BeaconController::class,\n        ])\n        - Route::get('/beacons/recommended', [BeaconController::class, 'getRecommendedBeacons'])\n        - Route::get('/beacons/nearby', [BeaconController::class, 'getNearbyBeacons'])\n        - Route::post('/reports', [ReportController::class, 'store'])\n    }\n\n    UserController *-- User\n    class UserController{\n        + store(Request): array\n        + index(Request): array\n        + show(Request): array\n        + update(Request): array\n        + destory(Request): array\n    }\n    class User {\n        - array fillable\n    }\n\n    BeaconController *-- Beacon\n    BeaconController *-- NewBeaconEvent\n    NewBeaconEvent *-- SendNewBeacon\n    BeaconController *-- NewCommentEvent\n    NewCommentEvent *-- SendNewComment\n    class BeaconController{\n        + store(Request): array\n        + index(Request): array\n        + show(Request): array\n        + update(Request): array\n        + destory(Request): array\n\n        + getRecommendedBeacons(Request): array\n        + getNearbyBeacons(Request): array\n    }\n    class Beacon {\n        - array fillable\n    }\n    class NewBeaconEvent {\n        + broadcastWith()\n    }\n    class NewCommentEvent {\n        + broadcastWith()\n    }\n    class SendNewBeacon {\n        + handle()\n    }\n    class SendNewComment {\n        + handle()\n    }\n\n    ReportController *-- Report\n    class ReportController{\n        + store(Request): array\n    }\n    class Report {\n        - array fillable\n    }"}),(0,o.kt)("h4",{id:"figure-2-laravel-backend-class-diagram"},"Figure 2. Laravel backend class diagram"),(0,o.kt)("p",null,"API use HTTP requests to create routes, allow communication between the frontend and the backend. All API routes must authenticated through the middleware, Laravel Sanctum, before reaching the servers.  "),(0,o.kt)("h3",{id:"api"},"api"),(0,o.kt)("p",null,"This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"backend/routes/api.php")," file. It contains routes to handle all of the api requests made to and from the frontend and maps them to Controller methods to be handled. The resource route automatically routes all of basic CRUD HTTP requests and maps each of them to basic CRUD methods (store, index, show, update, destory) in the Controller classes. And it does it all in one line ",(0,o.kt)("inlineCode",{parentName:"p"},"Route::resource"),". Additional routes and methods outside of the basic CRUD operations must be explicitly created and defined."),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,"Models are responsible for interacting with the database, such as retrieving data, updating records, or creating new records. When getting data from the database, Models will also convert the database's data type into php data types. Check the Database Diagram page for data type conversions between MongoDB and PHP. "),(0,o.kt)("p",null,"Model files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Models")," folder and have the same name as the database table it's associated with."),(0,o.kt)("h4",{id:"user"},"User"),(0,o.kt)("p",null,"The UserModel contains a fillable variable which lists all of the attributes in the User table of the database. It also contains getter and setter methods for each attribute in the User table. The getter methods will return convert the MongoDB data types into its equivalent php data types."),(0,o.kt)("h4",{id:"beacon"},"Beacon"),(0,o.kt)("p",null,"The BeaconModel contains a fillable variable which lists all of the attributes in the Beacon table of the database. It also contains getter and setter methods for each attribute in the Beacon table. The getter methods will return convert the MongoDB data types into its equivalent php data types."),(0,o.kt)("h4",{id:"report"},"Report"),(0,o.kt)("p",null,"The ReportModel contains a fillable variable which lists all of the attributes in the Report table of the database. It also contains getter and setter methods for each attribute in the Report table. The getter methods will return convert the MongoDB data types into its equivalent php data types."),(0,o.kt)("h3",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"Controllers act as an intermediary between the HTTP requests and Models, handling the requests by doing validation checks and processing data."),(0,o.kt)("p",null,"Controller files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Controllers")," folder."),(0,o.kt)("h4",{id:"usercontroller"},"UserController"),(0,o.kt)("p",null,"The UserController class has all the basic CRUD methods (store, index, show, update, destory) to handle all basic CRUD operations pertaining to user data. After processing the data, each method will send the data to the UserModel."),(0,o.kt)("h4",{id:"beaconcontroller"},"BeaconController"),(0,o.kt)("p",null,"The BeaconController class has all the basic CRUD methods (store, index, show, update, destory) to handle all basic CRUD operations pertaining to beacon data. It also has custom methods to get recommended and nearby beacons. After processing the data, each method will send the data to the BeaconModel. "),(0,o.kt)("p",null,"The store and update methods will trigger the NewBeaconEvent by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast(new NewBeaconEvent)")," when a new beacon is successfully created. Or it will trigger the NewCommentEvent by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast(new NewCommentEvent)")," when a new comment has been added."),(0,o.kt)("h4",{id:"reportcontroller"},"ReportController"),(0,o.kt)("p",null,"The ReportController class has all the basic CRUD methods (store, index, show, update, destory) to handle all basic CRUD operations pertaining to report data. After processing the data, each method will send the data to the ReportModel."),(0,o.kt)("h3",{id:"broadcast-events"},"Broadcast Events"),(0,o.kt)("p",null,"Broadcast events are usually used for notifying connected clients (such as web browsers) about changes or events that occur on the server through WebSockets in real-time. They define the data that needs to be sent to the frontend through the WebSocket. They are called by Controllers to let the system know that an event has been triggered such as a when a new beacon has been created. "),(0,o.kt)("p",null,"Every broadcast event contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastWith()")," function which defines which data will be sent through the WebSocket."),(0,o.kt)("p",null,"Once an event has been called, Laravel will automatically call the associated event listener's ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method which will send the data through the WebSocket."),(0,o.kt)("p",null,"Broadcast events files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Events"),' folder and usually end in "Event".'),(0,o.kt)("h4",{id:"newbeaconevent"},"NewBeaconEvent"),(0,o.kt)("p",null,"The NewBeaconEvent is triggered when a new beacon has been successfully created and saved into the database. "),(0,o.kt)("p",null,"It contains a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastWith()")," which returns the newly created beacon data. The function is automatically called by the SendNewBeacon event listener's ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method."),(0,o.kt)("h4",{id:"newcommentevent"},"NewCommentEvent"),(0,o.kt)("p",null,"The NewCommentEvent is triggered when a new comment has been successfully created and saved into the database. "),(0,o.kt)("p",null,"It contains a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastWith()")," which returns the newly created comment data. The function is automatically called by the SendNewComment event listener's ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method."),(0,o.kt)("h3",{id:"event-listeners"},"Event Listeners"),(0,o.kt)("p",null,"Event listeners are automically called when broadcast events are triggered by the Controller. Specifically, the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method is called, which every event listener has. It defines what action to occur when an event is triggered such as pushing the the data through a specific WebSocket channel for beacons."),(0,o.kt)("p",null,"All event listener classes must also be registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Providers/EventServiceProvider.php")," file as an array item to specify which event the listener is connected to and triggered by."),(0,o.kt)("p",null,"Event listener files are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Listeners"),' folder and usually start with "Send".'),(0,o.kt)("h4",{id:"sendnewbeacon"},"SendNewBeacon"),(0,o.kt)("p",null,"The SendNewBeacon event listener is triggered by the NewBeaconEvent. The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method pushes the newly created beacon data through the beacon WebSocket channel."),(0,o.kt)("h4",{id:"sendnewcomment"},"SendNewComment"),(0,o.kt)("p",null,"The SendNewComment event listener is triggered by the NewCommentEvent. The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method pushes the newly created comment data through the beacon WebSocket channel."))}p.isMDXComponent=!0}}]);