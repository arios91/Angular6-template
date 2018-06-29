import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuotesComponent } from './components/quotes/quotes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quotes', component: QuotesComponent},
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
