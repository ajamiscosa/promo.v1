<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Request;
use App\Brand;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/insurance', function(){
    return view('insurance');
});

Route::get('/vehicle-insurance', function () {
    return view('vehicle');
});

Route::post('/vehicle-insurance/inquiry', 'InquiryController@vehicleInquiry');
Route::post('/vehicle-insurance/inquiry/store', 'InquiryController@store');
Route::get('/vehicle-insurance/quote', 'InquiryController@quote');


Route::get('/login', 'UserController@showLoginForm')->name('login');
Route::post('/login', 'UserController@doLogin');

Route::get('/admin','UserController@dashboard');
Route::get('/admin/export','ClientController@export');



Route::get('/vehicle-insurance/ctpl', function () {
    return view('ctpl');
});

Route::get('/personal-accident-insurance', function(){
    return view('personalaccident');
});

Route::get('/about-us', function(){
    return view('about');
});

Route::get('/privacy-policy', function(){
    return view('privacypolicy');
});

Route::get('/terms-conditions', function(){
    return view('tnc');
});

Route::get('/faq', function(){
    return view('faq');
});



Route::get('/test1', function(){
    $make = App\Make::where('id','=',796)->first();
    dd($make->hasYear(2006));
});


Route::get('/test/ty', function(){
    return view('thankyou');
});

Route::get('/test/select', function(){
    return view('selectinsurance');
});

Route::get('/test/xx', function(){
    $data = App\Insurer::orderByDesc('promo')->get();
    dd($data);
});

// API

Route::get('/query/make', 'MakeController@query');
Route::get('/query/variant', 'VariantController@query');
//
Route::get('/query/insurer','InsurerController@query');