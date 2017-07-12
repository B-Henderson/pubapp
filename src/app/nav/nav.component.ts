import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
menuState: boolean = false;

	toggleMenu(){
		this.menuState = (this.menuState === false ? true : false);
    console.log('hitting here', this.menuState);
	}


  constructor() {

   }

  ngOnInit() {
  }

}
