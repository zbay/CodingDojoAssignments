import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from './product';

@Injectable()
export class ProductsService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts( data: Array<Product> ) {
    console.log(data);
    this.productsObservable.next( data );
  }
}