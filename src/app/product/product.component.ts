import { Component, OnInit, Input } from '@angular/core';
import { ReferenceService } from '../services/reference.service'
import * as _ from 'lodash';
import { SharedService } from '../services/shared.service';
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() searchTerm;
	productList: any[];
	shoppingCart: any[] = [];
	recipt: boolean = true;

	constructor(public referenceData: ReferenceService, private sharedSerice: SharedService) { }

	ngOnInit() {
		//on init get the products list
		this.referenceData.getProductList()
			.subscribe((data) => {				
				this.productList = data;
			},
			err => {
				console.log(err)
			});		
	}

	//add a drink to the recipt or if its already there increment the quantity
	addDrink(drink) {

		if (_.find(this.shoppingCart, function(o) {
			return o._id === drink._id;
		})) {
			let i = _.findIndex(this.shoppingCart, function(o) {
				return o._id === drink._id;
			});
			this.shoppingCart[i].quantity++;


		} else {
			drink.quantity = 1;
			this.shoppingCart.push(drink);
		}		
	};
	//remove a drink from the recipt if it exists and if it is 0 remove the object from the recipt array
	removeDrink(drink) {
		if (_.find(this.shoppingCart, function(o) {
			return o._id === drink._id;
		})) {
			let i = _.findIndex(this.shoppingCart, function(o) {
				return o._id === drink._id;
			});

			if (this.shoppingCart[i].quantity > 1) {
				this.shoppingCart[i].quantity--;
			} else {
				this.shoppingCart[i].quantity--;
				this.shoppingCart.splice(i, 1);				
			}
		} else {
			return false;
		}	
	};
	//calculate the total cost of the products
	getTotalCost(){
		let total = 0;

		_.forEach(this.shoppingCart, function(val){		
			return total += val.price * val.quantity;
		});		
		return total;
	}
}


