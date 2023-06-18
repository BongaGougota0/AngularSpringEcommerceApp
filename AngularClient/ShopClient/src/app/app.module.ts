import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Layouts/home/home.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { NavigationComponent } from './Layouts/navigation/navigation.component';
import { DetailComponent } from './Layouts/detail/detail.component';
import { ShopComponent } from './Layouts/shop/shop.component';
import { CartComponent } from './Layouts/cart/cart.component';
import { CheckoutComponent } from './Layouts/checkout/checkout.component';
import { ContactComponent } from './Layouts/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    DetailComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
