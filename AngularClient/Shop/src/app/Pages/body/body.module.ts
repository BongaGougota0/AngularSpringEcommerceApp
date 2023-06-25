import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from '../../home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagefooterComponent } from './pagefooter/pagefooter.component';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    PageheaderComponent,
    PagefooterComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
