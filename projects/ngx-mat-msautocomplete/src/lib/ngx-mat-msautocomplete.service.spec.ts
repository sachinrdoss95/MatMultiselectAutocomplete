import { TestBed } from '@angular/core/testing';

import { NgxMatMSAutocompleteService } from './ngx-mat-msautocomplete.service';

describe('NgxMatMSAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatMSAutocompleteService = TestBed.get(NgxMatMSAutocompleteService);
    expect(service).toBeTruthy();
  });
});
