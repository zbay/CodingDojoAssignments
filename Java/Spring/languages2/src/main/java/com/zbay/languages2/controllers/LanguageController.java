package com.zbay.languages2.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zbay.languages2.models.Language;
import com.zbay.languages2.services.LanguageService;

@Controller
public class LanguageController {
    private final LanguageService languageService;
    
    public LanguageController(LanguageService languageService){
        this.languageService = languageService;
    }
 
    @RequestMapping("/")
    public String home() {
    	return "redirect:/languages";
    }
    
    @RequestMapping("/languages")
    public String languages(Model model) {
        List<Language> languages = languageService.allLanguages();
        model.addAttribute("languages", languages);
        model.addAttribute("language", new Language());
        return "languages";
    }

    @RequestMapping(path="/languages/{id}", method=RequestMethod.GET)
    public String language(Model model, @PathVariable("id") long id) {
        Language language = languageService.getLanguageById(id);
        model.addAttribute("language", language);
        return "language";
    }
    
    @RequestMapping(path="/languages/delete/{id}", method=RequestMethod.GET)
    public String deleteLanguage(@PathVariable("id") long id) {
    	this.languageService.deleteLanguage(id);
    	return "redirect:/languages";
    }
    
    @RequestMapping(path="/languages/edit/{id}", method=RequestMethod.GET)
    public String editLanguage(Model model, @PathVariable("id") long id) {
    	Language language = languageService.getLanguageById(id);
        model.addAttribute("language", language);
        return "edit";
    }
    
    @PostMapping("/languages/edit/{id}")
    public String editLanguageSubmit(@PathVariable("id") long id, @Valid @ModelAttribute("language") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "edit";
        }
        else {
        	this.languageService.editLanguage(language);
        	return "redirect:/languages/" + id;	
        }
    }
  
    @PostMapping("/languages")
    public String newLanguage(@Valid @ModelAttribute("language") Language language, BindingResult result, Model model) {
        List<Language> languages = languageService.allLanguages();
        model.addAttribute("languages", languages);
        if (result.hasErrors()) {
            return "languages";
        }
        else{
        	this.languageService.newLanguage(language);
        	return "redirect:/languages";
        }
    }
}
