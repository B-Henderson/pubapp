import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	searchTerm: string = '';
	searchDrinks: string = '';
	setSearchterm(term){
		this.searchTerm = term;
		return null;
	}
  constructor() { }

}
