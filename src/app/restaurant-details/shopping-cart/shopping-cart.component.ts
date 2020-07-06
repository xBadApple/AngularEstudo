import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.cartService.items;
  }

  total(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  addItem(item: any) {
    this.cartService.addItem(item);
  }

}
