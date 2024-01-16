import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productsList } from './products.mock';
import { CommonModule, NgClass } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { ApiProductsService } from '../../services/api-products.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],// Para usar el pipe currency hay que importar commonmodule
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];
  private _apiService = inject(ApiProductsService);
  
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.productsList = data.products;
    });
  }

  
  }
