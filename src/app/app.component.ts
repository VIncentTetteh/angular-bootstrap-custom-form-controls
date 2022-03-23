import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  inputForm!:FormGroup
  title = 'custom-formcontrol-library';
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      name:[],
      age:[]
    })
  }
}
