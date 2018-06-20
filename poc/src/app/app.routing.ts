import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';


const appRoutes: Routes = [
    {path: 'quantela',
    component: LandingComponent,
    children: [
      //{path: 'profile', component: ProfileComponent},
        //{path: '', component: LandingComponent},

    ]},
    {
        path: '',
        component: LandingComponent
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
