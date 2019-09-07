import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { shippingType } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts: shippingType;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = this.cartService.getShippingPrices() as unknown as shippingType;
  }

  ngOnInit() {
  }

}
