<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
  protected $fillable = [
      'question_id', 'answer_id', 'journal_entry_id'
  ];

  public function journal_entry() {
    return $this->belongsTo('App\Journal_Entry', 'id');
  }

  public function question() {
    return $this->belongsTo('App\Question');
  }

  public function answer() {
    return $this->belongsTo('App\Answer');
  }
}
