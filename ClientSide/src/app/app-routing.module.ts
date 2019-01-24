import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/EmployeesComponent';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { VatComponent } from './vat/vat.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommandeComponent } from './commande/commande.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:EmployeesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Edit',component:EmployeeupdateComponent},
  {path:'Add',component:EmployeeAddComponent},
  {path:'Home',component:EmployeesComponent}, 
  {path:'tva',component:VatComponent},
  {path:'commande',component:CommandeComponent},
  {path:'bank',component:BankComponent},
  {path:'home',component:HomeComponent},
  
  // {path:'Edit',component:EmployeeupdateComponent},
  // {path:'Add',component:EmployeeAddComponent},
  // {path:'Home',component:AngularCRUDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
