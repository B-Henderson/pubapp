import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { CommonModule } from '@angular/common';  
import { HaversineService, GeoCoord } from "ng2-haversine";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  location: any;
  constructor(public referenceData: ReferenceService, private haversineService: HaversineService) { 

  }

  options: any = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

  
success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};

error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

  teststring: any[];
  ngOnInit() {
       if(navigator.geolocation){
         console.log('this is true', navigator.geolocation.getCurrentPosition(this.success,this.error,this.options));
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log('this is a test post',position.coords); 
      });
   }

  }

      pubData = this.referenceData.getPubLists()
      			.subscribe((data) => {
      				this.teststring = data;
      				this.loading = false;
      			},
      			err => {
      				console.log('THERE WAS AN ERROR', err);
      			});
  	

}
