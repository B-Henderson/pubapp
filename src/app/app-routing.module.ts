import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {HistoryComponent} from './history/history.component';
import {ShareComponent} from './share/share.component';
import { PubComponent } from './pub/pub.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  	path: 'home',
  	component: HomeComponent
  },
  {
    path: 'pub',
    component: PubComponent,
    children: [
      {
        path: ':id',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
