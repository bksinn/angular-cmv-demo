import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.less']
})
export class LeftNavigationComponent implements OnInit {
  companyName: string = "";
  companyLogo: string = "https://lh3.googleusercontent.com/-WPuTTTce_Is/XvyTOOjUOxI/AAAAAAAACoI/fwRIIrOgyeIW67b6kVy5rQ72fs0jfc0RQCK8BGAsYHg/s0/Matchless-IT-large-transparent-background1-300x102-1%25402x.png";
  statusName: Array<any> = ['System', 'Voice', '23 New Messages', 'vFax', 'Call Center'];
  statusColor: Array<any> = ['active', 'warn', 'active', 'danger', 'warn'];
  menuItems: Array<any> = ['Home', 'Phone', 'Messages', 'Features', 'Activity', 'Support', 'Logout'];

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }

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

}