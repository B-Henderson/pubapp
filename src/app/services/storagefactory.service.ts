import { Injectable } from '@angular/core';

@Injectable()
export class StorageFactoryService {

  constructor() { }

  getDataStorage(name){
  	let returnData = JSON.parse(localStorage.getItem(name));
  	return returnData;
  }

  setDataStorage(name: string, data: any){
  		localStorage.setItem(name, JSON.stringify(data));
  	
  }
  removeDatStorage(name: string){
  	localStorage.removeItem(name);
  }
}
