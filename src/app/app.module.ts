import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

import { CartService } from './cart.service';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MenuComponent,
    LoginComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
