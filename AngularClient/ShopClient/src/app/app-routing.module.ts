import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ShopComponent } from './Layouts/products/shop/shop.component';
import { DetailComponent } from './Layouts/products/detail/detail.component';
import { NotFoundComponent } from './Layouts/not-found/not-found.component';

const routes: Routes = 
[
  {path: '/shop',
   loadChildren: () =>
    import('./Layouts/products/products.module').then( m => m.ProductsModule )
  },
  {path: '/detail',
   loadChildren: () =>
    import('./Layouts/products/products.module').then( m => m.ProductsModule )
  },
  {path: '**', component:NotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
