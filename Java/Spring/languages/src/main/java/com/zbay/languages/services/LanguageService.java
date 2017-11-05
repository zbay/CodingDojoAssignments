package com.zbay.languages.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.languages.models.Language;

@Service
public class LanguageService {

    private List<Language> languages = new ArrayList<Language>(Arrays.asList(
            new Language("Python", "Guido van Rossum", "3.6"),
            new Language("Java", "James Gosling", "1.8"),
            new Language("JavaScript", "Brendan Eich", "1 2 3 4 5")
            ));
    
	
    public List<Language> allLanguages(){
    	return languages;
    }
    
    public void deleteLangByIndex(int index) {
    	languages.remove(index);
    }
    
    public void editLanguage(int index, Language edited) {
    	languages.set(index, edited);
    }
    
    public void newLanguage(Language newLang) {
    	languages.add(newLang);
    }
}
