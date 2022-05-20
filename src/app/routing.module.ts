import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routing: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routing,
      { enableTracing: true }
    ),
    CommonModule,
  ],

  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
