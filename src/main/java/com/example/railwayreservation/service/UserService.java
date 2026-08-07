package com.example.railwayreservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.railwayreservation.model.User;
import com.example.railwayreservation.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    // Register User
    public User addUser(User user) {
        return repo.save(user);
    }

    // Login User
    public User login(User user) {
        return repo.findByEmailAndPassword(user.getEmail(), user.getPassword());
    }

    // Get All Users
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // Get User By Id
    public User getUserById(int id) {
        return repo.findById(id).orElse(null);
    }

    // Update User
    public User updateUser(User user) {
        return repo.save(user);
    }

    // Delete User
    public String deleteUser(int id) {
        repo.deleteById(id);
        return "User Deleted Successfully";
    }
    public long getUserCount(){

        return repo.count();

    }

}