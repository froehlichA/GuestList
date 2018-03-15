import { Component, OnInit } from "@angular/core";
import { GaestelisteService } from "./gaesteliste.service";
import Guest from "./Guest";

@Component({
  selector: "htl-gaesteliste",
  templateUrl: "./gaesteliste.component.html",
  styleUrls: ["./gaesteliste.component.css"]
})
export class GaestelisteComponent {
  guests: Array<Guest> = [];

  addSurname: string;
  addName: string;
  addAge: number;
  addGender: string;

  constructor(private _gaesteliste: GaestelisteService) {
    let data = _gaesteliste.loadData();
    let counter = 0;
    data.subscribe(json => {
      json.forEach(element => {
        this.guests.push(
          new Guest(
            counter,
            element.surname,
            element.name,
            element.age,
            element.gender,
            element.attending
          )
        );
        counter++;
      });
    });
  }

  deleteGuest(id: number) {
    this.guests.forEach(guest => {
      if (guest.id === id) {
        const index = this.guests.indexOf(guest);
        this.guests.splice(index, 1);
      }
    });
  }

  addGuest() {
    let maxId = ++this.guests[0].id;
    this.guests.forEach(guest => {
      if (guest.id > maxId) {
        maxId = ++guest.id;
      }
    });
    this.guests.push(
      new Guest(
        maxId,
        this.addSurname,
        this.addName,
        this.addAge,
        this.addGender,
        false
      )
    );
    (this.addSurname = ""),
      (this.addName = ""),
      (this.addAge = null),
      (this.addGender = "");
  }
}
