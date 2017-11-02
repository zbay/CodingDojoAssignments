package com.zbay.greeting.controllers;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController{
	@RequestMapping("/")
	public String index(HttpSession session, @RequestParam(value="firstName", defaultValue="Human") String firstName, @RequestParam(value="lastName", required=false) String lastName) {
		 if(lastName == null) {
			session.setAttribute("name", firstName);
		}
		else {
			session.setAttribute("name", firstName + " " + lastName);
		}
		return "index";
	}
}