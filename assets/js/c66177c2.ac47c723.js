"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5606],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62910:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={sidebar_position:3,description:"Sequence diagrams for all use cases."},i="Sequence Diagrams",o={unversionedId:"system-architecture/sequencediagrams",id:"system-architecture/sequencediagrams",title:"Sequence Diagrams",description:"Sequence diagrams for all use cases.",source:"@site/docs/system-architecture/sequencediagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequencediagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/sequencediagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/system-architecture/sequencediagrams.md",tags:[],version:"current",lastUpdatedBy:"Jennifer Lieu",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Sequence diagrams for all use cases."},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/classdiagrams"},next:{title:"Database Diagram",permalink:"/project-lomo-in-person-gaming-app/docs/system-architecture/erddiagrams"}},c={},l=[{value:"Use Case 1: User Creates an Account",id:"use-case-1-user-creates-an-account",level:2},{value:"Use Case 2: User Logs In",id:"use-case-2-user-logs-in",level:2},{value:"Use Case 3: User Creates a Beacon",id:"use-case-3-user-creates-a-beacon",level:2},{value:"Use Case 4: User Joins a Beacon",id:"use-case-4-user-joins-a-beacon",level:2},{value:"USE CASE 5: User Fills Out a Beacon Application",id:"use-case-5-user-fills-out-a-beacon-application",level:2},{value:"USE CASE 6: User Reports an Unpleasant Experience",id:"use-case-6-user-reports-an-unpleasant-experience",level:2},{value:"Use Case 7: User Blocks Another User",id:"use-case-7-user-blocks-another-user",level:2},{value:"Use Case 8: User friends Another User",id:"use-case-8-user-friends-another-user",level:2},{value:"Use Case 9: User Updates their Profile",id:"use-case-9-user-updates-their-profile",level:2},{value:"Use Case 10: User Updates Beacon",id:"use-case-10-user-updates-beacon",level:2},{value:"Use Case 11: User Manages the Beacon",id:"use-case-11-user-manages-the-beacon",level:2}],p={toc:l},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("h2",{id:"use-case-1-user-creates-an-account"},"Use Case 1: User Creates an Account"),(0,r.kt)("mermaid",{value:'   sequenceDiagram\n   actor User\n   participant HomePage\n   participant AccountCreationPage\n   participant Database\n\n    activate User\n    User->>HomePage: User Clicks "Create Account Button"\n    deactivate User\n\n    activate HomePage\n    HomePage->>AccountCreationPage:Prompt Display please!\n    deactivate HomePage\n   \n    activate AccountCreationPage\n    AccountCreationPage->>User:EnterDetailsPlease\n    deactivate AccountCreationPage\n\n    activate User\n    User->>AccountCreationPage: *EntersDetails"\n    deactivate User\n\n    activate AccountCreationPage\n    AccountCreationPage->>Database: *Enters Info*\n    deactivate AccountCreationPage\n    Database->>User: Account Created'}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, it is important to create an account so my preferences and data carry over each time I use it.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user opens the Lomo App and chooses \u201cCreate Account\u201d"),(0,r.kt)("li",{parentName:"ol"},"The user enters their Email and password of choice"),(0,r.kt)("li",{parentName:"ol"},"The user confirms the password and presses \u201cSign up\u201d"),(0,r.kt)("li",{parentName:"ol"},"The user establishes their username and profile details(optional at start)")),(0,r.kt)("h2",{id:"use-case-2-user-logs-in"},"Use Case 2: User Logs In"),(0,r.kt)("mermaid",{value:'   sequenceDiagram\n   actor User\n   participant HomePage\n   participant LoginPage\n   participant Database\n\n\n   activate User\n   User->>HomePage: User Clicks "Log In Button"\n   deactivate User\n\n   activate HomePage\n   HomePage->>LoginPage:Prompt Display please!\n   deactivate HomePage\n   \n   activate LoginPage\n   \n   LoginPage->>Database: *requests details*\n   activate Database\n   Database->>LoginPage:GivesDetails for check\n   \n   \n   LoginPage->>User:EnterDetailsPlease\n   deactivate LoginPage\n\n   activate User\n   User->>LoginPage: *EntersDetails*\n   deactivate User\n\n   activate LoginPage\n   LoginPage->>Database: *EntersDetails*\n   deactivate LoginPage\n   \n   Database->>Database: Checks for correct details\n   loop Wrongloop\n        Database->>Database: WrongCredentials\n        \n        Database->>LoginPage: *Display WrongCredentials*\n        activate LoginPage\n       \n            loop Reprompt \n            \n                LoginPage->>User:EnterDetailsPlease\n                deactivate LoginPage\n                activate User\n                User->>LoginPage: *EntersDetails*\n                activate LoginPage\n                deactivate User\n                LoginPage->>Database: *EntersDetails*\n                deactivate LoginPage\n                Database->>Database: Checks for correct details\n            end\n    end\n\n    Database->>Database: CorrectCredentials\n    deactivate Database\n    Database->>User: Access Granted\n    \n   '}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, it is important to be able to log in so I can keep utilize my account after one use or on other devices.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user will open the app."),(0,r.kt)("li",{parentName:"ol"},'The user will select "Log In"'),(0,r.kt)("li",{parentName:"ol"},"The user will enter their username and password"),(0,r.kt)("li",{parentName:"ol"},"If wrong, the user will not be allowed to continue"),(0,r.kt)("li",{parentName:"ol"},"If correct, the user will sign in on the app with their credentials.")),(0,r.kt)("h2",{id:"use-case-3-user-creates-a-beacon"},"Use Case 3: User Creates a Beacon"),(0,r.kt)("mermaid",{value:'---\ntitle: Beacon Creation\n---\nsequenceDiagram\n   # initialize actors and participants\n   actor user as User\n   participant homePage as HomePage\n   participant createBeaconPage as CreateBeaconPage\n   participant apiMiddleware as API Middleware\n   participant database as Database\n   \n   # click "create beacon" button\n   activate user\n   user->>homePage: User clicks "Create Beacon" button\n\n   # display to beacon creation page\n   activate homePage\n   homePage->>createBeaconPage: Switch display to "Create a beacon" page\n   deactivate homePage\n   \n   activate createBeaconPage\n   createBeaconPage--\x3e>user: Display beacon creation form to the user\n   \n   # user fills out the form and submits it\n   user->>createBeaconPage: User fills out the form and submits it\n\n   # POST new beacon to middleware\n   createBeaconPage->>apiMiddleware: POST beacon\n   activate apiMiddleware\n   \n   # insert new beacon into database\n   apiMiddleware->>database: Insert new beacon\n   activate database\n\n   # return success\n   database--\x3e>apiMiddleware: Return success\n   deactivate database\n\n   apiMiddleware--\x3e>createBeaconPage: Return success\n   deactivate apiMiddleware\n\n   createBeaconPage--\x3e>user: Display success\n   deactivate createBeaconPage\n\n   # end\n   deactivate user'}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, it's important to create a beacon so that I can find other users that meet the requirements of the beacon.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user taps the \u201ccreate beacon\u201d button"),(0,r.kt)("li",{parentName:"ol"},"The user navigates the menu to describe the game, schedule, location and extra requirements like how 3. many people they want."),(0,r.kt)("li",{parentName:"ol"},"The user chooses whether the beacon is for friends or for everyone"),(0,r.kt)("li",{parentName:"ol"},"After confirming all of the beacon\u2019s info, the Beacon is placed on the map")),(0,r.kt)("h2",{id:"use-case-4-user-joins-a-beacon"},"Use Case 4: User Joins a Beacon"),(0,r.kt)("mermaid",{value:'sequenceDiagram\n  actor user as User\n  participant homePage as HomePage\n  participant apiMiddleware as API Middleware\n  participant database as Database\n  participant beaconDetailsPage as BeaconDetailsPage\n  participant beaconForm as BeaconForm\n  activate user\n\n  user->>homePage: Opens the menu for beacons\n  activate homePage\n  user->>homePage: Sorts or filters beacons\n\n  homePage->>apiMiddleware: Requests beacon list\n\n  apiMiddleware->>database: Retrieves beacon data\n  apiMiddleware--\x3e>homePage: Sends beacon data\n\n  homePage->>user: Displays beacon list\n\n  user->>homePage: (Possibly) Notified for a preferred beacon\n  user->>homePage: Taps on a displayed beacon\n\n  homePage->>apiMiddleware: Requests beacon details\n  apiMiddleware->>database: Retrieves beacon details\n  apiMiddleware--\x3e>homePage: Sends beacon details\n  homePage->>beaconDetailsPage: Displays beacon details\n\n  user->>beaconDetailsPage: (Optionally) Comments on the beacon\n  user->>beaconDetailsPage: Taps "Apply"\n  \n  beaconDetailsPage->>beaconForm: Navigates to Beacon Application\n  beaconForm->>apiMiddleware: Submits beacon application\n  apiMiddleware->>database: Creates new beacon and user association\n  database--\x3e>apiMiddleware: Acknowledges beacon creation and user association\n  beaconForm->>user: Displays success message\n  user->>beaconForm: User is now part of the beacon'}),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"As a user, it's important to join a beacon so that I can find other users to enjoy the events of the beacon with.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user opens the menu for beacons by tapping the button or dragging the column upward"),(0,r.kt)("li",{parentName:"ol"},"The user sorts or filters beacons by Recommended, Nearby, etc."),(0,r.kt)("li",{parentName:"ol"},"The user is (possibly) notified for a beacon they have set a preference for"),(0,r.kt)("li",{parentName:"ol"},"The user taps on a displayed beacon that describes the details of the event and the host"),(0,r.kt)("li",{parentName:"ol"},"The user (optionally) comments on the beacon to communicate with the host and coordinate the event"),(0,r.kt)("li",{parentName:"ol"},"The user taps \u201cApply\u201d and is taken to a \u201cBeacon Application\u201d"),(0,r.kt)("li",{parentName:"ol"},"When filled out, the beacon is joined")),(0,r.kt)("h2",{id:"use-case-5-user-fills-out-a-beacon-application"},"USE CASE 5: User Fills Out a Beacon Application"),(0,r.kt)("mermaid",{value:'   sequenceDiagram\n   actor User\n   participant BeaconPage\n   participant CommentSection\n   participant BeaconApply\n   participant API Middleware\n   participant Database\n   participant FriendList  \n\n   activate User\n   User->>BeaconPage:User taps on on "Apply"\n\n   activate BeaconPage\n   BeaconPage->>BeaconApply:Display Beacon Application \n\n   activate BeaconApply\n   BeaconApply--\x3e>User:Displays Beacon Application\n   User->>BeaconApply:Fills out application\n   BeaconApply->>API Middleware: POST beaconApplication\n\n   activate API Middleware\n   API Middleware->>Database: insert beacon application\n  \n   activate Database\n   Database--\x3e>API Middleware: return success\n   deactivate Database\n\n   API Middleware--\x3e>BeaconApply: return success\n   deactivate API Middleware\n\n   BeaconApply->>BeaconPage: User has applied to a beacon\n\n   deactivate BeaconApply\n   deactivate BeaconPage\n\n\n   opt Comments on Beacon\n   activate BeaconPage\n       User->>+CommentSection:Comments\n       CommentSection--\x3e>-User:Replies\n   end\n   deactivate BeaconPage\n\n   alt Notify Friend\n       User->>FriendList:I have joined a beacon\n   end\n\n   \n   User->>BeaconPage:Arrives\n   activate BeaconPage\n   BeaconPage->>BeaconApply: Open application\n\n   activate BeaconApply\n   BeaconApply--\x3e>User:Displays application\n   User->>BeaconApply: updates application\n   BeaconApply->>API Middleware: PUT hasArrived \n   \n   activate API Middleware\n   API Middleware->>Database:update beaconApplication \n\n   activate Database\n   Database--\x3e>API Middleware: return Success\n   deactivate Database\n\n   API Middleware--\x3e>BeaconApply:return success\n   deactivate API Middleware\n   \n   BeaconApply->>BeaconPage: User has updated application\n   deactivate BeaconApply\n\n   deactivate BeaconPage\n\n   deactivate User\n\n'}),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"As a user, I want to be able to apply a beacon so that the proper info is entered and I can arrive at the beacon properly.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user fills out the application with an ETA, any controllers they can supply, and (automatically) their profile."),(0,r.kt)("li",{parentName:"ol"},"The user (if enabled) notifies their friends that they have joined a beacon"),(0,r.kt)("li",{parentName:"ol"},"The user (optionally) comments on the beacon to communicate with the host and coordinate the event"),(0,r.kt)("li",{parentName:"ol"},"Once the user arrives, they mark it on the application, and leave the beacon\u2019s space for others if the beacon hasn\u2019t ended.")),(0,r.kt)("h2",{id:"use-case-6-user-reports-an-unpleasant-experience"},"USE CASE 6: User Reports an Unpleasant Experience"),(0,r.kt)("mermaid",{value:"    sequenceDiagram \n    actor User\n    actor User2\n    participant BeaconPage\n    participant ReportPage \n    participant Administration\n    participant API Middleware\n    participant Database \n\n    alt User reports through Beacon\n        activate User\n        User->>+BeaconPage:User clicks on beacon\n\n        BeaconPage->>+ReportPage:Open a report\n        User->>ReportPage:User fills out report\n\n        par Report sent to Administration\n            ReportPage->>Administration:Report is sent to admins\n        and Report sent to Database\n            ReportPage->>+API Middleware: POST Report\n            API Middleware->>+Database:insert report \n            Database--\x3e>-API Middleware:return success\n            API Middleware--\x3e>-ReportPage:return success\n        end\n        \n        ReportPage->>-User:Report is filed\n        deactivate BeaconPage\n        deactivate User\n\n        alt Report is accurate\n            Administration->>User2:User is suspended \n        end\n    else User reports through other user's profile\n        activate User\n        User->>User2: Click on profile\n        \n        activate User2\n        User->>+ReportPage:Report is opened\n        User->>ReportPage:User fills out report\n\n        par Report sent to Administration\n            ReportPage->>Administration:Report is sent to admins\n        and Report sent to Database\n            ReportPage->>+API Middleware: POST Report\n            API Middleware->>+Database:insert report \n            Database--\x3e>-API Middleware:return success\n            API Middleware--\x3e>-ReportPage:return success\n        end\n\n        ReportPage->>-User:Report is filed\n\n        deactivate User2\n        deactivate User\n\n        alt Report is accurate\n            Administration->>User2:User is suspended \n        end\n    end\n"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to be able to report a user who violates the community guildline.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user reports a user through either the beacon or the user\u2019s profile"),(0,r.kt)("li",{parentName:"ol"},"They will be prompted to check off a reason and any additional details through a text input"),(0,r.kt)("li",{parentName:"ol"},"This report will be sent to administrators, if the report is found to be accurate, the offending user will be disciplined with a reduction in privileges or a complete suspension of the account.")),(0,r.kt)("h2",{id:"use-case-7-user-blocks-another-user"},"Use Case 7: User Blocks Another User"),(0,r.kt)("mermaid",{value:'---\ntitle: Blocking user\n---\nsequenceDiagram\n   # initialize actors and participants\n   actor user as User\n   participant homePage as HomePage\n   participant otherUserPage as otherUserPage\n   participant apiMiddleware as API Middleware\n   participant database as Database\n   \n   # search for user\n   activate user\n   activate homePage\n   user->>homePage: User searches for other user\n\n   # api call for user\n   activate apiMiddleware\n   homePage->>apiMiddleware: Search input is put into an API call\n\n   activate database\n   apiMiddleware->>database: API queries the database\n\n   # database response\n   database->>homePage: database returns results to homePage\n   homePage--\x3e>user: HomePage displays results to user\n   deactivate database\n   deactivate apiMiddleware\n\n   # select user\n   activate otherUserPage\n   homePage->>otherUserPage: User selects other user\n   deactivate homePage\n\n   activate apiMiddleware\n   otherUserPage->>apiMiddleware: User clicks "Block" button\n   \n   activate database\n   apiMiddleware->>database: Insert blocked user\n\n   databse->>otherUserPage: Returns success\n   database--\x3e>user: Displays success\n   deactivate apiMiddleware\n   deactivate database\n\n   # end\n   deactivate user'}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to be able to block a user so I don't have to interact with them.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user navigates to either a Beacon or the Friends menu (Recent Players)"),(0,r.kt)("li",{parentName:"ol"},'The user presses the "block" button and confirms'),(0,r.kt)("li",{parentName:"ol"},"The user will no longer see beacons made by that user")),(0,r.kt)("h2",{id:"use-case-8-user-friends-another-user"},"Use Case 8: User friends Another User"),(0,r.kt)("mermaid",{value:'---\ntitle: Adding user as friend\n---\nsequenceDiagram\n   # initialize actors and participants\n   actor user as User\n   participant homePage as HomePage\n   participant otherUserPage as otherUserPage\n   participant apiMiddleware as API Middleware\n   participant database as Database\n   \n   # search for user\n   activate user\n   activate homePage\n   user->>homePage: User searches for other user\n\n   # api call for user\n   activate apiMiddleware\n   homePage->>apiMiddleware: Search input is put into an API call\n\n   activate database\n   apiMiddleware->>database: API queries the database\n\n   # database response\n   database->>homePage: database returns results to homePage\n   homePage--\x3e>user: HomePage displays results to user\n   deactivate database\n   deactivate apiMiddleware\n\n   # select user\n   activate otherUserPage\n   homePage->>otherUserPage: User selects other user\n   deactivate homePage\n\n   activate apiMiddleware\n   otherUserPage->>apiMiddleware: User clicks "Add friend" button\n   \n   activate database\n   apiMiddleware->>database: Insert user into friends list\n\n   databse->>otherUserPage: Returns success\n   database--\x3e>user: Displays other user friends list \n   deactivate apiMiddleware\n   deactivate database\n\n   # end\n   deactivate user'}),(0,r.kt)("h2",{id:"use-case-9-user-updates-their-profile"},"Use Case 9: User Updates their Profile"),(0,r.kt)("mermaid",{value:'sequenceDiagram\n  actor user as User\n  participant profilePage as ProfilePage\n  participant editProfilePage as EditProfilePage\n  participant apiMiddleware as API Middleware\n  participant database as Database\n\n  activate user\n  user->>profilePage: Taps the "profile" button on the top left corner\n\n  activate profilePage\n  profilePage--\x3e>user: Displays user stats and preferences\n\n  user->>profilePage: Taps the "edit" button in the top right corner\n  profilePage->>editProfilePage: Opens the edit profile page\n\n  user->>editProfilePage: Adds or removes preferences or tags\n\n  user->>editProfilePage: Presses "save" to confirm changes\n\n  editProfilePage->>apiMiddleware: Sends updated user data\n  activate apiMiddleware\n  apiMiddleware->>database: Updates user preferences and tags\n  database--\x3e>apiMiddleware: Acknowledges data update\n  apiMiddleware--\x3e>editProfilePage: Confirms data update\n  deactivate apiMiddleware\n\n  editProfilePage--\x3e>user: Closes edit profile page\n  profilePage->>user: Displays updated user stats and preferences\n\n  deactivate user\n  deactivate profilePage'}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to be able to update my profile so I can properly communicate my current interests with other users.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user will tap the \u201cprofile\u201d button on the top left corner"),(0,r.kt)("li",{parentName:"ol"},"This will open a display that shows stats on the person, including preferences on games and tags of different descriptors"),(0,r.kt)("li",{parentName:"ol"},"The user taps the \u201cedit button\u201d in the top right of the display, allowing them to add or remove preferences or tags."),(0,r.kt)("li",{parentName:"ol"},"The user presses \u201csave\u201d to confirm the changes.")),(0,r.kt)("h2",{id:"use-case-10-user-updates-beacon"},"Use Case 10: User Updates Beacon"),(0,r.kt)("mermaid",{value:'    sequenceDiagram\n    actor User\n    actor BeaconPage\n    actor EditBeaconPage\n    actor API Middleware\n    actor Database\n\n    activate User\n    User->>BeaconPage:User clicks on beacon\n\n    activate BeaconPage\n    BeaconPage--\x3e>User:Displays Beacon info\n\n    BeaconPage->>EditBeaconPage:User taps the "edit" button\n    activate EditBeaconPage\n    EditBeaconPage--\x3e>User: Editable detials screen is displayed\n\n    User->>EditBeaconPage:User updates beacon\n\n    EditBeaconPage->>API Middleware:User clicks "save", PUT the updated data\n\n    activate API Middleware\n    API Middleware->>+Database: updates data\n    Database--\x3e>-API Middleware: return success\n\n    API Middleware--\x3e>EditBeaconPage: return success\n    deactivate API Middleware\n\n    EditBeaconPage--\x3e>User:Close the Editable deaitls screen\n    deactivate EditBeaconPage\n\n    deactivate BeaconPage\n    deactivate User\n'}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a User, I want to be able to update my Beacon so other users will have accurate information.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user will click on the beacon they have created"),(0,r.kt)("li",{parentName:"ol"},"The user will tap the \u201cedit\u201d button"),(0,r.kt)("li",{parentName:"ol"},"The user will be shown an updated, editable details screen"),(0,r.kt)("li",{parentName:"ol"},"The user will update the necessary details"),(0,r.kt)("li",{parentName:"ol"},"The user will click \u201csave\u201d and the changes will be updated")),(0,r.kt)("h2",{id:"use-case-11-user-manages-the-beacon"},"Use Case 11: User Manages the Beacon"),(0,r.kt)("mermaid",{value:"    sequenceDiagram\n    actor User\n    actor User2\n    participant ReportPage\n    participant Administration\n    participant BeaconProfile\n    participant CommentSection\n    participant WaitlistPage\n    participant API Middleware\n    participant Database\n\n    activate User\n    User->>BeaconProfile:Click on Beacon\n    activate BeaconProfile\n    BeaconProfile->>CommentSection: User views comment section\n    activate CommentSection\n    CommentSection--\x3e>User:Displays comment section\n    CommentSection->>API Middleware: User deletes rude comments\n    activate API Middleware\n    API Middleware->>+Database: Updates database\n    Database--\x3e>-API Middleware:return success\n    API Middleware--\x3e>CommentSection: return success\n    deactivate API Middleware\n    CommentSection--\x3e>User:Displays updated comment section\n    deactivate CommentSection\n    deactivate BeaconProfile\n\n    alt Rude User\n        User->>User2: Click on profile\n        \n        activate User2\n        User->>+ReportPage:Report is opened\n        User->>ReportPage:User fills out report\n\n        par Report sent to Administration\n            ReportPage->>Administration:Report is sent to admins\n        and Report sent to Database\n            ReportPage->>+API Middleware: POST Report\n            API Middleware->>+Database:insert report \n            Database--\x3e>-API Middleware:return success\n            API Middleware--\x3e>-ReportPage:return success\n        end\n\n        ReportPage->>-User:Report is filed\n\n        deactivate User2\n    end\n\n    activate WaitlistPage\n    User->>WaitlistPage:User clicks on Waitlist Page\n    WaitlistPage->>+API Middleware: get waitlist\n    API Middleware->>+Database:gets waitlist data\n    Database--\x3e>-API Middleware:return success\n    API Middleware--\x3e>-WaitlistPage:return success\n    WaitlistPage--\x3e>User:Displays waitlist\n    deactivate WaitlistPage\n    deactivate User\n\n"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a user, I want to be able to manage the comment section and waitlist of my beacon")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user will click on the already-established beacon as the host"),(0,r.kt)("li",{parentName:"ol"},"The user will view the comments section and delete any comments that aren\u2019t on topic/ are rude"),(0,r.kt)("li",{parentName:"ol"},"The user will report users either commenting or applying if necessary"),(0,r.kt)("li",{parentName:"ol"},"The user will view the waitlist for those looking to join if someone leaves")))}u.isMDXComponent=!0}}]);