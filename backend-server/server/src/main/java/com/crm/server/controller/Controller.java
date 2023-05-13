package com.crm.server.controller;

import com.crm.server.model.User;
import com.crm.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class Controller {

    @Autowired
    UserService userService;

    @PostMapping("/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/userpresent")
    public ResponseEntity<Boolean> isUsernameExists(@RequestParam String username) {
        return new ResponseEntity<>(userService.isUsernameAlreadyPresent(username), HttpStatus.OK);
    }

    @GetMapping("/test")
    public ResponseEntity<User> healthCheck() {
        User user = new User(1, "username", "emailId", "password");
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
