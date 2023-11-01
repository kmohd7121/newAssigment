import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharinaggridComponent } from './charinaggrid/charinaggrid.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'dashboard', component: CharinaggridComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
