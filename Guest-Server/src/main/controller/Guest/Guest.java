package main.controller.Guest;

public class Guest {
    private String surname;
    private String name;
    private int age;
    private String gender;
    private boolean attending;

    public Guest(String surname, String name, int age, String gender, boolean attending) {
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.attending = attending;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public boolean isAttending() {
        return attending;
    }

    public void setAttending(boolean attending) {
        this.attending = attending;
    }

    @Override
    public String toString() {
        return "Guest{" +
                "surname='" + surname + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", attending=" + attending +
                '}';
    }
}
