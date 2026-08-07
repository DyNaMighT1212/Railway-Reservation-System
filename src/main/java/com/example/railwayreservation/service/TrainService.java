package com.example.railwayreservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.railwayreservation.model.Train;
import com.example.railwayreservation.repository.TrainRepository;

@Service
public class TrainService {

    @Autowired
    TrainRepository trepo;

    // Add Train
    public Train addTrain(Train train) {
        return trepo.save(train);
    }

    // Get All Trains
    public List<Train> getAllTrains() {
        return trepo.findAll();
    }

    // Get Train By Id
    public Train getTrainById(int id) {
        return trepo.findById(id).orElse(null);
    }

    // Update Train
    public Train updateTrain(Train train) {
        return trepo.save(train);
    }

    // Delete Train
    public String deleteTrain(int id) {
        trepo.deleteById(id);
        return "Train Deleted Successfully";
    }
    
    public List<Train> searchTrain(String source,String destination){

        return trepo.findBySourceAndDestination(source, destination);

    }
    
    public long getTrainCount(){

        return trepo.count();

    }
}
