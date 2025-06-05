import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-prod-categories',
  templateUrl: './prod-categories.component.html',
  styleUrls: ['./prod-categories.component.scss']
})
export class ProdCategoriesComponent implements OnInit {
  productsArray: Array<Iproduct> = []
  category!: string
  constructor(private _route: ActivatedRoute, private _productService: ProductService){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this._route.queryParamMap.subscribe(params => {
      this.category = params.get('category')!;
      console.log(this.category);
    });

    this._productService.getProductsByCategory(this.category).subscribe(data => {
      this.productsArray = data
      console.log(this.productsArray);
      
    })
  }
}
