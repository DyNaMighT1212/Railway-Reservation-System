package com.example.railwayreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwayreservation.model.Booking;
import com.example.railwayreservation.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingController {

	 @Autowired
	    BookingService service;

	    @PostMapping("/book")
	    public String bookTicket(@RequestBody Booking booking) {
	        return service.bookTicket(booking);
	    }

	    @GetMapping("/all")
	    public List<Booking> getAllBookings() {
	        return service.getAllBookings();
	    }

	    @DeleteMapping("/cancel/{id}")
	    public String cancelBooking(@PathVariable int id) {
	        return service.cancelBooking(id);
	    }
	    
	    @GetMapping("/user/{userName}")
	    public List<Booking> getBookingsByUser(@PathVariable String userName){

	        return service.getBookingsByUser(userName);

	    }
	    
	    @GetMapping("/count")
	    public long getBookingCount(){

	        return service.getBookingCount();

	    }
	
}
