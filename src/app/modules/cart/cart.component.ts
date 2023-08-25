import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, catchError, delay } from 'rxjs';
import { CartDTO } from 'src/app/models/CartDTO';
import { EntryService, USERID } from 'src/app/services/auth/entry-service.service';
import { GlossaryService } from 'src/app/services/glossary.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [

  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  AddToCartForm: FormGroup;

  /**
   *
   */
  constructor(public formBuilder: FormBuilder, public http: HttpClient, public glossary: GlossaryService) {
    this.AddToCartForm = this.formBuilder.group({
      productId: ['',]
    });
  }

  async ngOnInit(): Promise<void> {
    await delay(5000);

    // get cart here

    this.GetCart();
  }

  GetCart(): Observable<any> {
    return this.http.post<any>(`${this.glossary.GetCart()}`, {headers: this.headers})
    .pipe(catchError(this.glossary.ErrorHandler));
  }
}
