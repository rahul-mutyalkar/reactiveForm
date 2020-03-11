import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  registerationForm: FormGroup;
  name = new FormControl('', [Validators.required])
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.registerationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[\w ]+$')]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: [null, [Validators.required]]
    },
      //{ validator: this.passwordMatchValidator }
    );

  }

  passwordMatchValidator(form) {
    console.log('form : ', form);

    if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
      form.controls['confirmPassword'].setErrors({ 'mismatch': true });
      return false
    }
    return true;
  }

  // checkMe() {
  //   console.log('checkMe() : ', this.name);
  // }

  submit() {
    console.log('registeration form : ', this.registerationForm.controls)
    // this.registerationForm.setValue({ email: 'rahulmutyalkar@gmail.com' }, { emitEvent: true });
    // this.registerationForm.patchValue({ email: 'rahulmutyalkar@gmail.com', mobile: '9673412006', gender: 'male' })
    // this.registerationForm = this.registerationForm;
    // console.log('this.registerationForm : ', this.registerationForm.controls)
    // this.registerationForm.updateValueAndValidity();
  }

  setPristineToAll() {


  }
}
