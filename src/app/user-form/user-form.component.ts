import { Component, inject, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-form',
  standalone:true,
  imports: [SideNavComponent,HttpClientModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

http = inject(HttpClient);
  userdata: any[] = [];

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.userdata = data;
      });
  }


}
