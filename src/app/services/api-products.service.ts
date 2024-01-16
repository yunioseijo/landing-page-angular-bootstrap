import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  private _baseUrl = 'https://dummyjson.com/products';
  private _httpClient = inject(HttpClient)

  constructor() { }

  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._baseUrl);
  }
  public getProductById(id: number): Observable<any> {
    // return this._httpClient.get<IProduct>(this._baseUrl+'/'+id);
    return this._httpClient.get<any>(`${this._baseUrl}/${id}`);
  }
  public getProductSorted(sort: string): Observable<IProduct[]> {
    const params = sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this._baseUrl}${params}`);
  }

  public getCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this._baseUrl}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this._baseUrl}`, product);
  }

  public updateProduct(product: IProduct, productId: number): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this._baseUrl}/${productId}`, product);
  }

  public deleteProduct(productId: number) : Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this._baseUrl}/${productId}`);
  }

}
