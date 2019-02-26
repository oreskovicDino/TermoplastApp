import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { BlogCardComponent } from './client-side/blog/blog-card/blog-card.component';
import { BlogDetailComponent } from './client-side/blog/blog-detail/blog-detail.component';
import { BlogResolver } from './_resolvers/blog.resolver';
import { PonudaComponent } from './client-side/ponuda/ponuda.component';
import { ProizvodiComponent } from './client-side/proizvodi/proizvodi.component';

import { HomeComponent } from './client-side/home/home.component';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ErrorinterceptorProvider } from './_services/error.interceptor';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './admin-side/login-form/login-form.component';
import { NavAdminComponent } from './admin-side/nav-admin/nav-admin.component';
import { KontaktComponent } from './client-side/kontakt/kontakt.component';
import { BlogComponent } from './client-side/blog/blog.component';
import { TermoplastAdminComponent } from './admin-side/termoplast-admin/termoplast-admin.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { PostsService } from './_services/posts.service';

export function tokenGetter() {
   return localStorage.getItem('token');
}


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
      PonudaComponent,
      BlogDetailComponent,
      BlogCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      /*  AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBQOq78YnTChyLkXS84V4AfdGH-WiKhPjw'
       }), */
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorinterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      PostsService,
      BlogResolver,
      BlogListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
