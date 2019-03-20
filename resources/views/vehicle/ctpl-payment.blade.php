@php
    use Carbon\Carbon;
@endphp
@extends('app')
@section('title','CTPL Insurance | Inquiry')
@section('styles')
<link href="{{ asset('css/marketplacev1.css') }}" rel="stylesheet" type="text/css">
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
                <span property="name">Inquiry</span>
                <meta property="position" content="3">
            </li>
        </ol>
    </nav>
    <article class="article">
        <div class="content">
            <div class="wizard-section row" data-bind="">

                <div class="col-md-12 col-lg-9">
                    <div class="wizard-payment">

                        <h3>Payment</h3>
                        <p>Choose your payment method</p>

                        <!-- accordion starts -->
                        <div class="accordion" data-toggle="accordion">

                            <!-- ko foreach: $root.Model.PaymentModeList() -->
                            <div class="group" data-bind="css: { show: $root.Model.Order.PaymentMode() == PaymentMode }">
                                <div class="head">
                                    <label>
                                        <input type="radio" data-bind="checked: $root.Model.Order.PaymentMode, attr: { value : PaymentMode }, event: { change: $root.InputChange, click: $root.InputClick }" name="PaymentMode" data-ga-click="" data-ga-change="Wizard_OrderPayment_Change" value="Bank"><span data-bind="text: Label">Bank Deposit</span></label>
                                </div>
                                <div class="body" data-bind="html: Body"><span> Account Name: Snapcompare Corporation <br>Account Type: Savings <br>Bank / Account Number (Deposits from provincial areas are subject to Bank Charges): <br><strong class="text-info">BPI:</strong> 2753-0072-56 <br><strong class="text-info">BDO:</strong> 0082-8004-0922 </span>
                                    <br>
                                    <br>
                                    <p class="text-center"> Email a copy of your receipt or deposit slip to: <a href="mailto:insurancepayment@ecomparemo.com" target="_top">insurancepayment@ecomparemo.com</a> </p><span> <strong class="text-info">USE SUBJECT:</strong><br>NAME OF ORDERING CUSTOMER - ORDER ID<br>Example: Juan Dela Cruz - 11111 </span></div>
                            </div>

                            <div class="group" data-bind="css: { show: $root.Model.Order.PaymentMode() == PaymentMode }">
                                <div class="head">
                                    <label>
                                        <input type="radio" data-bind="checked: $root.Model.Order.PaymentMode, attr: { value : PaymentMode }, event: { change: $root.InputChange, click: $root.InputClick }" name="PaymentMode" data-ga-click="" data-ga-change="Wizard_OrderPayment_Change" value="Coins"><span data-bind="text: Label">Coins App</span></label>
                                </div>
                                <div class="body" data-bind="html: Body"><span> <strong>Please select a payment method</strong><br><strong class="text-info">1: COINS.PH APP</strong> <br><strong class="text-info">2: COINS.PH PAYMENT PARTNERS</strong><br></span> <span> <strong class="m-l-4x">7-Eleven</strong><br><strong class="m-l-4x">Cebuana Lhuiller</strong><br><strong class="m-l-4x">M Lhuiller</strong><br></span>
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
