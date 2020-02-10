import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { NgxMatMSAutocompleteComponent } from './ngx-mat-msautocomplete.component';
import { AutocompletePipe } from './AutocompletePipe';



@NgModule({
  declarations: [NgxMatMSAutocompleteComponent, AutocompletePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [NgxMatMSAutocompleteComponent]
})
export class NgxMatMSAutocompleteModule { }
