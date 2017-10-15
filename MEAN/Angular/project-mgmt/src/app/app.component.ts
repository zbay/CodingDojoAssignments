import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './products.service';
import { Product } from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // alternative: make a service that saves the navbar state
  homeSelected: boolean = false;
  listSelected: boolean = false;
  createSelected: boolean = false;

  products = [
    new Product(1, 'DSLR Camera', 1499.99, '../../assets/camera.jpeg'),
    new Product(2, 'iLaptop', 1299.99, '../../assets/laptop.jpg')
  ];

  constructor(private _productsService: ProductsService) {
    this._productsService.updateProducts(this.products);
    this._productsService.productsObservable.subscribe( (products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  markSelected(link){
    this.homeSelected = false;
    this.listSelected = false;
    this.createSelected = false;
    
    if(link === 'home'){
      this.homeSelected = true;
    }
    else if(link === 'list'){
      this.listSelected = true;
    }
    else if(link === 'create'){
      this.createSelected = true;
    }
  }
}
