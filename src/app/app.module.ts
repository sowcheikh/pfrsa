import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UiSwitchModule} from 'ngx-ui-switch';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {httpInterceptorProviders} from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, UiSwitchModule, SharedModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
