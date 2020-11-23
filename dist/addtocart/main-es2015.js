(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_top_cart_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-top/cart-top.component */ "./src/app/cart-top/cart-top.component.ts");
/* harmony import */ var _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-product/cart-product.component */ "./src/app/cart-product/cart-product.component.ts");
/* harmony import */ var _cart_calculation_cart_calculation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-calculation/cart-calculation.component */ "./src/app/cart-calculation/cart-calculation.component.ts");





class AppComponent {
    constructor() {
        this.title = 'addtocart';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "cart_main"], [1, "cart_main_product"], [1, "cart_main_calc"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cart-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cart-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cart-calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cart_top_cart_top_component__WEBPACK_IMPORTED_MODULE_1__["CartTopComponent"], _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_2__["CartProductComponent"], _cart_calculation_cart_calculation_component__WEBPACK_IMPORTED_MODULE_3__["CartCalculationComponent"]], styles: [".cart_main[_ngcontent-%COMP%]   .cart_main_product[_ngcontent-%COMP%] {\n  width: 70%;\n  float: left;\n}\n.cart_main[_ngcontent-%COMP%]   .cart_main_calc[_ngcontent-%COMP%] {\n  width: 30%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXHNhbVxcYW5ndWxhclxcYWRkdG9jYXJ0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydF9tYWluIHtcclxuICAgIC5jYXJ0X21haW5fcHJvZHVjdCB7XHJcbiAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcnRfbWFpbl9jYWxjIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufSIsIi5jYXJ0X21haW4gLmNhcnRfbWFpbl9wcm9kdWN0IHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY2FydF9tYWluIC5jYXJ0X21haW5fY2FsYyB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-product/cart-product.component */ "./src/app/cart-product/cart-product.component.ts");
/* harmony import */ var _cart_top_cart_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-top/cart-top.component */ "./src/app/cart-top/cart-top.component.ts");
/* harmony import */ var _cart_calculation_cart_calculation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-calculation/cart-calculation.component */ "./src/app/cart-calculation/cart-calculation.component.ts");
/* harmony import */ var _cart_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart-service.service */ "./src/app/cart-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











