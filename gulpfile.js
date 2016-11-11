var elixir = require('laravel-elixir');

// require('laravel-elixir-webpack-react');
require('laravel-elixir-webpack');
// require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('healthapp.scss');
    // mix.webpack('healthapp.jsx');
    // mix.browserify('healthapp.js');
});
