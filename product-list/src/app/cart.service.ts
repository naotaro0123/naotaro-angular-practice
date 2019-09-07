import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productType } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: productType[] = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: productType) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.getItems();
  }

  getShippingPrices() {
    return this.http.get('../assets/shipping.json');
  }
}
