export class PersonAlternative {
    nachname = 'Armstrong';
    vorname = 'Neil';
    beruf = 'Physiker';
    alter = 90;

    showPerson() {
        console.log(`${this.vorname} ${this.nachname}, ${this.beruf}`);
    }
}
