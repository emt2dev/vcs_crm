import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, delay } from 'rxjs';
import { CartDTO } from 'src/app/models/CartDTO';
import { CartService } from 'src/app/services/cart/cart-service.service';
import { GlossaryService } from 'src/app/services/glossary.service';

import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from 'environment';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [

  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  private stripePromise?: Promise<Stripe | null>;

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  AddToCartForm: FormGroup;

  Cart: CartDTO;
  /**
   *
   */
  constructor(public formBuilder: FormBuilder, public http: HttpClient, public glossary: GlossaryService, public cartService: CartService, public router: Router) {
    this.AddToCartForm = this.formBuilder.group({
      productId: ['',]
    });
  }

  async ngOnInit(): Promise<void> {
    await delay(5000);

    // get cart here

    await this.cartService.GetCart().subscribe(async (data: CartDTO) => {
      this.Cart = data;

      await this.Cart;
    });
  }

  GetCart(): Observable<any> {
    return this.http.post<any>(`${this.glossary.GetCart()}`, {headers: this.headers})
    .pipe(catchError(this.glossary.ErrorHandler));
  }

  EmptyCart(event: any) {
    let element = event.target || event.srcElement || event.currentTarget;
    let elementId = element.id;
    let id = elementId.match(/\d/g);
    id = id.join("");
    id = parseInt(id);
    let cartId: number = id;

    this.cartService.EmptyCart(cartId).subscribe({
      next: (res) => {
        this.router.navigate(["/shop#"]);
      }
    });
  }

  AddToCart(event: any) {
    let element = event.target || event.srcElement || event.currentTarget;
    let elementId = element.id;
    let id = elementId.match(/\d/g);
    id = id.join("");
    id = parseInt(id);
    let cartId: number = id;

    this.cartService.EmptyCart(cartId).subscribe({
      next: (res) => {
        this.router.navigate(["/shop"]);
      }
    });
  }

  ReduceItemFromCart(event: any) {
    let element = event.target || event.srcElement || event.currentTarget;
    let elementId = element.id;
    let id = elementId.match(/\d/g);
    id = id.join("");
    id = parseInt(id);
    let cartId: number = id;

    this.cartService.ReduceFromCart(cartId).subscribe({
      next: (res) => {
        this.router.navigate(["shop"]);
      }
    });
  }

  async Checkout(event: any) {
    let StripeAPIKey = environment.stripe;
    this.stripePromise = loadStripe(StripeAPIKey);
    const stripe = await this.stripePromise;

    this.cartService.Checkout().subscribe((res: string) => {
      stripe?.redirectToCheckout( { sessionId: res });
    });
  }
}