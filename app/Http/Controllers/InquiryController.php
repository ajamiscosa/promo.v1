<?php

namespace App\Http\Controllers;

use App\Inquiry;
use Illuminate\Http\Request;
use App\Brand;
use Symfony\Component\HttpKernel\Client;
use App\Client as AppClient;
use App\Manufacturer;
use App\Classes\DTO;
use App\BodilyInjury;
use App\PropertyDamage;
use App\Insurer;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $baseUrl = env('APP_URL');
        $url = $request->session()->get('_previous')['url'];
        $url = str_replace($baseUrl, "", $url);

        $client = new AppClient();
        $client->lastname = $request->LastName;
        $client->firstname = $request->FirstName;
        $client->title = $request->Gender ? "Mr.":"Ms/Mrs.";
        $client->email = $request->Email;
        $client->phonenumber = $request->PhoneNumber;
        $client->mobilenumber = $request->MobileNumber;
        $client->calltime = $request->Schedule;
        $client->customcalltime = "[]";
        $client->contacted = false;
        $client->save();

        $inquiry = new Inquiry();
        $inquiry->type = $request->VehicleCategory;
        $inquiry->variant = $request->Variant;
        $inquiry->client = $client->id;
        $inquiry->year = $request->YearManufactured;
        $inquiry->generateReferenceNumber();
        $inquiry->save();

        return redirect()->to("{$url}/quote?cid={$client->id}&qid={$inquiry->refno}");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function show(Inquiry $inquiry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function edit(Inquiry $inquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inquiry $inquiry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {
        //
    }

    public function vehicleInquiry(Request $request){
        $brand = Manufacturer::find($request->VehicleManufacturerId);

        return view('vehicle.inquiry', ['data'=>$brand]);
    }

    public function truckInquiry(Request $request){
        $brand = Manufacturer::find($request->VehicleManufacturerId);

        return view('truck.inquiry', ['data'=>$brand]);
    }

    public function quote(Request $request){
        $client = AppClient::find($request->cid);
        $inquiry = Inquiry::where('refno','=',$request->qid)->first();
        return view('vehicle.quote',['client'=>$client, 'inquiry'=>$inquiry]);
    }

    public function truckQuote(Request $request){
        $client = AppClient::find($request->cid);
        $inquiry = Inquiry::where('refno','=',$request->qid)->first();
        return view('truck.quote',['client'=>$client, 'inquiry'=>$inquiry]);
    }

    public function data(){
        $data = array();
        $iniquiries = Inquiry::all();
        foreach($iniquiries as $inquiry) {
            $client = $inquiry->getClientInfo();
            $entry = array(
                'ID' => $inquiry->id,
                'Client' => $client->getName(),
                'Vehicle' => $inquiry->getVehicleInfo(),
                'CallTime' => $client->getPreferredCallTime()->description,
                'DateAdded' => $inquiry->created_at->format("j/m/Y"),
                'Contacted' => $client->contacted?"YES":"NO"
            );
            array_push($data, $entry);
        }
        return response()->json(['aaData'=>$data]);
    }


    public function getquote(Request $request) {
        $dto = new DTO();
        $dto->Premium = $request->Premium;
        $dto->InsuredValue = $request->InsuredValue;
        $dto->BodilyInjury = BodilyInjury::find($request->BodilyInjury);
        $dto->PropertyDamage = PropertyDamage::find($request->PropertyDamage);
        $dto->Agency = Insurer::find($request->Agency);
        return view('getquote', ['data'=>$dto]);
    }


    public function getTruckQuote(Request $request) {
        $dto = new DTO();
        $dto->Premium = $request->Premium;
        $dto->InsuredValue = $request->InsuredValue;
        $dto->BodilyInjury = BodilyInjury::find($request->BodilyInjury);
        $dto->PropertyDamage = PropertyDamage::find($request->PropertyDamage);
        $dto->Agency = Insurer::find($request->Agency);
        return view('getquote', ['data'=>$dto]);
    }
}
