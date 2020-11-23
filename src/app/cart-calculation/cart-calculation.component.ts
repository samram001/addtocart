import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-calculation',
  templateUrl: './cart-calculation.component.html',
  styleUrls: ['./cart-calculation.component.scss']
})
export class CartCalculationComponent implements OnInit {
  cartProducts:any=[];
  cartProductCout:number=0;
  productTotal:number = 0;
  discountTotal:number = 0;
  overallTotal:number=0;
  constructor(private cartService:CartServiceService) {
    this.cartService.callcartUpdate$.subscribe((isChanged)=>{
      if(isChanged) {
        this.cartProducts = this.cartService.getCartProducts();
        this.cartProductCout = this.cartService.getProductCount();
        let productActualPrice = 0;
        this.productTotal = 0;
        this.discountTotal = 0;
        this.overallTotal = 0;
        for(let p=0;p<this.cartProducts.length;p++) {
          this.productTotal += this.cartProducts[p].price['display'];
          productActualPrice += this.cartProducts[p].price['actual'];
          this.discountTotal += this.cartProducts[p].price['display'] - this.cartProducts[p].price['actual'];
        }
        //this.discountTotal = this.productTotal - productActualPrice;
        this.overallTotal = productActualPrice;
      }
    });
  }
  ngOnInit(): void {
  }

  productCountChange(product,type) {
    if(type=="increment") {
      product.count++;
    }
    if(type=="decrement" && product.count>0) {
      product.count--;
    }
    this.cartService.changeCart(true);
  }
}
