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
import { select, Store } from '@ngrx/store';
import { login } from '../../core/store/auth/auth.actions';
import { filter, tap } from 'rxjs';
import { selectAuthError, selectAuthLoading } from '../../core/store/auth/auth.selectors';


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
  errorMessage: string | null = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Listen to loading and error states
    this.store.pipe(
      select(selectAuthLoading),
      tap(loading => this.isLoading = loading)
    ).subscribe();

    this.store.pipe(
      select(selectAuthError),
      filter(error => !!error),
      tap(error => {
        this.isLoading = false;
        this.errorMessage = error;
      })
    ).subscribe();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {

    this.isLoading = true;

    if (this.loginForm.invalid) {
      this.isLoading = false;
      return;
    }
    const { username, password } = this.loginForm.value;
    this.store.dispatch(login({ username, password }));
  }
}
