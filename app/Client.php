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

    public function getCompleteAddress() {
        if(func_num_args()==1) {
            $village = func_get_arg(0);
            if($village && strlen($village)>0 && $village!="N/A") {
                $this->addressLine1 .= $village;
            }
        }
        else if(func_num_args()>1) {
            throw new \Exception('Cannot have more than 1 argument.');
        }

        if(strlen($this->fulladdress)>0) {
            return $this->fulladdress;
        }
        else {
            $brgy = Barangay::find($this->brgy);
            $city = $brgy->getCity();
            $province = $city->getProvince();

            $temp = sprintf('%s, %s, %s, %s',
                $this->addressline1,
                $brgy->name,
                $city->name,
                $province->name
            );

            return $temp;
        }

        return "N/A";
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
