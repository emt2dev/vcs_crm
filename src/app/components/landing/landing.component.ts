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
import { Stripe, loadStripe } from '@stripe/stripe-js';
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
        MatFormFieldModule, CartComponent]
})
export class LandingComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading

  responseMessage: String = ""; // the response message to show to the user

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
    this.isLoading = true; // sending the post request async so it's in progress
    this.submitted = false; // hide the response message on multiple submits
    this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
      (response) => {
        // choose the response message
        if (response) {
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        } else {
          this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        }
        this.form.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        this.isLoading = false; // re enable the submit button
        console.log(response);
      },
      (error) => {
        this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
        this.form.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        this.isLoading = false; // re enable the submit button
        console.log(error);
        }
      );
    }
  }
}
