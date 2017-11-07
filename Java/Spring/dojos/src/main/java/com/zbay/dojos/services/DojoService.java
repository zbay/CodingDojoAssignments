package com.zbay.dojos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.dojos.models.Dojo;
import com.zbay.dojos.models.Ninja;
import com.zbay.dojos.repositories.DojoRepository;
import com.zbay.dojos.repositories.NinjaRepository;

@Service
public class DojoService {
	private DojoRepository dojoRepository;
	private NinjaRepository ninjaRepository;
	
	public DojoService(DojoRepository dojoRepository, NinjaRepository ninjaRepository){
		this.dojoRepository = dojoRepository;
		this.ninjaRepository = ninjaRepository;
	}
	
	public Dojo getDojoById(Long id) {
		return this.dojoRepository.findOne(id);
	}
	
	/*public List<Ninja> getNinjasByDojo(Long id) {
		return this.dojoRepository.findOne(id).getNinjas();
	}*/
	
	public void newDojo(Dojo dojo) {
		this.dojoRepository.save(dojo);
	}
	
	public void newNinja(Ninja ninja) {
		this.ninjaRepository.save(ninja);
	}
	
	public List<Dojo> getAllDojos(){
		return this.dojoRepository.findAll();
	}
}
