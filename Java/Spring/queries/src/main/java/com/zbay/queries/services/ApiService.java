package com.zbay.queries.services;

import org.springframework.stereotype.Service;

import com.zbay.queries.repositories.CityRepository;
import com.zbay.queries.repositories.CountryRepository;
import com.zbay.queries.repositories.LanguageRepository;

@Service
public class ApiService {

	private CountryRepository countryRepository;
	private LanguageRepository languageRepository;
	private CityRepository cityRepository;
	
	public ApiService(CountryRepository countryRepository, LanguageRepository languageRepository, CityRepository cityRepository) {
		this.countryRepository = countryRepository;
		this.languageRepository = languageRepository;
		this.cityRepository = cityRepository;
	}
}
