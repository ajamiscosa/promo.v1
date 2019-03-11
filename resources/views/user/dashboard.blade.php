@extends('app')
@section('content')
<nav class="breadcrumb">
        <ol typeof="BreadcrumbList">
            <li typeof="ListItem" property="itemListElement">
                <a title="" typeof="WebPage" property="item" href="/">
                    <span property="name">Home</span>
                    <meta content="1" property="position">
                </a>
            </li>
            <li typeof="ListItem" property="itemListElement">
                <a title="" typeof="WebPage" property="item" href="/about-us">
                    <span property="name">Dashboard</span>
                    <meta content="2" property="position">
                </a>
            </li>
        </ol>
    </nav>
    <main class="main" role="main">
        <article class="article">
            <div class="content">
                <h1>Contacts Table</h1>
                <div class="row">
                    <div class="col-lg-12">
                        <table id="ordersTable" class="table styled scope table-insurance" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Email</th>
                                    <th>Phone #</th>
                                    <th>Mobile #</th>
                                    <th>Vehicle</th>
                                    <th>Preferred Calltime</th>
                                    <th>Date Addded</th>
                                    <th>Contacted</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Client</th>
                                    <th>Email</th>
                                    <th>Phone #</th>
                                    <th>Mobile #</th>
                                    <th>Vehicle</th>
                                    <th>Preferred Calltime</th>
                                    <th>Date Addded</th>
                                    <th>Contacted</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                @foreach(App\Inquiry::all() as $inquiry)
                                <tr>
                                    <td>{{ $inquiry->getClientInfo()->getName() }}</td>
                                    <td>{{ $inquiry->getClientInfo()->email }}</td>
                                    <td>{{ $inquiry->getClientInfo()->phonenumber }}</td>
                                    <td>{{ $inquiry->getClientInfo()->mobilenumber }}</td>
                                    <td>{{ $inquiry->getVehicleInfo() }}</td>
                                    <td>{{ $inquiry->getClientInfo()->getPreferredCallTime()->description }}</td>
                                    <td>{{ $inquiry->created_at->format('m/d/Y H:i:s') }}</td>
                                    <td>{{ $inquiry->contacted ? "YES":"NO" }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <a type="button" class="btn btn-primary btn-xs">View</a>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </article>
            <aside>
                <a class="btn btn-ghost-default btn-block" href="/admin/export" target="_blank">Export Contact List</a>
            </aside>
    </main>
@endsection