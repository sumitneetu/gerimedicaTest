import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GerimedicaFormComponent } from './gerimedica-form/gerimedica-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GerimedicaFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
