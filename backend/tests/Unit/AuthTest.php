<?php

namespace Tests\Unit;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /** @test */
    public function user_can_logout()
    {
        // Create a user
        $user = User::factory()->create();

        // Authenticate the user
        Sanctum::actingAs($user);

        // Make a POST request to the logout endpoint
        $response = $this->postJson('/api/logout');

        // Assert the response status
        $response->assertStatus(200);

        // Assert the token is revoked
        $this->assertCount(0, $user->tokens);
    }
}