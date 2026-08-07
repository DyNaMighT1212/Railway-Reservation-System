package com.example.railwayreservation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Train {

	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 int id;

	 String trainNo;
	 String trainName;
	 String source;
	 String destination;
	 int seats;
	 double fare;
	 
	 
	 public int getId() {
		 return id;
	 }
	 public void setId(int id) {
		 this.id = id;
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
	 public String getSource() {
		 return source;
	 }
	 public void setSource(String source) {
		 this.source = source;
	 }
	 public String getDestination() {
		 return destination;
	 }
	 public void setDestination(String destination) {
		 this.destination = destination;
	 }
	 public int getSeats() {
		 return seats;
	 }
	 public void setSeats(int seats) {
		 this.seats = seats;
	 }
	 public double getFare() {
		 return fare;
	 }
	 public void setFare(double fare) {
		 this.fare = fare;
	 }
	
	 
	 
}
