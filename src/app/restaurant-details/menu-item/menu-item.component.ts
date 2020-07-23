import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item';
import { transition, trigger, state, style, animate } from '@angular/animations';
@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('appear', [
      state('ready', style({
        opacity: 1,
      })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms 0s ease-in-out')
      ]),
    ])]
})

export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  menuStatus = 'ready'

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
