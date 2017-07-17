import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { SharedService } from '../services/shared.service';
@Component({
	selector: 'app-pub',
	templateUrl: './pub.component.html',
	styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {
	searchDrinks: string ='';
	constructor(public referenceData: ReferenceService, public sharedSerice: SharedService) { }
	ngOnInit() {
	}

}
