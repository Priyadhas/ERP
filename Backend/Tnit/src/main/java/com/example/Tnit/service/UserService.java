package com.example.Tnit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Tnit.model.Login;
import com.example.Tnit.model.User;
import com.example.Tnit.repository.LoginRepository;
import com.example.Tnit.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private LoginRepository loginRepository;

    public User createUser(User user, Login login) {
        // Save User
        userRepository.save(user);

        // Save login details
        loginRepository.save(login);
        
        return user;
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Login getloginByEmail(String email) {
        return loginRepository.findByEmail(email);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();  // This fetches all users from the database
    }
}

