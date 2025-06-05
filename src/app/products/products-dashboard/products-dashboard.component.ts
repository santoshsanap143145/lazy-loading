import { Component, OnInit } from '@angular/core';
import { Icategory } from '../models/category.model';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
})
export class ProductsDashboardComponent implements OnInit {
  arr = [1, 2, 4, 5, 6, 4, 2];
  caragaryArr: Array<Icategory> = [
  {
    category: 'Books and Toys',
    subcategories: ['Books', 'Toys'],
  },
  {
    category: 'Electronics',
    subcategories: ['Printer', 'Tablets', 'Headphones'],
  },
  {
    category: 'Fashion',
    subcategories: ['Sunglasses', 'Perfume'],
  },
  {
    category: 'Gaming',
    subcategories: [],
  },
  {
    category: 'Laptops',
    subcategories: ['MacBook', 'Windows', 'Chromebook'],
  },
  {
    category: 'Mobiles',
    subcategories: ['Android', 'iPhones'],
  },
  {
    category: 'Mobile Accessories',
    subcategories: ['Phone Cases', 'Earphones', 'SmartWatch'],
  },
];
  constructor() {}

  ngOnInit(): void {

  }


}


