<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;

use Illuminate\Http\Request;

use App\Http\Requests;

class SessionsController extends Controller {

  public function create() {
    // $user = User::where(
    //   'rememberToken',
    //   Session::get('sessionToken');
    // );
    Session::get('sessionToken');


  }

  public function destroy() {
    return null;
  }
}
