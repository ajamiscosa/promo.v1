<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{

    public function getName() {
        return $this->firstname.' '.$this->lastname;
    }

    public function getPreferredCallTime() {
        return $this->belongsTo('App\CallTime','calltime','id')->first();
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lastname',
        'firstname',
        'middlename',
        'title',
        'email',
        'phonenumber',
        'mobilenumber',
        'calltime',
        'customcalltime',
        'contacted',
        'datecontacted'
    ];
}
