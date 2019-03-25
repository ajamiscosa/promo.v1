@extends('app')
@section('title','Truck Insurance | Quotation')
@section('styles')
<link href="{{ asset('css/css.css') }}" rel="stylesheet" type="text/css">
@endsection
@section('content')
<div class="calcer-bread">
	<div class="breadcrumb">
		<ol>
			<li><a href="/">Home</a></li>
			<li><a href="/truck-insurance">Truck Insurance</a></li>
			<li class="active">Compare</li>
		</ol>
	</div>
</div>
<div class="page-content">
	<div class="container page-main">
		<div class="desktop-title">
			<h1 class="o80">Compare Truck Insurance</h1>
		</div>
		<div class="main-content clearfix contentSection">
			<div class="side-panel sidePanelOptions" data-container-title="Actions">
				<div class="side-nav-container mot-result" style="">
					<form action="/compare-auto-insurance-quotes/Input1_DATAPOST" id="calcform" method="post" novalidate="novalidate">
						<div id="vehicleSelect">
							<div class="form-container input-summary m-b-0 p-b-1x">
								<div class="form-nosize">
									<div class="input-summary-wrap o80">You are a <b>{{ $client->title }} {{ $client->firstname }} {{ $client->lastname }}</b> owning a <b>{{ $inquiry->getVehicleInfo() }}</b></div>
								</div>
							</div>
							<input class="btn btn-warning btn-block m-b-1x m-t-0 valid" id="backToWizard" type="button" value="Change" aria-invalid="false">
						</div>
						<div class="form-container email-container help-outset">
							<div class="indigo-cont">
								<div class="top">
									<div class="top-mid">
										<div class="indigo-cont-title">Save this for later</div>
										<div class="indigo-cont-functions">
											<a href="javascript:void(0);" class="indigo-collapse minimize">
											<i class="i-arrow-right"></i>
											<i class="i-arrow-down"></i>
											</a>
										</div>
									</div>
								</div>
								<div class="center">
									<div class="center-mid">
										<input data-val="true" id="AskForEmail" name="AskForEmail" type="hidden" value="NotRequired" aria-required="true" aria-invalid="false" aria-describedby="AskForEmail-error" class="valid">
										<div class="form-nosize">
											<div id="beforeSendEmail">
												<div class="dialog-prompt p-b-05x">
													<small>Get these results in your inbox.</small>
												</div>
												<div class="form-group">
													<label class="control-label" for="EmailAddress">Email Address</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Please input your email address." data-original-title="Email:">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
													<div class="input-icon icon-right">
														<input class="form-control valid" id="EmailAddress" name="EmailAddress" type="text" value="{{ $client->email }}" aria-invalid="false">
														<span class="inner-icon"><i class="icon i-display-mail"></i></span>
													</div>
													<div class="validation-text"><span class="field-validation-valid" data-valmsg-for="EmailAddress" data-valmsg-replace="true"></span></div>
												</div>
												<div class="form-group newsletter display-none" id="newsletter_div">
													<input data-val="true" id="wantsNewsletter" name="wantsNewsletter" type="checkbox" value="true" class="valid">
													<input name="wantsNewsletter" type="hidden" value="false" aria-invalid="false" aria-describedby="wantsNewsletter-error" class="valid">
													<label class="control-label f90" for="wantsNewsletter">Subscribe to our newsletter</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Subscribe" data-original-title="Subscribe to our newsletter">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
													<div class="validation-text"><span class="field-validation-valid" data-valmsg-for="wantsNewsletter" data-valmsg-replace="true"></span></div>
												</div>
												<div class="button-cont" id="sendresult">
													<button type="button" class="btn btn-default btn-block m-t-0" data-button-type="link" data-container-type="2" id="result-sendbtn" data-isfirstload="true">Save my Results</button>
												</div>
												<div class="form-group text-danger display-none" id="cannotSend" style="display: none;">
													<small>Cannot send result email with no results</small>
												</div>
											</div>
											<div class="display-none" id="afterSendEmail">
												<div class="form-group">
													<strong>Results sent to</strong>
													<small class="sendAgnEmail" id="sendAgnEmailTxt">eul.araneta@gmail.com</small><br>
													<small>You can send again by clicking the button.</small>
												</div>
												<div class="button-cont" id="sendresultagain">
													<button type="button" class="btn btn-default btn-block m-t-0" id="result-sendagnbtn" data-button-type="link" data-container-type="2" data-isfirstload="true">Send again</button>
												</div>
												<div class="form-group text-danger display-none" id="cannotSendAgn" style="display: none;">
													<small>Cannot send result email with no results</small>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="specialpopup" class="popup-panel outset" style="display: none;">
									<div class="popup-arrow-border"></div>
									<div class="popup-arrow"></div>
									<div class="popup-icon">
										<div class="popup-actions">
											<a class="popup-close">
											<i class="icon i-action-cross"></i>
											</a>
										</div>
									</div>
									<div class="popup-text">
										<h5>Only one step to get your result!</h5>
										<p>We will help you save time by displaying products that only comply with your location and the requirements that you enter</p>
										<div class="seperator"></div>
										<h5>Already registered on eCompareMo.com?</h5>
										<p> Please sign in, and we will automatically fill in the application with your saved data that we already know</p>
										<div class="popup-button login-button btn btn-success">Login</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-container filter-container filter-mobiler cover-container adjust-panel">
							<div class="indigo-cont">
								<div class="top">
									<div class="top-mid">
										<div class="indigo-cont-title">Cover requirement</div>
										<div class="indigo-cont-functions">
											<a href="javascript:void(0);" class="indigo-collapse minimize">
											<i class="i-arrow-right"></i>
											<i class="i-arrow-down"></i>
											</a>
										</div>
									</div>
								</div>
								<div class="center">
									<div class="center-mid">
										<div class="form-wrapper">
											<div class="form-nosize">
												<div class="form-group p-t-0">
													<label class="control-label" for="CoverageTypeId">Cover type:</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Compulsory Third Party Liability (CTPL) is the mandatory requirement for car registration. It covers the death and/or bodily injury of a Third Party victim in an accident caused by the Insured Vehicle.
														<br /><br />
														Comprehensive insurance is an extensive coverage to protect your vehicle against loss or damage to accidents, as well as loss due to theft. Moreover, it protects your car against liability arising out of loss or damage to other person's properties (Property Damage) and or injuries sustained by third parties (Bodily Injuries)
														" data-original-title="Cover type:">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
													<select class="form-control select valid" id="CoverageTypeId" name="CoverageTypeId">
														<option selected="selected" value="1">Comprehensive</option>
														<option value="3">Compulsory Third Party Liability (CTPL)</option>
													</select>
												</div>
												<input type="hidden" id="VehicleType" value="{{$inquiry->getVehicle()->type}}" />
												<div class="form-group">
													<label class="control-label" for="OptimizeInsuredValueAmount">Insured Value</label>
													<div class="input-group">
														<span class="input-group-addon">PHP</span>
														<input id="OptimizeInsuredValueAmount" name="OptimizeInsuredValueAmount" type="text" value="{{ $inquiry->getVehicle()->fmv }}" class="form-control valid">
													</div>
													<div class="validation-text"><span class="field-validation-valid" data-valmsg-for="OptimizeInsuredValueAmount" data-valmsg-replace="true"></span></div>
												</div>
												<div class="form-group">
													<label class="control-label" for="PDCover_Amount">3rd party property damage</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="is an additional coverage on top of the mandatory CTPL that covers damages to property caused by the Insured Vehicle." data-original-title="3rd party property damage">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
													<div class="input-group">
														<span class="input-group-addon">PHP</span>
														<select class="form-control select valid" id="PDCover_Amount" name="PDCover_Amount" aria-invalid="false">
														@foreach(App\PropertyDamage::all() as $pd)
														<option rel="{{ $pd->addon }}" value="{{ $pd->coverage }}" {{ $pd->preferred?"selected":"" }}>{{ number_format($pd->coverage,2,'.',',') }}</option>
														@endforeach
														</select>
													</div>
													<div class="validation-text"><span class="field-validation-valid" data-valmsg-for="PDCover_Amount" data-valmsg-replace="true"></span></div>
												</div>
												<div class="form-group">
													<label class="control-label" for="BICover_Amount">3rd party bodily injury</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="is an additional coverage on top of the mandatory CTPL that covers bodily injury or death of persons caused by the Insured Vehicle." data-original-title="3rd party bodily injury">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
													<div class="input-group">
														<span class="input-group-addon">PHP</span>
														<select class="form-control select valid" id="BICover_Amount" name="BICover_Amount" aria-required="true" aria-invalid="false" aria-describedby="BICover_Amount-error">
														@foreach(App\BodilyInjury::all() as $bi)
														<option rel="{{ $bi->addon }}" value="{{ $bi->coverage }}" {{ $bi->preferred?"selected":"" }}>{{ number_format($bi->coverage,2,'.',',') }}</option>
														@endforeach
														</select>
														<span class="field-validation-valid" data-valmsg-for="BICover_Amount" data-valmsg-replace="true"></span>
													</div>
													<div class="validation-text"><span class="field-validation-valid" data-valmsg-for="BICover_Amount" data-valmsg-replace="true"></span></div>
												</div>
											</div>
											<div class="form-nosize">
												<div class="form-group">
													<label class="control-label">Add Ons:</label>
													<a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="You may add additional benefits such as:
														<br/><br/>
														- Acts of God (AOG) - coverages against natural calamities such as flood, typhoon, hurricane, volcanic eruption and earthquake<br/><br/>
														- Personal Accident - insurance coverage that will answer for the death, disablement and medical expenses of the driver and passengers in the unfortunate event of an accident<br/><br/>
														- Riot, Strike, Civil Commotion - an added coverage but is subject for approval by the insurance companies" data-original-title="Add Ons:">
													<i class="icon i-action-info-circle-solid"></i>
													<i class="icon i-action-info-circle"></i>
													</a>
												</div>
											</div>
											<div class="form-resize">
												<div class="form-group">
													<input checked="checked" id="HasAOG" name="HasAOG" type="checkbox" value="true" aria-invalid="false" aria-describedby="HasAOG-error" class="valid"><input name="HasAOG" type="hidden" value="false" aria-invalid="false" aria-describedby="HasAOG-error" class="valid">
													<label class="control-label" for="HasAOG">Acts of God</label>
												</div>
												<div class="form-group">
													<input checked="checked" data-val="true" data-val-required="The PersonalAccident field is required." id="PersonalAccident" name="PersonalAccident" type="checkbox" value="true" aria-invalid="false" aria-describedby="PersonalAccident-error" class="valid"><input name="PersonalAccident" type="hidden" value="false" aria-invalid="false" aria-describedby="PersonalAccident-error" class="valid">
													<label class="control-label" for="PersonalAccident">Personal Accident</label>
													<div class="form-group" id="seatNumberDiv">
														<label class="control-label" for="PassengerAccidentCount">Seat Capacity</label>
														<select class="form-control select valid" data-val="true" data-val-required="Passenger accident count is empty" id="PassengerAccidentCount" name="PassengerAccidentCount" aria-required="true" aria-invalid="false" aria-describedby="PassengerAccidentCount-error">
															<option value="0">0</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option selected="selected" value="5">5</option>
															<option value="6">6</option>
															<option value="7">7</option>
															<option value="8">8</option>
															<option value="9">9</option>
															<option value="10">10</option>
															<option value="11">11</option>
															<option value="12">12</option>
															<option value="13">13</option>
															<option value="14">14</option>
															<option value="15">15</option>
															<option value="16">16</option>
															<option value="17">17</option>
															<option value="18">18</option>
															<option value="19">19</option>
															<option value="20">20</option>
														</select>
													</div>
												</div>
												<div class="form-group">
													<input data-val="true" data-val-required="The hasRiotStrikeCivilCommotionRisk field is required." id="hasRiotStrikeCivilCommotionRisk" name="hasRiotStrikeCivilCommotionRisk" type="checkbox" value="true" aria-invalid="false" aria-describedby="hasRiotStrikeCivilCommotionRisk-error" class="valid"><input name="hasRiotStrikeCivilCommotionRisk" type="hidden" value="false" aria-invalid="false" aria-describedby="hasRiotStrikeCivilCommotionRisk-error" class="valid">
													<label class="control-label" for="hasRiotStrikeCivilCommotionRisk">Strike, Riot, Civil Commotion</label>
												</div>
											</div>
											<div class="form-nosize mobile-buttons">
												<button class="btn btn-default btn-block" data-bind="click: ResultTable.triggerCalc">Update Result</button>
											</div>
											<div class="form-nosize mobile-buttons-bot">
												<div class="mobile-button-cancel float-left" data-bind="click: ResultTable.Mobile.mobile_ClickClosePanel">Cancel</div>
												<div class="mobile-button-update float-right" data-bind="click: ResultTable.triggerCalc">Update</div>
												<div class="text-center">Change</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="results resultContent">
				<div class="result-main" data-container-title="Your Results">
					<div class="result-bind-context mot" data-bind="visible: isPageReady" style="">
						<div class="result-container">
							<div class="result-head clearfix" data-bind="visible: !isCalculating() &amp;&amp; !hasNoResults()" style="">
								<div class="result-title float-left o80">
									<h4 class="m-y-0" style="">Congratulations, we've found <strong>{{ count(App\Insurer::all()) }}</strong> matches</h4>
								</div>
								<div class="result-sort float-right hidden-sm hidden-xs">
									<div class="form-group form-inline">
										<label class="control-label o80">Sort by: </label>
										<select class="form-control select btn-default" id="sort-dropdown">
											<option value="!TotalPremiumIncludingFees,NumberOfWorkshopsInRegion">Premium - low to high</option>
											<option value="NumberOfWorkshopsInRegion,!TotalPremiumIncludingFees">Number of Motorshops - high to low</option>
											<option value="!NumberOfWorkshopsInRegion,!TotalPremiumIncludingFees">Number of Motorshops - low to high</option>
										</select>
									</div>
								</div>
								<div class="item-modal" id="sort-modal">
									<div class="item-modal-wrap">
										<div class="item-modal-head">
											<div class="mobile-button-cancel float-left" data-bind="click: Mobile.mobile_closeSortPanel">Close</div>
											<div class="mobile-button-update float-right" data-bind="click: Mobile.mobile_ClickSortResults">Update</div>
											<div class="text-center">Sort</div>
										</div>
										<div class="item-modal-content">
											<div class="item-modal-box">
												<div class="item-modal-resize">
													<div class="form-group">
														<label class="control-label">
														<input type="radio" name="sort-m" value="!TotalPremiumIncludingFees,NumberOfWorkshopsInRegion">
														Premium - low to high
														</label>
													</div>
													<div class="form-group">
														<label class="control-label">
														<input type="radio" name="sort-m" value="NumberOfWorkshopsInRegion,!TotalPremiumIncludingFees">
														Number of Motorshops - high to low
														</label>
													</div>
													<div class="form-group">
														<label class="control-label">
														<input type="radio" name="sort-m" value="!NumberOfWorkshopsInRegion,!TotalPremiumIncludingFees">
														Number of Motorshops - low to high
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="preload-container" data-bind="visible: isCalculating()" style="display: none;">
								<div class="preloader">
									<div class="loader"></div>
								</div>
								<h4 class="o80">Finding all the best car insurance options...</h4>
							</div>
							<div class="result-filter-options" style="display: none;">
								<div class="result-filter-options-wrap">
									<a href="javascript:;" class="icon adjust-link" data-bind="click: Mobile.mobile_ClickOpenPanel">
									<i class="i-display-adjust"></i>
									Adjust
									</a>
									<a href="javascript:;" class="icon sort-link" data-bind="click: Mobile.mobile_openSortPanel">
									<i class="i-display-sort"></i>
									Sort
									</a>
								</div>
							</div>
							<div class="result-wrap" id="hasNoResultsDiv" data-bind="visible: !isFirstRun() &amp;&amp; hasNoResults()" style="display:none;">
								<div class="result-item">
									<div class="result-item-wrap">
										<div class="result-content">
											<h4 class="m-t-0 o80">There are no results for your search!</h4>
											<div class="row no-result">
												<div class="col-lg-6 col-md-12 col-sm-6 col-xs-12 p-t-1x" data-bind="visible:FilteredOutCount()" style="display: none;">
													<div class="no-result-height o80 f80">
														<p class="m-b-0" data-bind="text: '{0} companies are not shown because of your filters'.format(FilteredOutCount())">0 companies are not shown because of your filters</p>
													</div>
													<a href="javascript:;" class="btn btn-secondary btn-block m-b-2x" data-bind="click : $root.resetFilters" data-button-type="link" data-container-type="2">Reset All Filters</a>
												</div>
												<div class="col-xs-12 p-t-1x" data-bind="css: { '':!FilteredOutCount(), 'col-lg-6 col-sm-6':FilteredOutCount() }">
													<div class="no-result-height o80 f80">
														<p class="m-b-0" data-bind="text: '{0} companies are not shown because of your eligibility'.format(NonEligibleResults())">8 companies are not shown because of your eligibility</p>
													</div>
													<a href="javascript:;" class="btn btn-secondary btn-block m-b-2x" data-bind="click : $root.goToEligibility" data-button-type="link" data-container-type="2">Edit Eligibility Requirements</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="result-wrap result-row-container">
							</div>
						</div>
					</div>
					<script type="text/html" id="resultTemplate">
						<div class="result-item result-row" data-bind="css: { altrow : $index()%2 }, attr: { 'data-resultID' : ResultId, 'data-ResultGuid': ResultGuid, 'data-CompanyProductId' : CompanyProductId, 'data-CompanyId': CompanyId }">
						    <div class="result-pinned" data-bind="visible: HighLightedRowSortval != null && HighLightedRowSortval > 0">Featured Product</div>
						    <div class="result-item-wrap">
						        <div class="result-content">
						            <div class="result-content-top clearfix">
						                <div class="result-name o80">
						                    <div class="result-selector">
						                        <input type="checkbox" class="comparisonCheckbox" data-bind="visible : $root.canContinue" />
						                    </div>
						                    <strong data-bind="text: DisplayedCompanyProductName"></strong> <small data-bind="text: ProductRemarks"></small>
						                </div>
						                <div class="result-buttons">

						<div class="button-row"  data-bind="if : GetQuoteClosingChannelId != 0, visible: GetQuoteClosingChannelId != 0" >
						<a class="btn btn-default btn-block" data-button-type="link" data-container-type="2"
						   data-bind="attr: { 'data-analytics' : '{0}|{1}|{2}|{3}'.format('MOT', 'Result_GetQuote_Click', DisplayedCompanyProductName, 5), href : '/Product/{4}/PersonInfo?b2b={0}&ad={1}&id={2}&type={3}'.format('f6942773-ad7a-4ff5-ad50-5a496d8aff1c', 'ecm', ResultGuid, 1, 'MOT') }, css: { lessVisible : GetQuoteClosingChannelId == 3 || GetQuoteClosingChannelId == 4 }">
						    <span data-bind="if : GetQuoteClosingChannelId == 2 || GetQuoteClosingChannelId == 4">Next</span>
						    <span data-bind="if : GetQuoteClosingChannelId == 1 || GetQuoteClosingChannelId == 3 || GetQuoteClosingChannelId == 0"><!-- ko if: ko.observableArray([]).indexOf(CompanyId) > -1 -->I&#39;m Interested<!-- /ko --><!-- ko ifnot: ko.observableArray([]).indexOf(CompanyId) > -1 --> Get Quote<!-- /ko --></span>
						</a>
						</div>
						<div class="button-row"   data-bind="if : ApplyNowClosingChannelId != 0, visible : ApplyNowClosingChannelId != 0"  >
						<a class="btn btn-default btn-block" data-button-type="link" data-container-type="2"
						   data-bind="attr: { 'data-analytics' : '{0}|{1}|{2}|{3}'.format('MOT', 'Result_Apply_Click', DisplayedCompanyName + ': ' + DisplayedCompanyProductName, 5), href : '/Product/{4}/PersonInfo?b2b={0}&ad={1}&id={2}&type={3}'.format('f6942773-ad7a-4ff5-ad50-5a496d8aff1c', 'ecm', ResultGuid, 2, 'MOT') }, css: { lessVisible : ApplyNowClosingChannelId == 3 || ApplyNowClosingChannelId == 4 }">
						    <!-- ko if: ApplyNowClosingChannelId == 2 || ApplyNowClosingChannelId == 4 -->
						    <span>Next</span>
						    <!-- /ko -->
						    <!-- ko if: ApplyNowClosingChannelId == 1 || ApplyNowClosingChannelId == 3 || ApplyNowClosingChannelId == 0 -->
						    <span>Apply Now</span>
						    <!-- /ko-->
						    <!-- /ko -->
						</a>
						</div>
						<div class="button-row" data-bind="if : ApplyOnlineClosingChannelId != 0, visible : ApplyOnlineClosingChannelId != 0">
						<a class="btn btn-default btn-block" data-button-type="link" data-container-type="2"
						   data-bind="attr: { href : '/Product/{4}/PersonInfo?b2b={0}&ad={1}&id={2}&type={3}'.format('f6942773-ad7a-4ff5-ad50-5a496d8aff1c', 'ecm', ResultGuid, 3, 'MOT') }, css: { lessVisible : ApplyOnlineClosingChannelId == 3 || ApplyOnlineClosingChannelId == 4 }">
						    <span data-bind="if : ApplyOnlineClosingChannelId == 2 || ApplyOnlineClosingChannelId == 4">Next</span>
						    <span data-bind="if : ApplyOnlineClosingChannelId == 1 || ApplyOnlineClosingChannelId == 3">Apply Online</span>
						</a>
						</div>
						<div class="button-row" data-bind="if : GoToBranchClosingChannelId != 0, visible : GoToBranchClosingChannelId != 0">
						<a class="btn btn-default btn-block" data-button-type="link" data-container-type="2"
						   data-bind="attr: { href : '/Product/{4}/PersonInfo?b2b={0}&ad={1}&id={2}&type={3}'.format('f6942773-ad7a-4ff5-ad50-5a496d8aff1c', 'ecm', ResultGuid, 4, 'MOT') }, css: { lessVisible : GoToBranchClosingChannelId == 3 || GoToBranchClosingChannelId == 4 }">
						    <span data-bind="if : GoToBranchClosingChannelId == 2 || GoToBranchClosingChannelId == 4">Next</span>
						    <span data-bind="if : GoToBranchClosingChannelId == 1 || GoToBranchClosingChannelId == 3">Go To Branch</span>
						</a>
						</div>
						<div class="button-row" data-bind="if: ContactMeClosingChannelId != 0, visible : ContactMeClosingChannelId != 0">
						    <a href="javascript:;" class="btn btn-ghost-default btn-block result-contact">
						        Contact Me
						    </a>
						</div>

						                </div>
						            </div>
						            <div class="result-information p-b-2x to-normal-size">
						                <div class="result-features row">
						                    <div class="col-lg-3 col-md-12 col-sm-3 col-xs-12">
						                        <div class="img-thumbnail m-b-1x">
						                            <img data-bind="attr: { 'src': CompanyRealImage, 'alt': DisplayedCompanyName }" class="img-responsive" />
						                        </div>
						                    </div>
						                    <div class="col-lg-9 col-md-12 col-sm-9 col-xs-12">
						                        <div class="row">
						                            <div class="col-sm-4">
						                                <div class="row">
						                                    <div class="col-sm-12 col-xs-6">
						                                        <label class="control-label f80 o80">Accredited Motorshops</label>
						                                        <a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Accredited Motorshops" data-content="Accredited Motorshops are the repair shops of the insurance company where you can take your car for repair in case of any damage to the vehicle based on your province, city or municipality.">
						<i class="icon i-action-info-circle-solid"></i>
						<i class="icon i-action-info-circle"></i>
						</a>
						                                    </div>
						                                    <div class="col-sm-12 col-xs-6 o80">
						                                        <h4 class="m-y-0">
						                                            <span data-bind="text: NumberOfWorkshopsInRegion"></span>
						                                            <small>in your area</small>
						                                        </h4>
						                                        <small data-bind="text: NumberOfWorkshopsInRegionRemarks"></small>
						                                    </div>
						                                </div>
						                            </div>
						                            <div class="col-sm-4">
						                                <div class="row">
						                                    <div class="col-sm-12 col-xs-6">
						                                        <label class="control-label f80 o80">Deductible fee</label>
						                                        <a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Deductible fee" data-content="Deductible fee is the amount you have to pay when you claim your insurance coverage. Also known as Participation Fee.">
						<i class="icon i-action-info-circle-solid"></i>
						<i class="icon i-action-info-circle"></i>
						</a>
						                                    </div>
						                                    <div class="col-sm-12 col-xs-6 o80">
						                                        <h4 class="m-y-0">
						                                            <small>PHP</small>
						                                            <span data-bind="visible: Risk[0].Deductible_text != null, text: Risk[0].Deductible_NoCurrencyText"></span>
						                                        </h4>
						                                    </div>
						                                </div>
						                            </div>
						                            <div class="col-sm-4">
						                                <div class="row">
						                                    <div class="col-sm-12 col-xs-6">
						                                        <label class="control-label f80 o80">Annual Premium</label>
						                                        <a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="Annual Premium" data-content="Annual Premium is the total amount per year that you need to pay for your motor insurance vehicle inclusive of government fees such as documentary stamps, value added tax, and local government tax.">
						<i class="icon i-action-info-circle-solid"></i>
						<i class="icon i-action-info-circle"></i>
						</a>
						                                    </div>
						                                    <div class="col-sm-12 col-xs-6 o80">
						                                        <h4 class="m-y-0">
						                                            <small>PHP</small>
						                                                <span data-bind="text: T2Indigo.Locale.FormatNumber(TotalPremiumIncludingFees, 2)"></span>
						                                        </h4>
						                                        <small data-bind="visible: (ClosingBenefitRemarks != null && ClosingBenefitRemarks != ''), text: ClosingBenefitRemarks"></small>
						                                    </div>
						                                </div>
						                            </div>
						                        </div>
						                        <div class="result-border-top p-y-05x m-t-05x hidden-xs">
						                            <label class="control-label f80 o80">Motorshops: </label>
						                            <strong class="f80 o80" data-bind="html: NumberOfWorkshopsInRegionSentence"></strong>
						                        </div>
						                    </div>
						                </div>
						                <div class="result-features result-border-top p-t-2x hidden-xs">
						                    <ul class="tick-list o80 f80">
						                        <!-- ko foreach: ko.observableArray(Keys).filterByProperty('KeyTypeId', 2) -->
						                        <li data-bind="text: DisplayedRemarks"></li>
						                        <!-- /ko -->
						                        <!-- ko foreach: ko.observableArray(Keys).filterByProperty('KeyTypeId', 1) -->
						                        <li class="minus" data-bind="text: DisplayedRemarks"></li>
						                        <!-- /ko -->
						                    </ul>
						                </div>
						            </div>
						            <div class="result-content-bot">
						                <div class="result-tabs-container">
						                    <ul class="nav nav-tabs">
						                        <li class="active">
						                            <a data-toggle="tab" id="coverage-tab" href="#coverage" aria-controls="coverage">Coverage and Premium Summary</a>
						                        </li>
						                        <li>
						                            <a data-toggle="tab" id="motorshop-tab" href="#motorshop" aria-controls="motorshop">Nearest Accredited Motorshops</a>
						                        </li>
						                        <li>
						                            <a data-toggle="tab" id="addon-tab" href="#addon" aria-controls="addon">Free add-ons</a>
						                        </li>

						                    </ul>
						                    <div class="tab-content">
						                        <div class="tab-pane fade in active" id="coverage">
						                            <table class="table table-striped">
						                                <tbody>
						                                    <tr>
						                                        <th colspan="3">Coverage</th>
						                                        <th>Price</th>
						                                        <th>Cover limits</th>
						                                        <th>Deductible fee</th>
						                                    </tr>
						                                    <tr>
						                                        <th>Main Coverage</th>
						                                        <td colspan="2" data-bind="text: (CoverageTypeId == 1 ? 'Comprehensive' : 'CPTL' )"></td>
						                                        <td data-bind="text: Risk[0].DisplayedPriceLoaded"></td>
						                                        <td data-bind="text: Risk[0].DisplayedCoverValue"></td>
						                                        <td data-bind="text: (Risk[0].Deductible_text ? Risk[0].Deductible_text : ' ')"></td>
						                                    </tr>
						                                </tbody>
						                                <tbody data-bind="foreach: ko.observableArray(Risk).filterByProperty('RiskTypeId', 1, true)">
						                                    <tr>
						                                        <th data-bind="visible : $index() == 0, attr: { 'rowSpan':  ko.observableArray($parent.Risk).filterByProperty('RiskTypeId', 1, true)().length }">Other coverage</th>
						                                        <td colspan="2" data-bind="text: DisplayedName"></td>
						                                        <td data-bind="text: DisplayedPriceLoaded"></td>
						                                        <td data-bind="text: DisplayedCoverValue"></td>
						                                        <td data-bind="text: (Deductible_text ? Deductible_text : ' ')"></td>
						                                    </tr>
						                                </tbody>
						                                <tbody>
						                                    <tr>
						                                        <th colspan="3">Premium</th>
						                                        <th data-bind="text: DisplayedAnnualPremium"></th>
						                                        <th></th>
						                                        <th></th>
						                                    </tr>
						                                </tbody>
						                                <tbody data-bind="foreach: ko.observableArray(AddOn).filterByProperty('isPackage', false)">
						                                    <tr>
						                                        <th data-bind="visible : $index() == 0, attr: { 'rowSpan':  ko.observableArray($parent.AddOn).filterByProperty('isPackage', false)().length }">Additional coverages</th>
						                                        <td colspan="2" data-bind="text: DisplayedName"></td>
						                                        <td data-bind="text: DisplayedPriceLoaded"></td>
						                                        <td data-bind="text: DisplayedCoverValue"></td>
						                                        <td data-bind="text: (Deductible_text ? Deductible_text : ' ')"></td>
						                                    </tr>
						                                </tbody>
						                                <tbody>
						                                    <tr>
						                                        <th colspan="3">Total additional premium</th>
						                                        <th data-bind="text: DisplayedTotalAdditionalPremium"></th>
						                                        <th></th>
						                                        <th></th>
						                                    </tr>
						                                    <tr>
						                                        <th colspan="3">Doc Stamps, EVAT, Local Gov&#39;t Tax</th>
						                                        <th data-bind="text: DisplayedTotalFees"></th>
						                                        <th></th>
						                                        <th></th>
						                                    </tr>
						                                    <tr>
						                                        <th colspan="3">Total Annual Premium</th>
						                                            <th data-bind="text: DisplayedCoverTotalPremiumIncludingFees"></th>
						                                        <th></th>
						                                        <th></th>
						                                    </tr>
						                                </tbody>
						                            </table>
						                        </div>
						                        <div class="tab-pane fade" id="motoshop">
						                            <table class="table table-striped">
						                                <thead>
						                                    <tr class="emphasized">
						                                        <th>Motorshop</th>
						                                        <th>Address</th>
						                                        <th>Contact details</th>
						                                        <th>Remarks</th>
						                                    </tr>
						                                </thead>
						                                <tbody data-bind="foreach : $root._workshopList">
						                                    <!-- ko foreach : $data -->
						                                    <!-- ko if : $CompanyId == $parentContext.$parent.CompanyId-->
						                                    <tr>
						                                        <td data-bind="text: WorkshopDisplayedName"></td>
						                                        <td data-bind="text: Address"></td>
						                                        <td data-bind="text: Telephone"></td>
						                                        <td data-bind="text: Remarks"></td>
						                                    </tr>
						                                    <!-- /ko -->
						                                    <!-- /ko -->
						                                </tbody>
						                            </table>
						                        </div>
						                        <div class="tab-pane fade" id="addon">                                                    <table class="table table-striped">
						                                <thead>
						                                    <tr>
						                                        <th width="30%">Add-on / feature</th>
						                                        <th width="70%">Remark</th>
						                                    </tr>
						                                </thead>
						                                <tbody>
						                                    <!-- ko foreach: ko.observableArray(AddOn).filterByProperty('isPackage', true)().slice(0, ko.observableArray(AddOn).filterByProperty('isPackage', true)().length / 2 + 1) -->
						                                    <tr>
						                                        <td><div data-bind="text: DisplayedName"></div></td>
						                                        <td><div data-bind="text: AddonText"></div></td>
						                                    </tr>
						                                    <!-- /ko -->
						                                    <!-- ko foreach: ko.observableArray(AddOn).filterByProperty('isPackage', true)().slice(ko.observableArray(AddOn).filterByProperty('isPackage', true)().length / 2 + 1) -->
						                                    <tr data-bind="visible: isPackage">
						                                        <td><div data-bind="text: DisplayedName"></div></td>
						                                        <td><div data-bind="text: AddonText"></div></td>
						                                    </tr>
						                                    <!-- /ko -->
						                                </tbody>
						                            </table>
						                        </div>

						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
						</div>
					</script>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
