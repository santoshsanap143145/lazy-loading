import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Iproduct
  constructor() { }

  ngOnInit(): void {
  }

}
