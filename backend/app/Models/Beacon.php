<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Beacon extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'host_id',
        'title',
        'image',
        'game',
        'description',
        'date_time',
        'location',
        'num_players_needed',
        'waitlist',
        'players_attended',
        'comments'
    ];
}