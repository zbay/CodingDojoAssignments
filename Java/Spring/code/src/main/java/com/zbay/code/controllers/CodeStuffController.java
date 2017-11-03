package com.zbay.code.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class CodeStuffController {
	@RequestMapping("/")
	public String index(@ModelAttribute("errors") String errors) {
		return "index";
	}
	
	@RequestMapping("/code")
	public String code(HttpSession session) {
		if(session.getAttribute("loggedIn") == null) {
			session.setAttribute("loggedIn", new Boolean(false));
		}
		Boolean loggedIn = (Boolean )session.getAttribute("loggedIn");
		if(loggedIn.booleanValue() == false) {
			return "redirect:/";
		}
		else {
			return "code";
		}
	}
	
	@RequestMapping(path="/login", method=RequestMethod.POST)
	public String login(HttpSession session, RedirectAttributes redirectAttributes, @RequestParam(value="code") String code) {
		if(code.equals("bushido")) {
			session.setAttribute("loggedIn", new Boolean(true));
			return "code";
		}
		else {
			redirectAttributes.addFlashAttribute("errors", "You must train harder!");
			return "redirect:/";
		}
	}
}