import { Component,} from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SideNavComponent } from '../side-nav/side-nav.component';


@Component({
  selector: 'app-dashboard',
   imports: [MainComponent,SideNavComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {






}

