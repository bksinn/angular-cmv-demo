import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  @Input() chart: any;
  @Input() title = "Activity";

  constructor() { }

  ngOnInit() {
    console.log(this.toRandomWidth())
  }

  toRandomWidth() {
    return Math.floor(Math.random() * 100 / 1.2);
  }

}
