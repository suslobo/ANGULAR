import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  // creamos un array de string 
  nombres: string[] = ["Susana", "Almu"];

}
