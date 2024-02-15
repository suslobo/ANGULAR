import { Component } from '@angular/core';
import { ProductFormComponent } from "./product-form/product-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ProductFormComponent]
})
export class AppComponent {
  title = 'angular--009-forms-bootstrap';
}
