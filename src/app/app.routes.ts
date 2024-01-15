import { Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import ProductsComponent from './componets/products/products.component';
import ProductsDetailsComponent from './componets/products-details/products-details.component';
import ContactComponent from './componets/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id/:category', component: ProductsDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
