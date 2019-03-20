@extends('app')
@section('styles')
<style>
    .cxcx {
        display: inline-block;
        *display: inline;
        zoom: 1;
        vertical-align: middle;
    }
</style>
@endsection
@section('content')
<main class="main" role="main">
	<article class="article">
		<div class="content">
            <div class="table table-striped">
                <table style="width: 100%;">
                    <thead>
                        <tr style="border: 1px solid black;">
                            <th width="35%">&nbsp;COVERAGE</th>
                            <th>LIMIT OF LIABILITY</th>
                            <th width="50%" class="text-center">PREMIUM</th>
                        </tr>
                    </thead>
                    <tbody style="border: 1px solid black;">
                        <tr>
                            <td width="35%">&nbsp;ACTS OF GOD</td>
                            <td width="15%">Php</td>
                            <td rowspan="2" style="border: 1px solid black;">
                                <div class="row">
                                    <div class="col-lg-7 cxcx">&emsp;<strong>PREMIUM WITH ACTS OF GOD</strong></div>
                                    <div class="col-lg-5 text-right"><strong style="color: red; font-size: 1.25em">7,403.06</strong>&nbsp;&nbsp;&nbsp;</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="35%">&nbsp;OWN DAMAGE</td>
                            <td width="15%" class="text-right"><strong>200,000.00</strong>&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="35%">&nbsp;THEFT</td>
                            <td width="15%" class="text-right"><strong>200,000.00</strong>&nbsp;&nbsp;&nbsp;</td>
                            <td rowspan="4" style="border: 1px solid black;">
                                <div class="row">

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="35%">&nbsp;EXCESS BODILY INJURY</td>
                            <td width="15%" class="text-right"><strong>200,000.00</strong>&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="35%">&nbsp;PROPERTY DAMAGE</td>
                            <td width="15%" class="text-right"><strong>200,000.00</strong>&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr style="border-bottom: 1px solid black;">
                            <td width="35%">&nbsp;PERSONAL ACCIDENT</td>
                            <td width="15%" class="text-right"><strong>200,000.00</strong>&nbsp;&nbsp;&nbsp;</td>
                        </tr>

                        <tr>
                            <td colspan="2" style="border-right: 1px solid black;">&nbsp;DEDUCTIBLE/PARTICIPATION</td>
                            <td rowspan="5" class="text-center" style="margin: 0px 1px 0px 1px; font-style: italic; font-size: 0.851em; overflow: auto;">DOCUMENTARY STAMPS TAX Due to BIR implementation of EDST (Electronic Documentary Stamp Tax) system effective July 1, 2010 policy holders are mandataed to pay the DST portion of the premium once the policy is issued. Refund on DST for cancelled policies is not allowed</td>
                        </tr>
                        <tr>
                            <tr><td colspan="2" ><div style="margin: 5px 0px 5px 0px;"/></tr>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6 col-xs-6">&emsp;&emsp;&emsp;SEDAN</div>
                                    <div class="col-lg-6 col-sm-6 col-xs-6"><strong>P2000</strong></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6 col-xs-6">&emsp;&emsp;&emsp;SUV</div>
                                    <div class="col-lg-6 col-sm-6 col-xs-6"><strong>P2000</strong></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border: 1px solid black;" class="text-center"><strong>PAYMENT OPTIONS</strong></td>
                            <td rowspan="4" style="border: 1px solid black;">
                                &nbsp;* Free Delivery of Insurance policy<br/>
                                &nbsp;* Free Towing Services<br/>
                                &nbsp;* Pay in 6 easy installments at ZERO INTEREST
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">&emsp;&emsp;&emsp;SEDAN</div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><strong style="color: red;">P2000</strong></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">&emsp;&emsp;&emsp;SUV</div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><strong style="color: red;">P2000</strong></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center" style="border: 1px solid black;">
                                Pls. Make Cheques Payable To: CONNEXT INSURANCE AGENCY
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
		</div>
		{{-- <aside class="sidebar">
			<div class="widget help-desk-widget">
				<h4>Need Help?</h4>
				<p>Contact our in-house experts for more details about our insurance services. <strong><i class="icon i-display-phone-right i-3x"></i>(02) 779 6912</strong> <span>Monday - Friday 9:00 am - 6:00 pm</span></p>
				<div class="widget-action"><a class="btn btn-default btn-block" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-verticalid="4" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" data-referrer="https://www.ecomparemo.com/thank-you-mot"><span>Contact Me</span></a></div>
			</div>
		</aside> --}}
	</article>
</main>
@endsection
