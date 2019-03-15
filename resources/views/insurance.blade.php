@extends('app')
@section('content')
<aside class="promo promo-campaign promo-category promo-overlay overlay-10 text-center promo-50x50 white-content insurance-theme" role="marquee">
        <div class="container">
           <div class="promo-content">
              <h2 class="f110 m-b-1x">Discover our <strong class="block f170">Insurance Services</strong></h2>
              <hr class="border-plain o50 m-t-1x m-b-3x">
              <div class="form-group">
                 <label class="sr-only" for="loan-service">loan Service</label>
                 <select class="select form-control plain" name="loan-service" id="loan-service" onchange="document.getElementById(&#39;ins-gq&#39;).setAttribute(&#39;href&#39;,this.value);">
                    <option value="">- choose an insurance service</option>
                    <option value="/vehicle-insurance">Vehicle Insurance</option>
                    <option value="/ctpl-insurance">CTPL Insurance</option>
                    <option value="/personal-accident-insurance">Personal Accident Insurance</option>
                 </select>
              </div>
              <a href="https://www.ecomparemo.com/vehicle-insurance" class="btn btn-default btn-block btn-lg m-b-1x" title="" id="ins-gq">Get a Quote</a>
              <span class="o80">It’s free and easy!</span>
           </div>
           <div class="promo-graphic">
              <figure class="cover-graphic" style="background-image: url(&quot;{{ asset('images/category-promo-1200x450-insurance.png')}} &quot;);"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/category-promo-1200x450-insurance.png') }} 1x, {{ asset('images/category-promo-1200x450-insurance@2x.png') }} 2x" class=" lazyloaded" width="1200" height="450" alt="" srcset="{{ asset('images/category-promo-1200x450-insurance.png') }} 1x, {{ asset('images/category-promo-1200x450-insurance@2x.png') }} 2x"></figure>
           </div>
        </div>
     </aside>
     <!-- promo ends -->
     <main class="main" role="main">
        <!-- verge starts -->
        <div class="promo-verge">
           <div class="container">&nbsp;</div>
        </div>
        <!-- verge ends -->
        <article class="article">
           <div class="content">
              <!-- intro starts -->
              <div class="category-panel category-intro">
                 <h1>Get the Best Insurance in the Philippines</h1>
                 <hr class="seperator">
                 <p class="lead">Insurance is about investing—investing in yourself, your property, and the people around you. Getting the best insurance coverage—be it car insurance, travel insurance, or health insurance—that meets your needs, on the other hand, requires investing in knowledge. Finding the product with the lowest premium and most comprehensive coverage can be tricky, and it’s easy to get caught up in the terms.</p>
                 <p>eCompareMo simplifies the whole process of finding the best insurance products in the Philippines. By partnering with the top insurance companies in the country, we provide a side-by-side comparison of all products available.</p>
                 <!-- carousel starts -->
                 <div class="carousel grid-carousel category-carousel m-t-3x">
                    <!-- items starts -->
                    <div class="carousel-items carousel-loaded" id="loan-intro-carousel" style="opacity: 1; display: block;">
                       <div class="outer">
                          <div class="inner" style="width: 4560px; left: 0px; display: block; transition: all 300ms ease 0s; transform: translate3d(0px, 0px, 0px);">
                             <div class="item" id="loan-intro-carousel-01" role="tabpanel" style="width: 380px;">
                                <h5 class="h3">Vehicle Insurance</h5>
                                <figure class="image"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-car-insurance.png') }} 1x, {{ asset('images/badge-220x190-car-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-car-insurance.png') }} 1x, {{ asset('images/badge-220x190-car-insurance@2x.png') }} 2x"></figure>
                                <a href="https://www.ecomparemo.com/wizard/vehicle-insurance" class="btn btn-default" title="">Get A Free Quote</a>
                                <span class="estimate"><i class="icon i-action-time i-1x"></i>takes about 12 min</span>
                             </div>
                             <div class="item" id="loan-intro-carousel-02" role="tabpanel" style="width: 380px;">
                                <h5 class="h3">CTPL Insurance</h5>
                                <figure class="image"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-ctpl-insurance@1x.jpg') }} 1x, {{ asset('images/badge-220x190-ctpl-insurance@2x.jpg') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-ctpl-insurance@1x.jpg') }} 1x, {{ asset('images/badge-220x190-ctpl-insurance@2x.jpg') }} 2x"></figure>
                                <a href="https://www.ecomparemo.com/ctpl-order-page" class="btn btn-default" title="">Get A Free Quote</a>
                                <span class="estimate"><i class="icon i-action-time i-1x"></i>takes about 12 min</span>
                             </div>
                             <div class="item" id="loan-intro-carousel-06" role="tabpanel" style="width: 380px;">
                                <h5 class="h3">Personal Accident Insurance</h5>
                                <figure class="image"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-accident-insurance.png') }} 1x, {{ asset('images/badge-220x190-accident-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-accident-insurance.png') }} 1x, {{ asset('images/badge-220x190-accident-insurance@2x.png') }} 2x"></figure>
                                <a data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-verticalid="9" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" class="btn btn-default" title="">Get A Free Quote</a>
                                <span class="estimate"><i class="icon i-action-time i-1x"></i>takes about 10 min</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    <!-- pager ends -->
                 </div>
                 <!-- carousel ends -->
              </div>
              <!-- intro ends -->
              <!-- partners starts -->
              <div class="home-panel home-partners partner-block">
                 <hr class="tall">
                 <h2 class="h1">Get quotes from</h2>
                 <hr class="seperator vertical">
                 <!-- list starts -->
                 <div class="partner-grid m-t-3x m-b-4x">
                    <ul class="list-grid">
                       <!-- will display only six logos -->
                       <!-- use upperBound as Limit to show all -->
                       <li><a href="https://www.ecomparemo.com/insurance/blue-cross-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-pacific-cross.png') }} 1x, {{ asset('images/logos/logo-insurance-pacific-cross.png') }} 2x" width="" height="134" alt="pacific cross" srcset="{{ asset('images/logos/logo-insurance-pacific-cross.png') }} 1x, {{ asset('images/logos/logo-insurance-pacific-cross.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/pioneer-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-pioneer.png') }} 1x, {{ asset('images/logos/logo-insurance-pioneer.png') }} 2x" width="" height="134" alt="pioneer" srcset="{{ asset('images/logos/logo-insurance-pioneer.png') }} 1x, {{ asset('images/logos/logo-insurance-pioneer.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/charter-ping-an-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-charter-ping-an.png') }} 1x, {{ asset('images/logos/logo-insurance-charter-ping-an.png') }} 2x" width="" height="134" alt="charterpingan" srcset="{{ asset('images/logos/logo-insurance-charter-ping-an.png') }} 1x, {{ asset('images/logos/logo-insurance-charter-ping-an.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/paramount-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-paramount-1.png') }} 1x, {{ asset('images/logos/logo-insurance-paramount-1.png') }} 2x" width="" height="134" alt="paramount" srcset="{{ asset('images/logos/logo-insurance-paramount-1.png') }} 1x, {{ asset('images/logos/logo-insurance-paramount-1.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/liberty-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-liberty-1.png') }} 1x, {{ asset('images/logos/logo-insurance-liberty-1.png') }} 2x" width="" height="134" alt="liberty" srcset="{{ asset('images/logos/logo-insurance-liberty-1.png') }} 1x, {{ asset('images/logos/logo-insurance-liberty-1.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/qbe-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-qbe.png') }} 1x, {{ asset('images/logos/logo-insurance-qbe.png') }} 2x" width="" height="134" alt="qbe" srcset="{{ asset('images/logos/logo-insurance-qbe.png') }} 1x, {{ asset('images/logos/logo-insurance-qbe.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/fortune-gen-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-fortune-general.png') }} 1x, {{ asset('images/logos/logo-insurance-fortune-general.png') }} 2x" width="" height="134" alt="fortune" srcset="{{ asset('images/logos/logo-insurance-fortune-general.png') }} 1x, {{ asset('images/logos/logo-insurance-fortune-general.png') }} 2x"></a></li>
                       <li><a href="https://www.ecomparemo.com/insurance/standard-insurance"><img src="{{ asset('images/img-loader.png') }}" class=" lazyloaded" data-srcset="{{ asset('images/logos/logo-insurance-standard-insurance.png') }} 1x, {{ asset('images/logos/logo-insurance-standard-insurance.png') }} 2x" width="" height="134" alt="standard" srcset="{{ asset('images/logos/logo-insurance-standard-insurance.png') }} 1x, {{ asset('images/logos/logo-insurance-standard-insurance.png') }} 2x"></a></li>
                    </ul>
                 </div>
                 <!-- list ends -->
              </div>
              <!-- partners ends -->
              <!-- products starts -->
              <div class="category-panel category-products category-product-details">
                 <hr class="tall">
                 <h2 class="h1">Wide range of Insurance products</h2>
                 <hr class="seperator">
                 <p class="f130 m-b-3x">Use our advanced comparison engine, or talk to our in-house insurance experts via phone or Live Chat and get VIP treatment and sound advice.</p>
                 <div class="row row-wide text-left">
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/vehicle-insurance" title="Car insurance"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-car-insurance.png') }} 1x, {{ asset('images/badge-220x190-car-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-car-insurance.png') }} 1x, {{ asset('images/badge-220x190-car-insurance@2x.png') }} 2x"></a></figure>
                       <h2>Car insurance</h2>
                       <p>Protect yourself whenever you sit behind the wheel with the best car insurance in the Philippines. Choose from a wide range of vehicle insurance products from the country’s major insurers. Use factors such as scope of coverage, monthly premium, annual premium, and other variables that are most appropriate for your beloved set of wheels.</p>
                       <a href="https://www.ecomparemo.com/vehicle-insurance" class="link" title="">Learn more</a>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/vehicle-insurance/ctpl" title="Car insurance"><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-ctpl-insurance@1x.jpg') }} 1x, {{ asset('images/badge-220x190-ctpl-insurance@2x.jpg') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-ctpl-insurance@1x.jpg') }} 1x, {{ asset('images/badge-220x190-ctpl-insurance@2x.jpg') }} 2x"></a></figure>
                       <h2>CTPL insurance</h2>
                       <p>Get rid of fixers and save money by getting a legitimate compulsory third party liability (CTPL) insurance online. Get it before you register your car with the Land Transportation Office (LTO). Buy online now and get your policy in as fast as 60 minutes.</p>
                       <a href="https://www.ecomparemo.com/vehicle-insurance" class="link" title="">Learn more</a>
                    </div>
                 </div>
                 <div class="row row-wide text-left">
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/property-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-property-insurance.png') }} 1x, {{ asset('images/badge-220x190-property-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-property-insurance.png') }} 1x, {{ asset('images/badge-220x190-property-insurance@2x.png') }} 2x"></a></figure>
                       <h2>Property Insurance</h2>
                       <p>Protect your home or building from fire, lightning, flood, and unwanted circumstances. Choose from different types of property insurance available in the market and keep your fortress safe from harm.</p>
                       <a href="https://www.ecomparemo.com/insurance" class="link" title="">Learn more</a>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/health-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-health-insurance.png') }} 1x, {{ asset('images/badge-220x190-health-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-health-insurance.png') }} 1x, {{ asset('images/badge-220x190-health-insurance@2x.png') }} 2x"></a></figure>
                       <h2>Health Insurance</h2>
                       <p>Health is wealth. Choose and compare a wide range of health and medical insurance products available in the Philippines and get the most out of life.</p>
                       <a href="https://www.ecomparemo.com/health-insurance" class="link" title="">Learn more</a>
                    </div>
                 </div>
                 <div class="row row-wide text-left">
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/travel-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-travel-insurance.png') }} 1x, {{ asset('images/badge-220x190-travel-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-travel-insurance.png') }} 1x, {{ asset('images/badge-220x190-travel-insurance@2x.png') }} 2x"></a></figure>
                       <h2>Travel Insurance</h2>
                       <p>Traveling in a foreign land entails a lot of risks. There’s sickness, accident, loss of items, and other perils to your life. With eCompareMo, you can choose between single-trip and multiple trip travel insurance, and have peace of mind whenever you travel abroad.</p>
                       <a href="https://www.ecomparemo.com/travel-insurance" class="link" title="">Learn more</a>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                       <figure class="image"><a href="https://www.ecomparemo.com/personal-accident-insurance" title=""><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x190-accident-insurance.png') }} 1x, {{ asset('images/badge-220x190-accident-insurance@2x.png') }} 2x" class=" lazyloaded" width="220" height="190" alt="" srcset="{{ asset('images/badge-220x190-accident-insurance.png') }} 1x, {{ asset('images/badge-220x190-accident-insurance@2x.png') }} 2x"></a></figure>
                       <h2>Personal Accident Insurance</h2>
                       <p>Put your mind to ease as you brave through life’s greatest challenges. Select from a wide range of coverage available such as accidental death, permanent disability, and more.</p>
                       <a href="https://www.ecomparemo.com/personal-accident-insurance" class="link" title="">Learn more</a>
                    </div>
                 </div>
              </div>
              <!-- products ends -->
              <hr class="tall">
              <table class="table styled scope table-insurance">
                 <thead>
                    <tr>
                       <th colspan="2" scope="colgroup" class="text-lg-center" width="50%"><b>SAMPLE COMPUTATION - SUV</b></th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td width="50%">Insurance Provider</td>
                       <td class="text-lg-center">PROVIDER B</td>
                    </tr>
                    <tr>
                       <td width="50%">Vehicle Type</td>
                       <td class="text-lg-center">SUV</td>
                    </tr>
                 </tbody>
                 <thead>
                    <tr>
                       <th colspan="2" scope="colgroup" class="text-lg-center"></th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td width="50%">Estimated Fair Market Value</td>
                       <td class="text-lg-center">₱1,234,000</td>
                    </tr>
                    <tr>
                       <td width="50%">Bodily Injury</td>
                       <td class="text-lg-center">₱200,000</td>
                    </tr>
                    <tr>
                       <td width="50%">Property Damage</td>
                       <td class="text-lg-center">₱200,000</td>
                    </tr>
                    <tr>
                       <td width="50%">Auto Personal Accident</td>
                       <td class="text-lg-center">₱250,000</td>
                    </tr>
                    <tr>
                       <td width="50%">Estimated Premium</td>
                       <td class="text-lg-center"><b>₱21,350</b></td>
                    </tr>
                    <tr>
                       <td width="50%"><b>Total Estimated Savings</b></td>
                       <td class="text-lg-center text-negative" "=""><b>₱9,800</b></td>
                    </tr>
                 </tbody>
              </table>
              <!-- outro starts -->
              <div class="category-panel category-outro">
                 <hr class="tall">
                 <h2 class="h1">Helping millions of Filipinos save time and money</h2>
                 <hr class="seperator">
                 <p class="f130 m-b-1x">eCompareMo helps Filipinos achieve financial freedom by making various products and services accessible to everyone.</p>
                 <p>Aside from financial comparison services, we also provide insightful, informative, and inspirational <a href="https://www.ecomparemo.com/insurance" title="">articles</a> as well as social media campaigns that aim to reach out to people looking for financial freedom in their lives.</p>
                 <figure class="image image-badge m-b-1x"><a href="https://www.ecomparemo.com/insurance" title=""><img src="{{ asset('images/img-loader.png') }}" data-srcset="{{ asset('images/badge-220x220-support-lady.png') }} 1x, {{ asset('images/badge-220x220-support-lady@2x.png') }} 2x" class=" lazyloaded" width="220" height="220" alt="" srcset="{{ asset('images/badge-220x220-support-lady.png') }} 1x, {{ asset('images/badge-220x220-support-lady@2x.png') }} 2x"></a></figure>
                 <p>With eCompareMo, enjoying the many pleasures life has to offer has never been more possible. </p>
              </div>
              <!-- outro ends -->
           </div>
        </article>
        <!-- promo starts -->
        <aside class="promo promo-footer insurance-theme">
           <div class="container">
              <!-- widget starts -->
              <div class="promo-widget">
                 <strong class="promo-title">Need help?</strong>
                 <span class="promo-text">Contact our in-house experts for more details about our insurance services.</span>
                 <strong class="promo-contact"><i class="icon i-display-phone-right i-4x"></i>(02) 779 6912</strong>
                 <div class="divider"><span>OR</span></div>
                 <a class="btn btn-default btn-block btn-lg" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-verticalid="0" data-affiliate="B50683B0-A2AB-4B3B-948B-38E4A92A8CED" data-referrer="https://www.ecomparemo.com/insurance"><span>Contact Me</span></a>
                 <span class="promo-label">Monday - Friday 9:00 am - 6:00 pm</span>
              </div>
              <!-- widget ends -->
           </div>
        </aside>
        <!-- promo ends -->
     </main>
@endsection
