---
sidebar_position: 3
description: Sequence diagrams for all use cases.
---

# Sequence Diagrams
## Use Case 1: User Creates an Account

```mermaid
   sequenceDiagram
   actor User
   participant HomePage
   participant AccountCreationPage
   participant Database

    activate User
    User->>HomePage: User Clicks "Create Account Button"
    deactivate User

    activate HomePage
    HomePage->>AccountCreationPage:Prompt Display please!
    deactivate HomePage
   
    activate AccountCreationPage
    AccountCreationPage->>User:EnterDetailsPlease
    deactivate AccountCreationPage

    activate User
    User->>AccountCreationPage: *EntersDetails"
    deactivate User

    activate AccountCreationPage
    AccountCreationPage->>Database: *Enters Info*
    deactivate AccountCreationPage
    Database->>User: Account Created
```
**As a user, it is important to create an account so my preferences and data carry over each time I use it.**
1. The user opens the Lomo App and chooses “Create Account”
2. The user enters their Email and password of choice
3. The user confirms the password and presses “Sign up”
4. The user establishes their username and profile details(optional at start)


## Use Case 2: User Logs In
```mermaid
   sequenceDiagram
   actor User
   participant HomePage
   participant LoginPage
   participant Database


   activate User
   User->>HomePage: User Clicks "Log In Button"
   deactivate User

   activate HomePage
   HomePage->>LoginPage:Prompt Display please!
   deactivate HomePage
   
   activate LoginPage
   
   LoginPage->>Database: *requests details*
   activate Database
   Database->>LoginPage:GivesDetails for check
   
   
   LoginPage->>User:EnterDetailsPlease
   deactivate LoginPage

   activate User
   User->>LoginPage: *EntersDetails*
   deactivate User

   activate LoginPage
   LoginPage->>Database: *EntersDetails*
   deactivate LoginPage
   
   Database->>Database: Checks for correct details
   loop Wrongloop
        Database->>Database: WrongCredentials
        
        Database->>LoginPage: *Display WrongCredentials*
        activate LoginPage
       
            loop Reprompt 
            
                LoginPage->>User:EnterDetailsPlease
                deactivate LoginPage
                activate User
                User->>LoginPage: *EntersDetails*
                activate LoginPage
                deactivate User
                LoginPage->>Database: *EntersDetails*
                deactivate LoginPage
                Database->>Database: Checks for correct details
            end
    end

    Database->>Database: CorrectCredentials
    deactivate Database
    Database->>User: Access Granted
    
   
```
**As a user, it is important to be able to log in so I can keep utilize my account after one use or on other devices.**
1. The user will open the app.
2. The user will select "Log In"
3. The user will enter their username and password
4. If wrong, the user will not be allowed to continue
5. If correct, the user will sign in on the app with their credentials.

## Use Case 3: User Creates a Beacon
```mermaid
---
title: Beacon Creation
---
sequenceDiagram
   # initialize actors and participants
   actor user as User
   participant homePage as HomePage
   participant createBeaconPage as CreateBeaconPage
   participant apiMiddleware as API Middleware
   participant database as Database
   
   # click "create beacon" button
   activate user
   user->>homePage: User clicks "Create Beacon" button

   # display to beacon creation page
   activate homePage
   homePage->>createBeaconPage: Switch display to "Create a beacon" page
   deactivate homePage
   
   activate createBeaconPage
   createBeaconPage-->>user: Display beacon creation form to the user
   
   # user fills out the form and submits it
   user->>createBeaconPage: User fills out the form and submits it

   # POST new beacon to middleware
   createBeaconPage->>apiMiddleware: POST beacon
   activate apiMiddleware
   
   # insert new beacon into database
   apiMiddleware->>database: Insert new beacon
   activate database

   # return success
   database-->>apiMiddleware: Return success
   deactivate database

   apiMiddleware-->>createBeaconPage: Return success
   deactivate apiMiddleware

   createBeaconPage-->>user: Display success
   deactivate createBeaconPage

   # end
   deactivate user
```

**As a user, it's important to create a beacon so that I can find other users that meet the requirements of the beacon.**

1. The user taps the “create beacon” button
2. The user navigates the menu to describe the game, schedule, location and extra requirements like how 3. many people they want.
3. The user chooses whether the beacon is for friends or for everyone
4. After confirming all of the beacon’s info, the Beacon is placed on the map

