import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, productsList } from '../products/products.mock';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [NgStyle,CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export default class ProductsDetailsComponent implements OnInit {

  product?: IProduct;
  listProducts: IProduct[]= productsList
  
  _route = inject(ActivatedRoute);


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      
      this.product = this.listProducts.find(prod => prod.id == params['id']);
      

      });
    }
}
