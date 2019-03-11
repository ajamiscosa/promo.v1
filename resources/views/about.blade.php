@extends('app')
@section('content')
<nav class="breadcrumb">
        <ol typeof="BreadcrumbList" vocab="http://schema.org/">
            <li typeof="ListItem" property="itemListElement">
                <a title="" typeof="WebPage" property="item" href="/">
                    <span property="name">Home</span>
                    <meta content="1" property="position">
                </a>
            </li>
            <li typeof="ListItem" property="itemListElement">
                <a title="" typeof="WebPage" property="item" href="/about-us">
                    <span property="name">About Us</span>
                    <meta content="2" property="position">
                </a>
            </li>
        </ol>
    </nav>
    <main class="main" role="main">
        <article class="article article-sidebar">
            <div class="content">
                <h1>About Us</h1>
                <p>eCompaMore.com is the country’s leading and complete comparison portal intended for Filipinos looking for quick, secure, and complete banking and insurance information in the Philippines. Customers are provided with detailed information about their preferred credit cards (credit limit, promos &amp; discounts, annual fee, and more) and insurances (coverage and premium) to help them find the perfect product that suits their lifestyle.</p>
                <p>At eCompaMore.com, we continue to expand our reach and update our directory of resources to provide our customers with a complete list of financial consumer products on the market. Furthermore, we offer free financial consultation through a call with highly-trained call center agents, live chat support, and other multimedia portals.</p>
                <p>The name eCompaMore.com came from a play of words in Filipino, which translates to “compare it.” With eCompaMore.com, you will get neutral and transparent comparison of the latest financial and insurance products on the market, allowing you to save time and money from needless efforts in looking for the best financial product for you.</p>
                <h2>Why eCompaMore.com?</h2>
                <p>eCompaMore.com is the country’s finest financial comparison website, allowing Filipinos to make comparison of different financial products on the market. While there are already several comparison websites out there that cater to the Filipino consumers, eCompaMore.com stands out from the competition because of the following characteristics:</p>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Complete</h4>
                        <p>With eCompaMore.com’s advance calculation engine, you will only get a list of financial products that are up to date and relevant to your search queries. Use the engine’s variables such as amount, annual income, and other search factors to get the best product suited to your needs.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Convenient</h4>
                        <p>Need the fastest and easiest way to secure a loan approval? eCompaMore.com will help you find the best loans that provide the fastest loan approval rate. Furthermore, our 24/7 online web services give you access to financial product comparison wherever, wherever.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Reliable</h4>
                        <p>eCompaMore.com’s in-house financial experts will assist you in every step of the way and help increase the chance of your application getting approved. Our highly-trained contact center agents and financial experts will answer all your queries regarding the products and services we offer.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Secure</h4>
                        <p>At eCompaMore.com, we value your privacy and the confidentiality of all the information you share to us. All your personal and financial records will remain safe in our hands, and we will not share any information without your consent.</p>
                    </div>
                </div>
            </div>
            <aside class="sidebar">
                <div class="widget help-desk-widget">
                    <h4>Need Help?</h4>
                    <p>Contact our in-house experts for more details about our financial services. <strong><i class="icon i-display-phone-right i-3x"></i>(02) 779 6912</strong> <span>Monday - Friday 9:00 am - 6:00 pm</span></p>
                    <div class="widget-action"><a class="btn btn-default btn-block" data-toggle="modal" data-target="#call-schedule" data-dynamic-modal="dynamic" data-verticalid="0" data-affiliate="F6942773-AD7A-4FF5-AD50-5A496D8AFF1C" data-referrer="/about-us"><span>Contact Me</span></a></div>
                </div>
            </aside>
        </article>
    </main>
@endsection