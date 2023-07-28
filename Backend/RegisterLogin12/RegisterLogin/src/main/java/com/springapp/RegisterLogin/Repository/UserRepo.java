package com.springapp.RegisterLogin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.User;

public interface UserRepo extends JpaRepository<User, Long> {

	Optional<User> findOneByEmailAndPassword(String email, String password);
	
	User findByEmail(String email);
	
}
