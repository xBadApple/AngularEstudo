import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from 'app/order/order.service.model';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = () => this.orderService.getItens().length === 0 ? 0 : 8;
  formGroup: FormGroup;

  paymentOptions: RadioOption[] = [
    new RadioOption("Dinheiro", "DIN"),
    new RadioOption("Cartão de Crédito", "CRE"),
    new RadioOption("Cartão de Débito", "DEB")
  ]

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder)
              { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address: this.formBuilder.control('', [Validators.required]),
      optionalAddress: this.formBuilder.control(''),
      number: this.formBuilder.control('', [Validators.pattern(/^[0-9]*$/), Validators.required]),
      paymentOption: this.formBuilder.control('', Validators.required),
    });
  }

  cartItems(): CartItem[] {
    return this.orderService.getItens();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsValue(): number {
    return this.orderService.total();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      this.orderService.clear();
    })
  }

}
