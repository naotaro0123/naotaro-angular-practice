import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, productType } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: productType;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product: productType) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
