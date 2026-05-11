import { Component } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-side-nav',
  standalone:true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
   constructor(private auth: AuthService,private router:Router){}

  userForm() {
    this.router.navigate(['/userForm']);
  }
  statistics(){
    this.router.navigate(['/statistics'])
  }
  workqueue(){
    this.router.navigate(['/work-queue'])
  }
  contact(){
    this.router.navigate(['/contact'])
  }
  help(){
    this.router.navigate(['/help-page'])
  }
  Dashboard(){
    this.router.navigate(['/Dashboard'])

  }
}
