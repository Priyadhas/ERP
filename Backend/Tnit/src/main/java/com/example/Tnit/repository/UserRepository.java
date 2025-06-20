package com.example.Tnit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tnit.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	 User findByEmail(String email);
	 User findByUsername(String username);
}
