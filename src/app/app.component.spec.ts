import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { Routes, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatError } from "@angular/material";

describe("AppComponent", () => {
  const routes: Routes = [
    {
      path: "register",
      component: RegisterComponent,
    },
    {
      path: "login",
      component: LoginComponent,
    },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AppComponent, LoginComponent, RegisterComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jasmine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("jasmine");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to jasmine!"
    );
  });
});
