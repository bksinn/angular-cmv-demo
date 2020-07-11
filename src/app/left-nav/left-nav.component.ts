import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.less']
})
export class LeftNavComponent implements OnInit {
  @Input() companyName: string;
  @Input() companyLogo: string;
  @Input() statusName: Array<string>;
  @Input() statusColor: Array<string>;
  @Input() menuItems: Array<string>;

  constructor() {}

  ngOnInit(): void {}

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
