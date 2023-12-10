<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttendeePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules() {
        return [
            'beacon_id' => 'required|string|exists:beacons,id',
            'user_id' => 'required|string|exists:users,id',
            'controllers_brought' => 'required|integer|gte:0',
            'isHost' => 'required|boolean'
        ];
    }

}
