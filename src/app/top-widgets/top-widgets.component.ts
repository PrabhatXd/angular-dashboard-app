import { Component,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faUsers,
  faCheck,
  faUser,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {

  faUser = faUser;
  faUsers = faUsers;
  faCheck = faCheck;
  faCircleXmark = faCircleXmark;
   @Input() totalIds!: number;
   @Input()uniqueUsersId!:number;
  @Input() completedTrueCount!: number;
  @Input() completedFalseCount!: number;




}
