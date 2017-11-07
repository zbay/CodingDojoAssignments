package com.zbay.dojos.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zbay.dojos.models.Dojo;
import com.zbay.dojos.models.Ninja;
import com.zbay.dojos.services.DojoService;

@Controller
public class DojoController {
	private final DojoService dojoService;
	
	public DojoController(DojoService dojoService) {
		this.dojoService = dojoService;
	}
	
    @RequestMapping("/")
    public String home() {
    	return "redirect:/dojos/new";
    }
    
    @RequestMapping(path="/dojos/new", method=RequestMethod.GET)
    public String newDojo(Model model) {
    	model.addAttribute("dojo", new Dojo());
    	return "newDojo";
    }
    
    @RequestMapping(path="/dojos/new", method=RequestMethod.POST)
    public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "newDojo";
        }
        else{
        	this.dojoService.newDojo(dojo);
        	return "redirect:/ninjas/new";
        }
    }

    @RequestMapping(path="/ninjas/new", method=RequestMethod.GET)
    public String newNinja(Model model) {
    	model.addAttribute("ninja", new Ninja());
    	model.addAttribute("dojos", this.dojoService.getAllDojos());
    	return "newNinja";
    }
    
    @RequestMapping(path="/ninjas/new", method=RequestMethod.POST)
    public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	model.addAttribute("dojos", this.dojoService.getAllDojos());
            return "newNinja";
        }
        else{
        	this.dojoService.newNinja(ninja);
        	return "redirect:/dojos/" + ninja.getDojo().getId();
        }
    }
    
    @RequestMapping(path="/dojos/{id}")
    public String dojo(@PathVariable("id") long id, Model model) {
    	model.addAttribute("dojo", this.dojoService.getDojoById(id));
    	return "dojo";
    }
	
}
