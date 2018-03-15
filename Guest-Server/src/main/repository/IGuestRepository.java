package main.repository;

import main.controller.Guest.Guest;

import java.util.List;

public interface IGuestRepository {

    List<Guest> findAll();
    void save(Guest guest);
}
