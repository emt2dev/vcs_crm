import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path: '', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  {path: 'shop', loadComponent: () => import('./components/shop/shop.component').then((modulePart) => modulePart.
  ShopComponent,),},
  {path: 'product/:productId', loadComponent: () => import('./components/product/product.component').then((modulePart) => modulePart.
  ProductComponent,),},

  {path: 'staff', loadComponent: () => import('./components/staff/staff.component').then((modulePart) => modulePart.StaffComponent),},
  {path: 'user', loadComponent: () => import('./components/user/user.component').then((modulePart) => modulePart.UserComponent),},

  {path: 'register/user', loadComponent: () => import('./components/userlogin/userlogin.component').then((modulePart) => modulePart.UserloginComponent),},

  {path: 'order/:orderId', loadComponent: () => import('./components/order/order.component').then((modulePart) => modulePart.OrderComponent),},

  {path: 'login/user', loadComponent: () => import('./components/userlogin/userlogin.component').then((modulePart) => modulePart.UserloginComponent),},
  {path: 'login/staff', loadComponent: () => import('./components/stafflogin/stafflogin.component').then((modulePart) => modulePart.StaffloginComponent),},

  // {path: '**', loadComponent: () => import('').then((modulePart) => modulePart.),},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


/*

  {path: 'games', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  {path: 'apps', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},

  
  {path: 'user', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  
  {path: 'login/user', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  {path: 'login/staff', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},

  {path: 'register', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},
  {path: 'forgot', loadComponent: () => import('./components/landing/landing.component').then((modulePart) => modulePart.LandingComponent),},

  */