import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productsList } from './products.mock';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],// Para usar el pipe currency hay que importar commonmodule
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {
  productsList = productsList;
  
  }
