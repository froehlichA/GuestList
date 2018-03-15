package main.repository;

import main.controller.Guest.Guest;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class GuestRepositoryImpl implements IGuestRepository {

    private final Map<String, Guest> guests = new ConcurrentHashMap<String, Guest>();

    public GuestRepositoryImpl() {
        this.save(new Guest("Fröhlich", "Alexander", 18, "m", true));
    }

    @Override
    public List<Guest> findAll() {
        return new ArrayList<Guest>(guests.values());
    }

    @Override
    public void save(Guest guest) {
        guests.put(UUID.randomUUID().toString(), guest);
    }
}
