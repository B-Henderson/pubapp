import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
	@Input() pubs: any[];
  @Input() currentPosition: any;
  @Input() searchPubs: string;
  loading: boolean =_.isNil(this.currentPosition); 


  testfun = function(){
  }
  constructor(router: Router, private sharedSerice: SharedService) { }
  ngOnChanges(changes: SimpleChanges) {
    this.loading =_.isNil(this.currentPosition);
  }

  ngOnInit() {
  	this.testfun();
  }

}
