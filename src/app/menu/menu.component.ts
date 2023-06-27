import { Component } from '@angular/core';
import { IMenuIteam } from '../IMenuItem';
import { MenuItems } from '../MenuItems';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu : IMenuIteam[] = MenuItems;

  constructor(private router : Router , private cartService : CartService) {}

  redirect(id : number) {
    this.cartService.addToCart(id);
  }
}
