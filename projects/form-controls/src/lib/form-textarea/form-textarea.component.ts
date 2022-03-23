import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: FormTextareaComponent,
      multi: true
    }
  ]
})
export class FormTextareaComponent implements OnInit,ControlValueAccessor {

  onChange!:(value:string) => void;
  onTouched!:() => void;
  value!:string;
  @Input() row!:number;

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj
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
