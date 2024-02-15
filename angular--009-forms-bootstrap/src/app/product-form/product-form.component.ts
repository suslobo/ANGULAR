import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manufacturer } from '../interfaces/manufacturer.model';
import { Category } from '../interfaces/category.model';
import { Product } from '../interfaces/product-moles';
import { tick } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  // estos datos se recuperarían de BACKEND
  // utilizando un SERVICIO o
  // directamente un httpClient y peticiones GET

  // 1. creas formulario, 2. vas al html del product-form.component 3. haces el metodo

manufacturers: Manufacturer[] = [
  {id: 1, name: "FilaMotor", year: 2012},
  {id: 2, name: "Pepsi", year: 1915},
  {id: 3, name: "Cocacola", year: 1915}];

categories: Category[] = [
  {id: 1, name: "Bebidas"},
  {id: 2, name: "Carne"},
  {id: 3, name: "Legumbres"},
  {id: 4, name: "Vegan"}];

productForm = new FormGroup({
  id: new FormControl(), // campo id
  title: new FormControl('', Validators.required),
  price: new FormControl(null, [Validators.min(0), Validators.max(500)]),
  available: new FormControl(false),
  publishDate: new FormControl(null),
  manufacturer: new FormControl(), // bucle for
  categories: new FormControl([])
});

constructor(private httpClient: HttpClient) {}

save(): void {
  console.log('invocando save');
  // extraer el valor de cada campo del formulario para crear un objeto Product
  const product: Product = {
    id: this.productForm.get('id')?.value ?? 0,
    title: this.productForm.get('title')?.value ?? '',
    price: this.productForm.get('price')?.value ?? 0,
    available: this.productForm.get('available')?.value ?? false,
    publishDate: this.productForm.get('publishDate')?.value ?? new Date(),
    manufacturer: this.productForm.get('manufacturer')?.value,
    categories: this.productForm.get('categories')?.value ?? []
  };
    // el objeto se puede enviar a backend
  // httpClient.post
  console.log(product);
  // CREATE de las operaciones CRUD
  this.httpClient.post<Product>('http://localhost:3000/products', product).subscribe(data => console.log(data));
}
}