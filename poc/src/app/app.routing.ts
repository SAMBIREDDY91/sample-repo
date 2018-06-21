import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { StaffComponent } from './components/staff/staff.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { ListOrganizationComponent } from './components/organization/list-organization/list-organization.component';


const appRoutes: Routes = [

    {path: 'domainname',
    component: LandingComponent,
    children: [
      {path: '', pathMatch: 'full',redirectTo: 'organization'},
        {
          path: 'organization',
          component: OrganizationComponent,
          children:[
            {path: '', pathMatch: 'full',redirectTo: 'list'},
            {path: 'list', component: ListOrganizationComponent},
            {path: 'create', component: CreateOrganizationComponent}
          ]
        },
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
