import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReferenceService {

  constructor(public http:Http) { }


  getPubLists(){
  	return this.http.get('assets/api/pubs.api.json')
  			.map((res:Response) => res.json())

  };
  getProductList(){
  	return this.http.get('assets/api/products.api.json')
  			.map((res:Response) => res.json())
  };
}
