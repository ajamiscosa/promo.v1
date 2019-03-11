@php($rate = 0.01)
@foreach(App\Insurer::orderByDesc('promo')->get() as $insurer)
    @include('templates.insurer',[
        'data'=>$insurer,
        'price'=>$price,
        'bi'=>$bi,
        'pd'=>$pd,
        'aog'=>$aog,
        'aograte'=>$aograte,
        'rate'=>$rate
    ])
    @php($rate+=0.0005)
@endforeach