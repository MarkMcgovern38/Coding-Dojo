package com.markMcgovern.dojosAndNinjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.markMcgovern.dojosAndNinjas.models.Ninjas;

public interface NinjaRepository extends CrudRepository<Ninjas, Long> {
	
	public List<Ninjas>findAll();

}
