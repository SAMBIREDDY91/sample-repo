import { Injectable } from '@angular/core';
import {RestService} from '././rest.service';
import {AppConstants} from '.././app.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrganizationService {

  constructor(private restService: RestService) { }
  
  public getOrganizationDetails(): Observable<any> {
    return this.restService.findAll(AppConstants.GET_ORGANIZATION_DATA);
  }
}
