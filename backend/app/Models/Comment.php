<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Comment extends Model implements ShouldBroadcast
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'beacon_id', 'user_id', 'content',
    ];

    /**
     * Get the beacon that owns the comment.
     */
    public function beacon()
    {
        return $this->belongsTo(Beacon::class);
    }

    /**
     * Get the user that owns the comment.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the broadcast event name.
     *
     * @return string
     */
    public function broadcastAs()
    {
        return 'CommentCreated';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('beacon.' . $this->beacon_id);
    }
}
