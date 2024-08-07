package com.markMcgovern.safeTravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.markMcgovern.safeTravels.models.Travel;

public interface TravelRepository extends CrudRepository<Travel, Long> {
	
	public List<Travel>findAll();
	

}
