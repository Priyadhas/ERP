package com.example.Tnit.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.web.bind.annotation.RestController;

import com.example.Tnit.model.Login;
import com.example.Tnit.repository.LoginRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @PostMapping("/")
    public String login(@RequestBody Login loginRequest) {
        // Find the login by email
        Login login = loginRepository.findByEmail(loginRequest.getEmail());

        if (login != null && login.getPassword().equals(loginRequest.getPassword())) {
            return "Login successful!";
        }
        else{
        return "Invalid email or password!";
        }
    }
}
