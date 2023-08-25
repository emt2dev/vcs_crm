import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/models/LoginDTO';
import { EntryService } from 'src/app/services/auth/entry-service.service';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  LoginForm: FormGroup;
  Source: string = "LoginUser";
  /**
   *
   */
  constructor(public formBuilder: FormBuilder, public entryService: EntryService, public router: Router) {
    this.LoginForm = this.formBuilder.group({
      email: ['',Validators.email],
      password: ['', Validators.pattern("^(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$")]
    });
  }

  ngOnInit() {}

  CustomerLogin() {
    let Customer = new LoginDTO(this.LoginForm.value.email, this.LoginForm.value.password, this.Source);

    this.entryService.LoginUser(Customer).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/user/dashboard");
      },
      error: (err) => {
        console.log(err.toString());
      }
    });
  }
}
