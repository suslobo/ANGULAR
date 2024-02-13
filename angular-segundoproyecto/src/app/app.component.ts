import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IkeaComponent } from "./ikea/ikea.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [IkeaComponent]
})
export class AppComponent {
  title = 'angular-segundoproyecto';
}
