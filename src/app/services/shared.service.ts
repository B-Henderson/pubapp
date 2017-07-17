import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	searchTerm: string = '';
	searchDrinks: string = '';
	// return the search term for the filter
	setSearchterm(term){
		this.searchTerm = term;
		return null;
	}
  constructor() { }

}
