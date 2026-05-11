import { ChartModule } from 'angular-highcharts';
import {Chart} from 'angular-highcharts'
import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-sale-by-month',
   standalone: true,
  imports: [ ChartModule,],
  templateUrl: './sale-by-month.component.html',
  styleUrl: './sale-by-month.component.scss'
})
export class SaleByMonthComponent {

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
      type: 'line',
      height:325
    },
    title: {
      text: 'Month Wise Report'
    },
     xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Arizona",
        type: "line",
        color: '#044342',
        data: [80, 85, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Connecticut',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#f7c214',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#6a088a',
        data: [
          60, 62, 78, 85, 95, 120, 105, 125, 155, 180, 200, 235
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });
}



}
