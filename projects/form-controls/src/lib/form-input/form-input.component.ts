import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: FormInputComponent,
      multi: true
    }
  ]
})
export class FormInputComponent implements OnInit,ControlValueAccessor {

  @Input() type!:string
  value!:string;
  onChange!:(value:string) => void
  onTouched!:() => void

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

}
