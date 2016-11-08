<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function() {
  return view('static_page');
});

Route::auth();

Route::group(['namespace' => 'Api'], function() {
  Route::post('/users', 'UsersController@create');

  Route::post('/sessions', 'SessionsController@create');
  Route::delete('/sessions', 'SessionsController@destroy');

  Route::get('/questions', 'QuestionsController@index');

  Route::post('/responses', 'ResponsesController@create');
});

// Route::get('/home', 'HomeController@index');
