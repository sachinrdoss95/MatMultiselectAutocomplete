import { Component, Input, HostListener, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'mat-ms-auto',
  templateUrl: './ngx-mat-msautocomplete.component.html',
  styleUrls: ['./ngx-mat-msautocomplete.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: NgxMatMSAutocompleteComponent}]
})
export class NgxMatMSAutocompleteComponent implements ControlValueAccessor, OnChanges {
  // ANGULAR MAT FORM FIELD VARIABLES
  static nextId = 0;

  focused = false;
  errorState = false;
  controlType = 'mat-ms-auto';
  id = `mat-ms-auto-${NgxMatMSAutocompleteComponent.nextId++}`;
  describedBy = '';
  onChange = (_: any) => {};

  // Custom Params
  @Input('display-key') displayKey: string = '';
  @Input('info-key') infoKey: string = '';
  @Input() masterToggle: boolean = true;
  @Input() alignInfoRight: boolean = false;
  @Input() icon: string = '';
  @Input() hint: string = '';

  // Dropdown List 2-way binding
  _dropdownList: Array<any>;

  @Input()
  get dropdownList() {
    return this._dropdownList;
  }

  set dropdownList(val) {
    this._dropdownList = val;
    this.DropdownValueSelected();
    this.dropdownListChange.emit(this._dropdownList);
  }

  @Output() selectionChanged = new EventEmitter();

  @Output()
  dropdownListChange = new EventEmitter<Array<any>>();

  displayDropdown = false;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!(this._elementRef && this._elementRef.nativeElement.contains(event.target))) {
      this.displayDropdown = false;
    }
  }

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges() {
    if (!this.dropdownList) {
      throw new TypeError('\'dropdownList\' is Required');
    } else if (!(this.dropdownList instanceof Array)) {
      throw new TypeError('\'dropdownList\' should be an Array of objects');
    } else if (!this.displayKey) {
      throw new TypeError('\'display-key\' is required');
    }
  }

  DropdownValueSelected() {
    const selectedVals = this.dropdownList.filter(x => x.selection).map(x => x[this.displayKey]);
    if (selectedVals.length === 1) {
      this.writeValue(selectedVals[0]);
    } else if (selectedVals.length > 1) {
      this.writeValue(`${selectedVals[0]} (+${selectedVals.length - 1} Others)`);
    } else {
      this.writeValue();
    }
    this.selectionChanged.emit(null);
  }

  isAllselected() {
    return this.dropdownList.length > 0 && this.dropdownList.filter(x => x.selection).length === this.dropdownList.length;
  }

  isAtleastOneSelected() {
    return this.dropdownList.length > 0 &&
    this.dropdownList.filter(x => x.selection).length > 0
    && !this.isAllselected();
  }

  MasterToggle() {
    if (this.isAllselected()) {
      this.dropdownList.forEach(x => {
        x.selection = false;
      });
    } else {
      this.dropdownList.forEach(x => {
        x.selection = true;
      });
    }
    this.DropdownValueSelected();
  }

  DisplayDropdown() {
    this.displayDropdown = true;
  }

  // CONTROL VALUE ACCESSOR FUNCTIONS
  propagateChange = (_: any) => {};

  @Input() _selectedDpdwnInput: any;
  get selectedDpdwnInput() {
    return this._selectedDpdwnInput;
  }

  set selectedDpdwnInput(val) {
    this._selectedDpdwnInput = val;
    this.propagateChange(this._selectedDpdwnInput);
  }

  writeValue(value?: any) {
    this.selectedDpdwnInput = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  // ANGULAR MAT FORM FIELD
  get empty() {
    return !this._selectedDpdwnInput;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    // this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    // this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    // this._disabled ? this.parts.disable() : this.parts.enable();
    // this.stateChanges.next();
  }
  private _disabled = false;

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
