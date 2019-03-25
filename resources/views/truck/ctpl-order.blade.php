@php
    use Carbon\Carbon;
@endphp
@extends('app')
@section('title','CTPL Insurance | Order Page')
@section('styles')
    <link href="{{ asset('css/css.css') }}" rel="stylesheet" type="text/css">
@endsection
@section('content')
    @php
        $fee = App\Fee
                    ::where('Name','=','CTPL')
                    ->where('Type','=',$type)->first();
    @endphp
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
                <span property="name">Order</span>
                <meta property="position" content="3">
            </li>
        </ol>
    </nav>
    <article class="article">
        <div class="content">
            <form id="step-wizard-form" action="/ctpl-insurance/store" method="post" novalidate="novalidate">
                <input type="hidden" name="Type" value="{{ $type }}">
                {{ csrf_field() }}
                <fieldset>
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 d-sm-none d-lg-block">
                                <div class="wizard-widget wizard-card card">
                                    <div class="header">Order summary</div>
                                    <div class="content">
                                        <ul class="card-details">
                                            <li class="item">
                                                <span>{{ $fee->description }}</span>
                                                <em>CTPL Insurance</em>
                                            </li>
                                            <li class="summary">
                                                <span>Total Price</span>
                                                <strong">PHP {{ number_format($fee->amount,2,'.',',') }}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12 col-lg-12">
                                <h3>Vehicle details</h3>
                                <p>Please describe your vehicle model and registration details.</p>
                                <div class="form-section row">
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group  ">
                                            <label for="Manufacturer">Manufacturer  </label>
                                            <select class="select form-control plain" name="Manufacturer" id="Manufacturer" required>
                                                <option value="">Please Select</option>
                                                @foreach(App\Manufacturer::all() as $manufacturer)
                                                    <option value="{{ $manufacturer->id }}">{{ $manufacturer->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="Model">Model </label>
                                            <input class="text form-control plain" name="Model" id="Model" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Variant">Series </label>
                                            <input class="text form-control plain" name="Variant" id="Variant" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Year">Year </label>
                                            <input class="text form-control plain" name="Year" id="Year" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Color">Color </label>
                                            <input class="text form-control plain" name="Color" id="Color" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="col-xs-12">
                                        <h3>Register details</h3>
                                        <p></p>
                                    </div>
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="PlateNo">Plate Number  </label>
                                            <input class="text form-control plain" name="PlateNo" id="PlateNo" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="Engine">Engine Number </label>
                                            <input class="text form-control plain" name="Engine" id="Engine" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="Chassis">Chassis Number </label>
                                            <input class="text form-control plain" name="Chassis" id="Chassis" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="MVFileNumber">MV File Number </label>
                                            <input class="text form-control plain" name="MVFileNumber" id="MVFileNumber" required type="text" style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12">
                                <h3>Contact details</h3>
                                <p>Please fill in your contact details.</p>
                                <div class="form-section row">
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="FirstName">First Name </label>
                                            <input class="text form-control plain" name="FirstName" id="FirstName" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="MiddleName">Middle Name </label>
                                            <input class="text form-control plain" name="MiddleName" id="MiddleName" type="text" style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="LastName">Last Name </label>
                                            <input class="text form-control plain" name="LastName" id="LastName" type="text" required style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Email">Email </label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="icon i-display-mail"></i></span>
                                                <input type="email" class="text form-control plain" name="Email" id="Email" required style="text-transform:uppercase">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Mobile1Number">Phone number </label>
                                            <div class="input-group">
                                                <span class="input-group-addon">+63</span>
                                                <input class="text form-control plain" name="Mobile1Number" id="Mobile1Number" required type="tel" style="text-transform:uppercase">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <h3>Delivery details</h3>
                                        <p>Please fill in your address to where you want your insurance to be delivered.</p>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-xs-12">
                                        <div class="form-group ">
                                            <label for="StreetLine1">Address and street name </label>
                                            <input class="text form-control plain" name="StreetLine1" id="StreetLine1" required type="text" style="text-transform:uppercase">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="ProvinceId">Province </label>
                                            <select class="select form-control plain" name="ProvinceId" id="ProvinceId" required type="text" style="text-transform:uppercase">
                                                <option value="-1">- Please Select -</option>
                                                @foreach(App\Province::all()->sortBy('sortval') as $entry)
                                                    <option value="{{ $entry->id }}">{{ $entry->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="CityId">City </label>
                                            <select class="select form-control plain" name="CityId" id="CityId" type="text" required style="text-transform:uppercase">
                                                <option value="-1">- Please Select -</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="BarangayId">Barangay </label>
                                            <select class="select form-control plain" name="BarangayId" id="BarangayId" type="text" style="text-transform:uppercase">
                                                <option value="-1">- Please Select -</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="field col-xs-4">
                                        <div class="form-group ">
                                            <label for="Village">Village </label>
                                            <input class="text form-control plain" name="Village" id="Village" type="text" style="text-transform:uppercase">
                                        </div>
                                    </div>
                                    <div class="field col-xs-4">
                                        <div class="form-group ">
                                            <label for="ZipCode">Zip Code </label>
                                            <input class="text form-control plain" name="ZipCode" id="ZipCode" type="text"style="text-transform:uppercase" readonly>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group m-b-2x">
                                    <label>Consent for storing personal data:</label>
                                    <div class="form-terms">
                                        <ul>
                                            I allow eCompaMore to collect, store and process my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website. Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others. The use and processing of my information shall be in accordance with applicable laws and eCompaMore’s <a href="https://www.eCompaMore.com/terms-conditions">Terms and Conditions</a> and <a href="https://www.eCompaMore.com/privacy-policy">Privacy Policy</a>, which I confirm to have read and understood.
                                        </ul>
                                    </div>
                                    <div class="checkbox checkbox-stack plain field">
                                        <label><input type="checkbox" id="hasConsent" name="hasConsent" value="true" required> I agree to the terms above.</label>
                                    </div>
                                </div>
                                <!-- /ko -->
                                <div class="row">
                                    <div class="col-lg-12">

                                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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


        $(document).ready(function(){
            $('#ProvinceId').on('change', function(){
                var provinceid = $(this).val();

                var $city = $("#CityId");
                $city.empty();
                $city.append($('<option>',{
                    value: -1,
                    text: '- Please Select -'
                }));

                var $brgy = $("#BarangayId");
                $brgy.empty();
                $brgy.append($('<option>',{
                    value: -1,
                    text: '- Please Select -'
                }));

                $.ajax({
                    method: "get",
                    url: "/query/cities",
                    data: { pid: provinceid }
                }).done(function( msg ) {
                    $.each(msg.data, function(i, item){
                        $city.append($('<option>',{
                            value: item.id,
                            text: item.name
                        }));
                    });
                });
            });

            $('#CityId').on('change', function(){
                var cityid = $(this).val();BarangayId

                var $brgy = $("#BarangayId");
                $brgy.empty();
                $brgy.append($('<option>',{
                    value: -1,
                    text: '- Please Select -'
                }));

                $.ajax({
                    method: "get",
                    url: "/query/brgy",
                    data: { cid: cityid }
                }).done(function( msg ) {
                    $.each(msg.data, function(i, item){
                        $('#ZipCode').val(item.zipcode);
                        $brgy.append($('<option>',{
                            value: item.id,
                            text: item.name
                        }));
                    });
                });
            });
        });
    </script>
@endsection
