import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,

    DashBoardComponent,
    ProductlistComponent,

    ProductinfoComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
