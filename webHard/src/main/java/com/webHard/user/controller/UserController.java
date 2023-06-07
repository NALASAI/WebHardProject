package com.webHard.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
public class UserController {

	@GetMapping("/login")
	public void login() {
		log.info("Login Page");
		
	}
	
	@GetMapping("/signin")
	public void signIn() {
		log.info("SignIn Page");
		
	}
	
	
}
