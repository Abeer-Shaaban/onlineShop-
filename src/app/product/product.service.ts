import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  public cart = [];
  getProducts() {
    return this.http.get('http://localhost:3000/products')
        .map(res => res.json());
  }
  AddToCart(product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  // getProducts(): Promise<Product[]> {
  //   return Promise.resolve(products);
  // } // stub

  // the following function is to simulate a slow connection, it's just for testing

  // getProductsSlowly(): Promise<Product[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getProducts()), 2000);
  //   });
  // }
}
