import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/models/LoginDTO';
import { EntryService } from 'src/app/services/auth/entry-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [

  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  NewUser: FormGroup;
  Source: string = "NewUser";
  /**
   *
   */
  constructor(public formBuilder: FormBuilder, public entryService: EntryService, public router: Router) {
    this.NewUser = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern("^(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$")]
    })
  }

  Register() {
    let Customer = new LoginDTO(this.NewUser.value.email, this.NewUser.value.password, this.Source);
    this.entryService.RegisterCustomer(Customer).subscribe({
      next: () => {
        this.NewUser.reset();
        this.router.navigate(["login/user"]);
      },
      error: (err: any) => {
        console.log(err.toString());
      }
    })
  }


}
