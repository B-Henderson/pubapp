import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  constructor(public referenceData: ReferenceService) { 

  }

  teststring: any[];
  ngOnInit() {}

      pubData = this.referenceData.getPubLists()
      			.subscribe((data) => {
      				this.teststring = data;
      				this.loading = false;
      			},
      			err => {
      				console.log('THERE WAS AN ERROR', err);
      			});
  	

}
