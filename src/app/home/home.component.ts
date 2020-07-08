import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  chartData: {};
  chartTitle = "Active";
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

  companyName: "";
  companyLogo: "https://lh3.googleusercontent.com/-WPuTTTce_Is/XvyTOOjUOxI/AAAAAAAACoI/fwRIIrOgyeIW67b6kVy5rQ72fs0jfc0RQCK8BGAsYHg/s0/Matchless-IT-large-transparent-background1-300x102-1%25402x.png";
  statusName: Array<string> = ['System', 'Voice', '23 New Messages', 'vFax', 'Call Center'];
  statusColor: Array<string> = ['active', 'warn', 'active', 'danger', 'warn'];
  menuItems: Array<string> = ['HOME', 'PHONE', 'MESSAGES', 'FEATURES', 'ACTIVITY', 'SUPPORT'];

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  toRandomStatus() {

    const randomNum = Math.floor(Math.random() * 10);

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
    title === "HOME" ? this.chartTitle = "Active" : this.chartTitle = title;

    this.chartData = {
      Voice: Math.floor(Math.random() * 100 / 1.2),
      Text: Math.floor(Math.random() * 100 / 1.2),
      Video: Math.floor(Math.random() * 100 / 1.2),
      vFax: Math.floor(Math.random() * 100 / 1.2),
      Chat: Math.floor(Math.random() * 100 / 1.2)
    }
  }
}
