import { Injectable } from '@angular/core';

@Injectable()
export class StorageFactoryService {

  constructor() { }
  //if the data exists return it
  getDataStorage(name){
  	let returnData = JSON.parse(localStorage.getItem(name));
  	return returnData;
  }
 //set data to local storage
  setDataStorage(name: string, data: any){
  		localStorage.setItem(name, JSON.stringify(data));
  	
  }

  //remove from local storage
  removeDatStorage(name: string){
  	localStorage.removeItem(name);
  }
}
