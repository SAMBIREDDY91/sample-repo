import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  organizationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createOrganizationForm();
  }
  createOrganizationForm(){
    this.organizationForm = new FormGroup({
      orgnizationName: new FormControl('',[Validators.required]),
      orgnizationAcronym: new FormControl('',[Validators.required]),
      orgnizationType: new FormControl('',[Validators.required]),
      orgnizationHomeCountry: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      website: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required]),
    });
  }

}
