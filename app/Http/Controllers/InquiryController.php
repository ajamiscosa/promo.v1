<?php

namespace App\Http\Controllers;

use App\Inquiry;
use Illuminate\Http\Request;
use App\Brand;
use Symfony\Component\HttpKernel\Client;
use App\Client as AppClient;
use App\Manufacturer;

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
        $inquiry->variant = $request->Variant;
        $inquiry->client = $client->id;
        $inquiry->year = $request->YearManufactured;
        $inquiry->generateReferenceNumber();
        $inquiry->save();

        return redirect()->to("/vehicle-insurance/quote?cid={$client->id}&qid={$inquiry->refno}");
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

    public function quote(Request $request){
        $client = AppClient::find($request->cid);
        $inquiry = Inquiry::where('refno','=',$request->qid)->first();
        return view('vehicle.quote',['client'=>$client, 'inquiry'=>$inquiry]);
    }

}
