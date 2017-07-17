import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {
	productList: any;

  constructor(public referenceData: ReferenceService, private sharedSerice: SharedService) { }

  ngOnInit() {
  }

}


// this.referenceData.getPubLists()
//         .subscribe((data) => {
//           this.loading = false;
//           this.storage.setDataStorage('pub_ids', data);
//           returnData = data;
//         },
//         err => {
//           console.log('THERE WAS AN ERROR', err);
//           this.loading = false;
//           returnData = err;
//         });