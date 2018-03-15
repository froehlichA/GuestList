package main.service;

import main.controller.Guest.Guest;
import main.repository.IGuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestServiceImpl implements IGuestService {

    @Autowired
    private IGuestRepository repository;

    @Override
    public List<Guest> findAll() {
        return repository.findAll();
    }

    @Override
    public void save(Guest guest) {
        repository.save(guest);
    }
}
