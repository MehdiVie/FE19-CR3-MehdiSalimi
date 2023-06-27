import { Injectable } from '@angular/core';
import { IMenuIteam } from './IMenuItem';
import { MenuItems } from './MenuItems';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cardItems : IMenuIteam[] = [];
  

  constructor(private router : Router) { }

  getCart() {

    return (this.cardItems);

  }

  clearCart() {

    this.cardItems = [];
    return;

  }

  deleteItem(id : number) {
    this.cardItems.splice(id,1);
    return;
  }

  addToCart(id : number) {
    this.cardItems.push(MenuItems[id]);
    window.alert('Your product has been added to the cart!');
    this.router.navigateByUrl(`cart`);
  }

  cartSize() {
    return (this.cardItems.length);
  }

  calTotal() {
    let total = 0;
    for(let item of this.cardItems) {
      total += item.price;
    }
    return total;
  }
}