## Use Case 4: User Joins a Beacon
```mermaid
sequenceDiagram
  actor user as User
  participant homePage as HomePage
  participant apiMiddleware as API Middleware
  participant database as Database
  participant beaconDetailsPage as BeaconDetailsPage
  participant beaconForm as BeaconForm
  activate user

  user->>homePage: Opens the menu for beacons
  activate homePage
  user->>homePage: Sorts or filters beacons

  homePage->>apiMiddleware: Requests beacon list

  apiMiddleware->>database: Retrieves beacon data
  apiMiddleware-->>homePage: Sends beacon data

  homePage->>user: Displays beacon list

  user->>homePage: (Possibly) Notified for a preferred beacon
  user->>homePage: Taps on a displayed beacon

  homePage->>apiMiddleware: Requests beacon details
  apiMiddleware->>database: Retrieves beacon details
  apiMiddleware-->>homePage: Sends beacon details
  homePage->>beaconDetailsPage: Displays beacon details

  user->>beaconDetailsPage: (Optionally) Comments on the beacon
  user->>beaconDetailsPage: Taps "Apply"
  
  beaconDetailsPage->>beaconForm: Navigates to Beacon Application
  beaconForm->>apiMiddleware: Submits beacon application
  apiMiddleware->>database: Creates new beacon and user association
  database-->>apiMiddleware: Acknowledges beacon creation and user association
  beaconForm->>user: Displays success message
  user->>beaconForm: User is now part of the beacon
  ```
  **As a user, it's important to join a beacon so that I can find other users to enjoy the events of the beacon with.**

1. The user opens the menu for beacons by tapping the button or dragging the column upward
2. The user sorts or filters beacons by Recommended, Nearby, etc.
3. The user is (possibly) notified for a beacon they have set a preference for
4. The user taps on a displayed beacon that describes the details of the event and the host
5. The user (optionally) comments on the beacon to communicate with the host and coordinate the event
6. The user taps “Apply” and is taken to a “Beacon Application”
7. When filled out, the beacon is joined

## USE CASE 5: User Fills Out a Beacon Application 
 ```mermaid
    sequenceDiagram
    actor User
    participant BeaconPage
    participant CommentSection
    participant BeaconApply
    participant API Middleware
    participant Database
    participant FriendList  

    activate User
    User->>BeaconPage:User taps on on "Apply"

    activate BeaconPage
    BeaconPage->>BeaconApply:Display Beacon Application 

    activate BeaconApply
    BeaconApply-->>User:Displays Beacon Application
    User->>BeaconApply:Fills out application
    BeaconApply->>API Middleware: POST beaconApplication

    activate API Middleware
    API Middleware->>Database: insert beacon application
   
    activate Database
    Database-->>API Middleware: return success
    deactivate Database

    API Middleware-->>BeaconApply: return success
    deactivate API Middleware

    BeaconApply->>BeaconPage: User has applied to a beacon

    deactivate BeaconApply
    deactivate BeaconPage


    opt Comments on Beacon
    activate BeaconPage
        User->>+CommentSection:Comments
        CommentSection-->>-User:Replies
    end
    deactivate BeaconPage

    alt Notify Friend
        User->>FriendList:I have joined a beacon
    end

    
    User->>BeaconPage:Arrives
    activate BeaconPage
    BeaconPage->>BeaconApply: Open application

    activate BeaconApply
    BeaconApply-->>User:Displays application
    User->>BeaconApply: updates application
    BeaconApply->>API Middleware: PUT hasArrived 
    
    activate API Middleware
    API Middleware->>Database:update beaconApplication 

    activate Database
    Database-->>API Middleware: return Success
    deactivate Database

    API Middleware-->>BeaconApply:return success
    deactivate API Middleware
    
    BeaconApply->>BeaconPage: User has updated application
    deactivate BeaconApply

    deactivate BeaconPage

    deactivate User


 ```
 **As a user, I want to be able to apply a beacon so that the proper info is entered and I can arrive at the beacon properly.**
 
 1. The user fills out the application with an ETA, any controllers they can supply, and (automatically) their profile.
 2. The user (if enabled) notifies their friends that they have joined a beacon
 3. The user (optionally) comments on the beacon to communicate with the host and coordinate the event
 4. Once the user arrives, they mark it on the application, and leave the beacon’s space for others if the beacon hasn’t ended.


