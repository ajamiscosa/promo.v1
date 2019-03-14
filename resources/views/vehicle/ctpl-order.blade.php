@php
    use Carbon\Carbon;
@endphp
@extends('app')
@section('title','CTPL Insurance | Order Page')
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
            <form class="smart-search-form step-wizard-form" id="step-wizard-form" aria-owns="step-wizard-action" data-steps-bar="step-index" data-progress-bar="step-progress" action="10b-canvas-marketplace-wizard-(login).html" method="post" novalidate="novalidate">
                <fieldset data-bind="css: { active: CurrentPage() == 1}" data-step="1" data-updatemethod="" class="active">
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12 col-lg-9">
                                <h3>Vehicle details</h3>
                                <p>Please describe your vehicle model and registration details.</p>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group  ">
                                            <label for="CTPLVehicleManufacturer">Manufacturer  </label>
                                            <select class="select form-control plain" name="CTPLVehicleManufacturer" id="CTPLVehicleManufacturer" type="text" data-bind="value: $root.Model.Order.CTPLVehicleManufacturer, options: $root.Model.getManufacturerOptions(), optionsText: 'Text', optionsValue: 'Value', event: { click: $root.InputClick, change: $root.InputChange }">
                                                <option value="">Please Select</option>
                                                <option value="DODGE">DODGE</option>
                                                <option value="FERRARI">FERRARI</option>
                                                <option value="FORD">FORD</option>
                                                <option value="FOTON">FOTON</option>
                                                <option value="HONDA">HONDA</option>
                                                <option value="HYUNDAI">HYUNDAI</option>
                                                <option value="ISUZU">ISUZU</option>
                                                <option value="JAGUAR">JAGUAR</option>
                                                <option value="JEEP">JEEP</option>
                                                <option value="KIA">KIA</option>
                                                <option value="LAMBORGHINI">LAMBORGHINI</option>
                                                <option value="LANDROVER">LANDROVER</option>
                                                <option value="LEXUS">LEXUS</option>
                                                <option value="LOTUS">LOTUS</option>
                                                <option value="MAZDA">MAZDA</option>
                                                <option value="MERCEDES BENZ">MERCEDES BENZ</option>
                                                <option value="MINI">MINI</option>
                                                <option value="MITSUBISHI">MITSUBISHI</option>
                                                <option value="NISSAN">NISSAN</option>
                                                <option value="PEUGEOT">PEUGEOT</option>
                                                <option value="PORSCHE">PORSCHE</option>
                                                <option value="SUBARU">SUBARU</option>
                                                <option value="SUZUKI">SUZUKI</option>
                                                <option value="TOYOTA">TOYOTA</option>
                                                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                                <option value="VOLVO">VOLVO</option>
                                                <option value="OTHERS">OTHERS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: $root.Model.Order.CTPLVehicleManufacturer() == 'OTHERS' --><!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleModel">Model </label>
                                            <input class="text form-control plain" name="CTPLVehicleModel" id="CTPLVehicleModel" type="text" data-bind="value: $root.Model.Order.CTPLVehicleModel, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleSeries">Series </label>
                                            <input class="text form-control plain" name="CTPLVehicleSeries" id="CTPLVehicleSeries" type="text" data-bind="value: $root.Model.Order.CTPLVehicleSeries, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleManufacturerYear">Year </label>
                                            <input class="text form-control plain" name="CTPLVehicleManufacturerYear" id="CTPLVehicleManufacturerYear" type="text" data-bind="value: $root.Model.Order.CTPLVehicleManufacturerYear, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleColor">Color </label>
                                            <input class="text form-control plain" name="CTPLVehicleColor" id="CTPLVehicleColor" type="text" data-bind="value: $root.Model.Order.CTPLVehicleColor, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="col-xs-12">
                                        <h3>Register details</h3>
                                        <p></p>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehiclePlateConductionNumber">Plate Number  </label>
                                            <input class="text form-control plain" name="CTPLVehiclePlateConductionNumber" id="CTPLVehiclePlateConductionNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehiclePlateConductionNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleEngineNumber">Engine Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleEngineNumber" id="CTPLVehicleEngineNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleEngineNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleChassisNumber">Chassis Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleChassisNumber" id="CTPLVehicleChassisNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleChassisNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-6">
                                        <div class="form-group ">
                                            <label for="CTPLVehicleMVFileNumber">MV File Number </label>
                                            <input class="text form-control plain" name="CTPLVehicleMVFileNumber" id="CTPLVehicleMVFileNumber" type="text" data-bind="value: $root.Model.Order.CTPLVehicleMVFileNumber, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <!-- ko if:  --><!-- /ko -->
                                <!-- ko if: false --><!-- /ko -->
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
                <fieldset data-bind="css: { active: CurrentPage() == 2}" data-step="2" data-updatemethod="">
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12 col-lg-9">
                                <h3>Contact details</h3>
                                <p>Please fill in your contact details.</p>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="FirstName">First Name </label>
                                            <input class="text form-control plain" name="FirstName" id="FirstName" type="text" data-bind="value: $root.Model.Order.FirstName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-6">
                                        <div class="form-group ">
                                            <label for="MiddleName">Middle Name </label>
                                            <input class="text form-control plain" name="MiddleName" id="MiddleName" type="text" data-bind="value: $root.Model.Order.MiddleName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-4 col-xs-12">
                                        <div class="form-group ">
                                            <label for="LastName">Last Name </label>
                                            <input class="text form-control plain" name="LastName" id="LastName" type="text" data-bind="value: $root.Model.Order.LastName, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Email">Email </label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="icon i-display-mail i-2x"></i></span>
                                                <input type="email" class="text form-control plain" name="Email" id="Email" data-bind="value: $root.Model.Order.Email, event: { click: $root.InputClick, change: $root.InputChange }">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-sm-6 col-xs-12">
                                        <div class="form-group ">
                                            <label for="Mobile1Number">Phone number </label>
                                            <div class="input-group">
                                                <span class="input-group-addon">+63</span>
                                                <input class="text form-control plain" name="Mobile1Number" id="Mobile1Number" type="tel" data-bind="value: $root.Model.Order.Mobile1Number, event: { click: $root.InputClick, change: $root.InputChange }">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="col-xs-12">
                                        <h3>Delivery details</h3>
                                        <p>Please fill in your address to where you want your insurance to be delivered.</p>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-xs-12">
                                        <div class="form-group ">
                                            <label for="StreetLine1">Address and street name </label>
                                            <input class="text form-control plain" name="StreetLine1" id="StreetLine1" type="text" data-bind="value: $root.Model.Order.StreetLine1, event: { click: $root.InputClick, change: $root.InputChange }">
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                </div>
                                <div class="form-section row">
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="ProvinceId">Province </label>
                                            <select class="select form-control plain" name="ProvinceId" id="ProvinceId" type="text" data-bind="value: $root.Model.Order.ProvinceId ,options: $root.Model.ProvinceList, optionsText: 'DisplayedName', optionsValue: 'ProvinceId', event: { click: $root.InputClick, change: function() { $root.Model.getRegionOptions($root.Model.Order.ProvinceId()) }   }">
                                                <option value="-1">Please Select...</option>
                                                <option value="1">Metro Manila</option>
                                                <option value="26">Cebu</option>
                                                <option value="64">Rizal</option>
                                                <option value="25">Cavite</option>
                                                <option value="42">Laguna</option>
                                                <option value="2">Abra</option>
                                                <option value="3">Agusan del Norte</option>
                                                <option value="4">Agusan del Sur</option>
                                                <option value="5">Aklan</option>
                                                <option value="6">Albay</option>
                                                <option value="7">Antique</option>
                                                <option value="8">Apayao</option>
                                                <option value="9">Aurora</option>
                                                <option value="10">Basilan</option>
                                                <option value="11">Bataan</option>
                                                <option value="12">Batanes</option>
                                                <option value="13">Batangas</option>
                                                <option value="14">Benguet</option>
                                                <option value="15">Biliran</option>
                                                <option value="16">Bohol</option>
                                                <option value="17">Bukidnon</option>
                                                <option value="18">Bulacan</option>
                                                <option value="19">Cagayan</option>
                                                <option value="20">Camarines Norte</option>
                                                <option value="21">Camarines Sur</option>
                                                <option value="22">Camiguin</option>
                                                <option value="23">Capiz</option>
                                                <option value="24">Catanduanes</option>
                                                <option value="27">Compostela Valley</option>
                                                <option value="28">Cotabato</option>
                                                <option value="29">Davao del Norte</option>
                                                <option value="30">Davao del Sur</option>
                                                <option value="31">Davao Oriental</option>
                                                <option value="32">Dinagat Islands</option>
                                                <option value="33">Eastern Samar</option>
                                                <option value="34">Guimaras</option>
                                                <option value="35">Ifugao</option>
                                                <option value="36">Ilocos Norte</option>
                                                <option value="37">Ilocos Sur</option>
                                                <option value="38">Iloilo</option>
                                                <option value="39">Isabela</option>
                                                <option value="40">Kalinga</option>
                                                <option value="41">La Union</option>
                                                <option value="43">Lanao del Norte</option>
                                                <option value="44">Lanao del Sur</option>
                                                <option value="45">Leyte</option>
                                                <option value="46">Maguindanao</option>
                                                <option value="47">Marinduque</option>
                                                <option value="48">Masbate</option>
                                                <option value="49">Misamis Occidental</option>
                                                <option value="50">Misamis Oriental</option>
                                                <option value="51">Mountain Province</option>
                                                <option value="52">Negros Occidental</option>
                                                <option value="53">Negros Oriental</option>
                                                <option value="54">Northern Samar</option>
                                                <option value="55">Nueva Ecija</option>
                                                <option value="56">Nueva Vizcaya</option>
                                                <option value="57">Occidental Mindoro</option>
                                                <option value="58">Oriental Mindoro</option>
                                                <option value="59">Palawan</option>
                                                <option value="60">Pampanga</option>
                                                <option value="61">Pangasinan</option>
                                                <option value="62">Quezon</option>
                                                <option value="63">Quirino</option>
                                                <option value="65">Romblon</option>
                                                <option value="66">Samar</option>
                                                <option value="67">Sarangani</option>
                                                <option value="68">Shariff Kabunsuan</option>
                                                <option value="69">Siquijor</option>
                                                <option value="70">Sorsogon</option>
                                                <option value="71">South Cotabato</option>
                                                <option value="72">Southern Leyte</option>
                                                <option value="73">Sultan Kudarat</option>
                                                <option value="74">Sulu</option>
                                                <option value="75">Surigao del Norte</option>
                                                <option value="76">Surigao del Sur</option>
                                                <option value="77">Tarlac</option>
                                                <option value="78">Tawi-Tawi</option>
                                                <option value="79">Zambales</option>
                                                <option value="80">Zamboanga del Norte</option>
                                                <option value="81">Zamboanga del Sur</option>
                                                <option value="82">Zamboanga Sibugay</option>
                                                <option value="83">Zamboanga City</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- /ko -->
                                    <!-- ko if: true -->
                                    <div class="field col-xs-4">
                                        <div class="form-group  ">
                                            <label for="RegionId">City </label>
                                            <select class="select form-control plain" name="RegionId" id="RegionId" type="text" data-bind="value: $root.Model.Order.RegionId ,options: $root.Model.RegionList, optionsText: 'DisplayedName', optionsValue: 'RegionId', event: { click: $root.InputClick, change: function() { $root.Model.getDistrictOptions($root.Model.Order.RegionId()) }}">
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
                                            <label for="DistrictId">Barangay </label>
                                            <select class="select form-control plain" name="DistrictId" id="DistrictId" type="text" data-bind="value: $root.Model.Order.DistrictId, options: $root.Model.DistrictList, optionsText: 'DisplayedName', optionsValue: 'DistrictId', event: { click: $root.InputClick,  change: function() { $root.Model.setDistrictCode($root.Model.Order.DistrictId()) } }">
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
                <fieldset data-bind="css: { active: CurrentPage() == 3}" data-step="3" data-updatemethod="">
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-md-12 col-lg-9">
                                <div class="wizard-payment">
                                    <h3>Payment</h3>
                                    <p>Choose your payment method</p>
                                    <!-- accordion starts -->
                                    <div class="accordion" data-toggle="accordion">
                                        <!-- ko foreach: $root.Model.PaymentModeList() -->
                                        <div class="group" data-bind="css: { show: $root.Model.Order.PaymentMode() == PaymentMode }">
                                            <div class="head"><label><input type="radio" data-bind="checked: $root.Model.Order.PaymentMode, attr: { value : PaymentMode }, event: { change: $root.InputChange, click: $root.InputClick }" name="PaymentMode" data-ga-click="" data-ga-change="Wizard_OrderPayment_Change" value="Bank"><span data-bind="text: Label">Bank Deposit</span></label></div>
                                            <div class="body" data-bind="html: Body">
                                                <span> Account Name: Snapcompare Corporation <br>Account Type: Savings <br>Bank / Account Number (Deposits from provincial areas are subject to Bank Charges): <br><strong class="text-info">BPI:</strong> 2753-0072-56 <br><strong class="text-info">BDO:</strong> 0082-8004-0922 </span><br><br>
                                                <p class="text-center"> Email a copy of your receipt or deposit slip to: <a href="mailto:insurancepayment@ecomparemo.com" target="_top">insurancepayment@ecomparemo.com</a> </p>
                                                <span> <strong class="text-info">USE SUBJECT:</strong><br>NAME OF ORDERING CUSTOMER - ORDER ID<br>Example: Juan Dela Cruz - 11111 </span>
                                            </div>
                                        </div>
                                        <div class="group" data-bind="css: { show: $root.Model.Order.PaymentMode() == PaymentMode }">
                                            <div class="head"><label><input type="radio" data-bind="checked: $root.Model.Order.PaymentMode, attr: { value : PaymentMode }, event: { change: $root.InputChange, click: $root.InputClick }" name="PaymentMode" data-ga-click="" data-ga-change="Wizard_OrderPayment_Change" value="Coins"><span data-bind="text: Label">Coins App</span></label></div>
                                            <div class="body" data-bind="html: Body">
                                                <span> <strong>Please select a payment method</strong><br><strong class="text-info">1: COINS.PH APP</strong> <br><strong class="text-info">2: COINS.PH PAYMENT PARTNERS</strong><br></span> <span> <strong class="m-l-4x">7-Eleven</strong><br><strong class="m-l-4x">Cebuana Lhuiller</strong><br><strong class="m-l-4x">M Lhuiller</strong><br></span>
                                                <p class="text-label text-center">You need to have a registered account to use the Coins.ph application in your mobile device.</p>
                                            </div>
                                        </div>
                                        <!-- /ko -->
                                    </div>
                                    <!-- accordion ends -->
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-3 d-sm-none d-lg-block">
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset data-bind="css: { active: CurrentPage() == 4}" data-step="4" data-updatemethod="">
                    <div class="wizard-panel wizard-panel-inline">
                        <div class="wizard-section row" data-bind="">
                            <div class="col-xs-12">
                                <div class="checkout">
                                    <!-- details starts -->
                                    <div class="checkout-details">
                                        <span class="center-block hidden-lg p-b-1x"><i class="icon i-action-tick-circle-thin i-4x"></i></span>
                                        <h2>Order Complete</h2>
                                        <p>Kindly check your email for a detailed summary of your order and payment instructions.</p>
                                        <ul class="detail-list">
                                            <li>
                                                <strong>Product:</strong>
                                                <span>CTPL Insurance Coverage</span>
                                            </li>
                                            <li>
                                                <strong>Coverage:</strong>
                                                <span data-bind="text:$root.Model.DisplayData.CTPLVehicleType()">Truck</span>
                                            </li>
                                            <li>
                                                <strong>Premium:</strong>
                                                <span data-bind="text:$root.Model.DisplayData.DisplayedTotalAmount()">PHP 1,250.40</span>
                                            </li>
                                            <li>
                                                <strong>Order ID:</strong>
                                                <span data-bind="text:Model.DisplayData.OrderId"></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- details ends -->
                                    <!-- help starts -->
                                    <div class="checkout-help">
                                        <h4>Any question?</h4>
                                        <p>Our customer service is ready to provide assistance and information in regards to your application process.</p>
                                        <div class="checkout-contact">
                                            <strong><i class="icon i-display-phone-right i-3x"></i><small>(02)</small> 779 6912</strong>
                                            <span>Monday - Friday 9:00 am - 6:00 pm</span>
                                        </div>
                                    </div>
                                    <!-- help ends -->
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

    </script>
@endsection