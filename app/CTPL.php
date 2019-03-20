<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CTPL extends Model
{
    //
    protected $table = "ctpl";
    protected $fillable = [
        'id',
        'type',
        'client',
        'refno',
        'plate',
        'engine',
        'chassis',
        'mvfile',
        'manufacturer',
        'model',
        'variant',
        'year',
        'color',
        'street',
        'province',
        'city',
        'brgy',
        'village',
        'zipcode'
    ];

    public function getClientInfo() {
        return $this->belongsTo('App\Client','client','id')->first();
    }

    public function getManufacturer() {
        return $this->hasOne('App\Manufacturer','id','manufacturer')->first();
    }


    public function generateReferenceNumber() {
        $characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        $randomString = '';

        for ($i = 0; $i < 6; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        try {
            $inquiry = $this->where('refno','=',$randomString)->firstOrFail();
            $this->generateReferenceNumber();
        }catch(\Exception $e) {
            $this->refno = $randomString;
        }

    }
}
