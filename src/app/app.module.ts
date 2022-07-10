import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './componentes/employee/employee.component';
import { EmployeeIdComponent } from './componentes/employee-id/employee-id.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeIdComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
