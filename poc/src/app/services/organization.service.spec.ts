import { TestBed, inject } from '@angular/core/testing';

import { OrganizationService } from './organization.service';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Organization} from '../domain/organization';

fdescribe('OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OrganizationService, RestService]
    });
  });

  let obj = {

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

  it('should be created', inject([], (service: OrganizationService) => {
    expect(service).toBeFalsy();
  }));
  
  it('should be created', inject([OrganizationService], (service: OrganizationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getOrganizationDetails', inject([OrganizationService], (service: OrganizationService) => {
    expect(service.getOrganizationDetails()).toBeTruthy();
  }));

  it('should have getOrganizationDetails', inject([OrganizationService], (service: OrganizationService) => {
    expect(service.createOrganization(obj)).toBeTruthy();
  }));

  it('should have getOrganizationDetails', inject([OrganizationService], (service: OrganizationService) => {
    expect(service.deleteOrganization(obj)).toBeTruthy();
  }));

  //  it('should get Organization Details successful', inject([OrganizationService], (service: OrganizationService) => {
  //    service.getOrganizationDetails().subscribe((data: any) => {
  //      expect(data.name).toBe('Luke Skywalker');
  //  });
  //  }));


});
