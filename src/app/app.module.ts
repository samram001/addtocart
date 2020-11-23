import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartTopComponent } from './cart-top/cart-top.component';
import { CartCalculationComponent } from './cart-calculation/cart-calculation.component';
import { CartServiceService } from './cart-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    CartProductComponent,
    CartTopComponent,
    CartCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
