import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { MoreDetailsComponent } from './pages/more-details/more-details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'product', component: ProductsComponent},
  {path:'more-details/:_id', component: MoreDetailsComponent},
  {path:'more-details',component: MoreDetailsComponent}
];


