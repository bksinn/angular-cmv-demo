import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.less']
})
export class LeftNavComponent extends HomeComponent implements OnInit, AfterViewChecked {
  // @Input() companyName: string;
  // @Input() companyLogo: string;
  // @Input() statusName: Array<string>;
  // @Input() statusColor: Array<string>;
  // @Input() menuItems: Array<string>;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

}
