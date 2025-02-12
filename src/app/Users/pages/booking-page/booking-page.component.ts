import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  imports: [CommonModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent implements OnInit {

  @ViewChild('timelineList', { static: false }) timelineList!: ElementRef;

  activeIndex: number = 6; // Default active date index
  dates: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const startDate = '2025-01-01'; // Set the desired start date
    this.dates = this.getOneMonthDates(new Date());
  }

  getOneMonthDates(startDate: Date): { day: string; date: string }[] {
    const dates: { day: string; date: string }[] = [];

    // Generate past 15 days
    for (let i = 15; i > 0; i--) {
      const pastDate = new Date(startDate);
      pastDate.setDate(startDate.getDate() - i);

      dates.push({
        day: pastDate.toLocaleDateString('en-US', { weekday: 'short' }), // e.g., 'Fri'
        date: pastDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }), // e.g., '12 Jun'
      });
    }

    // Add the start date itself
    dates.push({
      day: startDate.toLocaleDateString('en-US', { weekday: 'short' }), // e.g., 'Fri'
      date: startDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }), // e.g., '12 Jun'
    });

    // Generate next 15 days
    for (let i = 1; i <= 15; i++) {
      const futureDate = new Date(startDate);
      futureDate.setDate(startDate.getDate() + i);

      dates.push({
        day: futureDate.toLocaleDateString('en-US', { weekday: 'short' }), // e.g., 'Sat'
        date: futureDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }), // e.g., '13 Jun'
      });
    }

    return dates;
  }


  scrollLeft() {
    const timelineElement = this.timelineList.nativeElement as HTMLElement;
    timelineElement.scrollBy({
      left: -200, // Adjust scroll amount
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const timelineElement = this.timelineList.nativeElement as HTMLElement;
    timelineElement.scrollBy({
      left: 200, // Adjust scroll amount
      behavior: 'smooth',
    });
  }

  setActiveDate(index: number) {
    this.activeIndex = index;

    // Optional: Auto-scroll to the selected date
    const timelineElement = this.timelineList.nativeElement as HTMLElement;
    const selectedDate = timelineElement.children[index] as HTMLElement;

    timelineElement.scrollTo({
      left: selectedDate.offsetLeft - timelineElement.offsetWidth / 2 + selectedDate.offsetWidth / 2,
      behavior: 'smooth',
    });
  }

  bookNow() {
    this.router.navigateByUrl("/user/check-out");
  }

}
