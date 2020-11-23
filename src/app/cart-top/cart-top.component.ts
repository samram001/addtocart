import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-top',
  templateUrl: './cart-top.component.html',
  styleUrls: ['./cart-top.component.scss']
})
export class CartTopComponent implements OnInit {
  cartProductCout:number=0;
  constructor(private cartService:CartServiceService) {
    this.cartService.callcartUpdate$.subscribe((isChanged)=>{
      if(isChanged) {
        this.cartProductCout = this.cartService.getProductCount()
      }
    });
  }

  ngOnInit(): void {
  }

}
