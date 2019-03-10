import { PonudaItemsComponent } from './client-side/ponuda/ponuda-items/ponuda-items.component';
import { PreventUnsavedAdminChanges } from './_guards/prevent-unsaved-admin-changes.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserResolver } from './_resolvers/user.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { AdminResolver } from './_resolvers/admin.resolver';
import { AdminEditComponent } from './admin-side/edit-components/admin-edit/admin-edit.component';
import { AdminBlogEditComponent } from './admin-side/edit-components/admin-blog-edit/admin-blog-edit.component';
import { AdminPonudaEditComponent } from './admin-side/edit-components/admin-ponuda-edit/admin-ponuda-edit.component';
import { AdminListResolver } from './_resolvers/admin-list.resolver';
import { BlogListResolver } from './_resolvers/blog-list.resolver';
import { BlogResolver } from './_resolvers/blog.resolver';
import { BlogDetailComponent } from './client-side/blog/blog-detail/blog-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { PonudaComponent } from './client-side/ponuda/ponuda.component';
import { BlogComponent } from './client-side/blog/blog.component';
import { KontaktComponent } from './client-side/kontakt/kontakt.component';
import { ProizvodiComponent } from './client-side/proizvodi/proizvodi.component';
import { HomeComponent } from './client-side/home/home.component';
import { Routes } from '@angular/router';
import { TermoplastAdminComponent } from './admin-side/termoplast-admin/termoplast-admin.component';
import { LoginFormComponent } from './admin-side/login-form/login-form.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proizvodi', component: ProizvodiComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'blog', component: BlogComponent, resolve: { posts: BlogListResolver } },
    { path: 'blog/:id', component: BlogDetailComponent, resolve: { post: BlogResolver } },
    { path: 'ponuda', component: PonudaComponent },
    { path: 'ponuda/:id', component: PonudaItemsComponent, resolve: { user: UserResolver } },
    { path: 'login', component: LoginFormComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'admin', component: TermoplastAdminComponent,
                resolve:
                {
                    posts: BlogListResolver,
                    admins: AdminListResolver,
                    users: UserListResolver
                }
            },
            {
                path: 'a/ponuda/:id', component: AdminPonudaEditComponent, resolve: { user: UserResolver }
            },
            {
                path: 'a/blog/:id', component: AdminBlogEditComponent, resolve: { post: BlogResolver },
                canDeactivate: [PreventUnsavedChanges]
            },
            {
                path: 'a/admin/:id', component: AdminEditComponent, resolve: { admin: AdminResolver },
                canDeactivate: [PreventUnsavedAdminChanges]
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
