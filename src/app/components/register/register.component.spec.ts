import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { MatCardModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let validUser = {
    fullname: "Chandrakala",
    emailId: "abc@gmail.com",
    phone: "8147267142",
    password: "chandravk",
  };
  let invalidPhone = {
    fullname: "Chandrakala",
    emailId: "abc@gmail.com",
    phone: "81472671",
    password: "chandrak",
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [MatCardModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  function updateForm(fullname, emailId, phone, password) {
    component.loginForm.controls["fullname"].setValue(fullname);
    component.loginForm.controls["emailId"].setValue(emailId);
    component.loginForm.controls["phone"].setValue(phone);
    component.loginForm.controls["password"].setValue(password);
  }
  it("submitted should be false if user inputs are not valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
  });
  it("submitted should be true if user inputs are valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
    component.onSubmit(validUser);
    expect(component.submitt).toBeTruthy();
  });
  it("submitted should be false if phone number is not valid", () => {
    updateForm(
      invalidPhone.fullname,
      invalidPhone.emailId,
      invalidPhone.phone,
      invalidPhone.password
    );
    component.onSubmit(invalidPhone);
    expect(component.submitt).toBeFalsy();
  });
  it("submitted should be true if user inputs are valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
  });
  it("submitted should be true if user inputs are valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
  });
  it("submitted should be true if user inputs are valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
  });
  it("submitted should be true if user inputs are valid", () => {
    updateForm(
      validUser.fullname,
      validUser.emailId,
      validUser.phone,
      validUser.password
    );
    expect(component.loginForm.value).toEqual(validUser);
  });
});
