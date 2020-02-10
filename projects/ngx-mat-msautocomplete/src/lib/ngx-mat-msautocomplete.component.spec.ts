import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatMSAutocompleteComponent } from './ngx-mat-msautocomplete.component';

describe('NgxMatMSAutocompleteComponent', () => {
  let component: NgxMatMSAutocompleteComponent;
  let fixture: ComponentFixture<NgxMatMSAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatMSAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatMSAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
