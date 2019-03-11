@extends('app')
@section('content')
<nav class="breadcrumb">
    <ol vocab="http://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">
            <a href="https://www.ecomparemo.com" property="item" typeof="WebPage" title="">
                <span property="name">Home</span>
                <meta property="position" content="1">
            </a>
        </li>
        <li property="itemListElement" typeof="ListItem">
            <a href="active" property="item" typeof="WebPage" title="">
                <span property="name">Login</span>
                <meta property="position" content="2">
            </a>
        </li>
    </ol>
</nav>
<main class="main" role="main">
    <article class="article article-sidebar">
        <div class="content">
            <h1>Login to your account</h1>
            @if ($errors->any())
                <div class="alert alert-danger alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <h4><i class="icon fa fa-ban"></i> Error!</h4>
                    @foreach ($errors->all() as $error)
                        <span>{{ $error }}</span>
                    @endforeach
                </div>
            @endif
            <form action="/login" method="post">
                {{ csrf_field() }}
                <h4 class="form-title">Account Login</h4>
                <div class="columns">
                    <div class="column column-1">
                        <div class="form-group badge-username">
                            <label class="control-label" for="login-username-modal">Username</label> 
                            <input class="text required form-control text-box single-line" id="FormModel_username" name="Username" tabindex="1" type="text" value=""></div>
                    </div>
                    <div class="column column-2">
                        <div class="form-group badge-secured">
                            <label class="control-label" for="login-password-modal">Password</label> 
                            <input class="text required form-control" id="FormModel_password" name="Password" tabindex="2" type="password">
                        </div>
                    </div>
                </div>
                <input type="submit" class="btn btn-default btn-lg btn-block" tabindex="3" value="Login">
                <div class="btn-label m-b-0">
                    <span class="pull-left"><a rel="nofollow" class="link" href="https://accounts.ecomparemo.com/Account/ForgotPassword">Forgot your password?</a></span> 
                    <span class="pull-right">Don't have an account? <a rel="nofollow" href="https://accounts.ecomparemo.com/Account/Register" class="link">Get Started</a></span>
                </div>
            </form>
        </div>
    </article>
</main>
@endsection