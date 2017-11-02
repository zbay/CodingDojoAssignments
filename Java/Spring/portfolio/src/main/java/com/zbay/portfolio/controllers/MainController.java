package com.zbay.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    @RequestMapping("/")
    public String index() {
            return "forward:/index.html";
    }
    
    @RequestMapping("/projects")
    public String projects(){
    	return "forward:/portfolio.html";
    }

    @RequestMapping("/me")
    public String me() {
        return "forward:/about_me.html";
    }
}
