
<div class="sidebar" data-color="white" data-active-color="danger">
    <div class="logo">
        <a href="/" class="simple-text logo-mini">
            <div class="logo-image-small">
                <img src="{{ asset('admin/images/logo-small.png') }}">
            </div>
        </a>
        <a href="/" class="simple-text logo-normal">
            PROMO SITE
        </a>
    </div>
    <div class="sidebar-wrapper ps-container ps-theme-default">
        <div class="user">
            <div class="photo">
                <img src="{{ asset('admin/images/faces/ayo-ogunseinde-2.jpg') }}" />
            </div>
            <div class="info">
                <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                <span>
                Chet Faker
                <b class="caret"></b>
                </span>
                </a>
                <div class="clearfix"></div>
                <div class="collapse" id="collapseExample">
                    <ul class="nav">
                        <li>
                            <a href="#">
                            <span class="sidebar-mini-icon">MP</span>
                            <span class="sidebar-normal">My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span class="sidebar-mini-icon">EP</span>
                            <span class="sidebar-normal">Edit Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <span class="sidebar-mini-icon">S</span>
                            <span class="sidebar-normal">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ul class="nav">
            <li id="admin">
                <a href="">
                    <i class="nc-icon nc-bank"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a data-toggle="collapse" href="#transactions" class="collapsed">
                    <i class="nc-icon nc-badge"></i>
                    <p>
                        Transactions
                        <b class="caret"></b>
                    </p>
                </a>
                <div class="collapse" id="transactions" style="">
                    <ul class="nav">
                        <li id="vehicle-insurance">
                            <a href="/dashboard/vehicle-insurance" id="vehicle-insurance">
                            <span class="sidebar-mini-icon">V</span>
                            <span class="sidebar-normal"> Vehilcle Insurance </span>
                            </a>
                        </li>
                        <li id="ctpl-insurance">
                            <a href="/dashboard/ctpl-insurance">
                            <span class="sidebar-mini-icon">C</span>
                            <span class="sidebar-normal"> CTPL Insurance </span>
                            </a>
                        </li>
                        <li id="personal-accident-insurance">
                            <a href="/dashboard/personal-accident-insurance">
                            <span class="sidebar-mini-icon">P</span>
                            <span class="sidebar-normal"> Personal Accident Insurance </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/dashboard/accounts">
                    <i class="nc-icon nc-circle-10"></i>
                    <p>User Accounts</p>
                </a>
            </li>
            <li>
                <a data-toggle="collapse" href="#settings" class="collapsed">
                    <i class="nc-icon nc-settings"></i>
                    <p>
                        Settings
                        <b class="caret"></b>
                    </p>
                </a>
                <div class="collapse" id="settings" style="">
                    <ul class="nav">
                        <li>
                            <a href="timeline.html">
                            <span class="sidebar-mini-icon">V</span>
                            <span class="sidebar-normal"> Vehilcle Insurance </span>
                            </a>
                        </li>
                        <li>
                            <a href="login.html">
                            <span class="sidebar-mini-icon">C</span>
                            <span class="sidebar-normal"> CTPL Insurance </span>
                            </a>
                        </li>
                        </li>
                        <li>
                            <a href="login.html">
                            <span class="sidebar-mini-icon">P</span>
                            <span class="sidebar-normal"> Personal Accident Insurance </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>
