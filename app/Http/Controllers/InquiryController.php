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
use App\Contract;
use App\Vehicle;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Session\TokenMismatchException;

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
        if($inquiry->type<0 || $inquiry->type>2){
            return redirect()->to('404');
        }

        return view('vehicle.quote',['client'=>$client, 'inquiry'=>$inquiry]);
    }

    public function truckQuote(Request $request){
        $client = AppClient::find($request->cid);
        $inquiry = Inquiry::where('refno','=',$request->qid)->first();

        if($inquiry->type!=3){
            return redirect()->to('404');
        }

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
        $dto->HasAOG = $request->HasAOG;
        $dto->AOGPrice = $request->AOGPrice;
        $dto->Rate = $request->Rate;
        $dto->Client = $request->Client;
        $dto->Inquiry = $request->Inquiry;
        return view('getquote', ['data'=>$dto]);
    }


    public function getTruckQuote(Request $request) {
        $dto = new DTO();
        $dto->Premium = $request->Premium;
        $dto->InsuredValue = $request->InsuredValue;
        $dto->BodilyInjury = BodilyInjury::find($request->BodilyInjury);
        $dto->PropertyDamage = PropertyDamage::find($request->PropertyDamage);
        $dto->Agency = Insurer::find($request->Agency);
        $dto->HasAOG = $request->HasAOG;
        $dto->AOGPrice = $request->AOGPrice;
        $dto->Rate = $request->Rate;
        $dto->Client = $request->Client;
        $dto->Inquiry = $request->Inquiry;
        return view('getquote', ['data'=>$dto]);
    }

    public function acceptquote(Request $request) {

        $client = AppClient::find($request->Client);
        $inquiry = Inquiry::find($request->Inquiry);

        $dto = new DTO();
        $dto->Agency = Insurer::find($request->Agency);
        $dto->InsuredValue = $request->InsuredValue;
        $dto->BodilyInjury = $request->BodilyInjury;
        $dto->PropertyDamage = $request->PropertyDamage;
        $dto->PersonalAccident = $request->PersonalAccident;
        $dto->Premium = $request->Premium;
        $dto->Rate = $request->Rate;
        $dto->AOGPrice = $request->AOGPrice;

        return view('acceptquote',[
            'client'=>$client,
            'inquiry'=>$inquiry,
            'data'=> $dto
        ]);
    }

    public function complete(Request $request) {

        $dto = new DTO();
        $dto->InsuredValue = $request->InsuredValue;
        $dto->BodilyInjury = $request->BodilyInjury;
        $dto->PropertyDamage = $request->PropertyDamage;
        $dto->PersonalAccident = $request->PersonalAccident;
        $dto->Premium = $request->Premium;
        $dto->Rate = $request->Rate;
        $dto->AOGPrice = $request->AOGPrice;
        $dto->Agency = Insurer::find($request->Agency);

        $client = AppClient::find($request->ClientID);

        $contract = new Contract();

        DB::transaction(function() use ($request, $client, $contract) {

            $client = AppClient::find($request->ClientID);
            $client->lastname = $request->LastName;
            $client->middlename = $request->MiddleName;
            $client->firstname = $request->FirstName;
            $client->email = $request->Email;
            $client->phonenumber = $request->PhoneNumber;
            $client->mobilenumber = $request->MobileNumber;
            $client->addressline1 = $request->StreetLine1;
            $client->brgy = $request->BarangayId;
            $client->fulladdress = $client->getCompleteAddress($request->Village);
            $client->save();

            $variant = Vehicle::find($request->VariantID);

            $contract->usetype = $request->Type;
            $contract->client = $client->id;
            $contract->variant = $variant->id;
            $contract->year = $request->Year;
            $contract->color = $request->Color;

            $contract->premium = $request->Premium;
            $contract->insuredamt = $request->InsuredValue;
            $contract->chassisnum = $request->Chassis;
            $contract->motornum = $request->MVFileNumber;
            $contract->platenum = $request->PlateNo;

            $contract->pa = $request->PersonalAccident;
            $contract->bi = $request->BodilyInjury;
            $contract->pd = $request->PropertyDamage;
            $contract->aog = $request->AOGPrice;
            $contract->rate = $request->Rate;

            $contract->prefdeliverydate = Carbon::parse($request->DeliveryDate);
            $contract->effectivedate = Carbon::parse($request->EffectiveDate);
            $contract->paymentmode = $request->PaymentPlan;

            $contract->mortgagee = ucwords($request->Mortgagee);
            $contract->receivername = ucwords($request->Receiver);
            $contract->generateReferenceNumber();
            $contract->agency = $request->Agency->id;
            $contract->save();
        });

        $hash = csrf_token();
        return redirect()->to("/vehicle-insurance/contract?cid={$client->id}&ref={$contract->refno}&hash={$hash}");
    }

    public function viewcertificate(Request $request) {
        if($request->hash == csrf_token()) {
            $client = AppClient::find($request->cid);
            $contract = Contract::where('refno','=',$request->ref)->firstOrFail();

            return view('certificate', ['data'=>$contract, 'client'=>$client]);
        } else {
            throw \Exception("Invalid hash.");
        }
    }
}
