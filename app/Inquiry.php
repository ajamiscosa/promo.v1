<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{

    public function getVehicleInfo() {
        $vehicle = $this->getVehicleModel();
        $variant = $this->getVehicleVariant();
        return sprintf("%s %s %s %s", $this->year, $vehicle->getBrand()->name, $vehicle->name, $variant->description);
    }

    public function getVehicleModel() {
        $variant = $this->getVehicleVariant();
        return Make::where('id','=',$variant->make)->first();
    }

    public function getVehicleVariant() {
        $variantdata = new VariantData();
        $variantdata = $variantdata
                            ->where('vid','=',$this->variant)
                            ->where('year','=',$this->year)->first();

        $variant = Variant::find($this->variant);
        $variant->data = $variantdata;
        return $variant;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'variant', 'year', 'client', 'refno'
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
