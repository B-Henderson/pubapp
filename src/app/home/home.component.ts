import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { CommonModule } from '@angular/common';
import { HaversineService, GeoCoord } from "ng2-haversine";
import { StorageFactoryService } from '../services/storagefactory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  location: any;
  constructor(public referenceData: ReferenceService, private haversineService: HaversineService, private storage: StorageFactoryService) {

  }
  pubData: any[];

  teststring: any[];
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;

      });
    } else {
      console.log('cant get location');
      this.location = {
        "latitude": 0,
        "longitude": 0
      };
    }
    this.pubData = this.getpubs();
    console.log('pubdata: ', this.pubData);
  }
  ngOnChanges(changes: SimpleChanges) {
  }



  getpubs() {
    let returnData: any = '';
    if (this.storage.getDataStorage('pub_ids')) {
      returnData = this.storage.getDataStorage('pub_ids');
      this.loading = false;

    } else {
      this.referenceData.getPubLists()
        .subscribe((data) => {
          this.loading = false;
          this.pubData = data;
          this.storage.setDataStorage('pub_ids', data);

        },
        err => {
          console.log('THERE WAS AN ERROR', err);
          this.loading = false;
          returnData = err;
        });
    }

    return returnData;
  }


}
