import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { productType } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: productType[];

  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
