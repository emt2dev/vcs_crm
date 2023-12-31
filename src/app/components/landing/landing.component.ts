import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

// Modules/Components

// Dependencies
import { CartComponent } from "../../modules/cart/cart.component";



@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        CartComponent
      ]
})
export class LandingComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {}


  // send(): void {
  //   const { name, email, message } = this.form.value;
  //   alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
  // }

  send(): void {

  if (this.form.status == "VALID" && this.honeypot.value == "") {
    this.form.disable(); // disable the form if it's valid to disable multiple submissions
    var formData: any = new FormData();
    formData.append("name", this.form.get("name")?.value);
    formData.append("email", this.form.get("email")?.value);
    formData.append("message", this.form.get("message")?.value);

    this.http.post("YOUR GOOGLE WEB APP URL HERE", formData);
    } else {
      this.form.reset();
    }
  }
}
