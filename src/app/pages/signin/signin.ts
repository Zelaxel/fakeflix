import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin implements OnInit {
  formData = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  submitted = false;

  emailError = '';
  passwordError = '';
  repeatPasswordError = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.formData.email = params['email'];
      }
    });
  }

  async onSubmit() {
    if (this.formData.username == '') {
      alert('Error falta el nombre de usuario');
      return;
    }

    if (this.formData.email == '') {
      alert('Error: falta el email');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.formData.email)) {
      alert('Error: formato de email inválido');
      return;
    }

    if (this.formData.password == '') {
      alert('Error: falta el password');
      return;
    }

    if (this.formData.repeatPassword == '') {
      alert('Error: falta repetir el password');
      return;
    }

    if (this.formData.password != this.formData.repeatPassword) {
      alert('Error: La contrseña y repetir contraseña no coinciden');
      return;
    }




  }
}
