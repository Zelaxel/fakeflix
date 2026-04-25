import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
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
    private http: HttpClient,
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

  login() {
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



    this.http.get<any>('/data/users.json').subscribe((data) => {
      const user = data.users.find((u: any) => u.email === email);

      if (!user) {
        alert('Usuario no encontrado');
        return;
      }

      if (user.password !== password) {
        alert('Contraseña incorrecta');
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', email);

      this.router.navigate(['/home']);
    });

  }
}



