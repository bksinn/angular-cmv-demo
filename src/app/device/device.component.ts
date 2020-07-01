import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device: any;
  constructor() {
    this.device = {
      Name: "Polycom VVX 250",
      MacAddress: "234-234-123-3333",
      Main: "(234)234-2344",
      Text: "(234)234-2344",
      CallerId: "(234)234-2344",
      Conference: "(234)234-2344",
      Domain: "sdf.234.sdf.com",
      ImageUrl: "https://thumbs.dreamstime.com/b/broken-iphone-cracked-screen-los-angeles-ca-usa-december-apple-white-background-selective-focus-68393736.jpg",
    }
   }

  ngOnInit() {
    console.log(this.device);
  }
}