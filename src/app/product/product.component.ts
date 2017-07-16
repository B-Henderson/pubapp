import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service'
import * as _ from 'lodash';
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	productList: any[];
	shoppingCart: any[] = [];
	recipt: boolean = true;
	constructor(public referenceData: ReferenceService) { }

	ngOnInit() {
		this.referenceData.getProductList()
			.subscribe((data) => {
				console.log(data);
				this.productList = data;
			},
			err => {
				console.log(err)
			});
	}

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
	removeDrink(drink) {
		if (_.find(this.shoppingCart, function(o) {
			return o._id === drink._id;
		})) {
			let i = _.findIndex(this.shoppingCart, function(o) {
				return o._id === drink._id;
			});

			if (this.shoppingCart[i].quantity > 0) {
				this.shoppingCart[i].quantity--;
			} else {
				this.shoppingCart.splice(i, 1);
			}
		} else {
			return false;
		}
	};
}


