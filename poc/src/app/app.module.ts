import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';



import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { StaffComponent } from './components/staff/staff.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrganizationComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
