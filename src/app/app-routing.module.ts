import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './ui/user-auth/auth/auth.component';
import {PageNotFoundComponent} from './ui/page-not-found/page-not-found.component';
import {HomeComponent} from './ui/home/home.component';
import {ProfileComponent} from "./ui/user-auth/profile/profile.component";
import {BookTableComponent} from "./ui/book-table/book-table.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'booktable',component:BookTableComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
