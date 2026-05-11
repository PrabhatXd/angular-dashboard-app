import { ChartModule } from 'angular-highcharts';
import {Chart} from 'angular-highcharts'
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-sale-by-category',
  standalone: true,
  imports: [ ChartModule],
  templateUrl: './sale-by-category.component.html',
  styleUrl: './sale-by-category.component.scss'
})
export class SaleByCategoryComponent {
platformId = inject(PLATFORM_ID);
  chart: any;


ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }
initChart(){
  this.chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise Report'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Users',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Completed',
          y: 33.8,
          color: '#31a809',
        },
        {
          name: 'User Id',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Pending',
          y: 15.2,
          color: '#f37019',
        },
        {
          name: 'Others',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
}
}

