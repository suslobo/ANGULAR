import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manufacturer } from '../interfaces/manufacturer.model';
import { Category } from '../interfaces/category.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  // estos datos se recuperarían de BACKEND
  // utilizando un SERVICIO o
  // directamente un httpClient y peticiones GET

  // 1. creas formulario, 2. vas al html del product-form.component 3. haces el metodo

manufacturers: Manufacturer[] = [
  {id: 1, name: "filaMotor", year: 2012},
  {id: 2, name: "Pepsi", year: 1915},
  {id: 3, name: "Cpocacola", year: 1915}];
  
categories: Category[] = [
  {id: 1, name: "Bebidas"},
  {id: 2, name: "Carne"},
  {id: 3, name: "Legumbres"},
  {id: 4, name: "Vegan"}];

productForm = new FormGroup({
  id: new FormControl({disabled: true}), // campo id
  title: new FormControl('', Validators.required),
  price: new FormControl(0, [Validators.min(0), Validators.max(500)]),
  available: new FormControl(false),
  publishDate: new FormControl(null),
  manufacturer: new FormControl(null),
  categories: new FormControl([])
});

save(): void {

}

}
