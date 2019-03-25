<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{

    public function getVehicleInfo() {
        $vehicle = $this->getVehicle();
        return sprintf("%s %s %s %s %s %s",
            $this->year,
            $vehicle->getManufacturer()->name,
            $vehicle->model,
            $vehicle->variant,
            $vehicle->transmission,
            $vehicle->displacement
        );
    }

    public function getVehicleModel() {
        $variant = $this->getVehicleVariant();
        return Make::where('id','=',$variant->make)->first();
    }

    public function getVehicle() {
        $vehicle = Vehicle::find($this->variant);
        return $vehicle;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type', 'variant', 'year', 'client', 'refno'
    ];

    public function getClientInfo() {
        return $this->belongsTo('App\Client','client','id')->first();
    }


    public function generateReferenceNumber() {
        $characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        $randomString = '';

        for ($i = 0; $i < 6; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        try {
            $inquiry = $this->where('refno','=',$randomString)->firstOrFail();
            $this->generateReferenceNumber();
        }catch(\Exception $e) {
            $this->refno = $randomString;
        }

    }
}
