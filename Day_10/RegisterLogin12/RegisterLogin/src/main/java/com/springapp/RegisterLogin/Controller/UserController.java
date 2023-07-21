package com.springapp.RegisterLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.LoginUser;
import com.springapp.RegisterLogin.Model.ResponseMessage;
import com.springapp.RegisterLogin.Model.User;
import com.springapp.RegisterLogin.Service.UserServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v4/user")
public class UserController {
	
	@Autowired
	private UserServiceImpl service;
	
	@PostMapping("/add")
	public String addUser(@RequestBody User user) {
		return service.addUser(user);
	}
	
	@GetMapping("/get")
	public List<User> getUsers(){
		return service.showUsers();
	}
	
	@GetMapping("/get/{email}")
	public User getUserByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginUser user) {
		ResponseMessage response = service.sendResponseForLogin(user);
		return ResponseEntity.ok(response);
	}
	
}
