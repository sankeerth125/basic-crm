package com.crm.server.service;

import com.crm.server.model.User;
import com.crm.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    public void saveUser(User user) {
        repository.save(user);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public boolean isUsernameAlreadyPresent(String username) { return repository.countByUsername(username) > 0; }
}
