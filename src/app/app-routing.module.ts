import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIdComponent } from './componentes/employee-id/employee-id.component';
import { EmployeeComponent } from './componentes/employee/employee.component';

const routes: Routes = [
  {path: 'employes', component: EmployeeComponent},
  {path: 'employes/:id', component: EmployeeIdComponent},
  {path: '**', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
