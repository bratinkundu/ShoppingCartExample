import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListModule } from './product-list/product-list.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
