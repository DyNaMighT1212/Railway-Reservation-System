package com.example.railwayreservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.railwayreservation.model.Booking;
import com.example.railwayreservation.model.Train;
import com.example.railwayreservation.repository.BookingRepository;
import com.example.railwayreservation.repository.TrainRepository;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepo;

    @Autowired
    TrainRepository trainRepo;

    // Book Ticket
    public String bookTicket(Booking booking) {

        Train train = trainRepo.findByTrainNo(booking.getTrainNo());

        if (train == null) {
            return "Train Not Found";
        }

        if (train.getSeats() < booking.getSeatsBooked()) {
            return "Seats Not Available";
        }

        // Reduce Seats
        train.setSeats(train.getSeats() - booking.getSeatsBooked());
        trainRepo.save(train);

        // Save Booking
        booking.setTrainName(train.getTrainName());
        booking.setTotalFare(train.getFare() * booking.getSeatsBooked());

        bookingRepo.save(booking);

        return "Ticket Booked Successfully";
    }

    // Get All Bookings
    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }

    // Cancel Booking
    public String cancelBooking(int id) {

        Booking booking = bookingRepo.findById(id).orElse(null);

        if (booking == null) {
            return "Booking Not Found";
        }

        Train train = trainRepo.findByTrainNo(booking.getTrainNo());

        if (train != null) {

            train.setSeats(train.getSeats() + booking.getSeatsBooked());

            trainRepo.save(train);
        }

        bookingRepo.deleteById(id);

        return "Booking Cancelled Successfully";
    }
    
 // Get Bookings By User
    public List<Booking> getBookingsByUser(String userName){

        return bookingRepo.findByUserName(userName);

    }
    
    public long getBookingCount(){

        return bookingRepo.count();

    }
}