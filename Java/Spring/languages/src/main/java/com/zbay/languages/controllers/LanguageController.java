package com.zbay.languages.controllers;

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

import com.zbay.languages.models.Language;
import com.zbay.languages.services.LanguageService;

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

    @RequestMapping(path="/languages/{index}", method=RequestMethod.GET)
    public String language(Model model, @PathVariable("index") int index) {
        List<Language> languages = languageService.allLanguages();
    	if(index < languages.size()) {
            model.addAttribute("index", index);
            model.addAttribute("language", languages.get(index));
            return "language";
    	}
    	return "redirect:/languages";
    }
    
    @RequestMapping(path="/languages/delete/{index}", method=RequestMethod.GET)
    public String deleteLanguage(@PathVariable("index") int index) {
    	List<Language> languages = languageService.allLanguages();
    	if(index < languages.size()) {
    		this.languageService.deleteLangByIndex(index);	
    	}
    	return "redirect:/languages";
    }
    
    @RequestMapping(path="/languages/edit/{index}", method=RequestMethod.GET)
    public String editLanguage(Model model, @PathVariable("index") int index) {
        List<Language> languages = languageService.allLanguages();
        if(index < languages.size()) {
            model.addAttribute("index", index);
            model.addAttribute("language", languages.get(index));
            return "edit";	
        }
        return "languages";
    }
    
    @PostMapping("/languages/edit/{index}")
    public String editLanguageSubmit(@PathVariable("index") int index, @Valid @ModelAttribute("language") Language language, BindingResult result) {
    	List<Language> languages = languageService.allLanguages();
    	if(index < languages.size()) {
        	return "redirect:/languages";
        }
    	if (result.hasErrors()) {
            return "edit";
        }
        else {
        	this.languageService.editLanguage(index, language);
        	return "redirect:/languages/" + index;	
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
