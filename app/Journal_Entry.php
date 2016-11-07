<?php

namespace App;

use App\Journal_Entry;

use Illuminate\Database\Eloquent\Model;

class Journal_Entry extends Model
{

  protected $table = 'journal_entries';

  public function journal_entry() {
    return Journal_Entry::all();
  }

  public function user() {
    return $this->belongsTo('App\User');
  }

  public function responses() {
    return $this->hasMany('App\Response');
  }

  public function questions() {
    return $this->hasMany('App\Question');
  }

}
