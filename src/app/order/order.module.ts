import { NgModule } from "@angular/core";
import { DeliveryComponent } from "app/order/delivery/delivery.component";
import { ItemsPedidoComponent } from "app/order/items-pedido/items-pedido.component";
import { OrderComponent } from "app/order/order.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";

const ROUTES: Routes = [
    { path: '', component: OrderComponent }
];


@NgModule({
    declarations: [
        DeliveryComponent,
        ItemsPedidoComponent,
        OrderComponent
    ],

    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        DeliveryComponent,
        ItemsPedidoComponent,
        OrderComponent
    ]

})




export class OrderModule{
}