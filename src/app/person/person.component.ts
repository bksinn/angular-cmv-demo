import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})
export class PersonComponent implements OnInit {
  person: any;
  constructor() {
    this.person = {
      name: "Mary Higgins",
      position: "Account Manager",
      email: "m.higgins@something.com",
      imageUrl: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      address: {
        AddressLine1: "123 Route st",
        AddressLine2: "Suite 201",
        AddressLine3: "Manaplan, NJ",
        TimeZone: "GMT 0:400 EDT"
      }
    }
   }

  ngOnInit() {
    console.log(this.person);
  }

}