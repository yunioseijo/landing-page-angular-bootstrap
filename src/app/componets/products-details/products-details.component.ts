import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export default class ProductsDetailsComponent implements OnInit {

  producto: string = '';
  _route = inject(ActivatedRoute);


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log('Nombre del producto',params);
      this.producto = params['id'];

      });
    }
}
