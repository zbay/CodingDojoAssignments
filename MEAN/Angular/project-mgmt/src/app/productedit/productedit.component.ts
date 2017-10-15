import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css'],
  providers: [ProductsService]
})
export class ProducteditComponent implements OnInit {
  products: Array<Product>;
  product: Product;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productsService: ProductsService) {
    this._productsService.productsObservable
    .subscribe( (products) => {
      this.products = products;
    });

    this._route.params
    .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          break;
        }
      }
    });
   }

  ngOnInit() {}

  submitChanges(): void{
    this._productsService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }

  deleteProduct(): void{
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].id === this.product.id ) {
        this.products.splice( i, 1 );
        this._productsService.updateProducts(this.products);
        break;
      }
    }
    this._router.navigate( ['/products'] );
  }

}
