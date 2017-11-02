package com.zbay.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
    @RequestMapping("/")
    public String index(HttpSession session) {
    	Integer count = (Integer) session.getAttribute("count");
    	if(count == null) {
    		session.setAttribute("count", 1);
    	}
    	else {
    		Integer currentCount = count + 1;
    		session.setAttribute("count", currentCount);
    	}
    	return "index.jsp";
    }
    
    @RequestMapping("/counter")
    public String counter(HttpSession session) {
    	Integer count = (Integer) session.getAttribute("count");
    	if(count == null) {
    		session.setAttribute("count", 0);
    	}
    	return "counter.jsp"; // c:out can read directly from session with ${}
    }
 
    @RequestMapping("/double")
    public String doubleCount(HttpSession session) {
    	Integer count = (Integer) session.getAttribute("count");
    	if(count == null) {
    		session.setAttribute("count", 2);
    	}
    	else {
    		Integer currentCount = count + 2;
    		session.setAttribute("count", currentCount);
    	}
    	return "double.jsp";
    }
    
    @RequestMapping("/reset")
    public String reset(HttpSession session) {
    	session.setAttribute("count", 0);
    	return "redirect:/counter";
    }
}