import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../interfaces/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // 2. crear formulario
  registerForm = this.fb.group({
    nickname: [''],
    email: [''],
    phone: [''],
    password: ['']
  });

  // 1. constructor
  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) {}

  // 3. metodo save
  save(){
    let register: Register = {
      nickname: this.registerForm.get('nickname')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      phone: this.registerForm.get('phone')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
    }

  // 4. enviar POST para que llegue al backend
  let url = 'http://localhost:3000/register';
  this.httpClient.post<Register>(url, register).subscribe(res => {
    console.log(res);
  }); 
  }

}