## USE CASE 6: User Reports an Unpleasant Experience 
```mermaid
    sequenceDiagram 
    actor User
    actor User2
    participant BeaconPage
    participant ReportPage 
    participant Administration
    participant API Middleware
    participant Database 

    alt User reports through Beacon
        activate User
        User->>+BeaconPage:User clicks on beacon

        BeaconPage->>+ReportPage:Open a report
        User->>ReportPage:User fills out report

        par Report sent to Administration
            ReportPage->>Administration:Report is sent to admins
        and Report sent to Database
            ReportPage->>+API Middleware: POST Report
            API Middleware->>+Database:insert report 
            Database-->>-API Middleware:return success
            API Middleware-->>-ReportPage:return success
        end
        
        ReportPage->>-User:Report is filed
        deactivate BeaconPage
        deactivate User

        alt Report is accurate
            Administration->>User2:User is suspended 
        end
    else User reports through other user's profile
        activate User
        User->>User2: Click on profile
        
        activate User2
        User->>+ReportPage:Report is opened
        User->>ReportPage:User fills out report

        par Report sent to Administration
            ReportPage->>Administration:Report is sent to admins
        and Report sent to Database
            ReportPage->>+API Middleware: POST Report
            API Middleware->>+Database:insert report 
            Database-->>-API Middleware:return success
            API Middleware-->>-ReportPage:return success
        end

        ReportPage->>-User:Report is filed

        deactivate User2
        deactivate User

        alt Report is accurate
            Administration->>User2:User is suspended 
        end
    end

```
**As a user, I want to be able to report a user who violates the community guildline.**

1. The user reports a user through either the beacon or the user’s profile
2. They will be prompted to check off a reason and any additional details through a text input
3. This report will be sent to administrators, if the report is found to be accurate, the offending user will be disciplined with a reduction in privileges or a complete suspension of the account.


## Use Case 7: User Blocks Another User
```mermaid
---
title: Blocking user
---
sequenceDiagram
   # initialize actors and participants
   actor user as User
   participant homePage as HomePage
   participant otherUserPage as otherUserPage
   participant apiMiddleware as API Middleware
   participant database as Database
   
   # search for user
   activate user
   activate homePage
   user->>homePage: User searches for other user

   # api call for user
   activate apiMiddleware
   homePage->>apiMiddleware: Search input is put into an API call

   activate database
   apiMiddleware->>database: API queries the database

   # database response
   database->>homePage: database returns results to homePage
   homePage-->>user: HomePage displays results to user
   deactivate database
   deactivate apiMiddleware

   # select user
   activate otherUserPage
   homePage->>otherUserPage: User selects other user
   deactivate homePage

   activate apiMiddleware
   otherUserPage->>apiMiddleware: User clicks "Block" button
   
   activate database
   apiMiddleware->>database: Insert blocked user

   databse->>otherUserPage: Returns success
   database-->>user: Displays success
   deactivate apiMiddleware
   deactivate database

   # end
   deactivate user
```
**As a user, I want to be able to block a user so I don't have to interact with them.**
1. The user navigates to either a Beacon or the Friends menu (Recent Players)
2. The user presses the "block" button and confirms
3. The user will no longer see beacons made by that user

## Use Case 8: User friends Another User
```mermaid
---
title: Adding user as friend
---
sequenceDiagram
   # initialize actors and participants
   actor user as User
   participant homePage as HomePage
   participant otherUserPage as otherUserPage
   participant apiMiddleware as API Middleware
   participant database as Database
   
   # search for user
   activate user
   activate homePage
   user->>homePage: User searches for other user

   # api call for user
   activate apiMiddleware
   homePage->>apiMiddleware: Search input is put into an API call

   activate database
   apiMiddleware->>database: API queries the database

   # database response
   database->>homePage: database returns results to homePage
   homePage-->>user: HomePage displays results to user
   deactivate database
   deactivate apiMiddleware

   # select user
   activate otherUserPage
   homePage->>otherUserPage: User selects other user
   deactivate homePage

   activate apiMiddleware
   otherUserPage->>apiMiddleware: User clicks "Add friend" button
   
   activate database
   apiMiddleware->>database: Insert user into friends list

   databse->>otherUserPage: Returns success
   database-->>user: Displays other user friends list 
   deactivate apiMiddleware
   deactivate database

   # end
   deactivate user
```


