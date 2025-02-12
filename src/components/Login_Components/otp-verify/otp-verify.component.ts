import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.scss'
})
export class OtpVerifyComponent implements OnInit, OnDestroy {

  otpForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  authService: AuthService = inject(AuthService);
  alertService: AlertService = inject(AlertService);
  otpTimer: any = 300;  //5 min
  otpInterval: any;
  otpTimeFormat: any = 5.00;
  verificationCode!: number;
  userId: string = '';
  loading: boolean = false

  constructor() {
    this.otpForm = this.formBuilder.group({
      1: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      2: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      3: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      4: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      5: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }
  ngOnInit(): void {
    this.startOtpTimer();
  }


  otpVerify() {
    this.loading = true
    this.otpForm.markAllAsTouched();
    if (this.otpForm.invalid) return;
    const otp = parseInt(Object.values(this.otpForm.value)?.join(""));
    this.authService.otpVerify(otp, this.userId).subscribe({
      next: (res) => {
        this.alertService.showSuccess(res?.message);
        this.loading = false
      },
      error: (err) => {
        this.alertService.showError(err);
        this.loading = false;
      }
    })

  }

  resentOtp() {

  }


  startOtpTimer() {
    this.otpInterval = setInterval(() => {
      this.otpTimeFormat = this.getFormattedTime(this.otpTimer--);
    }, 1000);
  }

  // Convert seconds to MM:SS format
  getFormattedTime(time: number) {
    if (time <= 1) {
      clearInterval(this.otpInterval);
      return;
    }
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // Focus the next input field when a value is entered
  focusNext(event: Event, index: number): void {
    const currentInput = event.target as HTMLInputElement;
    if (currentInput.value.length === 1) {
      // Focus the next input field
      const nextInput = document.getElementsByClassName('otp-input')[index + 1] as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  ngOnDestroy() {
    clearInterval(this.otpInterval);
    this.otpForm.reset();
  }
}
