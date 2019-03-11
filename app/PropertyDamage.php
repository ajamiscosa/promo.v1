<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PropertyDamage extends Model
{
    //
    protected $table = 'pd';
    protected $fillable = [
        'coverage', 'addon'
    ];
}
