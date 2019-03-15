@php
    use Carbon\Carbon;
@endphp
@extends('app')
@section('title','CTPL Insurance | Order Page')
@section('styles')
    <link href="{{ asset('css/css.css') }}" rel="stylesheet" type="text/css">
@endsection
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
                <span property="name">Order</span>
                <meta property="position" content="3">
            </li>
        </ol>
    </nav>
    <article class="article">
        <div class="content">
            <form id="step-wizard-form" action="10b-canvas-marketplace-wizard-(login).html" method="post" novalidate="novalidate">
                <fieldset>
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12 col-lg-9">
                                <h3>Vehicle details</h3>
                                <p>Please describe your vehicle model and registration details.</p>
                                <div class="form-section row">
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group  ">
                                            <label for="CTPLVehicleManufacturer">Manufacturer  </label>
                                            <select class="select form-control plain" name="CTPLVehicleManufacturer" id="CTPLVehicleManufacturer" type="text" data-bind="value: $root.Model.Order.CTPLVehicleManufacturer, options: $root.Model.getManufacturerOptions(), optionsText: 'Text', optionsValue: 'Value', event: { click: $root.InputClick, change: $root.InputChange }">
                                                <option value="">Please Select</option>
                                                @foreach(App\Manufacturer::all() as $manufacturer)
                                                    <option value="{{ $manufacturer->id }}">{{ $manufacturer->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleModel">Model </label>
                                            <input class="text form-control plain" name="CTPLVehicleModel" id="CTPLVehicleModel" type="text" data-bind="value: $root.Model.Order.CTPLVehicleModel, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleSeries">Series </label>
                                            <input class="text form-control plain" name="CTPLVehicleSeries" id="CTPLVehicleSeries" type="text" data-bind="value: $root.Model.Order.CTPLVehicleSeries, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleManufacturerYear">Year </label>
                                            <input class="text form-control plain" name="CTPLVehicleManufacturerYear" id="CTPLVehicleManufacturerYear" type="text" data-bind="value: $root.Model.Order.CTPLVehicleManufacturerYear, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleColor">Color </label>
                                            <input class="text form-control plain" name="CTPLVehicleColor" id="CTPLVehicleColor" type="text" data-bind="value: $root.Model.Order.CTPLVehicleColor, event: { click: $root.InputClick, change: $root.InputChange }">
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
                                            <label for="CTPLVehiclePlateConductionNumber">Plate Number  </label>
                                            <input class="text form-control plain" name="CTPLVehiclePlateConductionNumber" id="CTPLVehiclePlateConductionNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehiclePlateConductionNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleEngineNumber">Engine Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleEngineNumber" id="CTPLVehicleEngineNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleEngineNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleChassisNumber">Chassis Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleChassisNumber" id="CTPLVehicleChassisNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleChassisNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleMVFileNumber">MV File Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleMVFileNumber" id="CTPLVehicleMVFileNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleMVFileNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-3 d-sm-none d-lg-block">
                                <div class="wizard-widget wizard-cart cart">
                                    <div class="header">Order summary</div>
                                    <div class="content">
                                        <ul class="cart-details">
                                            <!-- ko if: $root.Model.Data.VehicleTypeId() > 0 -->
                                            <li class="item">
                                                <span data-bind="text:$root.Model.DisplayData.CTPLVehicleType()">Truck</span>
                                                <strong data-bind="text:$root.Model.DisplayData.TotalAmount()">1250.4</strong>
                                                <em>CTPL Insurance</em>
                                            </li>
                                            <!-- /ko -->
                                            <li class="summary">
                                                <span>Total Price</span>
                                                <strong data-bind="text:$root.Model.DisplayData.DisplayedTotalAmount()">PHP 1,250.40</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12">
                                <h3>Contact details</h3>
                                <p>Please fill in your contact details.</p>
                                <div class="form-section row">
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="FirstName">First Name </label>
                                            <input class="text form-control plain" name="FirstName" id="FirstName" type="text" data-bind="value: $root.Model.Order.FirstName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="MiddleName">Middle Name </label>
                                            <input class="text form-control plain" name="MiddleName" id="MiddleName" type="text" data-bind="value: $root.Model.Order.MiddleName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="LastName">Last Name </label>
                                            <input class="text form-control plain" name="LastName" id="LastName" type="text" data-bind="value: $root.Model.Order.LastName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Email">Email </label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="icon i-display-mail i-2x"></i></span>
                                                <input type="email" class="text form-control plain" name="Email" id="Email" data-bind="value: $root.Model.Order.Email, event: { click: $root.InputClick, change: $root.InputChange }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Mobile1Number">Phone number </label>
                                            <div class="input-group">
                                                <span class="input-group-addon">+63</span>
                                                <input class="text form-control plain" name="Mobile1Number" id="Mobile1Number" type="tel" data-bind="value: $root.Model.Order.Mobile1Number, event: { click: $root.InputClick, change: $root.InputChange }">
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
                                            <input class="text form-control plain" name="StreetLine1" id="StreetLine1" type="text" data-bind="value: $root.Model.Order.StreetLine1, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="ProvinceId">Province </label>
                                            <select class="select form-control plain" name="ProvinceId" id="ProvinceId" type="text" data-bind="value: $root.Model.Order.ProvinceId ,options: $root.Model.ProvinceList, optionsText: 'DisplayedName', optionsValue: 'ProvinceId', event: { click: $root.InputClick, change: function() { $root.Model.getRegionOptions($root.Model.Order.ProvinceId()) }   }">
                                                <option value="-1">Please Select...</option>
                                                @foreach(App\Province::all()->sortBy('sortval') as $entry)
                                                    <option value="{{ $entry->id }}">{{ $entry->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="CityId">City </label>
                                            <select class="select form-control plain" name="CityId" id="CityId" type="text" data-bind="value: $root.Model.Order.CityId ,options: $root.Model.RegionList, optionsText: 'DisplayedName', optionsValue: 'CityId', event: { click: $root.InputClick, change: function() { $root.Model.getDistrictOptions($root.Model.Order.CityId()) }}">
                                                <option value="-1">Please Select...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="BarangayId">Barangay </label>
                                            <select class="select form-control plain" name="BarangayId" id="BarangayId" type="text" data-bind="value: $root.Model.Order.BarangayId, options: $root.Model.DistrictList, optionsText: 'DisplayedName', optionsValue: 'BarangayId', event: { click: $root.InputClick,  change: function() { $root.Model.setDistrictCode($root.Model.Order.BarangayId()) } }">
                                                <option value="-1">Please Select...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group ">
                                            <label for="AreaName">Village </label>
                                            <input class="text form-control plain" name="AreaName" id="AreaName" type="text" data-bind="value: $root.Model.Order.AreaName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group ">
                                            <label for="AreaCode">Zip Code </label>
                                            <input class="text form-control plain" name="AreaCode" id="AreaCode" type="text" data-bind="value: $root.Model.Order.AreaCode, event: { click: $root.InputClick, change: $root.InputChange }, enable: false" disabled="">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <!-- ko if:  --><!-- /ko -->
                                <!-- ko if: true -->
                                <hr>
                                <div class="form-group m-b-2x">
                                    <label>Consent for storing personal data:</label>
                                    <div class="form-terms">
                                        <ul>
                                            I allow eCompareMo to collect, store and process my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website. Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others. The use and processing of my information shall be in accordance with applicable laws and eCompareMo’s <a href="https://www.ecomparemo.com/terms-conditions">Terms and Conditions</a> and <a href="https://www.ecomparemo.com/privacy-policy">Privacy Policy</a>, which I confirm to have read and understood.
                                        </ul>
                                    </div>
                                    <div class="checkbox checkbox-stack plain field">
                                        <label><input type="checkbox" data-bind="checked: $root.Model.Order.hasConsent, event: {  click: $root.InputClick, change: $root.InputChange }" id="hasConsent" name="hasConsent" value="true"> I agree to the terms above.</label>
                                    </div>
                                </div>
                                <!-- /ko -->
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
                var cityid = $(this).val();

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
