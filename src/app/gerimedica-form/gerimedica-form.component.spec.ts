import { BrowserModule, By } from '@angular/platform-browser';
import { DynamicFormFieldComponent } from './../dynamic-form-field/dynamic-form-field.component';
import { GerimedicaFormFieldModel } from './../gerimedica-form-field.model';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerimedicaFormComponent } from './gerimedica-form.component';
import GermedicaFieldJson from './../../../to-render.json';

describe('GerimedicaFormComponent', () => {
  let component: GerimedicaFormComponent;
  let fixture: ComponentFixture<GerimedicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerimedicaFormComponent,DynamicFormFieldComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerimedicaFormComponent);
    component = fixture.componentInstance;
    let JsonData: GerimedicaFormFieldModel[];
    JsonData = GermedicaFieldJson?.map((val, key) => {
      return {
        ...val,
        id: val.field,
      };
    });
    component.JsonData = JsonData
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();

  });
  it('Checking all form fields rendering properly', () => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const buttonDebugEl = fixture.debugElement.queryAll(By.directive(DynamicFormFieldComponent));
    //  const nameInputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelectorAll('app-dynamic-form-field')
      for (let elm in component.formFields) {
      //console.log(buttonDebugEl[elm].nativeElement.querySelector(`#${component.formFields[0].id}`))
      expect(buttonDebugEl[elm]).toBeTruthy();
    }
    })
  });
});
