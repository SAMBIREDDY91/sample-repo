import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import { CreateOrganizationComponent } from './create-organization.component';
import { ToastsManager, ToastOptions } from 'ng5-toastr/ng5-toastr';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationService} from '../../../services/organization.service';
import { RestService } from '../../../services/rest.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Organization } from '../../../domain/organization';
import 'rxjs/add/observable/of';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule ,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';
import {MaterialModule} from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



fdescribe('CreateOrganizationComponent', () => {
  let component: CreateOrganizationComponent;
  let fixture: ComponentFixture<CreateOrganizationComponent>;
  let organizationService: OrganizationService;

  let ORG_OBJECT: Organization = new Organization();
  
  ORG_OBJECT = {
    id:123,
    name: 'TEST',
    acronym: 'TEST',
    type: 'TEST',
    homeCountry: 'TEST',
    year: 2018,
    website: 'TEST',
    logo: 'TEST',
    comment: 'TEST'
  }
let res = "Organization created Successfully";
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizationComponent ],
      imports: [HttpClientModule,RouterTestingModule, FormsModule, CommonModule,MatFormFieldModule,MatInputModule, MatTableModule, ReactiveFormsModule, BrowserAnimationsModule,MatInputModule,MatSelectModule ],
      providers: [ OrganizationService, RestService, ToastsManager, ToastOptions],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    organizationService = TestBed.get(OrganizationService);
    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call and set the OrganizationDetails', () => {
    spyOn(organizationService, 'createOrganization').and.returnValue(Observable.of(res));
    component.createOrganization(ORG_OBJECT);
    expect(organizationService.createOrganization).toHaveBeenCalled();
  });

});
