import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlossaryService } from '../glossary.service';
import { ProductDTO } from 'src/app/models/ProductDTO';
import { BehaviorSubject, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: BehaviorSubject<ProductDTO | null | undefined> = new BehaviorSubject<ProductDTO | null | undefined>(undefined);

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient, public router: Router, public glossary: GlossaryService) {}

  GetAllProductsNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetAllProducts() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetAllPopularNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetPopular() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetNewNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetNew() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetPreOrdersNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetPreOrders() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetTrainingProductsNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetTrainingProducts() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetOtherProductsNoPaging() {
    return this.http.get<Array<ProductDTO>>(`${this.glossary.GetOtherProducts() + this.glossary.pagingFalse}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetProductDetails(productId: Number) {
    return this.http.get<ProductDTO>(`${this.glossary.GetProductDetails()}/${productId}`, {headers:this.headers}).pipe(catchError(this.glossary.ErrorHandler));
  }
}
