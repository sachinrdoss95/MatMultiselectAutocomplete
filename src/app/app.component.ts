import { Component } from '@angular/core';

@Component({
  selector: 'mat-ms-auto-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatMSAutocompleteLib';
  dropdownList = [
    {
      info: 'apple',
      display: 'Apple',
      selection: false
    }, {
      info: 'orange',
      display: 'Orange',
      selection: true
    }, {
      info: 'lemon',
      display: 'Lemon',
      selection: false
    }, {
      info: 'gauva',
      display: 'Gauva',
      selection: false
    }, {
      info: 'gauva1',
      display: 'Gauva1',
      selection: false
    }, {
      info: 'gauva2',
      display: 'Gauva2',
      selection: false
    }, {
      info: 'gauva3',
      display: 'Gauva3',
      selection: false
    }, {
      info: 'gauva4',
      display: 'Gauva4',
      selection: false
    }
  ];

  onChange() {
    console.log('Changed');
  }
}
