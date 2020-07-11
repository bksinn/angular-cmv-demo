import { Component, ChangeDetectorRef, OnInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  chartData: {};
  chartTitle = "Active";
  companyName: string = "";
  companyLogo: string = "https://lh3.googleusercontent.com/-WPuTTTce_Is/XvyTOOjUOxI/AAAAAAAACoI/fwRIIrOgyeIW67b6kVy5rQ72fs0jfc0RQCK8BGAsYHg/s0/Matchless-IT-large-transparent-background1-300x102-1%25402x.png";
  statusName: Array<string> = ['System', 'Voice', '23 New Messages', 'vFax', 'Call Center'];
  statusColor: Array<string> = ['active', 'warn', 'active', 'danger', 'warn'];
  menuItems: Array<string> = ['HOME', 'PHONE', 'MESSAGES', 'FEATURES', 'ACTIVITY'];

  constructor(private cdref?: ChangeDetectorRef, private router?: Router) { }

  ngOnInit() {
    this.chartData = {
      Voice: 6,
      Text: 34,
      Video: 12,
      vFax: 8,
      Chat: 90
    }
  }


  ngAfterContentChecked() {
  }

  ngAfterViewChecked(){
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

}
