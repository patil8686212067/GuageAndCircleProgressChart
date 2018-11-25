import { Component, OnInit } from '@angular/core';
//import {AmexioWidgetModule,DashboardLoaderService} from "amexio-ng-extensions";
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  gaugeChartData1:any[];
  gaugeChartData2:any[];
  gaugeChartData3:any[];
  gaugeChartData4:any[];
  public dataofCount=[{
    "countOfSp":89,
    "countOfCa":70,
    "countOfRefferal":50
  }];
  constructor() { 
    // this.dataofCount.push({
    //   "countOfSp":89,
    //   "countOfCa":70,
    //   "countOfRefferal":50
    // })
    this.dataofCount
    this.gaugeChartData1=[
      ['Label', 'Value'],
      ['Filing done', 70]
     
    ];
    this.gaugeChartData2=[
      ['Label', 'Value'],
     
      ['Remaining', 10]
      
    ];
    this.gaugeChartData3=[
      ['Label', 'Value'],
      
      ['In Process', 20],
      
    ];
    this.gaugeChartData4=[
      ['Label', 'Value'],
    
      ['Not Started',5]
    ];
  }

  ngOnInit() {
    console.log("bnxjfdhjhdjhf", this.dataofCount)
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Service partner', 'CA', 'Referral'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
   // Pie
   public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public pieChartData:number[] = [300, 500, 100];
   public pieChartType:string = 'pie';
  
   // events
   public chartClickedPie(e:any):void {
     console.log(e);
   }
  
   public chartHoveredPie(e:any):void {
     console.log(e);
   }
}
