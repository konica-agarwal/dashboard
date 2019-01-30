import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MylistsComponent } from './mylists/mylists.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'mainpage', component: MainpageComponent },
{ path: 'mylists', component: MylistsComponent},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'modules', component: ModulesComponent },
{ path: 'shopping-cart', component: ShoppingCartComponent },
]

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
