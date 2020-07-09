import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'app/order/order.service.model';

@Component({
  selector: 'mt-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {

  @Input() delivery;
  @Input() itemsValue;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }



}
