<!DOCTYPE html>
<!-- saved from url=(0134)dashboard.html?_ga=2.161303871.304443683.1547307201-170644528.1545894064 -->
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="apple-touch-icon" sizes="76x76" href="https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img//apple-icon.png">
		<link rel="icon" type="image/png" href="https://demos.creative-tim.com/paper-dashboard-2-pro/assets/img//favicon.png">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>
			@yield('title') | eCompaMore.com
		</title>
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport">
        @include('admin.includes.styles')
        @yield('styles')
	<body class="">
		<div class="wrapper ">
            @include('admin.includes.sidebar')
			<div class="main-panel ps-container ps-theme-default">
				<!-- Navbar -->
				<nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
					<div class="container-fluid">
						<div class="navbar-wrapper">
							<div class="navbar-minimize">
								<button id="minimizeSidebar" class="btn btn-icon btn-round">
								<i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>
								<i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
								</button>
							</div>
							<div class="navbar-toggle">
								<button type="button" class="navbar-toggler">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
								</button>
							</div>
							<a class="navbar-brand" href="#"></a>
						</div>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-bar navbar-kebab"></span>
						<span class="navbar-toggler-bar navbar-kebab"></span>
						<span class="navbar-toggler-bar navbar-kebab"></span>
						</button>
						<div class="collapse navbar-collapse justify-content-end" id="navigation">
							<form>
								<div class="input-group no-border">
									<input type="text" value="" class="form-control" placeholder="Search...">
									<div class="input-group-append">
										<div class="input-group-text">
											<i class="nc-icon nc-zoom-split"></i>
										</div>
									</div>
								</div>
							</form>
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link btn-magnify" href="#">
										<i class="nc-icon nc-layout-11"></i>
										<p>
											<span class="d-lg-none d-md-block">Stats</span>
										</p>
									</a>
								</li>
								<li class="nav-item btn-rotate dropdown">
									<a class="nav-link dropdown-toggle" href="http://example.com/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i class="nc-icon nc-bell-55"></i>
										<p>
											<span class="d-lg-none d-md-block">Some Actions</span>
										</p>
									</a>
									<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
									</div>
								</li>
								<li class="nav-item">
									<a class="nav-link btn-rotate" href="#">
										<i class="nc-icon nc-settings-gear-65"></i>
										<p>
											<span class="d-lg-none d-md-block">Account</span>
										</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
                </nav>

				<div class="content">
                    @yield('content')
				</div>
				<footer class="footer footer-black  footer-white ">
					<div class="container-fluid">
						<div class="row">
							<nav class="footer-nav">
								<ul>
									<li>
										<a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
									</li>
									<li>
										<a href="http://blog.creative-tim.com/" target="_blank">Blog</a>
									</li>
									<li>
										<a href="https://www.creative-tim.com/license" target="_blank">Licenses</a>
									</li>
								</ul>
							</nav>
							<div class="credits ml-auto">
								<span class="copyright">
									©
									<script>
										document.write(new Date().getFullYear())
									</script>2019, made with <i class="fa fa-heart heart"></i> by Creative Tim
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
        </div>
        @include('admin.includes.scripts')
        @yield('scripts')
	</body>
</html>
