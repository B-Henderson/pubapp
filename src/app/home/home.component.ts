import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(public referenceData: ReferenceService) { 

  }


  ngOnInit() {}

      pubData = this.referenceData.getPubLists()
      			.subscribe((data) => {
      				console.log(data);
      			},
      			err => {
      				console.log('THERE WAS AN ERROR', err);
      			});
  	

}
