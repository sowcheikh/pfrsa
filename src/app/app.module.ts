import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {httpInterceptorProviders} from './helpers';
import {LoginGuard} from './guard/login.guard';
import {LogoutGuard} from './guard/logout.guard';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ErrorComponent } from './error/error.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule, SharedModule, FormsModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
    MatCardModule, LayoutModule, MatToolbarModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatListModule,
  ],
  providers: [httpInterceptorProviders, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
