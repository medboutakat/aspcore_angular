import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/EmployeesComponent';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {EmployeeDataService} from '../app/DataService/EmployeeDataService';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FixedtopbarComponent } from './fixedtopbar/fixedtopbar.component';
import { VatComponent } from './vat/vat.component'
import { VatDataService } from './DataService/VatDataService';
import { VatEditComponent } from './vat-edit/vat-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './DataService/authentication.service';
import { SignupComponent } from './signup/signup.component';
import { RoutegaurdService } from './routegaurd.service';
import { CommandeComponent } from './commande/commande.component';
import { IDataService } from './DataService/IDataService';
import { CommandeEditComponent } from './commande-edit/commande-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeAddComponent,
    EmployeeupdateComponent,
    LayoutComponent,
    SidebarComponent,
    FixedtopbarComponent,
    VatComponent,
    VatEditComponent,
    LoginComponent,
    SignupComponent,
    CommandeComponent,
    CommandeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmployeeDataService,
    VatDataService,
    AuthenticationService,
    IDataService,
    RoutegaurdService,
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
