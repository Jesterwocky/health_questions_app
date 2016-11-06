<?php

namespace App;

use App\Question;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
  public function answers() {
    return $this->hasMany('App\Answer');
  }

  public function responses() {
    return $this->hasMany('App\Response');
  }
}
