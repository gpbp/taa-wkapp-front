import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.css']
})
export class ChooseLocationComponent implements OnInit {
  chooseLocationForm = this.formBuilder.group({
    postalCode: [''],
    region: [''],
    department: [''],
    city: [''],
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
