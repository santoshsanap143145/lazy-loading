import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-dashboard/products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdCategoriesComponent } from './prod-categories/prod-categories.component';
import { ProductService } from './productService/product.service';

@NgModule({
  declarations: [ProductsDashboardComponent, ProductComponent, ProdCategoriesComponent],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
  providers: [ProductService]
})
export class ProductsModule {
  constructor() {
    console.log(`Products module loaded!!!`);
  }
}
