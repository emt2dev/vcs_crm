import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlossaryService } from '../glossary.service';
import { catchError } from 'rxjs';
import { MainContentDTO } from 'src/app/models/MainContentDTO';
import { ServicesContentDTO } from 'src/app/models/ServicesContentDTO';
import { BlogDTO } from 'src/app/models/BlogDTO';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public glossary: GlossaryService, public http: HttpClient, public router: Router) {}

  GetMain() {
    return this.http.get(`${this.glossary.GetMainContent()}`, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetServices() {
    return this.http.get(`${this.glossary.GetServicesContent()}`, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  GetAllBlogs() {
    return this.http.get(`${this.glossary.GetBlogs()}`, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  UpdateMain(Content: MainContentDTO) {
    return this.http.post<MainContentDTO>(`${this.glossary.UpdateMainContent()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  UpdateServices(Content: ServicesContentDTO) {
    return this.http.post<ServicesContentDTO>(`${this.glossary.UpdateServicesContent()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  UpdateBlog(Content: BlogDTO) {
    return this.http.post<BlogDTO>(`${this.glossary.UpdateBlogs()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  NewBlog(Content: BlogDTO) {
    return this.http.post<BlogDTO>(`${this.glossary.NewBlogs()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  NewMain(Content: BlogDTO) {
    return this.http.post<BlogDTO>(`${this.glossary.NewMainContent()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }

  NewServices(Content: BlogDTO) {
    return this.http.post<BlogDTO>(`${this.glossary.NewServicesContent()}`, Content, { headers: this.headers }).pipe(catchError(this.glossary.ErrorHandler));
  }
}
