<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Journal_Entry;
use App\User;

use Illuminate\Http\Request;
use App\Http\Requests;

class JournalEntriesController extends Controller {
  public function index() {
    // $userId = User::all()->first()->id;
    $userId = Auth::id()

    return Journal_Entry::withCount('Responses')
      ->with('responses.question', 'responses.answer')
      ->whereRaw('responses_count > 0')
      ->get();
  }

  public function show(Request $request, $entryId) {
      return Journal_Entry::findOrFail($entryId)
        ->with('responses.question', 'responses.answer')
        ->first();
  }

  public function create() {
    // $userId = User::all()->first()->id;
    $userId = Auth::id()
    // $userId = User::where('rememberToken', Session::get('sessionToken'))
    $entry = new Journal_Entry;
    $entry->user_id = $userId;
    $entry->save();
    return $entry->toArray();
    // return Journal_Entry::create(['user_id' => $userId])->id;
  }
}
