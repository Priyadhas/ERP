package com.example.Tnit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tnit.dto.UserDto;
import com.example.Tnit.model.Login;
import com.example.Tnit.model.User;
/*import com.example.Tnit.repository.LoginRepository;*/
import com.example.Tnit.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;

	 @PostMapping("/create")
	    public User createUser(@RequestBody UserDto userdto) {
		 	User user = new User();
	        user.setUsername(userdto.getUsername());
	        user.setEmail(userdto.getEmail());
	        user.setRole(userdto.getRole());

	        Login login = new Login();
	        login.setEmail(userdto.getEmail());
	        login.setPassword(userdto.getPassword()); // Password should be encrypted in real applications

	        return userService.createUser(user, login);
	    }
	 
	 @GetMapping("/allusers")
	 public ResponseEntity<List<User>> getAllUsers() {
		    List<User> users = userService.getAllUsers();
		    if (users.isEmpty()) {
		        return ResponseEntity.noContent().build();  // Returns HTTP 204 if no users
		    }
		    return ResponseEntity.ok(users);  // Returns HTTP 200 with the list of users
		}
	 


	/* 	@PostMapping("/login")
		public String getloginByEmail(@RequestBody Login login) {
			Login loggedUser = LoginRepository.findByEmail(login.getEmail());
	
			if (loggedUser!= null && loggedUser.getPassword().equals(login.getPassword())) {
				return "Login successful!";
			} else {
				return "Invalid credentials!";
			}
		}
	 
	  /*  @GetMapping("/loggedIn")
	    public String login(@RequestParam String email, @RequestParam String password) {
	        Login login= userService.getloginByEmail(email);
	        if (login != null && login.getPassword().equals(password)) {
	            return "Login successful";
	        } else {
	            return "Invalid credentials";
	        }
	    }*/

	/*Build Add User REST API
	@PostMapping
	public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
		UserDto savedUser=userService.createUser(userDto);
		return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
	}
	
	
	//Build Get User REST API
	@GetMapping("{user_id}")
	public ResponseEntity<UserDto> getUserById(@PathVariable("user_id") Long user_id){
		 UserDto userDto= userService.getUserById(user_id);
		 return ResponseEntity.ok(userDto);
	}
	
	//REST API TO FETCH ALL USERS
	@GetMapping()
	public ResponseEntity<List<UserDto>> getAllUsers(){
		 List<UserDto> users= userService.getAllUsers();
		 return ResponseEntity.ok(users);
	}
	
	//Build Update User REST API
		@PutMapping("{user_id}")
		public ResponseEntity<UserDto> updateUser(@PathVariable("user_id") Long user_id,
												  @RequestBody UserDto updatedUser){
			 UserDto userDto= userService.updateUser(user_id,updatedUser);
			 return ResponseEntity.ok(userDto);
		}
		
	//Build Delete User REST API
		
		@DeleteMapping("{user_id}")
		public ResponseEntity<String> delUser(@PathVariable("user_id")Long user_id){
			 userService.DelUser(user_id);
			 return ResponseEntity.ok("User Deleted Successfully");
		}*/
}