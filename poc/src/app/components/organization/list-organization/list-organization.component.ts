import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { ToastsManager } from 'ng5-toastr/ng5-toastr';
import { Router } from '@angular/router';
import { OrganizationService} from '../../../services/organization.service';
import { Organization } from '../../../domain/organization';


@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent implements OnInit, AfterViewInit {
  
  displayedColumns = ['name', 'acronym', 'type', 'website', 'action'];
  public organizationDetails;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private organizationService: OrganizationService, public toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.getOrganizationDetails();
  }

  ngAfterViewInit() {
  }

  private getOrganizationDetails() {
    this.organizationService.getOrganizationDetails().subscribe((res: any) => {
      this.organizationDetails = new MatTableDataSource(res);
      this.organizationDetails.paginator = this.paginator;
      this.organizationDetails.sort = this.sort;
    }, error => {
      this.toastr.error('Failed to Load ORGANIZATION Details!', 'Failed!');
    });
  }

  deleteOrganization(orgId){
    this.organizationService.deleteOrganization(orgId).subscribe((res) => {
      this.toastr.success('ORGANIZATION deleted successfully!', 'Success!');
    }, error => {
      this.toastr.error('ORGANIZATION NOT deleted!', 'Failed!');
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.organizationDetails.filter = filterValue;
  }

}