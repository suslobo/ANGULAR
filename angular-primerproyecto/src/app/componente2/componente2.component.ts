import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  nombres: string[] = ["Bea", "Gemma"];

}
