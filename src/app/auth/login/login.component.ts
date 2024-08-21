// export class LoginComponent {
//   loginForm!: FormGroup;
//   errorMessage: string = '';

//   constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required, Validators.minLength(3)]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   get username() {
//     return this.loginForm.get('username');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   onLogin(): void {
//     if (this.loginForm.invalid) {
//       return;
//     }

//     const { username, password } = this.loginForm.value;
//     this.authService.login(username, password).subscribe(success => {
//       if (success) {
//         this.router.navigate(['/dashboard'], { replaceUrl: true });
//       } else {
//         this.errorMessage = 'Invalid username or password';
//       }
//     });
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../core/store/auth/auth.actions';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    console.log(1)
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    this.store.dispatch(login({ username, password }));
  }
}
