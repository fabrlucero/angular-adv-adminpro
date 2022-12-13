import { Component, OnInit,Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styleUrls: ['./grafical.component.css']
})
export class GraficalComponent {

  labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  data1: any[] = [
    { data: [ 350, 450, 100 ] }
  ]

  labels2: string[] = [ 'Accesorios', 'HHP', 'Wearables' ];
  data2: any[] = [
    { data: [ 80, 50, 40 ] }
  ]
}
