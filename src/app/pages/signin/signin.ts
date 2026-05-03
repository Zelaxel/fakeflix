import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterModule],
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.formData.email = params['email'];
      }
    });
  }

  async onSubmit() {
    if (!this.formData.username) {
      alert('Falta el nombre de usuario');
      return;
    }

    if (!this.formData.email) {
      alert('Falta el email');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.formData.email)) {
      alert('Formato de email inválido');
      return;
    }

    if (!this.formData.password) {
      alert('Falta el password');
      return;
    }

    if (!this.formData.repeatPassword) {
      alert('Falta repetir el password');
      return;
    }

    if (this.formData.password !== this.formData.repeatPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const userCredential = await this.authService.register(
        this.formData.email,
        this.formData.password
      );

      const uid = userCredential.user.uid;


      await setDoc(doc(this.firestore, 'users', uid), {
        name: this.formData.username,
        email: this.formData.email,
      });

      alert('Usuario creado correctamente');


      this.router.navigate(['/login'], {
        queryParams: { email: this.formData.email },
      });

    } catch (error: any) {
      alert('Error al registrar: ' + error.message);
    }
  }
}
