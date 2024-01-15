import { NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export default class ProductsDetailsComponent implements OnInit {

  producto: string = '';
  category: string = '';
  _route = inject(ActivatedRoute);


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log('Nombre del producto',params);
      this.producto = params['id'];
      this.category = params['category'];

      });
    }
}
