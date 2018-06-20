import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { StaffComponent } from './components/staff/staff.component';

const appRoutes: Routes = [

    {path: 'domainname',
    component: LandingComponent,
    children: [
        {path: '', component: OrganizationComponent},
        {path: 'staff', component: StaffComponent},

    ]},
    { path: '', redirectTo: '/domainname', pathMatch: 'full' },

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
