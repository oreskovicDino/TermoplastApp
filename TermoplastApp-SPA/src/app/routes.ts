import { AuthGuard } from './_guards/auth.guard';
import { PonudaComponent } from './ponuda/ponuda.component';
import { BlogComponent } from './blog/blog.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { TermoplastAdminComponent } from './termoplast-admin/termoplast-admin.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proizvodi', component: ProizvodiComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'blog', component: BlogComponent },
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
