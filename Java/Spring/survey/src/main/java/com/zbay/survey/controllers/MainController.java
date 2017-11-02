package com.zbay.survey.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController{
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping(path="/survey", method=RequestMethod.POST)
	public String save(HttpSession session, @RequestParam(value="name", required=true) String name,
			@RequestParam(value="location", required=true) String location,
			@RequestParam(value="language", required=true) String language, 
			@RequestParam(value="comment") String comment) {
		session.setAttribute("name", name);
		session.setAttribute("location", location);
		session.setAttribute("language", language);
		session.setAttribute("comment", comment);
		
		if(language.equals("Java")) {
			return "redirect:/java";
		}
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String results(HttpSession session) {
			return "result";
	}
	
	@RequestMapping("/java")
	public String java() {
			return "java";
	}
	
	
}