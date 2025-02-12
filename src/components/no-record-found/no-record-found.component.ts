import { Component, Input } from '@angular/core';

@Component({
  selector: 'no-record-found',
  imports: [],
  templateUrl: './no-record-found.component.html',
  styleUrl: './no-record-found.component.scss'
})
export class NoRecordFoundComponent {
  @Input() small: boolean = false;
}
