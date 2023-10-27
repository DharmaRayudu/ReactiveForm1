import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoSpaceValidation } from '../validations/no-space-validation';

@Component({
  selector: 'app-custome-validations',
  templateUrl: './custome-validations.component.html',
  styleUrls: ['./custome-validations.component.css'],
})
export class CustomeValidationsComponent {
  loginForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          NoSpaceValidation.noSpaceValidations,
        ],
      ],
      password: ['', Validators.required],
    });
  }

  get FormData() {
    return this.loginForm.controls;
  }
}
