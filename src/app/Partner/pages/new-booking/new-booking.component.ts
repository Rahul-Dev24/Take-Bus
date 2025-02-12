import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../Admin/service/Category';
import { AlertService } from '../../../../services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-booking',
  imports: [CommonModule],
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.scss'
})
export class NewBookingComponent implements OnInit {

  categroyList: Array<any> = [];

  constructor(
    private readonly categoryService: CategoryService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }


  getCategory() {
    this.categoryService.getCategory().subscribe({
      next: (res) => {
        this.categroyList = res?.data;
      },
      error: (err) => {
        this.alertService.showError(err);
      }
    })
  }

}
