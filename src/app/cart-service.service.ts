import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(public http: HttpClient) { }

  cartUpdate = new BehaviorSubject<boolean>(false);
  callcartUpdate$ = this.cartUpdate.asObservable();

  cartAction = (function(productInfo) {
    let cartProduct = [];
    return {
      setCartProduct: function(productInfo) {
        
        let filterProduct = cartProduct.filter((product)=>{
          return product.name == productInfo.name;
        })
        if(filterProduct.length==0) {
          productInfo.count = 1;
          cartProduct.push(productInfo);
        } else {
          if(productInfo.action=="add") {
            filterProduct[0].count++;
          } else if(productInfo.action=="remove") {
            filterProduct[0].count--;
          }
          
        }
        
      },
  
      getCartProducts: function() {
        return cartProduct;
      },
  
      getProductCount: function() {
        let cartProductCount = 0;
        for(let c=0;c<cartProduct.length;c++) {
          cartProductCount += cartProduct[c].count;
        }
        return cartProductCount;
      }
    };
  })();

  getProducts() {
      return this.http.get('./assets/cart_products.json');
  }

  setProduct(productInfo) {
    this.cartAction.setCartProduct(productInfo);
    this.changeCart(true);
  }

  getCartProducts() {
    return this.cartAction.getCartProducts();
  }

  getProductCount() {
    return this.cartAction.getProductCount();
  }
 
  changeCart(value) {
    this.cartUpdate.next(value)
  }
  // getCartCount() {
  //   return this.counter.value()
  // }

  // cartCountIncrement() {
  //   this.counter.increment();
  // }

  // cartCountDecrement() {
  //   this.counter.decrement();
  // }

}
