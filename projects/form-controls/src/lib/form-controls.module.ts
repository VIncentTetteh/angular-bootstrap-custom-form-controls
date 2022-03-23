import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlsComponent } from './form-controls.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormLabelComponent } from './form-label/form-label.component';



@NgModule({
  declarations: [
    FormControlsComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormLabelComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormControlsComponent,
    FormInputComponent,
    FormLabelComponent,
    FormTextareaComponent
  ]
})
export class FormControlsModule { }
