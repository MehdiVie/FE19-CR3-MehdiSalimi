import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { IMenuIteam } from '../IMenuItem';
import { MenuItems } from '../MenuItems';
import { CartService } from '../cart.service';
import {HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

menuItem : IMenuIteam = {} as IMenuIteam;
id : number = 0;
order : string ="";

constructor (private route : ActivatedRoute,
  private cartService : CartService) {

}

addToCart() {
  this.cartService.addToCart(this.id);
}

ngOnInit(): void {
  
  this.route.params.subscribe((params : Params)=> {
    
    this.id = params['itemId'];
    this.menuItem = MenuItems[this.id];

  });
}

}
