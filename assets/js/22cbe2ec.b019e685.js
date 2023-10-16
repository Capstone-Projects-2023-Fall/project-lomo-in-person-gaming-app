"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},o="Backend Unit Tests",i={unversionedId:"testing/backend-unit-testing",id:"testing/backend-unit-testing",title:"Backend Unit Tests",description:"Laravel has a built-in test suite wrapper that uses the PHPUnit testing framework to create and run all tests.",source:"@site/docs/testing/backend-unit-testing.md",sourceDirName:"testing",slug:"/testing/backend-unit-testing",permalink:"/project-lomo-in-person-gaming-app/docs/testing/backend-unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-lomo-in-person-gaming-app/edit/main/documentation/docs/testing/backend-unit-testing.md",tags:[],version:"current",lastUpdatedBy:"JonathanAltenburg",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Frontend Unit Tests",permalink:"/project-lomo-in-person-gaming-app/docs/testing/frontend-unit-testing"},next:{title:"Integration tests",permalink:"/project-lomo-in-person-gaming-app/docs/testing/integration-testing"}},c={},l=[{value:"Test Coverage",id:"test-coverage",level:2},{value:"Feature Tests",id:"feature-tests",level:2},{value:"3. Beacon Creation Test",id:"3-beacon-creation-test",level:3},{value:"Test: Checks that POST request to /api/beacons/ successfully accepts JSON data",id:"test-checks-that-post-request-to-apibeacons-successfully-accepts-json-data",level:4},{value:"Test: Checks that POST request to /api/beacons/ fails when required fields are empty",id:"test-checks-that-post-request-to-apibeacons-fails-when-required-fields-are-empty",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backend-unit-tests"},"Backend Unit Tests"),(0,a.kt)("p",null,"Laravel has a built-in test suite wrapper that uses the ",(0,a.kt)("a",{parentName:"p",href:"https://phpunit.de/"},"PHPUnit testing framework")," to create and run all tests."),(0,a.kt)("p",null,"The unit tests are grouped together under Feature tests. Each feature test corresponds to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/requirements/use-case-descriptions"},"use case"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Laravel Sail docker container must be running for the commands to work. For more testing commands, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/10.x/testing"},"Larvel 10 testing documentation"),". Remember to use the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/10.x/sail#executing-sail-commands"},"sail")," or ",(0,a.kt)("a",{parentName:"p",href:"/resources/docker-quick-start#access-the-docker-containers-command-line"},"docker")," command to execute any Laravel commands.")),(0,a.kt)("p",null,"To run ALL unit tests, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sail artisan test\n")),(0,a.kt)("p",null,"To run ALL unit tests ",(0,a.kt)("strong",{parentName:"p"},"AND")," get test coverage results, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sail artisan test --coverage\n")),(0,a.kt)("h2",{id:"test-coverage"},"Test Coverage"),(0,a.kt)("p",null,"Results printed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"sail artisan test --coverage")," command. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Console/Kernel ............................... 16 / 66.7%  \n  Exceptions/Handler ............................... 100.0%  \n  Http/Controllers/BeaconController .... 16, 43..59 / 55.6%  \n  Http/Controllers/Controller ...................... 100.0%  \n  Http/Controllers/PostController .................... 0.0%  \n  Http/Controllers/UserController .................... 0.0%  \n  Http/Kernel ...................................... 100.0%  \n  Http/Middleware/Authenticate ....................... 0.0%  \n  Http/Middleware/EncryptCookies ................... 100.0%  \n  Http/Middleware/PreventRequestsDuringMaintenance . 100.0%  \n  Http/Middleware/RedirectIfAuthenticated ............ 0.0%  \n  Http/Middleware/TrimStrings ...................... 100.0%  \n  Http/Middleware/TrustHosts ......................... 0.0%  \n  Http/Middleware/TrustProxies ..................... 100.0%  \n  Http/Middleware/ValidateSignature ................ 100.0%  \n  Http/Middleware/VerifyCsrfToken .................. 100.0%  \n  Models/Beacon .................................... 100.0%  \n  Models/Post ...................................... 100.0%  \n  Models/User ...................................... 100.0%  \n  Providers/AppServiceProvider ..................... 100.0%  \n  Providers/AuthServiceProvider .................... 100.0%  \n  Providers/BroadcastServiceProvider ................. 0.0%  \n  Providers/EventServiceProvider ................... 100.0%  \n  Providers/RouteServiceProvider ................... 100.0%  \n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \n                                              Total: 41.4 %  \n")),(0,a.kt)("h2",{id:"feature-tests"},"Feature Tests"),(0,a.kt)("h3",{id:"3-beacon-creation-test"},"3. Beacon Creation Test"),(0,a.kt)("h4",{id:"test-checks-that-post-request-to-apibeacons-successfully-accepts-json-data"},"Test: Checks that POST request to /api/beacons/ successfully accepts JSON data"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_post_beacon_request_returns_successful_response()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns: HTTP status code 201 for successful resource creation")),(0,a.kt)("h4",{id:"test-checks-that-post-request-to-apibeacons-fails-when-required-fields-are-empty"},"Test: Checks that POST request to /api/beacons/ fails when required fields are empty"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test_post_beacon_request_fails_when_required_fields_are_empty()")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns: HTTP status code 422 for unprocessable entity")))}u.isMDXComponent=!0}}]);