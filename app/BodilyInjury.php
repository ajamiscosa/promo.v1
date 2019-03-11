<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BodilyInjury extends Model
{
    //
    protected $table = "bi";
    protected $fillable = [
        'coverage', 'addon'
    ];
}
