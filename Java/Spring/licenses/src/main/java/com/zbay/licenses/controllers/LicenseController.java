package com.zbay.licenses.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zbay.licenses.models.License;
import com.zbay.licenses.models.Person;
import com.zbay.licenses.services.PersonService;


@Controller
public class LicenseController {
	private final PersonService personService;

	public LicenseController(PersonService personService) {
		this.personService = personService;
	}

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		dateFormat.setLenient(false);
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
	}

    @RequestMapping("/")
    public String home() {
    	return "redirect:/persons/new";
    }
    
    @RequestMapping(path="/persons/new", method=RequestMethod.GET)
    public String newPerson(Model model) {
    	model.addAttribute("person", new Person());
    	return "newPerson";
    }
    
    @RequestMapping(path="/persons/new", method=RequestMethod.POST)
    public String createPerson(@Valid @ModelAttribute("person") Person person, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "newPerson";
        }
        else{
        	this.personService.newPerson(person);
        	return "redirect:/licenses/new";
        }
    }
    
    @RequestMapping(path="/licenses/new", method=RequestMethod.GET)
    public String newLicense(Model model) {
    	model.addAttribute("persons", this.personService.getUnlicensedPersons());
    	model.addAttribute("license", new License());
    	return "newLicense";
    }
    
    @RequestMapping(path="/licenses/new", method=RequestMethod.POST)
    public String createLicense(@Valid @ModelAttribute("license") License license, BindingResult result, Model model) {
        if (result.hasErrors()) {
        	model.addAttribute("persons", this.personService.getUnlicensedPersons());
            return "newLicense";
        }
        else{
        	this.personService.newLicense(license);
        	long personID = license.getPerson().getId();
        	return "redirect:/persons/" + personID;
        } 	
    }
    
    @RequestMapping("/persons/{id}")
    public String person(@PathVariable("id") long id, Model model) {
    	Person person = this.personService.getPersonById(id);
    	model.addAttribute("person", person);
    	return "person";
    }
}
