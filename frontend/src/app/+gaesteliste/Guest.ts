export default class Guest {
    id: number;
    surname: string;
    name: string;
    age: number;
    gender: string;
    attending: boolean;

    constructor(id: number, surname: string, name: string, age: number, gender: string, attending: boolean) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.attending = attending;
    }
}
