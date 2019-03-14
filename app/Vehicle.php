<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'manufacturer',
        'model',
        'variant',
        'transmission',
        'displacement',
        'bodytype',
        'fmv',
        'year'
    ];

    public function getManufacturer(){
        return $this->belongsTo('App\Manufacturer','manufacturer','id')->firstOrFail();
    }
}
