<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function showLoginForm(){
        return view('user.login');
    }

    public function doLogin(Request $request){
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'Username'=>'required|min:3',
            'Password'=>'required|min:4'
        ],
            [
                'Username.required'=>'Username is Required',
                'Username.min'=>'Username should be at least 3 characters.',
                'Password.required'=>'Password is Required',
                'Password.min'=>'Password should be at least 7 characters.'
            ]
        );

        if($validator->passes()){
            $credentials = $request->only('Username', 'Password');

            $user = $credentials['Username'];
            $pass = $credentials['Password'];

            $account = User::where('username','=',$user)->first();

            if($account) {
                if($account->password == $pass) {
                    Auth::login($account);
                    if(session('link')) {
                        return redirect(session('link'));
                    }
                    return redirect()->to('/');
                }
                else {
                    $validator->errors()->add('Password', 'Password is Incorrect');
                    return redirect()->back()->withErrors($validator);
                }
            }
            else {
                $validator->errors()->add('Username', 'User does not exist');
                return redirect()->back()->withErrors($validator);
            }
        }
        else {
            return redirect()->back()->withErrors($validator);
        }
    }

    public function dashboard(){
        return view('user.dashboard');
    }
}
