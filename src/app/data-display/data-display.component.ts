import { Component,inject, OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data-display',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent implements OnInit {
  httpClient=inject(HttpClient);

  userdata:any[]= [];

  ngOnInit(): void {this.fetchData()}


    fetchData(){
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data:any)=>{
        console.log(data)
        this.userdata=data;
      });

    }
 }


