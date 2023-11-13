---
sidebar_position: 2
---
# Backend Unit Tests

Laravel has a built-in test suite wrapper that uses the [PHPUnit testing framework](https://phpunit.de/) to create and run all tests.

The unit tests are grouped together under Feature tests. Each feature test corresponds to a [use case](/docs/requirements/use-case-descriptions).

:::note
The Laravel Sail docker container must be running for the commands to work. For more testing commands, check out the [Larvel 10 testing documentation](https://laravel.com/docs/10.x/testing). Remember to use the [sail](https://laravel.com/docs/10.x/sail#executing-sail-commands) or [docker](/resources/docker-quick-start#access-the-docker-containers-command-line) command to execute any Laravel commands.
:::

To run ALL unit tests, run the following command:
```bash
sail artisan test
```

To run ALL unit tests **AND** get test coverage results, run the following command:
```bash
sail artisan test --coverage
```

## Test Coverage

Results printed from the `sail artisan test --coverage` command. 

```
Console/Kernel ............................... 16 / 66.7%  
  Exceptions/Handler ............................... 100.0%  
  Http/Controllers/BeaconController .... 16, 43..59 / 55.6%  
  Http/Controllers/Controller ...................... 100.0%  
  Http/Controllers/PostController .................... 0.0%  
  Http/Controllers/UserController .................... 0.0%  
  Http/Kernel ...................................... 100.0%  
  Http/Middleware/Authenticate ....................... 0.0%  
  Http/Middleware/EncryptCookies ................... 100.0%  
  Http/Middleware/PreventRequestsDuringMaintenance . 100.0%  
  Http/Middleware/RedirectIfAuthenticated ............ 0.0%  
  Http/Middleware/TrimStrings ...................... 100.0%  
  Http/Middleware/TrustHosts ......................... 0.0%  
  Http/Middleware/TrustProxies ..................... 100.0%  
  Http/Middleware/ValidateSignature ................ 100.0%  
  Http/Middleware/VerifyCsrfToken .................. 100.0%  
  Models/Beacon .................................... 100.0%  
  Models/Post ...................................... 100.0%  
  Models/User ...................................... 100.0%  
  Providers/AppServiceProvider ..................... 100.0%  
  Providers/AuthServiceProvider .................... 100.0%  
  Providers/BroadcastServiceProvider ................. 0.0%  
  Providers/EventServiceProvider ................... 100.0%  
  Providers/RouteServiceProvider ................... 100.0%  
  ─────────────────────────────────────────────────────────  
                                              Total: 41.4 %  
```

## Feature Tests

### 3. Beacon Creation Test

#### Test: Checks that POST request to /api/beacons/ successfully accepts JSON data
```test_post_beacon_request_returns_successful_response()```
- Returns: HTTP status code 201 for successful resource creation

#### Test: Checks that POST request to /api/beacons/ fails when required fields are empty
```test_post_beacon_request_fails_when_required_fields_are_empty()```
- Returns: HTTP status code 422 for unprocessable entity