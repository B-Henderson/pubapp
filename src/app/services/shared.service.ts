import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	searchTerm: string = '';
	setSearchterm(term){
		console.log('term: ', term);
		this.searchTerm = term;
		return null;
	}
  constructor() { }

}
