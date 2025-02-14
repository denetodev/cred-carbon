// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Aqui você adicionará a lógica de registro
      console.log(this.loginForm.value);
      // Após o registro bem-sucedido, redirecione para o dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  signInWithGoogle(): void {
    // Implemente a lógica de autenticação do Google
    console.log('Sign in with Google clicked');
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
