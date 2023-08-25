import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/models/LoginDTO';
import { EntryService } from 'src/app/services/auth/entry-service.service';

@Component({
  selector: 'app-stafflogin',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent {
  LoginForm: FormGroup;
  Source: string = "LoginStaff";
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

  StaffLogin() {
    let Staff = new LoginDTO(this.LoginForm.value.email, this.LoginForm.value.password, this.Source);

    this.entryService.LoginStaff(Staff).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/staff/dashboard");
      },
      error: (err) => {
        console.log(err.toString());
      }
    });
  }
}
