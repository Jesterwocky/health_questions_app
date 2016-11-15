<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Question;
use App\Answer;
use App\Journal_Entry;
use App\Response;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
      DB::table('responses')->delete();
      DB::table('journal_entries')->delete();
      DB::table('answers')->delete();
      DB::table('questions')->delete();
      DB::table('users')->delete();

      $user = User::create([
        'name' => 'Chester McTesterton',
        'email' => 'chester@example.com',
        'password' => bcrypt('password123')
      ]);

      $user2 = User::create([
        'name' => 'Moo',
        'email' => 'moo@example.com',
        'password' => bcrypt('password123')
      ]);

      $question_1 = Question::create([
                      'question_text' => 'How are you feeling?'
                    ]);

                    $answer_1_1 = Answer::create([
                      'question_id' => $question_1->id,
                      'answer_text' => 'Great!'
                    ]);

                    $answer_1_2 = Answer::create([
                      'question_id' => $question_1->id,
                      'answer_text' => 'Ok'
                    ]);

                    $answer_1_3 = Answer::create([
                      'question_id' => $question_1->id,
                      'answer_text' => 'Bad'
                    ]);

      $question_2 = Question::create([
                      'question_text' => 'What did you have for breakfast?'
                    ]);

                    $answer_2_1 = Answer::create([
                      'question_id' => $question_2->id,
                      'answer_text' => 'Cereal'
                    ]);

                    $answer_2_2 = Answer::create([
                      'question_id' => $question_2->id,
                      'answer_text' => 'Fruit'
                    ]);

                    $answer_2_3 = Answer::create([
                      'question_id' => $question_2->id,
                      'answer_text' => 'Nothing'
                    ]);

      $question_3 = Question::create([
                      'question_text' => 'Did you exercise yesterday?'
                    ]);

                    $answer_3_1 = Answer::create([
                      'question_id' => $question_3->id,
                      'answer_text' => 'Yes'
                    ]);

                    $answer_3_2 = Answer::create([
                      'question_id' => $question_3->id,
                      'answer_text' => 'No'
                    ]);

      $question_4 = Question::create([
                      'question_text' => 'Have you spoken with friends or family today?'
                    ]);

                    $answer_4_1 = Answer::create([
                      'question_id' => $question_4->id,
                      'answer_text' => 'Yes'
                    ]);

                    $answer_4_2 = Answer::create([
                      'question_id' => $question_4->id,
                      'answer_text' => 'No'
                    ]);

      $journal_entry_1 = Journal_Entry::create(['user_id' => $user->id]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_1->id,
                          'question_id' => $question_1->id,
                          'answer_id' => $answer_1_1->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_1->id,
                          'question_id' => $question_2->id,
                          'answer_id' => $answer_2_1->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_1->id,
                          'question_id' => $question_3->id,
                          'answer_id' => $answer_3_1->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_1->id,
                          'question_id' => $question_4->id,
                          'answer_id' => $answer_4_1->id
                        ]);

      $journal_entry_2 = Journal_Entry::create(['user_id' => $user->id]);;

                        Response::create([
                          'journal_entry_id' => $journal_entry_2->id,
                          'question_id' => $question_1->id,
                          'answer_id' => $answer_1_2->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_2->id,
                          'question_id' => $question_2->id,
                          'answer_id' => $answer_2_2->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_2->id,
                          'question_id' => $question_3->id,
                          'answer_id' => $answer_3_2->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_2->id,
                          'question_id' => $question_4->id,
                          'answer_id' => $answer_4_2->id
                        ]);

      $journal_entry_3 = Journal_Entry::create(['user_id' => $user->id]);;

                        Response::create([
                          'journal_entry_id' => $journal_entry_3->id,
                          'question_id' => $question_1->id,
                          'answer_id' => $answer_1_3->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_3->id,
                          'question_id' => $question_2->id,
                          'answer_id' => $answer_2_3->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_3->id,
                          'question_id' => $question_3->id,
                          'answer_id' => $answer_3_1->id
                        ]);

                        Response::create([
                          'journal_entry_id' => $journal_entry_3->id,
                          'question_id' => $question_4->id,
                          'answer_id' => $answer_4_1->id
                        ]);

    }
}
