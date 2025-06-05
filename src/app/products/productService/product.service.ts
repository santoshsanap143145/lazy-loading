import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/product.model';

@Injectable()
export class ProductService {
 BASE_URL: string = `${environment.BASE_URL}`;
PRODUCT_FILTER_URL: string = `${this.BASE_URL}/products/filter`;

constructor(private _http: HttpClient) {}


getProductsByCategory(category: string): Observable<Iproduct[]> {
  const url = `${this.PRODUCT_FILTER_URL}?category=${category}`;
  return this._http.get<Iproduct[]>(url);
}

}
