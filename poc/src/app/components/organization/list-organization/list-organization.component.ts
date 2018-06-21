import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

import { OrganizationService} from '../../../services/organization.service';
import { Organization } from '../../../domain/organization';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit, AfterViewInit {
  
  displayedColumns = ['name', 'acronym', 'type', 'website'];
  public organizationDetails;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getOrganizationDetails();
  }

  ngAfterViewInit() {
    this.organizationDetails.paginator = this.paginator;
    this.organizationDetails.sort = this.sort;
  }

  private getOrganizationDetails() {
    this.organizationService.getOrganizationDetails().subscribe((res: any) => {
      this.organizationDetails = new MatTableDataSource(res);
    });
  }

}