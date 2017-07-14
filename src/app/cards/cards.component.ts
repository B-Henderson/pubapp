import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
	@Input() pubs: any[];
  @Input() currentPosition: any;
  loading: boolean =_.isNil(this.currentPosition); 


  testfun = function(){
  }
  constructor(router: Router) { }
  ngOnChanges(changes: SimpleChanges) {
    this.loading =_.isNil(this.currentPosition);
  }

  ngOnInit() {
  	this.testfun();
  }

}
