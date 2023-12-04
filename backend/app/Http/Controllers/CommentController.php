<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Beacon;
use Illuminate\Http\Request;
use App\Events\CommentCreated;

class CommentController extends Controller
{
    // Retrieve comments for a specific beacon
    public function index($beaconId)
    {
        $comments = Comment::where('beacon_id', $beaconId)->with('user')->get();
        return response()->json($comments);
    }

    public function store(Request $request, $beaconId)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'beacon_id' => 'required|exists:beacons,id',
            'content' => 'required|string',
        ]);

        $comment = new Comment();
        $comment->user_id = auth()->id();
        $comment->beacon_id = $beaconId;
        $comment->content = $request->content;
        $comment->save();

        // Broadcast the event
        broadcast(new CommentCreated($comment))->toOthers();

        return response()->json($comment, 201);
    }
}
