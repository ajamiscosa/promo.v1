<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    //
    protected $table = "contracts";
    protected $fillable = [
        'refno',
        'client',
        'variant',
        'year',
        'color',
        'usetype',
        'insuredamt',
        'premium',
        'pa',
        'bi',
        'pd',
        'aog',
        'rate',
        'effectivedate',
        'chassisnum',
        'motornum',
        'platenum',
        'mortgagee',
        'prefdeliverydate',
        'receivername',
        'paymentmode',
        'agency'
    ];

    protected $dates = [
        'effectivedate','prefdeliverydate'
    ];

    public function getAgency() {
        return $this->belongsTo('App\Insurer','agency','id')->firstOrFail();
    }

    public function generateReferenceNumber() {
        $characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        $randomString = '';

        for ($i = 0; $i < 16; $i++) {
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
