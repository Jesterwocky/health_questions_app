<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Validator;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class UsersController extends Controller {

  public function create(Request $request) {

    $credentials = $request->toArray();

    $validator = Validator::make(
      $credentials,
      [
        'name' => 'required|max:255',
        'email' => 'required|email|max:255|unique:users',
        'password' => 'required|min:6',
      ]
    );

    if ($validator->passes()) {
      return User::create([
        'name' => $credentials['name'],
        'email' => $credentials['email'],
        'password' => Hash::make($credentials['password']),
      ]);
    }

    else {
      return $validator->messages();
    }
  }
}
