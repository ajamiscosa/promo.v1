@extends('app')
@section('title','Home | eCompaMore')
@section('styles')
<script type='text/javascript' src="{{ asset('js/jquery.min.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/popper.min.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/bootstrap.min.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/fontawesome.min.js') }}"></script>

<style>
    .carousel {
    position: relative
}

.carousel.pointer-event {
    -ms-touch-action: pan-y;
    touch-action: pan-y
}

.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden
}

.carousel-inner::after {
    display: block;
    clear: both;
    content: ""
}

.carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: -webkit-transform .6s ease-in-out;
    transition: transform .6s ease-in-out;
    transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
    .carousel-item {
        transition: none
    }
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
    display: block
}

.active.carousel-item-right,
.carousel-item-next:not(.carousel-item-left) {
    -webkit-transform: translateX(100%);
    transform: translateX(100%)
}

.active.carousel-item-left,
.carousel-item-prev:not(.carousel-item-right) {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
}

.carousel-fade .carousel-item {
    opacity: 0;
    transition-property: opacity;
    -webkit-transform: none;
    transform: none
}

.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right,
.carousel-fade .carousel-item.active {
    z-index: 1;
    opacity: 1
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    z-index: 0;
    opacity: 0;
    transition: 0s .6s opacity
}

@media (prefers-reduced-motion:reduce) {
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-right {
        transition: none
    }
}

.carousel-control-next,
.carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: .5;
    transition: opacity .15s ease
}

@media (prefers-reduced-motion:reduce) {
    .carousel-control-next,
    .carousel-control-prev {
        transition: none
    }
}

.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9
}

.carousel-control-prev {
    left: 0
}

.carousel-control-next {
    right: 0
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: no-repeat 50%/100% 100%
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e")
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e")
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: -ms-flexbox;
    z-index: 300;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none
}

.carousel-indicators li {
    box-sizing: content-box;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease
}

@media (prefers-reduced-motion:reduce) {
    .carousel-indicators li {
        transition: none
    }
}

.carousel-indicators .active {
    opacity: 1
}

.carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center
}
</style>

<style>
        body.modal-open {
            overflow: visible !important;
            position: absolute !important;
            z-index: 300;
            width: 100%;
            height:100%;
        }

    </style>
@endsection
@section('content')


<div id="demo" class="carousel slide" data-ride="carousel">

    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <aside class="promo promo-home with-background text-center credit-theme" style="background-image:url({{ asset('images/carinsurance-background-min.jpg') }})">
                          <div class="container">
                              <div class="promo-content">
                                  <h2 class="f110">Hassle-free <strong class="f180 block">Car Insurance</strong></h2>
                                  <hr class="m-t-1x m-b-05x">
                                  <p class="f110 nowrap">Save up to <strong class="block f260 text-dark m-b-05x">PHP <span class="font-base">10,000</span><sup>*</sup></strong></p>
                                  <a href="/vehicle-insurance" class="btn btn-secondary btn-block btn-lg m-b-1x" title="Compare Now" data-action="ga" data-ga-action="compare_homepage" data-ga-label="" data-ga-product="MOT">Compare Now</a> <span class="o70">It’s free and easy!</span> <span class="o70 pull-right f60">*depending on car model</span>
                              </div>
                              <div class="promo-graphic">
                                  <figure class="cover-graphic" style="background-image:url({{ asset('images/carinsurance-model-min.png')}})"><img src="{{ asset('images/carinsurance-model-min.png')}}" width="705" height="450" alt=""></figure>
                              </div>
                          </div>
                      </aside>
      </div>
      <div class="carousel-item">
        <aside class="promo promo-home with-background text-center loan-theme" style="background-image:url({{ asset('images/loans-background-min.jpg') }})">
                          <div class="container">
                              <div class="promo-content">
                                  <h2 class="f110">Get the best rate for your <strong class="block f170">Personal Loan</strong></h2>
                                  <hr class="m-t-1x m-b-05x">
                                  <p class="f110 nowrap">Lowest interest at <strong class="block f260 text-dark font-base m-b-05x">1.26%</strong></p>
                                  <a href="/vehicle-insurance" class="btn btn-secondary btn-block btn-lg m-b-1x" title="Compare Now" data-action="ga" data-ga-action="compare_homepage" data-ga-label="Loan Amount : 50000, TermsId : 4" data-ga-product="CLO">Compare Now</a> <span class="o70">It’s free and easy!</span>
                              </div>
                              <div class="promo-graphic">
                                  <figure class="cover-graphic" style="background-image:url({{ asset('images/loans-model-min.png')}})"><img src="{{ asset('images/loans-model-min.png')}}" width="705" height="450" alt=""></figure>
                              </div>
                          </div>
                      </aside>
      </div>
      <div class="carousel-item">
        <aside class="promo promo-home with-background text-center insurance-theme" style="background-image:url({{ asset('images/cc-background-min.jpg')}})">
                          <div class="container">
                              <div class="promo-content">
                                  <h2 class="f110">Find the best <strong class="f180 block">Credit Card</strong></h2>
                                  <hr class="m-t-1x m-b-05x">
                                  <p class="f110 nowrap">Take your pick from over <strong class="block f260 text-dark m-b-05x"><span class="font-base">70 cards</span></strong></p>
                                  <a href="/wizard/credit-card" class="btn btn-secondary btn-block btn-lg m-b-1x" title="Compare Now" data-action="ga" data-ga-action="compare_homepage" data-ga-label="" data-ga-product="CC">Compare Now</a> <span class="o70">It’s free and easy!</span>
                              </div>
                              <div class="promo-graphic">
                                  <figure class="cover-graphic" style="background-image:url({{ asset('images/cc-model-min.png')}})"><img src="{{ asset('images/cc-model-min.png')}}" width="705" height="450" alt=""></figure>
                              </div>
                          </div>
                      </aside>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
