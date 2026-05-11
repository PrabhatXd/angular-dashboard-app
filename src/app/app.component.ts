import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactComponent } from './contact/contact.component';
import { HelpPageComponent } from './help-page/help-page.component';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,
    DataDisplayComponent,
    HeaderComponent,SideNavComponent,
    MainComponent,UserFormComponent,
  WorkQueueComponent,StatisticsComponent,ContactComponent,HelpPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'my-app';

}
