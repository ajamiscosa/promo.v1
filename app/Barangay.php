<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Barangay extends Model
{
    //
    protected $table = "brgy";
    protected $fillable = [
        'name', 'cityid', 'zipcode'
    ];

    public function getCity() {
        return $this->belongsTo('App\City','cityid','id')->first();
    }
}
