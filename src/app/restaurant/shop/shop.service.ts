import { Shop } from "app/restaurant/shop/shop.model";
import { MEAT_API } from "app/app.api";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "../../error-handler";


import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable()
export class ShopService {
    constructor(private https: HttpClient) {
    }


    shops(name?: string): Observable<Shop[]> {
        let params: HttpParams;
        if (name) {
            params = new HttpParams().set('q',name);
        }
        return this.https.get<Shop[]>(`${MEAT_API}/restaurants`, {params: params}).catch(ErrorHandler.handleError);
    }

    shopById(id: string): Observable<Shop> {
        return this.https.get<Shop>(`${MEAT_API}/restaurants/${id}`).catch(ErrorHandler.handleError);
    }

    reviewOfRestaurant(id: string): Observable<any> {
        return this.https.get<any>(`${MEAT_API}/restaurants/${id}/reviews`).catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<any> {
        return this.https.get<any>(`${MEAT_API}/restaurants/${id}/menu`).catch(ErrorHandler.handleError);
    }

}