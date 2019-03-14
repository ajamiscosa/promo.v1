@extends('app')
@section('content')
<aside class="promo promo-campaign promo-category with-background promo-60x40 insurance-theme white-content text-center" style="background:url(https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/mot/MOT-min.jpg)center repeat-x;background-size:cover">
    <div class="container">
        <div class="promo-content">
            <h2 class="m-t-0 m-b-0 promo-title">Hassle-free <strong> Car Insurance</strong></h2>
            <span class="f110 block">Compare multiple quotes in 15 seconds</span>
            <hr class="m-t-1x m-b-1x">
            <p class="f110 nowrap m-b-05x" style="line-height:1.3">Save up to <strong class="block f260 font-base">P10,000*</strong></p>
            <form class="promo-widget-form" action="/vehicle-insurance/inquiry" method="post" role="form">
                {{ csrf_field() }}
                <fieldset>
                    <div class="form-group">
                        <label class="white-content" for="card-feature">Vehicle Brand</label>
                        <select class="select form-control vehicle-type" name="VehicleManufacturerId" id="VehicleManufacturerId" data-ga-label="Vehicle Brand ID">
                            <option value="-1">- Choose brand of vehicle</option>
                            @foreach(App\Manufacturer::orderBy('name')->get() as $brand)
                                <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="columns columns-stacked">
                        <div class="column column-1"><button type="submit" class="btn btn-default btn-block" data-label="Start comparing" id="CompareMOTPrimary">Compare now</button></div>
                        <div class="column column-2"><a class="btn btn-default btn-block" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-vertical="MOT" data-verticalid="4" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" modal-title="&lt;strong&gt;Request for a free quote&lt;/strong&gt;" modal-label-content="Let us know where to reach you and we&#39;ll send the &lt;strong&gt;cheapest price&lt;/strong&gt; we can find within 24 hours." modal-submit="&lt;strong&gt;Submit&lt;/strong&gt;" modal-consent="required-agreement-insurance" data-referrer="/vehicle-insurance">Request quote</a></div>
                    </div>
                </fieldset>
                <span class="o70 pull-right f80" style="color:#fff">* on higher-end vehicle models</span>
            </form>
        </div>
        <div class="promo-graphic"></div>
    </div>
