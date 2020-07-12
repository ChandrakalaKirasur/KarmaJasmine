import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { MatCardModule, MatFormFieldModule } from "@angular/material";
import {
  ReactiveFormsModule,
  ValidationErrors,
  FormBuilder,
} from "@angular/forms";
import { By } from "@angular/platform-browser";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
const loginServiceSpy = jasmine.createSpyObj("LoginService", ["login"]);
const routerSpy = jasmine.createSpyObj("Router", "navigateByUrl");
describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let validUser = {
    emailId: "abc@gmail.com",
    password: "dkkuriuer",
  };
  let wrongPassword = {
    emailId: "abc@gmail.com",
    password: "dkk",
  };
  let invalidEmail = {
    emailId: "abccom",
    password: "dkkfkklf",
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should Return Hello world", function () {
    expect(component.function("chandrakala", "chandra")).toEqual("Hello World");
  });
  function updateForm(emailId, password) {
    component.loginForm.controls["emailId"].setValue(emailId);
    component.loginForm.controls["password"].setValue(password);
  }
  it("submit should be false if password are invalid", () => {
    updateForm(wrongPassword.emailId, wrongPassword.password);
    component.onSubmit(wrongPassword);
    expect(component.submitt).toBeFalsy();
  });
  it("submit should be false if email is invalid", () => {
    updateForm(invalidEmail.emailId, invalidEmail.password);
    component.onSubmit(invalidEmail);
    expect(component.submitt).toBeFalsy();
  });
  it("submit should be true if inputs are valid", () => {
    updateForm(validUser.emailId, validUser.password);
    component.onSubmit(validUser);
    expect(component.submitt).toBeTruthy();
  });
  it("loginService login() should called ", fakeAsync(() => {
    updateForm(validUser.emailId, validUser.password);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();
    expect(loginServiceSpy.login).toHaveBeenCalled();
  }));
});
