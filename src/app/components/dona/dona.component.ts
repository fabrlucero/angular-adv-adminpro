import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.data)
    console.log(this.doughnutChartData)
    this.doughnutChartData = {
      labels: this.labels,
      datasets: this.data
    }
  }

  @Input() titulo: string = 'Sin titulo';
  @Input() data: any[] = []; 

  @Input() public labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets:  [
      { data: [ 350, 450, 100 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
