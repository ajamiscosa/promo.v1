<!DOCTYPE html>
<html lang="en" class="fonts-loaded">
	<head>
        <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta http-equiv="Content-Language" content="en">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>@yield('title')</title>
		<meta name="keywords" content="vehicle insurance,car insurance,auto insurance,comprehensive car insurance">
		<meta name="msapplication-TileColor" content="#ffffff">
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="home" href="/">
		<link href="{{ asset('css/fontawesome.min.css') }}" rel="stylesheet" type="text/css">
		<link href="{{ asset('css/portal.css') }}" rel="stylesheet" type="text/css">
		@yield('styles')
		<style>
			body.modal-open {
				overflow: visible !important;
				position: absolute !important;
				width: 100%;
				height:100%;
			}

		</style>
	</head>
	<body>
		<div class="layout">
			@include('includes.header')
			<div class="layout-content">
				@yield('content')
                @include('includes.footer')
			</div>
			<div class="layout-drawer" role="drawer">
				<div class="head">
					<div class="drawer-close"><i class="icon i-arrow-right i-2x">Close panel</i></div>
					<ul class="nav tab-menu tab-menu-drawer" data-toggle="tabs" role="tablist">
						<li class="nav-item"><a id="account-tab" class="nav-link login-text" aria-controls="drawer-account" role="tab" data-toggle="tab" data-section="#section-welcome" href="/Account/Login?returnUrl=/vehicle-insurance"><i class="icon i-action-account i-2x">My Account</i></a></li>
						<li class="nav-item active"><a class="nav-link" aria-controls="drawer-menu" role="tab" data-toggle="tab"><i class="icon i-action-hamburger i-2x">Menu</i></a></li>
					</ul>
				</div>
				<div class="body">
					<div class="tabs tab-panel">
						<div class="tab active" id="drawer-menu" role="tabpanel">
							<nav class="menu drawer-menu" role="navigation">
								<h5>Credit Cards</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="CreditCardMenuMobile" href="/credit-card/" class="nav-link">Credit Card</a></li>
									<li class="nav-item"><a id="CreditCardTypesMenuMobile" href="/credit-card/credit-card-types-and-features" class="nav-link">Credit Card Types and Features</a></li>
									<li class="nav-item"><a id="CreditCardApplyMenuMobile" href="/credit-card/how-to-apply-for-credit-card-in-the-philippines" class="nav-link">How to apply for a credit card in the Philippines</a></li>
								</ul>
							</nav>
							<nav class="menu drawer-menu" role="navigation">
								<h5>Loans</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="PersonalLoanMenuMobile" href="/personal-loan" class="nav-link">Personal Loan</a></li>
									<li class="nav-item"><a id="OfwMenuMobile" href="/ofw-loan" class="nav-link">OFW Loan</a></li>
									<li class="nav-item"><a id="HousingLoanMenuMobile" href="/housing-loan" class="nav-link">House Loan</a></li>
									<li class="nav-item"><a id="AutoLoanMenuMobile" href="/auto-loan" class="nav-link">Auto Loan</a></li>
								</ul>
							</nav>
							<nav class="menu drawer-menu" role="navigation">
								<h5>Insurance &amp; Protection</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="VehicleInsuranceMenuMobile" href="/vehicle-insurance" class="nav-link">Vehicle Insurance</a></li>
									<li class="nav-item"><a id="CTPLInsuranceSubMenu" href="/vehicle-insurance/ctpl" class="nav-link">CTPL Insurance</a></li>
									<li class="nav-item"><a id="PropertyInsuranceMenuMobile" href="/property-insurance" class="nav-link">Property Insurance</a></li>
									<li class="nav-item"><a id="HealthInsuranceMenuMobile" href="/health-insurance" class="nav-link">Health Insurance</a></li>
									<li class="nav-item"><a id="PrepaidHealthInsuranceMenuMobile" href="/health-insurance/prepaid-healthcard" class="nav-link">Prepaid Health Insurance</a></li>
									<li class="nav-item"><a id="TravelInsuranceMenuMobile" href="/travel-insurance" class="nav-link">Travel Insurance</a></li>
									<li class="nav-item"><a id="PersonalAccidentInsuranceMenuMobile" href="/personal-accident-insurance" class="nav-link">Personal Accident Insurance</a></li>
								</ul>
							</nav>
							<nav class="menu drawer-menu" role="navigation">
								<h5>Business Loan</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="BusinessLoanMenuMobile" href="/business-loans" class="nav-link">Business Loans</a></li>
									<li class="nav-item"><a id="SmallBusinessBankMenuMobile" href="/small-business-banking" class="nav-link">Small Business Banking</a></li>
									<li class="nav-item"><a id="SmallBusinessInsuranceMenuMobile" href="/small-business-insurance" class="nav-link">Small Business Insurance</a></li>
								</ul>
							</nav>
							<nav class="menu drawer-menu" role="navigation">
								<h5>Other Services</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="AskAnExpertMenuMobile" href="/info/ask-expert" class="nav-link">Ask an Expert</a></li>
									<li class="nav-item"><a id="PromotionsMenuMobile" href="/info/promo" class="nav-link">Promotions</a></li>
									<li class="nav-item"><a id="BlogMenuMobile" href="/info" class="nav-link">Blog</a></li>
								</ul>
							</nav>
							<nav class="menu drawer-menu" role="navigation">
								<h5>About Us</h5>
								<ul class="nav nav-tree">
									<li class="nav-item"><a id="AboutUs" href="/about-us" class="nav-link">About eCompareMo</a></li>
									<li class="nav-item"><a id="PressRelease" href="/about-us/ecomparemo-press-release" class="nav-link">Press Releases</a></li>
									<li class="nav-item"><a id="Media" href="/about-us/media" class="nav-link">Media</a></li>
									<li class="nav-item"><a id="PressKit" href="/about-us/press-kit" class="nav-link">Press Kit</a></li>
									<li class="nav-item"><a id="TermsConditions" href="/terms-conditions" class="nav-link">Terms &amp; Conditions</a></li>
									<li class="nav-item"><a id="PrivacyPolicy" href="/privacy-policy" class="nav-link">Privacy Policy</a></li>
								</ul>
							</nav>
						</div>
						<div class="tab" id="drawer-account" role="tabpanel">
							<div class="sections section-panel" data-toggle="sections" data-primary="section-welcome">
								<div class="section section-welcome active" id="section-welcome">
									<figure class="avatar"><img src="{{ asset('images/welcome-avatar@2x.png') }}" width="82" height="82" alt="Sign in to your Account"></figure>
									<h5 class="h3">Sign in to your Account</h5>
									<p>Access your account and fill out forms with required information in an instant.</p>
									<a class="btn btn-default btn-lg btn-block" rel="nofollow" href="/Account/Login?returnUrl=">Sign In</a>
									<div class="divider"><span>OR</span></div>
									<a class="btn btn-ghost-default btn-lg btn-block" rel="nofollow" href="https://calcer.ecomparemo.com/account/Register">Register</a>
								</div>
								<div class="section section-login" id="section-login">
									<form class="login-form drawer-form" action="/" method="post" data-action="login-form" role="form" novalidate="novalidate">
										<fieldset>
											<h5 class="h3">Sign in</h5>
											<div class="form-group badge-username"><label for="login-username">Username</label> <input type="text" class="text required form-control" name="login-username" id="login-username" tabindex="1" value=""></div>
											<div class="form-group badge-secured"><label for="login-password">Password</label> <input type="password" class="text required form-control" name="login-password" id="login-password" tabindex="2" value=""></div>
											<button type="submit" class="btn btn-default btn-lg btn-block" name="submit" tabindex="3" data-label="Sign In">Sign In</button> <span class="btn-label"><a class="link" rel="nofollow" aria-controls="section-password" data-toggle="section">Forgot your password?</a></span>
										</fieldset>
									</form>
								</div>
								<div class="section section-register" id="section-register">
									<form class="register-form drawer-form" action="/" method="post" data-action="register-form" role="form" novalidate="novalidate">
										<fieldset>
											<h5 class="h3">Create an Account</h5>
											<div class="form-group badge-secured"><label for="register-email">Email</label> <input type="email" class="text required form-control" name="register-email" id="register-email" tabindex="1" autocapitalize="off" autocorrect="off" value=""></div>
											<div class="form-group"><label for="register-password-one">Password</label> <input type="password" class="text required form-control" name="register-password-one" id="register-password-one" tabindex="2" value=""></div>
											<div class="form-group"><label for="register-password-two">Password repeat</label> <input type="password" class="text required form-control" name="register-password-two" id="register-password-two" tabindex="3" value="" aria-autocomplete="list"></div>
											<button type="submit" class="btn btn-default btn-lg btn-block" name="submit" tabindex="4" data-label="Create Account">Create Account</button>
											<div class="divider"><span>OR</span></div>
											<a class="btn btn-ghost-default btn-lg btn-block" aria-controls="section-welcome" data-toggle="section">Cancel</a>
										</fieldset>
									</form>
								</div>
								<div class="section section-password" id="section-password">
									<form class="password-form drawer-form" action="/" method="post" data-action="password-form" role="form" novalidate="novalidate">
										<fieldset>
											<h5 class="h3">Forgot your password</h5>
											<p>Please type your email address and we will reset your password for you. Instructions will be emailed to your email account.</p>
											<div class="form-group badge-secured"><label for="request-email">Email</label> <input type="email" class="text required form-control" name="request-email" id="request-email" tabindex="1" autocapitalize="off" autocorrect="off" value=""></div>
											<button type="submit" class="btn btn-default btn-lg btn-block" name="submit" tabindex="2" data-label="Reset Password">Reset Password</button>
											<div class="divider"><span>OR</span></div>
											<a class="btn btn-ghost-default btn-lg btn-block" aria-controls="section-login" data-toggle="section">Cancel</a>
										</fieldset>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal modal-promo" id="account-modal" tabindex="-1" aria-hidden="true" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Access your Account</h4>
							<a class="modal-close" data-dismiss="modal" aria-label="Close"><i class="icon i-action-cross-thin i-1x">Close dialog</i></a>
						</div>
						<div class="modal-body">
							<form class="login-modal-form modal-form" action="/" method="post" data-action="login-modal-form" role="form" novalidate="novalidate">
								<fieldset>
									<h4 class="form-title">Social Media Login</h4>
									<div class="columns columns-triple columns-xs-stacked">
										<div class="column column-1"><button type="submit" class="btn btn-symbol btn-facebook btn-block" id="facebook-provider" name="provider" value="Facebook" title="Log in using your Facebook account"> <span class="symbol"><i class="icon i-social-facebook i-3x"></i></span>Facebook </button></div>
										<div class="column column-2"><button type="submit" class="btn btn-symbol btn-twitter btn-block" id="twitter-provider" name="provider" value="Twitter" title="Log in using your Twitter account"> <span class="symbol"><i class="icon i-social-twitter i-3x"></i></span>Twitter </button></div>
										<div class="column column-3"><button type="submit" class="btn btn-symbol btn-google btn-block" id="google-provider" name="provider" value="Google" title="Log in using your Google account"> <span class="symbol"><i class="icon i-social-google i-3x"></i></span>Google </button></div>
									</div>
									<div class="divider"><span>OR</span></div>
									<h4 class="form-title">Account Login</h4>
									<div class="columns">
										<div class="column column-1">
											<div class="form-group badge-username"><label for="login-username-modal">Username</label> <input type="text" class="text required form-control form-highlight" name="login-username-modal" id="login-username-modal" tabindex="1" value=""></div>
										</div>
										<div class="column column-2">
											<div class="form-group badge-secured"><label for="login-password-modal">Password</label> <input type="password" class="text required form-control form-highlight" name="login-password-modal" id="login-password-modal" tabindex="2" value=""></div>
										</div>
									</div>
									<button type="submit" class="btn btn-default btn-lg btn-block" name="submit" tabindex="3" data-label="Sign In">Sign In</button>
									<div class="btn-label m-b-0"><span class="pull-left"><a class="link">Forgot your password?</a></span> <span class="pull-right">Don't have and account yet? <a class="link">Get started</a></span></div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="layout-backdrop"></div>
			<div class="date-dialog date-wizard date-modal">
				<div class="calendar">
					<div class="date-picker" id="date-pickrer-modal-calendar"></div>
					<div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update</span></a></div>
				</div>
			</div>
			<div class="date-dialog date-wizard date-modal">
				<div class="calendar">
					<div class="date-picker" id="date-picker2-modal-calendar"></div>
					<div class="date-action"><a class="btn btn-default btn-block" title="Update calendar"><span>Update</span></a></div>
				</div>
			</div>
			<div class="modal modal-lg fade" id="call-schedule" tabindex="-1" aria-hidden="true" role="dialog">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title" data-label="Call Schedule">Call Schedule</h4>
							<a class="modal-close" data-dismiss="modal" aria-label="Close"><i class="icon i-action-cross-thin i-1x" id="ModalClose">Close Dialog</i></a>
						</div>
						<div class="modal-body">
							<aside class="promo promo-flex promo-30x70">
								<div class="container">
									<div class="promo-content">
										<form class="schedule-modal-form modal-form ajax-form" action="/vehicle-insurance#" method="post" data-action="schedule-modal-form" role="form" data-role="call-schedule" novalidate="novalidate" data-serviceurl="https://affiliateservice.ecomparemo.com" data-company="" data-product="" data-vertical="" data-verticalid="" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" data-ganame="">
											<fieldset>
												<p class="m-b-2x modal-label-content" data-label="Please fill in your contact details and eCompareMo&#39;s customer service will get back to you, at your preferred appointment time.">Please fill in your contact details and eCompareMo's customer service will get back to you, at your preferred appointment time.</p>
											</fieldset>
											<p class="m-b-05x f90 font-base">Consent for storing personal data:</p>
											<div class="checkbox plain"><label class="m-b-2x f80 text-justify"> <input type="checkbox" id="schedule-consent" name="schedule-consent" data-validate="required-agreement" tabindex="16"> <label for="schedule-consent" style="display:inline"> I allow eCompareMo to collect, store and process my personal information - including but not limited to my name, address, phone number, email, etc., as supplied for transactions on this website. Transactions may include cookie placement, personalized offers, enrollment in its newsletter and others. The use and processing of my information shall be in accordance with applicable laws and eCompareMo’s <a href="/terms-conditions" target="_blank">Terms and Conditions</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>, which I confirm to have read and understood. I also authorize the bank to share with eCompareMo the status of my application, final credit decision and details of the account, if approved. </label> </label></div>
											<div class="form-action align-right"><button id="ContactMe-Submit" type="submit" class="btn btn-secondary" name="submit" tabindex="17" data-label="Call me Back">Call me Back</button></div>
										</form>
										<div class="ajax-success">
											<h5 class="h2 m-t-0 m-b-2x" data-text="Thank you, {0}!">Thank you</h5>
											<p class="m-b-4x">Within 24 hours, an eCompareMo customer service specialist will contact you from the number you provided. Please answer our call so we can complete information requirements necessary to process your application.</p>
											<div class="text-right text-xs-center"><a class="btn btn-info" data-dismiss="modal" aria-label="Close">Close Dialog</a></div>
										</div>
									</div>
									<div class="promo-graphic">
										<figure class="cover-photo contain-width cover-left-bottom" style="background-image:url(https://cdn-vz-main.ecomparemo.com/media/Default/eCompareMo/call-schedule-banner-long.png)"></figure>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>
			@yield('modal')
			<a class="anchor elevator" data-action="elevator" style="display: inline;"><i class="icon i-arrow-up-mini i-3x">Back to top</i></a>
		</div>
		<script type='text/javascript' src="{{ asset('js/tooltip.min.js') }}"></script>
		<script type='text/javascript' src="{{ asset('js/jquery.min.js') }}"></script>
		<script type='text/javascript' src="{{ asset('js/popper.min.js') }}"></script>
		<script type='text/javascript' src="{{ asset('js/bootstrap.min.js') }}"></script>
		<script type='text/javascript' src="{{ asset('js/fontawesome.min.js') }}"></script>
		{{-- <script type='text/javascript' src="{{ asset('js/libraries.js') }}"></script> --}}
		{{-- <script type='text/javascript' src="{{ asset('js/custom.js') }}"></script> --}}
		@yield('scripts')
		<script>
			$(document).ready(function() {
				$('#HeaderCallScheduleModal').on('click', function(){
					$('#call-schedule').modal('toggle');
				});
			});
			$(document).ready(function(){
				$(window).scroll(function () {
						if ($(this).scrollTop() > 50) {
							$('.elevator').fadeIn();
						} else {
							$('.elevator').fadeOut();
						}
					});
					// scroll body to 0px on click
					$('.elevator').click(function () {
						$('.elevator').tooltip('hide');
						$('body,html').animate({
							scrollTop: 0
						}, 800);
						return false;
					});

					$('.elevator').tooltip('show');

			});
		</script>
	</body>
</html>
