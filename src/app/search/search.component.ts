import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageFactoryService } from '../services/storagefactory.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	id: any;
  pub: any;
  private sub: any;
  constructor(private route: ActivatedRoute, private storage: StorageFactoryService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  		this.pub = params;
  		 console.log('this.pub here: ',this.pub);
       this.storage.setDataStorage('pub_id', this.pub);
  	});
  }

}
