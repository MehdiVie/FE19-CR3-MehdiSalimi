import { Component , OnInit } from '@angular/core';
import { IMenuIteam } from '../IMenuItem';
import { CartService } from '../cart.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : IMenuIteam[] =[];
  total : number =0;
  cartLenght : number=0;
  finishFlag : boolean = false;
  submitFlag : boolean =false;
  checkOutForm = new FormGroup({
    customer_name : new FormControl("",Validators.required),
    address : new FormControl("",Validators.required)
  });


  constructor (private cartService : CartService , private route : ActivatedRoute ) {

  }


  finish() {
    this.finishFlag = true;
  }

  onSubmit() {
    
    if(this.checkOutForm.valid){
      this.submitFlag = true;
      this.cartService.clearCart();
   }

  }

  delete(id : number) {
    this.cartService.deleteItem(id);
    this.total = this.cartService.calTotal();
  }



  ngOnInit(): void {
      this.cartItems = this.cartService.getCart();
      this.total = this.cartService.calTotal();
      this.cartLenght=this.cartService.cartSize();
    };
}

