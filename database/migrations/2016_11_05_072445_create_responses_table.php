<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('responses', function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();

        $table->integer('journal_entry_id');
        $table->foreign('journal_entry_id')
          ->references('id')
          ->on('journal_entries');

        $table->integer('question_id');
        $table->foreign('question_id')
          ->references('id')
          ->on('questions');

        $table->integer('answer_id');
        $table->foreign('answer_id')
          ->references('id')
          ->on('answers');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('responses');
    }
}
