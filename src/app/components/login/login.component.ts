import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  emailId: string;
  password: string;
  submitt: boolean;
  loginForm = new FormGroup({
    emailId: new FormControl(Validators.required, Validators.email),
    password: new FormControl(Validators.required, Validators.minLength(8)),
  });
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit() {}
  function(emailId, password) {
    this.emailId = emailId;
    this.password = password;
    return "Hello World";
  }
  onSubmit(loginData) {
    if (this.loginForm.valid) {
      this.submitt = true;
    } else this.submitt = false;
    this.loginservice.login();
  }
}
