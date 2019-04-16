<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    //
    protected $table = "cities";
    protected $fillable = [
        'name', 'provinceid'
    ];

    public function getProvince() {
        return $this->belongsTo('App\Province','provinceid','id')->first();
    }
}
