import { GerimedicaFormFieldModel } from "../gerimedica-form-field.model";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-gerimedica-form",
  templateUrl: "./gerimedica-form.component.html",
  styleUrls: ["./gerimedica-form.component.css"],
})
export class GerimedicaFormComponent implements OnInit {
  @Input("JsonData") JsonData: GerimedicaFormFieldModel[];
  isSubmited: boolean = false;
  GerimedicaForm!: FormGroup;
  formFields: GerimedicaFormFieldModel[];
  constructor(
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.GerimedicaForm = this.fb.group({});
    this.formFields = this.JsonData
    this.formFields?.forEach((formItem) => {
      let validateArr = []
      if (formItem.field == "email") {
        validateArr.push(Validators.required)
        validateArr.push(Validators.email)
        } else if (formItem.mandatory) {
        validateArr.push(Validators.required)
      } else {
          validateArr=[]
      }
      this.GerimedicaForm.addControl(
          formItem.field,
          this.fb.control(null, validateArr)
        );

    });

  }
  onSubmit() {
    this.isSubmited = true;
    const controls = this.GerimedicaForm.controls;
    if (this.GerimedicaForm.valid) {
      const user = {
        name: controls.name.value,
        email: controls.email.value,
        confirm: controls.confirm.value,
        hiddenField: controls.hiddenField.value,
      };
      console.log("Gerimedica Form Data::", user);
    }
  }
}
