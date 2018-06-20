import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';



const appRoutes: Routes = [
    {path: 'quantela',
    component: OrganizationComponent,
    children: [
      //{path: 'profile', component: ProfileComponent},
        //{path: '', component: LandingComponent},

    ]},
    {
        path: '',
        component: OrganizationComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
