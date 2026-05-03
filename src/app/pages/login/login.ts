import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  submitted = false;
  emailInvalid = false;
  passwordInvalid = false;
  form: FormGroup;

  @Input() email?: string = '';

  ngOnInit(): void {
    console.log(this.email)
    if(this.email) {
      this.form.patchValue({
        email: this.email
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private firebase: FirebaseService
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
      const userId: string = (await this.authService.login(email, password)).user.uid;
      const user: User = await firstValueFrom(this.firebase.getUserData(userId));

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', email);
      localStorage.setItem('uid', userId);


      this.router.navigate(['/home']);
    } catch (error) {
      alert('Email o contraseña incorrectos');
    }
  }
}
