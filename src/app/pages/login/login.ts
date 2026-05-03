import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  submitted = false;
  emailInvalid = false;
  passwordInvalid = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  navegarASignin(email: string) {
    this.router.navigate(['/signin'], { queryParams: { email: email } });
  }

  async login() {
    this.submitted = true;

    const { email, password } = this.form.value;

    const emailControl = this.form.get('email');
    const passwordControl = this.form.get('password');

    if (emailControl?.invalid) {
      this.emailInvalid = true;
      return;
    }

    this.emailInvalid = false;

    if (passwordControl?.invalid) {
      this.passwordInvalid = true;
      return;
    }

    this.passwordInvalid = false;

    try {
      await this.authService.login(email, password);

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', email);

      this.router.navigate(['/']);
    } catch (error) {
      alert('Email o contraseña incorrectos');
    }
  }
}



