import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { TermoplastAdminComponent } from './termoplast-admin/termoplast-admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { ErrorinterceptorProvider } from './_services/error.interceptor';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginFormComponent,
      HomeComponent,
      TermoplastAdminComponent,
      NavAdminComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule/* ,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyBQOq78YnTChyLkXS84V4AfdGH-WiKhPjw'
      }) */
   ],
   providers: [
      AuthService,
      ErrorinterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
