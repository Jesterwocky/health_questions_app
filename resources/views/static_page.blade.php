@extends('layouts.healthapp')

@section('test-content')
<div id="healthapp">

</div>
<script src="/js/bundle.js" charset="utf-8"></script>
<script>
  const user = {!! json_encode((array)auth()->user()) !!};
</script>
@endsection
