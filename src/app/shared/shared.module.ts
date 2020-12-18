import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UsersComponent } from './components/users/users.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { ProfilComponent } from './components/profil/profil.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [ UsersComponent, DashboardComponent, ProfilComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
