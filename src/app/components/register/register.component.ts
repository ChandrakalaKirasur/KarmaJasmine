import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  submitt: boolean;
  loginForm = new FormGroup({
    fullname: new FormControl(Validators.required),
    emailId: new FormControl(Validators.required, Validators.email),
    phone: new FormControl(Validators.required, Validators.minLength(10)),
    password: new FormControl(Validators.required, Validators.minLength(8)),
  });
  constructor() {}

  ngOnInit() {}
  onSubmit(registerData) {
    if (this.loginForm.valid) {
      this.submitt = true;
    } else this.submitt = false;
  }
}
