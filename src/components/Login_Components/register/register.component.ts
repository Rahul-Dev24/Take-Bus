import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {

  formBuilder: FormBuilder = inject(FormBuilder);
  authService: AuthService = inject(AuthService);
  alertService: AlertService = inject(AlertService);
  router: Router = inject(Router);
  registerForm: FormGroup;
  loading: boolean = false;

  constructor() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [''],
      phoneNo: [null, [Validators.required, Validators.minLength(10), Validators.pattern(/^\d+$/), Validators.maxLength(10)]]
    });
  }
  register() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) return;
    const val = this.registerForm.value;
    if (val?.password !== val?.confirmPassword) {
      alert("Password must be same.");
      return;
    }
    this.loading = true;
    delete val['confirmPassword'];
    this.authService.regesterUser(val).subscribe({
      next: (res) => {
        console.log(res);
        // this.userId = res?._id;
        // this.verificationCode = res?.verificationCode;
        this.router.navigate(['/otp-verify']);
      },
      complete: () => {
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.alertService.showError(err);
      }
    })
  }

  ngOnDestroy() {
    this.registerForm.reset();
  }

}
