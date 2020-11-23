import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  constructor(private cartService: CartServiceService) { }
  products = [];
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((productJson) => {
      if (productJson) {
        this.products = productJson["items"];
      }
    })
  }

  addtocart(product) {
    product.action = "add";
    this.cartService.setProduct(product);
    
  }

}
