import { Component, EventEmitter, Output } from '@angular/core';
import { ListOrder } from '../../types/types';

@Component({
  selector: 'app-order-switcher',
  templateUrl: './order-switcher.component.html',
})
export class OrderSwitcherComponent {
  order?: ListOrder;
  @Output() changeOrder = new EventEmitter<ListOrder>();

  constructor() {}

  onClick(order: ListOrder) {
    this.order = order;
    this.changeOrder.emit(order);
  }
}
