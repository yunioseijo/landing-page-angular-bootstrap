import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiProductsService } from '../../services/api-products.service';


@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [NgStyle,CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export default class ProductsDetailsComponent implements OnInit {

  product?    : any;
  listProducts: IProduct[]  = []
  color       : string      =  '';
  
  private _route = inject(ActivatedRoute);
  private _apiProduct = inject(ApiProductsService);


  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        const productId = Number(params['id']);
        this._apiProduct.getProductById(productId).subscribe({
          next: (product: any) => {
            console.log(`este es el producto: ${product}`);
            this.product = product;
            this.color = product?.price > 500 ? 'red' : 'green';
          },
          error: (err) => {
            console.error('Error fetching product:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error with route params:', err);
      }
    });
  }
}
