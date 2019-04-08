<?php

namespace App\Http\Controllers;

use App\Insurer;
use Illuminate\Http\Request;

class InsurerController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Insurer  $insurer
     * @return \Illuminate\Http\Response
     */
    public function show(Insurer $insurer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Insurer  $insurer
     * @return \Illuminate\Http\Response
     */
    public function edit(Insurer $insurer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Insurer  $insurer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Insurer $insurer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Insurer  $insurer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Insurer $insurer)
    {
        //
    }

    public function query(Request $request) {
        return view('insurersquery', [
            'price'=>$request->price,
            'bi'=>$request->bi,
            'pd'=>$request->pd,
            'aog'=>$request->aog,
            'aograte'=>$request->aograte,
            'type'=>$request->type,
            'grocery'=>$request->grocery,
            'water'=>$request->water,
            'electric'=>$request->electric,
            'hospital'=>$request->hospital,
            'rice'=>$request->rice
        ]);
    }
}
