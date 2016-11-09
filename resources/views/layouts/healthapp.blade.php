<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <!-- <script> let _token = '<?php echo csrf_token(); ?>'; </script> -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />
  </head>
  <body>
    @yield('test-content')
  </body>
</html>
