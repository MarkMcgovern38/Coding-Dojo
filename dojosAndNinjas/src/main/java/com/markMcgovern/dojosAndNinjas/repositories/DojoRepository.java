package com.markMcgovern.dojosAndNinjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.markMcgovern.dojosAndNinjas.models.Dojo;



public interface DojoRepository extends CrudRepository<Dojo, Long>{

	public List<Dojo>findAll();

}
