package com.example.Tnit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Tnit.model.Roles;
public interface RoleRepository extends JpaRepository<Roles, Long> {
    Roles findByName(String name);
}
