package main.service;

import main.controller.Guest.Guest;

import java.util.List;

public interface IGuestService {

    List<Guest> findAll();
    void save(Guest guest);
}
