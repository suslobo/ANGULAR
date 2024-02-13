import { Component } from '@angular/core';
import { Componente1Component } from "./componente1/componente1.component";
import { Componente2Component } from "./componente2/componente2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [Componente1Component, Componente2Component]
})
export class AppComponent {
  title = 'angular-primerproyecto';
}
