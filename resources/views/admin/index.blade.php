@extends('admin.app')
@section('title','Dashboard')
@section('content')
<div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-5 col-md-4">
                            <div class="icon-big text-center icon-warning">
                                <i class="nc-icon nc-globe text-warning"></i>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p class="card-category">Capacity</p>
                                <p class="card-title">150GB
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-refresh"></i> Update Now
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-5 col-md-4">
                            <div class="icon-big text-center icon-warning">
                                <i class="nc-icon nc-money-coins text-success"></i>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p class="card-category">Revenue</p>
                                <p class="card-title">$ 1,345
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-calendar-o"></i> Last day
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-5 col-md-4">
                            <div class="icon-big text-center icon-warning">
                                <i class="nc-icon nc-vector text-danger"></i>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p class="card-category">Errors</p>
                                <p class="card-title">23
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-clock-o"></i> In the last hour
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-5 col-md-4">
                            <div class="icon-big text-center icon-warning">
                                <i class="nc-icon nc-favourite-28 text-primary"></i>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p class="card-category">Followers</p>
                                <p class="card-title">+45K
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-refresh"></i> Update now
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-sm-6">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="numbers pull-left">
                                $34,657
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <span class="badge badge-pill badge-success">
                                +18%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <h6 class="big-title">total earnings in last ten quarters</h6>
                    <canvas id="activeUsers" width="355" height="163" class="chartjs-render-monitor" style="display: block; width: 355px; height: 163px;"></canvas>
                </div>
                <div class="card-footer">
                    <hr>
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="footer-title">Financial Statistics</div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <button class="btn btn-success btn-round btn-icon btn-sm">
                                <i class="nc-icon nc-simple-add"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="numbers pull-left">
                                169
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <span class="badge badge-pill badge-danger">
                                -14%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <h6 class="big-title">total subscriptions in last 7 days</h6>
                    <canvas id="emailsCampaignChart" width="355" height="163" class="chartjs-render-monitor" style="display: block; width: 355px; height: 163px;"></canvas>
                </div>
                <div class="card-footer">
                    <hr>
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="footer-title">View all members</div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <button class="btn btn-danger btn-round btn-icon btn-sm">
                                <i class="nc-icon nc-button-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="numbers pull-left">
                                8,960
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <span class="badge badge-pill badge-warning">
                                ~51%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <h6 class="big-title">total downloads in last 6 years</h6>
                    <canvas id="activeCountries" width="355" height="163" class="chartjs-render-monitor" style="display: block; width: 355px; height: 163px;"></canvas>
                </div>
                <div class="card-footer">
                    <hr>
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="footer-title">View more details</div>
                        </div>
                        <div class="col-sm-5">
                            <div class="pull-right">
                                <button class="btn btn-warning btn-round btn-icon btn-sm">
                                <i class="nc-icon nc-alert-circle-i"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card ">
                <div class="card-header ">
                    <h4 class="card-title">Global Sales by Top Locations</h4>
                    <p class="card-category">All products that were shipped</p>
                </div>
                <div class="card-body ">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/US.png') }}">
                                                </div>
                                            </td>
                                            <td>USA</td>
                                            <td class="text-right">
                                                2.920
                                            </td>
                                            <td class="text-right">
                                                53.23%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/DE.png') }}">
                                                </div>
                                            </td>
                                            <td>Germany</td>
                                            <td class="text-right">
                                                1.300
                                            </td>
                                            <td class="text-right">
                                                20.43%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/AU.png') }}">
                                                </div>
                                            </td>
                                            <td>Australia</td>
                                            <td class="text-right">
                                                760
                                            </td>
                                            <td class="text-right">
                                                10.35%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/GB.png') }}">
                                                </div>
                                            </td>
                                            <td>United Kingdom</td>
                                            <td class="text-right">
                                                690
                                            </td>
                                            <td class="text-right">
                                                7.87%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/RO.png') }}">
                                                </div>
                                            </td>
                                            <td>Romania</td>
                                            <td class="text-right">
                                                600
                                            </td>
                                            <td class="text-right">
                                                5.94%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag">
                                                    <img src="{{ asset('admin/images/BR.png') }}">
                                                </div>
                                            </td>
                                            <td>Brasil</td>
                                            <td class="text-right">
                                                550
                                            </td>
                                            <td class="text-right">
                                                4.34%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card  card-tasks">
                <div class="card-header ">
                    <h4 class="card-title">Tasks</h4>
                    <h5 class="card-category">Backend development</h5>
                </div>
                <div class="card-body ">
                    <div class="table-full-width table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" checked="">
                                            <span class="form-check-sign"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="img-row">
                                        <div class="img-wrapper">
                                            <img src="{{ asset('admin/images/ayo-ogunseinde-2.jpg') }}" class="img-raised">
                                        </div>
                                    </td>
                                    <td class="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                                    <td class="td-actions text-right">
                                        <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                        <i class="nc-icon nc-ruler-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                        <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox">
                                            <span class="form-check-sign"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="img-row">
                                        <div class="img-wrapper">
                                            <img src="{{ asset('admin/images/erik-lucatero-2.jpg') }}" class="img-raised">
                                        </div>
                                    </td>
                                    <td class="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                    <td class="td-actions text-right">
                                        <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                        <i class="nc-icon nc-ruler-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                        <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" checked="">
                                            <span class="form-check-sign"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="img-row">
                                        <div class="img-wrapper">
                                            <img src="{{ asset('admin/images/kaci-baum-2.jpg') }}" class="img-raised">
                                        </div>
                                    </td>
                                    <td class="text-left">Using dummy content or fake information in the Web design process can result in products with unrealistic
                                    </td>
                                    <td class="td-actions text-right">
                                        <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                        <i class="nc-icon nc-ruler-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                        <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox">
                                            <span class="form-check-sign"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="img-row">
                                        <div class="img-wrapper">
                                            <img src="{{ asset('admin/images/joe-gardner-2.jpg') }}" class="img-raised">
                                        </div>
                                    </td>
                                    <td class="text-left">But I must explain to you how all this mistaken idea of denouncing pleasure</td>
                                    <td class="td-actions text-right">
                                        <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                        <i class="nc-icon nc-ruler-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                        <i class="nc-icon nc-simple-remove"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="fa fa-refresh spin"></i> Updated 3 minutes ago
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card ">
                <div class="card-header ">
                    <h4 class="card-title">2018 Sales</h4>
                    <p class="card-category">All products including Taxes</p>
                </div>
                <div class="card-body ">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <canvas id="chartActivity" width="563" height="281" class="chartjs-render-monitor" style="display: block; width: 563px; height: 281px;"></canvas>
                </div>
                <div class="card-footer ">
                    <div class="legend">
                        <i class="fa fa-circle text-info"></i> Tesla Model S
                        <i class="fa fa-circle text-danger"></i> BMW 5 Series
                    </div>
                    <hr>
                    <div class="stats">
                        <i class="fa fa-check"></i> Data information certified
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3">
            <div class="card ">
                <div class="card-header ">
                    <h5 class="card-title">Email Statistics</h5>
                    <p class="card-category">Last Campaign Performance</p>
                </div>
                <div class="card-body ">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <canvas id="chartDonut1" class="ct-chart ct-perfect-fourth chartjs-render-monitor" width="251" height="165" style="display: block; width: 251px; height: 165px;"></canvas>
                </div>
                <div class="card-footer ">
                    <div class="legend">
                        <i class="fa fa-circle text-info"></i> Open
                    </div>
                    <hr>
                    <div class="stats">
                        <i class="fa fa-calendar"></i> Number of emails sent
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card ">
                <div class="card-header ">
                    <h5 class="card-title">New Visitators</h5>
                    <p class="card-category">Out Of Total Number</p>
                </div>
                <div class="card-body ">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <canvas id="chartDonut2" class="ct-chart ct-perfect-fourth chartjs-render-monitor" width="251" height="165" style="display: block; width: 251px; height: 165px;"></canvas>
                </div>
                <div class="card-footer ">
                    <div class="legend">
                        <i class="fa fa-circle text-warning"></i> Visited
                    </div>
                    <hr>
                    <div class="stats">
                        <i class="fa fa-check"></i> Campaign sent 2 days ago
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card ">
                <div class="card-header ">
                    <h5 class="card-title">Orders</h5>
                    <p class="card-category">Total number</p>
                </div>
                <div class="card-body ">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <canvas id="chartDonut3" class="ct-chart ct-perfect-fourth chartjs-render-monitor" width="251" height="165" style="display: block; width: 251px; height: 165px;"></canvas>
                </div>
                <div class="card-footer ">
                    <div class="legend">
                        <i class="fa fa-circle text-danger"></i> Completed
                    </div>
                    <hr>
                    <div class="stats">
                        <i class="fa fa-clock-o"></i> Updated 3 minutes ago
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card ">
                <div class="card-header ">
                    <h5 class="card-title">Subscriptions</h5>
                    <p class="card-category">Our Users</p>
                </div>
                <div class="card-body ">
                    <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <canvas id="chartDonut4" class="ct-chart ct-perfect-fourth chartjs-render-monitor" width="251" height="165" style="display: block; width: 251px; height: 165px;"></canvas>
                </div>
                <div class="card-footer ">
                    <div class="legend">
                        <i class="fa fa-circle text-secondary"></i> Ended
                    </div>
                    <hr>
                    <div class="stats">
                        <i class="fa fa-history"></i> Total users
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
