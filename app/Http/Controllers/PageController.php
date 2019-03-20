<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function dashboard(){
        return view('admin.index');
    }


    public function vehicle(){
        return view('admin.vehicle.index');
    }

    public function ctpl(){
        return view('admin.ctpl.index');
    }

    public function pa(){
        return view('admin.pa.index');
    }
}
