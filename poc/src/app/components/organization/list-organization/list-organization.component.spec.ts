import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationService} from '../../../services/organization.service';
import { RestService } from '../../../services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ListOrganizationComponent } from './list-organization.component';
import { Organization } from '../../../domain/organization';
import { ToastsManager, ToastOptions } from 'ng5-toastr/ng5-toastr';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ReactiveFormsModule, FormsModule, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MaterialModule} from '../../../material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {CommonModule} from '@angular/common';

fdescribe('ListOrganizationComponent', () => {
  let component: ListOrganizationComponent;
  let fixture: ComponentFixture<ListOrganizationComponent>;
  let organizationService: OrganizationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrganizationComponent ],
      imports: [HttpClientModule,RouterTestingModule, FormsModule, MatFormFieldModule,MatInputModule, ReactiveFormsModule, MatTableModule, CommonModule, MatSelectModule,BrowserAnimationsModule ],
      providers: [ OrganizationService, RestService, ToastsManager, ToastOptions],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    })
    .compileComponents();
  }));

  
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

let res = "ORGANIZATION deleted successfully";
  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    organizationService = TestBed.get(OrganizationService);
    spyOn(organizationService, 'getOrganizationDetails').and.returnValue(Observable.of(ORG_OBJECT));
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call and set the OrganizationDetails', () => {
    component.ngOnInit();
    console.log("---",component.organizationDetails);
    expect(organizationService.getOrganizationDetails).toHaveBeenCalled();
    //expect(component.organizationDetails).toBe(ORG_OBJECT);
  });

  it('should call and delete the OrganizationDetails', () => {
    spyOn(organizationService, 'deleteOrganization').and.returnValue(Observable.of(res));
    component.deleteOrganization(123);
   expect(organizationService.deleteOrganization).toHaveBeenCalled();
   });
  
  
  it('should call error scenario for delete the OrganizationDetails', () => {
    spyOn(organizationService, 'deleteOrganization').and.returnValue(Observable.throw({status: 404}));
    component.deleteOrganization(123);
    expect(organizationService.deleteOrganization).toHaveBeenCalled();
   });

});

