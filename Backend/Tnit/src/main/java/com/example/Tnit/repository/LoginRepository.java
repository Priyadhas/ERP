package com.example.Tnit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tnit.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {
	 Login findByEmail(String email);
}
