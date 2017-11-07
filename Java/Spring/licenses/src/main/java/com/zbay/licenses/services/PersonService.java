package com.zbay.licenses.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.licenses.models.License;
import com.zbay.licenses.models.Person;
import com.zbay.licenses.repositories.LicenseRepository;
import com.zbay.licenses.repositories.PersonRepository;

@Service
public class PersonService {
	private PersonRepository personRepository;
	private LicenseRepository licenseRepository;
	
    public PersonService(PersonRepository personRepository, LicenseRepository licenseRepository) {
    	this.personRepository = personRepository;
    	this.licenseRepository = licenseRepository;
    }
    
    public List<Person> getUnlicensedPersons(){
    	return this.personRepository.findAllUnlicensedPersons();
    }
    
    public Person getPersonById(Long id) {
    	return this.personRepository.findOne(id);
    }
    
    public void newPerson(Person person) {
    	this.personRepository.save(person);
    }
    
    public void newLicense(License license) {
    	Long personId = license.getPerson().getId();
    	String licenseNumber = String.format("%06d", personId);
    	license.setNumber(licenseNumber);
    	this.licenseRepository.save(license);
    }
    
}
