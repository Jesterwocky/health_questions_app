<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Response;
use App\Question;
use App\Answer;
use App\User;

use Illuminate\Http\Request;
use App\Http\Requests;

class ResponsesController extends Controller
{
  public function create(Request $request) {
    $journalEntryId = $request->journal_entry_id;
        
    $questionId = $request->question_id;
    $answerId = $request->answer_id;

    $response = Response::where('journal_entry_id', $journalEntryId)
      ->where('question_id', $questionId)
      ->first();

    if (!$response){
       $response = new Response;
       $response->journal_entry_id = $journalEntryId;
       $response->question_id = $questionId;
    }

    $response->answer_id = $answerId;

    $response->save();

    return $response->toArray();
  }

}
