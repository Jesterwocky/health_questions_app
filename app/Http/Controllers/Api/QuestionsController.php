<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Question;

use Illuminate\Http\Request;
use App\Http\Requests;

class QuestionsController extends Controller
{

  public function index() {
    // return "working";
    return Question::all()->load('answers');
  }

  public function show() {
  }

}
