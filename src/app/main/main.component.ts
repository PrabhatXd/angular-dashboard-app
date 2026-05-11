import { Component,inject, OnInit  } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SaleByMonthComponent } from '../sale-by-month/sale-by-month.component';
import { SaleByCategoryComponent } from '../sale-by-category/sale-by-category.component';
import { LastTransactionCompComponent } from '../last-transaction-comp/last-transaction-comp.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [TopWidgetsComponent,HttpClientModule,
    SaleByMonthComponent,SaleByCategoryComponent,
    LastTransactionCompComponent,
    TopThreeProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
 totalIds:any = 0;
 uniqueUsersId:any=0;
completedTrueCount: number = 0;
completedFalseCount: number = 0;


ngOnInit(): void {this.fetchData()}

 httpClient=inject(HttpClient);

  userdata:any[]= [];

  fetchData(){
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data:any)=>{
        console.log(data)
        this.userdata=data;
        this.totalIds=this.userdata.length;
        console.log(this.totalIds)
        this.uniqueUsersId = [...new Set(this.userdata.map(u => u.userId))].length;
        console.log(this.uniqueUsersId)

       const completedTrue = this.userdata.filter(u => u.completed === true).length;
       const completedFalse = this.userdata.filter(u => u.completed === false).length;

      this.completedTrueCount = completedTrue;
      this.completedFalseCount = completedFalse;
       console.log(completedFalse,completedTrue)


      });

    }
}
