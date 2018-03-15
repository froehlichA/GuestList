package main.controller.Guest;

import main.service.IGuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GuestController {

    @Autowired
    private IGuestService service;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/guests")
    public List<Guest> get() {
        return service.findAll();
    }

    @PostMapping("/guests")
    public String post() {
        /*Guest guest = new Guest(surname, name, age, gender, attending);
        service.save(guest);
        return "Your Guest: "+guest.toString();*/
        return null;
    }
}
