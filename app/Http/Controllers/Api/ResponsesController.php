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
  public function index() {
    return Response::all();
  }

}
