import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from './../product';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  product: Product = new Product();
  products: Array<Product>;

  constructor(private _router: Router, private _productsService: ProductsService) {
    this._productsService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }

  ngOnInit() {
    this.product = new Product();
  }

  submitProduct(){
    console.log("submitting product...");
    if (this.product.imgUrl.length < 1 ||
      this.product.imgUrl === 'null' ||
      this.product.imgUrl === null) {
    this.product.imgUrl = null;
  }
  this.products.push(this.product);
  console.log(this.products);
  this._productsService.updateProducts(this.products);
  this.product = new Product();
  this._router.navigate(['products']);
  }

}
