import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {UsersComponent} from './components/users/users.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProfilComponent} from './components/profil/profil.component';
import {AddProfileComponent} from './components/add-profile/add-profile.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'profile', component: ProfilComponent
      },
      { path: 'add', component: AddProfileComponent },
      { path: 'edit/:id', component: AddProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
