<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

use Auth;
use Validator;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\ThrottlesLogins;
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
      User::create([
        'name' => $credentials['name'],
        'email' => $credentials['email'],
        'password' => Hash::make($credentials['password']),
      ]);

      if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']])) {
        return Auth::getUser();
      }

      else {
        return "Login failed";
      }
    }

    else {
      return $validator->messages();
    }
  }
}
