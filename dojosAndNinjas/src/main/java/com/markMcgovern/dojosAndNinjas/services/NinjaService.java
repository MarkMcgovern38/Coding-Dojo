package com.markMcgovern.dojosAndNinjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.markMcgovern.dojosAndNinjas.models.Ninjas;
import com.markMcgovern.dojosAndNinjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	@Autowired
	private NinjaRepository ninjaRepo;
	
//create
	public List<Ninjas> getAllNinja(){
		return ninjaRepo.findAll();
	}
	
	public Ninjas createNinja(Ninjas n) {
		
		return ninjaRepo.save(n);
	}

}
