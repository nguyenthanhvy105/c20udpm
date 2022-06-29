import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'order', loadChildren: () => import('../app/order/order.module').then(m => m.OrderModule)},
  {path: 'product', loadChildren: () => import('../app/product/product.module').then(m => m.ProductModule)},
  {path: 'customer', loadChildren: () => import('../app/customer/customer.module').then(m => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
