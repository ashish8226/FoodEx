import { Component, OnInit } from '@angular/core';
import {AuthProvider,Theme} from "ngx-auth-firebaseui";
import {AuthService} from "../../../shared/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  providers:AuthProvider;
  themes=Theme;
  constructor(private authService :AuthService) { }

  ngOnInit(): void {
  }

  printUser($event: any) {
  console.log(event);
    console.log('success');
    this.authService.userLoggedIn=true;

  }

  printError(event) {
    console.log(event);
    console.log('failed');
  }
}
