import { Component } from '@angular/core';
import { StoreListComponent } from './store-list/store-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StoreListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_material';
}
