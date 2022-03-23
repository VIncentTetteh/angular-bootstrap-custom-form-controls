import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css']
})
export class FormLabelComponent implements OnInit {

  @Input() label!:string;
  @Input() for!:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
