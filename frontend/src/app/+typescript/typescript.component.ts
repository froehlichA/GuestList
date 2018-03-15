import { Component } from '@angular/core';
import { Person } from './person';
import { PersonAlternative } from './person-alternative';
import { CalcZins } from './calc-zins';

@Component({
  selector: 'htl-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

  constructor() {
    const myPerson = new Person('Armstrong', 'Lance', 45);
    console.log(myPerson);

    const calc: CalcZins = new CalcZins(), person = new PersonAlternative();

    // Index1
    console.log(`Ergebnis: ${calc.calcZins(200, 2, 360)}`);

    // Index2
    calc.showZins(500, 1, 3);

    // Index3
    const myInts: number[] = [1, 2, 3, 4];
    myInts.forEach(val => console.log(val));

    // Index4
    console.log(person.nachname);
    person.showPerson();

    // Index5
    const ergebnis = 4 + person.alter;
    console.log(ergebnis);
    console.log(person.nachname);
    person.showPerson();
  }
}
