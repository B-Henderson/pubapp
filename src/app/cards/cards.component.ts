import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
	@Input() pubs: any[];
  testfun = function(){
  	console.log('testing1234', this.pubs);
  }
  constructor(router: Router) { }


  ngOnInit() {
  	this.testfun();
  }

}