## Use Case 9: User Updates their Profile
```mermaid
sequenceDiagram
  actor user as User
  participant profilePage as ProfilePage
  participant editProfilePage as EditProfilePage
  participant apiMiddleware as API Middleware
  participant database as Database

  activate user
  user->>profilePage: Taps the "profile" button on the top left corner

  activate profilePage
  profilePage-->>user: Displays user stats and preferences

  user->>profilePage: Taps the "edit" button in the top right corner
  profilePage->>editProfilePage: Opens the edit profile page

  user->>editProfilePage: Adds or removes preferences or tags

  user->>editProfilePage: Presses "save" to confirm changes

  editProfilePage->>apiMiddleware: Sends updated user data
  activate apiMiddleware
  apiMiddleware->>database: Updates user preferences and tags
  database-->>apiMiddleware: Acknowledges data update
  apiMiddleware-->>editProfilePage: Confirms data update
  deactivate apiMiddleware

  editProfilePage-->>user: Closes edit profile page
  profilePage->>user: Displays updated user stats and preferences

  deactivate user
  deactivate profilePage
```
**As a user, I want to be able to update my profile so I can properly communicate my current interests with other users.**
1. The user will tap the “profile” button on the top left corner
2. This will open a display that shows stats on the person, including preferences on games and tags of different descriptors
3. The user taps the “edit button” in the top right of the display, allowing them to add or remove preferences or tags.
4. The user presses “save” to confirm the changes.

## Use Case 10: User Updates Beacon 
```mermaid
    sequenceDiagram
    actor User
    actor BeaconPage
    actor EditBeaconPage
    actor API Middleware
    actor Database

    activate User
    User->>BeaconPage:User clicks on beacon

    activate BeaconPage
    BeaconPage-->>User:Displays Beacon info

    BeaconPage->>EditBeaconPage:User taps the "edit" button
    activate EditBeaconPage
    EditBeaconPage-->>User: Editable detials screen is displayed

    User->>EditBeaconPage:User updates beacon

    EditBeaconPage->>API Middleware:User clicks "save", PUT the updated data

    activate API Middleware
    API Middleware->>+Database: updates data
    Database-->>-API Middleware: return success

    API Middleware-->>EditBeaconPage: return success
    deactivate API Middleware

    EditBeaconPage-->>User:Close the Editable deaitls screen
    deactivate EditBeaconPage

    deactivate BeaconPage
    deactivate User

```

**As a User, I want to be able to update my Beacon so other users will have accurate information.**
1. The user will click on the beacon they have created
2. The user will tap the “edit” button
3. The user will be shown an updated, editable details screen
4. The user will update the necessary details
5. The user will click “save” and the changes will be updated

## Use Case 11: User Manages the Beacon
```mermaid
    sequenceDiagram
    actor User
    actor User2
    participant ReportPage
    participant Administration
    participant BeaconProfile
    participant CommentSection
    participant WaitlistPage
    participant API Middleware
    participant Database

    activate User
    User->>BeaconProfile:Click on Beacon
    activate BeaconProfile
    BeaconProfile->>CommentSection: User views comment section
    activate CommentSection
    CommentSection-->>User:Displays comment section
    CommentSection->>API Middleware: User deletes rude comments
    activate API Middleware
    API Middleware->>+Database: Updates database
    Database-->>-API Middleware:return success
    API Middleware-->>CommentSection: return success
    deactivate API Middleware
    CommentSection-->>User:Displays updated comment section
    deactivate CommentSection
    deactivate BeaconProfile

    alt Rude User
        User->>User2: Click on profile
        
        activate User2
        User->>+ReportPage:Report is opened
        User->>ReportPage:User fills out report

        par Report sent to Administration
            ReportPage->>Administration:Report is sent to admins
        and Report sent to Database
            ReportPage->>+API Middleware: POST Report
            API Middleware->>+Database:insert report 
            Database-->>-API Middleware:return success
            API Middleware-->>-ReportPage:return success
        end

        ReportPage->>-User:Report is filed

        deactivate User2
    end

    activate WaitlistPage
    User->>WaitlistPage:User clicks on Waitlist Page
    WaitlistPage->>+API Middleware: get waitlist
    API Middleware->>+Database:gets waitlist data
    Database-->>-API Middleware:return success
    API Middleware-->>-WaitlistPage:return success
    WaitlistPage-->>User:Displays waitlist
    deactivate WaitlistPage
    deactivate User


```
**As a user, I want to be able to manage the comment section and waitlist of my beacon**
1. The user will click on the already-established beacon as the host
2. The user will view the comments section and delete any comments that aren’t on topic/ are rude
3. The user will report users either commenting or applying if necessary
4. The user will view the waitlist for those looking to join if someone leaves

