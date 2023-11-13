<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Beacon;
use App\Comment;
use App\User;

class CommentControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testStoreComment()
    {
        $beacon = factory(Beacon::class)->create();
        $user = factory(User::class)->create();

        $response = $this->post("/api/beacons/{$beacon->id}/comments", [
            'user_id' => $user->id,
            'content' => 'Test comment'
        ]);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'id', 'beacon_id', 'user_id', 'content'
        ]);
    }

    public function testIndexComments()
    {
        $beacon = factory(Beacon::class)->create();
        $comments = factory(Comment::class, 3)->create(['beacon_id' => $beacon->id]);

        $response = $this->get("/api/beacons/{$beacon->id}/comments");

        $response->assertStatus(200);
        $response->assertJson($comments->toArray());
    }

    public function testCommentBroadcast()
    {
        Broadcast::shouldReceive('event')
            ->once()
            ->with(Mockery::type('App\Comment'));

        $beacon = factory(Beacon::class)->create();
        $user = factory(User::class)->create();

        $response = $this->post("/api/beacons/{$beacon->id}/comments", [
            'user_id' => $user->id,
            'content' => 'Test comment'
        ]);

        $response->assertStatus(201);
    }
}
