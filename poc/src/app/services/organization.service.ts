import { Injectable } from '@angular/core';
import {RestService} from '././rest.service';
import {AppConstants} from '.././app.constants';
import {Organization} from '../domain/organization';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrganizationService {

  constructor(private restService: RestService) { }
  
  public getOrganizationDetails(): Observable<any> {
    return this.restService.findAll(AppConstants.GET_ORGANIZATION_DATA);
  }
  public createOrganization(createRequest: Organization): Observable<any> {
    return this.restService.post(createRequest, AppConstants.CREATE_ORGANIZATION);
  }

}
