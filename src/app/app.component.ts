import { Component, effect, inject, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ToastComponent } from '../components/toast/toast.component';
import { AlertService } from '../services/alert.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FooterComponent } from "../components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ToastComponent, FormsModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  router: Router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  alertService: AlertService = inject(AlertService);
  authService: AuthService = inject(AuthService);
  alertData !: Alert;
  role: string = "user";

  constructor() {
    effect(() => {
      this.role = this.authService.role();
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.alertService.currentMessage$.subscribe((res: Alert) => {
      this.alertData = res;
    });
  }
}


interface Alert {
  message: string,
  type: string
}