</aside>
<main class="main" role="main">
    <article class="article" data-track="LandingPage" data-product="MOT">
        <div class="content">
            <div class="home-panel home-banner">
                <div class="carousel carousel-banner m-b-2x">
                    <div class="carousel-items carousel-loaded" data-items="1" id="partner-banner" data-desktop="[1200,1]" data-netbook="[1024,1]" data-tablet="[768,1]" data-autoplay="7000" data-rewind="true" style="opacity: 1; display: block;">
                        <div class="outer">
                            <div class="inner" style="width: 2280px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);">
                                <div class="item" role="tabpanel" id="partner-banner-01" style="width: 1140px;"><a id="bannerMOTConcierge" href="/campaign/vehicle-insurance-concierge" title="Concierge" target="_blank" data-ga-product="MOT" data-ga-action="ads" data-action="ga" data-ga-label="MOTBannerConcierge"> <img class=" lazyloaded" src="assets/img-loader.png" data-srcset="https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/car-insurance-concierge-landing-page-banner@1x.jpg 1x,
                                    https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/car-insurance-concierge-landing-page-banner@2x.jpg 2x" width="1140" height="330" alt="Concierge" srcset="https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/car-insurance-concierge-landing-page-banner@1x.jpg 1x,
                                    https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/car-insurance-concierge-landing-page-banner@2x.jpg 2x"> </a></div>
                            </div>
                        </div>
                    </div>
                    <ol class="carousel-pager" role="tablist">
                        <li data-action="carousel" data-target="#partner-banner" aria-controls="partner-banner-01" role="tab" class="active"><span>2</span></li>
                    </ol>
                </div>
            </div>
            <h1 align="center">Find the Most Affordable Car Insurance Policy in the Philippines</h1>
            <p class="lead">eCompareMo has put together a list of top car insurance companies to help you save time and money. Your satisfaction is our utmost priority—and as the country’s leading fintech startup for insurance comparison, we work hard to make sure that you get the best protection for your vehicle at a great price.</p>
            <table class="table styled scope table-insurance">
                <thead class="text-plain">
                    <tr>
                        <th class="col-lg-4 bg-insurance text-center" scope="col">Insurance Provider</th>
                        <th class="col-lg-5 bg-insurance text-center" scope="col" align="center">Features</th>
                        <th class="col-lg-2 bg-insurance text-center" scope="col" align="center"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/insurance/charter-ping-an-insurance/car-insurance/charter-ping-an-car-insurance">Charter Ping An Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Accepts up to 10-year old cars for new accounts</li>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>55 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="charter-ping-an-car-insurance" data-verticalid="4" data-company="charterpingan" data-product="Charter Ping An Car Insurance" data-referrer="/insurance/charter-ping-an-insurance/car-insurance/charter-ping-an-car-insurance" modal-title="Please input your information" modal-submit="I&#39;m Interested">I'm Interested</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/afp-general-insurance/car-insurance/afp-gen-car-insurance">AFP Gen Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free 24-hour roadside assist program</li>
                                <li>Accepts up to 10-year old cars</li>
                                <li>Free Auto Passenger Accident Insurance of PHP250,000.00</li>
                                <li>96 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="afp-gen-car-insurance" data-verticalid="4" data-company="afpgen" data-product="AFP Gen Car Insurance" data-referrer="/insurance/pioneer-insurance/car-insurance/pioneer-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/standard-insurance/car-insurance/standard-car-insurance">Standard Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free 24/7 Roadside Assistance nationwide</li>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>Accepts up to 12-year old cars</li>
                                <li>200 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="standard-car-insurance" data-verticalid="4" data-company="standard" data-product="Standard Car Insurance" data-referrer="/insurance/standard-insurance/car-insurance/standard-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/qbe-insurance/car-insurance/qbe-car-insurance">QBE Seaboard Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>Free Roadside Assistance Coverage for qualified vehicles</li>
                                <li>Accepts up to 10-year old cars</li>
                                <li>200 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="qbe-car-insurance" data-verticalid="4" data-company="qbe" data-product="QBE Seaboard Car Insurance" data-referrer="/insurance/qbe-insurance/car-insurance/qbe-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/fpg-insurance/car-insurance/fpg-car-insurance">FPG Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>Free 24/7 Roadside Assistance</li>
                                <li>Accepts up to 10-year old cars</li>
                                <li>242 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="fpg-car-insurance" data-verticalid="4" data-company="fpg" data-product="FPG Car Insurance" data-referrer="/insurance/fpg-insurance/car-insurance/fpg-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/asianlife-and-general-assurance/car-insurance/asianlife-car-insurance">AsianLife Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free Towing Assistance up to PHP5,000.00</li>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>147 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="asianlife-car-insurance" data-verticalid="4" data-company="asianlife" data-product="AsianLife Car Insurance" data-referrer="/insurance/asianlife-and-general-assurance/car-insurance/asianlife-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/the-mercantile-insurance/car-insurance/mercantile-car-insurance">Mercantile Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Accepts up to 10-year old cars</li>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>11 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="mercantile-car-insurance" data-verticalid="4" data-company="mercantile" data-product="Mercantile Car Insurance" data-referrer="/insurance/the-mercantile-insurance/car-insurance/mercantile-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                    <tr>
                        <td><a href="/insurance/oriental-assurance-corporation/car-insurance/oriental-car-insurance">Oriental Car Insurance</a></td>
                        <td>
                            <ul>
                                <li>Free Auto Passenger Accident Insurance of PHP50,000.00 each for 5 persons</li>
                                <li>Free Roadside Assistance Coverage for qualified vehicles</li>
                                <li>Accepts up to 10-year old cars</li>
                                <li>74 plus accredited repair shops</li>
                            </ul>
                        </td>
                        <td><a class="btn btn-default btn-block btn-sm" title="Request for free quote!" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-ganame="MOT" data-ga-label-submit="landingPage_form_submit" data-ga-label="formcapture_mot_generic" data-ga-label-name="oriental-car-insurance" data-verticalid="4" data-company="oriental" data-product="Oriental Car Insurance" data-referrer="/insurance/oriental-assurance-corporation/car-insurance/oriental-car-insurance" modal-title="Get quote now" modal-submit="Request quote">Request quote</a></td>
                    </tr>
                </tbody>
            </table>
            <h2>What is a Comprehensive Car Insurance</h2>
            <p>A comprehensive car insurance is a type of insurance that provide financial protection against physical damage or bodily injury resulting from vehicle collision, theft, fire, or any damage that may arise from incidents in a vehicle.</p>
            <p>With the growing rate of car accidents in the Philippines, it’s financially wise for every motorist to have a car insurance to protect them against expenses that may arise in the event of an accident.</p>
            <p>The mandatory <a href="/vehicle-insurance/car-insurance-guide-to-ctpl">Compulsory Third Party Liability (CTPL) insurance</a> that comes with your LTO registration is not enough. Every Filipino car owner needs a Comprehensive Motor Vehicle Insurance that shields their finances from the following:</p>
            <ul class="bulllet-list">
                <li>Own Damage/Theft</li>
                <li>Excess Bodily Injury or Voluntary Third-Party Liability (VTPL)</li>
                <li>Property Damage or Voluntary Third-Party Liability (VTPL)</li>
                <li>Auto Personal Accident (Auto PA)</li>
                <li>Acts of Nature</li>
            </ul>
            <h2>Car insurance coverage types</h2>
            <p>There’s a car insurance cover for every budget and need. Here are the main types of coverage you can avail.</p>
            <ul class="bullet-list">
                <li>Compulsory Third Party Liability (CTPL). The Land Transportation Office (LTO) mandates that all car owners get a compulsory third-party liability (CTPL) insurance upon vehicle registration. Third party refers to any person other than the driver or the passenger that the insured encounters in an accident.</li>
                <li>Comprehensive Car Insurance without Acts of Nature. A comprehensive car insurance without the Acts of Nature covers an accident caused by vehicular accident, such as collision and overturning, theft, and other malicious acts from a third party.</li>
                <li>Comprehensive Car Insurance with Acts of Nature. A comprehensive car insurance with Acts of Nature covers all types of accidents including the ones caused by a natural disaster, such as typhoons, earthquakes, wildfires, and floods.</li>
            </ul>
            <p>Other types of vehicle insurance are collision protection, liabilities, and uninsured and underinsured motorist coverage. Each one offers additional protection that caters to the special needs of car owners.</p>
            <p>Furthermore, many car insurance companies also give you an option to avail add-ons, such as:</p>
            <ul class="tick-list">
                <li>Loss of use<br> Where the insurance provider reimburses the transportation costs while your vehicle is being repaired in the motorshop</li>
                <li>Roadside and towing assistance<br> Some insurance firms offer this as a freebie</li>
                <li>Transportation allowance<br> Get your tranportation costs reimbursed while your car undergoes repair</li>
            </ul>
            <table class="table styled scope table-insurance">
                <thead>
                    <tr>
                        <th class="col-lg-4 bg-insurance text-center" scope="col">Feature/Benefit</th>
                        <th class="col-lg-3 bg-insurance text-center" scope="col" align="center">CTPL</th>
                        <th class="col-lg-3 bg-insurance text-center" scope="col" align="center">Comprehensive Motor Insurance</th>
                        <th class="col-lg-4 bg-insurance text-center" scope="col" align="center">Comprehensive Motor Insurance with Acts of Nature cover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Own Damage</td>
                        <td align="center">None</td>
                        <td align="center">Based in fair market value of the vehicle</td>
                        <td align="center">Based in fair market value of the vehicle</td>
                    </tr>
                    <tr>
                        <td>Theft</td>
                        <td align="center">None</td>
                        <td align="center">Based in fair market value of the vehicle</td>
                        <td align="center">Based in fair market value of the vehicle</td>
                    </tr>
                    <tr>
                        <td>Third Party liability - Bodily Injury</td>
                        <td align="center">As mandated by law</td>
                        <td align="center">Up to PHP1,000,000.00</td>
                        <td align="center">Up to PHP1,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Third Party liability - Property damage</td>
                        <td align="center">None</td>
                        <td align="center">Up to PHP1,000,000.00</td>
                        <td align="center">Up to PHP1,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Passenger personal accident</td>
                        <td align="center">None</td>
                        <td align="center">Up to 18 seats coverage</td>
                        <td align="center">Up to 18 seats coverage</td>
                    </tr>
                    <tr>
                        <td>Acts of nature coverage</td>
                        <td align="center">None</td>
                        <td align="center">None</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Strikes, riots, Civil commotion</td>
                        <td align="center">None</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Towing service assistance</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Ambulance service</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Removal of the vehicle</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Stay and travel due to breakdown of vehicle</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Fuel delivery</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Battery boosting or Jumpstarting</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Locksmith service</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Tire replacement</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>Legal assistance</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                    <tr>
                        <td>24/7 customer assistance</td>
                        <td align="center">✖</td>
                        <td align="center">✔</td>
                        <td align="center">✔</td>
                    </tr>
                </tbody>
            </table>
            <h2>Advantages of having a car insurance</h2>
            <p>Smart motorists only want the best car insurance policy. Not only to reduce risks of uncertainty and mitigate the cost of repair, but also to avoid headaches when it comes to filing claims. Here are a few reasons why every car owner should get motor insurance:</p>
            <ul class="bullet-list">
                <li>Covers the accident repair costs.</li>
                <p>One of the advantages of having a vehicle insurance policy in your hands is to keep your wallet safe from unwanted automobile expenses. Your provider shall take care of the body repair and parts repair/replacement in case of damages; or replacement of your vehicle in case of theft, such as carnapping.</p>
                <li>Aids in paying the hospital bills.</li>
                <p>Apart from the maintenance and repair of the vehicle, your policy also covers hospital bills. This applies to both the insured party and the third party involved in the accident.</p>
                <li>Enables you to pay depending on your capacity.</li>
                <p>Not all Filipinos may be aware that an insurance is actually a means to save rather than an expense, and it’s because of the car insurance premium they have to pay upfront. Luckily, there are several car insurance providers in the Philippines that allow you to pay in installment. A car owner can choose from different payment terms according to their budget.</p>
            </ul>
            <p>A number of providers in the Philippines, in fact, offer more perks and free add-ons bundled with their policy. This makes car insurance comparison a wise choice for consumers.</p>
            <p>Overall, getting your car insured is recommended because of the following:</p>
            <ul class="bullet-list">
                <li>Efficient, as it decreases the risk of uncertainty</li>
                <li>Reduces the financial burden due to the losses</li>
                <li>Gives peace of mind--either your own or someone else’s</li>
                <li>Serves as a savings and investment instrument</li>
            </ul>
            <h2>Car insurance requirements and conditions</h2>
            <p>Once you’ve found an affordable car insurance policy, all you need to do is submit documents that are required by your provider. Take note that not all cars can be insured because the legal status of your vehicle must be clear first.</p>
            <p>Here are some of the most common requirements and conditions when applying for a motor insurance:</p>
            <ul class="tick-list">
                <li>A valid driver’s license and valid vehicle registration</li>
                <li>Certificate of Registration (COR) with the name of the registered owner. In case the COR is not available, the name of the buyer in the deed of sale should be presented.</li>
                <li>Address of the owner</li>
                <li>Brand (e.g., Honda, Mitsubishi, Toyota)</li>
                <li>Body type (e.g., Fortuner 4x2, Hi-Ace Super Grandia 2.5 DSL)</li>
                <li>Year Model (e.g., 2014, 2013)</li>
                <li>Transmission (manual or automatic)</li>
                <li>Color</li>
                <li>Plate number</li>
                <li>Usage of car (either for personal or commercial)</li>
                <li>The ownership status of the vehicle to be insured must be legally recognized by the law</li>
                <li>Assurance that the vehicle was not involved or used for unlawful acts</li>
            </ul>
            <p><i>NOTE: Some car insurance providers in the Philippines do not accept cars over 10 years of age (unless for renewal only), and over 8 years old for commercial vehicles (unless reconditioned or certified to be in good running condition)</i></p>
            <p><strong><a href="/vehicle-insurance/car-insurance-renewal-philippines">Check out more about Car Insurance Renewal here</a></strong></p>
            <h2>Vehicle insurance sample quotes</h2>
            <p>Insurance premiums, and the numbers can get overwhelming. To give you an idea of how your coverage is broken down, here’s a sample cost of a car insurance for Sedan type vehicle.</p>
            <table class="table styled scope table-vehicle insurance">
                <thead>
                    <tr>
                        <th colspan="2" scope="colgroup" class="text-lg-center" width="50%"><b>SAMPLE COMPUTATION - SEDAN</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Insurance Provider</td>
                        <td>PROVIDER A</td>
                    </tr>
                    <tr>
                        <td>Vehicle Type</td>
                        <td>SEDAN</td>
                    </tr>
                    <tr>
                        <td>Own damage/Theft cover of</td>
                        <td>PHP562,000</td>
                    </tr>
                    <tr>
                        <td>VTPL - Bodily Injury cover of</td>
                        <td>PHP200,0000</td>
                    </tr>
                    <tr>
                        <td>VTPL - Property Damage cover of</td>
                        <td>PHP200,000</td>
                    </tr>
                    <tr>
                        <td>Auto Personal Accident cover of</td>
                        <td>PHP250,000</td>
                    </tr>
                    <tr>
                        <td>Estimated cost of premium (inclusive of taxes)</td>
                        <td>PHP12,000</td>
                    </tr>
                    <tr>
                        <td><b>Total indicative savings</b></td>
                        <td><b>up to 17% savings</b></td>
                    </tr>
                </tbody>
            </table>
            <p><i>Disclaimer: Figures indicated above are for illustration purposes only. Actual prices may vary</i></p>
            <h2>Car insurance FAQs</h2>
            <h3>How do I buy car insurance?</h3>
            <p>Compare premiums, coverages, benefits, and add-ons from less than 20 insurance companies in the country. Complete the necessary documents and wait for your policy to be delivered in as fast as 24 hours.</p>
            <p><strong><a href="/vehicle-insurance/how-to-apply-for-a-car-insurance">Check out on How to Apply for A Car Insurance in the Philippines here</a></strong></p>
            <h3>How much will my motor insurance cost?</h3>
            <p>The premium rate of your insurance will depend on the coverage type you choose, year model, and body type of your vehicle. Additionally, your premium will increase if you add riders, such as the personal accident or property damage.</p>
            <h3>What points should I consider when buying a car insurance?</h3>
            <ul class="tick-list">
                <li>Premium rates</li>
                <li>Policy coverage</li>
                <li>Claiming process</li>
                <li>Company reviews</li>
            </ul>
            <h3>How much participation fee do I have to pay?</h3>
            <p>The participation fee depends on the vehicle’s type and market value. For example, for smaller cars, the insured is often charged 0.5% of the vehicle’s total market value. On the other hand, for larger vehicles, one percent of the car’s market value will be charged as participation fee.</p>
            <h3>What are the documents required for car insurance claims?</h3>
            <ul class="tick-list">
                <li>Duly accomplished Accident Report Form of your insurance provider</li>
                <li>Copy of Registration Certificate and latest OR</li>
                <li>Police Report or Driver’s Affidavit</li>
                <li>Copy of Insurance Policy</li>
                <li>Pictures of damaged unit (if own or property damage)</li>
                <li>Pictures of the injured person(s) (if third-party bodily injury)</li>
                <li>Repair estimation</li>
            </ul>
            <p><strong><a href="/vehicle-insurance/key-things-to-know-about-motor-insurance-claim">Check out other Key Things to know about Motor Insurance Claim here</a></strong></p>
            <h3>Can I make a claim without a police report?</h3>
            <p>Yes, provided that the accident is minor and neither of the party is injured.</p>
            <h3>Guides</h3>
            <p align="center"><a href="/vehicle-insurance/how-to-file-a-car-insurance-claim">How To File A Car Insurance Claim</a> | <a href="/vehicle-insurance/coverages-and-claims">Car Insurance Coverages and Claims</a> | <a href="/vehicle-insurance/coverages-and-claims/compulsory-third-party-liability">Compulsory Third Party Liability (CTPL) Coverage</a> | <a href="/vehicle-insurance/coverages-and-claims/acts-of-god-cover">"Acts of God" Car Insurance Coverage: Why Is It Important And How Much It Cost?</a> | <a href="/vehicle-insurance/what-to-do-in-case-of-a-car-accident">What To Do In Case of A Car Accident</a></p>
            <div class="widget testimonial-widget">
                <blockquote itemscope="itemscope" itemtype="http://schema.org/Product" class="testimonial">
                    <meta content="Vehicle Insurance" itemprop="name">
                    <div class="m-b-3x"><span class="f150">What people say about us </span><br><i itemprop="aggregateRating" itemscope="itemscope" itemtype="http://schema.org/AggregateRating">eCompareMo is rated <span itemprop="ratingValue">4.4</span>/ <span itemprop="bestRating">5</span> based on <span itemprop="reviewCount">165</span> reviews from the past 6 months</i></div>
                    <p itemprop="review" itemscope="itemscope" itemtype="http://schema.org/Review">
                        <meta content="Vehicle Insurance Philippines" itemprop="itemReviewed">
                        <span itemprop="author">Joseph</span> rated eCompareMo <span itemprop="reviewrating" itemscope="itemscope" itemtype="http://schema.org/Rating" title="4 / 5"><span itemprop="ratingValue">5</span></span> out of 5 on April 29, 2017<br> <span class="center-block p-b-1x m-t-1x"><i class="icon i-display-speech i-4x"></i></span> <span itemprop="reviewBody">Thumbs up to this company! Count on them if you're looking for the cheapest car insurance and participation fee. They even assisted me and gave me instructions when I filed for a claim. A prompt reply and update for the status of claims. </span>
                    </p>
                </blockquote>
            </div>
        </div>
    </article>
    <aside class="promo promo-footer insurance-theme">
        <div class="container">
            <div class="promo-widget">
                <form class="promo-widget-form" action="/wizard/vehicle-insurance" method="get" data-ga-product="MOT" data-ga-action="compare" data-product="MOT" data-action="promo-widget-form" role="form" novalidate="novalidate">
                    <fieldset>
                        <strong class="promo-title">Best deal on your car insurance</strong> <span class="promo-text">Compare quotes from leading providers</span>
                        <div class="form-group">
                            <label class="sr-only" for="card-feature">Vehicle Brand</label>
                            <select class="select form-control vehicle-type" name="VehicleManufacturerId" id="VehicleManufacturerId" data-ga-label="Vehicle brandID">
                                <option value="-1">- Choose brand of vehicle</option>
                                <option value="1">AUDI</option>
                                <option value="41">BAIC</option>
                                <option value="2">BMW</option>
                                <option value="51">BYD</option>
                                <option value="3">CHANA</option>
                                <option value="4">CHERY</option>
                                <option value="5">CHEVROLET</option>
                                <option value="6">CHRYSLER</option>
                                <option value="7">DODGE</option>
                                <option value="42">DONGFENG</option>
                                <option value="52">FAW</option>
                                <option value="8">FORD</option>
                                <option value="10">FOTON</option>
                                <option value="43">GEELY</option>
                                <option value="11">GREAT WALL</option>
                                <option value="12">HAIMA</option>
                                <option value="13">HONDA</option>
                                <option value="14">HYUNDAI</option>
                                <option value="15">ISUZU</option>
                                <option value="44">JAC</option>
                                <option value="16">JAGUAR</option>
                                <option value="17">JEEP</option>
                                <option value="45">JINBEI</option>
                                <option value="46">JMC</option>
                                <option value="47">JOYLONG</option>
                                <option value="18">KIA</option>
                                <option value="53">KING LONG</option>
                                <option value="19">LAND ROVER</option>
                                <option value="20">LEXUS</option>
                                <option value="54">LIFAN</option>
                                <option value="40">LOTUS</option>
                                <option value="48">MAHINDRA</option>
                                <option value="21">MAZDA</option>
                                <option value="22">MERCEDES BENZ</option>
                                <option value="49">MG</option>
                                <option value="23">MINI</option>
                                <option value="25">MITSUBISHI</option>
                                <option value="55">MORGAN</option>
                                <option value="27">NISSAN</option>
                                <option value="28">PEUGEOT</option>
                                <option value="29">PORSCHE</option>
                                <option value="56">RAM</option>
                                <option value="30">SSANGYONG</option>
                                <option value="31">SUBARU</option>
                                <option value="32">SUZUKI</option>
                                <option value="50">TATA</option>
                                <option value="33">TOYOTA</option>
                                <option value="34">VOLKSWAGEN</option>
                                <option value="35">VOLVO</option>
                            </select>
                        </div>
                        <div class="widget cta-widget text-center p-b-2x"><button type="submit" class="btn btn-default btn-wide" data-label="Start comparing" id="CompareMOTPrimary">Start comparing</button> <span>-OR-</span> <a class="btn btn-default btn-wide" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-vertical="MOT" data-verticalid="4" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" modal-title="&lt;strong&gt;Get the best car insurance deal&lt;/strong&gt;" modal-label-content="Let us know where to reach you and we&#39;ll send the &lt;strong&gt;cheapest price&lt;/strong&gt; we can find within 24 hours" modal-submit="&lt;strong&gt;Submit&lt;/strong&gt;" modal-consent="required-agreement-insurance" data-referrer="/vehicle-insurance">Get an instant quote</a></div>
                    </fieldset>
                </form>
            </div>
        </div>
    </aside>
</main>
@endsection
