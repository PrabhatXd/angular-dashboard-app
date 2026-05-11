import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { homedir } from 'os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

constructor(private authService: AuthService,private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "UserName is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg='';
      const result = this.authService.login(this.username, this.password);
      if (result === 200){
          this.router.navigate(['/home'])
           console.log("Login successful");

      }else {
        this.errorMsg = "Invalid username or password";
      }
      if(result === 403){
        this.errorMsg='Invalid Credentials'
      }
    }
  }

}
