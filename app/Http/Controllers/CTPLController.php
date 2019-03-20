<?php

namespace App\Http\Controllers;

use App\CTPL;
use Illuminate\Http\Request;
use App\Client;

class CTPLController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('vehicle.ctpl');
    }


    public function showInquireForm(Request $request){
        return view('vehicle.ctpl-inquiry');
    }

    public function showOrderForm(Request $request){
        return view('vehicle.ctpl-order',['type'=>$request->type]);
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
        $person = new Client();
        $person->lastname = ucwords($request->LastName);
        $person->firstname = ucwords($request->FirstName);
        $person->middlename = ucwords($request->MiddleName);
        $person->email = $request->Email;
        $person->mobilenumber = $request->Mobile1Number;
        $person->phonenumber = 'N/A';
        $person->title = 'Mr./Ms.';
        $person->calltime = 0;
        $person->customcalltime = '';
        $person->contacted = false;
        $person->save();

        $ctpl = new CTPL();
        $ctpl->type = $request->Type;
        $ctpl->client = $person->id;
        $ctpl->plate = $request->PlateNo;
        $ctpl->engine = $request->Engine;
        $ctpl->chassis = $request->Chassis;
        $ctpl->mvfile = $request->MVFileNumber;
        $ctpl->manufacturer = $request->Manufacturer;
        $ctpl->model = ucwords($request->Model);
        $ctpl->variant = ucwords($request->Variant);
        $ctpl->year = $request->Year;
        $ctpl->color = ucwords($request->Color);
        $ctpl->street = $request->StreetLine1;
        $ctpl->province = $request->ProvinceId;
        $ctpl->city = $request->CityId;
        $ctpl->brgy = $request->BarangayId;
        $ctpl->village = $request->Village;
        $ctpl->zipcode = $request->ZipCode;
        $ctpl->save();

        return redirect()->to('');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CTPL  $cTPL
     * @return \Illuminate\Http\Response
     */
    public function show(CTPL $cTPL)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CTPL  $cTPL
     * @return \Illuminate\Http\Response
     */
    public function edit(CTPL $cTPL)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CTPL  $cTPL
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CTPL $cTPL)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CTPL  $cTPL
     * @return \Illuminate\Http\Response
     */
    public function destroy(CTPL $cTPL)
    {
        //
    }
}
