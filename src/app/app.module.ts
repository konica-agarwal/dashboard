import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { MylistsComponent } from './mylists/mylists.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ModulesComponent } from './modules/modules.component';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    MylistsComponent,
    MainpageComponent,
    DashboardComponent,
    ContactSalesComponent,
    ModulesComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [ProductsService,
  CartService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