// import { HttpClient } from 'selenium-webdriver/http';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_cart_service_service__WEBPACK_IMPORTED_MODULE_8__["CartServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            // HttpClient,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_5__["CartProductComponent"],
        _cart_top_cart_top_component__WEBPACK_IMPORTED_MODULE_6__["CartTopComponent"],
        _cart_calculation_cart_calculation_component__WEBPACK_IMPORTED_MODULE_7__["CartCalculationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        // HttpClient,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _cart_product_cart_product_component__WEBPACK_IMPORTED_MODULE_5__["CartProductComponent"],
                    _cart_top_cart_top_component__WEBPACK_IMPORTED_MODULE_6__["CartTopComponent"],
                    _cart_calculation_cart_calculation_component__WEBPACK_IMPORTED_MODULE_7__["CartCalculationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    // HttpClient,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [_cart_service_service__WEBPACK_IMPORTED_MODULE_8__["CartServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart-calculation/cart-calculation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cart-calculation/cart-calculation.component.ts ***!
  \****************************************************************/
/*! exports provided: CartCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCalculationComponent", function() { return CartCalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-service.service */ "./src/app/cart-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function CartCalculationComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartCalculationComponent_tr_11_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.productCountChange(product_r5, "decrement"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartCalculationComponent_tr_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r5 = ctx.$implicit; return product_r5.count = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartCalculationComponent_tr_11_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.productCountChange(product_r5, "increment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r5.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r5.price["actual"] * product_r5.count, "");
} }
class CartCalculationComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartProducts = [];
        this.cartProductCout = 0;
        this.productTotal = 0;
        this.discountTotal = 0;
        this.overallTotal = 0;
        this.cartService.callcartUpdate$.subscribe((isChanged) => {
            if (isChanged) {
                this.cartProducts = this.cartService.getCartProducts();
                this.cartProductCout = this.cartService.getProductCount();
                let productActualPrice = 0;
                this.productTotal = 0;
                this.discountTotal = 0;
                this.overallTotal = 0;
                for (let p = 0; p < this.cartProducts.length; p++) {
                    this.productTotal += this.cartProducts[p].price['display'];
                    productActualPrice += this.cartProducts[p].price['actual'];
                    this.discountTotal += this.cartProducts[p].price['display'] - this.cartProducts[p].price['actual'];
                }
                //this.discountTotal = this.productTotal - productActualPrice;
                this.overallTotal = productActualPrice;
            }
        });
    }
    ngOnInit() {
    }
    productCountChange(product, type) {
        if (type == "increment") {
            product.count++;
        }
        if (type == "decrement" && product.count > 0) {
            product.count--;
        }
        this.cartService.changeCart(true);
    }
}
CartCalculationComponent.ɵfac = function CartCalculationComponent_Factory(t) { return new (t || CartCalculationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"])); };
CartCalculationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartCalculationComponent, selectors: [["app-cart-calculation"]], decls: 44, vars: 5, consts: [[1, "cart_calc"], [1, "productCount"], [4, "ngFor", "ngForOf"], [1, "cartTotal"], [1, "price"], [1, "finalTotal"], [1, "productName"], [3, "src"], [1, "fa", "fa-minus", 3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-plus", 3, "click"]], template: function CartCalculationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartCalculationComponent_tr_11_Template, 10, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Totals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Typed Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Items(", ctx.cartProductCout, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.productTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.discountTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.overallTotal, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 15px;\n  border-bottom: 1px solid #DDD;\n  border-spacing: 0px;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: left;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid #DDD;\n  border-bottom: 1px solid #DDD;\n  padding: 10px;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .productCount[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .productCount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30px;\n  margin: 0 10px;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #DDD;\n  vertical-align: middle;\n  display: flex;\n}\n\n.cart_calc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .productName[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.cart_calc[_ngcontent-%COMP%]   .cartTotal[_ngcontent-%COMP%] {\n  border: 1px solid #DDD;\n}\n\n.cart_calc[_ngcontent-%COMP%]   .cartTotal[_ngcontent-%COMP%]   .finalTotal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #DDD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1jYWxjdWxhdGlvbi9GOlxcc2FtXFxhbmd1bGFyXFxhZGR0b2NhcnQvc3JjXFxhcHBcXGNhcnQtY2FsY3VsYXRpb25cXGNhcnQtY2FsY3VsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQtY2FsY3VsYXRpb24vY2FydC1jYWxjdWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQVE7RUFDSSxnQkFBQTtBQ0VaOztBREFRO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUNFWjs7QURBUTtFQUNJLGtCQUFBO0FDRVo7O0FERFk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0doQjs7QURDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NaOztBREFZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFaEI7O0FERUk7RUFDSSxzQkFBQTtBQ0FSOztBRENRO0VBQ0ksc0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtY2FsY3VsYXRpb24vY2FydC1jYWxjdWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2FydF9jYWxjIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdENvdW50eyBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3ROYW1lIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJ0VG90YWx7IFxyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI0RERDtcclxuICAgICAgICAuZmluYWxUb3RhbCB0ZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLnByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYXJ0X2NhbGMgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuLmNhcnRfY2FsYyB0YWJsZSB0aDpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcnRfY2FsYyB0YWJsZSB0aCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJ0X2NhbGMgdGFibGUgLnByb2R1Y3RDb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJ0X2NhbGMgdGFibGUgLnByb2R1Y3RDb3VudCBpbnB1dCB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5jYXJ0X2NhbGMgdGFibGUgLnByb2R1Y3ROYW1lIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJ0X2NhbGMgdGFibGUgLnByb2R1Y3ROYW1lIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uY2FydF9jYWxjIC5jYXJ0VG90YWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xufVxuLmNhcnRfY2FsYyAuY2FydFRvdGFsIC5maW5hbFRvdGFsIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartCalculationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-calculation',
                templateUrl: './cart-calculation.component.html',
                styleUrls: ['./cart-calculation.component.scss']
            }]
    }], function () { return [{ type: _cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cart-product/cart-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cart-product/cart-product.component.ts ***!
  \********************************************************/
/*! exports provided: CartProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductComponent", function() { return CartProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-service.service */ "./src/app/cart-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CartProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartProductComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const product_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addtocart(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.discount, "% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r1.price["display"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r1.price["actual"], "");
} }
class CartProductComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.cartService.getProducts().subscribe((productJson) => {
            if (productJson) {
                this.products = productJson["items"];
            }
        });
    }
    addtocart(product) {
        product.action = "add";
        this.cartService.setProduct(product);
    }
}
CartProductComponent.ɵfac = function CartProductComponent_Factory(t) { return new (t || CartProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"])); };
CartProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartProductComponent, selectors: [["app-cart-product"]], decls: 2, vars: 1, consts: [[1, "product-widget"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], [1, "product_discount"], [1, "product_image"], [3, "src"], [1, "product_detail"], [1, "product_price"], [1, "display"], [1, "actual"], [1, "product_button"], [3, "click"], [1, "clear_both"]], template: function CartProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartProductComponent_div_1_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  width: 29%;\n  float: left;\n  border: 1px solid #ddd;\n  margin: 15px;\n  position: relative;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_discount[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: lightgreen;\n  padding: 2px;\n  top: 30px;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_image[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%] {\n  background-color: #DDD;\n  padding: 5px;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .clear_both[_ngcontent-%COMP%] {\n  clear: both;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%] {\n  float: left;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: red;\n          text-decoration-color: red;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   .actual[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .product_button[_ngcontent-%COMP%] {\n  float: right;\n}\n.product-widget[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .product_detail[_ngcontent-%COMP%]   .product_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 2px solid #85cbe2;\n  border-radius: 3px;\n  color: #5da2b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1wcm9kdWN0L0Y6XFxzYW1cXGFuZ3VsYXJcXGFkZHRvY2FydC9zcmNcXGFwcFxcY2FydC1wcm9kdWN0XFxjYXJ0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQtcHJvZHVjdC9jYXJ0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0osV0FBQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0FSO0FERUk7RUFDSSxhQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ1o7QURFSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQVk7RUFDSSw2QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNFaEI7QURBWTtFQUNJLGlCQUFBO0FDRWhCO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURBWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvY2FydC1wcm9kdWN0L2NhcnQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXdpZGdldCB7XHJcbiAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDI5JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnByb2R1Y3RfZGlzY291bnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9pbWFnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0X2RldGFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsZWFyX2JvdGgge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RfcHJpY2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLmRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0dWFsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdF9idXR0b24ge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjODVjYmUyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1ZGEyYjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIucHJvZHVjdC13aWRnZXQgLnByb2R1Y3Qge1xuICB3aWR0aDogMjklO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGlzY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIHBhZGRpbmc6IDJweDtcbiAgdG9wOiAzMHB4O1xufVxuLnByb2R1Y3Qtd2lkZ2V0IC5wcm9kdWN0IC5wcm9kdWN0X2ltYWdlIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdCAucHJvZHVjdF9pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdCAucHJvZHVjdF9kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGV0YWlsIHAge1xuICBtYXJnaW46IDA7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGV0YWlsIC5jbGVhcl9ib3RoIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGV0YWlsIC5wcm9kdWN0X3ByaWNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGV0YWlsIC5wcm9kdWN0X3ByaWNlIC5kaXNwbGF5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xufVxuLnByb2R1Y3Qtd2lkZ2V0IC5wcm9kdWN0IC5wcm9kdWN0X2RldGFpbCAucHJvZHVjdF9wcmljZSAuYWN0dWFsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QgLnByb2R1Y3RfZGV0YWlsIC5wcm9kdWN0X2J1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdCAucHJvZHVjdF9kZXRhaWwgLnByb2R1Y3RfYnV0dG9uIGJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4NWNiZTI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM1ZGEyYjk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-product',
                templateUrl: './cart-product.component.html',
                styleUrls: ['./cart-product.component.scss']
            }]
    }], function () { return [{ type: _cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cart-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/cart-service.service.ts ***!
  \*****************************************/
/*! exports provided: CartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceService", function() { return CartServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CartServiceService {
    constructor(http) {
        this.http = http;
        this.cartUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.callcartUpdate$ = this.cartUpdate.asObservable();
        this.cartAction = (function (productInfo) {
            let cartProduct = [];
            return {
                setCartProduct: function (productInfo) {
                    let filterProduct = cartProduct.filter((product) => {
                        return product.name == productInfo.name;
                    });
                    if (filterProduct.length == 0) {
                        productInfo.count = 1;
                        cartProduct.push(productInfo);
                    }
                    else {
                        if (productInfo.action == "add") {
                            filterProduct[0].count++;
                        }
                        else if (productInfo.action == "remove") {
                            filterProduct[0].count--;
                        }
                    }
                },
                getCartProducts: function () {
                    return cartProduct;
                },
                getProductCount: function () {
                    let cartProductCount = 0;
                    for (let c = 0; c < cartProduct.length; c++) {
                        cartProductCount += cartProduct[c].count;
                    }
                    return cartProductCount;
                }
            };
        })();
    }
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
        this.cartUpdate.next(value);
    }
}
CartServiceService.ɵfac = function CartServiceService_Factory(t) { return new (t || CartServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CartServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartServiceService, factory: CartServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cart-top/cart-top.component.ts":
/*!************************************************!*\
  !*** ./src/app/cart-top/cart-top.component.ts ***!
  \************************************************/
/*! exports provided: CartTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartTopComponent", function() { return CartTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-service.service */ "./src/app/cart-service.service.ts");



class CartTopComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartProductCout = 0;
        this.cartService.callcartUpdate$.subscribe((isChanged) => {
            if (isChanged) {
                this.cartProductCout = this.cartService.getProductCount();
            }
        });
    }
    ngOnInit() {
    }
}
CartTopComponent.ɵfac = function CartTopComponent_Factory(t) { return new (t || CartTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"])); };
CartTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartTopComponent, selectors: [["app-cart-top"]], decls: 6, vars: 1, consts: [[1, "cart_top"], [1, "top_left"], [1, "top_center"], [1, "clear_both"]], template: function CartTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cartProductCout, " Items is added to cart");
    } }, styles: [".cart_top[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-top: 1px solid #DDD;\n  border-bottom: 1px solid #DDD;\n}\n.cart_top[_ngcontent-%COMP%]   .top_left[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  width: 100px;\n  float: left;\n}\n.cart_top[_ngcontent-%COMP%]   .top_center[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n  color: #FFF;\n  width: 160px;\n  float: left;\n  padding: 5px;\n  border-radius: 3px;\n  margin-left: 400px;\n}\n.cart_top[_ngcontent-%COMP%]   .clear_both[_ngcontent-%COMP%] {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC10b3AvRjpcXHNhbVxcYW5ndWxhclxcYWRkdG9jYXJ0L3NyY1xcYXBwXFxjYXJ0LXRvcFxcY2FydC10b3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQtdG9wL2NhcnQtdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFUjtBREFJO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0LXRvcC9jYXJ0LXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0X3RvcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjREREO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RERDtcclxuICAgIC50b3BfbGVmdHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnRvcF9jZW50ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwMHB4XHJcbiAgICB9XHJcbiAgICAuY2xlYXJfYm90aCB7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbn0iLCIuY2FydF90b3Age1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbn1cbi5jYXJ0X3RvcCAudG9wX2xlZnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNhcnRfdG9wIC50b3BfY2VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgY29sb3I6ICNGRkY7XG4gIHdpZHRoOiAxNjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG59XG4uY2FydF90b3AgLmNsZWFyX2JvdGgge1xuICBjbGVhcjogYm90aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-top',
                templateUrl: './cart-top.component.html',
                styleUrls: ['./cart-top.component.scss']
            }]
    }], function () { return [{ type: _cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\sam\angular\addtocart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map