import { Component } from '@angular/core';
import { Customer } from '../interfaces/customer.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {

  // crear atributo
  customer: Customer | undefined;

  constructor() {
    this.customer = {
      id: 1,
      firstName: "Juanito",
      email: "juanito@gmail.com",
      nif: "34234334534",
      birthday: new Date(1990, 0, 15),
      active: true
    }
  }

}
