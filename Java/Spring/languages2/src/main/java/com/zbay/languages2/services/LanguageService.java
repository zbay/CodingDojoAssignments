package com.zbay.languages2.services;

import java.util.List;
import com.zbay.languages2.repositories.LanguageRepository;

import org.springframework.stereotype.Service;

import com.zbay.languages2.models.Language;
 

@Service
public class LanguageService {
	private LanguageRepository languageRepository;
    
    public LanguageService(LanguageRepository languageRepository) {
    	this.languageRepository = languageRepository;
    }
	
    public List<Language> allLanguages(){
    	return languageRepository.findAll();
    }
    
    public void deleteLanguage(Long id) {
    	languageRepository.delete(id);
    }
    
    public void editLanguage(Language edited) {
    	languageRepository.save(edited);
    }
    
    public void newLanguage(Language newLang) {
    	languageRepository.save(newLang);
    }
    
    public Language getLanguageById(Long id) {
    	return languageRepository.findOne(id);
    }
}
