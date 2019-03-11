<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VariantData extends Model
{
    protected $table = 'variantdata';
    protected $primaryKey = 'id';

    protected $fillable = [
        'vid', 'year', 'price'
    ];
}
