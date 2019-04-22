@extends('app')
@section('content')
<div class="row">
    <div class="col-lg-6 col-lg-offset-3">
        @include('certificate-print', ['data'=>$data, 'client'=>$client])
        <br/>
    </div>
</div>
@endsection
