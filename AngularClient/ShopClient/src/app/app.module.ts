import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { NavigationComponent } from './Layouts/navigation/navigation.component';
import { CartComponent } from './Layouts/cart/cart.component';
import { CheckoutComponent } from './Layouts/checkout/checkout.component';
import { ContactComponent } from './Layouts/contact/contact.component';
import { NotFoundComponent } from './Layouts/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
