<table>
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
        </tr>
    </thead>
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
        </tr>
        @endforeach
    </tbody>
</table>