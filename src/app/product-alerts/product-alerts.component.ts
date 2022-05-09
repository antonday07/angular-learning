import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {

  counter: number = 0;
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  notifyMe() {
    this.counter++;
    this.notify.emit(this.counter);
  }

}
