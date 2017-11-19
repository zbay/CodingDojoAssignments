package com.zbay.products_restful.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/home")
public class SpController {
	
	public SpController() {}
	
	@RequestMapping("/")
	public String home() {
		return "index";
	}
}
