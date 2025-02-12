import { Component, inject, Input, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})

export class ToastComponent implements OnInit {

  alertService: AlertService = inject(AlertService);

  @Input() message!: string;
  @Input() type!: string;
  showToast: boolean = true

  ngOnInit(): void {
    setTimeout(() => {
      this.alertService.closeToast();
    }, 3000);
  }

  close() {
    this.alertService.closeToast();
  }

}
