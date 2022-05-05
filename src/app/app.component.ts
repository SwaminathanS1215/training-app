import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';

  currencyData: number = 10000;
  regularDate: Date = new Date();
  shortDate: Date = new Date();
  strSlice: string = 'Angular Slice';

  constructor() {
  }
}
