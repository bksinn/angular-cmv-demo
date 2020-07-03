import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  person: {};
  constructor() {
    this.person = {
      name: "Mary Higgins",
      position: "Account Manager",
      email: "m.higgins@something.com",
      imageUrl: "assets/images/hero.png",
      address: {
        AddressLine1: "123 Route st",
        AddressLine2: "Suite 201",
        AddressLine3: "Manaplan, NJ",
        TimeZone: "GMT 0:400 EDT"
      },
      password: "********"
    }
   }

  ngOnInit() {
    console.log(this.person);
  }

}
