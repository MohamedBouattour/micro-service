import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  onSubmit() {
    const credentials = this.loginForm.value;
    this.service.login(credentials).subscribe((response: any) => {
      if (response?.access_token) {
        console.log(response);

        // User is authenticated, redirect to home page
        this.router.navigate(['/home']);
      }
    });
  }
}
