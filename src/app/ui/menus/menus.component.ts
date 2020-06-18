import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Menu} from 'src/app/models/menu';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: Menu[]=[];

  constructor(private menuService: MenuService, private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.menuService.getMenus().subscribe((data) => {
      for(let menu in data){
        this.menus.push(data[menu]);
      }
      console.log(this.menus);
      this.spinnerService.hide();
    }, (err) => {
      console.log("error", err);
      this.spinnerService.hide();
    })
    console.log(2);
  }

}
