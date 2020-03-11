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
    this.initForm()
  }

  initForm() {
    this.registerationForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    })
  }

  checkMe() {
    console.log('checkMe() : ', this.name);
  }
}
