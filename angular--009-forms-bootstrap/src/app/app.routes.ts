import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
  // Listado de productos
  {
    path: '',
    component: ProductListComponent
  },
  // La pantalla de detalle de un solo producto
  {
    path: 'products/:id/detail',
    component: ProductDetailComponent
  },
  // La pantalla de creación de un nuevo producto
  {
    path: 'products/create',
    component: ProductFormComponent
  },
  // La pantalla de actualizar un prod existente
  {
    path: 'products/:id/update',
    component: ProductFormComponent
  }
];

// sudo rm -rf product-list