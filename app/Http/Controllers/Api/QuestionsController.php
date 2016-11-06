<?php

namespace App\Http\Controllers\Api;

use App\Question;

use Illuminate\Http\Request;

use App\Http\Requests;

class QuestionsController extends Controller
{

  public function index() {
    return Question::all();
  }

  public function show() {
    return Question::all();
  }

}
