import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { StaffComponent } from './components/staff/staff.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { ListOrganizationComponent } from './components/organization/list-organization/list-organization.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrganizationComponent,
    StaffComponent,
    CreateOrganizationComponent,
    ListOrganizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
