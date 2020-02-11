import { Component } from '@angular/core';

@Component({
  selector: 'mat-ms-auto-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxMatMSAutocomplete';
  fruitsList = [
    {
      info: 'This is apple',
      name: 'Apple'
    }, {
      info: 'This is orange',
      name: 'Orange',
      selection: true
    }, {
      info: 'This is lemon',
      name: 'Lemon'
    }, {
      info: 'This is gauva',
      name: 'Gauva'
    }, {
      info: 'This is banana',
      name: 'Banana'
    }, {
      info: 'This is kiwi',
      name: 'Kiwi'
    }
  ];

  onChange() {
    console.log('Changed');
  }
}
