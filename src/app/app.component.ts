import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  date: Date = new Date();

  ngOnInit() {
    if (this.date.getDay() === 6) {
      this.date.setDate(this.date.getDate() + 1).toString();
    }
    if (this.date.getDay() === 0) {
      this.date.setDate(this.date.getDate() + 1).toString();
    }
    console.log(this.date);
  }
}
