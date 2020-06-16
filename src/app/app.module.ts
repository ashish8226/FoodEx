import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { AuthComponent } from './ui/user-auth/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './ui/home/home.component';
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";

import {environment} from "../environments/environment";
import {ProfileComponent} from "./ui/user-auth/profile/profile.component";
import { BookTableComponent } from './ui/book-table/book-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    HomeComponent,
    ProfileComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
