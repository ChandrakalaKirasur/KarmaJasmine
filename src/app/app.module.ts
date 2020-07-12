import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MatCardModule, MatFormFieldModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
