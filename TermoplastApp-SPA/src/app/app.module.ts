import { PonudaItemsComponent } from './client-side/ponuda/ponuda-items/ponuda-items.component';
import { AdminBlogAddComponent } from './admin-side/termoplast-admin/admin-blog-card/admin-blog-add/admin-blog-add.component';
import { PhotoEditorComponent } from './admin-side/edit-components/admin-blog-edit/photo-editor/photo-editor.component';
import { PreventUnsavedAdminChanges } from './_guards/prevent-unsaved-admin-changes.guard';
import { AdminResolver } from './_resolvers/admin.resolver';
import { AdminEditComponent } from './admin-side/edit-components/admin-edit/admin-edit.component';
import { AdminBlogEditComponent } from './admin-side/edit-components/admin-blog-edit/admin-blog-edit.component';
import { AdminCardComponent } from './admin-side/termoplast-admin/admin-card/admin-card.component';
import { AdminPonudaCardComponent } from './admin-side/termoplast-admin/admin-ponuda-card/admin-ponuda-card.component';
import { AdminService } from './_services/admin.service';
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
import { KontaktComponent } from './client-side/kontakt/kontakt.component';
import { BlogComponent } from './client-side/blog/blog.component';
import { TermoplastAdminComponent } from './admin-side/termoplast-admin/termoplast-admin.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { PostsService } from './_services/posts.service';
import { AdminBlogCardComponent } from './admin-side/termoplast-admin/admin-blog-card/admin-blog-card.component';
import { AdminPonudaEditComponent } from './admin-side/edit-components/admin-ponuda-edit/admin-ponuda-edit.component';
import { AdminListResolver } from './_resolvers/admin-list.resolver';
import { UserResolver } from './_resolvers/user.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { FileUploadModule } from 'ng2-file-upload';

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
      ProizvodiComponent,
      KontaktComponent,
      BlogComponent,
      PonudaComponent,
      PonudaItemsComponent,
      BlogDetailComponent,
      BlogCardComponent,
      AdminBlogCardComponent,
      AdminBlogEditComponent,
      AdminBlogAddComponent,
      AdminPonudaCardComponent,
      AdminCardComponent,
      AdminPonudaEditComponent,
      PhotoEditorComponent,
      AdminEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      /* AgmCoreModule.forRoot({
         apiKey: 'AIzaSyBQOq78YnTChyLkXS84V4AfdGH-WiKhPjw'
      }), */
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FileUploadModule,
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
      PreventUnsavedChanges,
      PreventUnsavedAdminChanges,
      UserService,
      PostsService,
      AdminService,
      AdminListResolver,
      AdminResolver,
      BlogResolver,
      BlogListResolver,
      UserResolver,
      UserListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
