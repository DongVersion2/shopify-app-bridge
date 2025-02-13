@extends('layouts.app')

@section('content')
<div class="jumbotron">

    <button id="open-picker">Open resource picker</button>
  <script>
    document.getElementById('open-picker').addEventListener('click', async () => {
        const selected = await shopify.resourcePicker({type: 'product'});
        console.log(selected);
      });
  </script>

</div>
@endsection