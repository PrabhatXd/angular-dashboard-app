import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactComponent } from './contact/contact.component';
import { HelpPageComponent } from './help-page/help-page.component';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent},
     {path:'data-display',component:DataDisplayComponent},
     {path:'header',component:HeaderComponent},
     {path:'Dashboard',component:DashboardComponent},
     {path:'userForm',component:UserFormComponent},
     {path:'work-queue',component:WorkQueueComponent},
     {path:'statistics',component:StatisticsComponent},
     {path:'contact',component:ContactComponent},
     {path:'help-page',component:HelpPageComponent},




];
