import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent implements OnInit {
  device: any;
  constructor() {
    this.device = {
      Name: "Polycom VVX 250",
      MacAddress: "722-431-656-46717",
      Main: "(633) 612-3579",
      Text: "(232) 451-6727",
      CallerId: "(415) 212-2551",
      Conference: "(212) 672-4124",
      Domain: "sdf.234.sdf.com",
      ImageUrl: "assets/images/phone.png",
    }
   }

  ngOnInit() {

  }
}
