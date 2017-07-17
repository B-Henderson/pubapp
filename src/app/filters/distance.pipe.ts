import { Pipe, PipeTransform } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  constructor(private haversine: HaversineService, public decimalPipe: DecimalPipe) { }
  //calculate the distance from the pubs latlong with current latlong of user
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

    return this.decimalPipe.transform(distance, "1.2-2");
  }

}
