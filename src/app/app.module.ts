import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductlistComponent } from './productlist/productlist.component';
=======
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
>>>>>>> 20eb9023da328a1e7bdbb51838358dd1e5a0e7dc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DashBoardComponent,
    ProductlistComponent
=======
    ProductinfoComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
>>>>>>> 20eb9023da328a1e7bdbb51838358dd1e5a0e7dc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
