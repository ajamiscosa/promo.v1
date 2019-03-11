<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'make', 'description'
    ];

    protected $primaryKey = 'id';

    public function getVariants(){
        return $this->hasMany('App\VariantData','vid','id');
    }

    public function getVariantData() {
        $data = VariantData::where('vid','=',$this->id)->first();
        return $data;
    }
}