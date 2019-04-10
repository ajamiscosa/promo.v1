@php
$field = "cat{$type}";
@endphp
@foreach(App\Insurer::where($field,'>',0)->orderBy($field)->get() as $insurer)
    @php
        $rate = 0;
        switch($type) {
            case 0: $rate = $insurer->cat0; break;
            case 1: $rate = $insurer->cat1; break;
            case 2: $rate = $insurer->cat2; break;
            case 3: $rate = $insurer->cat3; break;
        }
    @endphp

    @if($rate>0)
        @include('templates.insurer',[
            'data'=>$insurer,
            'price'=>$price,
            'bi'=>$bi,
            'pd'=>$pd,
            'aog'=>$aog,
            'rate'=>$rate,
            'grocery'=>$grocery,
            'water'=>$water,
            'electric'=>$electric,
            'hospital'=>$hospital,
            'rice'=>$rice,
            'client'=>$client,
            'inquiry'=>$inquiry
        ])
    @endif
@endforeach
