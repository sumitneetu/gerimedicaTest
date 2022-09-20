import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { GerimedicaFormFieldModel } from "../gerimedica-form-field.model";

@Component({
  selector: "app-dynamic-form-field",
  templateUrl: "./dynamic-form-field.component.html",
  styleUrls: ["./dynamic-form-field.component.scss"],
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() formItem!: GerimedicaFormFieldModel;
  form!: FormGroup;
  fieldType: string = "text";
  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }
  ngOnInit() {
    if (this.formItem?.hidden == "false") {
      if (this.formItem.type == "text") {
        this.fieldType = this.formItem.field == "email" ? "email" : "text";
      } else if (this.formItem.type == "check") {
        this.fieldType = "checkbox";
      }
    } else {
      this.fieldType = "hidden";
    }
  }
}
