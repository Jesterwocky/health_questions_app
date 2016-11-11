<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Journal_Entry;
use App\User;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;

class JournalEntriesController extends Controller {
  public function index() {
    if (Auth::check()) {
      # code...
      $userId = Auth::id();

      return Journal_Entry::withCount('Responses')
      ->with('responses.question', 'responses.answer')
      ->where('user_id', $userId)
      ->whereRaw('responses_count > 0')
      ->get();
    }

    else {
      return "user not logged in";
    }
  }

  public function show(Request $request, $entryId) {
      return Journal_Entry::findOrFail($entryId)
        ->with('responses.question', 'responses.answer')
        ->first();
  }

  public function create() {
    $entry = new Journal_Entry;
    $entry->user_id = Auth::id();
    $entry->save();
    return $entry->toArray();
  }
}
