package com.example.Tnit.model;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table (name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "user_id") 
	private Long id;
	
	@Column(name = "username") 
	private String username;
	
	@Column(name = "email", unique=true ) 
	private String email;
	
	@Column(name = "role") 
	@ManyToMany(fetch = FetchType.EAGER)
    private Set<Roles> roles = new HashSet<>();
	
	
}

