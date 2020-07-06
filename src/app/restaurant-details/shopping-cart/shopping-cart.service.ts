import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-details/menu-item/menu-item";

export class CartService {
    items: CartItem[] = [];

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
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(p => p.value()).reduce((a,b) => a+b, 0);
    }

}