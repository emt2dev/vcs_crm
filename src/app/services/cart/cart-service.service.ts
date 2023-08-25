import { Injectable } from '@angular/core';
import { GlossaryService } from '../glossary.service';
import { catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public glossary: GlossaryService, public http: HttpClient, public router: Router) {}

  EmptyCart(cartId: number) {
    return this.http.post(`${this.glossary.EmptyCart()}`, cartId, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetCart() {
    return this.http.post(`${this.glossary.GetCart()}`, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  ReduceFromCart(productId: number) {
    return this.http.post(`${this.glossary.ReduceItemFromCart()}`, productId, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  AddToCart(productId: number) {
    return this.http.post(`${this.glossary.AddItemToCart()}`, productId, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  Checkout() {
    return this.http.post(`${this.glossary.SubmitOrder()}`, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }
}
