import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-details/menu-item/menu-item";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";



@Injectable()
export class CartService {
    items: CartItem[] = [];


    constructor(private notification: NotificationService){}

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);
        if (foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push(new CartItem(item));
        }
        this.notification.notify(`${item.name} foi adicionado ao carrinho!`)
    }

    increaseQty(item: CartItem) {
        item.quantity++;
    }

    decreaseQtyy(item: CartItem) {
        item.quantity--;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notification.notify(`${item.menuItem.name} foi removido do carrinho.`)
    }

    total(): number {
        return this.items.map(p => p.value()).reduce((a,b) => a+b, 0);
    }

}