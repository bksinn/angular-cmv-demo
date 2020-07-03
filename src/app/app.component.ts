import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  chartData: any;
  chartTitle: string = "Active";
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.chartData = {
      Voice: 6,
      Text: 34,
      Video: 12,
      vFax: 8,
      Chat: 90
    }
  }

  companyName: string = "";
  companyLogo: string = "https://lh3.googleusercontent.com/-WPuTTTce_Is/XvyTOOjUOxI/AAAAAAAACoI/fwRIIrOgyeIW67b6kVy5rQ72fs0jfc0RQCK8BGAsYHg/s0/Matchless-IT-large-transparent-background1-300x102-1%25402x.png";
  statusName: Array<any> = ['System', 'Voice', '23 New Messages', 'vFax', 'Call Center'];
  statusColor: Array<any> = ['active', 'warn', 'active', 'danger', 'warn'];
  menuItems: Array<any> = ['HOME', 'PHONE', 'MESSAGES', 'FEATURES', 'ACTIVITY', 'SUPPORT'];

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  toRandomStatus() {
    var randomNum = Math.floor(Math.random() * 10);

    if (randomNum < 2) {
      return "danger";
    }
    if (randomNum > 5 && randomNum < 8) {
      return "warn";
    }
    else {
      return "active";
    }

  }

  randomizeChartAndTitle(title: string) {
    title == "HOME" ? this.chartTitle = "Active" : this.chartTitle = title;

    this.chartData = {
      Voice: Math.floor(Math.random() * 100 / 1.2),
      Text: Math.floor(Math.random() * 100 / 1.2),
      Video: Math.floor(Math.random() * 100 / 1.2),
      vFax: Math.floor(Math.random() * 100 / 1.2),
      Chat: Math.floor(Math.random() * 100 / 1.2)
    }
  }
}
