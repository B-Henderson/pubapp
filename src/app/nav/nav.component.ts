import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
menuState: boolean = false;
currentRoute: string = '';
	toggleMenu = () => {
		this.menuState = (this.menuState === false ? true : false);
	}



  constructor(private _router: Router, private sharedSerice: SharedService) {
    _router.events.subscribe((value) => {
      if( value instanceof NavigationEnd){       
        this.currentRoute = value.urlAfterRedirects;
      }      
    })

   }
     ngOnChanges(changes: SimpleChanges) {
 
  }

  ngOnInit() {

  }

}
