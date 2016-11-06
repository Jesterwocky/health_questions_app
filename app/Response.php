<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
  public function journal_entry() {
    return $this->belongsTo('App\Journal_Entry');
  }

  public function question() {
    return $this->belongsTo('App\Question');
  }

  public function answer() {
    return $this->belongsTo('App\Answer');
  }
}
