import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ikea',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ikea.component.html',
  styleUrl: './ikea.component.css'
})
export class IkeaComponent {
  nombres: string[] = ["hola", "desde", "ikea", "component"];


}
