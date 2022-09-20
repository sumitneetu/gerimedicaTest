import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { GerimedicaFormFieldModel } from '../gerimedica-form-field.model';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent {
  @Input() formItem!: GerimedicaFormFieldModel
  form!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control
  }
}
