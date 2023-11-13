<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Beacon;
use App\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Beacon  $beacon
     * @return \Illuminate\Http\Response
     */
    public function index(Beacon $beacon)
    {
        return response()->json($beacon->comments, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Beacon  $beacon
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Beacon $beacon)
    {
        $comment = new Comment;
        $comment->beacon_id = $beacon->id;
        $comment->user_id = $request->user_id; // or get from authenticated user
        $comment->content = $request->content;
        $comment->save();

        return response()->json($comment, 201);
    }

}
