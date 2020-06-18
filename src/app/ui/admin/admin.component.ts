import {Component, OnInit} from '@angular/core';
import {Menu} from "../../models/menu";
import {NgForm} from "@angular/forms";
import {Chef} from "../../models/chef";
import {MenuService} from "../../services/menu.service";
import {ChefService} from "../../services/chef.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  model_menu = new Menu('', '', 0, '', 0, [''], '');
  model_chef = new Chef('', '', '');

  constructor(private menuService: MenuService, private chefService: ChefService) {
  }

  ngOnInit(): void {
  }

  onMenuSubmit(menu: NgForm) {
    menu.value.timestamp = +new Date();
    this.menuService.addMenu(menu.value).subscribe((data) => {
      console.log("success", data);
    }, (err) => {
      console.log("error", err);
    });
  }

  onChefSubmit(chef: NgForm) {
    console.log(chef.value);
  }
}
