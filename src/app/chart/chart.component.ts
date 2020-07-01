import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  chart: any;
  title = "Activity";

  constructor() {
    this.chart = {
      Voice: 18,
      Text: 34,
      Video: 12,
      vFax: 8,
      Chat: 90
    }
   }

  ngOnInit() {
    console.log(this.toRandomWidth())
  }

  toRandomWidth() {
    var randomNum = Math.floor(Math.random() * 100 / 1.2);
    return randomNum;
  }

}