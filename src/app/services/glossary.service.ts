import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlossaryService {

  public _api: string = "http://localhost:5278/api/";
  public all: string = "all";  

  // Cart post
  public addToCart = "cart/add";
  public existingCart = "cart/existing";
  public reduceQuantityFromCart = "cart/reduce";
  public removeFromCart = "cart/remove";

  // Category get
  public newStyle = "category/new/style";
  public newCategory = "category/new/category";

  // Entry post
  public registerUser = "entry/user/register";
  public registerStaff = "entry/staff/register";
  public loginUser = "entry/user/login";
  public loginStaff = "entry/staff/login";
  public refreshSession = "entry/refresh";

  // Orders get
  public allOrders = "orders/all";
  public userOrders = "orders/user";
  public orderDetails = "orders/details";

  // post
  public submitOrder = "orders/payment";

  // product get
  public allProduct = "product/all";
  public allPopular = "product/popular/all";
  public allPreOrderable = "product/soon/available";
  public allNonPreOrderable = "product/soon/unavailable";
  public allNew = "product/new/all";
  public allCategory = "product/category/"; // requires category name

  // Post
  public newProduct = "product/new/item";
  public updateProduct = "product/update";
  public deleteProduct = "product/delete";

  constructor() { }

  getApi(){
    return this._api;
  }

  GetCart() {
    return this._api + this.existingCart;
  }

  AddItemToCart() {
    return this._api + this.addToCart;
  }

  ReduceItemFromCart() {
    return this._api + this.reduceQuantityFromCart;
  }
  
  RemoveItemFromCart() {
    return this._api + this.removeFromCart;
  }

  AddNewCategory() {
    return this._api + this.newCategory;
  }

  AddNewStyle() {
    return this._api + this.newStyle
  }

  RegisterUser() {
    return this._api + this.registerUser;
  }

  RegisterStaff() {
    return this._api + this.registerStaff;
  }

  LoginUser() {
    return this._api + this.loginUser;
  }

  LoginStaff() {
    return this._api + this.loginStaff;
  }

  RefreshSession() {
    return this._api + this.refreshSession;
  }

  GetAllOrders() {
    return this._api + this.allOrders;
  }

  GetUserOrders() {
    return this._api + this.userOrders;
  }

  GetOrderDetails() {
    return this._api + this.orderDetails;
  }

  SubmitOrder() {
    return this._api + this.submitOrder;
  }

  GetAllProducts() {
    return this._api + this.allProduct;
  }

  GetPopular() {
    return this._api + this.allPopular;
  }

  GetNew() {
    return this._api + this.allNew;
  }

  GetPreOrders() {
    return this._api + this.allPreOrderable;
  }

  GetUnavailable() {
    return this._api + this.allNonPreOrderable;
  }

  GetCategory() {
    return this._api + this.allCategory;
  }

  SubmitNewItem() {
    return this._api + this.newProduct;
  }

  UpdateItem() {
    return this._api + this.updateProduct;
  }

  DeleteItem() {
    return this._api + this.deleteProduct;
  }

  ErrorHandler(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message.toString();
    } else {
      // server-side error
      msg = `Error Code: ${error.status}Message: ${error.message}`;
    }
    return msg;
  }
}
