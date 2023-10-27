import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form: any;
  ePattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRex: string = '[789][0-9]{9}';
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.ePattern)]],

      contactDetails: formBuilder.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.contactRex)],
        ],
      }),
      skills: formBuilder.array([]),
    });

    // this.form = new FormGroup({
    //   firstName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   lastName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(this.ePattern),
    //   ]),

    //   contactDetails: new FormGroup({
    //     address: new FormControl('', [Validators.required]),
    //     shippingAddress: new FormControl('', [Validators.required]),
    //     contactNo: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(this.contactRex),
    //     ]),
    //   }),

    //   skills: new FormArray([]),
    // });
  }

  get registerFormControl() {
    return this.form.controls;
  }

  get Address() {
    return this.form.get('contactDetails.address');
  }

  get AddressDetails() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get Contact() {
    return this.form.get('contactDetails.contactNo');
  }

  // get Contact() {}

  onSubmit() {
    //this.form;
    console.log(this.form.value);
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }
  addSkills(skills: HTMLInputElement) {
    //(this.form.get('skills') as FormArray).push(new FormControl(skills.value));
    this.Skills.push(new FormControl(skills.value));
    skills.value = '';
    console.log(this.form.value);
  }

  removeSkills(i: number) {
    this.Skills.removeAt(i);
  }
}
