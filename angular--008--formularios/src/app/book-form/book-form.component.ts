import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
// creas formulario, 2. vas al html del book-form.component 3. haces el metodo
  bookForm = new FormGroup({
    title: new FormControl(''), // campo título
    numPages: new FormControl(150), // por defecto tiene 150 paginas
    price: new FormControl(),
    available: new FormControl(true),
    publishDate: new FormControl(),
    // publisDate: new FormControl(new Date().toISOString().slice(0,16)) para que el usuario ponga la fecha
    category: new FormControl(),
    author: new FormControl(),
    // selección múltiple
    topics: new FormControl([]),
  });

  // creamos el metodo save

  save(): void {
    const title = this.bookForm.get('title')?.value;
    console.log(title);

    const numPages = this.bookForm.get('numPages')?.value;
    console.log(numPages);

    const price = this.bookForm.get('price')?.value;
    console.log(price);

    const available = this.bookForm.get('available')?.value;
    console.log(available);

    const publishDate = this.bookForm.get('publishDate')?.value;
    console.log(publishDate);

    const category = this.bookForm.get('category')?.value;
    console.log(category);

    const author = this.bookForm.get('author')?.value;
    console.log(author);

    const topics = this.bookForm.get('topics')?.value;
    console.log(topics);
  }

}
