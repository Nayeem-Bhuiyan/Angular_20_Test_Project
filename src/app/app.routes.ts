import { Routes } from '@angular/router';
import { ListProduct } from './component/product/list-product/list-product/list-product';

export const routes: Routes = [
  { path: '', component: ListProduct },
  { path: '**', redirectTo: '' }
];

