import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

// Pages & Routes
// Dashboards
import { StaffComponent } from './components/staff/staff.component';
import { UserComponent } from './components/user/user.component';

// Entry-ways
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { StaffloginComponent } from './components/stafflogin/stafflogin.component';

// Stripe Success Or Failures
// Without Class in Cart
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { OrderfailureComponent } from './components/orderfailure/orderfailure.component';

// With Class in Cart

// Modules
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './modules/cart/cart.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        NavbarComponent,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LandingComponent,
        MatToolbarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StaffComponent,
        UserComponent,
        UserloginComponent,
        StaffloginComponent,
        OrdersuccessComponent,
        OrderfailureComponent,
        FooterComponent,
        ShopComponent,
        ProductComponent,
        CartComponent,
    ]
})
export class AppModule { }