package com.zbay.helloworld;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class HelloworldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloworldApplication.class, args);
	}
	
	@RequestMapping("/")
	public String hello() {
		return "Hello, client! How are you doing!";
	}
	
	@RequestMapping("/random")
	public String random() {
		return "Random message!!!";
	}
}
