package com.springapp.RegisterLogin.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springapp.RegisterLogin.Model.LoginUser;
import com.springapp.RegisterLogin.Model.ResponseMessage;
import com.springapp.RegisterLogin.Model.User;
import com.springapp.RegisterLogin.Repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public String addUser(User user) {
		
		User obj = repo.findByEmail(user.getEmail());
		
		System.out.println(obj);
		
		if(Objects.isNull(obj)) {
			
			String encodedPassword = passwordEncoder.encode(user.getPassword());
			
			User user1 = new User();
			user1.setFirstName(user.getFirstName());
			user1.setLastName(user.getLastName());
			user1.setUsername(user.getUsername());
			user1.setPassword(encodedPassword);
			user1.setEmail(user.getEmail());
			user1.setGender(user.getGender());
			user1.setAddress(user.getAddress());
			user1.setDob(user.getDob());
			user1.setMobile(user.getMobile());
			user1.setLocation(user.getLocation());

		
			
			return repo.save(user1) != null ? user.toString() : "Error";

		}
		else {
			return "Email Already Exists !!";			
		}
		
	}

	@Override
	public List<User> showUsers() {
		return repo.findAll();
	}
	
	@Override
	public ResponseMessage sendResponseForLogin(LoginUser user) {
		
		User obj = repo.findByEmail(user.getEmail());
		System.out.println(user.getEmail());
		
		if(obj != null) {
			String password = user.getPassword();
			String encodedPassword = obj.getPassword();
			
			Boolean isPasswordRight = passwordEncoder.matches(password, encodedPassword);
			
			if(isPasswordRight) {
				Optional<User> user2 = repo.findOneByEmailAndPassword(user.getEmail(), encodedPassword);
				
				if(!user2.isEmpty()) {
					ResponseMessage res = new ResponseMessage();
					res.setMessage("Login Success !");
					res.setStatus(isPasswordRight);
					return res;
				}
				else {
					ResponseMessage res = new ResponseMessage();
					res.setMessage("Login Failed !");
					res.setStatus(isPasswordRight);
					return res;
//					return ResponseMessage.builder().message("Login failed :) ").status(isPasswordRight).build();
				}
			}
			else {
				ResponseMessage res = new ResponseMessage();
				res.setMessage("Password wrong. please try again!");
				res.setStatus(isPasswordRight);
				return res;
//				return ResponseMessage.builder().message("Password wrong. please try again!").status(isPasswordRight).build();
			}
		}
		else {
			ResponseMessage res = new ResponseMessage();
			res.setMessage("Email doesn't exist !");
			res.setStatus(false);
			return res;
//			return ResponseMessage.builder().message("Email doesn't exist !").status(false).build();
		}
		
	}

	@Override
	public User getUserByEmail(String email) {
		User user = repo.findByEmail(email);
		System.out.println(user.toString());
		return repo.findByEmail(email);
	}

}
