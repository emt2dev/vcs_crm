import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlossaryService {

  public _api: string = "http://localhost:5278/api/";
  public all: string = "all";  
  public pagingFalse: string = "/nopagination";

  // Content get
  public landingPageMain = "content/main/current";
  public landingServices = "content/services";
  public blogs = "content/blogs";

  // post
  public updateLandingPage = "content/main/update";
  public updateLandingServices = "content/services/update";
  public updateBlogs = "content/blogs/update";

  public newLandingPage = "content/main/new";
  public newLandingServices = "content/services/new";
  public newBlogs = "content/blogs/new";

  // Cart post
  public addToCart = "cart/add";
  public existingCart = "cart/existing";
  public reduceQuantityFromCart = "cart/reduce";
  public removeFromCart = "cart/remove";
  public emptyCart = "cart/empty";

  // Category post
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
  public allOthers = "product/others/all"
  public allTraining = "product/training/all";
  public productDetails = "product/details/";

  // Post
  public newProduct = "product/new/item";
  public updateProduct = "product/update";
  public deleteProduct = "product/delete";

  constructor() { }

  getApi(){
    return this._api;
  }

  GetProductDetails() {
    return this._api + this.productDetails;
  }
  
  GetCart() {
    return this._api + this.existingCart;
  }

  EmptyCart() {
    return this._api + this.emptyCart;
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

  GetOtherProducts() {
    return this._api + this.allOthers;
  }

  GetTrainingProducts() {
    return this._api + this.allTraining;
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

  GetMainContent() {
    return this._api + this.landingPageMain;
  }

  GetServicesContent() {
    return this._api + this.landingServices;
  }

  GetBlogs() {
    return this._api + this.blogs;
  }

  UpdateMainContent() {
    return this._api + this.landingPageMain;
  }

  UpdateServicesContent() {
    return this._api + this.landingServices;
  }

  UpdateBlogs() {
    return this._api + this.blogs;
  }

  NewMainContent() {
    return this._api + this.landingPageMain;
  }

  NewServicesContent() {
    return this._api + this.landingServices;
  }

  NewBlogs() {
    return this._api + this.blogs;
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
