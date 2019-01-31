import { AuthGuard } from './_guards/auth.guard';
import { AlertifyService } from './_services/alertify.service';
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
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { BlogComponent } from './blog/blog.component';
import { PonudaComponent } from './ponuda/ponuda.component';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginFormComponent,
      HomeComponent,
      TermoplastAdminComponent,
      NavAdminComponent,
      ProizvodiComponent,
      KontaktComponent,
      BlogComponent,
      PonudaComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      /*AgmCoreModule.forRoot(\\\\\\\\napiKey
   ]
}), */
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorinterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
