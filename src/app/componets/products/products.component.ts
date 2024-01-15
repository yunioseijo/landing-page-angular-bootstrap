import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {

  loading: boolean = true;
  _route = inject(ActivatedRoute);


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log(params['id']);
      });
    }
  
  }
