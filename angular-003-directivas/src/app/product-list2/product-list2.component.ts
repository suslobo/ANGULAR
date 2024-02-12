import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list2.component.html',
  styleUrl: './product-list2.component.css'
})
export class ProductList2Component {
[x: string]: any;

}
