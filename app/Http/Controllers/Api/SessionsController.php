<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Http\Requests;

class SessionsController extends Controller {

  public function create(Request $request) {
    $email = $request->email;
    $password = $request->password;

    if (Auth::attempt(['email' => $email, 'password' => $password])) {
      return Auth::getUser();
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
