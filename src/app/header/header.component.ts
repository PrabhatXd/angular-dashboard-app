import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router,provideRouter } from '@angular/router';
import { RouterModule, } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HeaderComponent,RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private auth: AuthService,private router:Router){}


logout() {
  console.log("Logout clicked ✅");
    console.log("User logged out");

    this.router.navigate(['/login']);
  }


}
