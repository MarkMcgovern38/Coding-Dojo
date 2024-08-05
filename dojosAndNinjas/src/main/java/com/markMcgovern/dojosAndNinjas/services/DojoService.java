package com.markMcgovern.dojosAndNinjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.markMcgovern.dojosAndNinjas.models.Dojo;
import com.markMcgovern.dojosAndNinjas.repositories.DojoRepository;


@Service
public class DojoService {
	
	@Autowired
	private DojoRepository dojoRepo;
	
//create
	public List<Dojo> getAllDojo(){
		return dojoRepo.findAll();
	}
	
	public Dojo createDojo(Dojo d) {
		
		return dojoRepo.save(d);
	}
	
	public Dojo getById(Long id) {
		Optional<Dojo>someDojo= dojoRepo.findById(id);
		
		if(someDojo.isEmpty()) {
		return null;
		}
		
		return someDojo.get();
	}


}
