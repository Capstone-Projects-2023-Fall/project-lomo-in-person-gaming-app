<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('attendees', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('beacon_id')->references('id')->on('beacons')->contrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignUuid('user_id')->references('id')->on('users')->contrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('controllers_brought')->nullable();
            $table->boolean('isHost')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendees');
    }
};
