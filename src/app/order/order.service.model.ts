import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { CartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Order } from "app/order/order.model";

import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService, private http: Http) {
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
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }

}