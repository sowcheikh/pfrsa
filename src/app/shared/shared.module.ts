import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UsersComponent } from './components/users/users.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { ProfilComponent } from './components/profil/profil.component';
import {MaterialModule} from '../material/material.module';
import {NavComponent} from '../nav/nav.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ UsersComponent, DashboardComponent, ProfilComponent, NavComponent, AddProfileComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
