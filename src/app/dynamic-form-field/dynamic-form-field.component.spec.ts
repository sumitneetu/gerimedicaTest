import { FormGroupDirective, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormFieldComponent } from './dynamic-form-field.component';
import GermedicaFieldJson from './../../../to-render.json';
describe('DynamicFormFieldComponent', () => {
  let component: DynamicFormFieldComponent;
  let fixture: ComponentFixture<DynamicFormFieldComponent>;
  //let formItems: GerimedicaFormFieldModel[];
  let formItems = GermedicaFieldJson
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormFieldComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers : [FormGroupDirective]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormFieldComponent);
    component = fixture.componentInstance;
    console.log(formItems)
    component.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirm: new FormControl(null),
      hiddenField : new FormControl(null),
    })
    component.formItem = formItems[0]
    fixture.detectChanges();
  });

  it('Component Should Create', () => {
    expect(component).toBeTruthy();
  });
  it('Checking name value is not empty', () => {
    component.formItem = formItems[0]
    component.form['controls'].name.setValue('sumit kumar')
    expect(component.form['controls'].name.valid).toBe(true)
  });
  it('Checking name value is empty', () => {
    component.formItem = formItems[0]
    component.form['controls'].name.setValue('')
    expect(component.form['controls'].name.valid).toBe(false)
  });

  it('Checking type email valid entry value', () => {
    component.formItem = formItems[1]
    component.form['controls'].email.setValue('sumit@kumar.com')
    expect(component.form['controls'].email.valid).toBe(true)
  });
  it('Checking email value format by regex', () => {
    component.formItem = formItems[1]
    component.form['controls'].email.setValue('sumitkumar')
    expect(component.form['controls'].email.errors['email']).toBe(true)
  });
  it('Checking type email value is empty', () => {
    component.formItem = formItems[1]
    component.form['controls'].email.setValue('')
    expect(component.form['controls'].email.errors['required']).toBe(true)
  });

});
