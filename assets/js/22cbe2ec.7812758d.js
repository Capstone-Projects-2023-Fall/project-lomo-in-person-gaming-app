"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8672],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>k});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=o(s),f=a,k=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return s?n.createElement(k,i(i({ref:t},c),{},{components:s})):n.createElement(k,i({ref:t},c))}));function k(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=s.length,i=new Array(l);i[0]=f;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var o=2;o<l;o++)i[o]=s[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}f.displayName="MDXCreateElement"},53751:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var n=s(87462),a=(s(67294),s(3905));const l={sidebar_position:2},i="Backend Unit Tests",r={unversionedId:"testing/backend-unit-testing",id:"testing/backend-unit-testing",title:"Backend Unit Tests",description:"Laravel uses the built-in PHPUnit testing framework to create and run all tests.",source:"@site/docs/testing/backend-unit-testing.md",sourceDirName:"testing",slug:"/testing/backend-unit-testing",permalink:"/project-lomo-in-person-gaming-app/docs/testing/backend-unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/testing/backend-unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Jennifer Lieu",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Frontend Unit Tests",permalink:"/project-lomo-in-person-gaming-app/docs/testing/frontend-unit-testing"},next:{title:"Integration tests",permalink:"/project-lomo-in-person-gaming-app/docs/testing/integration-testing"}},u={},o=[{value:"Tests",id:"tests",level:2},{value:"BeaconControllerTest",id:"beaconcontrollertest",level:3},{value:"Test: POST request to api/beacons is successful",id:"test-post-request-to-apibeacons-is-successful",level:4},{value:"Test: POST request to api/beacons fails when required fields are empty",id:"test-post-request-to-apibeacons-fails-when-required-fields-are-empty",level:4},{value:"Test: GET request to api/beacons is successful",id:"test-get-request-to-apibeacons-is-successful",level:4},{value:"Test: BeaconCreated Event is dispatched successfully",id:"test-beaconcreated-event-is-dispatched-successfully",level:4},{value:"UserControllerTest",id:"usercontrollertest",level:3},{value:"Test: GET request to api/users is successful",id:"test-get-request-to-apiusers-is-successful",level:4},{value:"Test: Show existing user",id:"test-show-existing-user",level:4},{value:"Test: Delete existing user",id:"test-delete-existing-user",level:4},{value:"ProfileControllerTest",id:"profilecontrollertest",level:3},{value:"Test: GET request to api/profiles is successful",id:"test-get-request-to-apiprofiles-is-successful",level:4},{value:"Test: Show existing profile",id:"test-show-existing-profile",level:4},{value:"Test: Delete existing profile",id:"test-delete-existing-profile",level:4},{value:"Test: Update existing profile",id:"test-update-existing-profile",level:4},{value:"Test: Store new profile",id:"test-store-new-profile",level:4},{value:"DatabaseConnectionTest",id:"databaseconnectiontest",level:3},{value:"Test: Database connection to the testing database",id:"test-database-connection-to-the-testing-database",level:4},{value:"Test: Database connection to the production database",id:"test-database-connection-to-the-production-database",level:4},{value:"GameControllerTest",id:"gamecontrollertest",level:3},{value:"Test: IGDB API to get games by name, GET request to api/games is successful",id:"test-igdb-api-to-get-games-by-name-get-request-to-apigames-is-successful",level:4},{value:"AttendeeControllerTest",id:"attendeecontrollertest",level:3},{value:"Test: GET request to api/attendees is successful",id:"test-get-request-to-apiattendees-is-successful",level:4},{value:"Test: DELETE request to api/attendees/{user_id}/beacon/{beacon_id} is successful",id:"test-delete-request-to-apiattendeesuser_idbeaconbeacon_id-is-successful",level:4},{value:"Test: POST request to api/attendees is successful",id:"test-post-request-to-apiattendees-is-successful",level:4},{value:"Test: PATCH request to api/attendees/{user_id}/beacon/{beacon_id} is successful",id:"test-patch-request-to-apiattendeesuser_idbeaconbeacon_id-is-successful",level:4},{value:"Test: GET request to api/attendee/{attendee} is successful",id:"test-get-request-to-apiattendeeattendee-is-successful",level:4}],c={toc:o},p="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backend-unit-tests"},"Backend Unit Tests"),(0,a.kt)("p",null,"Laravel uses the built-in ",(0,a.kt)("a",{parentName:"p",href:"https://phpunit.de/"},"PHPUnit testing framework")," to create and run all tests."),(0,a.kt)("p",null,"Backend tests are automated by Github Actions and run every time a new pull request is made into the main branch."),(0,a.kt)("h2",{id:"tests"},"Tests"),(0,a.kt)("h3",{id:"beaconcontrollertest"},"BeaconControllerTest"),(0,a.kt)("h4",{id:"test-post-request-to-apibeacons-is-successful"},"Test: POST request to api/beacons is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_post_beacon_request_returns_successful_response()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 201 for successful resource creation")),(0,a.kt)("h4",{id:"test-post-request-to-apibeacons-fails-when-required-fields-are-empty"},"Test: POST request to api/beacons fails when required fields are empty"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_post_beacon_request_fails_when_required_fields_are_empty()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 422 for unprocessable entity")),(0,a.kt)("h4",{id:"test-get-request-to-apibeacons-is-successful"},"Test: GET request to api/beacons is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_get_all_beacons()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-beaconcreated-event-is-dispatched-successfully"},"Test: BeaconCreated Event is dispatched successfully"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_beacon_created_event_dispatched()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: Dispatched is true")),(0,a.kt)("h3",{id:"usercontrollertest"},"UserControllerTest"),(0,a.kt)("h4",{id:"test-get-request-to-apiusers-is-successful"},"Test: GET request to api/users is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_get_all_users()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-show-existing-user"},"Test: Show existing user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_show_existing_user()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},"Returned JSON structure includes user data (id, email, username, avatar)")))),(0,a.kt)("h4",{id:"test-delete-existing-user"},"Test: Delete existing user"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_delete_existing_user()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},'Returned JSON includes the message "User deleted successfully"'),(0,a.kt)("li",{parentName:"ul"},"User no longer exists in the database")))),(0,a.kt)("h3",{id:"profilecontrollertest"},"ProfileControllerTest"),(0,a.kt)("h4",{id:"test-get-request-to-apiprofiles-is-successful"},"Test: GET request to api/profiles is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"testIndexProfiles()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-show-existing-profile"},"Test: Show existing profile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"testShowProfile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},"Returned JSON structure includes profile data")))),(0,a.kt)("h4",{id:"test-delete-existing-profile"},"Test: Delete existing profile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"testDestroyProfile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},'Returned JSON includes the message "Profile deleted successfully"'),(0,a.kt)("li",{parentName:"ul"},"profiles no longer exists in the database")))),(0,a.kt)("h4",{id:"test-update-existing-profile"},"Test: Update existing profile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"testUpdateProfile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},'Returned JSON includes the message "Profile Update successfully"'),(0,a.kt)("li",{parentName:"ul"},"profiles data update in the database")))),(0,a.kt)("h4",{id:"test-store-new-profile"},"Test: Store new profile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"testStoreProfile()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assertions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},'Returned JSON includes the message "Profile store successfully"'),(0,a.kt)("li",{parentName:"ul"},"profiles data store in the database")))),(0,a.kt)("h3",{id:"databaseconnectiontest"},"DatabaseConnectionTest"),(0,a.kt)("h4",{id:"test-database-connection-to-the-testing-database"},"Test: Database connection to the testing database"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_database_connection_to_testing_schema()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: Connection established")),(0,a.kt)("h4",{id:"test-database-connection-to-the-production-database"},"Test: Database connection to the production database"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_database_connection_to_public_schema()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: Connection established")),(0,a.kt)("h3",{id:"gamecontrollertest"},"GameControllerTest"),(0,a.kt)("h4",{id:"test-igdb-api-to-get-games-by-name-get-request-to-apigames-is-successful"},"Test: IGDB API to get games by name, GET request to api/games is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_get_games_by_name()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HTTP status code 200 for successful response"),(0,a.kt)("li",{parentName:"ul"},"Expecte JSON returned")))),(0,a.kt)("h3",{id:"attendeecontrollertest"},"AttendeeControllerTest"),(0,a.kt)("h4",{id:"test-get-request-to-apiattendees-is-successful"},"Test: GET request to api/attendees is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_get_all_attendees()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-delete-request-to-apiattendeesuser_idbeaconbeacon_id-is-successful"},"Test: DELETE request to api/attendees/{user_id}/beacon/{beacon_id} is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_delete_attendee()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-post-request-to-apiattendees-is-successful"},"Test: POST request to api/attendees is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_store_attendee()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 201 for successful response")),(0,a.kt)("h4",{id:"test-patch-request-to-apiattendeesuser_idbeaconbeacon_id-is-successful"},"Test: PATCH request to api/attendees/{user_id}/beacon/{beacon_id} is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_update_attendee()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")),(0,a.kt)("h4",{id:"test-get-request-to-apiattendeeattendee-is-successful"},"Test: GET request to api/attendee/{attendee} is successful"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_show_attendee()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assert: HTTP status code 200 for successful response")))}d.isMDXComponent=!0}}]);