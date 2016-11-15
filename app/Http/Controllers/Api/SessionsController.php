<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Http\Requests;
use Javascript;

class SessionsController extends Controller {

  public function create(Request $request) {
    $email = $request->email;
    $password = $request->password;

    if (Auth::attempt(['email' => $email, 'password' => $password])) {
      $user = Auth::getUser()
      // Javascript::put(['username' => $user->name, 'email' => $user->email]);
      return $user;
    }

    else {
      return "Login failed";
    }
  }

  public function destroy() {
    Auth::logout();
    return null;
  }
}
