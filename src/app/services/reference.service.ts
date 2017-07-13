import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReferenceService {

  constructor(public http:Http) { }


  getPubLists(){
  	console.log('inside service');
  	return this.http.get('assets/api/pubs.api.json')
  			.map((res:Response) => res.json())

  };
}
