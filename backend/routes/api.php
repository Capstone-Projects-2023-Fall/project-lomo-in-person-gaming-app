<?php

use App\Http\Controllers\GameController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeaconController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AttendeeController;
use App\Http\Controllers\ProfileController;
use App\Models\Attendee;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('beacons', BeaconController::class);
    Route::delete('beacons', 'BeaconController@delete');    
    Route::delete('attendees', 'AttendeeController@delete');
    Route::apiResource('users', UserController::class)->except('store');
    Route::apiResource('attendees', AttendeeController::class);
    Route::post('attendees', [App\Http\Controllers\AttendeeController::class,'store']); 
    Route::patch('beacons', 'BeaconController@update');
    Route::get('games', [GameController::class, 'getGames']);
    Route::get('beacons/{beacon}/comments', [CommentController::class, 'index']);
    Route::post('beacons/{beacon}/comments', [CommentController::class, 'store']);
});

Route::get('attendees/beaconAttendees/{beacon_id}', [App\Http\Controllers\AttendeeController::class,'beaconAttendees']);
Route::get('/profiles/{user_id}', [ProfileController::class, 'show']);

