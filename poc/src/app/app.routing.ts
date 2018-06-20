import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { StaffComponent } from './components/staff/staff.component';

const appRoutes: Routes = [

    {path: 'quantela',
    component: LandingComponent,
    children: [
        {path: '', component: OrganizationComponent},
        {path: 'staff', component: StaffComponent},

    ]},
    { path: '', redirectTo: '/quantela', pathMatch: 'full' },

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
