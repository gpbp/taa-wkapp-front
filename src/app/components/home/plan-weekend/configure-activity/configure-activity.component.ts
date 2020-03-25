import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-configure-activity',
  templateUrl: './configure-activity.component.html',
  styleUrls: ['./configure-activity.component.css']
})
export class ConfigureActivityComponent implements OnInit {
  weatherConstraintsForm = this.formBuilder.group({
    windSpeed: [''],
    swell: [''],
    rainy: [false],
    sunny: [false],
  })
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  openSnackBar4Rainy(rainy: boolean) {
    let message = 'You chose rainy days';
    console.log(rainy);
    if (!rainy) {
      message = 'You didn\'t choose rainy days';
    }
    this.openSnackBar(message);
  }

  openSnackBar4Sunny(sunny: boolean) {
    let message = 'You chose sunny days';
    if (!sunny) {
      message = 'You didn\'t choose sunny days';
    }
    this.openSnackBar(message);
  }

  private openSnackBar(message) {
    this._snackBar.open(message, 'Undo', {
      duration: 1000
    });
  }


}
