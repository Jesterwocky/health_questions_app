<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Response;
use App\Question;
use App\Answer;

use Illuminate\Http\Request;
use App\Http\Requests;

class ResponsesController extends Controller
{
  // public function index() {
  //   return Response::all();
  // }

  public function create() {
    $userId = User::all()->first()->id;

    $response = new Response;
    $response->user_id = $userId;
    $response->question_id = Input::get('question_id');
    $response->answer_id = Input::get('answer_id');
    
    if ($response->save();) {
      return $response->id;
    }
  }

}
