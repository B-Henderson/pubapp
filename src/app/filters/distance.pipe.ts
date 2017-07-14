import { Pipe, PipeTransform } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

	    constructor(private haversine: HaversineService) {}

  transform(lat: any, long: any, cPos: any): any {
  	let pubObj = {
  		'latitude': lat,
  		'longitude': long
  	}
  	let selfObj = {
  		'latitude': cPos.latitude,
  		'longitude': cPos.longitude
  	}
  	
  	let distance = this.haversine.getDistanceInKilometers(selfObj, pubObj);
    console.log('distance hopefully',distance);
    return distance;
  }

}
