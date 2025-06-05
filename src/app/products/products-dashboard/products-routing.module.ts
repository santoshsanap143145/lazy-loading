import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsDashboardComponent } from "./products-dashboard.component";
import { ProdCategoriesComponent } from "../prod-categories/prod-categories.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsDashboardComponent,
    children: [
      {
        path: 'cat',
        component: ProdCategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}