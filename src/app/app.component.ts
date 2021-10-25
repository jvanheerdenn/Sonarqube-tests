import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    let fecha = new Date();
    console.log(this.moveDate(fecha));
  }

  moveDate(date) {
    date.setDate(6);
    if (date.getDate() === 6) {
      console.log('ASD 1');
      date.setDate(date.getDate() + 1).toString();
    }
    if (date.getDate() === 0) {
      console.log('ASD 2');
      date.setMonth(date.getDate() + 1);
    }
    return date;
  }
}
