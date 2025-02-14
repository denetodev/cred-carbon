import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      userType: ['Individual', Validators.required], // Tipo de usuário (Individual ou Business)
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulário enviado:', this.registerForm.value);
      // Aqui você pode adicionar a lógica de registro
      this.router.navigate(['/dashboard']); // Redirecionar após o registro
    }
  }
}
