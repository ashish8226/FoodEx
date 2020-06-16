import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userLoggedIn = false;

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.userLoggedIn=this.authService.userLoggedIn;
  }

}