<main class="main" role="main">
    <article class="article" data-track="HomePage" data-product="Home">
        <div class="home-panel home-intro">
            <h1>The Philippines’ No. 1 Financial Supermarket</h1>
            <hr class="seperator">
            <div class="row row-wide text-left">
                <div class="col-xs-12 col-sm-6">
                    <p>eCompaMore is the largest and most trusted one-stop shop for credit card, loan, and insurance services in the country. Since our launch in 2014, we have helped more than six million Filipinos save time and money by providing a platform for online comparison and full application.</p>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <p>eCompaMore, represented in the Philippines by SnapCompare Corporation, is duly registered with the Securities and Exchange Commission. Together with more than 20 banking and insurance partners, we remain true to our goal of helping you become #WiserWealthier each day.</p>
                </div>
            </div>
            <div class="carousel step-carousel m-t-3x m-b-4x">
                <div class="carousel-items carousel-loaded" id="step-carousel" style="opacity: 1; display: block;">
                    <div class="outer">
                        <div class="inner" style="width: 2280px; left: 0px; display: block;">
                            <div class="item" id="step-carousel-01" role="tabpanel" style="width: 380px;">
                                <div class="icon-block"><img src="{{ asset('images/icon-step-01.png') }}" width="110" height="110" alt=""> <strong>Step 1</strong> <span>Choose a product</span></div>
                            </div>
                            <div class="item" id="step-carousel-02" role="tabpanel" style="width: 380px;">
                                <div class="icon-block"><img src="{{ asset('images/icon-step-02.png') }}" width="110" height="110" alt=""> <strong>Step 2</strong> <span>Launch comparison wizard</span></div>
                            </div>
                            <div class="item" id="step-carousel-03" role="tabpanel" style="width: 380px;">
                                <div class="icon-block"><img src="{{ asset('images/icon-step-03.png') }}" width="110" height="110" alt=""> <strong>Step 3</strong> <span>Take your best pick</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol class="carousel-pager visible-xs" role="tablist">
                    <li data-action="carousel" data-target="#step-carousel" aria-controls="step-carousel-01" role="tab" class="active"><span>2</span></li>
                    <li data-action="carousel" data-target="#step-carousel" aria-controls="step-carousel-02" role="tab"><span>2</span></li>
                    <li data-action="carousel" data-target="#step-carousel" aria-controls="step-carousel-02" role="tab"><span>2</span></li>
                </ol>
            </div>
        </div>
        <div class="home-panel home-products">
            <hr class="tall">
            <h2 class="h1">Get a free quote</h2>
            <hr class="seperator">
            <p class="f130 m-b-3x">Compare a variety of insurance products</p>
            <div class="carousel product-carousel m-t-3x m-b-4x">
                <div class="carousel-item carousel-loaded" id="product-carousel" style="opacity: 1; display: block;">
                    <div class="outer">
                        <div class="inner" style="width: 4560px; left: 0px; display: block;">
                            <div class="item" id="product-carousel-01" role="tabpanel" style="width: 380px;">
                                <div class="widget product-widget">
                                    <figure class="unveil unveiled"><a href="/vehicle-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" width="318" height="164" alt=""></a></figure>
                                    <h3 class="h6">Vehicle Insurance</h3>
                                    <p class="f90">Get full protection and save thousands of pesos.</p>
                                    <a href="/vehicle-insurance" class="btn btn-default btn-block" title="Read more about vehicle insurance">Learn More</a>
                                </div>
                            </div>
                            <div class="item" id="product-carousel-02" role="tabpanel" style="width: 380px;">
                                <div class="widget product-widget">
                                    <figure class="unveil unveiled"><a href="/vehicle-insurance/ctpl" title=""><img src="{{ asset('images/img-loader.png') }}" width="318" height="164" alt=""></a></figure>
                                    <h3 class="h6">CTPL Insurance</h3>
                                    <p class="f90">Give others protection and save thousands of pesos.</p>
                                    <a href="/vehicle-insurance/ctpl" class="btn btn-default btn-block" title="Read more about ofw loan">Learn More</a>
                                </div>
                            </div>
                            <div class="item" id="product-carousel-03" role="tabpanel" style="width: 380px;">
                                <div class="widget product-widget">
                                    <figure class="unveil unveiled"><a href="/personal-accident-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" width="318" height="164" alt=""></a></figure>
                                    <h3 class="h6">Personal Accident Insurance</h3>
                                    <p class="f90">Protect your finances in case of accidents.</p>
                                    <a href="/personal-accident-insurance" class="btn btn-default btn-block" title="Read more about credit cards">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <style>.promo.loan-theme{background-color:#003366;}</style>
    <aside class="promo promo-product text-center white-content loan-theme bg-subscribe-banking" role="marquee">
        <div class="container">
            <div class="promo-widget">
                <form class="promo-banner-form subscribe-form" action="https://newsletter.eCompaMore.com/subscribe" method="post" data-action="subscribe-form" role="form" data-ga-action="Signup" novalidate="novalidate">
                    <fieldset>
                        <input type="hidden" value="3hghLTPb5nYEtoHv5nhJRA" name="list">
                        <h4 class="f160 m-t-1x m-b-1x">Wiser, wealthier</h4>
                        <p class="f110 m-b-2x o80">Get free wealth-building tips and banking promo alerts when you subscribe to our newsletter</p>
                        <div class="form-grid">
                            <input type="hidden" name="name" id="name">
                        <div class="form-group col-sm-6"><input type="text" class="text required form-control plain" name="FirstName" id="FirstName" autocapitalize="off" autocorrect="off" placeholder="First Name" value="" data-validate="required|email"></div>
                            <div class="form-group col-sm-6"><input type="text" class="text required form-control plain" name="LastName" id="LastName" autocapitalize="off" autocorrect="off" placeholder="Last Name" value="" data-validate="required|email"></div>
                            </div>
                            <div class="form-grid">
                                <div class="form-group col-sm-8"><label class="sr-only" for="email">Email Address</label> <input type="email" class="text required form-control plain" name="email" id="email" autocapitalize="off" autocorrect="off" placeholder="Type your Email Address" value="" data-validate="required|email"></div>
                                <div class="form-group col-sm-4"><button type="submit" class="btn btn-default btn-lg btn-block" id="submit" name="submit" data-label="Subscribe" data-check="email">Subscribe</button></div>
                            </div>
                            <div class="promo-extra hidden-sm">
                                <hr class="m-t-1x 070">
                                <span class="btn-label m-t-1x f100 o70">We value privacy and never share your details.</span>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="promo-photo">
                    <style>.promo .cover-border, .promo .cover-photo{width: 100%; background-position: left; left: 0; right: 0;}</style>
                    <figure class="cover-photo" style="background-image: url({{ asset('images/Sidebar-generic-newsletter.jpg')}})">
                        <style>.promo.loan-theme .cover-border:before{border-top-color: rgba(0, 51, 102, 0.7);}.promo.loan-theme .cover-border:after{border-top-color: #003366;}</style>
                        <div class="cover-border" style=" .cover-border:before rgba(0,51,102,.7);.cover-border:after border-top-color:#003366"><img src="{{ asset('images/Sidebar-generic-newsletter.jpg') }}" width="640" height="320" alt=""></div>
                    </figure>
                </div>
            </div>
        </aside>
        <script>document.onreadystatechange=function(){if(document.readyState=="complete"){$('#submit').click(function(){$('#name').val($('#FirstName').val()+' '+$('#LastName').val());});}}</script>
    </main>
@endsection

@section('scripts')
    <script>
        $(document).ready(function(){
            var $carousel = $('.promo-carousel');
            $carousel.carousel({
                interval: 2000,
                cycle: true
            });
        });
    </script>
@endsection
