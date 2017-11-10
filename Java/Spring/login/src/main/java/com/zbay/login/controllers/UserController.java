package com.zbay.login.controllers;

import java.security.Principal;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.zbay.login.models.User;
import com.zbay.login.services.UserService;
import com.zbay.login.validators.UserValidator;

@Controller
public class UserController {
    private UserService userService;
    private UserValidator userValidator;
    
    public UserController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }
	
    @RequestMapping("/dashboard")
    public String home(Principal principal, Model model, HttpSession session) {
    	session.setAttribute("successReg", false);
        String email = principal.getName();
        User user = userService.findByEmail(email);
        this.userService.update(user);
        model.addAttribute("currentUser", user);
        return "dashboard";
    }
    
    @RequestMapping(value= {"/", "/login", "/registration"})
    public String home(HttpSession session, @RequestParam(value="error", required=false) String error, @RequestParam(value="logout", required=false) String logout, Model model) {
        if(error != null) {
            model.addAttribute("errorMessage", "Invalid Credentials, Please try again.");
            session.setAttribute("successReg", false);
        }
        if(logout != null) {
            model.addAttribute("logoutMessage", "Logout Successful!");
            session.setAttribute("successReg", false);
        }
    	model.addAttribute("user", new User());
        return "loginRegistration";
    }
	
    /*@RequestMapping(value="/logout")
    public String logout() {
    	return "redirect:/login";
    }*/
    
    @PostMapping("/registration")
    public String register(@Valid @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()) {
    		return "loginRegistration";
    	}
    	else{
    		this.userService.saveUser(user);
    		session.setAttribute("successReg", true);
    		return "redirect:/login";
        }
    }
 
}