@section('scripts')
<script>
	$(document).on('shown.bs.collapse', '.result-content-bot', function() {
	    var id = $(this).closest(".result-content-bot").attr("id");
	    var $ele = $('#x'+id);
	    $ele.html('<span>Close Details</span><i class="icon i-arrow-up close-button"></i>');
	});

	$(document).on('hidden.bs.collapse', '.result-content-bot', function() {
	    var id = $(this).closest(".result-content-bot").attr("id");
	    var $ele = $('#x'+id);
	    $ele.html('<span>More Details</span><i class="icon i-arrow-down close-button"></i>');
	});

	$(document).on('click', '.comparisonCheckbox', function(){
	    var $parent = $(this).closest('.result-item.result-row');
	    $parent.toggleClass('active');
	});

	$(document).on('click', '.nav.nav-tabs li', function(){
	    $(this).siblings().attr('class', 'inactive').end().toggleClass('inactive active');
	});

</script>
<script>
	$(document).ready(function(){
	    loadInsurers();
	});

	$('#OptimizeInsuredValueAmount').on('change', function(){
	    loadInsurers();
	});

	$('#BICover_Amount').on('change', function(){
	    loadInsurers();
	});

	$('#PDCover_Amount').on('change', function(){
	    loadInsurers();
	});

	$('#HasAOG').on('change', function(){
	    loadInsurers();
	});


	function loadInsurers() {
	    var _price = $('#OptimizeInsuredValueAmount').val();
	    var _bi = $('#BICover_Amount').val();
	    var _pd = $('#PDCover_Amount').val();
	    var _aog = $('#HasAOG').is(":checked");
	    var _vType = $('#VehicleType').val();
	    // var _aograte = _vType==1?0.005:0.003;

	    $.ajax({
	        method: "get",
	        url: "/query/insurer",
	        // data: { price: _price, bi: _bi, pd: _pd, aog: _aog, aograte: _aograte },
	        data: { price: _price, bi: _bi, pd: _pd, type: _vType},
	        success: function(data, textStatus) {
	            $(".result-row-container").html(data);
	        },
	        error: function() {
	            alert('Not OKay');
	        }
	    });
	}

</script>
@endsection
