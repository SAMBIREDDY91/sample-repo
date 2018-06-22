import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrganizationService} from '../../../services/organization.service';
import { Organization } from '../../../domain/organization';
import { ToastsManager } from 'ng5-toastr/ng5-toastr';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  organizationForm: FormGroup;
  public createOrgPayload: Organization;

  constructor(private organizationService: OrganizationService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.createOrgPayload = new Organization();
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.createOrganizationForm();
  }

  createOrganizationForm(){
    this.organizationForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      acronym: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      homeCountry: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      website: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required]),
    });
  }

  createOrganization(organizationForm) {
    this.createOrgPayload = organizationForm.value;
    console.log("createOrgPayload:::",this.createOrgPayload);
    this.organizationService.createOrganization(this.createOrgPayload).subscribe((res) => {
      this.toastr.success('ORGANIZATION created successfully!', 'Success!',{positionClass:'toast-top-right'});
      this.organizationForm.reset();
      Object.keys(this.organizationForm.controls).forEach(key => {
        this.organizationForm.controls[key].setErrors(null)
      });
    },
    error => {
      this.organizationForm.reset();
      this.toastr.error('ORGANIZATION NOT created!', 'Failed!');
    });
  }

}
