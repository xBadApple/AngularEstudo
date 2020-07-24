import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { CartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Order } from "app/order/order.model";

import { MEAT_API } from "../app.api";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService, private http: HttpClient) {
    }

    getItens(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        return this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        return this.cartService.decreaseQtyy(item);
    }

    remove(item: CartItem) {
        return this.cartService.removeItem(item);
    }

    total() {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }

}