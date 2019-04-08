<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    //
    protected $table = "contracts";
    protected $fillable = [
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
        'paymentmode'
    ];

    protected $dates = [
        'effectivedate'
    ];
}
