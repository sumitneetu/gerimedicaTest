import { TestBed, async } from "@angular/core/testing";

import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { GerimedicaFormComponent } from './gerimedica-form/gerimedica-form.component';
import GermedicaFieldJson from './../../to-render.json';

describe("AppComponent", () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
    AppComponent,
    GerimedicaFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: []
    });
    TestBed.compileComponents();
  });

  it("should create the app root component", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have intialy empty array of input'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.GerimedicaJsonData).toEqual([]);
  }));
  it('Render gerimedica form component', () => {
    const appFixture = TestBed.createComponent(AppComponent);
    const GerimedicaFormRenderSuccess = appFixture.debugElement.query(By.css('app-gerimedica-form'));
    expect(GerimedicaFormRenderSuccess).toBeTruthy();
  });

  it('Testing gerimedica input json data', () => {
    const appFixture = TestBed.createComponent(AppComponent);
    const appInstance = appFixture.debugElement.componentInstance;
    appInstance.ngOnInit()
    expect(appInstance.GerimedicaJsonData).toBe(GermedicaFieldJson);
  });
});
