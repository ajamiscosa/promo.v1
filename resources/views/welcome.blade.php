<!DOCTYPE html>
<!-- saved from url=(0069)https://adminlte.io/themes/AdminLTE/pages/examples/invoice-print.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 2 | Invoice</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
<link href="{{ asset('css/fontawesome.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('css/portal.css') }}" rel="stylesheet" type="text/css">
@yield('styles')
<style>

.insurer-image {
        object-fit: scale-down; width: 100%; max-height: 75px;"
    }
table {
    border-collapse: collapse;
}
table, th, td {
  border: 1px solid black;
}
</style>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
</head>
{{-- <body onload="window.print();"> --}}
<body>
<div class="wrapper">
  <!-- Main content -->
  <section class="invoice">
    <div class="row">
        <div class="col-lg-3">
            <img class="insurer-image" src="{{ asset('images/connext.png')}}"/>
        </div>
        <div class="col-lg-6">
            <h3 class="text-center">CERTIFICATE OF INSURANCE</h3>
        </div>
        <div class="col-lg-3">

        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">

        This is to certify that the insured, named below, is insured as described below.
            <table style="width: 100%;">
                <tr>
                    <td width="67%" rowspan="2" style="vertical-align: top;">&nbsp;Insured Name & Address</td>
                    <td>&nbsp;Telephone Number<br/>&nbsp;(        )</td>
                </tr>
                <tr>
                    <td>&nbsp;Fax Number<br/>&nbsp;(        )</td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;Location and nature of operation or contract to which this Certificate applies.</td>
                </tr>
            </table>
        </div>
    </div>
    <br/>
    <br/>
    <div class="row">
        <div class="col-lg-12">
            <table style="width: 100%;">
                <tr>
                    <th rowspan="2" class="text-center">Company & Policy Number</td>
                    <th colspan="2" class="text-center">Policy Dates</th>
                    <th rowspan="2" width="40%" class="text-center">Coverages</th>
                </tr>
                <tr>
                    <th class="text-center">Effective Date</th>
                    <th class="text-center">Expiry Date</th>
                </tr>
            </table>
        </div>
    </div>
  </section>
  <!-- /.content -->
</div>
<!-- ./wrapper -->


</body></html>
