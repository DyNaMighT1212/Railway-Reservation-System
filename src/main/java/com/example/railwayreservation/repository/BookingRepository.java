package com.example.railwayreservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.railwayreservation.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer>{

    List<Booking> findByUserName(String userName);

}