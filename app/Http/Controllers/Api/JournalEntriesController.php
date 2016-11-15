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
      $userId = Auth::id();

      return Journal_Entry::withCount('responses')
        ->with('responses.question', 'responses.answer')
        ->where('user_id', $userId)
        // ->whereRaw('responses_count > 0')
        ->get();

      // SELECT *, count(*) from Journal_Entries
      // LEFT JOIN Responses ON Responses.journal_entry_id = Journal_Entries.id
      // GROUP BY Journal_Entries.id

      // return Journal_Entry::withCount('responses')
      // ->with('responses.question', 'responses.answer')
      // ->where('user_id', $userId)
      // ->whereRaw('count(*) > 0')
      // ->get();
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
