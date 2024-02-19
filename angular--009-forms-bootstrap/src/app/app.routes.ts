import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    // listado de productos
    {
        path: '',
        component: ProductListComponent
    },
    // la pantalla de detalle de un solo producto
    {
        path: 'products/:id/detail',
        component: ProductDetailComponent
    },
    // la pantalla de creacion de un nuevo producto
    {
        path: 'products/create',
        component: ProductFormComponent
    }, 
    // la pantalla de actualizar un producto existe
    {
        path: 'products/:id/update', // actualizar
        component: ProductFormComponent
    }
];