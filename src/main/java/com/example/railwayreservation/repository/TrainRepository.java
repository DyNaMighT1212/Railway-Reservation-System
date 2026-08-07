package com.example.railwayreservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.railwayreservation.model.Train;

public interface TrainRepository extends JpaRepository<Train, Integer>{

    Train findByTrainNo(String trainNo);

    List<Train> findBySourceAndDestination(String source,String destination);

}