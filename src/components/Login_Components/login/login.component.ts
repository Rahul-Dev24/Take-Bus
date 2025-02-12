import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {

  formBuilder: FormBuilder = inject(FormBuilder);
  authService: AuthService = inject(AuthService);
  alertService: AlertService = inject(AlertService);
  router: Router = inject(Router);
  loginForm: FormGroup;
  loading: boolean = false;

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    initFlowbite();
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm?.invalid) return;
    this.loading = true;
    const val = this.loginForm?.value;
    this.authService.loginUser(val?.email, val.password).subscribe({
      next: (res) => {
        this.loading = false;
        this.alertService.showSuccess(res?.message);
        this.authService.setCookie(res?.token);
      },
      complete: () => {
        this.router.navigate(['/admin/home']);
      },
      error: (err) => {
        this.loading = false;
        this.alertService.showError(err);
      }

    });
  }


  ngOnDestroy(): void {
    this.loginForm.reset();
  }


}
