@extends('admin.app')
@section('title','CTPL Insurance')
@section('styles')
<link rel="stylesheet" href="{{ asset('admin/css/jquery.dataTables.min.css') }}">
<link rel="stylesheet" href="{{ asset('admin/css/buttons.dataTables.min.css') }}">
@endsection
@section('content')
<div class="row">
   <div class="col-lg-12">
      <div class="card">
         <div class="card-header">
            <h4>CTPL Insurance</h4>
         </div>
         <div class="card-body">
            <div class="toolbar">
               <!--        Here you can write extra buttons/actions for the toolbar              -->
            </div>
            <div class="dataTables_wrapper container-fluid dt-bootstrap4">
               <div class="row">
                  <div class="col-sm-12">
                     <table id="vehicleInsuranceTable" class="table table-striped table-bordered dataTable dtr-inline" cellspacing="0" width="100%" role="grid" aria-describedby="datatable_info" style="width: 100%;">
                        <thead>
                           <tr>
                              <th>Client</th>
                              <th>Vehicle</th>
                              <th>Date Added</th>
                              <th>Contacted</th>
                              <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Client</th>
                                <th>Vehicle</th>
                                <th>Date Added</th>
                                <th>Contacted</th>
                                <th class="sorting">&nbsp;</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <div class="card-footer">
         </div>
      </div>
   </div>
</div>
@endsection

@section('scripts')
<script>
$('#vehicleInsuranceTable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        {
            extend: 'colvis',
            collectionLayout: 'fixed two-column',
            columnText: function ( dt, idx, title ) {
                return (idx+1)+': '+title;
            }
        }
    ],
    serverSide: false,
    processing: true,
    searching: true,
    ajax: '/test/admin/ctpl-insurance/data',
    dataSrc: 'data',
    columns: [
        { data:"Client" },
        { data:"Vehicle" },
        { data:"DateAdded" },
        { data:"Contacted", orderable:false },
        { data:null, orderable:false, class:'text-center' }

    ],
    columnDefs: [
        {
            render: function ( data, type, row ) {
                return '<a href="/test/admin/vehicle-insurance/view/'+data.ID+'" class="btn btn-info btn-link btn-icon btn-sm like"><i class="fa fa-search"></i></a>';
            },
            targets: 4

        }
    ],
    pagingType: "full_numbers",
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    responsive: true,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
        infoFiltered: ""
    },
} );
</script>
@endsection
