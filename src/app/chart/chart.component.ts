import { Component, OnInit } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  charts: any[];
  chartsOptions: any[];

  constructor(private angularBillboardService: AngularBillboardService) {}

  ngOnInit() {
    this.chartsOptions = this.chartsOptions = [
      {
        data: {
          columns: [
              ['data1', 0.33, 0.20, 0.42, 0.36, 0.21, 0.22],
              ['data2', 0.41, 0.34, 0.48, 0.38, 0.32, 0.31],
              ['data3', 0.36, 0.22, 0.49, 0.39, 0.25, 0.20],
              ['data4', 0.28, 0.16, 0.32, 0.33, 0.17, 0.25]
          ],
          names: {
              data1: 'SME',
              data2: 'LARGE',
              data3: 'SME Import',
              data4: 'SME Export'
          },
          types: {
              data1: 'bar',
              data2: 'bar',
              data3: 'line',
              data4: 'line'
          },
          colors: {
              data1: '#FBC02D',
              data2: '#009688',
              data3: '#795548',
              data4: '#212121'
          },
  },
      axis: {
          rotated: true,
          x: {
              type: 'category',
              categories: [
                  'Denmark',
                  'Germany',
                  'Latvia',
                  'Netherlands',
                  'Finland',
                  'Norway'
              ]
          }
      },
          title: {
              text: 'Trade openness'
          }
      }
  ];
  this.charts = this.angularBillboardService.generate(...this.chartsOptions);

  }

}
