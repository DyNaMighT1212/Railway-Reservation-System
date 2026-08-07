package com.example.railwayreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.railwayreservation.model.User;
import com.example.railwayreservation.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService service;

    // Register User
    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return service.addUser(user);
    }

    // Login
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.login(user);
    }

    // Get All Users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    // Get User By Id
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return service.getUserById(id);
    }

    // Update User
    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }

    // Delete User
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id) {
        return service.deleteUser(id);
    }

    @GetMapping("/count")
    public long getUserCount(){

        return service.getUserCount();

    }
    
}