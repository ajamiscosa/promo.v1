<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Make extends Model
{

    public function getBrand(){
        return $this->belongsTo('App\Brand','brand','id')->first();
    }

    public function hasYear($year) {
        $years = json_decode($this->years);

        return in_array($year, $years, true);
    }

    public function scopeYear($query, $year) {
        return $query->where('years', 'like', '%'.$year.'%');
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'brand'
    ];
}
