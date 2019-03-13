@php
use Carbon\Carbon;
@endphp
@extends('app')
@section('title','Vehicle Insurance | Inquiry')
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
         <a href="/vehicle-insurance" property="item" typeof="WebPage" title="">
            <span property="name">Vehicle Insurance</span>
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
         <h1 class="f180 p-t-1x m-b-2x">Find the <strong>best car insurance</strong>—fast</h1>
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
      <form action="/vehicle-insurance/inquiry/store" method="POST">
         {{ csrf_field() }}
         <div class="wizard-panel step-wizard-panel wizard-plain">
            <div class="wizard-section clearfix">
               <div class="col-sm-12 col-md-5 col-lg-6">
                  <h3>When was your <b class='vehicle-name'>{{ $data->name }}</b>  manufactured?</h3>
                  <p>Please indicate the year your car was made.</p>
               </div>
               <div class="col-sm-12 col-md-7 col-lg-6">
                  <div class="option-amend extra-years active">
                     <select class="select form-control" id="YearManufactured" name="YearManufactured" required>
                        <option value="-1">- Please Select -</option>
                        @for ($i = Carbon::today()->year-1; $i >= 2007; $i--)
                           <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                     </select>
                     <label for="ManufacturingYear_Other" class="error">Please select manufacturing year</label>
                  </div>
               </div>
               <!-- /ko -->
            </div>
         </div>
         <div class="wizard-panel step-wizard-panel wizard-plain">
            <div class="wizard-section clearfix">
               <div class="col-sm-12 col-md-5 col-lg-6">
                  <h3>What model family is your <b class='vehicle-name'>{{ $data->name }}</b>  car?</h3>
                  <p>Please choose your vehicle's model family.</p>
               </div>
               <div class="col-sm-12 col-md-7 col-lg-6">
                  <div class="option-amend extra-years active">
                     <select class="select form-control" id="Model" name="Model" required>
                        <option value="-1">- Please Select -</option>
                        @foreach (App\Make::where('Brand','=',$data->id)->get()  as $item)
                           <option value="{{ $item->id }}">{{ $item->name }}</option>
                        @endforeach

                     </select>
                     <label for="ManufacturingYear_Other" class="error">Please choose vehicle model family</label>
                  </div>
               </div>
               <!-- /ko -->
            </div>
         </div>
         <div class="wizard-panel step-wizard-panel wizard-plain">
            <div class="wizard-section clearfix">
               <div class="col-sm-12 col-md-5 col-lg-6">
                  <h3>What series is your <b class='vehicle-name'>{{ $data->name }}</b>  car?</h3>
                  <p>Please choose your vehicle's variant.</p>
               </div>
               <div class="col-sm-12 col-md-7 col-lg-6">
                  <div class="option-amend extra-years active">
                     <select class="select form-control" id="Variant" name="Variant" required>
                        <option value="-1">- Please Select -</option>

                     </select>
                     <label for="ManufacturingYear_Other" class="error">Please indicate vehicle variant</label>
                  </div>
               </div>
               <!-- /ko -->
            </div>
            <hr/>
            <div class="wizard-section clearfix">
               <div class="col-sm-12 col-md-5 col-lg-6">
                  <h3>Thank you! We are now finding the best car insurance for you.</h3>
                  <p>We’ll send you a list of the top quotes for your reference.</p>
               </div>
               <div class="col-sm-12 col-md-7 col-lg-6">
                  <ul class="wizard-grid wizard-grid-01">
                     <li>
                        <!-- ko if: true -->
                        <div class="form-group ">
                           <label for="Gender">Gender</label>
                           <select class="select form-control" name="Gender" id="Gender" type="text"  required>
                              <option value="">Please Select</option>
                              <option value="true">Male</option>
                              <option value="false">Female</option>
                           </select>
                        </div>
                        <!-- /ko -->
                     </li>
                     <li>
                        <div class="columns">
                           <div class="column column-1">
                              <!-- ko if: true -->
                              <div class="form-group ">
                                 <label for="FirstName">First Name</label>
                                 <input class="text form-control" name="FirstName" autocomplete="" placeholder="" id="FirstName" type="text" required>
                              </div>
                              <!-- /ko -->
                           </div>
                           <div class="column column-2">
                              <!-- ko if: true -->
                              <div class="form-group ">
                                 <label for="LastName">Last Name</label>
                                 <input class="text form-control" name="LastName" autocomplete="" placeholder="" id="LastName" type="text" required>
                              </div>
                              <!-- /ko -->
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="columns">
                           <div class="column column-1">
                              <!-- ko if: true -->
                              <div class="form-group ">
                                 <label for="PhoneNumber">Phone Number</label>
                                 <input class="text form-control" name="PhoneNumber" autocomplete="" placeholder="" id="PhoneNumber" type="text">
                              </div>
                              <!-- /ko -->
                           </div>
                           <div class="column column-2">
                              <!-- ko if: true -->
                              <div class="form-group ">
                                 <label for="MobileNumber">Mobile Number</label>
                                 <input class="text form-control" name="MobileNumber" autocomplete="" placeholder="" id="MobileNumber">
                              </div>
                              <!-- /ko -->
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="columns">
                           <div class="column column-1">
                              <!-- ko if: true -->
                              <div class="form-group ">
                                 <label for="Email">Email</label>
                                 <input class="text form-control" name="Email" autocomplete="" placeholder="" id="Email" type="email" required>
                              </div>
                              <!-- /ko -->
                           </div>
                           <div class="column column-2">
                              <div class="form-group">
                                 <label for="schedule-time">Preferred call time:</label>
                                 <select class="select required form-control" id="schedule-time" name="Schedule" tabindex="8" data-validate="required" data-remarks="TimeAvailable">
                                    @foreach (App\CallTime::all() as $callTime)
                                       <option value="{{ $callTime->id }}">{{ $callTime->description }}</option>
                                    @endforeach
                                 </select>
                              </div>
                           </div>
                        </div>
                     </li>

                  </ul>
                  <div class="checkbox">
                     <label>
                        <input type="checkbox" id="Agree" name="Agree" class="cmr-agreement" value="true" required>
                        I allow eCompaMore to collect, store and process my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website. Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others. The use and processing of my information shall be in accordance with applicable laws and eCompareMo’s <a href="https://www.eCompaMore.com/terms-conditions">Terms and Conditions</a> and <a href="https://www.eCompaMore.com/privacy-policy">Privacy Policy</a>, which I confirm to have read and understood.
                     </label>
                  </div>
                  <span class="wizard-help hide"><i class="icon i-action-info-circle-solid i-2x"></i></span>
                  <br/>
                  <button type="submit" class="btn btn-primary" id="btnSubmit">Submit</button>
               </div>

            </div>
         </div>
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


      $('#YearManufactured').on('change', function(){
         var selectedYear = $(this).val();
         var option = $('<option></option>').attr("value", "option value").text("Text");
         var $sel = $("#Model");
         $sel.empty();
         $sel.append($('<option>',{
            value: -1,
            text: '- Please Select -'
         }));
         $.ajax({
            method: "get",
            url: "/query/make",
            data: { year: selectedYear, brand: {{ $data->id }} }
         }).done(function( msg ) {
            $.each(msg.data, function(i, item){
               $sel.append($('<option>',{
                  value: item.id,
                  text: item.name
               }));
            });
         });
      });


      $('#Model').on('change', function(){
         var selectedYear = $('#YearManufactured').val();
         var selectedModel = $(this).val();

         var $VariantSelect = $("#Variant");
         $VariantSelect.empty();
         $VariantSelect.append($('<option>',{
            value: -1,
            text: '- Please Select -'
         }));
         $.ajax({
            method: "get",
            url: "/query/variant",
            data: { year: selectedYear, model: selectedModel }
         }).done(function( msg ) {
            $.each(msg.data, function(i, item){
               $VariantSelect.append($('<option>',{
                  value: item.id,
                  text: item.description
               }));
            });
         });
      });

   </script>
@endsection