import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// import {GalleryComponent} from './components/gallery/gallery.component';
// import {EventsComponent} from './components/events/events.component';
// import {ViewProductComponent} from './components/view-product/view-product.component';
// import {CartComponent} from './components/cart/cart.component';
// import {ReceiptComponent} from './components/receipt/receipt.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
// import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
// import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'gallery', component: GalleryComponent},
  // {path: 'events', component: EventsComponent},
  // {path: 'product/:id', component: ViewProductComponent},
  // {path: 'cart', component: CartComponent},
  // {path:'receipt', component: ReceiptComponent},
  // {path:'adminLogin', component: AdminLoginComponent},
  // {path:'adminDashboard', component: AdminDashComponent},
  // {path:'contact', component: ContactComponent},
]

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [
    RouterModule.forRoot(routes)
  ],

  declarations: [

  ]
})
export class AppRoutingModule { }
