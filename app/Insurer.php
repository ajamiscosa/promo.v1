<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Insurer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'deductiblefee',
        'accreditedshops',
        'features',
        'cat0',
        'cat1',
        'cat2',
        'cat3',
    ];
}
