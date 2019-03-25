<style>
    .i-product-truck-insurance {
        background-image: url({{ asset('images/truck.png')}});
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>
<header class="layout-header" role="banner">
    <div class="head container">
       <nav class="menu main-menu" role="navigation">
          <ul class="nav nav-pills">
             <li class="nav-item insurance-theme">
                <a href="/insurance" class="nav-link" id="HeaderToInsurance">Insurance</a>
                <div class="nav-box nav-box-double">
                   <div class="nav-content">
                      <strong>Insurance Products</strong> <span>Compare premiums and features. Get your policy fast</span>
                      <div class="nav-columns">
                         <div class="column">
                            <ul class="nav child-menu">
                               <li><a id="VehicleInsuranceSubMenu" href="/vehicle-insurance"><i class="icon i-product-vehicle-insurance i-2x"></i>Vehicle Insurance</a></li>
                               <li><a id="TruckInsuranceSubMenu" href="/truck-insurance"><i class="icon i-product-truck-insurance i-2x"></i>Truck Insurance</a></li>
                               <li><a id="CTPLInsuranceSubMenu" href="/ctpl-insurance"><i class="icon i-product-vehicle-insurance i-2x"></i>CTPL Insurance</a></li>
                               {{-- <li><a id="PropertyInsuranceSubMenu" href="/property-insurance"><i class="icon i-product-property-insurance i-2x"></i>Property Insurance</a></li>
                               <li><a id="HealthInsuranceSubMenu" href="/health-insurance"><i class="icon i-product-health-insurance i-2x"></i>Health Insurance</a></li>
                               <li><a id="PrepaidHealthInsuranceSubMenu" href="/health-insurance/prepaid-healthcard"><i class="icon i-product-health-insurance i-2x"></i>Prepaid Health Insurance</a></li>
                               <li><a id="TravelInsuranceSubMenu" href="/travel-insurance"><i class="icon i-product-travel-insurance i-2x"></i>Travel Insurance</a></li> --}}
                               <li><a id="PersonalAccidentInsuranceSubMenu" href="/personal-accident-insurance"><i class="icon i-product-personal-accident-insurance i-2x"></i>Personal Accident Insurance</a></li>
                            </ul>
                         </div>
                         {{-- <div class="column column-1">
                            <span>Quick references</span>
                            <ul class="nav-links">
                               <li><a href="/quiz-what-type-of-investor-are-you">What Type Of Investor Are You?</a></li>
                               <li><a href="/info/the-ultimate-guide-to-getting-car-insurance-in-the-philippines/">The Ultimate Guide To Getting Car Insurance In The Philippines</a></li>
                               <li><a href="/info/the-top-10-most-fuel-efficient-cars-available-in-the-philippines-today/">The Top 10 Most Fuel-efficient Cars Available In The Philippines Today</a></li>
                            </ul>
                         </div> --}}
                      </div>
                   </div>
                </div>
             </li>
             <li class="nav-item tvi-theme">
                <a href="/about-us" class="nav-link" id="HeaderToAboutUs">About Us</a>
                <div class="nav-box nav-box-double">
                   <div class="nav-content">
                      <strong>About us</strong> <span>Learn more about who we are and what we do </span>
                      <div class="nav-columns">
                         <div class="column column-1">
                            <ul class="nav child-menu">
                               <li><a id="AboutUs" href="/about-us"><i class="icon i-link-account i-2x"></i>About eCompaMore</a></li>
                               {{-- <li><a id="PressRelease" href="/about-us/eCompaMore-press-release"><i class="icon i-product-internet-broadband i-2x"></i>Press Releases</a></li>
                               <li><a id="Media" href="/about-us/media"><i class="icon i-product-cable-tv i-2x"></i>Media</a></li>
                               <li><a id="PressKit" href="/about-us/press-kit"><i class="icon i-menu-attachment i-2x"></i>Press Kit</a></li> --}}
                            </ul>
                         </div>
                         {{-- <div class="column column-1">
                            <span>Latest News</span>
                            <ul class="nav-links">
                               <li><a href="/about-us/eCompaMore-press-release">Experian Leads Over-Subscribed US$28m Series C Investment in C88</a></li>
                            </ul>
                         </div> --}}
                      </div>
                   </div>
                </div>
             </li>
          </ul>
       </nav>
       <div class="logo" id="HeaderLogo"><a href="/"><img src="{{ asset('images/logo.png')}}" width="214" height="48" alt="The Philippines&#39; No. 1 Financial E-Commerce Site" class="m-b-1x"></a> <span class="tagline">Providing Quality Insurance Services<br>to millions of Filipinos since 2014</span></div>
       <div class="amenity clearfix">
          <div class="amenity-contact"><span>Free Financial Consultation</span><strong><small>(02)</small> 779 6912</strong></div>
          <div class="amenity-action"><a class="anchor" id="HeaderCallScheduleModal" data-toggle="modal" data-target="#call-schedule" data-verticalid="0">Contact Me<i class="icon i-link-chat i-2x"></i></a></div>
          {{-- <div class="amenity-action"><a class="anchor" rel="nofollow" id="login-text" href="/Account/Login?returnUrl=/vehicle-insurance"><span>Login</span><i class="icon i-link-account i-2x"></i></a></div> --}}
       </div>
       <div class="drawer-button" data-toggle="drawer" data-target="layout-drawer"><i class="icon i-action-hamburger i-3x"><span>Show menu</span></i></div>
    </div>
 </header>
