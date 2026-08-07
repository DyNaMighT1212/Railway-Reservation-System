package com.example.railwayreservation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     int id;

     String userName;
     String trainNo;
     String trainName;
     int seatsBooked;
     double totalFare;
	 public int getId() {
		 return id;
	 }
	 public void setId(int id) {
		 this.id = id;
	 }
	 public String getUserName() {
		 return userName;
	 }
	 public void setUserName(String userName) {
		 this.userName = userName;
	 }
	 public String getTrainNo() {
		 return trainNo;
	 }
	 public void setTrainNo(String trainNo) {
		 this.trainNo = trainNo;
	 }
	 public String getTrainName() {
		 return trainName;
	 }
	 public void setTrainName(String trainName) {
		 this.trainName = trainName;
	 }
	 public int getSeatsBooked() {
		 return seatsBooked;
	 }
	 public void setSeatsBooked(int seatsBooked) {
		 this.seatsBooked = seatsBooked;
	 }
	 public double getTotalFare() {
		 return totalFare;
	 }
	 public void setTotalFare(double totalFare) {
		 this.totalFare = totalFare;
	 }
	
     
     
}
