import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productsService: ProductsService) {
    this._productsService.productsObservable.subscribe( (products) => {
      this.products = products;
      console.log(this.products);
    });
  }


  ngOnInit() {
  }

deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productsService.updateProducts(this.products);
  }

}
