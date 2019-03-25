@php
    use Carbon\Carbon;
@endphp
@extends('app')
@section('title','CTPL Insurance | Inquiry')
@section('content')
    <nav class="breadcrumb">
        <ol>
            <li>
                <a href="/" property="item" typeof="WebPage" title="">
                    <span property="name">Home</span>
                    <meta property="position" content="1">
                </a>
            </li>
            <li>
                <a href="/ctpl-insurance" property="item" typeof="WebPage" title="">
                    <span property="name">CTPL Insurance </span>
                    <meta property="position" content="2">
                </a>
            </li>
            <li>
                <span property="name">Inquiry</span>
                <meta property="position" content="3">
            </li>
        </ol>
    </nav>
    <aside class="promo promo-campaign promo-inline promo-border-top promo-40x60">
        <div class="container">
            <div class="promo-content">
                <h1 class="f180 p-t-1x m-b-2x">Find the <strong>best CTPL Insurance</strong>—fast</h1>
                <ul class="tick-list f120 m-b-3x">
                    <li>Get quotes from different providers</li>
                    <li>Compare deductibles, accredited motorshops, claims ratings, and more</li>
                    <li>Enjoy guaranteed savings of up to P10,000, depending on car model</li>
                </ul>
                <p class="f140 m-b-3x">Start here<span class="pointer rotate-90"><i class="icon i-hint-point-left i-5x"></i></span></p>
            </div>
            <div class="promo-graphic"></div>
        </div>
    </aside>

    <article class="article">
        <div class="content">
            <form class="product-marketplace-form" id="product-marketplace-form" aria-owns="product-marketplace-action" action="00j-canvas-wizard-marketplace-(ctpl-insurance)-(step-b).html" method="get" novalidate="novalidate">
                <fieldset>
                    <div class="col-lg-12" id="card-grid">
                        <section class="card">
                            <div class="card-info">
                                <figure><img src="https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/marketplace-card-vehicle-insurance.png" alt="Private car insurance"></figure>
                                <h3>Private car</h3>
                                <p><em>(Sedan, SUV, AUV or Jeep)</em></p>
                            </div>
                            <div class="card-data"><strong><em>PHP </em>610.41</strong> <a href="/ctpl-insurance/order?type=1" data-action="ga" data-ga-action="result" data-ga-label="/result/marketplace/ctpl" data-ga-product="MI_CTPL" class="btn btn-default btn-block btn-sm">Get Quote</a></div>
                        </section>
                        <section class="card">
                            <div class="card-info">
                                <figure><img src="https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/marketplace-card-commercial-vehicle-insurance.png" alt="Private car insurance"></figure>
                                <h3>Commercial vehicle</h3>
                                <p><em>(taxi or light to medium trucks)</em></p>
                            </div>
                            <div class="card-data"><strong><em>PHP </em>660.41</strong> <a href="/ctpl-insurance/order?type=2" data-action="ga" data-ga-action="result" data-ga-label="/result/marketplace/ctpl" data-ga-product="MI_CTPL" class="btn btn-default btn-block btn-sm">Get Quote</a></div>
                        </section>
                        <section class="card">
                            <div class="card-info">
                                <figure><img src="https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/marketplace-card-truck-insurance.png" alt="Private car insurance"></figure>
                                <h3>Heavy vehicle</h3>
                                <p><em>(heavy truck or private bus)</em></p>
                            </div>
                            <div class="card-data"><strong><em>PHP </em>1,250.40</strong> <a href="/ctpl-insurance/order?type=3" data-action="ga" data-ga-action="result" data-ga-label="/result/marketplace/ctpl" data-ga-product="MI_CTPL" class="btn btn-default btn-block btn-sm">Get Quote</a></div>
                        </section>
                    </div>
                </fieldset>
            </form>
        </div>
    </article>


@endsection

@section('scripts')
    <script>
        var agree = $('#Agree').val();

        $('#btnSubmit').on('click', function(e) {
            if(!agree) {
                e.preventDefault();
                alert('Please confirm that you are allowing us to collect, store and process your personal information.');
            }
        });

    </script>
@endsection
