import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './ui/nav-bar/nav-bar.component';
import {AuthComponent} from './ui/user-auth/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './ui/home/home.component';
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";

import {environment} from "../environments/environment";
import {ProfileComponent} from "./ui/user-auth/profile/profile.component";
import {BookTableComponent} from './ui/book-table/book-table.component';
import {ChefsComponent} from './ui/chefs/chefs.component';
import {FormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { AdminComponent } from './ui/admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import { MenusComponent } from './ui/menus/menus.component';
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    HomeComponent,
    ProfileComponent,
    BookTableComponent,
    ChefsComponent,
    AdminComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
