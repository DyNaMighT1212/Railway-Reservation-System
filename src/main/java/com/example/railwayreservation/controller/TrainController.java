package com.example.railwayreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwayreservation.model.Train;
import com.example.railwayreservation.service.TrainService;

@RestController
@RequestMapping("/trains")
@CrossOrigin("*")
public class TrainController {

    @Autowired
    TrainService service;

    @PostMapping
    public Train addTrain(@RequestBody Train train) {
        return service.addTrain(train);
    }

    @GetMapping
    public List<Train> getAllTrains() {
        return service.getAllTrains();
    }

    @GetMapping("/{id}")
    public Train getTrainById(@PathVariable int id) {
        return service.getTrainById(id);
    }

    @PutMapping
    public Train updateTrain(@RequestBody Train train) {
        return service.updateTrain(train);
    }

    @DeleteMapping("/{id}")
    public String deleteTrain(@PathVariable int id) {
        return service.deleteTrain(id);
    }

    @GetMapping("/search")
    public List<Train> searchTrain(@RequestParam String source,
                                   @RequestParam String destination) {
        return service.searchTrain(source, destination);
    }
    @GetMapping("/count")
    public long getTrainCount(){

        return service.getTrainCount();

    }
}
