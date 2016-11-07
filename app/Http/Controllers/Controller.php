<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

use App\User;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    // $current_user = null;

    // public function currentUser() {
    //   $current_user = $current_user
    //     ?? User::where('rememberToken', Session::get('sessionToken'))->first();
    // }
    //
    // // need to make sure user has access to its instance method 'reset...'
    // public function logIn(user) {
    //   $newToken = user.resetSessionToken();
    //   Session::put('sessionToken', $newToken);
    //   render user;
    // }
}
