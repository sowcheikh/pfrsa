import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {UsersComponent} from './components/users/users.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProfilComponent} from './components/profil/profil.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'profile', component: ProfilComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
