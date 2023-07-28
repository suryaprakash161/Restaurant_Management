package com.springapp.RegisterLogin.Service;

import java.util.List;

import com.springapp.RegisterLogin.Model.LoginUser;
import com.springapp.RegisterLogin.Model.ResponseMessage;
import com.springapp.RegisterLogin.Model.User;

public interface UserService {
	
	String addUser(User user);
	
	List<User> showUsers();
	
	ResponseMessage sendResponseForLogin(LoginUser user);
	
	User getUserByEmail(String email);
	
}
