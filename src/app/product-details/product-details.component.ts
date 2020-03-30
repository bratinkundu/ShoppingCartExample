import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service'
import { products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  features;
  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
    ) { 
   
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
      this.features = this.product.features.split(',');
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
}
