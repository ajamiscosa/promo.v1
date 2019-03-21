@php
    $_bi = App\BodilyInjury::where('coverage','=',$bi)->first();
    $_pd = App\PropertyDamage::where('coverage','=',$pd)->first();

    $lossdmg = $price * $rate;
    $aogprice = $price * $aograte;
    $premium = $lossdmg + $aogprice + $_bi->addon + $_pd->addon;
    $documentStamp = $premium * 0.125;
    $evat = $premium * 0.12;
    $tax = $premium * 0.002;
    $govtDues = $documentStamp + $evat + $tax;
    $totalPremium = $premium + $govtDues;
@endphp
<div class="result-item result-row">
    <div class="result-pinned" style="display: none;">Featured Product</div>
    <div class="result-item-wrap">
        <div class="result-content">
                <form action="/vehicle-insurance/quote/get" method="POST" style="">
            <div class="result-content-top clearfix">
                <div class="result-name" style="display: -webkit-flex; -webkit-align-items: center; font-size: 1.2em;">
                    <strong>{{ $data->name }}</strong> <small></small>
                </div>
                <div class="result-buttons pb-0 mb-0">
                    <div class="button-row">
                            {{ csrf_field() }}
                            <input type="hidden" name="InsuredValue" value="{{ $price }}">
                            <input type="hidden" name="BodilyInjury" value="{{ $_bi->id }}">
                            <input type="hidden" name="PropertyDamage" value="{{ $_pd->id }}">
                            <input type="hidden" name="Premium" value="{{ $totalPremium }}">
                            <input type="hidden" name="Agency" value="{{ $data->id }}">
                            <button type="submit" class="btn btn-default btn-block" style="margin-bottom: 0px !important;">Get Quote</button>
                    </div>
                    <div class="button-row">
                        <a href="javascript:;" class="btn btn-ghost-default btn-block result-contact"  style="margin-bottom: 0px !important;">
                        Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </form>
            <div class="result-information p-b-2x to-normal-size">
                <div class="result-features row">
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class=" m-b-2x" style="min-height: 60px; max-height: 60px;">
                        <img style="object-fit: scale-down; max-width: 260px; max-height: 60px;" src='{{ asset("insurer/{$data->imgpath}") }}' alt="{{ $data->name }}">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12 col-sm-9 col-xs-12">
                        <div class="row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-sm-12 col-xs-6">
                                        <label class="control-label f80 o80">Deductible fee</label>
                                        <a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Deductible fee is the amount you have to pay when you claim your insurance coverage. Also known as Participation Fee." data-original-title="Deductible fee">
                                        <i class="icon i-action-info-circle-solid"></i>
                                        <i class="icon i-action-info-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-sm-12 col-xs-6 o80">
                                        <h4 class="m-y-0">
                                            <small>PHP</small>
                                            <span>{{ number_format($data->deductiblefee,2,'.',',') }}</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-sm-12 col-xs-6">
                                        <label class="control-label f80 o80">Annual Premium</label>
                                        <a class="help-icon" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" title="" data-content="Annual Premium is the total amount per year that you need to pay for your motor insurance vehicle inclusive of government fees such as documentary stamps, value added tax, and local government tax." data-original-title="Annual Premium">
                                        <i class="icon i-action-info-circle-solid"></i>
                                        <i class="icon i-action-info-circle"></i>
                                        </a>
                                    </div>
                                    <div class="col-sm-12 col-xs-6 o80">
                                        <h4 class="m-y-0">
                                            <small>PHP</small>
                                            <span>{{ number_format($totalPremium,2,'.',',') }}</span>
                                        </h4>
                                        <small style="display: none;"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-features result-border-top p-t-2x hidden-xs">
                    @php
                        $features = json_decode($data->features);
                    @endphp
                    <ul class="tick-list o80 f80">
                        @foreach ($features as $feature)
                            <li>{{ $feature }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="result-content-bot collapse" id="result-collapse-{{$data->id}}" style="display: none;">
                <div class="result-tabs-container">
                    <ul class="nav nav-tabs">
                        <li class="result-detail-li active">
                            <a data-toggle="tab" class="result-detail-tab" href="#tabs-1-{{ $data->id }}">Coverage and Premium Summary</a>
                        </li>
                        <li class="result-detail-li">
                            <a data-toggle="tab" class="result-detail-tab" href="#tabs-3-{{ $data->id }}">Nearest Accredited Motorshops</a>
                        </li>
                        <li class="result-detail-li">
                            <a data-toggle="tab" class="result-detail-tab" href="#tabs-4-{{ $data->id }}">Free add-ons</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade active in" id="tabs-1-{{ $data->id }}">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th colspan="3">Coverage</th>
                                        <th>Price</th>
                                        <th>Cover limits</th>
                                        <th>Deductible fee</th>
                                    </tr>
                                    <tr>
                                        <th>Main Coverage</th>
                                        <td colspan="2">Comprehensive</td>
                                        <td>Php. {{ number_format($price * 0.01,2,'.',',') }}</td>
                                        <td>Php {{ number_format($price,2,'.',',') }}  </td>
                                        <td>Php {{ number_format($insurer->deductiblefee,2,'.',',') }}</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th rowspan="1">Other coverage</th>
                                        <td colspan="2">Acts of Nature</td>
                                        <td>Php. 0.00</td>
                                        <td>Php {{ number_format($price,2,'.',',') }}  </td>
                                        <td>Php {{ number_format($insurer->deductiblefee,2,'.',',') }}</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th colspan="3">Premium</th>
                                        <th>Php.  </th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th rowspan="5">Additional coverages</th>
                                        <td colspan="2">Voluntary Third Party Liability - Bodily Injury</td>

                                        <td>Php. {{ number_format($_bi->addon,2,'.',',') }}</td>
                                        <td>Php {{ number_format($bi,2,'.',',') }}</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th rowspan="5" style="display: none;">Additional coverages</th>
                                        <td colspan="2">Voluntary Third Party Liability - Property Damage</td>
                                        <td>Php. {{ number_format($_pd->addon,2,'.',',') }}</td>
                                        <td>Php {{ number_format($pd,2,'.',',') }}</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th rowspan="5" style="display: none;">Additional coverages</th>
                                        <td colspan="2">Personal Accident</td>
                                        <td>Php. 0.00</td>
                                        <td>Php 250,000.00</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th rowspan="5" style="display: none;">Additional coverages</th>
                                        <td colspan="2">Roadside Assistance</td>
                                        <td>Php. 0.00</td>
                                        <td>included</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th rowspan="5" style="display: none;">Additional coverages</th>
                                        <td colspan="2">Towing Service</td>
                                        <td>Php. 0.00</td>
                                        <td>included</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <th colspan="3">Total additional premium</th>
                                        <th>Php. {{ number_format($_bi->addon + $_pd->addon,2,'.',',') }}</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th colspan="3">Doc Stamps, EVAT, Local Gov't Tax</th>
                                        <th>Php. {{ number_format($govtDues,2,'.',',') }}</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th colspan="3">Total Annual Premium</th>
                                        <th>Php. {{ number_format($totalPremium,2,'.',',') }} </th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="tabs-3-{{ $data->id }}">
                            <table class="table table-striped">
                                <thead>
                                    <tr class="emphasized">
                                        <th>Motorshop</th>
                                        <th>Address</th>
                                        <th>Contact details</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="tabs-4-{{ $data->id }}">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="30%">Add-on / feature</th>
                                        <th width="70%">Remark</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="result-more-info" data-toggle='collapse' id="xresult-collapse-{{ $data->id }}" data-target="#result-collapse-{{$data->id}}">
        <span>More Details</span>
        <i class="icon i-arrow-down close-button"></i>
    </a>
</div>
