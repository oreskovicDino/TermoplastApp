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
    { path: 'blog', component: BlogComponent, resolve: {posts: BlogListResolver} },
    { path: 'blog/:id', component: BlogDetailComponent, resolve: { post: BlogResolver } },
    { path: 'ponuda', component: PonudaComponent },
    { path: 'login', component: LoginFormComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'admin', component: TermoplastAdminComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
